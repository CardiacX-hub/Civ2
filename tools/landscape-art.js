/** Original avian anatomy: layered flight feathers follow shoulder, elbow and wrist. */
function kawPhoenix(){
 const root=new Kt;root.userData.wings=[];root.userData.phoenixFeathers=true;
 const palette=[0x58252b,0x9d3828,0xc9662e,0xe49d49,0xf3ce7e,0x73312b].map(color=>{const m=kawMaterial(color,'cloth');m.name='phoenix-feather';return m;});
 const charcoal=kawMaterial(0x382e2a,'skin'),beak=kawMaterial(0xcdb579,'metal',.08),eye=kawMaterial(0xffe1a2,'metal',.08),fire=kawMaterial(0xe95725,'cloth');fire.emissive.setHex(0xf36a22);fire.emissiveIntensity=.55;
 // A shaped vane and contrasting central shaft preserve individual feather edges.
 const feather=(parent,x,y,z,length,width,index,angle=0)=>{const group=Re(parent,x,y,z),shape=new Ce;shape.moveTo(0,0);shape.bezierCurveTo(-width*.9,-length*.25,-width*.7,-length*.75,width*.15,-length);shape.bezierCurveTo(width*.8,-length*.7,width,-length*.22,0,0);const vane=J(group,new Oe(shape,{depth:.45,bevelEnabled:false,curveSegments:4}),palette[index%palette.length],0,0,0);vane.rotation.x=Math.PI/2;const shaft=J(group,st('cylinder',.12,.23,length*.87,5),palette[(index+3)%palette.length],0,0,-length*.43);shaft.rotation.x=Math.PI/2;group.rotation.y=angle;return group;};
 V(root,13,palette[0],0,23,-2,.9,1,1.6);V(root,10,palette[3],0,24,10,.85,1.05,1);V(root,6,palette[2],0,34,17,.85,1.5,.8);V(root,7,palette[1],0,41,24,.9,.9,1.05);
 const bill=J(root,st('cone',3.2,10,8),beak,0,40,34);bill.rotation.x=Math.PI/2;const hook=J(root,st('cone',1.6,5,6),charcoal,0,37,38);hook.rotation.z=Math.PI;
 for(const side of [-1,1]){V(root,1.5,charcoal,side*5.6,43,27,1,.9,.45);V(root,.8,eye,side*6,43,27.6,1,.8,.4);const wing=Re(root,side*8,29,4);wing.userData.sign=side;root.userData.wings.push(wing);
  // Secondary feathers cover the forearm, primaries fan beyond the wrist.
  V(wing,7,palette[0],side*10,0,-1,1.8,.45,.65);V(wing,5,palette[1],side*26,0,2,1.9,.4,.7);
  for(let i=0;i<10;i++)feather(wing,side*(7+i*2.8),-.6,2,19+i*.65,2.1,i+1,side*(.05+i*.018));
  for(let i=0;i<11;i++)feather(wing,side*(30+i*2.25),-.8,3+i*.6,29-i*.65,2.15,i+2,-side*(.1+i*.095));
  for(let row=0;row<3;row++)for(let i=0;i<15;i++)feather(wing,side*(5+i*3.3),1.8+row*.55,8-row*4.4,8+row*3,1.7,i+row,side*.08);
  // Visible warm flame tips follow the outer feathers rather than replacing the wing.
  for(let i=0;i<5;i++){const tip=J(wing,st('cone',.8,7+i%3,5),fire,side*(41+i*2.8),0,-19+i*.8);tip.rotation.x=-Math.PI/2;}
  J(root,st('cylinder',1.2,1.8,10,8),charcoal,side*5,10,4);for(let toe=0;toe<3;toe++){const talon=J(root,st('cone',.55,6,6),beak,side*5+(toe-1)*1.8,5,7);talon.rotation.x=Math.PI/2;}
 }
 for(let row=0;row<5;row++)for(let side=-2;side<=2;side++)feather(root,side*4,33-Math.abs(side)*1.4,12-row*5.5,12,2.2,row+side+8,side*.08);
 for(let i=0;i<9;i++){feather(root,(i-4)*2.1,21,-18,29+Math.abs(i-4)*2,2.2,i+1,(i-4)*.10);const flame=J(root,st('cone',1.3,12,5),fire,(i-4)*3,20,-48);flame.rotation.x=-Math.PI/2;}
 for(let i=0;i<5;i++){const crest=feather(root,(i-2)*1.4,46,23,12+i%2*3,1.4,i+3,(i-2)*.13);crest.rotation.x=-.9;}
 return root;
}
/** Gates share their faction's masonry, timber and metal palette. Open leaves sit beside the doorway. */
function kawGate(open,faction){const root=new Kt,horde=faction===true,verdant=faction==='covenant',stone=kawMaterial(verdant?0xc8c3a9:horde?0x9a7957:0xb6b7a7,'stone'),wood=kawMaterial(horde?0x603e2e:verdant?0x536853:0x62523f,'wood'),metal=kawMaterial(verdant?0xc3a154:0x788181,'metal',.5);
 for(const side of [-1,1]){ot(root,8,40,12,stone,side*22,20,0);ot(root,10,4,14,stone,side*22,41,0);const leaf=Re(root,side*18,0,0);leaf.rotation.y=open?side*Math.PI*.48:0;for(let i=0;i<5;i++)ot(leaf,3.5,31,2.8,wood,-side*(1.8+i*3.5),15.5,0);for(const y of [7,24])ot(leaf,18,2,4,metal,-side*9,y,.4);if(horde){const tusk=J(root,st('cone',2.2,13,6),metal,side*22,48,0);tusk.rotation.z=side*.18;}if(verdant){for(let i=0;i<5;i++)V(root,3,kawMaterial(0x597542,'cloth'),side*24,8+i*6,4,1,.55,.4);}}
 ot(root,48,5,12,stone,0,37,0);for(const x of [-20,-10,0,10,20])ot(root,5,6,11,stone,x,43,0);return root;}

/** Dense dark woodland canopy made from pointed leaf blades, never foliage spheres. */
function kawForestTree(name){
 const root=new Kt,pine=name==='pine',wood=kawMaterial(0x59442f,'wood'),leaves=[0x163c27,0x214a2d,0x2d5833].map(c=>kawMaterial(c,'cloth'));
 root.userData.forestCanopy={leaves:1100,shape:'pointed-blades',darkGreen:true};
 J(root,st('cylinder',2.5,6,46,9),wood,0,23,0);
 for(let i=0;i<12;i++){const a=i*2.4,branch=J(root,st('cylinder',.6,1.8,22,6),wood,Math.cos(a)*9,29+i*2,Math.sin(a)*9);branch.rotation.z=Math.cos(a)*.9;branch.rotation.x=Math.sin(a)*.9;}
 const blade=new Ce;blade.moveTo(0,-2);blade.lineTo(-1.4,0);blade.lineTo(-1,1.4);blade.lineTo(0,3.1);blade.lineTo(1,1.4);blade.lineTo(1.4,0);blade.closePath();
 const geometry=new Oe(blade,{depth:.12,bevelEnabled:false,curveSegments:1});
 let seed=927;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 // Small overlapping leaves with independent orientations avoid broad spiky whorls.
 for(let i=0;i<1100;i++){const t=random(),a=random()*Math.PI*2,y=pine?22+t*48:31+t*34,r=(pine?25*(1-t)+3:25*Math.sqrt(Math.max(.03,1-((t-.48)*1.65)**2)))*(i%4===0?.45+random()*.3:.85+random()*.15),leaf=J(root,geometry,leaves[i%3],Math.cos(a)*r,y+Math.sin(i*1.7)*2,Math.sin(a)*r);leaf.rotation.set(.6+random()*1.7,random()*Math.PI*2,(random()-.5)*2);leaf.scale.set(pine?.65:1,1+random()*.45,1);}
 return root;
}
