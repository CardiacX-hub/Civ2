/** Instanced, deterministic landscape detail. These decorations never alter navigation. */
import * as THREE from 'three';
/** Seamless overlapping blades cover the soil even beyond the geometry detail range.
 * Wrapped strokes prevent tile seams; baked detail costs no per-frame CPU work. */
export function meadowTexture(){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
 const brush=canvas.getContext('2d');brush.fillStyle='#9aa985';brush.fillRect(0,0,512,512);
 let seed=7941;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const palette=['#526446','#718557','#a4b881','#c4c999','#879568'];
 for(let i=0;i<26000;i++){
  const x=random()*512,y=random()*512,h=4+random()*12,bend=(random()-.5)*6;
  brush.strokeStyle=palette[i%palette.length];brush.lineWidth=.6+random()*.8;
  for(const dx of [-512,0,512])for(const dy of [-512,0,512]){
   if(x+dx< -8||x+dx>520||y+dy<0||y+dy>530)continue;
   brush.beginPath();brush.moveTo(x+dx,y+dy);brush.quadraticCurveTo(x+dx+bend*.3,y+dy-h*.6,x+dx+bend,y+dy-h);brush.stroke();
  }
 }
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(32,32);
 texture.anisotropy=4;return texture;
}
export function addWindGrass(pipeline,c,time){
 const positions=[],colors=[],indices=[],bands=4;
 // A rooted, tapered curved blade, rather than a rectangular green card.
 for(let blade=0;blade<3;blade++){const base=positions.length/3,angle=blade*2.399,ox=Math.sin(angle)*.12,oz=Math.cos(angle)*.12;for(let row=0;row<=bands;row++){const t=row/bands,w=.075*(1-t)+.006;for(const side of [-1,1]){const x=side*w+t*t*.11;positions.push(ox+x*Math.cos(angle),t*(.76+blade*.07),oz+x*Math.sin(angle)+t*t*.055);colors.push(.4+t*.4,.5+t*.38,.3+t*.24);}}for(let row=0;row<bands;row++){const i=base+row*2;indices.push(i,i+1,i+2,i+1,i+3,i+2);}}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.setIndex(indices);geometry.computeVertexNormals();
 const material=new THREE.MeshStandardMaterial({color:0xb9c38d,vertexColors:true,roughness:.95,side:THREE.DoubleSide});
 const chunks=new Map(),dummy=new THREE.Object3D(),palette=[0x71864b,0x91a55d,0xa6ab69,0x537447];
 const add=(x,z,i,bank=false)=>{if(x<0||z<0||x>c.SIZE||z>c.SIZE||c.riverAt(x,z))return;dummy.position.set(x*.1,c.terrainHeight(x,z)*.1+.02,z*.1);dummy.rotation.y=i*2.399;dummy.scale.set(.75+i%5*.09,(bank?1.35:.65)+i%7*.085,.8);dummy.updateMatrix();const key=Math.floor(x/(c.SIZE/8))+':'+Math.floor(z/(c.SIZE/8));if(!chunks.has(key))chunks.set(key,{matrices:[],tints:[]});const chunk=chunks.get(key);chunk.matrices.push(dummy.matrix.clone());chunk.tints.push(new THREE.Color(palette[i%palette.length]));};
 // Even, jittered coverage prevents bare patches. Spatial chunks remain cullable.
 // Short field blades preserve silhouettes; taller reeds are restricted to banks.
 const spacing=window.KawVisual?.quality==='low'?20:13;
 let index=0;for(let z=spacing/2;z<c.SIZE;z+=spacing)for(let x=spacing/2;x<c.SIZE;x+=spacing){
  const i=index++,jitter=spacing*.35;
  add(x+Math.sin(i*12.9898)*jitter,z+Math.sin(i*7.233)*jitter,i);
 }
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

/** Shared breeze clock drives grass and tree crowns without moving their roots. */
export function prepareWindTree(model,time,height){
 model.traverse(mesh=>{if(!mesh.isMesh)return;
  const array=Array.isArray(mesh.material),materials=array?mesh.material:[mesh.material];
  mesh.material=materials.map(source=>{const material=source.clone(),prepare=source.onBeforeCompile,key=source.customProgramCacheKey;
   material.onBeforeCompile=shader=>{prepare.call(material,shader);shader.uniforms.treeWindTime=time;shader.uniforms.treeWindHeight={value:height};
    shader.vertexShader='uniform float treeWindTime;uniform float treeWindHeight;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nfloat crown=clamp(position.y/treeWindHeight,0.0,1.0);vec3 anchor=modelMatrix[3].xyz;float gust=sin(treeWindTime*1.8+anchor.x*.29+anchor.z*.21)*.65+sin(treeWindTime*.73+anchor.z*.12)*.35;transformed.x+=crown*crown*treeWindHeight*.035*gust;transformed.z+=crown*crown*treeWindHeight*.015*cos(treeWindTime*1.2+anchor.x*.18);');
   };material.customProgramCacheKey=()=>key.call(source)+':rooted-tree-breeze-v1';return material;});
  if(!array)mesh.material=mesh.material[0];
 });
}
