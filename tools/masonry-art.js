// Authored asset detail only: generated once, then batched into GLBs for gameplay.
function kawStrawHat(head){
 const straw=kawMaterial(0xc9a45d,'straw'),edge=kawMaterial(0xa77c39,'straw'),band=kawMaterial(0x674626,'cloth');
 straw.name='farmer-straw';const hat=Re(head,0,14,0);hat.rotation.z=-.055;
 J(hat,st('cylinder',21,22,.9,32),straw,0,0,0);
 J(hat,st('cylinder',10.5,14,10,24),straw,0,5,0);
 V(hat,10.5,straw,0,10,0,1,.16,1);
 J(hat,st('cylinder',13.7,14.2,2.1,24),band,0,1.9,0);
 // Braided brim rings and sparse loose straw give the hat a readable silhouette.
 for(const radius of [16,19,21.4])J(hat,st('torus',radius,.35,Math.PI*2),edge,0,.65,0).rotation.x=Math.PI/2;
 for(let i=0;i<12;i++){const angle=i*Math.PI/6;const fiber=ot(hat,.3,.3,3,edge,Math.sin(angle)*21.5,.3,Math.cos(angle)*21.5);fiber.rotation.y=angle;}
 head.userData.farmerHat=true;
}
function kawDressBuilding(root,name,horde){
 if(!name.startsWith('world-')||['world-gold','world-tree','world-pine','world-mountain','world-trap','world-trap-resin','world-barricade'].includes(name)||name.includes('construction'))return;
 const stoneTexture=kawTextures['paint-stone'],facades=[];
 root.traverse(mesh=>{if(!mesh.isMesh||Array.isArray(mesh.material)||mesh.material.map!==stoneTexture)return;const m=mesh.material;if(m.color.r+m.color.g+m.color.b<.9&&!root.userData.verdantArchitecture)return;const a=mesh.geometry.parameters;
 const surface=m.clone();surface.map=kawPaintTexture('masonry');surface.name='coursed-masonry';surface.roughness=.93;surface.bumpMap=surface.map;surface.bumpScale=.12;mesh.material=surface;
 // Maintain a consistent brick size rather than stretching one tile over every wall.
 const uv=mesh.geometry.attributes.uv;if(uv){mesh.geometry=mesh.geometry.clone();const coords=mesh.geometry.attributes.uv,normal=mesh.geometry.attributes.normal;for(let i=0;i<coords.count;i++){let width=a.width||a.radiusTop*6.28||a.radius*6.28||24,height=a.height||24;if(a.depth&&normal){if(Math.abs(normal.getX(i))>.5)width=a.depth;if(Math.abs(normal.getY(i))>.5)height=a.depth;}coords.setXY(i,coords.getX(i)*width/80,coords.getY(i)*height/80);}coords.needsUpdate=true;}
 if(!horde&&!root.userData.verdantArchitecture&&name.startsWith('world-base')&&a.width>=14&&a.height>=20&&a.depth>=10)facades.push(mesh);
 });
 let count=0;const palette=[0xbcb8a8,0xc9c2b0,0xa9ab9f,0xd0c8b5,0xb2afa2].map(color=>{const m=kawMaterial(color,'cut-stone');m.name='stronghold-cut-stone';return m;});
 // Four staggered facades on every keep, tower and upgrade wing. Mortar backing
 // remains between bevels; windows, banners and portcullises project in front.
 for(const mesh of facades){const {width:w,height:h,depth:d}=mesh.geometry.parameters,rows=Math.ceil(h/5);
 for(let side=0;side<4;side++){const span=side%2?d:w,offset=side%2?w/2:d/2;
 for(let row=0;row<rows;row++){const bottom=-h/2+row*5,top=Math.min(h/2,bottom+5),start=-span/2-(row%2)*5;
 for(let x=start;x<span/2;x+=10){const left=Math.max(-span/2,x),right=Math.min(span/2,x+10);if(right-left<1)continue;const bw=right-left-.38,bh=top-bottom-.32,shape=new Ce;shape.moveTo(-bw/2,-bh/2);shape.lineTo(bw/2,-bh/2);shape.lineTo(bw/2,bh/2);shape.lineTo(-bw/2,bh/2);shape.closePath();const depth=.42+(count%4)*.07;
 const brick=J(mesh,new Oe(shape,{depth,bevelEnabled:true,bevelSize:.13,bevelThickness:.12,bevelSegments:1}),palette[(row+count)%palette.length],0,(bottom+top)/2,0);
 const middle=(left+right)/2;if(side===0){brick.position.x=middle;brick.position.z=offset+.08;}if(side===1){brick.position.z=-middle;brick.position.x=offset+.08;brick.rotation.y=Math.PI/2;}if(side===2){brick.position.x=-middle;brick.position.z=-offset-.08;brick.rotation.y=Math.PI;}if(side===3){brick.position.z=middle;brick.position.x=-offset-.08;brick.rotation.y=-Math.PI/2;}count++;
 }}}
 }
 root.userData.masonryDetail={blocks:count,textureSize:512};root.userData.highDetailSurface=true;
}
