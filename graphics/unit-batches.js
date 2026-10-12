/** Batch rigid meshes after their animation transforms have been evaluated.
 * Every limb retains its authored geometry, material and world transform.
 * Skinned/transparent meshes use the normal renderer; no sprite substitutions. */
import * as THREE from 'three';
export function createUnitBatches(scene){
 const batches=new Map();let submitted=0;
 return {
  update(entries){
   for(const batch of batches.values()){batch.sources.length=0;batch.mesh.visible=false;}
   submitted=0;
   for(const entry of entries){if(!entry.unit||!entry.root.visible||!entry.model.visible)continue;entry.root.updateMatrixWorld(true);
    // Rig topology is immutable. Cache mesh references, while reading current
    // materials and transforms so team colors and poses remain independent.
    if(!entry.batchSources){entry.batchSources=[];entry.model.traverse(o=>{if(o.isMesh)entry.batchSources.push(o);});}
    for(const source of entry.batchSources){if(!source.isMesh||source.isSkinnedMesh||Array.isArray(source.material)||source.material.transparent||!source.visible&&!source.userData.batchHidden)continue;
     const key=source.geometry.uuid+':'+source.material.uuid+':'+source.castShadow+':'+source.receiveShadow;
     let batch=batches.get(key);if(!batch){const mesh=new THREE.InstancedMesh(source.geometry,source.material,64);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.castShadow=source.castShadow;mesh.receiveShadow=source.receiveShadow;mesh.frustumCulled=false;mesh.count=0;scene.add(mesh);batch={mesh,sources:[],used:performance.now()};batches.set(key,batch);}
     batch.sources.push(source);source.visible=false;source.userData.batchHidden=true;submitted++;
    }
   }
   for(const [key,batch]of batches){const count=batch.sources.length;if(!count){if(performance.now()-batch.used>45000){batch.mesh.removeFromParent();batch.mesh.dispose();batches.delete(key);}continue;}batch.used=performance.now();
    if(count>batch.mesh.instanceMatrix.count){const old=batch.mesh,mesh=new THREE.InstancedMesh(old.geometry,old.material,2**Math.ceil(Math.log2(count)));mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.castShadow=old.castShadow;mesh.receiveShadow=old.receiveShadow;mesh.frustumCulled=false;old.removeFromParent();old.dispose();scene.add(mesh);batch.mesh=mesh;}
    batch.mesh.count=count;batch.mesh.visible=true;batch.sources.forEach((source,i)=>batch.mesh.setMatrixAt(i,source.matrixWorld));batch.mesh.instanceMatrix.needsUpdate=true;
   }
  },
  get stats(){return {batches:[...batches.values()].filter(b=>b.mesh.visible).length,instances:submitted};},
  dispose(){for(const b of batches.values()){b.mesh.removeFromParent();b.mesh.dispose();}batches.clear();}
 };
}
