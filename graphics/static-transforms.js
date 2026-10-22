/** Freeze only static landscape meshes, retaining full geometry and textures.
 * A pristine subtree needs no matrix work. Parent changes or falling trees
 * invalidate it immediately; wind remains a vertex-shader animation. */
const STATIC_NAMES=new Set(['world-tree','world-pine','world-mountain','world-gold','world-gold-outcrop']);
export function updateStaticTransforms(entries){
 for(const entry of entries){if(entry.unit||!entry.root.visible||!STATIC_NAMES.has(entry.name))continue;const root=entry.root;
  if(!entry.staticTransform){entry.staticTransform=new Float64Array(12);entry.staticTransform.fill(NaN);root.traverse(o=>{o.updateMatrix();o.matrixAutoUpdate=false;});const update=root.updateMatrixWorld;root.updateMatrixWorld=function(force){if(force||this.matrixWorldNeedsUpdate)update.call(this,force);};}
  const old=entry.staticTransform,p=root.position,r=root.rotation,s=root.scale;
  if(old[0]!==p.x||old[1]!==p.y||old[2]!==p.z||old[3]!==r.x||old[4]!==r.y||old[5]!==r.z||old[6]!==s.x||old[7]!==s.y||old[8]!==s.z){old.set([p.x,p.y,p.z,r.x,r.y,r.z,s.x,s.y,s.z]);root.updateMatrix();}
  const model=entry.model;if(model&&(old[9]!==model.scale.x||old[10]!==model.scale.y||old[11]!==model.scale.z)){old[9]=model.scale.x;old[10]=model.scale.y;old[11]=model.scale.z;model.updateMatrix();root.matrixWorldNeedsUpdate=true;}
 }
}
