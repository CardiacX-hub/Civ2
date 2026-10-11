/** Original river shading: advected ripples, Fresnel reflections and moving foam.
 * Reuses the scene's PBR environment; no extra scene capture or render pass. */
export function prepareRiver(material,time){
 const compile=material.onBeforeCompile,key=material.customProgramCacheKey;
 material.onBeforeCompile=shader=>{compile(shader);shader.uniforms.riverTime=time;
 shader.fragmentShader='uniform float riverTime;\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
 vec2 flow=visualWorld.xz+vec2(0.,-riverTime*1.3);
 float ripple=sin(flow.y*2.7+sin(flow.x*1.31))*cos(flow.x*3.17+riverTime*.6);
 float chop=sin(flow.x*5.13+flow.y*4.71+riverTime*.83);
 normal=normalize(normal+vec3(ripple*.032+chop*.011,0.,sin(flow.y*3.19+cos(flow.x*2.37))*.027));
 `);
 shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
 roughnessFactor=clamp(.20+abs(sin(visualWorld.z*3.2-riverTime*4.16))* .10,.18,.32);
 `);
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 float current=sin(visualWorld.z*2.4-riverTime*3.2+sin(visualWorld.x*4.));
 float foam=pow(max(0.,current),22.)*.035;
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.65,.85,.88),foam);
 `);};material.customProgramCacheKey=()=>key()+':river-flow-v2';material.needsUpdate=true;
}
