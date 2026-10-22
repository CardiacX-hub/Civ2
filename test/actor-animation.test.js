const test=require('node:test'),assert=require('node:assert/strict');
test('walking samples every frame without advancing the distance clock twice',async()=>{
 const T=await import('three'),{animateActor}=await import('../graphics/actor-animation.js');
 const root=new T.Object3D(),clip=new T.AnimationClip('walk',1,[new T.NumberKeyframeTrack('.position[x]',[0,1],[0,10])]),entry={mixer:new T.AnimationMixer(root),clips:[clip]},e={id:1,walkUntil:10};
 animateActor(entry,e,0,0,0);
 for(let i=1;i<=120;i++){assert.equal(animateActor(entry,e,i/120,i*45/120,0),true);const error=Math.abs(entry.action.time-((i/120)%1));assert(Math.min(error,Math.abs(1-error))<1e-8);}
 assert(Math.abs(entry.gait-1)<1e-8);assert.equal(entry.action.timeScale,0);
});
test('attack pose follows impact timing exactly and idle alone is budgeted',async()=>{
 const T=await import('three'),{animateActor}=await import('../graphics/actor-animation.js'),root=new T.Object3D(),clips=['attack','idle'].map(name=>new T.AnimationClip(name,1,[new T.NumberKeyframeTrack('.position[x]',[0,1],[0,10])])),entry={mixer:new T.AnimationMixer(root),clips};
 const e={id:1,action:{until:1,duration:1}};animateActor(entry,e,.4,0,0);animateActor(entry,e,.41,0,0);assert(Math.abs(entry.action.time-.41)<1e-8);assert(Math.abs(root.position.x-4.1)<1e-8);
 delete e.action;assert(animateActor(entry,e,1,0,0));assert.equal(animateActor(entry,e,1.01,0,0),false);assert(animateActor(entry,e,1.015,0,0,true));
});
test('cached unit batches retain geometry and hide burrowed actors',async()=>{
 const T=await import('three'),{createUnitBatches}=await import('../graphics/unit-batches.js'),scene=new T.Scene(),root=new T.Group(),model=new T.Group(),mesh=new T.Mesh(new T.BoxGeometry(),new T.MeshStandardMaterial());model.add(mesh);root.add(model);scene.add(root);const entry={unit:true,root,model},batch=createUnitBatches(scene);batch.update([entry]);assert.equal(batch.stats.instances,1);assert.equal(entry.batchSources[0].geometry,mesh.geometry);model.visible=false;batch.update([entry]);assert.equal(batch.stats.instances,0);model.visible=true;root.position.x=5;batch.update([entry]);assert.equal(batch.stats.instances,1);const m=scene.children.find(x=>x.isInstancedMesh),matrix=new T.Matrix4();m.getMatrixAt(0,matrix);assert.equal(matrix.elements[12],5);batch.dispose();
});
test('Dominion boulders use an elevated 3D arc and bounded impact fragments',async()=>{
 const T=await import('three'),{createRootEffects}=await import('../graphics/root-effects.js'),scene=new T.Scene(),fx=createRootEffects({scene});
 const shot={fromX:0,fromY:0,x:100,y:0,fromHeight:18,toHeight:0,duration:.65,left:.325},c={state:{time:1,players:[{faction:'horde'}],entities:[{type:'siege',owner:0,x:0,y:0,shot}],effects:[]},inViewport:()=>true,visible:()=>true,terrainHeight:()=>0};fx.update(c);const rocks=scene.getObjectByName('specialist-effects').children.find(m=>m.isInstancedMesh);assert.equal(rocks.count,1);const m=new T.Matrix4();rocks.getMatrixAt(0,m);assert(m.elements[13]>5);assert(m.elements[12]>0&&m.elements[12]<10);shot.left=0;fx.update(c);assert.equal(rocks.count,0);c.state.effects=Array.from({length:200},()=>({kind:'rock',age:.2,life:.8,x:100,y:0,size:4}));fx.update(c);assert.equal(rocks.count,160);fx.dispose();assert.equal(scene.children.length,0);
});

test('unchanged instanced poses skip GPU uploads while moving poses still update',async()=>{
 const T=await import('three'),{createUnitBatches}=await import('../graphics/unit-batches.js'),scene=new T.Scene(),root=new T.Group(),model=new T.Group();model.add(new T.Mesh(new T.BoxGeometry(),new T.MeshStandardMaterial()));root.add(model);scene.add(root);root.position.x=.13;const entry={unit:true,root,model},batch=createUnitBatches(scene);batch.update([entry]);const mesh=scene.children.find(o=>o.isInstancedMesh),version=mesh.instanceMatrix.version;batch.update([entry]);assert.equal(mesh.instanceMatrix.version,version);root.position.x+=.01;batch.update([entry]);assert(mesh.instanceMatrix.version>version);batch.dispose();
});

test('moving one batched actor uploads only its changed matrix, not reserved capacity',async()=>{const T=await import('three'),{createUnitBatches}=await import('../graphics/unit-batches.js'),scene=new T.Scene(),geometry=new T.BoxGeometry(),material=new T.MeshStandardMaterial(),entries=[];for(let i=0;i<3;i++){const root=new T.Group(),model=new T.Group();model.add(new T.Mesh(geometry,material));root.add(model);root.position.x=i;scene.add(root);entries.push({unit:true,root,model});}const batch=createUnitBatches(scene);batch.update(entries);const mesh=scene.children.find(o=>o.isInstancedMesh);mesh.instanceMatrix.clearUpdateRanges();entries[1].root.position.x+=1;batch.update(entries);assert.deepEqual(mesh.instanceMatrix.updateRanges,[{start:16,count:16}]);const oldMaterial=entries[1].model.children[0].material;entries[1].model.children[0].material=oldMaterial.clone();batch.update(entries);assert.equal(batch.stats.batches,2);batch.dispose();});
