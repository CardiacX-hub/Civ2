/* Original low-draw-cost faction transports. Shared geometry and material per
 * template; only the wing/propeller pivots animate on individual instances. */
import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export function createTransportModel(race){
 const root=new THREE.Group(),metal=new THREE.MeshStandardMaterial({color:race==='alien'?0x778d9d:0x80796b,metalness:.75,roughness:.32}),wood=new THREE.MeshStandardMaterial({color:0x664b32,roughness:.82}),cloth=new THREE.MeshStandardMaterial({color:race==='horde'?0x963e2e:0x344f86,roughness:.7}),leaf=new THREE.MeshStandardMaterial({color:0x315039,roughness:.5}),glow=new THREE.MeshStandardMaterial({color:0x65cde7,emissive:0x168bb9,emissiveIntensity:1.3,roughness:.2});
 const mesh=(g,m,x,y,z,parent=root)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o;},box=(w,h,d,m,x,y,z,p)=>mesh(new THREE.BoxGeometry(w,h,d),m,x,y,z,p),ell=(x,y,z,rx,ry,rz,m,p)=>{const o=mesh(new THREE.SphereGeometry(1,16,10),m,x,y,z,p);o.scale.set(rx,ry,rz);return o;};
 // Suspended hull, cargo ribs, rear door and six visible passenger windows.
 box(14,4,7,race==='covenant'?wood:metal,0,5,0);for(let i=0;i<7;i++)box(.22,4.4,7.3,race==='covenant'?leaf:wood,-6+i*2,5,0);box(.6,4,6,metal,-7,5,0);for(const z of [-3.6,3.6])for(let i=0;i<3;i++)box(1.8,1.2,.12,glow,-3+i*3,6,z);
 if(race==='human'||race==='horde'){
  ell(0,15,0,12,6,5.5,cloth);for(let i=-3;i<=3;i++){const band=mesh(new THREE.TorusGeometry(5.45,.13,5,24),metal,i*3,15,0);band.rotation.y=Math.PI/2;band.scale.y=1.08;}
  for(const x of [-5,5])for(const z of [-3,3]){const strut=box(.25,7,.25,wood,x,10,z);strut.rotation.z=x*.035;}
  for(const z of [-6,6]){box(4,2,2,metal,-4,7,z);const pivot=new THREE.Group();pivot.position.set(-6.5,7,z);pivot.userData.transportSpin=true;root.add(pivot);for(let i=0;i<3;i++){const blade=box(.35,5,.45,metal,0,0,0,pivot);blade.rotation.x=i*Math.PI/3;}}
  if(race==='horde'){for(const x of [-10,10]){const tusk=mesh(new THREE.ConeGeometry(.8,6,8),metal,x,18,0);tusk.rotation.z=-x*.08;}for(let i=0;i<5;i++)mesh(new THREE.ConeGeometry(.6,2,6),metal,-7+i*3.5,21,0);}
  else{for(const z of [-5.8,5.8])box(10,.5,2,cloth,1,13,z);mesh(new THREE.ConeGeometry(2,4,5),metal,11,15,0).rotation.z=-Math.PI/2;}
 }else if(race==='covenant'){
  ell(0,11,0,12,4.5,5,leaf);ell(10,11,0,4,3,3,wood);for(const z of [-2.4,2.4])ell(12,12,z,.65,.65,.2,glow);
  for(const side of [-1,1]){const wing=new THREE.Group();wing.position.set(0,12,side*3);wing.userData.transportWing=side;root.add(wing);for(let i=0;i<9;i++){const feather=ell(-7+i*1.5,0,side*(4+Math.sin(i/8*Math.PI)*3),2,.3,5,leaf,wing);feather.rotation.y=side*(i-4)*.1;}}
  for(let i=0;i<5;i++)ell(-12-i*1.2,11+i*.35,0,2,.5,2,leaf);
 }else{
  ell(0,8,0,11,3,5,metal);box(6,2,4,glow,6,10,0);for(const side of [-1,1]){box(13,1.2,4,metal,-2,7,side*6);for(let i=0;i<4;i++)box(2,.4,3,metal,-7+i*3,8,side*6);const engine=mesh(new THREE.CylinderGeometry(1.4,1.8,6,12),metal,-6,7,side*6);engine.rotation.z=Math.PI/2;const flame=mesh(new THREE.ConeGeometry(1.25,5,12),glow,-11,7,side*6);flame.rotation.z=Math.PI/2;flame.userData.transportFlame=true;}}
 // Bake static fittings into one mesh per material, retaining animated pivots.
 root.updateMatrixWorld(true);const groups=new Map(),remove=[];root.traverse(o=>{if(!o.isMesh)return;for(let p=o;p&&p!==root;p=p.parent)if(p.userData.transportSpin||p.userData.transportWing||p.userData.transportFlame)return;const list=groups.get(o.material)||[];list.push(o.geometry.clone().applyMatrix4(o.matrixWorld));groups.set(o.material,list);remove.push(o);});for(const o of remove){o.removeFromParent();o.geometry.dispose();}for(const [material,parts]of groups){const geometry=mergeGeometries(parts);for(const p of parts)p.dispose();const merged=new THREE.Mesh(geometry,material);merged.castShadow=merged.receiveShadow=true;root.add(merged);}
 root.userData.transport=true;return root;
}
export function animateTransport(entry,time,moving){if(!entry.name.startsWith('transport-'))return;if(!entry.transportParts){entry.transportParts=[];entry.model.traverse(o=>{if(o.userData.transportSpin||o.userData.transportWing||o.userData.transportFlame)entry.transportParts.push(o);});}for(const o of entry.transportParts){if(o.userData.transportSpin)o.rotation.x=time*14;if(o.userData.transportWing)o.rotation.x=o.userData.transportWing*Math.sin(time*3)*.18;if(o.userData.transportFlame){o.matrixAutoUpdate=true;o.scale.y=(moving?1:.35)*(1+Math.sin(time*23)*.08);}}}
