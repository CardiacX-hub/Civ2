/** Original modular timber fortress inspired by the user's architectural reference.
 * Shared materials batch the carved logs, tusks, rivets and cloth into a few draws. */
function kawDominionFortress(level=1){
 const root=new Kt;root.userData.dominionFortress=true;
 const timber=kawMaterial(0x49382c,'wood'),logEnd=kawMaterial(0x796044,'wood'),rock=kawMaterial(0x595c58,'stone'),iron=kawMaterial(0x343434,'metal',.65),ivory=kawMaterial(0xc9b993,'stone'),cloth=kawMaterial(0x792b27,'cloth'),trim=kawMaterial(0xa28254,'metal',.5),dark=kawMaterial(0x211d19,'wood'),fire=kawMaterial(0xf4a547,'cloth');
 fire.emissive.setHex(0xff7428);fire.emissiveIntensity=1.4;
 const beam=(parent,a,b,r,material=timber,r2=r)=>{const dx=b[0]-a[0],dy=b[1]-a[1],dz=b[2]-a[2],length=Math.hypot(dx,dy,dz),mesh=J(parent,st('cylinder',r2,r,length,8),material,(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2);mesh.rotation.z=-Math.atan2(dx,dy);mesh.rotation.x=Math.atan2(dz,Math.hypot(dx,dy));return mesh;};
 const tusk=(parent,x,y,z,height,side,forward=0)=>{ot(parent,9,5,8,iron,x,y,z);for(let i=0;i<9;i++){const t=i/9,u=(i+1)/9;beam(parent,[x+side*t*t*11,y+t*height,z+forward*t*t*8],[x+side*u*u*11,y+u*height,z+forward*u*u*8],3.7*(1-t)+.1,ivory,3.7*(1-u)+.08);}}
 const banner=(parent,x,y,z,w,h)=>{beam(parent,[x-w/2-2,y+2,z],[x+w/2+2,y+2,z],1.2,iron);const shape=new Ce;shape.moveTo(-w/2,0);shape.lineTo(w/2,0);shape.lineTo(w/2,-h+3);shape.lineTo(w*.18,-h);shape.lineTo(0,-h+4);shape.lineTo(-w*.18,-h-2);shape.lineTo(-w/2,-h+1);shape.closePath();J(parent,new Oe(shape,{depth:.6,bevelEnabled:false}),cloth,x,y,z);ot(parent,1.2,h*.72,.9,trim,x,y-h*.37,z+.8);};
 const torch=(parent,x,y,z)=>{beam(parent,[x,y-8,z],[x,y,z+2],1,iron);J(parent,st('cone',3.1,5,7),iron,x,y,z+2).rotation.z=Math.PI;for(let i=0;i<3;i++){const flame=J(parent,st('cone',1.6-i*.3,7+i*2,6),fire,x+(i-1)*1.3,y+5+i,z+2);flame.rotation.z=(i-1)*.15;}};
 const canopy=(parent,y,r)=>{for(let i=0;i<12;i++){const a=i*Math.PI/6,b=(i+1)*Math.PI/6,shape=new Ce;shape.moveTo(0,0);shape.lineTo(Math.sin(a)*r,Math.cos(a)*r);shape.lineTo(Math.sin(b)*r,Math.cos(b)*r);shape.closePath();const geometry=new Oe(shape,{depth:.8,bevelEnabled:false}),positions=geometry.attributes.position;for(let v=0;v<positions.count;v++){const t=Math.max(0,1-Math.hypot(positions.getX(v),positions.getY(v))/r);positions.setZ(v,positions.getZ(v)-t*12);}geometry.computeVertexNormals();const roof=J(parent,geometry,cloth,0,y,0);roof.rotation.x=Math.PI/2;beam(parent,[0,y+12,0],[Math.sin(a)*r,y,Math.cos(a)*r],.8,trim);const edge=J(parent,st('cone',2.4,8,4),cloth,Math.sin(a)*r,y-3,Math.cos(a)*r);edge.rotation.z=Math.PI;}};
 const tower=(x,z,height,r=12,roof=false)=>{const group=Re(root,x,6,z);
  J(group,st('cylinder',r+2,r+4,7,12),rock,0,3,0);
  for(let i=0;i<14;i++){const a=i*Math.PI*2/14,xx=Math.sin(a)*r,zz=Math.cos(a)*r;beam(group,[xx,5,zz],[xx,height,zz],2.8);J(group,st('cone',2.7,10,6),iron,xx,height+5,zz);}
  for(const y of [9,height*.52,height-3]){const band=J(group,st('torus',r+.6,1.2,5,14),iron,0,y,0);band.rotation.x=Math.PI/2;for(let i=0;i<14;i++){const a=i*Math.PI*2/14;V(group,.65,trim,Math.sin(a)*(r+1.7),y,Math.cos(a)*(r+1.7));}}
  J(group,st('cylinder',r+4,r+4,3,14),timber,0,height-6,0);
  for(const side of [-1,1])tusk(group,side*(r-3),height-3,4,17,side);
  banner(group,0,height-10,r+3,r*.95,height*.48);
  if(roof)canopy(group,height+7,r+7);
  torch(group,-r*.7,height*.45,r+4);torch(group,r*.7,height*.45,r+4);return group;
 };
 // Uneven stone footing, front stairs, defensive logs and iron cross straps.
 ot(root,107,7,83,rock,0,3.5,0);
 for(let row=0;row<3;row++)for(let i=0;i<13;i++){const x=-49+i*8+(row%2)*2;ot(root,7.5,4.6,7,rock,x,5+row*4,-38);}
 for(let step=0;step<6;step++)ot(root,30,2.2,8,timber,0,2+step*1.4,62-step*5);
 for(const side of [-1,1]){beam(root,[side*17,3,62],[side*17,13,36],1.3);for(let i=0;i<4;i++)beam(root,[side*17,3+i*1.6,60-i*7],[side*17,7+i*1.6,60-i*7],.9,iron);}
 for(const side of [-1,1])for(let i=0;i<12;i++){const z=-32+i*6,x=side*48;beam(root,[x,8,z],[x,36+(i%3)*2,z],2.6);J(root,st('cone',2.7,8,6),iron,x,42+(i%3)*2,z);}
 for(const side of [-1,1])for(const y of [15,29])beam(root,[side*50,y,-35],[side*50,y,34],1.5,iron);
 // Main hall retains exactly the same footprint and entrance at every upgrade.
 ot(root,57,38,47,dark,0,25,-4);
 for(let i=0;i<12;i++){const x=-27+i*5;beam(root,[x,7,20],[x,44,20],2.7);beam(root,[x,7,-28],[x,44,-28],2.7);}
 for(let i=0;i<10;i++)beam(root,[-30,10+i*3.7,-28],[30,10+i*3.7,-28],1.9);
 canopy(Re(root,0,0,-5),48,34);tower(0,-15,77,17,true);
 tower(-39,28,43,11,true);tower(39,28,43,11,true);
 ot(root,20,27,2,dark,0,21,25);
 for(const side of [-1,1]){tusk(root,side*15,11,30,38,-side,1);tusk(root,side*32,9,27,37,side,1);torch(root,side*11,21,32);}
 beam(root,[-20,38,28],[20,38,28],3.2,iron);
 // Sculpted skull crest with dark sockets, long jaw and conspicuous teeth.
 V(root,9,ivory,0,42,31,1.4,.8,.45);V(root,5,ivory,0,35,33,.65,1,.45);
 for(const side of [-1,1]){V(root,2.5,dark,side*4,42,35,.95,.75,.35);tusk(root,side*9,44,29,15,side);for(let i=0;i<3;i++)J(root,st('cone',.9,5,5),ivory,side*(1.5+i*1.7),32,34).rotation.z=Math.PI;}
 banner(root,-23,42,24,9,22);banner(root,23,42,24,9,22);
 if(level>=2){tower(-37,-30,62,12,true);tower(37,-30,62,12,true);for(const x of [-20,20])banner(root,x,59,-32,12,27);}
 if(level>=3){for(const side of [-1,1]){const deck=Re(root,side*57,28,0);ot(deck,25,4,28,timber,0,0,0);for(let i=0;i<4;i++)beam(deck,[-12,3,-11+i*7],[12,3,-11+i*7],1.3,iron);const gun=J(deck,st('cylinder',3,4.2,20,10),iron,0,9,9);gun.rotation.x=Math.PI/2;ot(deck,14,5,12,timber,0,5,2);torch(deck,side*10,8,-9);}tower(0,-15,98,11,true);}
 if(level>=4){tower(-57,-29,79,10,true);tower(57,-29,79,10,true);tower(0,-15,117,8,true);for(const side of [-1,1])tusk(root,side*23,63,-10,35,side);}
 return root;
}

/** Faction-specific homes share the game's materials and readable residential scale. */
function kawSupplyHouse(faction){
 const root=new Kt;root.userData.supplyHouse=true;const horde=faction===true,verdant=faction==='covenant';
 const stone=kawMaterial(verdant?0xc6c2a6:horde?0x5b5950:0xb6b6a6,'stone'),wood=kawMaterial(horde?0x59402d:0x776047,'wood'),roof=kawMaterial(verdant?0x396d4f:horde?0x762b26:0x35596e,'cloth'),metal=kawMaterial(0x9b895e,'metal',.45),dark=kawMaterial(0x283327,'wood');
 ot(root,55,5,45,stone,0,2.5,0);ot(root,46,27,36,horde?wood:stone,0,18,0);
 if(verdant)roof.name='verdant-roof';
 const profile=new Ce;profile.moveTo(-29,0);profile.lineTo(0,22);profile.lineTo(29,0);profile.closePath();J(root,new Oe(profile,{depth:45,bevelEnabled:false}),roof,0,31,-22.5);
 // Individual overlapping roof shingles and timber beams.
 for(const side of [-1,1])for(let row=0;row<6;row++)for(let col=0;col<9;col++){const x=side*(row+.5)*4.8,tile=ot(root,6.4,.8,5.4,roof,x,53-Math.abs(x)*22/29+.6,-20+(col+.5)*5);tile.rotation.z=-side*Math.atan(22/29);}
 for(const side of [-1,1]){ot(root,3,29,4,wood,side*21,19,18.5);ot(root,9,8,1,dark,side*14,22,18.6);ot(root,11,1.5,3,metal,side*14,17.5,19.5);}ot(root,10,20,2,dark,0,14,19);for(const x of [-4,-2,0,2,4])ot(root,1.5,18,1,wood,x,14,20);ot(root,12,2,3,metal,0,25,20);
 if(horde){for(const side of [-1,1]){ot(root,7,5,7,metal,side*25,33,15);const tusk=J(root,st('cone',2.8,18,8),stone,side*25,43,15);tusk.rotation.z=-side*.25;}ot(root,8,19,1,roof,0,33,23);}
 if(verdant){for(const side of [-1,1]){J(root,st('cylinder',2,4,42,8),wood,side*25,21,-13);for(let i=0;i<8;i++)V(root,5,kawMaterial(i%2?0x5b7c40:0x749650,'cloth'),side*25+Math.sin(i)*6,36+i%3*4,-13+Math.cos(i)*7,1,.5,1);}const gem=kawMaterial(0x7cdf8b,'metal',.15);gem.emissive.setHex(0x236c28);gem.emissiveIntensity=.5;J(root,st('cone',3,8,4),gem,0,45,23);}
 return root;
}
