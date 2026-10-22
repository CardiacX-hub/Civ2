/** Research fittings are attached to the existing animated rig, never world
 * positions. Geometry/materials are shared; topology only changes on rank change. */
import * as THREE from 'three';
const outline=new THREE.Shape();for(const [i,[x,y]] of [[-.38,-.5],[.38,-.5],[.5,-.38],[.5,.38],[.38,.5],[-.38,.5],[-.5,.38],[-.5,-.38]].entries())i?outline.lineTo(x,y):outline.moveTo(x,y);outline.closePath();const box=new THREE.ExtrudeGeometry(outline,{depth:.8,bevelEnabled:true,bevelSize:.06,bevelThickness:.06,bevelSegments:1,steps:1});box.center();box.computeBoundingBox();const extent=new THREE.Vector3();box.boundingBox.getSize(extent);box.scale(1/extent.x,1/extent.y,1/extent.z);const tip=new THREE.ConeGeometry(1,1,4),materials=new Map();
function material(race,rank){const key=race+rank;if(!materials.has(key)){const colors={human:[0x9eabb6,0xc9ab60],horde:[0x5d6469,0xa06038],covenant:[0x493821,0x3f6537],alien:[0x8ca3b8,0xa38cdd]};materials.set(key,new THREE.MeshStandardMaterial({color:colors[race]?.[rank>1?1:0]||0xa2a8ad,metalness:race==='covenant'?.15:.72,roughness:race==='covenant'?.78:.32}));}return materials.get(key);}
export function researchRank(e,p){return Math.min(3,Math.max(0,e.type==='siege'?p.artillery||0:p[e.type+'Training']||0,e.type==='phaseSentinel'?p.phaseArmor||0:0,['ranged','sniper','air','air2','nullDisruptor'].includes(e.type)&&p.faction==='alien'?p.laserFocus||0:0));}
export function updateResearchEquipment(entry,e,p){
 if(e.building||!entry.unit)return;const rank=researchRank(e,p),key=p.faction+':'+rank;if(entry.researchKey===key)return;entry.researchKey=key;entry.researchParts?.forEach(g=>g.removeFromParent());entry.researchParts=[];entry.batchSources=null;if(!rank)return;
 const h=entry.box.max.y-entry.box.min.y,alien=p.faction==='alien',mat=material(p.faction,rank),bones=[];entry.model.traverse(n=>{if(n.isBone&&n.children.length>=3)bones.push(n);});
 const torso=entry.model.getObjectByName('alienTorso')||bones.find(n=>Math.abs(n.position.x)<1&&n.position.y>h*.25&&n.position.y<h*.65)||entry.model;
 function group(parent){const g=new THREE.Group();g.name='researchEquipmentRank'+rank;parent.add(g);entry.researchParts.push(g);return g;}
 function plate(g,x,y,z,w,t,d,spike=false){const m=new THREE.Mesh(spike?tip:box,mat);m.position.set(x,y,z);m.scale.set(w,t,d);m.castShadow=m.receiveShadow=true;g.add(m);return m;}
 if(p.faction==='covenant'&&['ranged','sniper'].includes(e.type)){const crest=group(entry.model);for(let i=0;i<rank+1;i++)plate(crest,(i-rank/2)*h*.065,entry.box.min.y+h*.28,-h*.08,h*.025,h*(.08+rank*.012),h*.035,true);return;}
 const g=group(torso),dir=alien?-1:1,baseY=torso===entry.model?entry.box.min.y+h*.46:0;
 // Segmented cuirass / living-bark bands / armored siege chassis.
 for(let i=0;i<rank;i++)plate(g,0,baseY+h*(.07-i*.05),dir*h*.145,h*.25,h*.045,h*.035);
 if(rank>=2)for(const side of [-1,1]){const shoulder=entry.model.getObjectByName('alienArm'+side)||bones.find(n=>Math.sign(n.position.x)===side&&Math.abs(n.position.x)>h*.15&&n.position.y>0);const pad=group(shoulder||torso);plate(pad,shoulder?0:side*h*.22,shoulder?0:baseY+h*.12,0,h*.19,h*.055,h*.19);if(rank===3)plate(pad,0,h*.065,0,h*.025,h*.1,h*.025,true);}
 // Reinforced weapon collars stay on the hand or the authored rifle pivot.
 const weapon=entry.model.getObjectByName('alienRifle')||bones.find(n=>n.position.y< -h*.15&&n.children.length>=4);
 if(weapon){const w=group(weapon);for(let i=0;i<rank;i++)plate(w,0,alien?-3:h*.06+i*h*.035,alien?-h*.25:0,h*.06,h*.025,h*.065);}
}
export function releaseResearchEquipment(entry){entry.researchParts?.forEach(g=>g.removeFromParent());entry.researchParts=null;}
