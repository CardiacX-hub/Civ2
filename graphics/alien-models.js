/** Original Astral Remnant models. Shared immutable templates are cloned by the
 * battlefield, so geometry and PBR materials remain batchable across armies. */
import * as T from 'three';
let sharedHullSurface;
function hullSurface(){
 if(typeof document==='undefined')return null;if(sharedHullSurface)return sharedHullSurface;
 const color=document.createElement('canvas'),normal=document.createElement('canvas');color.width=color.height=normal.width=normal.height=512;
 const a=color.getContext('2d'),n=normal.getContext('2d');a.fillStyle='#d8dce0';a.fillRect(0,0,512,512);n.fillStyle='#8080ff';n.fillRect(0,0,512,512);let seed=7831;
 for(let i=0;i<1800;i++){seed=(seed*1664525+1013904223)>>>0;const x=seed%512,y=(seed>>>9)%512,w=4+(seed>>>18)%45;a.fillStyle=i%2?'#ffffff14':'#30405216';a.fillRect(x,y,w,1);}
 for(const y of [8,252,504]){a.fillStyle='#263442';a.fillRect(0,y,512,2);a.fillStyle='#ffffff80';a.fillRect(0,y+2,512,1);n.fillStyle='#8097ed';n.fillRect(0,y,512,2);n.fillStyle='#8069ed';n.fillRect(0,y+2,512,2);}
 for(const x of [12,500])for(const y of [20,240,264,488]){a.fillStyle='#485866';a.beginPath();a.arc(x,y,2,0,Math.PI*2);a.fill();}
 const map=new T.CanvasTexture(color),normalMap=new T.CanvasTexture(normal);map.colorSpace=T.SRGBColorSpace;for(const texture of [map,normalMap])texture.wrapS=texture.wrapT=T.RepeatWrapping;return sharedHullSurface={map,normalMap};
}
export function createAlienModel(name){
 const root=new T.Group(),unit=!name.startsWith('alien-world-'),type=name.replace(/^alien-(world-)?/,'').replace(/-(carry|logs|hammer|pick)$/,''),level=Number(type.match(/level(\d)/)?.[1]||1);
 const surface=hullSurface(),finish=surface?{...surface,normalScale:new T.Vector2(.2,.2)}:{};
 const steel=new T.MeshStandardMaterial({...finish,color:0x374852,metalness:.78,roughness:.38}),edge=new T.MeshStandardMaterial({...finish,color:0xa1b4b8,metalness:.85,roughness:.27}),dark=new T.MeshStandardMaterial({...finish,color:0x151f30,metalness:.6,roughness:.5}),skin=new T.MeshStandardMaterial({color:0x697e98,roughness:.58}),glow=new T.MeshStandardMaterial({color:0x74e7e2,emissive:0x28bac1,emissiveIntensity:1.3,metalness:.3,roughness:.25}),team=new T.MeshStandardMaterial({...finish,color:0x899bbd,metalness:.35,roughness:.42});team.userData.alienTeam=true;
 function mesh(g,m,x=0,y=0,z=0,parent=root){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
 // Reuse matching beveled parts inside each template: readable plate edges
 // without a new mesh topology or geometry allocation during animation.
 const plates=new Map();
 const box=(x,y,z,w,h,d,m=steel,p=root)=>{const key=w+':'+h+':'+d;let g=plates.get(key);if(!g){if(unit){const b=Math.min(w,h,d)*.12,shape=new T.Shape(),a=w/2-b,c=h/2-b;shape.moveTo(-a,-c);shape.lineTo(a,-c);shape.lineTo(a,c);shape.lineTo(-a,c);shape.closePath();g=new T.ExtrudeGeometry(shape,{depth:d-2*b,bevelEnabled:true,bevelThickness:b,bevelSize:b,bevelSegments:1,steps:1});g.translate(0,0,-d/2+b);}else g=new T.BoxGeometry(w,h,d);plates.set(key,g);}return mesh(g,m,x,y,z,p);};
 const orb=(x,y,z,a,b,c,m=steel,p=root)=>{const o=mesh(new T.SphereGeometry(1,16,10),m,x,y,z,p);o.scale.set(a,b,c);return o;};
 const cone=(x,y,z,r,h,m=edge,p=root)=>mesh(new T.ConeGeometry(r,h,8),m,x,y,z,p);
 function ring(x,y,z,r,m=edge,p=root){const o=mesh(new T.TorusGeometry(r,.12,6,24),m,x,y,z,p);o.rotation.x=Math.PI/2;return o;}
 function panel(x,y,z,w,h,d,p=root){const result=box(x,y,z,w,h,d,steel,p);box(x,y+h*.51,z,w*.9,.09,d*.9,edge,p);for(let i=0;i<3;i++)box(x-w*.32+i*w*.32,y+h*.56,z,.06,.04,d*.78,dark,p);return result;}
 if(!unit){
  if(type.startsWith('base')){
   const hull=new T.Group();root.add(hull);hull.rotation.z=level===1?-.10:0;hull.position.y=level===1?1:2;
   const body=mesh(new T.CylinderGeometry(9,11,5,10),steel,0,3,0,hull);body.scale.set(1.25,1,.8);orb(0,6,-5,4,1.5,2.5,dark,hull);orb(0,6.3,-5.5,3.4,1,2,glow,hull);for(const side of [-1,1])for(let i=0;i<6;i++){box(side*(9-i*.35),3,-4+i*1.6,.3,2.5,.7,dark,hull);orb(side*(9.3-i*.35),4,-4+i*1.6,.17,.17,.17,edge,hull);}
   // Overlapping hull plates, seams, rivets and conduits survive all upgrades.
   for(let i=-4;i<=4;i++){panel(i*2.6,5.7,1,2.45,.45,8,hull);for(const z of [-3,5])orb(i*2.6,6.05,z,.12,.12,.12,edge,hull);}
   for(const side of [-1,1]){const wing=new T.Group();wing.position.set(side*10,2.5,1);wing.rotation.z=level===1?side*.23:0;hull.add(wing);panel(side*3,0,1,8,.8,8,wing);box(side*3,.55,1,5,.15,3,team,wing);const engine=mesh(new T.CylinderGeometry(2,2.4,7,16),dark,side*13,2.7,6,hull);engine.rotation.x=Math.PI/2;const nozzle=mesh(new T.CylinderGeometry(1.4,1.7,.4,16),glow,side*13,2.7,9.7,hull);nozzle.rotation.x=Math.PI/2;for(let i=0;i<5;i++)box(side*13,4.6,3+i,3,.1,.15,edge,hull);}
   if(level===1){for(let i=0;i<5;i++){const p=panel(-12+i*5,.25,11+i%2*2,3,.2,2);if(p)p.rotation.z=.2;}cone(9,6,4,1,4,dark);for(let i=0;i<5;i++){const crack=box(-6+i*2,6.05,2+(i%2),.18,.08,4,dark,hull);crack.rotation.y=.4+i*.2;}for(const x of [-10,-7,8]){const beam=box(x,3,9,.3,3,4,edge);beam.rotation.x=.45;beam.rotation.z=x*.035;}}
   if(level>=2){for(const x of [-9,9]){box(x,1,0,1.3,2,1.3,dark);box(x,.3,0,4,.6,4,edge);}ring(0,7,0,4,glow);orb(0,7.6,0,2.7,1.7,2.7,team);for(const x of [-6,6])panel(x,6.6,2,3,1,5);}
   if(level>=3){for(const x of [-15,15]){panel(x,3,-6,6,2,8);box(x,5,-6,4,2,4,team);ring(x,6.5,-6,1.5,glow);box(x,6,-10,.8,.8,6,edge);}box(0,8,5,5,4,4,dark);orb(0,10.5,5,3,.6,3,glow);}
   if(level>=4){for(const x of [-20,20]){panel(x,3,2,6,2,9);box(x,7,2,2,7,2,edge);orb(x,11,2,2,1,2,glow);}ring(0,12,0,7,glow);cone(0,12.8,0,2,6,edge);}
  }else if(['wall','gate','gate-open'].includes(type)){box(0,2,0,12,4,2,dark);box(0,4,0,12,.3,2,glow);for(const x of [-5,5])box(x,3,0,1.5,6,3,edge);if(type==='gate-open')root.scale.y=.25;}
  else{
   // Functional architecture: every facility has its own footprint and roofline.
   const turbine=(x,y,z,r=1.3)=>{mesh(new T.CylinderGeometry(r,r,1.5,12),dark,x,y,z);ring(x,y+.8,z,r,glow);for(let i=0;i<4;i++){const fin=box(x,y+.9,z,r*1.6,.12,.18,edge);fin.rotation.y=i*Math.PI/4;}};
   if(type==='house'){for(const x of [-2.5,2.5]){orb(x,2.4,0,3,2.8,3,steel);ring(x,3.2,0,2.7,team);orb(x,3,-2.7,1,.7,.3,glow);}box(0,1.6,0,4,2,3,dark);}
   else if(type==='barracks'){panel(0,2.5,0,12,5,8);for(const x of [-4,4]){box(x,5.4,0,3,1,9,team);cone(x,6.2,2,.5,2,glow);}box(0,2,-4.2,4,4,.4,dark);for(const x of [-2.3,2.3])box(x,2,-4.5,.3,4,.3,glow);panel(0,.3,-7,6,.5,6);for(let i=0;i<3;i++)box(0,.65,-5-i*1.5,5,.06,.12,edge);}
   else if(type==='forge'){for(const x of [-4,4]){panel(x,2,0,3,4,10);box(x,6,0,1,8,1,edge);}box(0,9,0,10,1,2,team);const hook=ring(0,7.8,0,1.3,glow);hook.rotation.x=0;panel(0,1,0,5,2,7);for(const z of [-2,2])turbine(0,3,z,1.5);}
   else if(type==='roost'){mesh(new T.CylinderGeometry(7,7.7,1.4,12),steel,0,.8,0);ring(0,1.6,0,6,glow);for(const x of [-5,5]){panel(x,2.2,4,2,3,3);turbine(x,4,4,.8);}box(0,1.8,-1,7,.2,.3,team);box(0,1.8,-1,.3,.2,7,team);box(6,4.5,-4,2,8,2,edge);orb(6,9,-4,1.3,.8,1.3,glow);}
   else if(type==='altar'){mesh(new T.CylinderGeometry(4.5,6,2,8),dark,0,1,0);for(let i=0;i<4;i++){const a=i*Math.PI/2,x=Math.cos(a)*4,z=Math.sin(a)*4;cone(x,5,z,1.2,9,edge);orb(x,7,z,.45,.6,.45,glow);}mesh(new T.OctahedronGeometry(2.5),glow,0,7,0);ring(0,4,0,3.4,team);ring(0,9,0,2.7,edge);}
   else if(type==='mill'){panel(0,1,0,11,2,8);for(const x of [-3,0,3])panel(x,3,2,2.5,3,3);box(-4,5,-2,1,8,1,edge);box(0,8.5,-2,9,.7,1,team);box(3,6.5,-2,.15,4,.15,glow);orb(3,4.2,-2,.8,.6,.8,edge);}
   else if(type==='armory'){for(const x of [-3,3]){mesh(new T.CylinderGeometry(2,2,6,10),steel,x,3,0);ring(x,5.5,0,1.9,team);ring(x,2.8,0,2,glow);}panel(0,2,0,3,4,7);for(const side of [-1,1])for(let i=0;i<3;i++){const barrel=box(side*3,3+i,-3,.4,.4,3,edge);barrel.rotation.y=side*.15;}}
   else if(type==='foundry'){panel(0,2,0,11,4,9);for(const x of [-3,3]){mesh(new T.CylinderGeometry(1.2,1.8,6,10),edge,x,6,1);ring(x,9,1,1.2,glow);for(let i=0;i<3;i++)box(x,7,1,2.6,.25,.25,dark).rotation.y=i*Math.PI/3;}box(0,3,-4.6,4,3,.3,glow);}
   else if(type==='depot'){const roof=mesh(new T.CylinderGeometry(4,4,10,8,1,false,0,Math.PI),team,0,3,0);roof.rotation.z=Math.PI/2;roof.rotation.y=Math.PI/2;panel(0,.5,0,10,1,8);for(const x of [-3,0,3])panel(x,1.8,-4,2,2,2);}
   else if(type==='goldmine'){mesh(new T.CylinderGeometry(5,6,2,10),dark,0,1,0);for(const x of [-3,3])box(x,4,0,1,6,2,team);box(0,7,0,8,1,3,edge);const drill=cone(0,3,0,1.6,5,edge);drill.rotation.z=Math.PI;ring(0,5,0,2,glow);for(const z of [-3,3])turbine(0,2,z,1.2);}
   else if(type==='tower'||type==='bastion'){const heavy=type==='bastion';mesh(new T.CylinderGeometry(heavy?5:2.7,heavy?6:3.5,3,8),dark,0,1.5,0);mesh(new T.CylinderGeometry(heavy?3:1.5,heavy?4:2.5,heavy?6:10,6),steel,0,heavy?5:7,0);const h=heavy?9:13;orb(0,h,0,heavy?4:3,1.5,heavy?4:3,team);for(const x of heavy?[-2,2]:[-.8,.8]){box(x,h,-3,.5,.5,6,edge);orb(x,h,-6,.3,.3,.2,glow);}ring(0,h-1,0,heavy?3:2,glow);}
   else{panel(0,1,0,5,2,5);ring(0,2.2,0,2,glow);}
  }
 }else if(type==='scout'){
  // Unarmed sensor saucer: no barrel or combat wing silhouette.
  mesh(new T.CylinderGeometry(3.2,2.4,1.2,12),steel,0,3,0);ring(0,3.7,0,2.5,team);orb(0,4.1,0,1.7,.8,1.7,dark);
  const dish=new T.Group();dish.name='alienSensor';dish.position.y=5;root.add(dish);const scanner=mesh(new T.CylinderGeometry(1.7,.4,.5,12),edge,0,0,0,dish);scanner.rotation.z=.4;orb(0,.5,0,.45,.45,.45,glow,dish);
  for(const side of [-1,1]){box(side*3.7,3,0,2,.35,1,team);box(side*4.5,4,0,.15,2,.15,edge);orb(side*4.5,5.1,0,.25,.25,.25,glow);}
 }else if(type==='siege'){
  // Six-legged ground artillery with a visibly recoiling mortar cradle.
  panel(0,3.2,0,6,2,8);for(const side of [-1,1])for(let i=0;i<3;i++){const leg=new T.Group();leg.name='alienLeg'+side+'_'+i;leg.userData.phase=i*Math.PI*.65+side;leg.position.set(side*3,3,-2.5+i*2.5);root.add(leg);const upper=box(side*1.3,-.5,0,3,.7,.9,edge,leg);upper.rotation.z=-side*.4;box(side*2.5,-1.8,0,.65,2,.8,steel,leg);box(side*2.5,-2.8,-.3,1.5,.4,1.8,dark,leg);}
  const mortar=new T.Group();mortar.name='alienMortar';mortar.position.set(0,5,-1);root.add(mortar);const barrel=mesh(new T.CylinderGeometry(.85,1.3,6,12),edge,0,2,-1,mortar);barrel.rotation.x=-.6;for(let i=0;i<3;i++){const band=ring(0,1+i,-.4-i*.6,1.1,i===2?glow:dark,mortar);band.rotation.x=-.6;}box(0,0,1,3,1,4,team,mortar);for(const side of [-1,1])orb(side*2,4,2,1,1,1,glow);
 }else if(type==='air'){
  // Swept interceptor wings, split nose and twin nacelles; no sensor dish.
  const hull=mesh(new T.CylinderGeometry(1.3,2.8,10,6),steel,0,3,0);hull.rotation.x=-Math.PI/2;const nose=cone(0,3,-6,1.3,3,steel);nose.rotation.x=-Math.PI/2;orb(0,5.5,-1,1,.7,2,dark);
  for(const side of [-1,1]){const wingShape=new T.Shape();wingShape.moveTo(side, -3);wingShape.lineTo(side*8,4);wingShape.lineTo(side*7,6);wingShape.lineTo(side,3);const wing=mesh(new T.ExtrudeGeometry(wingShape,{depth:.3,bevelEnabled:false}),team,0,3,0);wing.rotation.x=Math.PI/2;box(side*2,3,-5,.55,.55,4,edge);orb(side*3,3,4,1,1,2,dark);orb(side*3,3,5.8,.75,.75,.25,glow);const fin=box(side*3,4.7,4,.3,3,2,steel);fin.rotation.z=side*.25;}
 }else if(type==='air2'){
  // Leviathan is a heavy interceptor spacecraft: plated hull, engine pods,
  // swept mechanical wings and twin lasers. No organic wings, tail or legs.
  const hull=mesh(new T.CylinderGeometry(1.8,3.5,12,8),steel,0,3,0);hull.rotation.x=-Math.PI/2;const nose=cone(0,3,-7,1.8,4,steel);nose.rotation.x=-Math.PI/2;panel(0,6.3,1,4,.8,6);orb(0,7,-2,1.4,.7,2.4,dark);box(0,7.3,-2,1,.15,3,glow);
  for(const side of [-1,1]){const shape=new T.Shape();shape.moveTo(side*1,-3);shape.lineTo(side*9,3);shape.lineTo(side*8,6);shape.lineTo(side*2,4);const wing=mesh(new T.ExtrudeGeometry(shape,{depth:.6,bevelEnabled:true,bevelThickness:.12,bevelSize:.1,bevelSegments:1}),team,0,3,0);wing.rotation.x=Math.PI/2;
   const engine=mesh(new T.CylinderGeometry(1.1,1.5,6,12),edge,side*5,3.2,3);engine.rotation.x=-Math.PI/2;orb(side*5,3.2,6,1,1,.3,glow);box(side*3,3,-5,.8,.8,6,edge);orb(side*3,3,-8,.4,.4,.2,glow);const fin=box(side*2.8,5,3,.3,3,3,steel);fin.rotation.z=side*.3;for(let i=0;i<3;i++)box(side*5,4.5,1+i,2,.15,.2,dark);
  }
 }else if(type==='naniteTender'){
  glow.color.set(0x7ae6bc);glow.emissive.set(0x2acb9f);orb(0,3,0,2,1.5,2.5,steel);ring(0,3.5,0,2,team);const halo=new T.Group();halo.name='alienHalo';halo.position.y=5;root.add(halo);ring(0,0,0,2,glow,halo);for(const side of [-1,1]){box(side*2.5,3,-1,2,.4,.6,edge);orb(side*3,3,-1,.5,.5,.5,glow);mesh(new T.CylinderGeometry(.6,.6,3,10),glow,side*1.2,4,1);box(side*1.2,4,1,1.4,.3,1.4,edge);}box(0,3,-2.4,1.5,.2,.2,glow);box(0,3,-2.4,.2,1.5,.2,glow);
 }else if(type==='worker'){
  // Four-legged industrial drone: exposed cargo rack and an articulated tool,
  // never the rifle issued to infantry. Hands and equipment share one pivot.
  panel(0,4,0,4,2.8,4);orb(0,5,-2,1.2,1,1,dark);orb(0,5.2,-2.9,.8,.35,.2,glow);
  for(const side of [-1,1])for(let i=0;i<2;i++){const leg=new T.Group();leg.name='alienLeg'+side+'_'+i;leg.userData.phase=i*Math.PI+side;leg.position.set(side*2,3,-1.5+i*3);root.add(leg);const strut=box(side*.7,-.5,0,2,.6,.6,edge,leg);strut.rotation.z=-side*.5;box(side*1.4,-1.8,0,.5,2,.6,steel,leg);box(side*1.4,-2.8,0,1,.4,1.6,dark,leg);}
  const tool=new T.Group();tool.name='alienTool';tool.position.set(2,4,-2);root.add(tool);box(.5,0,-1,.5,.6,2,edge,tool);orb(.5,0,-2,.5,.5,.5,dark,tool);box(.5,0,-3,.5,.5,2,team,tool);const tip=cone(.5,0,-4,.6,2,edge,tool);tip.rotation.x=-Math.PI/2;
  for(const x of [-1.5,1.5])box(x,6.3,1,.25,2.5,3,edge);for(let i=0;i<3;i++)box(0,6,0+i,3,.2,.2,dark);
  if(/carry|logs/.test(name))for(let i=0;i<3;i++){const cargo=mesh(new T.CylinderGeometry(.5,.5,3,8),/logs/.test(name)?skin:edge,i-1,7,1);cargo.rotation.x=Math.PI/2;}
 }else{
  const melee=type==='melee'||type==='phaseSentinel',sniper=type==='sniper',seer=type==='hero2',warden=type==='hero',sovereign=type==='hero3',binder=type==='trapper'||type==='nullDisruptor',banner=type.startsWith('banner'),broad=melee||warden;
  // Role proportions are authored here, not merely recolors of a shared soldier.
  const torso=mesh(new T.CylinderGeometry(broad?2.1:1.3,broad?1.6:1,4.2,6),steel,0,6,0);torso.scale.z=.7;
  box(0,6.6,-1.15,broad?3.4:1.8,2,.4,team);for(let i=0;i<3;i++)box(0,5.4+i*.65,-1.4,broad?2.5:1.5,.12,.15,edge);
  orb(0,10,0,sniper?1.05:1.3,sniper?1.45:1.8,1.1,melee?edge:skin);orb(0,10.3,-1, sniper?.8:1,.28,.25,glow);for(const side of [-1,1]){orb(side*.75,10.6,-.85,.2,.22,.22,glow);const jaw=cone(side*.65,9,-.7,.22,1.4,edge);jaw.rotation.z=side*.3;}const crest=mesh(new T.CylinderGeometry(.45,.7,2.2,5),dark,0,11.5,.25);crest.rotation.x=-.3;
  const arms=[];for(const side of [-1,1]){const leg=new T.Group();leg.position.set(side*(broad?1.2:.8),4,0);leg.name='alienLeg'+side;root.add(leg);box(0,-1,0,broad?1.1:.65,3,1,steel,leg);box(0,-3,1,.65,2,.8,edge,leg);box(0,-4,0,1,.5,2,dark,leg);
   const arm=new T.Group();arm.position.set(side*(broad?2.4:1.7),8,0);arm.name='alienArm'+side;root.add(arm);arms.push(arm);const shoulder=mesh(new T.CylinderGeometry(broad?1.35:.7,broad?1:.6,1.2,6),broad?team:edge,0,0,0,arm);shoulder.rotation.z=side*.3;box(0,-1.5,0,.65,3,.8,steel,arm);orb(0,-3,-.3,.55,.6,.55,skin,arm);
   if(melee&&side===1){const blade=mesh(new T.ConeGeometry(.55,5,4),glow,0,-3,-2.7,arm);blade.rotation.x=-Math.PI/2;box(0,-3,-.8,1.2,.8,1,edge,arm);}
  }
  const right=arms[1],left=arms[0];
  // Shared blue energy material and layered fittings retain GPU instancing.
  if(melee){const blue=new T.MeshStandardMaterial({color:0x286eff,emissive:0x145aff,emissiveIntensity:1.7,metalness:.5,roughness:.22});right.traverse(o=>{if(o.isMesh&&o.geometry.type==='ConeGeometry')o.material=blue;});for(const side of [-1,1])for(let i=0;i<3;i++){box(side*2.4,8.3-i*.32,-.1,1.8,.16,1.8,edge);orb(side*1.5,6.9-i*.55,-1.42,.09,.09,.06,edge);}box(0,4.3,-1.1,2.4,.65,.25,dark);for(const side of [-1,1])box(side*1.15,2.5,-.6,.85,.7,.3,team);}
  if(melee){const plate=mesh(new T.CylinderGeometry(type==='phaseSentinel'?3.3:3.0,type==='phaseSentinel'?3.3:3.0,.45,6),team,0,-2,-1,left);plate.rotation.x=Math.PI/2;plate.name='alienShield';ring(0,-2,-1.3,type==='phaseSentinel'?2.5:2.2,glow,left).rotation.x=0;for(const side of [-1,1]){const crest=cone(side*.6,12.2,.1,.35,2.6,edge);crest.rotation.z=side*.2;box(side*2.3,8.6,0,2,.35,2,edge);}const cloak=mesh(new T.ConeGeometry(2.5,6,6,1,true),dark,0,5,1.4);cloak.scale.z=.45;}
  if(type==='nullDisruptor'){const antenna=box(0,12,1,.2,4,.2,edge);orb(0,14.1,1,.5,.5,.5,glow);}

  if(type==='ranged'||sniper){
   // The right hand grips the stock; the left arm braces the forward section.
   const rifle=new T.Group();rifle.name='alienRifle';right.add(rifle);box(0,-3,-2.2,sniper?.65:1,.8,sniper?5:3.6,dark,rifle);box(0,-3,-(sniper?5:3.8),.45,.45,sniper?3.5:1.8,edge,rifle);orb(0,-3,-(sniper?6.8:4.7),.3,.3,.15,glow,rifle);box(0,-3,-1,1.15,1.3,1.3,team,rifle);left.scale.y=1.4;left.rotation.x=.45;left.rotation.z=.7;
   if(sniper){box(0,-2.3,-3,.5,.5,1.8,glow,rifle);for(const side of [-1,1]){const hood=box(side*1.1,10,0,.35,2.2,2.4,dark);hood.rotation.z=side*.15;}box(0,11.2,0,2.4,.35,2.8,dark);const cloak=mesh(new T.ConeGeometry(2.2,6,5,1,true),dark,0,5,1.2);cloak.scale.z=.4;}
   else{for(let i=0;i<3;i++)box(.6,-3,-1.2-i*.7,.2,.5,.25,glow,rifle);panel(0,7,1.8,2,3,1);}
  }else if(binder||seer){
   // Open-handed control specialists: floating focus rings and containment pack.
   for(const [i,arm]of arms.entries()){const focus=ring(0,-3,-.7,binder?1.3:1.7,glow,arm);focus.rotation.x=Math.PI/2;orb(0,-3,-.8,.5,.5,.5,glow,arm);arm.rotation.x=-.45;}
   const halo=new T.Group();halo.name='alienHalo';halo.position.set(0,9,1);root.add(halo);ring(0,0,0,seer?3:2.3,edge,halo).rotation.x=0;for(let i=0;i<4;i++){const a=i*Math.PI/2;orb(Math.cos(a)*2.3,Math.sin(a)*2.3,0,.35,.35,.35,glow,halo);}
   if(binder)for(const side of [-1,1]){mesh(new T.CylinderGeometry(.6,.6,4,10),glow,side*1.1,6.5,2);box(side*1.1,6.5,2,1.5,.3,1.5,edge);}
   else{const mantle=mesh(new T.ConeGeometry(2.5,5,6,1,true),team,0,5,0);mantle.scale.z=.65;for(const side of [-1,1])cone(side*1.3,12,0,.3,2.5,edge);}
  }else if(warden){
   const shield=new T.Group();shield.name='alienShield';left.add(shield);const plate=mesh(new T.CylinderGeometry(2.2,2.2,.4,6),team,0,-2,-1,shield);plate.rotation.x=Math.PI/2;ring(0,-2,-1.3,1.4,glow,shield).rotation.x=0;
   const blade=cone(0,-3,-3,.8,6,edge,right);blade.rotation.x=-Math.PI/2;box(0,-3,-.6,2,.3,.6,glow,right);for(const x of [-1,1])cone(x,12.2,0,.3,2,edge);
  }else if(sovereign){
   const crown=new T.Group();crown.position.y=11.7;crown.name='alienHalo';root.add(crown);ring(0,0,0,2,glow,crown);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;cone(Math.cos(a)*1.8,1,Math.sin(a)*1.8,.3,2,edge,crown);}
   const mantle=mesh(new T.ConeGeometry(3,7,6,1,true),dark,0,5,0);mantle.scale.z=.6;for(const side of [-1,1]){const pylon=box(side*3.3,8,1,.8,4,1,team);pylon.rotation.z=side*.2;orb(side*3.3,10,1,.6,.6,.6,glow);}
   box(0,-1,-.5,.3,9,.3,edge,right);orb(0,3.7,-.5,.9,.9,.9,glow,right);
  }else if(banner){box(0,1,-.5,.3,13,.3,edge,right);box(2,5,-.5,4,5,.15,team,right);orb(0,8,-.5,.6,.6,.6,glow,right);panel(0,6,1.5,3,3,1);}

 }
 if(type.startsWith('base')&&level>=2){const expansion=new T.Group();expansion.add(...root.children.slice());expansion.scale.set(1.08,1,1.08);root.add(expansion);}root.name=name;root.userData.alien=true;return root;
}
/** Animation touches only authored pivots; no geometry regeneration per frame. */
export function animateAlien(entry,e,time){
 if(!entry.name.startsWith('alien-')||e.building)return;
 if(!entry.alienPivots){entry.alienPivots=[];entry.model.traverse(o=>{if(/^alien(Wing|Tail|Leg|Arm|Tool|Sensor|Mortar|Halo|Rifle)/.test(o.name))entry.alienPivots.push(o);});}
 const walk=e.walkUntil>time,attack=e.action?.until>time,progress=attack?Math.max(0,Math.min(1,1-(e.action.until-time)/e.action.duration)):0,strike=Math.sin(progress*Math.PI);
 for(const o of entry.alienPivots){const side=o.name.includes('-1')?-1:1;
  if(o.name.startsWith('alienWing'))o.rotation.z=side*Math.sin(time*4)*.28;
  else if(o.name==='alienTail')o.rotation.y=Math.sin(time*2)*.25;
  else if(o.name==='alienSensor')o.rotation.y=time*.8;
  else if(o.name==='alienHalo')o.rotation.y=time*.3;
  else if(o.name==='alienMortar')o.position.z=-1+(attack?Math.sin(progress*Math.PI)*.8:0);
  else if(o.name==='alienRifle')o.position.z=attack?strike*.25:0;
  else if(o.name==='alienTool')o.rotation.x=attack?-strike*.8:0;
  else if(o.name.startsWith('alienLeg'))o.rotation.x=walk?Math.sin(time*9+(o.userData.phase??side*Math.PI*.5))*.4:0;
  else if(o.name.startsWith('alienArm')){
   // Braced rifles, shields and focus hands retain their guard poses at rest.
   const braced=['ranged','sniper'].includes(e.type),caster=['trapper','hero2'].includes(e.type);
   o.rotation.x=braced?(side<0?.45:0):caster?-.45-(attack?strike*.6:0):attack?-strike*(e.type==='melee'?1.3:.65):walk?Math.sin(time*9-side*Math.PI*.5)*.25:0;
  }
 }
}
