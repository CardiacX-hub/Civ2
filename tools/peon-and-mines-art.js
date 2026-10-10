/** Original woodland orc collector. All decorations attach to the existing rig. */
function kawWoodlandPeon(name){
 const root=kawCharacter(name),n=root.userData;
 root.userData.woodlandPeon={task:name.slice(4)||'axe',revision:'bark-pack-v1'};
 const skin=kawMaterial(0x788647,'skin'),shadow=kawMaterial(0x4f6134,'skin'),bark=kawMaterial(0x674731,'wood'),cut=kawMaterial(0xb59965,'wood'),leaf=kawMaterial(0x56713c,'verdant-leaf'),cloth=kawMaterial(0x85734e,'cloth'),rope=kawMaterial(0x998259,'cloth'),stone=kawMaterial(0x8c9b98,'stone'),dark=kawMaterial(0x272c1d,'cloth'),ivory=kawMaterial(0xc7b995,'stone'),amber=kawMaterial(0xc4a14e,'metal',.1),rune=kawMaterial(0x49a89e,'metal',.12);
 rune.emissive.setHex(0x21665c);rune.emissiveIntensity=.4;leaf.userData.kawThinSurface=.16;
 const rod=(p,a,b,r,m=bark)=>kawBugLimb(p,a,b,r,m);
 const sprig=(p,x,y,z,size=1)=>{const group=Re(p,x,y,z),shape=new Ce;shape.moveTo(0,0);shape.quadraticCurveTo(-3*size,2*size,0,7*size);shape.quadraticCurveTo(3*size,3*size,0,0);J(group,new Oe(shape,{depth:.3,bevelEnabled:false}),leaf,0,0,0);rod(group,[0,0,.5],[0,6*size,.5],.12,cut);group.rotation.z=Math.sin(x+y)*.8;return group;};
 const wrap=(p,x,y,z,r,length)=>{for(let i=0;i<4;i++){const ring=J(p,st('torus',r,.5,Math.PI*2),rope,x,y+i*length/4,z);ring.rotation.x=Math.PI/2;}};
 // Broad, heavy body, hunched shoulders and exposed olive musculature.
 for(const part of [n.torso,...n.arms,...n.legs])for(const child of [...part.children])if(child.isMesh)part.remove(child);
 n.torso.scale.set(1.1,1.05,1.13);n.head.scale.setScalar(.93);V(n.torso,15,skin,0,0,0,1,.98,.72);n.arms[0].position.x=-22;n.arms[1].position.x=22;
 for(const side of [-1,1]){V(n.torso,10,skin,side*10,2,8,1.1,.85,.5);V(n.torso,5,shadow,side*6,-8,11,1,.8,.25);}
 n.head.clear();V(n.head,13,skin,0,1,0,1,.98,.82);V(n.head,6,shadow,-9,-4,7,.75,1,.65);V(n.head,6,shadow,9,-4,7,.75,1,.65);V(n.head,9,skin,0,-7,8,1.3,.8,.65);V(n.head,4,shadow,0,0,11,1,.8,.5);
 for(const side of [-1,1]){const ear=J(n.head,st('cone',3.8,17,4),skin,side*18,3,-1);ear.rotation.z=-side*1.05;
  V(n.head,2.2,amber,side*5,3,11,.9,.48,.3);V(n.head,.7,dark,side*5,3,12,.4,1,.3);const brow=ot(n.head,9,3,4,shadow,side*5,6,11);brow.rotation.z=side*.14;
  const tusk=J(n.head,st('cone',1.9,9,7),ivory,side*7,-7,13);tusk.rotation.z=-side*.18;
  for(let i=0;i<5;i++)rod(n.head,[side*(3+i*1.8),-2,12],[side*(4+i*1.7),-5-i*.5,11.8],.28,shadow);
  for(let i=0;i<4;i++)V(n.head,2.5,bark,side*10,-11-i,8+i*.7,1,.4,.5);
 }
 ot(n.head,13,1.1,1,dark,0,-8,14);rod(n.head,[-9,11,1],[0,14,-3],2,bark);rod(n.head,[0,14,-3],[9,10,1],2,bark);
 for(let i=0;i<7;i++){const x=(i-3)*3;rod(n.head,[x,10,-4],[x+2,16,-8],1,bark);sprig(n.head,x+2,15,-7,.65);}
 // Overlapping splintered bark shoulder, forearm and shin plates with leaf trim.
 for(let side=0;side<2;side++){const arm=n.arms[side],leg=n.legs[side];arm.scale.set(1.2,1.05,1.2);V(arm,7.5,skin,0,-5,0,.85,1.4,.8);V(arm,6,shadow,0,-16,1,.95,1.1,.85);V(leg,7,skin,0,-2,0,.8,1.15,.8);V(leg,5.5,shadow,0,-10,1,.85,1,.8);V(leg,6,skin,0,-15,5,1,.5,1.4);for(let toe=0;toe<4;toe++)V(leg,1.5,shadow,-4+toe*2.6,-16,11,.75,.75,1.1);
  for(let row=0;row<4;row++)for(let i=0;i<5;i++){const plate=J(arm,new qr(4.5,5,3),bark,-8+i*4,2-row*3.6,5+row*.6);plate.scale.set(.85,.45,1.2);sprig(arm,-8+i*4,1-row*4,9,.9);}
  for(let i=0;i<5;i++){const x=(i-2)*2.4;rod(arm,[x,-8,5],[x+Math.sin(i),-19,6],1.5,bark);rod(leg,[x,-5,5],[x+Math.sin(i),-17,6],1.3,bark);}
  wrap(arm,0,-19,0,5.5,4);wrap(leg,0,-17,0,5,5);for(let i=0;i<5;i++){sprig(arm,(i-2)*3,-8,7,.65);sprig(leg,(i-2)*2,-6,7,.5);}
  V(arm,5,skin,0,-23,1,1,.8,.9);for(let i=0;i<4;i++)V(arm,1.2,shadow,-3+i*2,-25,5,.65,1.2,.7);
 }
 // Ragged hide apron and a rope belt, rather than a human uniform or heraldry.
 for(let i=0;i<9;i++){const shape=new Ce;shape.moveTo(-3,0);shape.lineTo(3,0);shape.lineTo(2,-10-i%3*2);shape.lineTo(0,-8-i%2*5);shape.lineTo(-3,-11);shape.closePath();J(n.torso,new Oe(shape,{depth:.6,bevelEnabled:false}),i%3?leaf:cloth,(i-4)*3.2,-8,13);}
 const belt=J(n.torso,st('torus',14,1.5,Math.PI*2),rope,0,-8,0);belt.rotation.x=Math.PI/2;belt.scale.y=.8;
 for(const side of [-1,1])rod(n.torso,[side*10,10,12],[side*6,-7,13],1.2,bark);
 // Woven pack, horizontal cut logs, roots, bindings and distinct delivery loads.
 const pack=Re(n.upperBody,0,5,-18);ot(pack,23,29,13,bark,0,0,0);
 for(let i=0;i<8;i++)rod(pack,[-12,-13+i*3.5,-7],[12,-13+i*3.5,-7],.7,rope);
 for(let i=0;i<7;i++)rod(pack,[-10+i*3.3,-14,-7.8],[-10+i*3.3,14,-7.8],.5,rope);
 for(let i=0;i<7;i++){const x=(i%3-1)*8,y=13+Math.floor(i/3)*5,z=-3-Math.floor(i/3)*5,log=J(pack,st('cylinder',3.4,3.8,26,8),bark,x,y,z);log.rotation.z=Math.PI/2;for(const end of [-1,1]){const disk=J(pack,st('cylinder',3.3,3.3,.7,8),cut,x+end*13,y,z);disk.rotation.z=Math.PI/2;const ring=J(pack,st('torus',2,.25),bark,x+end*13.5,y,z);ring.rotation.y=Math.PI/2;}}
 for(const side of [-1,1]){rod(pack,[side*11,-15,-8],[side*13,9,-9],1.2,bark);rod(pack,[side*13,9,-9],[side*6,24,-7],1.1,bark);for(let i=0;i<6;i++)sprig(pack,side*(8+i%3*2),-8+i*5,-9,.7);}
 if(name.endsWith('carry')){const ore=kawMaterial(0xd4ac46,'metal',.7),bag=Re(pack,0,-7,-10);V(bag,9,cloth,0,0,0,1,.9,.7);for(let i=0;i<7;i++)V(bag,2,ore,Math.sin(i*2.4)*5,7+i%2,Math.cos(i*2.4)*3);for(const side of [-1,1])V(n.head,2,shadow,side*8,-3,12,1,.5,.2);}
 if(name.endsWith('logs'))for(let i=0;i<3;i++){const extra=J(pack,st('cylinder',3.5,4,31,8),bark,0,25+i*5,-6);extra.rotation.z=Math.PI/2;const disk=J(pack,st('cylinder',3.4,3.4,.7,8),cut,16,25+i*5,-6);disk.rotation.z=Math.PI/2;}
 if(!name.endsWith('carry')&&!name.endsWith('logs')){n.weapon.clear();rod(n.weapon,[0,-10,0],[0,29,0],1.8,bark);
  if(name.endsWith('hammer')){const head=J(n.weapon,new qr(7,6,4),stone,0,27,0);head.scale.set(1.3,.65,.8);}
  else {const shape=new Ce;shape.moveTo(0,30);shape.lineTo(10,36);shape.lineTo(name.endsWith('pick')?22:18,name.endsWith('pick')?27:18);shape.lineTo(10,18);shape.lineTo(0,21);shape.closePath();J(n.weapon,new Oe(shape,{depth:3,bevelEnabled:true,bevelThickness:.4,bevelSize:.4,bevelSegments:1}),stone,0,0,-1.5);}
  for(let i=0;i<4;i++)rod(n.weapon,[0,17+i*3,2],[12,22+i*2,2.2],.6,bark);const runeRing=J(n.weapon,st('torus',2.1,.45),rune,10,28,2.2);rod(n.weapon,[9,27,2.2],[11,29,2.2],.35,rune);for(let i=0;i<4;i++)sprig(n.weapon,2,5+i*5,2,.45);
 }
 return root;
}

/** Rocky rear mass is separate from the accessible mine entrance. */
function kawGoldOutcrop(){const root=new Kt;root.userData.goldOutcrop=true;
 const rock=kawMaterial(0x686c61,'stone'),strata=kawMaterial(0x91917e,'stone'),moss=kawMaterial(0x52603a,'cloth'),ore=kawMaterial(0xbca158,'metal',.35);
 for(const [x,y,z,r,sx,sy] of [[-29,28,-69,29,1,1.1],[0,41,-91,38,1,1.3],[35,25,-66,25,1,.95]]){const shape=new qr(r,9,6).toNonIndexed();shape.computeVertexNormals();const lump=J(root,shape,rock,x,y,z);lump.scale.set(sx,sy,.85);lump.rotation.y=x*.023;for(let layer=0;layer<5;layer++){const band=J(root,st('torus',r*.8,1,Math.PI*2),strata,x,y-r*.55+layer*r*.24,z);band.rotation.x=Math.PI/2;band.scale.set(1,.8,1);}for(let i=0;i<9;i++)V(root,3,i%4?moss:ore,x+Math.sin(i*2.4)*r*.75,y+r*.7-i%3*6,z+Math.cos(i*2.4)*r*.65,1,.35,1);}
 for(let i=0;i<12;i++){const a=i*2.4;J(root,new qr(5+i%3,5,3),rock,Math.sin(a)*45,3+i%2,-67+Math.cos(a)*33);}
 return root;
}

/** A shaft, hoist and ore-processing house: functional gold production, no deposit. */
function kawGoldMineBuilding(faction){const root=kawSupplyHouse(faction);root.userData.goldWorks=true;
 const wood=kawMaterial(0x735337,'wood'),iron=kawMaterial(0x464f51,'metal',.6),ore=kawMaterial(0xd4ad50,'metal',.7),rock=kawMaterial(0x696e65,'stone'),dark=kawMaterial(0x242b29,'wood');
 ot(root,28,3,24,dark,39,2,1);for(const x of [28,49])ot(root,3,54,4,wood,x,28,0);ot(root,29,4,5,wood,39,53,0);
 const wheel=J(root,st('torus',7,1.6),iron,39,47,2);for(let i=0;i<6;i++){const a=i*Math.PI/3,spoke=ot(root,1,13,1,iron,39,47,2);spoke.rotation.z=a;}ot(root,1,25,1,iron,39,30,2);ot(root,13,10,10,iron,39,18,2);for(let i=0;i<6;i++)V(root,2,ore,35+i%3*4,24,1+Math.floor(i/3)*4);
 for(let i=0;i<7;i++){const piece=J(root,new qr(5+i%3,5,4),rock,-29+Math.sin(i*2.4)*7,5+i%3*3,25+Math.cos(i*2.4)*7);piece.scale.y=.7;V(root,1.5,ore,piece.position.x,piece.position.y+4,piece.position.z);}
 ot(root,18,9,12,wood,17,7,30);for(let i=0;i<8;i++)V(root,2,ore,12+i%4*3,12+i%2,27+Math.floor(i/4)*4);
 return root;
}
