/* Six-seat airlift. Cargo uses stable IDs, so checkpoints and online snapshots
 * never introduce cyclic references. All load/unload checks run on the server. */
(()=>{
 const CAP=6;
 units.transport={gold:120,wood:80,hp:400,damage:0,range:0,speed:125,time:25,flying:true};
 for(const [race,name]of Object.entries({human:'Dawnward Skybarge',horde:'Dominion War Zeppelin',covenant:'Verdant Grove Ark',alien:'Astral Landing Craft'}))names[race].transport=name;
 const options=troopOptions;troopOptions=(building,race)=>[...options(building,race),...(['base','roost'].includes(building)?['transport']:[])];
 const requirement=unitStrongholdRequirement;unitStrongholdRequirement=(type,owner=0)=>type==='transport'?1:requirement(type,owner);
 const appearance=unitAppearance;unitAppearance=(type,race,owner=0)=>type==='transport'?'transport-'+race:appearance(type,race,owner);
 const picture=unitPicture;unitPicture=(type,race)=>type==='transport'?'<span class="unit-picture transport-portrait" role="img" aria-label="Flying transport">✈</span>':picture(type,race);
 const attack=canAttackTarget;canAttackTarget=(e,t)=>!e.carriedBy&&!t?.carriedBy&&e.type!=='transport'&&attack(e,t);
 const task=queueTask;queueTask=function(e,o,append=false){if(e.carriedBy)return false;if(o.kind==='embark')state.hasAirlift=true;return task(e,o,append);};
 const stop=stopUnit;stopUnit=function(e){if(e.carriedBy)return false;return stop(e);};
 const definition=abilityDefinition;abilityDefinition=e=>e.type==='transport'?{name:'Pick up nearby units',description:'Load up to 6 ground units. Units within 420 walk to the transport and board automatically within 160. Select ground units and order them onto a friendly transport: right-click on PC, or tap in Order mode on a phone. Fly to dry land, then use Disembark. Cargo is lost if the transport is destroyed.',cooldown:0}:definition(e);
 const stats=characterStats;characterStats=e=>e.type==='transport'?[...stats(e),['Passengers',(e.passengers?.length||0)+' / '+CAP],['Role','Unarmed flying transport · Stronghold level 1']]:stats(e);
 function cargo(t){return state.entities.filter(e=>e.hp>0&&e.carriedBy===t.id);}
 function load(t,combatOnly=false,only=null){const inside=cargo(t),available=state.entities.filter(e=>e.owner===t.owner&&(!only||only.includes(e))&&(!combatOnly||e.type!=='worker')&&e.hp>0&&!e.building&&!isFlying(e)&&!e.hiddenInMine&&!e.carriedBy&&!e.convoy&&e.type!=='bloomPod'&&Math.hypot(e.x-t.x,e.y-t.y)<=160).sort((a,b)=>Math.hypot(a.x-t.x,a.y-t.y)-Math.hypot(b.x-t.x,b.y-t.y)||a.id-b.id).slice(0,CAP-inside.length);for(const e of available){leaveMine(e);stopUnit(e);state.hasAirlift=true;e.carriedBy=t.id;e.hiddenInMine=true;e.order=null;e.tasks=[];e.x=t.x;e.y=t.y;}t.passengers=cargo(t).map(e=>e.id);return available.length>0;}
 function unload(t){let done=0;for(const e of cargo(t)){let spot;for(let ring=1;ring<=4&&!spot;ring++)for(let i=0;i<16;i++){const a=i*Math.PI/8,x=t.x+Math.cos(a)*ring*28,y=t.y+Math.sin(a)*ring*28;if(x<20||y<20||x>SIZE-20||y>SIZE-20||blockedGroundPoint(x,y,e.size+3)||state.entities.some(u=>u!==e&&u.hp>0&&!u.hiddenInMine&&!isFlying(u)&&Math.hypot(u.x-x,u.y-y)<u.size+e.size+5))continue;spot={x,y};break;}if(!spot)continue;delete e.carriedBy;e.hiddenInMine=false;e.x=spot.x;e.y=spot.y;e.order={kind:'stop'};e.manualPassive=true;e.route=null;done++;}t.passengers=cargo(t).map(e=>e.id);return done>0;}
 const ability=unitAbility;unitAbility=function(e,aiControlled=false,mode){if(e.carriedBy)return false;if(e.type!=='transport')return ability(e,aiControlled,mode);if(!state||state.count>0||state.ended||paused||e.hp<=0||e.owner!==0&&!aiControlled||!['load','unload',undefined].includes(mode))return false;const ok=mode==='unload'?unload(e):requestPickup(e);if(e.owner===0&&!aiControlled)toast(ok?(mode==='unload'?'Passengers disembarked.':'Pickup ordered · '+(e.passengers?.length||0)+'/6 aboard.'):mode==='unload'?'Fly closer to clear dry land to disembark.':'Bring ground units within 420, or right-click this transport with them selected.');return ok;};
 function requestPickup(t){
  const nearby=state.entities.filter(e=>e.owner===t.owner&&e.hp>0&&!e.building&&!isFlying(e)&&!e.hiddenInMine&&!e.carriedBy&&!e.convoy&&e.type!=='bloomPod'&&Math.hypot(e.x-t.x,e.y-t.y)<=420).sort((a,b)=>Math.hypot(a.x-t.x,a.y-t.y)-Math.hypot(b.x-t.x,b.y-t.y)||a.id-b.id).slice(0,CAP-cargo(t).length);
  for(const e of nearby)queueTask(e,{kind:'embark',target:t});
  if(nearby.length)state.hasAirlift=true;
  return load(t,false,nearby)||nearby.length>0;
 }
 const warTick=KawWarfront.tick;KawWarfront.tick=function(dt){warTick(dt);if(!state.hasAirlift)return;
  for(const e of state.entities){if(e.hp<=0||e.order?.kind!=='embark')continue;const t=e.order.target;
   if(!t||t.hp<=0||t.type!=='transport'||t.owner!==e.owner||e.building||isFlying(e)||e.carriedBy){stopUnit(e);continue;}
   if((t.passengers?.length||0)>=CAP){stopUnit(e);continue;}
   if(Math.hypot(e.x-t.x,e.y-t.y)<=160)load(t,false,[e]);else move(e,t.x,t.y,dt);
  }
 };
 // Island AIs use the same transport, costs and capacity as players.
 const oldAI=ai;ai=function(schedule){oldAI(schedule);if(state.map!=='atollIsles')return;for(let owner=0;owner<state.players.length;owner++){const p=state.players[owner];if(!p.ai||state.time<(p.airliftAt||0))continue;p.airliftAt=state.time+4;const base=state.entities.find(e=>e.owner===owner&&e.type==='base'&&e.hp>0),t=state.entities.find(e=>e.owner===owner&&e.type==='transport'&&e.hp>0);if(!base)continue;if(!t){if(!base.queue.some(q=>q.type==='transport'))train(base,'transport');continue;}const enemy=state.entities.find(e=>e.type==='base'&&e.hp>0&&!sameTeam(e.owner,owner));if(!enemy)continue;if(!cargo(t).length){queueTask(t,{kind:'move',x:base.x+110,y:base.y+80});if(Math.hypot(t.x-base.x,t.y-base.y)<220){for(const e of state.entities.filter(e=>e.owner===owner&&!e.building&&!isFlying(e)&&e.type!=='worker'&&e.hp>0).slice(0,CAP))queueTask(e,{kind:'move',x:t.x,y:t.y});if(load(t,true))t.airliftTarget={x:enemy.x,y:enemy.y+150};}}if(t.airliftTarget){queueTask(t,{kind:'move',...t.airliftTarget});if(Math.hypot(t.x-t.airliftTarget.x,t.y-t.airliftTarget.y)<75){const before=cargo(t);if(unload(t)){for(const e of before.filter(e=>!e.carriedBy))queueTask(e,{kind:'attackMove',x:enemy.x,y:enemy.y});if(!cargo(t).length)delete t.airliftTarget;}}}}};
 const simulation=tick;tick=function(dt){simulation(dt);if(!state.hasAirlift)return;
  // Index cargo once, rather than filtering the entire army for every carrier.
  const carriers=new Map();for(const t of state.entities)if(t.type==='transport'&&t.hp>0){carriers.set(t.id,t);t.passengers=[];}
  for(const e of state.entities)if(e.carriedBy){const t=carriers.get(e.carriedBy);if(t&&e.hp>0){e.hiddenInMine=true;e.x=t.x;e.y=t.y;t.passengers.push(e.id);}else e.hp=0;}
 };
 const draw=drawEntity;drawEntity=function(e){if(e.type!=='transport')return draw(e);if(e.hiddenInMine)return;const race=state.players[e.owner].faction;ctx.save();ctx.translate(e.x,e.y-renderAltitude(e));ctx.scale(['human','horde'].includes(race)?1.6:1.25,['human','horde'].includes(race)?1.6:1.25);ctx.strokeStyle='#29241d';ctx.lineWidth=2;ctx.fillStyle=state.players[e.owner].color;
 if(race==='human'){ctx.beginPath();ctx.ellipse(0,-34,26,33,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.strokeStyle='#d8bb78';for(const x of [-13,0,13]){ctx.beginPath();ctx.ellipse(x*.3,-34,Math.max(3,26-Math.abs(x)),33,0,-Math.PI/2,Math.PI/2);ctx.stroke();}ctx.strokeStyle='#b9a278';for(const x of [-13,13]){ctx.beginPath();ctx.moveTo(x,-8);ctx.lineTo(x*.8,10);ctx.stroke();}ctx.fillStyle='#765639';ctx.fillRect(-14,8,28,13);ctx.strokeRect(-14,8,28,13);ctx.fillStyle='#ffb45b';ctx.fillRect(-3,0,6,8);
 }else if(race==='covenant'){ctx.fillStyle='#58432b';ctx.beginPath();ctx.ellipse(0,0,29,10,0,0,Math.PI*2);ctx.fill();for(let i=0;i<9;i++){ctx.fillStyle=i%2?'#294c2b':'#52743b';ctx.beginPath();ctx.ellipse(-24+i*6,-17-Math.sin(i/8*Math.PI)*9,8,21,(i-4)*.14,0,Math.PI*2);ctx.fill();ctx.stroke();}ctx.strokeStyle='#a59a62';ctx.beginPath();ctx.moveTo(-27,0);ctx.lineTo(27,0);ctx.stroke();
 }else{ctx.fillStyle=race==='horde'?'#8d4632':'#778c9d';ctx.beginPath();ctx.ellipse(0,-22,race==='horde'?43:34,18,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle=state.players[e.owner].color;ctx.fillRect(-23,-8,46,13);ctx.strokeRect(-23,-8,46,13);ctx.fillStyle='#a5e6ed';for(let i=0;i<6;i++)ctx.fillRect(-19+i*7,-5,4,5);}
 ctx.fillStyle='#eef3d7';ctx.font='10px system-ui';ctx.fillText((e.passengers?.length||0)+'/6',-8,33);ctx.restore();};
 globalThis.KawTransport={load,unload,requestPickup,capacity:CAP};
})();
