/** Recover rigid, bone-attached parts from imported skin meshes.
 * Only triangles whose vertices each have exactly one full-weight influence
 * are converted. Blended skins and morphs keep their original skinning path. */
import * as THREE from 'three';
export function expandRigidSkin(root){
 root.updateMatrixWorld(true);const sources=[];root.traverse(o=>{if(o.isSkinnedMesh)sources.push(o);});let converted=0;
 for(const source of sources){const g=source.geometry,weights=g.attributes.skinWeight,joints=g.attributes.skinIndex;if(!weights||!joints||Array.isArray(source.material)||Object.keys(g.morphAttributes).length)continue;
  const vertexBones=[];let valid=true;for(let i=0;i<weights.count;i++){let bone=-1;for(let k=0;k<4;k++){const w=weights.getComponent(i,k);if(w>.001){if(bone!==-1||Math.abs(w-1)>.001){valid=false;break;}bone=joints.getComponent(i,k);}}if(!valid||bone<0||!source.skeleton.bones[bone]){valid=false;break;}vertexBones.push(bone);}if(!valid)continue;
  const chunks=new Map(),count=g.index?.count||weights.count;for(let i=0;i<count;i+=3){const triangle=[0,1,2].map(k=>g.index?g.index.getX(i+k):i+k),bone=vertexBones[triangle[0]];if(triangle.some(v=>vertexBones[v]!==bone)){valid=false;break;}if(!chunks.has(bone))chunks.set(bone,[]);chunks.get(bone).push(...triangle);}if(!valid)continue;
  for(const [bone,indices]of chunks){const geometry=new THREE.BufferGeometry();for(const [name,attribute]of Object.entries(g.attributes)){if(['skinIndex','skinWeight'].includes(name))continue;const data=new Float32Array(indices.length*attribute.itemSize);for(let i=0;i<indices.length;i++)for(let k=0;k<attribute.itemSize;k++)data[i*attribute.itemSize+k]=attribute.getComponent(indices[i],k);geometry.setAttribute(name,new THREE.BufferAttribute(data,attribute.itemSize));}
   const transform=source.skeleton.boneInverses[bone].clone().multiply(source.bindMatrix);geometry.applyMatrix4(transform);geometry.computeBoundingBox();geometry.computeBoundingSphere();const mesh=new THREE.Mesh(geometry,source.material);mesh.name=source.name+'-rigid-'+bone;mesh.castShadow=source.castShadow;mesh.receiveShadow=source.receiveShadow;source.skeleton.bones[bone].add(mesh);
  }if(source.children.length&&source.parent){const replacement=new THREE.Group();replacement.name=source.name;replacement.position.copy(source.position);replacement.quaternion.copy(source.quaternion);replacement.scale.copy(source.scale);source.parent.add(replacement);for(const child of [...source.children])replacement.add(child);}source.removeFromParent();converted++;
 }
 return converted;
}
