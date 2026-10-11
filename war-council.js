/* Original shared skirmish rules, map planning and local-report telemetry.
 * This module runs in the browser and authoritative multiplayer VM. */
(() => {
 const defaults={resources:100,speed:1,supply:200,victory:'strongholds'};
 function normalize(input={}){
  return {resources:[100,300,600].includes(input.resources)?input.resources:100,
   speed:[.75,1,1.5].includes(input.speed)?input.speed:1,
   supply:[50,100,200].includes(input.supply)?input.supply:200,
   victory:['strongholds','elimination','domination','convoy'].includes(input.victory)?input.victory:'strongholds'};
 }
 const teamKey=owner=>state.players[owner].team?'team:'+state.players[owner].team:'player:'+owner;
 function contender(owner){return state.entities.some(e=>sameTeam(e.owner,owner)&&e.hp>0&&(state.rules?.victory==='elimination'||e.type==='base'));}
 function outcome(){
  const mode=state.rules?.victory||'strongholds',living=new Set();
  for(const e of state.entities)if(e.hp>0&&(mode==='elimination'||e.type==='base'))living.add(teamKey(e.owner));
  if(living.size<=1)return {winners:[...living],reason:mode};
  if(mode==='convoy'&&state.convoyRace?.winner)return {winners:[state.convoyRace.winner],reason:'convoy'};
  if(mode==='domination'&&state.domination?.winner)return {winners:[state.domination.winner],reason:'domination'};
  return null;
 }
 function updateDomination(dt){
  if(state.rules?.victory!=='domination')return;
  const posts=state.posts||[],held=posts.length>0&&posts.every(p=>p.owner>=0&&teamKey(p.owner)===teamKey(posts[0].owner))?teamKey(posts[0].owner):null;
  state.domination??={team:null,held:0};
  if(state.domination.team!==held){state.domination.team=held;state.domination.held=0;}
  if(held&&contender(posts[0].owner)){state.domination.held+=dt;if(state.domination.held>=120)state.domination.winner=held;}
 }
 const oldCap=supplyCap;supplyCap=owner=>Math.min(state.rules?.supply||200,oldCap(owner));
 const oldEntity=entity;entity=function(...args){const e=oldEntity(...args);if(state.telemetryActive&&!e.building&&e.type!=='pig'&&e.type!=='convoy'){
  const s=matchStats(e.owner);s.trainedByType??={};s.trainedByType[e.type]=(s.trainedByType[e.type]||0)+1;
 }return e;};
 const deaths=resolveCombatDeaths;resolveCombatDeaths=function(){for(const e of state.entities)if(e.hp<=0&&!e.deathResolved&&!e.building){const s=matchStats(e.owner);s.lostByType??={};s.lostByType[e.type]=(s.lostByType[e.type]||0)+1;}return deaths();};
 const oldStart=start;start=function(options){const result=oldStart(options);if(!state)return result;state.rules=normalize(options?.rules||globalThis.KawSkirmish?.settings||{});state.telemetryActive=true;const validator=globalThis.KawMapsValidator||globalThis.KawMaps;if(validator)state.mapHealth=validator.validate(mapData());
  for(let i=0;i<state.players.length;i++){const p=state.players[i];p.gold=p.wood=state.rules.resources;p.nextAI=i*.08;matchStats(i).trainedByType={};matchStats(i).lostByType={};}
  if(state.rules.victory==='domination'&&!state.posts?.length){if(globalThis.KawExperience)globalThis.KawExperience.forceObjectives=true;KawTactics.init();if(globalThis.KawExperience)globalThis.KawExperience.forceObjectives=false;}
  return result;
 };
 const oldTick=tick;tick=function(dt){dt*=state.rules?.speed||1;state.ai=Math.min(state.ai,.1);updateDomination(dt);return oldTick(dt);};
 function distanceToSegment(x,y,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((x-a.x)*dx+(y-a.y)*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a.x-t*dx,y-a.y-t*dy);}
 function roads(spots){const routes=[];for(const [x,y]of spots){const r=state.rivers?.[0];if(r){const bridges=r.bridges.map(y=>({x:riverCenter(r,y),y})).sort((a,b)=>Math.hypot(a.x-x,a.y-y)-Math.hypot(b.x-x,b.y-y));const near=bridges[0];if(near)routes.push([{x,y},{x:near.x+(x<near.x?-160:160),y:near.y},near]);}routes.push([{x,y},{x:x<SIZE/2?500:SIZE-500,y:SIZE/2}]);}return routes;}
 const populate=populateResources;populateResources=function(spots){state.entities??=[];state.blockCache??={};state.wallVersion??=0;populate(spots);state.mapRoads=roads(spots);
  // Wide approach lanes preserve contiguous forest groves and both river banks.
  state.resources=state.resources.filter(r=>r.type!=='wood'||!state.mapRoads.some(points=>points.slice(1).some((p,i)=>distanceToSegment(r.x,r.y,points[i],p)<42)));
  for(const [x,y]of spots){const close=state.resources.filter(r=>r.type==='wood'&&Math.hypot(r.x-x,r.y-y)<450).sort((a,b)=>Math.hypot(a.x-x,a.y-y)-Math.hypot(b.x-x,b.y-y));const keep=new Set(close.slice(0,16));state.resources=state.resources.filter(r=>r.type!=='wood'||Math.hypot(r.x-x,r.y-y)>=450||keep.has(r));
   for(let i=0;keep.size<16&&i<300;i++){const a=i*2.399,rad=220+Math.floor(i/16)%5*35,p={x:x+Math.cos(a)*rad,y:y+Math.sin(a)*rad};if(p.x<70||p.y<70||p.x>SIZE-70||p.y>SIZE-70||riverAt(p.x,p.y,30)||terrainHeight(p.x,p.y)!==0||onRamp(p.x,p.y)||state.mapRoads.some(points=>points.slice(1).some((q,j)=>distanceToSegment(p.x,p.y,points[j],q)<42))||groundObstacles().some(o=>Math.abs(o.x-p.x)<o.half+22&&Math.abs(o.y-p.y)<o.half+22)||state.resources.some(r=>Math.hypot(r.x-p.x,r.y-p.y)<(r.type==='gold'?100:33)))continue;const r={...p,type:'wood',amount:240};state.resources.push(r);keep.add(r);}
  }
  // Move two neutral mines beside raised terrain: defensible expansions with ramp access.
  const neutral=state.resources.filter(r=>r.type==='gold'&&spots.every(p=>Math.hypot(r.x-p[0],r.y-p[1])>500));
  for(let i=0;i<Math.min(2,neutral.length,state.plateaus.length);i++){const hill=state.plateaus[i],mine=neutral[i];for(let n=0;n<80;n++){const a=n*2.399,p={x:hill.x+hill.w+160+Math.cos(a)*n*3,y:hill.y+hill.h*.5+Math.sin(a)*n*3};if(p.x<160||p.y<160||p.x>SIZE-160||p.y>SIZE-160||spots.some(s=>Math.hypot(p.x-s[0],p.y-s[1])<600)||terrainHeight(p.x,p.y)!==0||onRamp(p.x,p.y)||riverAt(p.x,p.y,120)||state.resources.some(r=>r!==mine&&r.type==='gold'&&Math.hypot(r.x-p.x,r.y-p.y)<220)||(state.mountains||[]).some(m=>Math.abs(m.x-p.x)<m.half+100&&Math.abs(m.y-p.y)<m.half+100))continue;mine.x=p.x;mine.y=p.y;mine.expansion=true;mine.noOutcrop=false;attachGoldOutcrop(mine,spots);state.resources=state.resources.filter(r=>r.type!=='wood'||Math.hypot(r.x-p.x,r.y-p.y)>160);break;}}
  state.wallVersion=(state.wallVersion||0)+1;state.blockCache={};
 };
 const rivers=makeRivers;makeRivers=function(map){const list=rivers(map),crossings={highlands:[480,1180,1480,2220],frontier:[480,980,1480,2220],canyon:[480,1480,1880,2220]};for(const r of list)r.bridges=(crossings[map]||[480,1480,2220]).map(y=>y*MAP_SCALE);return list;};
 function mapData(){return {version:1,size:SIZE,name:state.map,starts:state.spawns.map(([x,y])=>({x,y})),resources:state.resources,mountains:[...state.mountains,...mineRockObstacles().map(o=>({...o,height:40}))],plateaus:state.plateaus,rivers:state.rivers};}
 function plan(map){const prior=state;try{state={map,mountains:makeMountains(map),plateaus:makePlateaus(map),rivers:makeRivers(map),resources:[],entities:[],wallVersion:0,blockCache:{}};state.spawns=spawnLocations(()=>.5);populateResources(state.spawns);return mapData();}finally{state=prior;}}
 globalThis.KawRules={defaults,mapData,plan,normalize,teamKey,contender,outcome,updateDomination,distanceToSegment};
})();
