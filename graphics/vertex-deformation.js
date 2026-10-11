import {MeshDepthMaterial,RGBADepthPacking} from 'three';
/** A shared vertex-only hook keeps beauty, depth and normal passes in the same
 * pose. Declarations/code must be GLSL compatible with all three shader types. */
export function applyDeformation(shader,deformation){
 if(!deformation)return;Object.assign(shader.uniforms,deformation.uniforms);
 shader.vertexShader=deformation.declarations+'\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n'+deformation.code);
}
export function attachDeformation(material,deformation){
 const compile=material.onBeforeCompile,key=material.customProgramCacheKey;
 material.userData.vertexDeformation=deformation;
 material.onBeforeCompile=shader=>{compile.call(material,shader);applyDeformation(shader,deformation);};
 material.customProgramCacheKey=()=>key.call(material)+':'+deformation.key;material.needsUpdate=true;
}

/** CSM uses customDepthMaterial for animated shadow silhouettes. */
export function attachShadowDeformation(mesh){
 const source=Array.isArray(mesh.material)?mesh.material[0]:mesh.material;
 if(!source?.userData.vertexDeformation)return;
 const depth=new MeshDepthMaterial({depthPacking:RGBADepthPacking,side:source.side,map:source.map,alphaMap:source.alphaMap,alphaTest:source.alphaTest});
 attachDeformation(depth,source.userData.vertexDeformation);mesh.customDepthMaterial=depth;
}
