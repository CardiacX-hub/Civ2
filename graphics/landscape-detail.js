/** Instanced, deterministic landscape detail. These decorations never alter navigation. */
import * as THREE from 'three';
export function addWindGrass(pipeline,c,time){
 const positions=[],colors=[],indices=[],bands=4;
 // A rooted, tapered curved blade, rather than a rectangular green card.
 for(let blade=0;blade<3;blade++){const base=positions.length/3,angle=blade*2.399,ox=Math.sin(angle)*.12,oz=Math.cos(angle)*.12;for(let row=0;row<=bands;row++){const t=row/bands,w=.075*(1-t)+.006;for(const side of [-1,1]){const x=side*w+t*t*.11;positions.push(ox+x*Math.cos(angle),t*(.76+blade*.07),oz+x*Math.sin(angle)+t*t*.055);colors.push(.4+t*.4,.5+t*.38,.3+t*.24);}}for(let row=0;row<bands;row++){const i=base+row*2;indices.push(i,i+1,i+2,i+1,i+3,i+2);}}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.setIndex(indices);geometry.computeVertexNormals();
 const material=new THREE.MeshStandardMaterial({color:0xb9c38d,vertexColors:true,roughness:.95,side:THREE.DoubleSide});
 const chunks=new Map(),dummy=new THREE.Object3D(),palette=[0x71864b,0x91a55d,0xa6ab69,0x537447];
 const add=(x,z,i,bank=false)=>{if(x<0||z<0||x>c.SIZE||z>c.SIZE||c.riverAt(x,z))return;dummy.position.set(x*.1,c.terrainHeight(x,z)*.1+.02,z*.1);dummy.rotation.y=i*2.399;dummy.scale.set(.75+i%5*.09,(bank?1.35:.65)+i%7*.085,.8);dummy.updateMatrix();const key=Math.floor(x/(c.SIZE/8))+':'+Math.floor(z/(c.SIZE/8));if(!chunks.has(key))chunks.set(key,{matrices:[],tints:[]});const chunk=chunks.get(key);chunk.matrices.push(dummy.matrix.clone());chunk.tints.push(new THREE.Color(palette[i%palette.length]));};
 const count=window.KawVisual?.quality==='low'?16000:60000;
 for(let i=0;i<count;i++)add((i*7919+.37*(i%11))%c.SIZE,(i*3571+.41*(i%17))%c.SIZE,i);
 // Two uneven grass/reed lines follow each actual bank, leaving bridge approaches open.
 for(const river of c.state.rivers||[])for(let z=river.points[0].y;z<=river.points.at(-1).y;z+=7){if(river.bridges.some(y=>Math.abs(y-z)<65))continue;for(const side of [-1,1])for(let k=0;k<3;k++){const x=c.riverCenter(river,z)+side*(river.width/2+5+k*6);add(x,z+Math.sin(z+k)*3,Math.floor(z)+k,true);}}
 for(const {matrices,tints} of chunks.values()){const mesh=pipeline.addInstances(geometry,material,matrices);tints.forEach((color,i)=>mesh.setColorAt(i,color));mesh.instanceColor.needsUpdate=true;mesh.castShadow=false;mesh.userData.noShadow=true;}
 const prepare=material.onBeforeCompile,key=material.customProgramCacheKey;
 material.onBeforeCompile=shader=>{prepare(shader);shader.uniforms.grassTime=time;shader.vertexShader='uniform float grassTime;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvec3 grassAnchor=instanceMatrix[3].xyz;float bend=position.y*position.y;transformed.x+=bend*(sin(grassTime*1.8+grassAnchor.x*.29+grassAnchor.z*.21)*.17+sin(grassTime*.73+grassAnchor.z*.12)*.09);transformed.z+=bend*cos(grassTime*1.2+grassAnchor.x*.18)*.09;');};
 material.customProgramCacheKey=()=>key()+':rooted-wind-grass-v1';material.needsUpdate=true;
}
/** Subdivided sloping cliff faces with uneven ledges; tops stay aligned to the playable plateau. */
export function cliffFace(points,x0,z0,x1,z1,h0,h1,center){
 const length=Math.hypot(x1-x0,z1-z0),steps=Math.max(1,Math.ceil(length/18)),layers=6;
 const vertex=(step,row)=>{const t=step/steps,v=row/layers,x=x0+(x1-x0)*t,z=z0+(z1-z0)*t,h=h0+(h1-h0)*t;const dx=x-center.x,dz=z-center.z,n=Math.hypot(dx,dz)||1;const ledge=(1-v)*22+Math.sin(step*1.3+row*2.1)*2.3*Math.sin(v*Math.PI);return [(x+dx/n*ledge)*.1,h*v*.1,(z+dz/n*ledge)*.1];};
 for(let step=0;step<steps;step++)for(let row=0;row<layers;row++){const a=vertex(step,row),b=vertex(step,row+1),d=vertex(step+1,row+1),e=vertex(step+1,row);points.push(...a,...b,...e,...e,...b,...d);}
}
