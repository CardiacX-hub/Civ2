// Shared painted fantasy art direction. Runs in the Frontier renderer closure.
// Textures and lighting are baked into sprites; none of this runs during a match.
function kawPaintTexture(kind){
 if(kawTextures['paint-'+kind])return kawTextures['paint-'+kind];
 const c=document.createElement('canvas');c.width=c.height=512;const g=c.getContext('2d');
 let seed=1947;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const wash=g.createLinearGradient(0,0,512,512);wash.addColorStop(0,'#fffdf3');wash.addColorStop(.45,'#d8d8cf');wash.addColorStop(1,'#aeb7bb');g.fillStyle=wash;g.fillRect(0,0,512,512);
 // Broad brush strokes and restrained edge wear, rather than photographic noise.
 for(let i=0;i<180;i++){const x=rand()*512,y=rand()*512;g.fillStyle=i%3?'rgba(255,250,227,.07)':'rgba(41,53,65,.06)';g.beginPath();g.moveTo(x,y);g.lineTo(x+20+rand()*80,y+rand()*12);g.lineTo(x+rand()*75,y+15+rand()*25);g.lineTo(x-12,y+12);g.fill();}
 if(kind==='wood')for(let i=0;i<60;i++){const x=i*9+rand()*5;g.strokeStyle=i%3?'#38404b24':'#ffffff44';g.lineWidth=1+rand()*2;g.beginPath();g.moveTo(x,0);g.bezierCurveTo(x+10,150,x-12,300,x+4,512);g.stroke();}
 if(kind==='metal'){g.fillStyle='#ffffff88';g.fillRect(4,4,504,4);g.fillRect(4,4,4,504);g.fillStyle='#33425833';g.fillRect(4,501,504,7);for(let i=0;i<32;i++){g.strokeStyle='#ffffff44';g.lineWidth=1;const x=rand()*512,y=rand()*512;g.beginPath();g.moveTo(x,y);g.lineTo(x+3+rand()*9,y-3);g.stroke();}}
 if(kind==='cloth')for(let i=0;i<10;i++){const x=i*56;const fold=g.createLinearGradient(x,0,x+48,0);fold.addColorStop(0,'#26334a22');fold.addColorStop(.4,'#ffffff22');fold.addColorStop(1,'#26334a11');g.fillStyle=fold;g.fillRect(x,0,48,512);}
 if(kind==='stone')for(let i=0;i<26;i++){g.strokeStyle='#33425322';g.lineWidth=1.5;const x=rand()*512,y=rand()*512;g.beginPath();g.moveTo(x,y);g.lineTo(x+14,y+6);g.lineTo(x+21,y+3);g.stroke();}
 if(kind==='scales')for(let row=0;row<14;row++)for(let col=0;col<12;col++){const x=col*46+(row%2)*23,y=row*38;g.fillStyle=(row+col)%3?'#ffffff16':'#34405022';g.beginPath();g.moveTo(x-22,y);g.lineTo(x,y+29);g.lineTo(x+22,y);g.fill();g.strokeStyle='#34405033';g.stroke();}
 const t=Ug('cloth').clone();t.image=c;t.needsUpdate=true;kawTextures['paint-'+kind]=t;return t;
}
function kawMaterial(color,kind='stone',metal=0){
 const mat=F(color,metal,metal?.52:.88).clone();mat.map=kawPaintTexture(kind);mat.bumpMap=mat.map;mat.bumpScale=kind==='wood'?.09:.035;mat.roughnessMap=null;mat.clearcoat=metal?.18:0;mat.envMapIntensity=.65;return mat;
}
function kawPlate(parent,w,h,d,mat,x,y,z){
 const s=new Ce;s.moveTo(-w*.5,h*.35);s.lineTo(-w*.36,h*.5);s.lineTo(w*.36,h*.5);s.lineTo(w*.5,h*.35);s.lineTo(w*.43,-h*.3);s.lineTo(0,-h*.5);s.lineTo(-w*.43,-h*.3);s.closePath();
 return J(parent,new Oe(s,{depth:d,bevelEnabled:true,bevelSize:Math.min(1.2,w*.08),bevelThickness:.6,bevelSegments:1}),mat,x,y,z-d/2);
}
function kawHeraldry(parent,x,y,z,size,gold){
 // Small lion/sun device, readable on breastplates and horse barding.
 const crest=Re(parent,x,y,z);crest.scale.setScalar(size);V(crest,2.4,gold,0,2,0,.8,1.2,.22);V(crest,1.7,gold,0,6,0,1,1,.22);
 for(const side of [-1,1])for(const j of [0,1]){const limb=ot(crest,1.3,5,.6,gold,side*(3+j),2-j*4,.4);limb.rotation.z=side*(j?.6:1);}
 const crown=ot(crest,5,1,.5,gold,0,8,.3);for(const x of [-2,0,2])ot(crest,.8,2,.5,gold,x,9,.3);return crest;
}
function kawClothPanel(parent,w,h,mat,trim,x,y,z){
 const panel=kawPlate(parent,w,h,.8,mat,x,y,z);for(const side of [-1,1])ot(parent,.8,h*.8,1,trim,x+side*w*.43,y,z+.9);ot(parent,w*.65,.9,1,trim,x,y-h*.38,z+.9);return panel;
}
function kawDrapedBarding(parent,side,blue,gold){
 const cloth=Re(parent,side*14,38,-2);cloth.rotation.y=side*Math.PI/2;
 const shape=new Ce;shape.moveTo(-23,7);shape.lineTo(20,7);shape.lineTo(19,-12);shape.lineTo(8,-24);shape.lineTo(-2,-17);shape.lineTo(-16,-23);shape.lineTo(-25,-12);shape.closePath();
 J(cloth,new Oe(shape,{depth:.6,bevelEnabled:false}),blue,0,0,0);
 const vertices=[[-23,7],[20,7],[19,-12],[8,-24],[-2,-17],[-16,-23],[-25,-12],[-23,7]];
 for(let i=0;i<vertices.length-1;i++){const [a,b]=[vertices[i],vertices[i+1]],dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy),border=ot(cloth,len,1.2,1,gold,(a[0]+b[0])/2,(a[1]+b[1])/2,1);border.rotation.z=Math.atan2(dy,dx);}
 kawHeraldry(cloth,3,-2,1.2,1.25,gold);return cloth;
}
function kawArch(parent,x,y,z,w,h,stone,trim){
 const frame=new Ce;frame.moveTo(-w/2,0);frame.lineTo(-w/2,h*.65);frame.quadraticCurveTo(-w/2,h,w*0,h);frame.quadraticCurveTo(w/2,h,w/2,h*.65);frame.lineTo(w/2,0);frame.closePath();
 J(parent,new Oe(frame,{depth:1.5,bevelEnabled:true,bevelSize:.6,bevelThickness:.4,bevelSegments:1}),stone,x,y,z);
 const inner=new Ce;inner.moveTo(-w*.31,1.5);inner.lineTo(-w*.31,h*.65);inner.quadraticCurveTo(0,h*.95,w*.31,h*.65);inner.lineTo(w*.31,1.5);inner.closePath();J(parent,new Oe(inner,{depth:.5,bevelEnabled:false}),kawMaterial(0x26333b),x,y,z+2);
 ot(parent,w*.7,1.3,2,trim,x,y+1,z+3);ot(parent,.6,h*.68,1,trim,x,y+h*.38,z+3);
}
function kawCavalier(){
 const root=new Kt,steel=kawMaterial(0xc1c9d0,'metal',.68),gold=kawMaterial(0xd6b36b,'metal',.55),dark=kawMaterial(0x443b35,'skin'),leather=kawMaterial(0x614432,'wood'),blue=kawMaterial(0x254b86,'cloth'),black=kawMaterial(0x202733),edge=kawMaterial(0xe3e4dc,'metal',.6);
 // Long-legged horse with overlapping plate barding and an angular chamfron.
 V(root,22,dark,0,39,0,.62,.55,1.5);V(root,16,steel,0,41,19,.85,.8,1);V(root,16,steel,0,41,-20,.9,.7,1);ot(root,21,4,25,leather,0,50,-4);
 for(const side of [-1,1]){
  for(let i=0;i<4;i++){const armor=kawPlate(root,13,18,2,steel,side*13,38,17-i*11);armor.rotation.y=side*Math.PI/2;kawPlate(root,13,2,2.3,gold,side*13.5,31,17-i*11).rotation.y=side*Math.PI/2;}
  kawDrapedBarding(root,side,blue,gold);
 }
 const neck=Re(root,0,35,23);V(neck,14,dark,0,10,3,.58,1.3,.72);V(neck,14,steel,0,12,5,.6,1.35,.75);
 for(let i=0;i<5;i++){const collar=ot(neck,16-i*.7,2,8,steel,0,23-i*4,2-i);collar.rotation.x=-.15;ot(neck,16.5-i*.7,.9,8,gold,0,23.8-i*4,2-i);}
 const head=Re(neck,0,28,12);head.rotation.x=-.25;V(head,10,dark,0,0,0,.62,1,.92);V(head,10,steel,0,1,1,.64,1,.9);kawPlate(head,9,19,1.2,steel,0,-2,8);kawPlate(head,1.5,20,1.3,gold,0,-2,9);V(head,6,dark,0,-10,8,1,.6,1);ot(head,12,1.2,4,gold,0,-8,9);
 for(const side of [-1,1]){J(head,st('cone',2.5,12,6),dark,side*5,12,-2).rotation.z=-side*.2;V(head,1.7,black,side*6,3,4,.35,.7,1);J(head,st('torus',2.3,.6),gold,side*7,-8,6).rotation.y=Math.PI/2;ot(neck,1.4,27,2,leather,side*8,9,12).rotation.x=.15;const rein=ot(root,1,2,34,leather,side*8,52,11);rein.rotation.x=.1;}
 const legs=[];for(const z of [-21,21])for(const x of [-9,9]){const leg=Re(root,x,38,z);J(leg,st('cylinder',2.5,3.4,18,10),dark,0,-9,0);V(leg,4,steel,0,-18,1,1,.8,1);J(leg,st('cylinder',2,2.7,15,8),steel,0,-26,1);for(let j=0;j<3;j++)kawPlate(leg,6,5,2,steel,0,-22-j*4,3);ot(leg,7,4,10,black,0,-35,3);ot(leg,7.5,1,10,gold,0,-33,3);legs.push(leg);}
 for(let i=0;i<8;i++)V(root,3.6,black,0,36-i*3,-34-i*2,.7,1.5,.8);
 const rider=kawCharacter('knight');rider.scale.setScalar(.75);rider.position.set(0,38,-4);root.add(rider);const n=rider.userData;
 n.head.clear();V(n.head,14,steel,0,0,0,.84,1.1,.87);kawPlate(n.head,22,24,2,steel,0,-2,11);ot(n.head,22,2,2,black,0,3,13);ot(n.head,2.4,24,2,gold,0,-1,14);for(const side of [-1,1])for(let j=0;j<3;j++)ot(n.head,.8,8,.6,black,side*(4+j*3),-6,13.5);
 J(n.head,st('cone',3,9,6),gold,0,18,-1);const plume=Re(n.head,0,19,-3);for(let j=0;j<7;j++)V(plume,4.5,blue,0,5-j*.6,-j*3.5,.6,1.1,1);root.userData.plume=plume;
 n.torso.clear();kawPlate(n.torso,26,25,9,steel,0,0,3);kawClothPanel(n.torso,17,22,blue,gold,0,0,10);kawHeraldry(n.torso,0,-1,12,1,gold);ot(n.torso,27,3,15,leather,0,-11,0);V(n.torso,3,gold,0,-11,10,1,1,.4);
 n.weapon.parent.remove(n.weapon);for(let i=0;i<2;i++){const arm=n.arms[i];arm.clear();for(let j=0;j<3;j++){kawPlate(arm,17-j*2,8,9,steel,0,-j*4,1);ot(arm,16-j*2,1.2,10,gold,0,3-j*4,2);}J(arm,st('cylinder',3.6,4.4,13,8),steel,0,-10,0);V(arm,4.4,steel,0,-17,1,1,.8,1);}n.arms[1].add(n.weapon);n.weapon.position.set(0,-17,1);
 for(const leg of n.legs){leg.clear();J(leg,st('cylinder',4,5,13,8),steel,0,-6,0);kawPlate(leg,10,9,4,steel,0,-11,3);ot(leg,10,1.3,4,gold,0,-7,4);ot(leg,9,7,13,steel,0,-17,3);}
 n.weapon.clear();n.weapon.rotation.set(.8,0,-.2);J(n.weapon,st('cylinder',1.8,1.8,10,8),leather,0,0,0);ot(n.weapon,17,2.5,3,gold,0,6,0);const blade=new Ce;blade.moveTo(-3,7);blade.lineTo(-3,48);blade.lineTo(0,59);blade.lineTo(3,48);blade.lineTo(3,7);blade.closePath();J(n.weapon,new Oe(blade,{depth:1.4,bevelEnabled:true,bevelSize:.5,bevelThickness:.5,bevelSegments:1}),steel,0,0,-.7);ot(n.weapon,.9,40,1,edge,0,28,1);V(n.weapon,2.5,gold,0,-6,0);
 const cape=Re(n.upperBody,0,7,-12);const capeShape=new Ce;capeShape.moveTo(-12,7);capeShape.lineTo(12,7);capeShape.lineTo(18,-20);capeShape.lineTo(7,-32);capeShape.lineTo(0,-27);capeShape.lineTo(-16,-31);capeShape.closePath();J(cape,new Oe(capeShape,{depth:.6,bevelEnabled:false}),blue,0,0,-3);for(const side of [-1,1]){const border=ot(cape,1,32,1,gold,side*14,-9,-3.8);border.rotation.z=-side*.15;}kawHeraldry(cape,0,-8,-4.5,1.4,gold);root.userData={mountedRider:rider,horseLegs:legs,horseHead:neck,cape,plume};return root;
}
function kawFinishPaintedModel(root,name,horde){
 const steel=kawMaterial(0xb8c6d0,'metal',.6),gold=kawMaterial(0xd0ad67,'metal',.5),blue=kawMaterial(0x294e83,'cloth'),iron=kawMaterial(0x48505c,'metal',.55);
 if(root.userData.arms){const n=root.userData;
  if(name==='knight'){kawClothPanel(n.torso,17,20,blue,gold,0,0,14);kawHeraldry(n.torso,0,-1,16,1,gold);for(const arm of n.arms)for(let i=0;i<3;i++){kawPlate(arm,16-i*2,5,10,steel,0,1-i*3,0);ot(arm,16-i*2,.8,10,gold,0,3-i*3,1);}for(const leg of n.legs)kawPlate(leg,9,9,3,steel,0,-8,5);}
  if(['orc','devoured'].includes(name))for(const arm of n.arms){kawPlate(arm,16,9,10,iron,0,-9,2);for(const x of [-5,5])V(arm,.9,gold,x,-7,8);}
  if(['ranger','troll','marksman','hunter'].includes(name)){const leather=kawMaterial(0x79573b,'wood');for(const leg of n.legs)kawPlate(leg,7,8,2,leather,0,-8,4);for(const arm of n.arms)ot(arm,7,6,8,leather,0,-10,0);}
 }
 if(name.startsWith('world-')&&!['world-gold','world-tree','world-pine','world-mountain'].includes(name)&&!name.includes('construction')){
  const kind=name.slice(6),wide=kind==='base'?70:['wall','tower'].includes(kind)?0:58;
  if(wide){const stone=kawMaterial(horde?0x655d51:0xc1c1b2),wood=kawMaterial(0x72553a,'wood'),trim=horde?iron:gold;
   // Heavy foundations, inset entrances, lintels and contrasting corner blocks.
   for(const side of [-1,1]){ot(root,5,29,5,stone,side*(wide/2-2),15,kind==='base'?27:22);ot(root,7,2,7,trim,side*(wide/2-2),30,kind==='base'?27:22);}
   for(let step=0;step<3;step++)ot(root,21+step*4,2,7,stone,0,5-step*2,29+step*6);
   for(const x of [-7,7])ot(root,2,20,3,wood,x,12,kind==='base'?29:25);ot(root,18,3,4,trim,0,23,kind==='base'?29:25);
   if(!horde){const crest=Re(root,0,32,kind==='base'?29:24);kawClothPanel(crest,12,13,blue,gold,0,0,0);kawHeraldry(crest,0,-1,1, .65,gold);}
   for(const x of [-19,19]){ot(root,8,2,4,trim,x,13,kind==='base'?29:25);ot(root,2,9,1,trim,x,19,kind==='base'?29:25);}
   if(!horde)for(const x of [-20,20])kawArch(root,x,13,kind==='base'?28:24,11,15,stone,trim);
   // Roof finials, carved eaves and a front gable give each footprint depth.
   if(!['base','bastion'].includes(kind)){ot(root,68,2,3,wood,0,31,25);for(const x of [-28,28]){const brace=ot(root,2,10,3,wood,x,27,24);brace.rotation.z=x>0?-.6:.6;}V(root,2.3,trim,0,52,0);}
   if(kind==='base'){kawArch(root,0,47,11,15,18,stone,trim);for(const x of [-32,32])ot(root,3,21,2,horde?iron:blue,x,39,36);}
   if(kind==='forge'||kind==='foundry'){const ember=kawMaterial(0xd98942,'metal',.15);kawArch(root,16,3,25,17,17,stone,trim);V(root,4,ember,16,9,28,1,.6,.3);ot(root,11,4,13,iron,-19,8,37);}
   if(kind==='altar'){for(const x of [-16,16]){J(root,st('cylinder',2,2.7,23,8),stone,x,16,32);V(root,3,gold,x,29,32);}}
   if(kind==='armory'){for(const x of [-14,0,14]){J(root,st('cylinder',.8,.8,18,8),wood,x,14,37);kawPlate(root,4,7,1,steel,x,25,37);ot(root,7,1,2,gold,x,20,37);}}
   if(kind==='depot')for(let i=0;i<6;i++){const log=J(root,st('cylinder',2,2,22,8),wood,-18,5+Math.floor(i/3)*4,28+i%3*4);log.rotation.z=Math.PI/2;}
  }
 }
 const materials=new Map();root.traverse(mesh=>{if(!mesh.isMesh)return;const original=Array.isArray(mesh.material)?mesh.material:[mesh.material];const next=original.map(m=>{
  if(materials.has(m))return materials.get(m);const p=m.clone();p.flatShading=true;p.clearcoat=.12;p.envMapIntensity=.65;p.roughness=p.metalness>.35?.52:.88;
  const kind=p.metalness>.35?'metal':name.includes('world-')?'stone':['dragon','wyvern'].includes(name)?'scales':'cloth';
  // Keep deliberately authored painted wood/cloth/skin maps on custom meshes.
  if(!Object.values(kawTextures).includes(p.map))p.map=kawPaintTexture(kind);p.bumpMap=p.map;p.bumpScale=.035;p.roughnessMap=null;p.needsUpdate=true;materials.set(m,p);return p;
 });mesh.material=Array.isArray(mesh.material)?next:next[0];});
}
