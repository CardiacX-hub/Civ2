/* Original low-draw-cost faction transports. Shared geometry and material per
 * template; only the wing/propeller pivots animate on individual instances. */
import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export function createTransportModel(race){
 const root=new THREE.Group(),metal=new THREE.MeshStandardMaterial({color:race==='alien'?0x778d9d:0x80796b,metalness:.75,roughness:.32}),wood=new THREE.MeshStandardMaterial({color:0x664b32,roughness:.82}),cloth=new THREE.MeshStandardMaterial({color:race==='horde'?0x963e2e:0x344f86,roughness:.7}),leaf=new THREE.MeshStandardMaterial({color:0x315039,roughness:.5}),glow=new THREE.MeshStandardMaterial({color:0x65cde7,emissive:0x168bb9,emissiveIntensity:1.3,roughness:.2});
 const mesh=(g,m,x,y,z,parent=root)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o;},box=(w,h,d,m,x,y,z,p)=>mesh(new THREE.BoxGeometry(w,h,d),m,x,y,z,p),ell=(x,y,z,rx,ry,rz,m,p)=>{const o=mesh(new THREE.SphereGeometry(1,16,10),m,x,y,z,p);o.scale.set(rx,ry,rz);return o;};
 // Procedural grain and woven cloth stay shared across the template's fittings.
 const grain=new Uint8Array(128*128*4);for(let y=0;y<128;y++)for(let x=0;x<128;x++){const i=(y*128+x)*4,n=(Math.sin(x*.7+Math.sin(y*.08)*2)*.5+.5)*30+((x*17+y*31)%11);grain[i]=grain[i+1]=grain[i+2]=205+n;grain[i+3]=255;}
 const texture=new THREE.DataTexture(grain,128,128);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(3,2);texture.needsUpdate=true;wood.map=cloth.map=texture;
 // Suspended hull, cargo ribs, rear door and six visible passenger windows.
 if(race!=='covenant'){box(14,4,7,['human','covenant'].includes(race)?wood:metal,0,5,0);for(let i=0;i<7;i++)box(.22,4.4,7.3,race==='covenant'?leaf:wood,-6+i*2,5,0);box(.6,4,6,metal,-7,5,0);for(const z of [-3.6,3.6])for(let i=0;i<3;i++)box(1.8,1.2,.12,glow,-3+i*3,6,z);}
 if(race==='human'){
  // A tall stitched hot-air envelope, suspended basket, burner and rope rigging.
  ell(0,26,0,11,15,10,cloth);for(let i=0;i<16;i++){const a=i*Math.PI/8;const seam=mesh(new THREE.TorusGeometry(10.3,.075,4,40),wood,0,26,0);seam.rotation.y=a;seam.scale.y=1.45;}
  for(const x of [-5,5])for(const z of [-3,3])box(.17,12,.17,wood,x,12,z);
  for(let i=0;i<9;i++){box(14,.22,.25,wood,0,3.2+i*.45,3.7);box(14,.22,.25,wood,0,3.2+i*.45,-3.7);}
  box(5,.6,4,metal,0,10,0);const flame=mesh(new THREE.ConeGeometry(.7,4,12),glow,0,12,0);flame.userData.transportFlame=true;
  for(const z of [-4,4])box(12,.35,.35,metal,0,7,z);
 }else if(race==='horde'){
  ell(0,15,0,12,6,5.5,cloth);for(let i=-3;i<=3;i++){const band=mesh(new THREE.TorusGeometry(5.45,.13,5,24),metal,i*3,15,0);band.rotation.y=Math.PI/2;band.scale.y=1.08;}
  for(const x of [-5,5])for(const z of [-3,3]){const strut=box(.25,7,.25,wood,x,10,z);strut.rotation.z=x*.035;}
  for(const z of [-6,6]){box(4,2,2,metal,-4,7,z);const pivot=new THREE.Group();pivot.position.set(-6.5,7,z);pivot.userData.transportSpin=true;root.add(pivot);for(let i=0;i<3;i++){const blade=box(.35,5,.45,metal,0,0,0,pivot);blade.rotation.x=i*Math.PI/3;}}
  if(race==='horde'){for(let i=0;i<12;i++){for(const side of [-1,1]){box(1.6,.25,.8,metal,-10+i*1.8,18,side*4.8);ell(-10+i*1.8,18.2,side*4.8,.15,.15,.15,metal);}}for(const x of [-10,10]){const tusk=mesh(new THREE.ConeGeometry(.8,6,8),metal,x,18,0);tusk.rotation.z=-x*.08;}for(let i=0;i<5;i++)mesh(new THREE.ConeGeometry(.6,2,6),metal,-7+i*3.5,21,0);}
  else{for(const z of [-5.8,5.8])box(10,.5,2,cloth,1,13,z);mesh(new THREE.ConeGeometry(2,4,5),metal,11,15,0).rotation.z=-Math.PI/2;}
 }else if(race==='covenant'){
  // Snowwing Carrier: a snowy owl with overlapping flight feathers and a
  // suspended woven cradle. All feather detail is batched per wing/material.
  root.userData.owl=true;
  const snow=new THREE.MeshStandardMaterial({color:0xf3f1e9,roughness:.79}),
   shade=new THREE.MeshStandardMaterial({color:0xb4b8ba,roughness:.84}),
   dark=new THREE.MeshStandardMaterial({color:0x252a30,roughness:.55}),
   iris=new THREE.MeshStandardMaterial({color:0xecc858,roughness:.28});
  // A cambered, tapered feather: broad vane, raised central shaft and pointed tip.
  const feather=(x,y,z,length,width,side,mat,parent=root,sweep=0)=>{
   const g=new THREE.BufferGeometry(),pos=[],idx=[];
   for(let i=0;i<=8;i++){const t=i/8,w=width*Math.sin(Math.PI*(.08+t*.92))*.5;
    for(const edge of [-1,0,1])pos.push(x+edge*w-t*t*sweep,y+(1-edge*edge)*.12+Math.sin(t*Math.PI)*.15,z+side*t*length);}
   for(let i=0;i<8;i++)for(let j=0;j<2;j++){const n=i*3+j;idx.push(n,n+3,n+1,n+1,n+3,n+4);}
   g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array(pos.length/3*2),2));g.setIndex(side>0?idx:idx.flatMap((_,i)=>i%3===0?[idx[i],idx[i+2],idx[i+1]]:[]));g.computeVertexNormals();
   // Two sides remain visible throughout the full upstroke.
   mat.side=THREE.DoubleSide;return mesh(g,mat,0,0,0,parent);
  };
  ell(0,12,0,7,4.5,4.2,snow);ell(5.6,16,0,4.3,4.6,4.1,snow);
  const beak=mesh(new THREE.ConeGeometry(.65,1.9,10),dark,10,14.9,0);beak.rotation.z=Math.PI*.8;
  // Forward-facing paired facial discs, golden eyes and a hooked dark beak.
  for(const side of [-1,1]){
   ell(8.9,16,side*1.85,.65,2.9,2.1,shade);ell(9.35,16.1,side*1.85,.42,2.65,1.95,snow);
   ell(9.8,16.5,side*1.7,.35,1.05,.94,iris);ell(10.07,16.5,side*1.7,.16,.7,.61,dark);
   ell(10.2,16.85,side*1.5,.08,.21,.18,snow);
   const brow=ell(9.6,18.05,side*1.7,.4,.38,1.7,snow);brow.rotation.x=side*.16;
   const foot=ell(2.8,7,side*2,.7,1.4,.7,shade);
   for(let j=0;j<3;j++){const claw=mesh(new THREE.ConeGeometry(.17,1.5,8),dark,3.1+j*.45,6,side*2);claw.rotation.z=.9;}
   const wing=new THREE.Group();wing.position.set(1,14,side*3);wing.userData.transportWing=side;wing.userData.owlWing=true;root.add(wing);
   ell(-1,0,side*4,4.3,.85,6,snow,wing);
   // Long separated primaries, shorter overlapping secondaries and coverts.
   for(let i=0;i<12;i++)feather(3-i*.72,.05,side*(3+i*.38),12-i*.32,1.9,side,i%4===0?shade:snow,wing,3+i*.2);
   for(let row=0;row<3;row++)for(let i=0;i<11;i++){
    feather(3.5-i*.8,.65+row*.13,side*(row*1.8),5.6,1.5,side,snow,wing,1.2);
    if(i%3===0)feather(3.3-i*.8,.88+row*.13,side*(2+row*1.8),.75,1,side,shade,wing,.2);
   }
  }
  for(let i=0;i<9;i++){const tail=feather(-6,11,(i-4)*.6,7,1.25,i<4?-1:1,snow,root,5);tail.rotation.y=(i-4)*.09;}
  // Layered breast plumage prevents a smooth featureless body silhouette.
  for(let row=0;row<4;row++)for(let i=0;i<9;i++){const a=i/9*Math.PI*2;ell(2-row*1.5,10+Math.cos(a)*3,Math.sin(a)*3.7,1.3,.42,.65,(i+row)%7===0?shade:snow);}
  box(9,.6,6,wood,-1,2,0);
  for(const side of [-1,1]){for(let i=0;i<8;i++)box(.24,3.7,.28,wood,-5+i*1.15,3.8,side*3);for(let i=0;i<6;i++)box(9,.18,.25,wood,-1,2.3+i*.6,side*3.1);for(const x of [-4,2])box(.19,5,.19,wood,x,7,side*3);box(5,2,.2,leaf,-1,4,side*3.3);}

 }else{
  ell(0,8,0,11,3,5,metal);box(6,2,4,glow,6,10,0);for(const side of [-1,1]){box(13,1.2,4,metal,-2,7,side*6);for(let i=0;i<4;i++)box(2,.4,3,metal,-7+i*3,8,side*6);const engine=mesh(new THREE.CylinderGeometry(1.4,1.8,6,12),metal,-6,7,side*6);engine.rotation.z=Math.PI/2;const flame=mesh(new THREE.ConeGeometry(1.25,5,12),glow,-11,7,side*6);flame.rotation.z=Math.PI/2;flame.userData.transportFlame=true;}}
 // Each moving sail is also one draw per material, not one draw per leaf/vein.
 root.updateMatrixWorld(true);const sails=[];root.traverse(o=>{if(o.userData.transportWing)sails.push(o);});for(const sail of sails){const inverse=sail.matrixWorld.clone().invert(),sets=new Map(),meshes=[];sail.traverse(o=>{if(!o.isMesh)return;const parts=sets.get(o.material)||[];parts.push(o.geometry.clone().applyMatrix4(o.matrixWorld).applyMatrix4(inverse));sets.set(o.material,parts);meshes.push(o);});for(const m of meshes){m.removeFromParent();m.geometry.dispose();}for(const [material,parts]of sets){const g=mergeGeometries(parts);parts.forEach(p=>p.dispose());const m=new THREE.Mesh(g,material);m.castShadow=m.receiveShadow=true;sail.add(m);}}
 // Bake static fittings into one mesh per material, retaining animated pivots.
 root.updateMatrixWorld(true);const groups=new Map(),remove=[];root.traverse(o=>{if(!o.isMesh)return;for(let p=o;p&&p!==root;p=p.parent)if(p.userData.transportSpin||p.userData.transportWing||p.userData.transportFlame)return;const list=groups.get(o.material)||[];list.push(o.geometry.clone().applyMatrix4(o.matrixWorld));groups.set(o.material,list);remove.push(o);});for(const o of remove){o.removeFromParent();o.geometry.dispose();}for(const [material,parts]of groups){const geometry=mergeGeometries(parts);for(const p of parts)p.dispose();const merged=new THREE.Mesh(geometry,material);merged.castShadow=merged.receiveShadow=true;root.add(merged);}
 root.userData.transport=true;return root;
}
export function animateTransport(entry,time,moving){if(!entry.name.startsWith('transport-'))return;if(!entry.transportParts){entry.transportParts=[];entry.model.traverse(o=>{if(o.userData.transportSpin||o.userData.transportWing||o.userData.transportFlame)entry.transportParts.push(o);});}for(const o of entry.transportParts){if(o.userData.transportSpin)o.rotation.x=time*14;if(o.userData.transportWing)o.rotation.x=o.userData.transportWing*(o.userData.owlWing?(.12+Math.sin(time*(moving?3.4:2.5))*.42):Math.sin(time*3)*.18);if(o.userData.transportFlame){o.matrixAutoUpdate=true;o.scale.y=(moving?1:.35)*(1+Math.sin(time*23)*.08);}}}
