/** Original woodland scout: articulated branch spars and overlapping veined leaves.
 * Leaf layers are actual geometry, merged per material by the asset exporter.
 * Flight uses shoulder and wrist joints; this reconnaissance unit has no attack. */
import * as T from 'three';
export function createBoughwingModel(){
 const root=new T.Group();root.name='boughwing';root.userData.boughwing={leafWings:true,scout:true};
 function texture(kind){const c=document.createElement('canvas');c.width=c.height=512;const g=c.getContext('2d');g.fillStyle=kind==='leaf'?'#ccd499':'#a68a61';g.fillRect(0,0,512,512);
  if(kind==='leaf'){g.strokeStyle='#526e3e';g.lineWidth=5;g.beginPath();g.moveTo(256,0);g.lineTo(256,512);g.stroke();for(let y=20;y<510;y+=24)for(const sign of [-1,1]){g.lineWidth=2;g.beginPath();g.moveTo(256,y);g.quadraticCurveTo(256+sign*95,y-25,256+sign*230,y-80);g.stroke();}for(let i=0;i<2000;i++){g.fillStyle=i%2?'#fff4bc18':'#253c2918';g.fillRect(i*137%512,i*71%512,2,2);}}
  else for(let i=0;i<190;i++){g.strokeStyle=i%3?'#37261888':'#e9c38266';g.lineWidth=i%11?1:3;g.beginPath();for(let y=0;y<=512;y+=8){const x=i*2.8+Math.sin(y*.027+i)*4;y?g.lineTo(x,y):g.moveTo(x,y);}g.stroke();}
  const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=8;return t;}
 const bark=new T.MeshStandardMaterial({color:0x745338,map:texture('bark'),roughness:.78}),gold=new T.MeshStandardMaterial({color:0x9c8452,metalness:.45,roughness:.38}),horn=new T.MeshStandardMaterial({color:0x48382b,roughness:.6}),eye=new T.MeshStandardMaterial({color:0xe5ff96,emissive:0x80ff42,emissiveIntensity:.8,roughness:.25});
 const leafMap=texture('leaf'),leaves=[0x52672b,0x39542d,0x71833a,0x2f4929].map(color=>new T.MeshPhysicalMaterial({color,map:leafMap,roughness:.43,clearcoat:.35,clearcoatRoughness:.28,side:T.DoubleSide}));
 leaves.forEach(m=>m.name='living-leaf');
 const group=(name,parent,x,y,z)=>{const o=new T.Group();o.name=name;o.position.set(x,y,z);parent.add(o);return o;};
 const mesh=(p,g,m,x=0,y=0,z=0)=>{const o=new T.Mesh(g,m);o.position.set(x,y,z);p.add(o);return o;};
 const ball=(p,m,x,y,z,r,sx=1,sy=1,sz=1)=>{const o=mesh(p,new T.SphereGeometry(r,16,12),m,x,y,z);o.scale.set(sx,sy,sz);return o;};
 const rod=(p,a,b,r,m=bark)=>{const av=new T.Vector3(...a),bv=new T.Vector3(...b),d=bv.clone().sub(av),o=mesh(p,new T.CylinderGeometry(r*.65,r,d.length(),10),m,...av.clone().add(bv).multiplyScalar(.5).toArray());o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return o;};
 // Lanceolate curved leaves: pointed tips, raised midrib and serrated silhouette.
 const leafGeometry=new T.BufferGeometry(),pos=[],uv=[],indices=[];for(let i=0;i<=10;i++){const v=i/10,w=Math.sin(Math.PI*v)**.8*(i%2?.9:1);for(let j=0;j<3;j++){pos.push((j-1)*w,.13*(j===1?1:0)+.16*v*v,v);uv.push(j/2,v);}if(i<10)for(let j=0;j<2;j++){const a=i*3+j;indices.push(a,a+1,a+3,a+1,a+4,a+3);}}leafGeometry.setAttribute('position',new T.Float32BufferAttribute(pos,3));leafGeometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));leafGeometry.setIndex(indices);leafGeometry.computeVertexNormals();
 function leaf(p,x,y,z,w,len,angle,i){const o=mesh(p,leafGeometry,leaves[i%4],x,y,z);o.scale.set(w,1,len);o.rotation.y=angle;return o;}
 const torso=group('boughBody',root,0,18,0);ball(torso,bark,0,0,0,5,1,1.2,1.4);
 for(let row=0;row<7;row++)for(let j=0;j<8;j++){const a=j*Math.PI/4;leaf(torso,Math.cos(a)*4,-3+row*1.1,Math.sin(a)*5,1.4,4,a+Math.PI/2,row+j);}
 for(let row=0;row<6;row++)for(let j=-2;j<=2;j++){const o=leaf(torso,j*1.4,4-row*1.2,5.7,1.25,4,0,row+j+8);o.rotation.x=1.1;}
 const head=group('boughHead',torso,0,5,5);ball(head,bark,0,0,0,3.5,1,.95,1.2);const beak=mesh(head,new T.ConeGeometry(1.7,4.5,10),horn,0,-.5,4);beak.rotation.x=Math.PI/2;rod(head,[0,-.7,4],[0,-3,5],.8,horn);rod(head,[0,-.7,4],[0,-3,5],.8,horn);
 for(const side of [-1,1]){ball(head,eye,side*2.7,.7,1.8,.5,.6,1,.8);rod(head,[side*2,2,0],[side*4,7,-2],.7);rod(head,[side*4,7,-2],[side*3.5,10,-3],.35);rod(head,[side*3.5,6,-1],[side*6,8,0],.35);rod(head,[side*2,1,2.5],[side*1.7,2,4],.55,gold);for(let i=0;i<5;i++)leaf(head,side*2,2+i*.5,-1-i*.7,.8,3,side*.9,i);}
 const wings=[];for(const side of [-1,1]){const wing=group(side<0?'boughWingL':'boughWingR',torso,side*4,2,0),tip=group(side<0?'boughTipL':'boughTipR',wing,side*19,1,-2);wings.push(wing,tip);rod(wing,[0,0,0],[side*10,2,2],1.25);rod(wing,[side*10,2,2],[side*21,1,-2],.9);rod(tip,[0,0,0],[side*15,0,-5],.6);
  for(let i=0;i<13;i++)for(let row=0;row<3;row++)leaf(wing,side*(i*1.45+1),1+row*.2,-row*2.2,1.25,9+row*3.5,Math.PI-side*.18,row+i);
  for(let i=0;i<12;i++)leaf(tip,side*i*.95,.3-i*.06,-i*.32,1.3,16-i*.35,Math.PI-side*.55,i);
  ball(wing,gold,side*6,2.6,1.2,2.1,1,.25,1.4);leaf(wing,side*6,3.1,-.7,.85,3,0,2);
 }
 const tail=group('boughTail',torso,0,-2,-5);for(let j=0;j<9;j++){const x=(j-4)*.6;rod(tail,[0,0,0],[x,-3,-14+Math.abs(j-4)],.3);leaf(tail,x,0,-2,1.25,13-Math.abs(j-4),Math.PI+(j-4)*.1,j);}
 for(const side of [-1,1]){rod(torso,[side*2,-4,2],[side*2,-9,3],.8);for(let j=0;j<3;j++){const x=side*2+(j-1)*.8;rod(torso,[side*2,-9,3],[x,-10,5],.45);rod(torso,[x,-10,5],[x,-12,5.5],.28,horn);}rod(torso,[side*2,-9,3],[side*2,-11,1],.35,horn);}
 // Continuous shoulder strokes lead flexible wrist feathers; tail banks subtly.
 const animations=['idle','walk','attack'].map(phase=>{const duration=1.6,tracks=[];for(const joint of [...wings,tail,head]){const times=[],values=[];for(let i=0;i<=32;i++){const t=i/32,side=joint.name.endsWith('L')?-1:1,angle=joint===tail?Math.sin(t*Math.PI*2)*.09:joint===head?Math.sin(t*Math.PI*2)*.035:Math.sin(t*Math.PI*2+(joint.name.includes('Tip')?-.35:0))*side*(joint.name.includes('Tip')?.25:.48);const axis=joint===tail?new T.Vector3(0,1,0):new T.Vector3(0,0,1);times.push(t*duration);values.push(...new T.Quaternion().setFromAxisAngle(axis,angle).toArray());}tracks.push(new T.QuaternionKeyframeTrack(joint.name+'.quaternion',times,values));}return new T.AnimationClip(phase,duration,tracks);});
 return {scene:root,animations};
}
