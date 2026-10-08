import * as THREE from 'three';
/** Vertex normals provide slope; world-space masks avoid seams between chunks.
 * Replace the procedural path mask with your own authored splat texture if needed. */
export function createTerrainMaterial(pipeline,{grass=0x4a6436,dirt=0x79664e,rock=0x727474}={}){
 const material=new THREE.MeshStandardMaterial({color:grass,roughness:.95});pipeline.prepareMaterial(material,{rim:0});
 const compile=material.onBeforeCompile;
 material.onBeforeCompile=shader=>{compile(shader);shader.uniforms.terrainGrass={value:new THREE.Color(grass)};shader.uniforms.terrainDirt={value:new THREE.Color(dirt)};shader.uniforms.terrainRock={value:new THREE.Color(rock)};
 shader.vertexShader='varying float terrainSlope;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nterrainSlope=1.-abs(normalize(mat3(modelMatrix)*objectNormal).y);');
 shader.fragmentShader='varying float terrainSlope;uniform vec3 terrainGrass,terrainDirt,terrainRock;\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\nfloat pathMask=smoothstep(.15,.65,.5+.5*sin(visualWorld.x*.025+sin(visualWorld.z*.019)));diffuseColor.rgb*=mix(mix(terrainGrass,terrainDirt,pathMask*.35),terrainRock,smoothstep(.35,.75,terrainSlope))/max(terrainGrass,vec3(.001));');};
 material.customProgramCacheKey=()=> 'kaw-terrain-v1';return material;
}
