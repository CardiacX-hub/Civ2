import * as THREE from 'three';
import {applyDeformation} from './vertex-deformation.js';
/** Linear normals/reflectivity + hardware depth. Water-free depth is captured
 * separately for shoreline fading and reflection hits. No CPU pixel readback.
 * Cached override materials retain alpha cutouts, normals, skinning and wind.
 * Restore every scene/material/render state even if a render throws. */
export function createRenderBuffers(renderer,scene,camera){
 const makeTarget=()=>{const target=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,depthBuffer:true});target.depthTexture=new THREE.DepthTexture(1,1,THREE.UnsignedIntType);target.texture.generateMipmaps=false;return target;};
 const surface=makeTarget(),opaque=makeTarget(),cache=new Map(),saved=[];let frame=0;
 function override(source,depth){const key=source.uuid+':'+depth;if(cache.has(key)){const entry=cache.get(key);entry.used=frame;return entry.material;}
  const material=depth?new THREE.MeshDepthMaterial({depthPacking:THREE.BasicDepthPacking}):new THREE.MeshNormalMaterial({normalMap:source.normalMap,normalScale:source.normalScale?.clone(),bumpMap:source.bumpMap,bumpScale:source.bumpScale});
  material.side=source.side;material.flatShading=!!source.userData.kawWater||!!source.flatShading;material.alphaMap=source.alphaMap;material.alphaTest=source.alphaTest;material.map=source.map;material.blending=THREE.NoBlending;material.toneMapped=false;material.fog=false;
  const reflectivity=source.userData.kawWater?.65:Math.max(0,Math.min(.6,(source.metalness||0)*(1-(source.roughness??1))));
  material.onBeforeCompile=shader=>{applyDeformation(shader,source.userData.vertexDeformation);if(!depth){shader.fragmentShader=shader.fragmentShader.replace('#include <uv_pars_fragment>','#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>').replace('#include <normal_fragment_begin>','#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>').replace('gl_FragColor.a = 1.0;',`gl_FragColor.a = ${reflectivity.toFixed(4)};`);}};
  material.customProgramCacheKey=()=>`buffer:${depth}:${reflectivity}:${source.userData.vertexDeformation?.key||'rigid'}`;
  cache.set(key,{material,used:frame});return material;
 }
 function capture(includeSurface=true){frame++;if(frame%300===0)for(const [key,entry]of cache)if(frame-entry.used>300){entry.material.dispose();cache.delete(key);}const target=renderer.getRenderTarget(),background=scene.background,overrideMaterial=scene.overrideMaterial,clear=new THREE.Color();renderer.getClearColor(clear);const alpha=renderer.getClearAlpha(),auto=renderer.autoClear,shadows=renderer.shadowMap.autoUpdate,xr=renderer.xr.enabled;
  saved.length=0;try{scene.background=null;scene.overrideMaterial=null;renderer.xr.enabled=false;renderer.autoClear=true;renderer.shadowMap.autoUpdate=false;
   scene.traverse(o=>{if(!o.isMesh)return;const sources=Array.isArray(o.material)?o.material:[o.material];saved.push([o,o.material,o.visible]);if(sources.some(m=>m.transparent&&!m.userData.kawWater))o.visible=false;o.material=sources.map(m=>override(m,true));if(!Array.isArray(saved.at(-1)[1]))o.material=o.material[0];if(sources.some(m=>m.userData.kawWater))o.visible=false;});
   renderer.setRenderTarget(opaque);renderer.setClearColor(0xffffff,1);renderer.clear();renderer.render(scene,camera);
   if(includeSurface){for(const [o,original,visible]of saved){const sources=Array.isArray(original)?original:[original];o.visible=visible&&!sources.some(m=>m.transparent&&!m.userData.kawWater);o.material=Array.isArray(original)?sources.map(m=>override(m,false)):override(original,false);}renderer.setRenderTarget(surface);renderer.setClearColor(0x8080ff,0);renderer.clear();renderer.render(scene,camera);}
  }finally{for(const [o,material,visible]of saved){o.material=material;o.visible=visible;}scene.background=background;scene.overrideMaterial=overrideMaterial;renderer.setRenderTarget(target);renderer.setClearColor(clear,alpha);renderer.autoClear=auto;renderer.shadowMap.autoUpdate=shadows;renderer.xr.enabled=xr;}
 }
 function resize(w,h){opaque.setSize(w,h);surface.setSize(w,h);}
 function dispose(){opaque.dispose();surface.dispose();for(const entry of cache.values())entry.material.dispose();cache.clear();}
 return {surface,opaque,capture,resize,dispose};
}
