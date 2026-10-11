/** Original procedural faction art. Shared meshes serve live models and sprite atlases.
 * Geometry is merged by material within articulated groups; animation keeps weapons attached. */
import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export const specialistTypes=['siegeMarshal','stormLancer','chainbreaker','ashShaman','rootColossus','bloomWeaver','bloomPod'];
export function createSpecialistModel(type){
 const root=new T.Group();root.name=type;const joints=[],textureCache=new Map();
 function mat(color,kind='cloth',metalness=0,emissive){
  if(!textureCache.has(kind)){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');g.fillStyle='#d4d0bd';g.fillRect(0,0,128,128);for(let i=0;i<110;i++){const x=(i*37)%128,y=(i*61)%128;g.strokeStyle=i%3?'#746b5655':'#fff2d866';g.lineWidth=kind==='bark'?1.5:.5;g.beginPath();g.moveTo(x,y);g.lineTo(x+(kind==='metal'?9:Math.sin(i)*2),y+(kind==='bark'?25:8));g.stroke();}const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;textureCache.set(kind,t);}
  return new T.MeshStandardMaterial({color,map:textureCache.get(kind),metalness,roughness:metalness?.34:.85,emissive:emissive||0,emissiveIntensity:emissive?.7:0});
 }
 const silver=mat(0xb3c4ce,'metal',.8),gold=mat(0xc7a55a,'metal',.7),iron=mat(0x40484a,'metal',.75),blue=mat(0x254b82),red=mat(0x803329),green=mat(0x315c34),bark=mat(0x725338,'bark'),dark=mat(0x27302d),skin=mat(0x718359,'skin'),bone=mat(0xe1d2a8,'bark'),leaf=mat(0x285339,'leaf'),glow=mat(type==='ashShaman'?0xf07d32:0x66bd9b,'metal',.15,type==='ashShaman'?0xff651a:0x62ffb3);
 const group=(name,parent,x=0,y=0,z=0)=>{const g=new T.Group();g.name=name;g.position.set(x,y,z);parent.add(g);joints.push(g);return g;};
 const mesh=(parent,geometry,material,x,y,z,sx=1,sy=1,sz=1)=>{const m=new T.Mesh(geometry,material);m.position.set(x,y,z);m.scale.set(sx,sy,sz);parent.add(m);return m;};
 const box=(p,m,x,y,z,w,h,d)=>mesh(p,new T.BoxGeometry(w,h,d),m,x,y,z);
 const sphere=(p,m,x,y,z,r,sx=1,sy=1,sz=1)=>mesh(p,new T.SphereGeometry(r,12,8),m,x,y,z,sx,sy,sz);
 const rod=(p,m,a,b,r=1)=>{const av=new T.Vector3(...a),bv=new T.Vector3(...b),d=bv.clone().sub(av),mid=av.clone().add(bv).multiplyScalar(.5),o=mesh(p,new T.CylinderGeometry(r,r*1.13,d.length(),8),m,...mid.toArray());o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return o;};
 const spike=(p,m,x,y,z,r,h,rx=0,rz=0)=>{const o=mesh(p,new T.ConeGeometry(r,h,7),m,x,y,z);o.rotation.set(rx,0,rz);return o;};
 const humanoid=(nature=false,orc=false)=>{
  const body=group('torso',root,0,14,0),head=group('head',body,0,12,0),arms=[group('armL',body,-7,7,0),group('armR',body,7,7,0)],legs=[group('legL',root,-3,10,0),group('legR',root,3,10,0)];
  sphere(body,nature?bark:orc?skin:silver,0,4,0,7,1,1.3,.65);sphere(head,nature?bark:orc?skin:silver,0,0,0,4.6,.9,1.1,.85);
  for(const [i,a]of arms.entries()){rod(a,nature?bark:orc?skin:silver,[0,0,0],[i?2:-2,-7,1],2.2);sphere(a,nature?bark:orc?iron:gold,0,0,0,3.8,1.1,.6,1);rod(a,nature?bark:orc?skin:silver,[i?2:-2,-7,1],[i?2:-2,-12,3],1.8);sphere(a,nature?bark:orc?skin:iron,i?2:-2,-12,3,2);}
  for(const l of legs){rod(l,nature?bark:orc?skin:silver,[0,0,0],[0,-7,1],2.3);sphere(l,nature?bark:orc?iron:silver,0,-3,1,2.9,1,1.1,1);box(l,nature?bark:orc?dark:silver,0,-8,2,4,3,7);}
  for(const side of [-1,1]){sphere(head,glow,side*1.8,.6,3.5,.55);if(orc){spike(head,bone,side*3,-3,3.8,.7,3);spike(head,skin,side*5,1,0,1.5,5,0,side*-1.2);}if(nature){rod(head,bark,[side*2,3,0],[side*5,8,-1],.8);}}
  return {body,head,arms,legs};
 };
 if(type==='siegeMarshal'){
  const h=humanoid();box(h.body,blue,0,4,5,8,12,1);for(const side of [-1,1])rod(h.body,gold,[side*5,-2,5],[side*5,10,5],.5);spike(h.head,gold,0,7,0,1.1,5);box(h.head,dark,0,0,4,6,.9,.3);
  const shield=group('aegisShield',h.arms[0],-2,-9,5);mesh(shield,new T.CylinderGeometry(6,6,1.2,8),silver,0,0,0).rotation.x=Math.PI/2;mesh(shield,new T.CylinderGeometry(5,5,.4,8),blue,0,0,.8).rotation.x=Math.PI/2;rod(shield,gold,[-4,0,1.2],[4,0,1.2],.55);rod(shield,gold,[0,-4,1.2],[0,4,1.2],.55);sphere(shield,glow,0,0,1.7,1.1);rod(h.arms[1],iron,[2,-12,3],[2,3,3],.7);sphere(h.arms[1],silver,2,4,3,3,1,1,.8);
 }else if(type==='stormLancer'){
  const horse=group('horse',root,0,13,0);sphere(horse,dark,0,0,0,8,.7,.9,1.6);sphere(horse,blue,0,0,0,8,.85,.95,1.05);rod(horse,iron,[0,0,8],[0,9,13],3);sphere(horse,silver,0,9,15,4,.7,1,1.25);for(const side of [-1,1])spike(horse,dark,side*2,14,14,.8,4);
  for(const x of [-4,4])for(const z of [-8,7]){const l=group('horseLeg'+x+z,horse,x,-3,z);rod(l,silver,[0,0,0],[0,-8,0],1.4);box(l,silver,0,-8,0,3,3,4);}rod(horse,dark,[0,0,-11],[0,-4,-19],1);
  const h=humanoid();h.body.position.y=24;h.legs.forEach((l,i)=>{l.position.set(i?6:-6,19,0);l.rotation.z=i?-.35:.35;});box(h.body,blue,0,3,5,7,10,1);box(h.head,dark,0,0,4,6,.7,.3);spike(h.head,blue,0,8,0,1.5,7);rod(h.arms[1],gold,[2,-12,3],[2,22,8],.6);spike(h.arms[1],silver,2,24,8,1.7,6);
 }else if(type==='chainbreaker'){
  const h=humanoid(false,true);h.body.scale.set(1.2,1.1,1.2);box(h.body,red,0,-2,4,11,8,1);for(const side of [-1,1])for(let i=0;i<3;i++)spike(h.arms[side===1?1:0],iron,side*2,2+i,0,.7,4,0,side*.5);
  for(let i=0;i<10;i++){const ring=mesh(h.arms[1],new T.TorusGeometry(1,.3,5,8),iron,2+Math.sin(i*.4),-11-i*.9,3);ring.rotation.x=i%2*Math.PI/2;}rod(h.arms[1],iron,[2,-19,3],[5,-24,3],1);spike(h.arms[1],silver,6,-22,3,1.4,6,0,.7);box(h.head,iron,0,4,0,7,2,7);
 }else if(type==='ashShaman'){
  const h=humanoid(false,true);mesh(h.body,new T.ConeGeometry(7,15,10),red,0,-1,0);h.body.rotation.x=.12;for(const side of [-1,1]){rod(h.head,bone,[side*2,3,0],[side*6,10,-1],1);spike(h.head,bone,side*7,11,0,.8,5,0,side*-.6);}rod(h.arms[1],bark,[2,-19,3],[2,10,3],.9);sphere(h.arms[1],glow,2,12,3,2);for(let i=0;i<5;i++)sphere(h.body,bone,-4+i*2,9,5,.9);box(h.body,dark,0,5,5,5,9,1);
 }else if(type==='rootColossus'){
  const h=humanoid(true);h.body.scale.set(1.35,1.15,1.1);for(let i=0;i<18;i++){const a=i*2.399;rod(h.body,bark,[Math.cos(a)*5,-6,Math.sin(a)*3],[Math.cos(a)*7,12,Math.sin(a)*4],.65);}
  for(const side of [-1,1]){for(let i=0;i<4;i++)rod(root,bark,[side*3,4,0],[side*(8+i*2),0,3+i*2],1);for(let i=0;i<3;i++)rod(h.arms[side===1?1:0],bark,[side*2,-10,3],[side*(4+i),-18,6+i*2],.7);}
  for(let i=0;i<15;i++){const a=i*2.399;spike(h.head,leaf,Math.cos(a)*5,6+i%4,Math.sin(a)*4,2.3,5+i%3,.15*Math.sin(a),.3*Math.cos(a));}sphere(h.body,glow,0,5,5,1.8,1,.8,.35);
 }else if(type==='bloomWeaver'){
  const h=humanoid(true);h.body.scale.set(.8,1.1,.8);mesh(h.body,new T.ConeGeometry(6,12,9),green,0,-1,0);for(let i=0;i<8;i++){const a=i*Math.PI/4;const p=sphere(h.head,i%2?bone:leaf,Math.cos(a)*4,3,Math.sin(a)*4,2,.5,1.8,.7);p.rotation.z=-Math.cos(a)*.6;}rod(h.arms[1],bark,[2,-18,3],[2,9,3],.7);sphere(h.arms[1],glow,2,11,3,2);for(let i=0;i<5;i++)sphere(h.body,green,-3+i*1.5,-3,5,1.2);
 }else if(type==='bloomPod'){
  sphere(root,bark,0,1,0,5,1,.25,1);rod(root,bark,[0,0,0],[0,9,0],1);for(let i=0;i<7;i++){const a=i*Math.PI*2/7;sphere(root,i%2?leaf:green,Math.cos(a)*3,7,Math.sin(a)*3,3,.8,.35,1.2);}sphere(root,glow,0,9,0,2);
 }
 root.updateMatrixWorld(true);
 // Merge static parts under each nearest animation joint; share material and geometry across units.
 for(const parent of [root,...joints]){const batches=new Map();for(const child of [...parent.children])if(child.isMesh){const g=child.geometry.clone();g.applyMatrix4(child.matrix);if(!g.index)g.setIndex(Array.from({length:g.attributes.position.count},(_,i)=>i));const key=child.material.uuid;if(!batches.has(key))batches.set(key,{material:child.material,geometries:[]});batches.get(key).geometries.push(g);parent.remove(child);child.geometry.dispose();}for(const b of batches.values()){const merged=mergeGeometries(b.geometries,false);if(merged)parent.add(new T.Mesh(merged,b.material));b.geometries.forEach(g=>g.dispose());}}
 const animations=[];
 for(const phase of ['idle','walk','attack']){const duration=phase==='idle'?2.5:phase==='walk'?.65:.6,tracks=[];for(const joint of joints){const times=[],values=[],base=joint.quaternion.clone();for(let i=0;i<=16;i++){const t=i/16,w=Math.sin(t*Math.PI*2),arm=joint.name.startsWith('arm'),leg=joint.name.includes('Leg')||joint.name.startsWith('leg');let angle=phase==='idle'?(joint.name==='torso'?w*.015:0):phase==='walk'?(arm||leg?w*.4*(joint.name.endsWith('L')||joint.name.includes('-4')?1:-1):joint.name==='torso'?w*.025:0):arm?Math.sin(t*Math.PI)*-.9:joint.name==='torso'?Math.sin(t*Math.PI)*.12:0;const q=base.clone().multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(1,0,0),angle));times.push(t*duration);values.push(...q.toArray());}if(values.some((v,i)=>Math.abs(v-values[i%4])>.00001))tracks.push(new T.QuaternionKeyframeTrack(joint.name+'.quaternion',times,values));}if(tracks.length)animations.push(new T.AnimationClip(phase,duration,tracks));}
 root.userData.factionSpecialist=type;return {scene:root,animations};
}
