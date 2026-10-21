/** Original Astral Remnant models. Shared immutable templates are cloned by the
 * battlefield, so geometry and PBR materials remain batchable across armies. */
import * as T from 'three';
export function createAlienModel(name){
 const root=new T.Group(),unit=!name.startsWith('alien-world-'),type=name.replace(/^alien-(world-)?/,'').replace(/-(carry|logs|hammer|pick)$/,''),level=Number(type.match(/level(\d)/)?.[1]||1);
 const steel=new T.MeshStandardMaterial({color:0x374852,metalness:.78,roughness:.38}),edge=new T.MeshStandardMaterial({color:0xa1b4b8,metalness:.85,roughness:.27}),dark=new T.MeshStandardMaterial({color:0x151f30,metalness:.6,roughness:.5}),skin=new T.MeshStandardMaterial({color:0x697e98,roughness:.58}),glow=new T.MeshStandardMaterial({color:0x74e7e2,emissive:0x28bac1,emissiveIntensity:1.3,metalness:.3,roughness:.25}),team=new T.MeshStandardMaterial({color:0x899bbd,metalness:.35,roughness:.42});team.userData.alienTeam=true;
 function mesh(g,m,x=0,y=0,z=0,parent=root){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
 const box=(x,y,z,w,h,d,m=steel,p=root)=>mesh(new T.BoxGeometry(w,h,d),m,x,y,z,p);
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
  else{const sizes={house:[8,4,7],barracks:[11,5,9],forge:[12,6,10],roost:[12,3,12],altar:[8,7,8],mill:[9,5,8],tower:[5,12,5],bastion:[9,10,9],goldmine:[10,7,9]},[w,h,d]=sizes[type]||[9,5,8];panel(0,h*.5,0,w,h,d);box(0,h+.3,0,w*.85,.5,d*.85,team);for(const side of [-1,1]){box(side*w*.4,h*.5,-d*.51,.3,h*.7,.2,glow);for(let i=0;i<4;i++)box(side*w*.51,h*.4+i*.5,1,.25,.2,d*.55,dark);}
   if(type==='roost'){ring(0,h+1,0,4,glow);for(const x of [-4,4])cone(x,h+3,0,.6,5);}
   else if(type==='tower'||type==='bastion'){orb(0,h+1,0,3,1.5,3,edge);box(0,h+1,-4,1,1,6,glow);}
   else if(type==='altar'){cone(0,h+3,0,1.6,6,glow);ring(0,h+1,0,3,edge);}
   else if(type==='forge'||type==='foundry'){for(const x of [-3,3]){box(x,h+1,0,2,2,5,dark);orb(x,h+2,0,.8,.8,.8,glow);}}
   else if(type==='mill'||type==='goldmine'){mesh(new T.CylinderGeometry(2,2,4,12),edge,0,h+2,0);ring(0,h+4,0,2,glow);}
  }
 }else if(['air','scout','siege'].includes(type)){
  orb(0,3,0,type==='siege'?3:4,1.4,6,steel);orb(0,3.9,-2,2,.9,2,glow);for(const side of [-1,1]){const wing=box(side*5,2.8,1,7,.45,5,team);wing.rotation.z=side*.1;orb(side*4,2.5,4,1.3,1.3,2,dark);orb(side*4,2.5,5.6,.9,.9,.3,glow);for(let i=0;i<4;i++)box(side*(2+i),3.1,1,.09,.1,4,edge);}if(type==='siege')box(0,4,-6,1.8,1.8,8,edge);
 }else if(type==='air2'){
  orb(0,4,0,2.3,2.4,5,skin);orb(0,5,-4,2,1.6,2,dark);for(const side of [-1,1]){orb(side*1.2,5.5,-5,.5,.5,.4,glow);const wing=new T.Group();wing.position.set(side*1.5,4,0);wing.name='alienWing'+side;root.add(wing);const shape=new T.Shape();shape.moveTo(0,0);shape.lineTo(side*10,2);shape.lineTo(side*8,-3);shape.lineTo(side*4,-5);shape.lineTo(0,-2);const membrane=mesh(new T.ShapeGeometry(shape),new T.MeshStandardMaterial({color:0x627e9d,roughness:.43,metalness:.15,side:T.DoubleSide}),0,0,0,wing);membrane.rotation.x=-Math.PI/2;for(let i=1;i<5;i++){const rib=box(side*i*1.7,0,0,.12,.16,5-i*.5,edge,wing);rib.rotation.y=side*.24;}for(let i=0;i<3;i++)cone(side*(1+i*.3),5+i,1+i, .35,2,edge);}
  const tail=new T.Group();tail.position.z=4;tail.name='alienTail';root.add(tail);for(let i=0;i<6;i++)orb(0,3-i*.25,i*1.2,1-i*.12,.8-i*.1,1,skin,tail);
 }else{
  // Lean nonhuman silhouette, digitigrade legs and attached hand equipment.
  orb(0,6,0,1.8,2.5,1.3,steel);box(0,6.5,-1.3,2.4,2.5,.5,team);orb(0,10,0,1.5,2,1.3,skin);orb(0,10.4,-1.15,1,.45,.3,glow);for(const side of [-1,1]){const leg=new T.Group();leg.position.set(side,4,0);leg.name='alienLeg'+side;root.add(leg);box(0,-1,0,.8,3,1,steel,leg);box(0,-3,1,.7,2,1,edge,leg);box(0,-4,0,1,.5,2.5,dark,leg);const arm=new T.Group();arm.position.set(side*2.2,8,0);arm.name='alienArm'+side;root.add(arm);orb(0,0,0,1,.9,1,edge,arm);box(0,-1.5,0,.7,3,.8,steel,arm);orb(0,-3,-.3,.6,.7,.6,skin,arm);if(side===1){box(0,-3,-1.8,.7,.7,3,dark,arm);if(type==='melee')cone(0,-3,-3,.6,4,glow,arm).rotation.x=Math.PI/2;else{box(0,-3,-3,1,1,2,edge,arm);orb(0,-3,-4,.4,.4,.3,glow,arm);}}}
  if(type==='worker'){panel(0,6,2,3,4,1.5);if(/carry|logs/.test(name))for(let i=0;i<3;i++)box(i-1,9,2, .8,3,1,/logs/.test(name)?skin:edge);}
  if(type.startsWith('hero')){for(const x of [-1,1])cone(x,12.5,0,.4,3,edge);ring(0,7,0,3,glow);}
  if(type.startsWith('banner')){box(3,8,0,.25,16,.25,edge);box(5,13,0,4,5,.2,team);}
 }
 if(type.startsWith('base')&&level>=2){const expansion=new T.Group();expansion.add(...root.children.slice());expansion.scale.set(1.08,1,1.08);root.add(expansion);}root.name=name;root.userData.alien=true;return root;
}
/** Animation touches only authored pivots; no geometry regeneration per frame. */
export function animateAlien(entry,e,time){if(!entry.name.startsWith('alien-')||e.building)return;if(!entry.alienPivots){entry.alienPivots=[];entry.model.traverse(o=>{if(/^alien(Wing|Tail|Leg|Arm)/.test(o.name))entry.alienPivots.push(o);});}const walk=e.walkUntil>time,attack=e.action?.until>time;for(const o of entry.alienPivots){const side=o.name.endsWith('-1')?-1:1;if(o.name.startsWith('alienWing'))o.rotation.z=side*Math.sin(time*4)*.28;else if(o.name==='alienTail')o.rotation.y=Math.sin(time*2)*.25;else if(o.name.startsWith('alienLeg'))o.rotation.x=walk?Math.sin(time*9+side*Math.PI*.5)*.45:0;else o.rotation.x=attack?-Math.sin((1-(e.action.until-time)/e.action.duration)*Math.PI)*1.3:walk?Math.sin(time*9-side*Math.PI*.5)*.25:0;}}
