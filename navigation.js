/* Shared route corridors and bounded route bursts keep large orders responsive.
 * Reuse is allowed only when the troop can safely join the cached corridor. */
(() => {
 let session,cache=new Map(),blockedLines=new Set(),obstacles=null,signature='',terrainRefs=[],obstacleEntityCount=-1,budgetAt=-1,spent=0,shapeAt=-1,shapeCount=-1,shapeSession=null,shape='';
 const clock=()=>globalThis.performance?.now?.()??Date.now();
 const ground=groundObstacles;groundObstacles=function(){if(!inSimulationTick)return ground();
 // Mobile production/deaths do not change static terrain. Rebuild expensive
 // obstacle/edge caches only when the actual blocking topology changes.
 if(shapeSession!==state||shapeAt!==state.time||shapeCount!==state.entities.length){shapeSession=state;shapeAt=state.time;shapeCount=state.entities.length;shape=state.entities.filter(b=>b.building&&b.hp>0&&b.type!=='trap'&&!(b.type==='gate'&&b.gateOpen)&&(!['wall','gate'].includes(b.type)||!b.construction)).map(b=>b.id+':'+b.size+':'+b.x+':'+b.y).join(',');}
 const version=state.wallVersion+':'+shape;
 if(session!==state||signature!==version||terrainRefs[0]!==state.resources||terrainRefs[1]!==state.mountains||terrainRefs[2]!==state.rivers||terrainRefs[3]!==state.plateaus){session=state;signature=version;obstacleEntityCount=state.entities.length;terrainRefs=[state.resources,state.mountains,state.rivers,state.plateaus];obstacles=ground();cache.clear();blockedLines.clear();}return obstacles;};
 const line=clearWallLine;clearWallLine=function(e,x,y,list){if(!inSimulationTick||state.entities.length<=300||Math.max(Math.abs(x-e.x),Math.abs(y-e.y))<=256)return line(e,x,y,list);const key=state.wallVersion+':'+e.size+':'+Math.floor(e.x/64)+':'+Math.floor(e.y/64)+':'+Math.floor(x/128)+':'+Math.floor(y/128);if(blockedLines.has(key))return false;const clear=line(e,x,y,list);if(!clear){blockedLines.add(key);if(blockedLines.size>2048)blockedLines.delete(blockedLines.values().next().value);}return clear;};
 const route=wallRoute;wallRoute=function(e,x,y){if(budgetAt!==state.time){budgetAt=state.time;spent=0;}if(inSimulationTick&&state.entities.length>60&&spent>6){const deferred=[];deferred.deferred=true;return deferred;}const workStart=clock();try{if(session!==state){session=state;cache.clear();blockedLines.clear();obstacles=null;signature='';}groundObstacles();const key=e.size+':'+signature+':'+Math.floor(e.x/96)+':'+Math.floor(e.y/96)+':'+Math.floor(x/128)+':'+Math.floor(y/128),prior=cache.get(key);if(prior){for(let i=0;i<Math.min(8,prior.length);i++)if(clearWallLine(e,prior[i].x,prior[i].y)){const points=prior.slice(i).map(p=>({...p}));const last=points.at(-1);if(last&&clearWallLine({...e,...last},x,y))points.push({x,y});return points;}}
  const points=route(e,x,y);if(points.length){cache.set(key,points.map(p=>({...p})));if(cache.size>512)cache.delete(cache.keys().next().value);}return points;}finally{spent+=clock()-workStart;}};
})();
