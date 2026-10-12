/** Multisample geometry once, then process the resolved HDR image.
 * Fullscreen post effects do not need multisampled color/depth buffers. Keeping
 * them single-sample avoids repeated resolves and large duplicate GPU buffers. */
import * as T from 'three';
import {Pass,FullScreenQuad} from 'three/addons/postprocessing/Pass.js';
import {CopyShader} from 'three/addons/shaders/CopyShader.js';
export class ResolvedScenePass extends Pass{
 constructor(scene,camera,samples){
  super();this.scene=scene;this.camera=camera;this.needsSwap=false;
  this.target=new T.WebGLRenderTarget(1,1,{type:T.HalfFloatType,depthBuffer:true});this.target.samples=samples;
  this.uniforms=T.UniformsUtils.clone(CopyShader.uniforms);this.uniforms.tDiffuse.value=this.target.texture;
  this.material=new T.ShaderMaterial({uniforms:this.uniforms,vertexShader:CopyShader.vertexShader,fragmentShader:CopyShader.fragmentShader,depthTest:false,depthWrite:false,toneMapped:false});this.quad=new FullScreenQuad(this.material);
 }
 setSize(w,h){this.target.setSize(w,h);}
 render(renderer,writeBuffer,readBuffer){const autoClear=renderer.autoClear;try{
  renderer.autoClear=false;renderer.setRenderTarget(this.target);renderer.clear();renderer.render(this.scene,this.camera);
  renderer.setRenderTarget(this.renderToScreen?null:readBuffer);this.quad.render(renderer);
 }finally{renderer.autoClear=autoClear;}}
 dispose(){this.target.dispose();this.material.dispose();this.quad.dispose();}
}
