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
/** One authored mine/boulder assembly: mouth at the resource anchor, bulk behind.
 * A clear entrance apron preserves the existing worker delivery/pathing corridor. */
function kawGoldOutcrop(){const root=new Kt;root.userData.goldOutcrop=true;root.userData.embeddedMine={mouthWidth:38,sharedScale:true,fractured:true,angularFlakes:12};
 const rock=kawMaterial(0x686c61,'stone'),strata=kawMaterial(0x91917e,'stone'),moss=kawMaterial(0x52603a,'cloth'),ore=kawMaterial(0xbca158,'metal',.55),wood=kawMaterial(0x775338,'wood'),iron=kawMaterial(0x4c5557,'metal',.65),dark=kawMaterial(0x111813,'stone');
 // Separate side lobes and a keystone surround the recessed opening; no front
 // sphere fills the tunnel. The connected rear mass reads as a single boulder.
 for(const [x,y,z,r,sx,sy,sz]of [[0,40,-66,46,1.3,1.05,1.1],[-36,22,-33,28,.9,1,.9],[35,25,-36,29,.9,1,.9],[-27,21,-6,17,.7,1.25,1],[27,21,-6,17,.7,1.25,1],[0,43,-14,25,1.3,.55,1]]){const geometry=new qr(r,9,7);const positions=geometry.attributes.position;for(let i=0;i<positions.count;i++){const xx=positions.getX(i),yy=positions.getY(i),zz=positions.getZ(i),f=1+.17*Math.sin(xx*.23)*Math.cos(yy*.19)+.08*Math.sin(zz*.31+xx*.1);positions.setXYZ(i,xx*f,yy*f,zz*f);}geometry.computeVertexNormals();const lump=J(root,(()=>{const g=geometry.toNonIndexed();g.computeVertexNormals();return g;})(),rock,x,y,z);lump.scale.set(sx,sy,sz);lump.rotation.y=x*.03;}
 // Thin raised mineral plates expose sharp fracture planes and chipped edges.
 for(let i=0;i<12;i++){const a=i*2.399,t=.55+(i%4)*.34,x=Math.sin(t)*Math.cos(a)*53,y=40+Math.cos(t)*46,z=-66+Math.sin(t)*Math.sin(a)*46,shape=new Ce;shape.moveTo(-8,-9);shape.lineTo(6,-11);shape.lineTo(10,3);shape.lineTo(2,13);shape.lineTo(-9,7);shape.closePath();const flake=J(root,new Oe(shape,{depth:3,bevelEnabled:false}),i%3?rock:strata,x,y,z);flake.quaternion.setFromUnitVectors(root.position.clone().set(0,0,1),root.position.clone().set(x,y-40,z+66).normalize());}
 // Branching fractures follow the rough outer surface of the main mass.
 const crack=kawMaterial(0x30362f,'stone');const surface=(a,t)=>{const xx=Math.sin(t)*Math.cos(a)*46,yy=Math.cos(t)*46,zz=Math.sin(t)*Math.sin(a)*46,f=1+.17*Math.sin(xx*.23)*Math.cos(yy*.19)+.08*Math.sin(zz*.31+xx*.1);return [xx*f*1.3,40+yy*f*1.05,-66+zz*f*1.1];};
 const fracture=(a,b,width)=>{const d=root.position.clone().set(b[0]-a[0],b[1]-a[1],b[2]-a[2]),m=J(root,st('cylinder',width*.6,width,d.length(),5),crack,(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2);m.quaternion.setFromUnitVectors(d.clone().set(0,1,0),d.normalize());};
 for(let j=0;j<10;j++){let previous=surface(j*.63,.35);for(let k=1;k<8;k++){const a=j*.63+Math.sin(k*2+j)*.065,t=.35+k*.18,next=surface(a,t);fracture(previous,next,.32);if(k===3||k===5)fracture(next,surface(a+.13,t+.13),.2);previous=next;}}
 // Dark arched recess is inside the stone collar, not a detached black box.
 const arch=new Ce;arch.moveTo(-19,0);arch.lineTo(-19,25);arch.quadraticCurveTo(-18,38,0,38);arch.quadraticCurveTo(18,38,19,25);arch.lineTo(19,0);arch.closePath();J(root,new Oe(arch,{depth:12,bevelEnabled:false,curveSegments:10}),dark,0,0,-10);
 for(const side of [-1,1]){ot(root,5,33,6,wood,side*20,17,5);ot(root,7,3,8,iron,side*20,6,5);ot(root,7,3,8,iron,side*20,29,5);for(const y of [7,28])V(root,.75,ore,side*20,y,9);}
 ot(root,46,5,7,wood,0,35,5);for(let j=0;j<7;j++){const a=j*Math.PI/6,stone=J(root,new qr(6,6,4),j%2?rock:strata,Math.cos(a)*24,26+Math.sin(a)*16,1);stone.scale.set(1,.6,.8);}
 for(const x of [-11,11])ot(root,1.2,1.4,42,iron,x,1.1,18);for(let z=-1;z<38;z+=6)ot(root,28,1,2,wood,0,.7,z);
 // Ore seams, chipped strata and moss break up the giant rock's surface.
 for(let j=0;j<20;j++){const a=j*2.4,x=Math.sin(a)*43,y=25+j%5*10,z=-66+Math.cos(a)*46;const seam=J(root,st('cylinder',.4,1,13+j%4,5),j%3?strata:ore,x,y,z);seam.rotation.z=Math.sin(a)*.8;V(root,2.5,j%3?moss:ore,x,y+3,z,1,.35,1);}
 for(let j=0;j<9;j++){const a=j*2.4;J(root,new qr(4+j%3,5,3),rock,Math.sin(a)*47,3,-60+Math.cos(a)*35);}
 const cart=Re(root,27,0,19);ot(cart,15,7,16,wood,0,7,0);for(const side of [-1,1])for(const z of [-5,5]){const wheel=J(cart,st('cylinder',3,3,1.5,10),iron,side*8,4,z);wheel.rotation.z=Math.PI/2;}for(let j=0;j<8;j++)V(cart,2.3,ore,-5+j%3*4,12+j%2, -4+Math.floor(j/3)*4);
 const lamp=kawMaterial(0xffbe51,'metal',.15);lamp.emissive.set(0xff9d24);lamp.emissiveIntensity=.8;ot(root,4,5,4,iron,-24,24,10);V(root,1.6,lamp,-24,24,12,1,1.5,.6);ot(root,1,9,1,iron,-24,30,10);
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
