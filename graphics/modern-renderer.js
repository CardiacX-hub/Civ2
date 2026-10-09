/** Live-geometry pipeline. This module is a migration kit / rendering lab;
 * sprite matches use visual-quality.js, because sprites have no normal/depth buffers. */
import * as THREE from 'three';
import {CSM} from 'three/addons/csm/CSM.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {BokehPass} from 'three/addons/postprocessing/BokehPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {SMAAPass} from 'three/addons/postprocessing/SMAAPass.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createTerrainMaterial} from './terrain-material.js';
export {createTerrainMaterial};
export {AnimationMixer,Matrix4,Vector3} from 'three';
export const presets={low:{dpr:1,shadow:1024,cascades:2,distance:180,ao:false,bloom:false},balanced:{dpr:1.25,shadow:2048,cascades:3,distance:260,ao:true,bloom:true},high:{dpr:1.5,shadow:4096,cascades:4,distance:350,ao:true,bloom:true}};
export function createPipeline(canvas,{quality='balanced',cinematic=false,cameraType='perspective'}={}){
 const p=presets[quality]||presets.balanced;
 const renderer=new THREE.WebGLRenderer({canvas,antialias:false,powerPreference:'high-performance'});
 // Quality presets budget the actual render resolution, including 1× desktop
 // displays. Never reduce the drawing buffer just because the camera zooms out.
 renderer.setPixelRatio(p.dpr);
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
 renderer.info.autoReset=false;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const scene=new THREE.Scene();scene.background=new THREE.Color('#607e89');scene.fog=new THREE.Fog('#607e89',200,500);const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;scene.environmentIntensity=.35;room.dispose();pmrem.dispose();
 const camera=cameraType==='orthographic'?new THREE.OrthographicCamera(-50,50,40,-40,.5,600):new THREE.PerspectiveCamera(42,1,.5,600);camera.position.set(90,100,145);camera.lookAt(0,15,0);
 // Hemisphere light provides restrained fill; the sun remains the dominant source.
 scene.add(new THREE.HemisphereLight(0xc7e3ff,0x4a4333,1.1));
 const csm=new CSM({camera,parent:scene,cascades:p.cascades,maxFar:p.distance,mode:'practical',shadowMapSize:Math.min(p.shadow,renderer.capabilities.maxTextureSize),lightDirection:new THREE.Vector3(-1,-1,-.5).normalize(),lightIntensity:3.1,lightNear:1,lightFar:650,shadowBias:-.0002});
 csm.fade=true;for(const light of csm.lights){light.shadow.normalBias=.025;light.color.set(0xffecd0);}
 const target=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType});
 // Resolve subpixel wing edges, foliage and roof trim before screen-space AA.
 target.samples=Math.min(quality==='low'?2:4,renderer.capabilities.maxSamples||0);
 const composer=new EffectComposer(renderer,target);composer.addPass(new RenderPass(scene,camera));
 const ao=new GTAOPass(scene,camera,1,1);ao.enabled=p.ao;ao.blendIntensity=.65;ao.updateGtaoMaterial({radius:3,distanceExponent:1.8,thickness:1});composer.addPass(ao);
 const bloom=new UnrealBloomPass(new THREE.Vector2(1,1),.12,.35,1.2);bloom.enabled=p.bloom;composer.addPass(bloom);
 // DOF is deliberately off in RTS play. Enable only for a menu/cinematic camera.
 const dof=new BokehPass(scene,camera,{focus:160,aperture:.000015,maxblur:.006});dof.enabled=cinematic;composer.addPass(dof);
 composer.addPass(new OutputPass());const aa=new SMAAPass();composer.addPass(aa);
 const weather={wetness:{value:0},weathering:{value:.12},rimStrength:{value:.12}};
 const trackedMaterials=new Set(),emitters=[],casterPosition=new THREE.Vector3();let width=0,height=0;
 function prepareMaterial(material,{sss=0,rim=.12}={}){
  if(!material?.isMeshStandardMaterial||trackedMaterials.has(material))return material;
  trackedMaterials.add(material);material.userData.visual={sss,rim};
  // Preserve mortar and roof detail at grazing camera angles with capped filtering.
  for(const map of [material.map,material.normalMap,material.roughnessMap])if(map){map.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),quality==='low'?2:8);map.needsUpdate=true;}
  material.roughness=THREE.MathUtils.clamp(material.roughness,.08,1);
  csm.setupMaterial(material);const csmCompile=material.onBeforeCompile;
  material.onBeforeCompile=shader=>{
   csmCompile(shader);Object.assign(shader.uniforms,{wetness:weather.wetness,weathering:weather.weathering,rimStrength:weather.rimStrength,sssStrength:{value:sss},assetRim:{value:rim}});
   shader.vertexShader='varying vec3 visualWorld;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','visualWorld=(modelMatrix*vec4(transformed,1.0)).xyz;\n#include <project_vertex>');
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
 async function loadAsset(url){const gltf=await new GLTFLoader().loadAsync(url);prepare(gltf.scene);return gltf;}
 function addLOD(levels){const lod=new THREE.LOD();for(const {object,distance} of levels)lod.addLevel(object,distance);prepare(lod);return lod;}
 function addInstances(geometry,material,matrices){prepareMaterial(material);const mesh=new THREE.InstancedMesh(geometry,material,matrices.length);matrices.forEach((m,i)=>mesh.setMatrixAt(i,m));mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();return prepare(mesh);}
 function emissiveLight(position,color,intensity=8,distance=30){if(emitters.length>=8)return null;const light=new THREE.PointLight(color,intensity,distance,2);light.position.copy(position);light.castShadow=false;scene.add(light);emitters.push(light);return light;}
 function resize(){const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight);if(w===width&&h===height)return;width=w;height=h;renderer.setSize(w,h,false);composer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();csm.updateFrustums();}
 function render(){renderer.info.reset();resize();scene.traverse(o=>{if(o.isMesh&&o.visible){o.getWorldPosition(casterPosition);o.castShadow=!o.userData.noShadow&&casterPosition.distanceTo(camera.position)<p.distance;}});csm.update();for(const e of emitters)e.visible=e.position.distanceTo(camera.position)<p.distance;composer.render();}
 function dispose(){csm.remove();csm.dispose();const textures=new Set();for(const m of trackedMaterials){for(const value of Object.values(m))if(value?.isTexture)textures.add(value);m.dispose();}for(const t of textures)t.dispose();scene.traverse(o=>{o.geometry?.dispose();if(o.isSkinnedMesh)o.skeleton.dispose();});for(const pass of composer.passes)pass.dispose?.();composer.dispose();environment.dispose();renderer.dispose();}
 return {renderer,scene,camera,csm,effects:{ao,bloom,dof,aa},weather,prepare,prepareMaterial,loadAsset,addLOD,addInstances,emissiveLight,render,resize,dispose};
}
/** Original calibration scene: shaded armor, foliage, instanced trees and wet ground. */
export function createDemo(canvas,options){const p=createPipeline(canvas,options),metal=new THREE.MeshPhysicalMaterial({color:0xadb8bd,metalness:.9,roughness:.3,clearcoat:.2});
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(500,500),createTerrainMaterial(p));ground.rotation.x=-Math.PI/2;p.prepare(ground);
 const unit=new THREE.Group();const body=new THREE.Mesh(new THREE.CapsuleGeometry(8,18,6,12),metal);body.position.y=25;unit.add(body);const shield=new THREE.Mesh(new THREE.BoxGeometry(12,21,3),new THREE.MeshStandardMaterial({color:0x284879,metalness:.5,roughness:.4}));shield.position.set(-12,24,8);unit.add(shield);p.prepare(unit);
 const treeGeo=new THREE.ConeGeometry(10,32,8),treeMat=new THREE.MeshStandardMaterial({color:0x427143,roughness:.9});const matrices=[];for(let i=0;i<40;i++){const a=i*2.4,r=45+i%6*15;matrices.push(new THREE.Matrix4().makeTranslation(Math.cos(a)*r,16,Math.sin(a)*r));}p.addInstances(treeGeo,treeMat,matrices);
 const orb=new THREE.Mesh(new THREE.SphereGeometry(4,16,12),new THREE.MeshStandardMaterial({color:0xff7722,emissive:0xff7722,emissiveIntensity:4}));orb.position.set(18,13,20);p.prepare(orb);p.emissiveLight(orb.position,0xff7722,80,40);
 let frame=0,stopped=false;function animate(t){if(stopped)return;unit.rotation.y=Math.sin(t*.0002)*.3;p.render();frame=requestAnimationFrame(animate);}frame=requestAnimationFrame(animate);return {...p,stop(){stopped=true;cancelAnimationFrame(frame);p.dispose();}};
}
