// Runs inside the Frontier renderer closure, sharing its PBR materials and lighting.
const kawModels={};
function kawMaterial(color,kind='stone',metal=0){const mat=F(color,metal,metal?.28:.78);mat.map=Ug(kind==='stone'?'cloth':kind);mat.bumpMap=mat.map;mat.bumpScale=kind==='wood'?.2:.09;return mat;}
function kawCharacter(name){
 const orc=['orc','troll','shaman','peon','peon-pick','peon-hammer','peon-carry'].includes(name),cls=({knight:'paladin',orc:'berserker',ranger:'ranger',troll:'ranger',mage:'wizard',shaman:'necromancer',marksman:'ranger'})[name]||'monk';
 const old={...pl[cls]};if(orc)pl[cls]={...old,skin:0x82a95c,cloth:0x655843,trim:0xc4aa70};
 const model=_l(cls,{});pl[cls]=old;const n=model.userData;n.weapon.position.set(0,-16,0);n.weapon.scale.setScalar(1);
 if(name.startsWith('worker')||name.startsWith('peon')){
  for(const fist of n.fists)fist.parent.remove(fist);n.weapon.clear();n.cls='berserker';const wood=kawMaterial(0x88603c,'wood'),metal=kawMaterial(0xaab9c0,'metal',.8);
  J(n.weapon,st('cylinder',1.8,2,40),wood,0,9,0);
  if(name.endsWith('pick')){const pick=J(n.weapon,st('torus',11,1.8,Math.PI),metal,0,27,0);pick.rotation.z=Math.PI;}
  else if(name.endsWith('hammer'))ot(n.weapon,16,8,9,metal,0,27,0);
  else{const blade=new Ce;blade.moveTo(0,29);blade.lineTo(13,34);blade.lineTo(16,21);blade.lineTo(0,19);blade.closePath();J(n.weapon,new Oe(blade,{depth:3,bevelEnabled:true,bevelSize:.5,bevelThickness:.5,bevelSegments:2}),metal,0,0,-1.5);}
 }
 if(name.endsWith('carry')){n.weapon.clear();n.cls='monk';model.traverse(mesh=>{if(mesh.isMesh){mesh.material=mesh.material.clone();mesh.material.color.multiplyScalar(.72);}});const leather=kawMaterial(0x665039,'wood'),soot=kawMaterial(0x242925),ore=kawMaterial(0xe0b65c,'metal',.7),bag=Re(n.upperBody,0,-1,-12);V(bag,10,leather,0,0,0,.85,1.2,.65);J(bag,st('torus',5,1.5),leather,0,10,0).rotation.x=Math.PI/2;for(let i=0;i<7;i++)V(bag,2.2,ore,Math.sin(i*2.4)*4,11+i%2,Math.cos(i*2.4)*3);for(const x of [-6,6]){const strap=ot(n.torso,2.5,22,1,leather,x,1,11);strap.rotation.z=x*.025;}for(const [x,y,z] of [[-7,7,12],[8,-3,13],[-11,-7,9],[3,12,9]])V(n.head,2.5,soot,x,y,z,1,.55,.2);for(const x of [-6,5])V(n.torso,3,soot,x,-3,13,1,.6,.2);}
 if(name==='marksman'){
  n.weapon.clear();n.weapon.rotation.set(0,0,0);const metal=kawMaterial(0x77929e,'metal',.85),wood=kawMaterial(0x6f4630,'wood'),gold=kawMaterial(0xd3b771,'metal',.7);
  ot(n.weapon,5,7,17,wood,0,0,-6);const barrel=J(n.weapon,st('cylinder',2,2.6,34),metal,0,3,17);barrel.rotation.x=Math.PI/2;
  const muzzle=J(n.weapon,st('cylinder',1.2,1.2,1),F(0x18242b,.3,.5),0,3,34.5);muzzle.rotation.x=Math.PI/2;
  for(const z of [4,18,29]){const band=J(n.weapon,st('torus',2.8,.65),gold,0,3,z);}
  ot(n.weapon,2,4,5,metal,3,3,1);ot(n.weapon,3,1,3,gold,0,6,22);
 }
 return model;
}
function kawWorld(name,horde){
 const root=new Kt,stone=kawMaterial(horde?0x716e64:0xb0b8b5),wood=kawMaterial(0x806044,'wood'),roof=kawMaterial(horde?0x804239:0x35596e,'metal',.2),steel=kawMaterial(0x849ca5,'metal',.7),gold=kawMaterial(0xcfb47b,'metal',.6),dark=kawMaterial(0x25343a),leaf=kawMaterial(0x527647),red=kawMaterial(0xab4e35,'cloth');
 const box=(w,h,d,m,x=0,y=h/2,z=0)=>ot(root,w,h,d,m,x,y,z);
 const sphere=(r,m,x,y,z,sx=1,sy=1,sz=1)=>V(root,r,m,x,y,z,sx,sy,sz);
 function tower(x,z,height=55){box(18,height,18,stone,x,height/2,z);for(let y=8;y<height;y+=10){box(19,1,19,dark,x,y,z);box(1,8,1,dark,x+4,y+4,z+9.6);}for(const dx of [-7,0,7])for(const dz of [-7,7])box(5,7,5,stone,x+dx,height+3,z+dz);box(5,11,1,dark,x,height*.6,z+9.5);}
 function gable(x,z,w,d,y){const r=J(root,new ws(w*.72,20,4),roof,x,y,z);r.rotation.y=Math.PI/4;r.scale.z=d/w;}
 function banner(x,y,z){box(1,25,1,gold,x,y,z);box(11,15,1,horde?red:roof,x+5,y+3,z);box(2,8,1,gold,x+5,y+3,z+1);}
 function chimney(x,z,height=55){box(10,height,10,stone,x,height/2,z);box(14,3,14,steel,x,height,z);}
 function cannon(x,y,z){const gun=J(root,st('cylinder',4,6,27),steel,x,y,z);gun.rotation.x=Math.PI/2;box(14,5,15,wood,x,y-5,z-8);sphere(5,dark,x-9,y-5,z-8);sphere(5,dark,x+9,y-5,z-8);}
 if(name==='gold'){
  const rock=kawMaterial(0x697a71);rock.flatShading=true;for(const [x,y,z,r] of [[0,19,-8,26],[-23,12,0,20],[21,11,0,19],[-9,30,-8,17]]){const chunk=J(root,new qr(r,7,5),rock,x,y,z);chunk.scale.set(1,.85,.9);chunk.rotation.y=x*.13;}
  box(25,28,2,dark,0,14,21);box(5,29,6,wood,-14,15,23);box(5,29,6,wood,14,15,23);box(33,5,7,wood,0,30,23);
  for(const x of [-11,11]){box(2,1,35,steel,x,1,36);for(let z=22;z<55;z+=8)box(29,2,3,wood,0,1,z);}
  for(const [x,y,z] of [[-19,21,15],[23,15,17],[-7,37,9],[15,30,6],[-28,7,20]]){sphere(3,gold,x,y,z,1.5,.8,.7);}
  box(14,8,12,wood,21,6,33);sphere(5,gold,21,11,33);box(2,18,2,steel,-19,10,23);sphere(3,kawMaterial(0xffc16c,'metal'),-19,19,24);
 }else if(name==='tree'||name==='pine'){
  J(root,st('cylinder',4,7,36),wood,0,18,0);for(let i=0;i<5;i++){const a=i*2.4;if(name==='tree')sphere(18,leaf,Math.cos(a)*12,40+Math.sin(a)*6,Math.sin(a)*10,1,.95,1);else J(root,st('cone',25-i*3,32),leaf,0,22+i*9,0);}
 }else if(name==='mountain'){
  for(let i=0;i<4;i++){const peak=J(root,st('cone',30-i*3,65-i*9,5),stone,-22+i*14,24-i*3,i%2*8);peak.rotation.y=i*.8;J(root,st('cone',12-i,22,5),kawMaterial(0xe0e6df),-22+i*14,46-i*6,i%2*8);}
 }else if(name.startsWith('construction')){
  box(68,3,52,stone);const stage=Number(name.slice(-1));for(const x of [-30,30])for(const z of [-23,23])box(3,stage*15,3,wood,x,stage*7.5,z);for(let y=12;y<stage*18;y+=12){box(65,3,3,wood,0,y,24);box(3,3,50,wood,-30,y,0);}for(let i=0;i<6;i++)box(17,3,6,wood,35,i*3+2,12);
 }else if(name==='wall'){
  box(42,25,15,stone);for(const x of [-18,-6,6,18])box(8,7,18,stone,x,28,0);for(let y=8;y<24;y+=8)box(43,1,16,dark,0,y,0);
 }else if(name==='base'){
  box(70,40,52,stone);box(37,26,32,stone,0,52,-6);gable(0,-6,45,40,76);for(const x of [-35,35])for(const z of [-25,25])tower(x,z,z<0?65:52);box(20,25,2,dark,0,13,27);for(const x of [-8,-4,0,4,8])box(1,24,1,steel,x,13,29);box(25,6,7,gold,0,29,28);banner(0,95,-6);
  for(const x of [-22,22])box(6,12,2,dark,x,31,27);
 }else if(name==='tower'||name==='bastion'){
  tower(0,0,name==='tower'?66:39);if(name==='bastion'){box(45,23,35,stone,0,12,0);cannon(0,43,12);}else{gable(0,0,28,28,77);banner(15,75,0);}
 }else{
  box(58,26,43,horde?wood:stone);gable(0,0,68,48,40);box(12,18,2,dark,0,10,23);for(const x of [-20,20])box(7,9,2,dark,x,18,23);banner(-24,47,0);
  if(name==='barracks'){tower(-31,-6,39);sphere(7,steel,18,27,25,1,1.3,.3);box(2,15,1,gold,18,27,28);for(const x of [-8,8])box(2,25,2,wood,x,18,28);}
  if(name==='forge'||name==='foundry'){chimney(-20,-12,58);chimney(19,-12,name==='foundry'?66:46);cannon(8,13,34);box(20,6,13,steel,-18,10,29);if(name==='foundry'){box(25,8,18,dark,0,8,30);box(20,1,13,kawMaterial(0xeb873d,'metal'),0,13,30);}}
  if(name==='roost'){tower(0,-3,65);gable(0,-3,35,35,77);box(65,4,14,wood,0,63,14);for(const x of [-22,22]){sphere(8,gold,x,69,14,.6,.6,1.6);const wing=J(root,st('cone',5,17,3),gold,x,73,14);wing.rotation.z=x>0?-.7:.7;}}
  if(name==='altar'){for(const x of [-25,25]){tower(x,-10,48);J(root,st('cone',12,22,6),roof,x,64,-10);}sphere(9,kawMaterial(horde?0xac729d:0x8bd6d6,'metal',.35),0,53,0,.7,1.5,.7);box(22,5,30,stone,0,3,34);}
  if(name==='mill'){const wheel=J(root,st('torus',16,3),wood,-32,18,0);wheel.rotation.y=Math.PI/2;for(let i=0;i<8;i++){const a=i*Math.PI/4;box(7,3,9,wood,-33,18+Math.sin(a)*16,Math.cos(a)*16);}for(let i=0;i<4;i++)box(24,5,7,wood,20,4+i*5,29);}
  if(name==='armory'){box(40,3,7,wood,0,20,31);for(const x of [-15,0,15]){sphere(6,steel,x,28,29,1,1,.8);box(10,13,2,steel,x,11,31);box(2,13,2,gold,x,11,33);}}
 }
 if(horde&&!['gold','tree','pine','mountain'].includes(name)){for(const x of [-29,29])J(root,st('cone',3,17,4),gold,x,35,23);}
 return root;
}
function kawFlyer(name){
 const root=new Kt,dragon=name==='dragon'||name==='wyvern',body=kawMaterial(dragon?0x586d4a: name==='phoenix'?0xd37b36:0xb99c72,dragon?'scales':'cloth'),trim=kawMaterial(dragon?0xc5b889:0xffd47a,'metal',.3);root.userData.wings=[];
 V(root,14,body,0,20,0,1,.7,1.7);V(root,8,body,0,28,23,.8,1,1.3);J(root,st('cone',4,13),trim,0,27,34).rotation.x=Math.PI/2;
 for(const sign of [-1,1]){const wing=Re(root,sign*9,23,-2);wing.userData.sign=sign;root.userData.wings.push(wing);const shape=new Ce;shape.moveTo(0,0);shape.lineTo(sign*19,19);shape.lineTo(sign*49,9);shape.lineTo(sign*37,-10);shape.lineTo(sign*14,-6);shape.closePath();const mesh=J(wing,new Oe(shape,{depth:2,bevelEnabled:true,bevelSize:1,bevelThickness:1,bevelSegments:2}),body,0,0,0);mesh.rotation.x=Math.PI/2;for(let j=0;j<5;j++){const feather=J(wing,st('cone',3,20,5),trim,sign*(16+j*6),-1,-j*2);feather.rotation.x=Math.PI/2+.4;}J(root,st('cylinder',2,2,11),trim,sign*6,10,5);V(root,2,F(0x10222b),sign*4,31,30);}
 for(let j=0;j<4;j++){const tail=J(root,st('cone',4-j*.6,24,5),j%2?trim:body,(j-1.5)*3,18,-28-j*3);tail.rotation.x=-Math.PI/2-.3;}
 if(name==='phoenix'){for(let i=0;i<32;i++){const a=i*2.4,z=-17+(i%8)*5,x=Math.sin(a)*11,y=23+Math.cos(a)*5;const feather=J(root,new ws(2.7,13,5),i%3?body:trim,x,y,z);feather.rotation.x=-.75;feather.rotation.z=Math.sin(a)*.4;}for(const wing of root.userData.wings)for(let j=0;j<18;j++){const feather=J(wing,new ws(2.7,17+(j%3)*3,5),j%3?body:trim,wing.userData.sign*(8+(j%9)*4),1,-5-Math.floor(j/9)*5);feather.rotation.x=Math.PI/2+.5;feather.rotation.z=wing.userData.sign*.2;}for(let j=0;j<7;j++){const feather=J(root,new ws(2,20,5),j%2?body:trim,(j-3)*2,36,18);feather.rotation.x=-.35;}}
 if(dragon){V(root,6,body,0,25,33,1,.6,1.5);for(const x of [-4,4]){const fang=J(root,st('cone',1.3,5),trim,x,22,37);fang.rotation.z=Math.PI;}for(let j=0;j<6;j++)J(root,st('cone',2,8,4),trim,0,32,-14+j*7);for(const x of [-6,6])J(root,st('cone',2,12,5),trim,x,37,21).rotation.z=-x*.06;}
 if(name==='gryphon'||name==='wyvern'){const rider=kawCharacter(name==='gryphon'?'knight':'orc');rider.scale.setScalar(.4);rider.position.set(0,29,-4);root.add(rider);}
 return root;
}
function kawVehicle(name){const root=new Kt,wood=kawMaterial(0x806044,'wood'),steel=kawMaterial(0x798f96,'metal',.8),dark=kawMaterial(0x28362e),trim=kawMaterial(0xd2b986,'metal',.6);ot(root,31,8,37,wood,0,11,0);root.userData.wheels=[];for(const x of [-19,19])for(const z of [-12,12]){const wheel=J(root,st('cylinder',8,8,4),dark,x,9,z);wheel.rotation.z=Math.PI/2;root.userData.wheels.push(wheel);V(root,3,trim,x,9,z);}if(name==='bombard'){const barrel=J(root,st('cylinder',6,8,47),steel,0,22,9);barrel.rotation.x=Math.PI/2;J(root,st('torus',6.1,1),trim,0,22,32);ot(root,18,8,14,steel,0,16,-8);}else{for(const x of [-10,10])ot(root,4,30,5,wood,x,25,0);const arm=J(root,st('cylinder',3,3,49),wood,0,31,7);arm.rotation.x=.5;V(root,9,steel,0,50,18,1,.4,1);V(root,7,kawMaterial(0x8c927b),0,54,18);}return root;}
window.KawCapture=(name,angle,phase,frame,width=144,height=192,horde=false)=>{
 if(ts)fn.remove(ts);const key=name+horde;ts=kawModels[key]||(kawModels[key]=name.startsWith('world-')?kawWorld(name.slice(6),horde):['bombard','hewer'].includes(name)?kawVehicle(name):['phoenix','dragon','gryphon','wyvern'].includes(name)?kawFlyer(name):kawCharacter(name));fn.add(ts);ts.position.set(0,0,0);ts.rotation.set(0,0,0);ye.setSize(width,height,false);Sn.aspect=width/height;
 const world=name.startsWith('world-');Sn.position.set(world?125:0,world?195:82,world?245:205);Sn.lookAt(0,world?32:38,0);Sn.updateProjectionMatrix();const progress=frame/16;
 if(ts.userData.arms){Nh(ts,{time:progress*.8,angle,player:{vx:phase==='walk'?100:0,ground:true,face:1},meleeAttack:phase==='attack'&&!['ranger','troll','marksman','mage'].includes(name)?{t:1-progress,duration:1,face:1}:null,castTime:phase==='attack'&&['ranger','troll','mage','shaman'].includes(name)?1:0},true);
  if(name.startsWith('worker')||name.startsWith('peon')){ts.userData.weapon.rotation.set(.6,0,-.55);if(phase!=='attack')ts.userData.arms[1].rotation.x-=.3;}if(name==='marksman'){const n=ts.userData;n.arms[1].rotation.x=-1.1;n.arms[0].rotation.x=-1.2;n.arms[0].rotation.z=.65;n.weapon.rotation.set(1.1,0,0);if(phase==='attack')n.arms[1].rotation.x+=Math.sin(progress*Math.PI)*.12;}
 }else if(ts.userData.wings){ts.rotation.y=angle;for(const wing of ts.userData.wings)wing.rotation.z=wing.userData.sign*Math.sin(progress*Math.PI*2)*.45;ts.position.y=6+Math.sin(progress*Math.PI*2)*2;}
 if(ts.userData.wheels){ts.rotation.y=angle;for(const wheel of ts.userData.wheels)wheel.rotation.x=phase==='walk'?progress*Math.PI*2:0;}fn.background=null;gl.visible=false;ye.setClearAlpha(0);ye.render(fn,Sn);return ye.domElement;
};
