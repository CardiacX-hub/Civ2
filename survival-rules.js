/* Endless Centerhold rules. Shared with the headless engine for save/replay tests.
 * No wall-clock scheduling or unbounded spawning: each cleared wave gates the next. */
(()=>{
 const LIMIT=72,colors=['#53c9eb','#ef685a','#b88af0','#f2c45b'];
 function plan(wave,race){const pool=['melee','ranged'];if(wave>=3)pool.push('sniper');if(wave>=5)pool.push('siege');if(wave>=7)pool.push(race==='covenant'?'air2':'air');if(wave>=10)pool.push('air2');return{count:Math.min(LIMIT,4+wave*2),health:1+(wave-1)*.09,rank:Math.min(3,Math.floor(wave/4)),pool};}
 function lane(x,y){const dx=x-SIZE/2,dy=y-SIZE/2;return Math.hypot(dx,dy)<730||Math.abs(dx)<135||Math.abs(dy)<135;}
 function configure(){
  const center=SIZE/2,base=state.entities.find(e=>e.owner===0&&e.type==='base'),dx=center-base.x,dy=center-base.y;
  state.entities=state.entities.filter(e=>e.owner===0);for(const e of state.entities){e.x+=dx;e.y+=dy;e.order=null;e.tasks=[];e.route=null;}
  state.spawns[0]=[center,center];state.mountains=state.mountains.filter(m=>!lane(m.x,m.y)&&Math.abs(m.x-center)>m.half+140&&Math.abs(m.y-center)>m.half+140);
  // Rivers and elevated plateaus cannot cut off the central base or its four approaches.
  state.rivers=[];state.plateaus=state.plateaus.filter(p=>Math.abs(p.x-center)>p.w+180&&Math.abs(p.y-center)>p.h+180);
  state.resources=[];state.wallVersion++;state.blockCache={};populateResources([[center,center]]);
  state.resources=state.resources.filter(r=>Math.hypot(r.x-center,r.y-center)>160&&!(r.type==='wood'&&(Math.abs(r.x-center)<90||Math.abs(r.y-center)<90)));
  state.posts=[];state.siegeBridges=[];state.convoyRace=null;state.cover=[];state.ruins=[];state.effects=[];state.enemyBuildings={};state.seen.fill(0);state.visible.fill(0);
  for(const p of state.players){p.ai=false;p.initialAI=false;p.team=0;}
  state.players[0].gold=state.players[0].wood=600;
  for(const type of ['melee','melee','ranged','ranged']){const i=state.entities.length;entity(type,0,center-90+(i%4)*42,center+150);}
  state.survival={version:1,wave:0,cleared:0,nextAt:60,phase:'prepare',spawned:0,failedSpawns:0,direction:0,scanAt:0,events:[]};
  state.rules={...state.rules,victory:'strongholds',speed:1};state.networkMatch=false;state.ai=1e9;
  cam.x=center-viewport.width/2;cam.y=center-viewport.height/2;clampCam();clearTerrainCache();fog();updateUI();
 }
 function log(label){const s=state.survival;s.events.push({time:state.time,label});if(s.events.length>96)s.events.shift();}
 function spawnPoint(side,index,size){
  // Clear cardinal lanes lead from the edge to the center. Side offsets avoid piles.
  const c=SIZE/2;for(let attempt=0;attempt<24;attempt++){const offset=((index+attempt)%11-5)*42,edge=180+Math.floor((index+attempt)/11)*38;
   const p=[{x:c+offset,y:edge},{x:SIZE-edge,y:c+offset},{x:c+offset,y:SIZE-edge},{x:edge,y:c+offset}][side];
   if(!blockedGroundPoint(p.x,p.y,size+3)&&!state.entities.some(e=>e.hp>0&&Math.hypot(e.x-p.x,e.y-p.y)<e.size+size+4))return p;
  }return null;
 }
 function launch(){
  const s=state.survival,wave=s.wave+1,owner=1+(wave-1)%(state.players.length-1),race=state.players[owner].faction,d=plan(wave,race),side=(wave-1)%4;
  const p=state.players[owner];for(const key of ['meleeTraining','rangedTraining','sniperTraining','artillery'])p[key]=d.rank;
  const available=LIMIT-state.entities.filter(e=>e.waveEnemy&&e.hp>0).length;let spawned=0;
  for(let i=0;i<Math.min(d.count,available);i++){const type=d.pool[i%d.pool.length],point=spawnPoint(side,i,units[type].flying?22:14);if(!point){s.failedSpawns++;continue;}
   const e=entity(type,owner,point.x,point.y);e.waveEnemy=true;e.wave=wave;e.hp=e.max=Math.round(e.max*d.health);queueTask(e,{kind:'attackMove',x:SIZE/2+(i%5-2)*30,y:SIZE/2+Math.floor(i/5)*15});spawned++;
  }
  // Retry a blocked entrance rather than awarding a wave that never spawned.
  if(!spawned){s.nextAt=state.time+5;s.phase='prepare';return false;}
  s.wave=wave;s.spawned=spawned;s.remaining=spawned;s.direction=side;s.phase='fight';s.nextAt=null;log('Wave '+wave+' · '+factionName(race)+' · '+spawned+' enemies');return true;
 }
 function advance(){
  const s=state.survival;if(!s||state.ended)return;state.ai=1e9;if(state.time<s.scanAt)return;s.scanAt=state.time+.5;
  if(s.phase==='prepare'){if(state.time>=s.nextAt)launch();return;}
  const enemies=state.entities.filter(e=>e.waveEnemy&&e.hp>0),ashes=(state.phoenixAshes||[]).some(a=>a.owner!==0&&!a.trampled);
  s.remaining=enemies.length+(state.phoenixAshes||[]).filter(a=>a.owner!==0&&!a.trampled).length;
  if(!enemies.length&&!ashes){s.cleared=s.wave;s.phase='prepare';s.nextAt=state.time+35;const reward=90+s.wave*20,p=state.players[0];p.gold+=reward;p.wood+=reward;matchStats(0).goldGained+=reward;matchStats(0).woodGained+=reward;log('Wave '+s.wave+' cleared · +'+reward+' gold and lumber');}
  else for(const e of enemies)if(!e.order||['stop','hold'].includes(e.order.kind))queueTask(e,{kind:'attackMove',x:SIZE/2,y:SIZE/2});
 }
 const previousStart=start;start=function(options){const requested=options?.mode==='waves'||(!options&&KawSurvival.pending);if(!requested)return previousStart(options);
  KawSurvival.pending=false;const race=options?.players?.[0]?.faction||faction,color=options?.players?.[0]?.color||$('color').value,roster=[race,...Object.keys(factions).filter(f=>f!==race)].map((f,i)=>({name:i?'Wave host '+i:'You',faction:f,color:i?colors.filter(c=>c!==color)[i-1]:color,ai:false}));
  const result=previousStart({...options,players:roster,rules:{resources:600,speed:1,supply:200,victory:'strongholds'}});if(state)configure();return result;
 };
 const previousOutcome=KawRules.outcome;KawRules.outcome=function(){if(state.survival)return state.entities.some(e=>e.owner===0&&e.type==='base'&&e.hp>0)?null:{winners:[],reason:'centerhold'};return previousOutcome();};
 const previousTick=tick;tick=function(dt){if(state?.survival)advance();return previousTick(dt);};
 globalThis.KawSurvival={pending:false,plan,configure,launch,advance,limit:LIMIT};
})();
