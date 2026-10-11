/** Small shared geometry additions, bounded to visible models. */
import * as THREE from 'three';
let grain;
function woodGrain(){
 if(grain)return grain;
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
 const ctx=canvas.getContext('2d');ctx.fillStyle='#86633e';ctx.fillRect(0,0,256,256);
 // Deterministic flowing grain and knots: no texture noise changes between frames.
 for(let i=0;i<110;i++){ctx.strokeStyle=i%3?'#66472b':'#b18d5e';ctx.lineWidth=i%4===0?2:1;ctx.beginPath();for(let y=0;y<=256;y+=4){const x=i*2.4+Math.sin(y*.035+i)*2.5;y?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();}
 for(const [x,y] of [[65,85],[180,190]])for(let r=3;r<16;r+=3){ctx.beginPath();ctx.ellipse(x,y,r,r*2,0,0,Math.PI*2);ctx.stroke();}
 grain=new THREE.CanvasTexture(canvas);grain.colorSpace=THREE.SRGBColorSpace;return grain;
}
export function polishModel(entry,e,c,time){
 const race=c.state.players[e.owner]?.faction;
 if(e.building&&e.type==='wall'&&race==='covenant'){
  // One half-link each way meets the neighboring wall exactly at the midpoint.
  const neighbors=c.wallNeighbors?.get(e.id)||[];
  const signature=neighbors.map(n=>n.id).join(':');
  if(entry.wallSignature!==signature){entry.wallSignature=signature;disposePolish(entry);entry.polish=new THREE.Group();entry.root.add(entry.polish);
   const material=new THREE.MeshStandardMaterial({color:0xa5aa85,roughness:.85});
   for(const n of neighbors){const dx=(n.x-e.x)*.1,dz=(n.y-e.y)*.1,length=Math.hypot(dx,dz)/2+.04;const bridge=new THREE.Mesh(new THREE.BoxGeometry(length,1.1,1.3),material);bridge.position.set(dx/4,.75,dz/4);bridge.rotation.y=-Math.atan2(dz,dx);bridge.castShadow=bridge.receiveShadow=true;entry.polish.add(bridge);}
  }
 }
 if(e.type==='siege'&&race==='horde'){
  if(!entry.polish){entry.polish=new THREE.Group();entry.root.add(entry.polish);const wood=new THREE.MeshStandardMaterial({map:woodGrain(),bumpMap:woodGrain(),bumpScale:.035,roughness:.83});
   entry.model.traverse(m=>{if(!m.isMesh)return;const list=Array.isArray(m.material)?m.material:[m.material];m.material=list.map(mat=>{if(!mat.color||mat.metalness>.4)return mat;const color=mat.color;if(color.r>color.b*1.3&&color.g>color.b*1.1){const copy=mat.clone();copy.map=copy.bumpMap=woodGrain();copy.bumpScale=.025;entry.polishMaterials??=[];entry.polishMaterials.push(copy);return copy;}return mat;});if(!Array.isArray(list)||m.material.length===1)m.material=m.material[0];});
   const arm=new THREE.Group();arm.position.set(0,1.25,0);const beam=new THREE.Mesh(new THREE.BoxGeometry(.18,.18,2.6),wood);beam.position.z=1;arm.add(beam);const cup=new THREE.Mesh(new THREE.SphereGeometry(.35,12,8,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0x4c3020,roughness:.95,side:THREE.DoubleSide}));cup.rotation.x=Math.PI;cup.position.set(0,.1,2.2);arm.add(cup);entry.polish.add(arm);entry.slingArm=arm;
   const stone=new THREE.Mesh(new THREE.IcosahedronGeometry(.26,1),new THREE.MeshStandardMaterial({color:0x8e918a,roughness:.95}));stone.position.set(0,.18,2.2);arm.add(stone);entry.loadedRock=stone;}
  const progress=e.action?.kind==='attack'?Math.max(0,Math.min(1,1-(e.action.until-time)/e.action.duration)):0;
  // Wind up, snap forward at release, then recover. The simulation owns the projectile.
  entry.slingArm.rotation.x=progress<.25?-.45-progress*1.8:progress<.55?-.9+(progress-.25)/.3*2:1.1-(progress-.55)/.45*1.55;
  entry.loadedRock.visible=progress<.5;
 }
}
export function disposePolish(entry){if(entry.polish){entry.polish.traverse(m=>{m.geometry?.dispose();if(m.material)for(const mat of(Array.isArray(m.material)?m.material:[m.material]))mat.dispose();});entry.polish.removeFromParent();entry.polish=null;}entry.polishMaterials?.forEach(m=>m.dispose());entry.polishMaterials=null;}
