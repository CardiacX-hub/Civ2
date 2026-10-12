/** Live battlefield HDR pipeline. Screen-space effects require actual geometry;
 * the optional classic sprite renderer continues to use visual-quality.js. */
import * as THREE from 'three';
import {lightingStandard,surfaceStandard} from './appearance-standards.js';
import {CSM} from 'three/addons/csm/CSM.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {ResolvedScenePass} from './resolved-scene-pass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {BokehPass} from 'three/addons/postprocessing/BokehPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {SMAAPass} from 'three/addons/postprocessing/SMAAPass.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createRenderBuffers} from './render-buffers.js';
import {createReflectionPass,createAtmospherePass} from './screen-effects.js';
import {createTerrainMaterial} from './terrain-material.js';
export {createTerrainMaterial};
export {AnimationMixer,Matrix4,Vector3} from 'three';
export const presets={low:{dpr:1,shadow:1024,cascades:2,distance:180,ao:false,bloom:false},balanced:{dpr:1.25,shadow:2048,cascades:3,distance:260,ao:true,bloom:true},high:{dpr:2,shadow:4096,cascades:4,distance:350,ao:true,bloom:true}};
export function createPipeline(canvas,{quality='balanced',cinematic=false,cameraType='perspective'}={}){
 const p={...(presets[quality]||presets.balanced)};const detail=globalThis.KawGraphicsDetail?.settings||{};if(detail.shadows==='low'){p.shadow=1024;p.distance=180;}if(detail.shadows==='medium'){p.shadow=2048;p.distance=260;}if(detail.effects===false){p.ao=false;p.bloom=false;}
 const renderer=new THREE.WebGLRenderer({canvas,antialias:false,powerPreference:'high-performance'});
 // Quality presets budget the actual render resolution, including 1× desktop
 // displays. Never reduce the drawing buffer just because the camera zooms out.
 // Evaluate the pixel budget at resize, once the battlefield canvas is visible.
 // Startup occurs while it is hidden; clientWidth/clientHeight are then zero.
 const preferredDpr=Math.max(p.dpr,quality==='low'?1:Math.min(2,globalThis.devicePixelRatio||1));
 const ratioFor=(w,h)=>Math.min(preferredDpr,Math.max(1,Math.sqrt(8000000/Math.max(1,w*h))));
 p.dpr=ratioFor(canvas.clientWidth,canvas.clientHeight);renderer.setPixelRatio(p.dpr);
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=lightingStandard.exposure;
 renderer.info.autoReset=false;renderer.shadowMap.enabled=detail.shadows!=='off';renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 // All passes share one evaluated transform tree per frame.
 const scene=new THREE.Scene();scene.matrixWorldAutoUpdate=false;scene.background=new THREE.Color('#607e89');scene.fog=new THREE.Fog('#607e89',200,500);const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;scene.environmentIntensity=lightingStandard.environment;room.dispose();pmrem.dispose();
 const camera=cameraType==='orthographic'?new THREE.OrthographicCamera(-50,50,40,-40,.5,600):new THREE.PerspectiveCamera(42,1,.5,600);camera.position.set(90,100,145);camera.lookAt(0,15,0);
 // Hemisphere light provides restrained fill; the sun remains the dominant source.
 scene.add(new THREE.HemisphereLight(0xc7e3ff,0x4a4333,lightingStandard.fill));
 const csm=new CSM({camera,parent:scene,cascades:p.cascades,maxFar:p.distance,mode:'practical',shadowMapSize:Math.min(p.shadow,renderer.capabilities.maxTextureSize),lightDirection:new THREE.Vector3(-1,-1,-.5).normalize(),lightIntensity:lightingStandard.sun,lightNear:1,lightFar:650,shadowBias:-.0002});
 csm.fade=true;for(const light of csm.lights){light.shadow.normalBias=.025;light.color.set(0xffecd0);}
 // Preserve scene-edge MSAA, but do not multisample fullscreen effects.
 const target=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,depthBuffer:false});
 const composer=new EffectComposer(renderer,target),scenePass=new ResolvedScenePass(scene,camera,Math.min(quality==='low'?2:4,renderer.capabilities.maxSamples||0));composer.addPass(scenePass);
 const ao=new GTAOPass(scene,camera,1,1);const resizeAO=ao.setSize.bind(ao);ao.setSize=(w,h)=>resizeAO(Math.max(1,Math.ceil(w/2)),Math.max(1,Math.ceil(h/2))); ao.enabled=p.ao;ao.blendIntensity=.65;ao.updateGtaoMaterial({radius:3,distanceExponent:1.8,thickness:1});composer.addPass(ao);
 const buffers=createRenderBuffers(renderer,scene,camera),resolution={value:new THREE.Vector2(1,1)};
 const reflections=createReflectionPass(buffers,camera,{steps:quality==='high'?32:16});reflections.enabled=detail.reflections===true;composer.addPass(reflections);
 const atmosphere=createAtmospherePass(buffers,camera,csm,{steps:quality==='high'?12:6,density:.0008});atmosphere.enabled=detail.atmosphere===true;composer.addPass(atmosphere);
 const bloom=new UnrealBloomPass(new THREE.Vector2(1,1),.12,.35,1.2);bloom.enabled=p.bloom;composer.addPass(bloom);
 // DOF is opt-in: keep the overhead competitive camera sharp by default.
 const dof=new BokehPass(scene,camera,{focus:160,aperture:.000015,maxblur:.006});dof.enabled=cinematic&&detail.dof===true;composer.addPass(dof);
 composer.addPass(new OutputPass());const aa=new SMAAPass();composer.addPass(aa);
 const weather={windTime:{value:0},wetness:{value:0},weathering:{value:.12},rimStrength:{value:.12}};
 const trackedMaterials=new Set(),emitters=[],casterPosition=new THREE.Vector3();let width=0,height=0;
 function prepareMaterial(material,{sss=0,rim=.12}={}){
  if(!material?.isMeshStandardMaterial||trackedMaterials.has(material))return material;
  trackedMaterials.add(material);if(material.map)material.map.anisotropy=detail.textures==='high'?Math.min(8,renderer.capabilities.getMaxAnisotropy()):2;material.userData.visual={sss,rim};
  // Preserve mortar and roof detail at grazing camera angles with capped filtering.
  for(const map of [material.map,material.normalMap,material.roughnessMap])if(map){map.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),quality==='low'?2:8);map.needsUpdate=true;}
  surfaceStandard(material);material.roughness=THREE.MathUtils.clamp(material.roughness,.08,1);
  csm.setupMaterial(material);const csmCompile=material.onBeforeCompile;
  material.onBeforeCompile=shader=>{
   csmCompile(shader);Object.assign(shader.uniforms,{wetness:weather.wetness,weathering:weather.weathering,rimStrength:weather.rimStrength,sssStrength:{value:sss},assetRim:{value:rim}});
   shader.vertexShader='varying vec3 visualWorld;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','vec4 visualPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nvisualPosition=instanceMatrix*visualPosition;\n#endif\nvisualWorld=(modelMatrix*visualPosition).xyz;\n#include <project_vertex>');
   shader.fragmentShader='varying vec3 visualWorld; uniform float wetness,weathering,rimStrength,sssStrength,assetRim;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,max(.08,roughnessFactor*.45),wetness);');
   shader.fragmentShader=shader.fragmentShader.replace('#include <metalnessmap_fragment>','#include <metalnessmap_fragment>\nfloat wear=weathering*metalnessFactor*(.5+.5*sin(visualWorld.x*.37+sin(visualWorld.z*.71)));metalnessFactor*=1.-wear;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.23,.095,.035),wear*.3);diffuseColor.rgb*=1.-wetness*.12;');
   // View-space normal and view vector; restrained rim avoids full-screen outlines.
   // Thin-surface wrap is an approximation for leaves/skin, not volumetric SSS.
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','float edge=pow(1.-max(0.,dot(normal,normalize(vViewPosition))),3.);outgoingLight+=vec3(.5,.63,.67)*edge*assetRim*rimStrength*8.;outgoingLight+=diffuseColor.rgb*sssStrength*.12*(1.-max(0.,normal.y));\n#include <opaque_fragment>');
  };
  material.customProgramCacheKey=()=>`visual-v1-${sss}-${rim}-${p.cascades}`;material.needsUpdate=true;return material;
 }
 function prepare(root){root.traverse(o=>{if(!o.isMesh)return;o.castShadow=true;o.receiveShadow=true;for(const m of Array.isArray(o.material)?o.material:[o.material])prepareMaterial(m,{sss:m.userData.kawThinSurface||o.userData.sss||0});});scene.add(root);return root;}
 async function loadAsset(url,{attach=true}={}){const gltf=await new GLTFLoader().loadAsync(url);prepare(gltf.scene);if(!attach)gltf.scene.removeFromParent();return gltf;}
 function addLOD(levels){const lod=new THREE.LOD();for(const {object,distance} of levels)lod.addLevel(object,distance);prepare(lod);return lod;}
 function addInstances(geometry,material,matrices){prepareMaterial(material);const mesh=new THREE.InstancedMesh(geometry,material,matrices.length);matrices.forEach((m,i)=>mesh.setMatrixAt(i,m));mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();return prepare(mesh);}
 function emissiveLight(position,color,intensity=8,distance=30){if(emitters.length>=8)return null;const light=new THREE.PointLight(color,intensity,distance,2);light.position.copy(position);light.castShadow=false;scene.add(light);emitters.push(light);return light;}
 function resize(){const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight);if(w===width&&h===height)return;width=w;height=h;shadowAt=depthAt=-Infinity;const ratio=ratioFor(w,h);if(ratio!==p.dpr){if(ratio>p.dpr)renderer.setSize(w,h,false);p.dpr=ratio;renderer.setPixelRatio(ratio);composer.setPixelRatio(ratio);}renderer.setSize(w,h,false);composer.setSize(w,h);resolution.value.set(canvas.width,canvas.height);buffers.resize(Math.max(1,Math.round(canvas.width*.5)),Math.max(1,Math.round(canvas.height*.5)));camera.aspect=w/h;camera.updateProjectionMatrix();csm.updateFrustums();}
 // Shadow and shoreline-depth buffers use a bounded 30 Hz refresh. Camera changes
 // refresh immediately; textures, model geometry and the main render stay full quality.
 let shadowAt=-Infinity,depthAt=-Infinity,lastSceneCount=-1,waterVisible=null;const cameraStamp=new THREE.Matrix4(),projectionStamp=new THREE.Matrix4();
 function render(time=0){weather.windTime.value=globalThis.KawHUD?.settings.reduced||globalThis.KawExperience?.settings.grass===false?0:time;bloom.enabled=p.bloom&&window.KawHUD?.settings.reduced!==true;renderer.info.reset();resize();renderer.shadowMap.enabled=detail.shadows!=='off'&&globalThis.KawExperience?.settings.shadows!==false;camera.updateMatrixWorld();csm.update();scene.updateMatrixWorld();const changed=!cameraStamp.equals(camera.matrixWorld)||!projectionStamp.equals(camera.projectionMatrix)||lastSceneCount!==scene.children.length;const refresh=changed||time<shadowAt||time-shadowAt>=1/30;renderer.shadowMap.autoUpdate=refresh;if(refresh){shadowAt=time;scene.traverse(o=>{if(o.isMesh&&o.visible){casterPosition.setFromMatrixPosition(o.matrixWorld);o.castShadow=!o.userData.noShadow&&casterPosition.distanceTo(camera.position)<p.distance;}});}cameraStamp.copy(camera.matrixWorld);projectionStamp.copy(camera.projectionMatrix);lastSceneCount=scene.children.length;for(const e of emitters)e.visible=e.position.distanceTo(camera.position)<p.distance;if(reflections.enabled||atmosphere.enabled||(waterVisible??[...trackedMaterials].some(m=>m.userData.kawWater))){if(reflections.enabled||changed||time<depthAt||time-depthAt>=1/30){buffers.capture(reflections.enabled);depthAt=time;}}atmosphere.update(time,renderer.shadowMap.enabled);composer.render();}
 function dispose(){scene.traverse(o=>{if(o.isMesh)for(const m of Array.isArray(o.material)?o.material:[o.material])trackedMaterials.add(m);});buffers.dispose();csm.remove();csm.dispose();const textures=new Set();for(const m of trackedMaterials){for(const value of Object.values(m))if(value?.isTexture)textures.add(value);for(const t of m.userData.ownedTextures||[])textures.add(t);m.dispose();}for(const t of textures)t.dispose();scene.traverse(o=>{if(o.geometry?.userData.lowDetail&&o.geometry.userData.lowDetail!==o.geometry)o.geometry.userData.lowDetail.dispose();o.geometry?.dispose();o.customDepthMaterial?.dispose();if(o.isSkinnedMesh)o.skeleton.dispose();});for(const pass of composer.passes)pass.dispose?.();composer.dispose();environment.dispose();renderer.dispose();}
 return {renderer,scene,camera,csm,scenePass,get renderBudget(){return {sceneSamples:scenePass.target.samples,postSamples:composer.renderTarget1.samples,scenePixels:scenePass.target.width*scenePass.target.height,aoPixels:ao.width*ao.height};},setWaterVisible(value){waterVisible=!!value;},effects:{ao,reflections,atmosphere,bloom,dof,aa},buffers,resolution,setSun({direction,intensity,color}={}){if(direction?.lengthSq()>1e-8)csm.lightDirection.copy(direction).normalize();for(const light of csm.lights){if(intensity!==undefined)light.intensity=Math.max(0,intensity);if(color!==undefined)light.color.set(color);}atmosphere.uniforms.sunDirection.value.copy(csm.lightDirection).negate();if(color!==undefined)atmosphere.uniforms.sunColor.value.set(color);csm.update();shadowAt=-Infinity;},setDepthOfField({enabled=false,focus=160,aperture=.000015,maxblur=.006}={}){dof.enabled=cinematic&&enabled;dof.uniforms.focus.value=Math.max(.5,focus);dof.uniforms.aperture.value=THREE.MathUtils.clamp(aperture,0,.0001);dof.uniforms.maxblur.value=THREE.MathUtils.clamp(maxblur,0,.015);},weather,prepare,prepareMaterial,loadAsset,addLOD,addInstances,emissiveLight,render,resize,dispose};
}
/** Original calibration scene: shaded armor, foliage, instanced trees and wet ground. */
export function createDemo(canvas,options){const p=createPipeline(canvas,options),metal=new THREE.MeshPhysicalMaterial({color:0xadb8bd,metalness:.9,roughness:.3,clearcoat:.2});
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(500,500),createTerrainMaterial(p));ground.rotation.x=-Math.PI/2;p.prepare(ground);
 const unit=new THREE.Group();const body=new THREE.Mesh(new THREE.CapsuleGeometry(8,18,6,12),metal);body.position.y=25;unit.add(body);const shield=new THREE.Mesh(new THREE.BoxGeometry(12,21,3),new THREE.MeshStandardMaterial({color:0x284879,metalness:.5,roughness:.4}));shield.position.set(-12,24,8);unit.add(shield);p.prepare(unit);
 const treeGeo=new THREE.ConeGeometry(10,32,8),treeMat=new THREE.MeshStandardMaterial({color:0x427143,roughness:.9});const matrices=[];for(let i=0;i<40;i++){const a=i*2.4,r=45+i%6*15;matrices.push(new THREE.Matrix4().makeTranslation(Math.cos(a)*r,16,Math.sin(a)*r));}p.addInstances(treeGeo,treeMat,matrices);
 const orb=new THREE.Mesh(new THREE.SphereGeometry(4,16,12),new THREE.MeshStandardMaterial({color:0xff7722,emissive:0xff7722,emissiveIntensity:4}));orb.position.set(18,13,20);p.prepare(orb);p.emissiveLight(orb.position,0xff7722,80,40);
 let frame=0,stopped=false;function animate(t){if(stopped)return;unit.rotation.y=Math.sin(t*.0002)*.3;p.render(t/1000);frame=requestAnimationFrame(animate);}frame=requestAnimationFrame(animate);return {...p,stop(){stopped=true;cancelAnimationFrame(frame);p.dispose();}};
}
