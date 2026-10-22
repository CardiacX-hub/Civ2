/** Batch rigid meshes after their animation transforms have been evaluated.
 * Every limb retains its authored geometry, material and world transform.
 * Skinned/transparent meshes use the normal renderer; no sprite substitutions. */
import * as THREE from 'three';
export function createUnitBatches(scene){
 const batches=new Map(),sourceCache=new WeakMap();let submitted=0;
 return {
  update(entries){
   const now=performance.now();
   for(const batch of batches.values()){batch.sources.length=0;batch.mesh.visible=false;}
   submitted=0;
   for(const entry of entries){if(!(entry.unit||entry.batchRigid)||!entry.root.visible||!entry.model.visible)continue;entry.root.updateMatrixWorld(true);
    // Rig topology is immutable. Cache mesh references, while reading current
    // materials and transforms so team colors and poses remain independent.
    if(!entry.batchSources){entry.batchSources=[];entry.model.traverse(o=>{if(o.isMesh)entry.batchSources.push(o);});}
    for(const source of entry.batchSources){if(!source.isMesh||source.isSkinnedMesh||Array.isArray(source.material)||source.material.transparent||!source.visible&&!source.userData.batchHidden)continue;
     let cached=sourceCache.get(source),batch=cached?.batch;
     if(!cached||batch.retired||cached.geometry!==source.geometry||cached.material!==source.material||cached.cast!==source.castShadow||cached.receive!==source.receiveShadow){
      const key=source.geometry.uuid+':'+source.material.uuid+':'+source.castShadow+':'+source.receiveShadow;
      batch=batches.get(key);if(!batch){const mesh=new THREE.InstancedMesh(source.geometry,source.material,64);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.castShadow=source.castShadow;mesh.receiveShadow=source.receiveShadow;mesh.frustumCulled=false;mesh.count=0;scene.add(mesh);batch={mesh,sources:[],used:now};batches.set(key,batch);}
      sourceCache.set(source,{batch,geometry:source.geometry,material:source.material,cast:source.castShadow,receive:source.receiveShadow});
     }
     batch.sources.push(source);source.visible=false;source.userData.batchHidden=true;submitted++;
    }
   }
   for(const [key,batch]of batches){const count=batch.sources.length;if(!count){if(now-batch.used>45000){batch.mesh.removeFromParent();batch.mesh.dispose();batch.retired=true;batches.delete(key);}continue;}batch.used=now;
    if(count>batch.mesh.instanceMatrix.count){const old=batch.mesh,mesh=new THREE.InstancedMesh(old.geometry,old.material,2**Math.ceil(Math.log2(count)));mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.castShadow=old.castShadow;mesh.receiveShadow=old.receiveShadow;mesh.frustumCulled=false;old.removeFromParent();old.dispose();scene.add(mesh);batch.mesh=mesh;}
    batch.mesh.count=count;batch.mesh.visible=true;batch.mesh.userData.rigidBatch=true;batch.mesh.userData.shadowAnchor??=new THREE.Vector3();batch.mesh.userData.shadowAnchor.setFromMatrixPosition(batch.sources[0].matrixWorld);// Keep a CPU precision copy: comparing doubles avoids Float32 rounding noise.
    // Changed matrices use native typed-array copies instead of 16 scalar writes.
    const data=batch.mesh.instanceMatrix.array;let firstChanged=Infinity,lastChanged=-1;if(!batch.previous||batch.previous.length!==data.length){batch.previous=new Float64Array(data.length);batch.previous.fill(NaN);}for(let i=0;i<count;i++){const values=batch.sources[i].matrixWorld.elements,offset=i*16;for(let j=0;j<16;j++)if(batch.previous[offset+j]!==values[j]){data.set(values,offset);batch.previous.set(values,offset);firstChanged=Math.min(firstChanged,offset);lastChanged=offset+16;break;}}if(lastChanged>=0){batch.mesh.instanceMatrix.addUpdateRange(firstChanged,lastChanged-firstChanged);batch.mesh.instanceMatrix.needsUpdate=true;}
   }
  },
  get stats(){return {batches:[...batches.values()].filter(b=>b.mesh.visible).length,instances:submitted};},
  dispose(){for(const b of batches.values()){b.retired=true;b.mesh.removeFromParent();b.mesh.dispose();}batches.clear();}
 };
}
