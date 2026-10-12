/* Shared, original battlefield systems. Browser and lobby server run these rules. */
(() => {
 let sequence=0;
 function group(troops,destination,kind,append){troops=troops.filter(e=>units[e.type]?.speed>0);if(troops.length<2||append)return;const front=troops.filter(e=>formationRole(e)===0),leader=(front.length?front:troops).slice().sort((a,b)=>Math.hypot(a.x-destination.x,a.y-destination.y)-Math.hypot(b.x-destination.x,b.y-destination.y))[0],slots=formationSlots(troops,destination,kind),anchor=slots.get(leader.id),key=leader.id+':'+(++sequence);leader.breadcrumbs=[];for(const e of troops){const slot=slots.get(e.id);e.pendingFormation={key,leaderId:leader.id,dx:slot.x-anchor.x,dy:slot.y-anchor.y,finalX:slot.x,finalY:slot.y};}}
 const originalQueue=queueTask;queueTask=function(e,task,append=false){if(['move','attackMove'].includes(task.kind)){if(e.pendingFormation){task={...task,formation:e.pendingFormation};e.pendingFormation=null;}e.deployed=false;}else e.pendingFormation=null;return originalQueue(e,task,append);};
 const originalMove=move;move=function(e,x,y,dt,arrival){const distance=originalMove(e,x,y,dt,arrival);return e.order?.formation?.traveling?Math.max(8,distance):distance;};
 function init(){state.siegeBridges=[];for(let ri=0;ri<(state.rivers||[]).length;ri++){const r=state.rivers[ri];for(const y of r.bridges)state.siegeBridges.push({id:'bridge-'+ri+'-'+Math.round(y),river:ri,x:riverCenter(r,y),y,hp:900,max:900});}for(let i=0;i<state.players.length;i++)state.players[i].personality??=['balanced','raider','fortifier'][i%3];}
 function deploy(e){if(e.type!=='siege'||e.hp<=0)return false;e.deployed=!e.deployed;e.order={kind:'hold'};e.tasks=[];e.route=null;e.manualPassive=false;e.deployReady=state.time+1.5;return true;}
 function bridgeOrder(e,id,repair=false){const b=state.siegeBridges?.find(b=>b.id===id);if(!b||(repair?e.type!=='worker':e.type!=='siege'))return false;e.order={kind:repair?'repairBridge':'bombardBridge',bridgeId:id};e.tasks=[];e.route=null;e.manualPassive=false;return true;}
 function changedBridge(b,open){const r=state.rivers[b.river];r.bridges=r.bridges.filter(y=>y!==b.y);if(open)r.bridges.push(b.y);r.bridges.sort((a,b)=>a-b);state.wallVersion++;state.blockCache={};if(!open)for(const e of state.entities){if(e.building||isFlying(e)||Math.abs(e.y-b.y)>58||Math.abs(e.x-b.x)>r.width/2+e.size)continue;const sign=e.x<b.x?-1:1;for(let n=0;n<5;n++){const x=b.x+sign*(r.width/2+e.size+20+n*20);if(!blockedGroundPoint(x,e.y,e.size)){e.x=x;e.route=null;break;}}}clearTerrainCache();window.KawBattlefield?.stop();}
 // Follow one shared trail through narrow ground corridors, then recover slots.
 // Corridor probes are cached per squad, not repeated for every follower each frame.
 function followFormation(e,o,f,living,groups){
  const leader=living.get(f.leaderId),members=groups.get(e.owner+':'+f.leaderId+':'+f.key)||[];
  if(!leader||leader.owner!==e.owner||leader.order?.formation?.key!==f.key){f.traveling=false;o.x=f.finalX;o.y=f.finalY;return;}
  const lf=leader.order.formation,heading=Math.atan2(lf.finalY-leader.y,lf.finalX-leader.x);
  if(e===leader){
   leader.breadcrumbs??=[];
   if(!leader.breadcrumbs.length||Math.hypot(e.x-leader.breadcrumbs[0].x,e.y-leader.breadcrumbs[0].y)>16){leader.breadcrumbs.unshift({x:e.x,y:e.y});leader.breadcrumbs.length=Math.min(512,leader.breadcrumbs.length);}
   if(state.time>=(lf.probeAt||0)){
    lf.probeAt=state.time+.35;const width=Math.min(180,Math.max(28,...members.filter(u=>!isFlying(u)).map(u=>Math.abs(-Math.sin(heading)*u.order.formation.dx+Math.cos(heading)*u.order.formation.dy)+u.size)));
    for(const side of [-1,1])if(!clearWallLine(leader,leader.x+Math.cos(heading)*70-Math.sin(heading)*width*side,leader.y+Math.sin(heading)*70+Math.cos(heading)*width*side)){lf.narrowUntil=state.time+1.4;break;}
    lf.pace=members.some(u=>u!==leader&&Math.hypot(u.x-leader.x,u.y-leader.y)>260)?.8:1;
   }
   f.traveling=false;o.x=f.finalX;o.y=f.finalY;return;
  }
  const moving=['move','attackMove'].includes(leader.order.kind)&&Math.hypot(leader.x-lf.finalX,leader.y-lf.finalY)>40;
  f.traveling=moving;if(!moving){o.x=f.finalX;o.y=f.finalY;return;}
  const desired={x:leader.x+f.dx,y:leader.y+f.dy};
  if(isFlying(e)||!(lf.narrowUntil>state.time)&&clearWallLine(e,desired.x,desired.y)){o.x=desired.x;o.y=desired.y;f.column=false;return;}
  const rank=members.rank.get(e.id)||1;
  const spacing=Math.max(28,e.size+leader.size+12),needed=rank*spacing,trail=leader.breadcrumbs||[];let length=0,goal=trail.at(-1);
  for(let i=1;i<trail.length;i++){const a=trail[i-1],b=trail[i],d=Math.hypot(a.x-b.x,a.y-b.y);if(length+d>=needed){const t=(needed-length)/(d||1);goal={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};length=needed;break;}length+=d;}
  // Let the front leave the bottleneck before feeding the next troop into it.
  if(goal&&length>=needed-2){o.x=goal.x;o.y=goal.y;}else{o.x=e.x;o.y=e.y;}
  f.column=true;
 }
 const formationSpeed=effectiveSpeed;effectiveSpeed=function(e){const f=e.order?.formation,base=formationSpeed(e);return f&&!isFlying(e)&&f.groupSpeed&&['move','attackMove'].includes(e.order.kind)?Math.min(base,f.groupSpeed)*(f.leaderId===e.id?f.pace||1:1):base;};
 function tick(dt){
  const living=new Map(state.entities.filter(e=>e.hp>0).map(e=>[e.id,e])),groups=new Map();
  for(const e of living.values()){const f=e.order?.formation;if(f){const key=e.owner+':'+f.leaderId+':'+f.key;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(e);}}
  for(const members of groups.values()){const ground=members.filter(e=>!isFlying(e)),speed=ground.length?Math.min(...ground.map(formationSpeed)):0;for(const e of members)e.order.formation.groupSpeed=speed;const leader=members[0]?.order?.formation?.leaderId;members.rank=new Map(members.filter(e=>e.id!==leader&&!isFlying(e)).sort((a,b)=>a.id-b.id).map((e,i)=>[e.id,i+1]));}
  for(const e of state.entities){if(e.hp<=0||e.building)continue;const o=e.order,f=o?.formation;if(f) followFormation(e,o,f,living,groups);
   if(!o||!['repairBridge','bombardBridge'].includes(o.kind))continue;const b=state.siegeBridges?.find(b=>b.id===o.bridgeId);if(!b||o.kind==='bombardBridge'&&b.hp<=0||o.kind==='repairBridge'&&b.hp>=b.max){finishTask(e);continue;}const r=state.rivers[b.river],distance=Math.hypot(e.x-b.x,e.y-b.y),range=o.kind==='repairBridge'?r.width/2+45:units.siege.range*(e.deployed?1.25:1);if(distance>range){const sign=e.x<b.x?-1:1;move(e,b.x+sign*(r.width/2+35),b.y,dt);continue;}if(o.kind==='repairBridge'){b.hp=Math.min(b.max,b.hp+25*dt);e.action={kind:'repair',until:state.time+.4,duration:.4};if(b.hp===b.max)changedBridge(b,true);}else if(e.cool<=0&&(!e.deployReady||e.deployReady<=state.time)){b.hp=Math.max(0,b.hp-units.siege.damage*(e.deployed?1.35:1));e.cool=2.4;e.facing=Math.atan2(b.y-e.y,b.x-e.x);e.action={kind:'attack',until:state.time+.55,duration:.55};e.shot={rock:true,x:b.x,y:b.y,fromX:e.x,fromY:e.y,fromHeight:18,toHeight:0,left:.65,duration:.65};burst(b.x,b.y,'blast',e.owner,.65);if(!b.hp){changedBridge(b,false);finishTask(e);}}}
 }
 function personalityAI(schedule=false){for(let owner=0;owner<state.players.length;owner++){const p=state.players[owner];if(p.ai===false||owner===0&&p.ai!==true)continue;if(schedule&&p.personalityAt===p.nextAI)continue;p.personalityAt=p.nextAI;const base=state.entities.find(e=>e.owner===owner&&e.type==='base'&&e.hp>0),army=state.entities.filter(e=>e.owner===owner&&!e.building&&e.type!=='worker'&&!e.convoy&&e.hp>0);if(!base)continue;if(p.personality==='fortifier'&&!(['hard','extreme'].includes(p.difficulty||state.difficulty)&&p.attackWave?.phase==='advance')){for(const e of army.filter(e=>!e.aiEngaged&&e.hp/e.max>.5).slice(0,5))if(!e.order||e.order.kind==='attackMove'&&Math.hypot(e.order.x-base.x,e.order.y-base.y)>650)queueTask(e,{kind:'attackMove',x:base.x+(e.id%3-1)*80,y:base.y+190});const worker=state.entities.find(e=>e.owner===owner&&e.type==='worker'&&!['build','repair'].includes(e.order?.kind));if(worker&&!state.entities.some(e=>e.owner===owner&&e.construction)&&state.entities.filter(e=>e.owner===owner&&e.type==='tower').length<3&&p.gold>500&&p.wood>350){const angle=(state.time%3)*2.1;build('tower',base.x+Math.cos(angle)*230,base.y+Math.sin(angle)*230,owner);}}
 if(p.personality==='raider'){const scouts=army.filter(e=>['scout','ranged','air'].includes(e.type)&&!e.aiEngaged).slice(0,3),observed=state.entities.filter(e=>!sameTeam(e.owner,owner)&&e.hp>0&&state.entities.some(a=>a.owner===owner&&a.hp>0&&Math.hypot(a.x-e.x,a.y-e.y)<visionRadius(a))&&(e.type==='worker'||e.type==='depot'));for(const e of scouts){const target=observed.slice().sort((a,b)=>Math.hypot(e.x-a.x,e.y-a.y)-Math.hypot(e.x-b.x,e.y-b.y))[0];if(target)queueTask(e,{kind:'attack',target});}}
 }}
 const oldAI=ai;ai=function(schedule=false){oldAI(schedule);personalityAI(schedule);};
 function drawConvoy(c,e,p){c.save();c.rotate((e.facing||0)*.12);const wood=c.createLinearGradient(-18,-26,18,4);wood.addColorStop(0,'#bd9863');wood.addColorStop(1,'#4a3323');c.fillStyle=wood;c.fillRect(-19,-24,38,20);c.strokeStyle='#ddbe82';c.lineWidth=1;for(let i=0;i<5;i++){c.beginPath();c.moveTo(-18,-22+i*4);c.lineTo(18,-22+i*4);c.stroke();}for(const x of [-16,16]){c.fillStyle='#483124';c.beginPath();c.ellipse(x,1,7,9,0,0,7);c.fill();c.strokeStyle='#b3a17b';c.stroke();for(let i=0;i<6;i++){const a=i*Math.PI/3+state.time*(e.walkUntil>state.time?3:0);c.beginPath();c.moveTo(x,1);c.lineTo(x+Math.cos(a)*6,1+Math.sin(a)*8);c.stroke();}}c.fillStyle=p.color;c.fillRect(-11,-37,23,13);c.strokeStyle='#e9d5ad';c.strokeRect(-11,-37,23,13);c.restore();}
 function draw(c){for(const e of state.entities)if(e.impactAt!==undefined&&state.time>=e.impactAt&&state.time<e.impactAt+.15&&(e.owner===0||visible(e.x,e.y))){const f=(state.time-e.impactAt)/.15;c.save();c.globalAlpha=1-f;c.strokeStyle='#fff2be';c.lineWidth=2;c.beginPath();c.arc(e.x,e.y-renderAltitude(e)-15,3+f*12,0,7);c.stroke();c.restore();}for(const b of state.siegeBridges||[])if(visible(b.x,b.y)){c.save();c.translate(b.x,b.y);c.font='11px sans-serif';c.textAlign='center';c.fillStyle=b.hp>0?'#ece2bb':'#e88372';c.fillText(b.hp>0?'Bridge '+Math.ceil(b.hp)+'/900':'Broken bridge · repairable',0,-16);if(!b.hp){c.strokeStyle='#685441';c.lineWidth=6;c.beginPath();c.moveTo(-28,-7);c.lineTo(-8,9);c.moveTo(8,-9);c.lineTo(28,7);c.stroke();}c.restore();}}
 globalThis.KawWarfront={init,tick,group,deploy,bridgeOrder,draw,drawConvoy};
})();

/* Original faction specialists. Shared authoritative rules, with bounded effects. */
(() => {
 const roster={siegeMarshal:['human','Siege Marshal','forge',2],stormLancer:['human','Storm Lancer','barracks',3],chainbreaker:['horde','Chainbreaker','barracks',2],ashShaman:['horde','Ash Shaman','altar',2],rootColossus:['covenant','Root Colossus','barracks',3],bloomWeaver:['covenant','Bloom Weaver','altar',2]};
 const definitions={siegeMarshal:{gold:180,wood:120,hp:300,damage:14,range:30,speed:65,time:18},stormLancer:{gold:210,wood:100,hp:280,damage:26,range:30,speed:120,time:18},chainbreaker:{gold:160,wood:90,hp:300,damage:24,range:30,speed:80,time:16},ashShaman:{gold:170,wood:120,hp:190,damage:17,range:170,speed:80,time:18},rootColossus:{gold:260,wood:180,hp:520,damage:36,range:190,speed:55,time:24},bloomWeaver:{gold:160,wood:130,hp:170,damage:12,range:150,speed:85,time:18},bloomPod:{gold:0,wood:0,hp:60,damage:0,range:0,speed:0,time:0}};
 for(const [type,d]of Object.entries(definitions))units[type]={...d,time:d.time*PRODUCTION_TIME_SCALE};
 for(const [type,[race,name]]of Object.entries(roster))names[race][type]=name;
 names.covenant.bloomPod='Living Bloom';
 const options=troopOptions;troopOptions=function(building,race){return [...options(building,race),...Object.entries(roster).filter(([,r])=>r[0]===race&&r[2]===building).map(([type])=>type)];};
 const requirement=unitStrongholdRequirement;unitStrongholdRequirement=function(type,owner=0){return roster[type]?.[3]??requirement(type,owner);};
 const appearance=unitAppearance;unitAppearance=function(type,race,owner=0){return definitions[type]?'specialist-'+type:appearance(type,race,owner);};
 const scale=unitVisualScale;unitVisualScale=function(e){return scale(e)*(isBannerBearer(e)?1.5:e.type==='rootColossus'?2.15:e.type==='stormLancer'?1.45:e.type==='bloomPod'?.7:roster[e.type]?1.15:1);};
 const cost=supplyCost;supplyCost=function(type){return type==='bloomPod'?0:cost(type);};
 const used=supplyUsed;supplyUsed=function(owner,reservations=true){return used(owner,reservations)+(state.phoenixAshes||[]).filter(a=>a.owner===owner&&!a.trampled).length;};
 Object.assign(unitAbilities,{
  siegeMarshal:{name:'Deploy Aegis',description:'Protect artillery within 140 from ranged attacks by 35% for 8s · 20s cooldown',cooldown:20},
  stormLancer:{name:'Storm Charge',description:'Charge an enemy 70–330 away along clear ground · 65 impact damage and 1s interruption · 18s cooldown',cooldown:18},
  chainbreaker:{name:'Hooked Chain',description:'Pull a visible ground fighter within 230 along clear ground · 25 damage · 16s cooldown',cooldown:16},
  ashShaman:{name:'Ash Veil',description:'Smoke protects nearby allies from ranged fire for 6s · Blood Pact costs 40 health for +15% allied damage for 8s · shared 20s cooldown',cooldown:20},
  rootColossus:{name:'Root Down / Uproot',description:'Root in place: +20% root damage and longer root snare; takes +20% artillery damage · Move uproots',cooldown:1},
  bloomWeaver:{name:'Plant Healing Bloom',description:'Destructible bloom heals 6 health/s within 110 for 25s; poison pods activate on ground enemies · shared 12s cooldown',cooldown:12}
 });
 // Plants and rebirth are not purchases; leave production telemetry unchanged.
 function spawnEffectUnit(type,owner,x,y){const tracking=state.telemetryActive;state.telemetryActive=false;try{return entity(type,owner,x,y);}finally{state.telemetryActive=tracking;}}
 const ability=unitAbility;unitAbility=function(e,aiControlled=false,mode){
  if(!roster[e.type])return ability(e,aiControlled);
  if(!state||paused||state.count>0||state.ended||e.hp<=0||e.building||e.owner!==0&&!aiControlled||(e.unitAbilityReady||0)>state.time)return false;
  const type=e.type,def=unitAbilities[type];if(aiControlled&&type==='rootColossus'&&e.rooted)return false;if(aiControlled&&!mode&&type==='bloomWeaver'&&nearbyEnemies(e,150).length)mode='poison';if(aiControlled&&!mode&&type==='ashShaman'&&e.hp>e.max*.65&&state.entities.filter(t=>sameTeam(t.owner,e.owner)&&!t.building&&t.hp>0&&Math.hypot(t.x-e.x,t.y-e.y)<=140).length>=4)mode='pact';
  if(mode!==undefined&&!((type==='ashShaman'&&mode==='pact')||(type==='bloomWeaver'&&mode==='poison')))return false;
  if(type==='stormLancer'){
   const target=nearbyEnemies(e,330).find(t=>!t.building&&!isFlying(t)&&Math.hypot(t.x-e.x,t.y-e.y)>70);
   if(!target)return false;const d=Math.hypot(target.x-e.x,target.y-e.y),x=target.x+(e.x-target.x)/d*(target.size+e.size+5),y=target.y+(e.y-target.y)/d*(target.size+e.size+5);
   if(!clearWallLine(e,x,y))return false;queueTask(e,{kind:'attack',target});e.charge={target,until:state.time+2.5};
  }else if(type==='chainbreaker'){
   const target=nearbyEnemies(e,230).find(t=>!t.building&&!isFlying(t)&&t.type!=='bloomPod');if(!target)return false;
   const d=Math.hypot(target.x-e.x,target.y-e.y)||1,point={x:e.x+(target.x-e.x)/d*(e.size+target.size+16),y:e.y+(target.y-e.y)/d*(e.size+target.size+16)};
   if(!clearWallLine(target,point.x,point.y))return false;dealAbilityDamage(e,target,25);target.chainPull={x:point.x,y:point.y,until:state.time+1,sourceId:e.id};e.chainCast={targetId:target.id,until:state.time+1};
  }else if(type==='siegeMarshal'){queueTask(e,{kind:'hold'});e.aegisUntil=state.time+8;
  }else if(type==='ashShaman'){
   if(mode==='pact'){if(e.hp<=40)return false;e.hp-=40;for(const t of state.entities)if(sameTeam(t.owner,e.owner)&&!t.building&&t.hp>0&&Math.hypot(t.x-e.x,t.y-e.y)<=140)t.bloodPactUntil=state.time+8;burst(e.x,e.y,'magic',e.owner,.5);}else createSmoke(e,110,6);
  }else if(type==='rootColossus'){e.rooted=!e.rooted;if(e.rooted)queueTask(e,{kind:'hold'});
  }else if(type==='bloomWeaver'){
   if(state.entities.filter(t=>t.owner===e.owner&&t.type==='bloomPod'&&t.hp>0).length>=6)return false;
   const x=e.x+Math.cos(e.facing||0)*48,y=e.y+Math.sin(e.facing||0)*48;if(x<12||y<12||x>SIZE-12||y>SIZE-12||blockedGroundPoint(x,y,9)||state.entities.some(t=>t.hp>0&&!isFlying(t)&&Math.hypot(t.x-x,t.y-y)<t.size+13))return false;
   const bloom=spawnEffectUnit('bloomPod',e.owner,x,y);bloom.bloomMode=mode==='poison'?'poison':'heal';bloom.maturesAt=state.time+1.5;bloom.expires=state.time+25;bloom.order={kind:'hold'};bloom.manualPassive=true;
  }
  e.unitAbilityReady=state.time+def.cooldown;e.action={kind:'attack',duration:.6,until:state.time+.6};return true;
 };
 const protection=rangedProtection;rangedProtection=function(target,attacker){let result=protection(target,attacker);if(target.type==='siege'&&(units[attacker.type]?.range||buildings[attacker.type]?.range||0)>=100&&state.entities.some(e=>sameTeam(e.owner,target.owner)&&e.type==='siegeMarshal'&&e.hp>0&&e.aegisUntil>state.time&&Math.hypot(e.x-target.x,e.y-target.y)<=140))result*=.65;return result;};
 const speed=effectiveSpeed;effectiveSpeed=function(e){return e.rooted&&e.type==='rootColossus'?0:speed(e);};
 const queue=queueTask;queueTask=function(e,o,append=false){if(e.type==='bloomPod')return;if(!append&&['move','attackMove'].includes(o.kind)){e.rooted=false;e.aegisUntil=null;}return queue(e,o,append);};
 const aura=battleAuraMultiplier;battleAuraMultiplier=function(e){return aura(e)*(e.bloodPactUntil>state.time?1.15:1);};
 const oldSupport=supportTick;supportTick=function(e,dt){
  if(['move','attackMove'].includes(e.order?.kind)){e.rooted=false;if(e.type==='siegeMarshal')e.aegisUntil=null;}
  if(e.chainPull){const pull=e.chainPull;if(pull.until<=state.time||Math.hypot(e.x-pull.x,e.y-pull.y)<4){e.chainPull=null;e.stunUntil=state.time+.5;}else{const d=Math.hypot(pull.x-e.x,pull.y-e.y),step=Math.min(240*dt,d),x=e.x+(pull.x-e.x)/d*step,y=e.y+(pull.y-e.y)/d*step;if(clearWallLine(e,x,y)){e.x=x;e.y=y;e.walkUntil=state.time+.1;}else e.chainPull=null;return true;}}
  if(e.type==='bloomPod'){
   if(e.expires<=state.time){e.hp=0;e.deathResolved=true;return true;}if(e.maturesAt>state.time)return true;
   if(e.bloomMode==='poison'){const foe=nearbyEnemies(e,50).find(t=>!t.building&&!isFlying(t));if(foe){for(const t of nearbyEnemies(e,75).filter(t=>!t.building&&!isFlying(t)))t.burn={left:4,owner:e.owner,poison:true};e.hp=0;e.deathResolved=true;burst(e.x,e.y,'magic',e.owner,.5);}}
   else for(const ally of state.entities)if(sameTeam(ally.owner,e.owner)&&!ally.building&&ally.hp>0&&Math.hypot(ally.x-e.x,ally.y-e.y)<=110)ally.hp=Math.min(ally.max,ally.hp+6*dt);
   return true;
  }
  if(e.type==='rootColossus'&&e.order?.kind==='attack'&&isFlying(e.order.target))return true;
  if(e.type==='rootColossus'&&!(e.stunUntil>state.time)&&!e.manualPassive&&!['stop','move'].includes(e.order?.kind)){
   const target=e.order?.kind==='attack'?e.order.target:nearbyEnemies(e,e.rooted?190:250).find(t=>!isFlying(t));
   if(target?.hp>0&&!isFlying(target)&&!target.hiddenInMine&&globalThis.KawNature?.canTarget(e,target)!==false&&Math.hypot(e.x-target.x,e.y-target.y)<=units[e.type].range+target.size){
    if(e.cool<=0){state.rootBursts??=[];const duration=Math.max(.35,Math.min(.9,Math.hypot(e.x-target.x,e.y-target.y)/300));state.rootBursts.push({owner:e.owner,sourceId:e.id,targetId:target.id,fromX:e.x,fromY:e.y,x:target.x,y:target.y,at:state.time,impactAt:state.time+duration,damage:36*(e.rooted?1.2:1)*battleAuraMultiplier(e)*(1+bannerAura(e,'bannerDamage')),snare:e.rooted?2:1});if(state.rootBursts.length>64)state.rootBursts.shift();e.cool=1.6;e.facing=Math.atan2(target.y-e.y,target.x-e.x);e.action={kind:'attack',duration:.6,until:state.time+.6};}return true;
   }if(e.rooted)return true;
  }return oldSupport(e,dt);
 };
 const readStats=characterStats;characterStats=function(e){const rows=readStats(e);if(e.type==='rootColossus'){const interval=rows.find(r=>r[0]==='Attack interval');if(interval)interval[1]='1.6s';const damage=rows.find(r=>r[0]==='Damage');if(damage)damage[1]=(Number(damage[1])*(e.rooted?1.2:1)).toFixed(1);rows.push(['Root stance',e.rooted?'Rooted · +20% damage':'Walking'],['Root attack','Ground targets · 1.6s interval']);}if(e.type==='air2'&&state.players[e.owner].faction==='human')rows.push(['Rebirth','2s ashes · returns at 50% health · ground enemies can trample']);return rows;};
 const acquire=nearestCombatTarget;nearestCombatTarget=function(e,range=null){if(e.type!=='rootColossus')return acquire(e,range);return nearbyEnemies(e,range??250).filter(t=>!isFlying(t)).sort((a,b)=>Math.hypot(a.x-e.x,a.y-e.y)-Math.hypot(b.x-e.x,b.y-e.y))[0]||null;};
 const deaths=resolveCombatDeaths;resolveCombatDeaths=function(){
  state.phoenixAshes??=[];
  for(const e of state.entities)if(e.hp<=0&&!e.deathResolved&&e.type==='air2'&&state.players[e.owner].faction==='human'){burst(e.x,e.y,'smoke',e.owner);state.phoenixAshes.push({id:e.id,owner:e.owner,x:e.x,y:e.y,at:state.time,reviveAt:state.time+2,facing:e.facing});}
  deaths();state.ruins=(state.ruins||[]).filter(r=>!(r.type==='air2'&&state.players[r.owner].faction==='human'));
 };
 function tickSpecialists(dt){
  state.phoenixAshes??=[];state.rootBursts??=[];
  for(const ash of state.phoenixAshes){if(state.entities.some(t=>t.hp>0&&!t.building&&!isFlying(t)&&!t.hiddenInMine&&!sameTeam(t.owner,ash.owner)&&Math.hypot(t.x-ash.x,t.y-ash.y)<=22+t.size)){ash.trampled=true;burst(ash.x,ash.y,'dust',ash.owner,.4);}else if(state.time>=ash.reviveAt){const phoenix=spawnEffectUnit('air2',ash.owner,ash.x,ash.y);phoenix.hp=phoenix.max*.5;phoenix.facing=ash.facing;phoenix.order={kind:'hold'};phoenix.rebornAt=state.time;ash.trampled=true;burst(ash.x,ash.y,'blast',ash.owner,.7);}}
  state.phoenixAshes=state.phoenixAshes.filter(a=>!a.trampled);
  for(const root of state.rootBursts){if(!root.hit&&state.time>=root.impactAt){root.hit=true;const target=state.entities.find(t=>t.id===root.targetId&&t.hp>0&&!isFlying(t)&&!t.hiddenInMine&&Math.hypot(t.x-root.x,t.y-root.y)<targetRadius(t));if(target){dealAbilityDamage({owner:root.owner},target,root.damage);target.lastDamageType='rootColossus';if(!target.building)target.webSlowUntil=state.time+root.snare;}burst(root.x,root.y,'wood',root.owner,.4);}}
  state.rootBursts=state.rootBursts.filter(r=>state.time-r.impactAt<.65);
 }
 function targetRadius(t){return 60+t.size;}
 const oldTick=KawWarfront.tick;KawWarfront.tick=function(dt){oldTick(dt);tickSpecialists(dt);};
 // AI can finish a rebirth by approaching visible ashes, without hidden-map knowledge.
 const oldAI=ai;ai=function(schedule=false){oldAI(schedule);for(let owner=0;owner<state.players.length;owner++){const p=state.players[owner];if(!p.ai||(p.ashHuntAt||0)>state.time)continue;p.ashHuntAt=state.time+1;const ash=(state.phoenixAshes||[]).find(a=>!sameTeam(a.owner,owner)&&canSee(owner,a.x,a.y));if(!ash)continue;const fighter=state.entities.filter(e=>e.owner===owner&&e.hp>0&&!e.building&&!isFlying(e)&&e.type!=='worker'&&units[e.type].damage>0&&Math.hypot(e.x-ash.x,e.y-ash.y)<450).sort((a,b)=>Math.hypot(a.x-ash.x,a.y-ash.y)-Math.hypot(b.x-ash.x,b.y-ash.y))[0];if(fighter)queueTask(fighter,{kind:'move',x:ash.x,y:ash.y});}};
 const draw=KawWarfront.draw;KawWarfront.draw=function(c){draw(c);if(window.KawBattlefield?.active)return;c.save();
  for(const e of state.entities)if(e.chainCast?.until>state.time&&visible(e.x,e.y)){const target=state.entities.find(t=>t.id===e.chainCast.targetId);if(!target||!visible(target.x,target.y))continue;const dx=target.x-e.x,dy=target.y-e.y,count=Math.min(48,Math.max(4,Math.ceil(Math.hypot(dx,dy)/5))),angle=Math.atan2(dy,dx);for(let i=0;i<count;i++){const t=i/(count-1),x=e.x+dx*t,y=e.y+dy*t-18+Math.sin(t*Math.PI)*Math.max(0,e.chainCast.until-state.time)*6;c.save();c.translate(x,y);c.rotate(angle);c.strokeStyle=i%2?'#9ea6a3':'#3b4241';c.lineWidth=1.5;c.beginPath();c.ellipse(0,0,3,i%2?1.1:2,0,0,Math.PI*2);c.stroke();c.restore();}}
  for(const ash of state.phoenixAshes||[])if(ash.owner===0||visible(ash.x,ash.y)){const y=ash.y-terrainHeight(ash.x,ash.y);c.fillStyle='#393c3b';c.beginPath();c.ellipse(ash.x,y,22,9,0,0,7);c.fill();c.fillStyle='#f69c46';for(let i=0;i<7;i++)c.fillRect(ash.x+Math.cos(i*2.4)*16,y+Math.sin(i*2.4)*6,2,2);c.font='10px sans-serif';c.fillText('Revive '+Math.max(0,ash.reviveAt-state.time).toFixed(1)+'s',ash.x,y-15);}
  for(const r of state.rootBursts||[])if(visible(r.x,r.y)||visible(r.fromX,r.fromY)){const progress=Math.min(1,(state.time-r.at)/(r.impactAt-r.at));c.strokeStyle='#705232';c.lineWidth=4;c.beginPath();c.moveTo(r.fromX,r.fromY);for(let i=1;i<=12*progress;i++){const t=i/12;c.lineTo(r.fromX+(r.x-r.fromX)*t+Math.sin(i*2.1)*4,r.fromY+(r.y-r.fromY)*t-terrainHeight(r.fromX+(r.x-r.fromX)*t,r.fromY+(r.y-r.fromY)*t));}c.stroke();if(progress>=1){const h=30*Math.sin(Math.min(1,(state.time-r.impactAt)/.65)*Math.PI);for(let i=-2;i<=2;i++){c.beginPath();c.moveTo(r.x+i*7-4,r.y);c.lineTo(r.x+i*7,r.y-h);c.lineTo(r.x+i*7+4,r.y);c.fillStyle='#7c6438';c.fill();}}}
  c.restore();};
 globalThis.KawSpecialists={roster,tick:tickSpecialists};
})();

/* Verdant renewal, visibility counters and deliberate ground bombardment. */
(() => {
 defaultKeys['research:skitterSmoke']='U';names.covenant.hero2='Tideborn Elemental';delete names.covenant.hero3;
 const options=troopOptions;troopOptions=function(building,race){return options(building,race).filter(t=>race!=='covenant'||t!=='hero3');};
 const art=unitAppearance;unitAppearance=function(type,race,owner=0){if(race==='covenant'){if(type==='hero2')return 'specialist-waterElemental';if(type==='melee')return 'specialist-ancientTreant';if(type==='sniper')return 'specialist-fireHydra';}return art(type,race,owner);};
 function isWater(e){return e.type==='hero2'&&state.players[e.owner].faction==='covenant';}
 const name=heroAbilityName,description=heroAbilityDescription,aura=heroAuraText;
 heroAbilityName=e=>isWater(e)?'Tidal Wave':name(e);
 heroAbilityDescription=e=>isWater(e)?'Forward wave: heals allies 70, damages enemies 90 · 360 reach · 150 width · 24s cooldown':description(e);
 heroAuraText=e=>isWater(e)?'Restorative mist: friendly troops within 190 recover 1 health/s.':aura(e);
 const heroPower=heroAbility;heroAbility=function(e,aiControlled=false){if(!isWater(e))return heroPower(e,aiControlled);if(paused||state.count>0||state.ended||e.hp<=0||e.owner!==0&&!aiControlled||e.abilityReady>state.time)return false;state.tidalWaves??=[];state.tidalWaves.push({owner:e.owner,sourceId:e.id,x:e.x,y:e.y,angle:e.facing||0,at:state.time,duration:1.4,hitIds:[]});if(state.tidalWaves.length>24)state.tidalWaves.shift();e.abilityReady=state.time+24;e.action={kind:'attack',duration:.8,until:state.time+.8};return true;};
 const definition=abilityDefinition;abilityDefinition=function(e){const race=state.players[e.owner].faction;if(e.type==='medic')return {name:'Dawn of Light',description:'Dispel smoke, stealth and sight-reducing effects within 180 · allies gain clear sight for 6s · 25s cooldown',cooldown:25};if(e.type==='siege'&&race==='horde')return {name:'Bombard',description:'Choose ground to shell every 2.4s · hits all units and buildings within 70, including concealed targets · Stop cancels',cooldown:0,targeted:true};if(e.type==='air3'&&race==='covenant'&&state.players[e.owner].skitterSmoke)return {name:'Smoke Shroud',description:'Hide friendly units from ranged targeting within 130 for 6s · 24s cooldown · Dawn of Light dispels',cooldown:24};return definition(e);};
 function canTarget(attacker,target){if(target.building)return true;if(sameTeam(attacker.owner,target.owner)||target.revealedUntil>state.time||attacker.clearSightUntil>state.time)return true;const range=attacker.type==='base'&&attacker.level>=3?300:units[attacker.type]?.range??buildings[attacker.type]?.range??0;if(range<100)return true;if(target.stealthUntil>state.time||target.invisibleUntil>state.time)return false;return !(state.smoke||[]).some(s=>s.shroud&&s.expires>state.time&&sameTeam(s.owner,target.owner)&&Math.hypot(s.x-target.x,s.y-target.y)<=s.radius);}
 const power=unitAbility;unitAbility=function(e,aiControlled=false,mode){const race=state.players[e.owner].faction;if(e.type!=='medic'&&!(e.type==='siege'&&race==='horde')&&!(e.type==='air3'&&race==='covenant'&&state.players[e.owner].skitterSmoke))return power(e,aiControlled,mode);
  if(paused||state.count>0||state.ended||e.hp<=0||e.owner!==0&&!aiControlled||e.unitAbilityReady>state.time)return false;
  if(e.type==='siege'){
   if(aiControlled&&!mode){const foe=nearbyEnemies(e,400)[0];if(foe)mode={x:foe.x,y:foe.y};}
   if(!mode||!Number.isFinite(mode.x)||!Number.isFinite(mode.y)||mode.x<10||mode.y<10||mode.x>SIZE-10||mode.y>SIZE-10||!canSee(e.owner,mode.x,mode.y))return false;
   queueTask(e,{kind:'bombardGround',x:mode.x,y:mode.y});return true;
  }
  if(mode!==undefined)return false;
  if(e.type==='medic'){
   state.smoke=(state.smoke||[]).filter(s=>Math.hypot(s.x-e.x,s.y-e.y)>180+s.radius);
   for(const t of state.entities)if(t.hp>0&&Math.hypot(t.x-e.x,t.y-e.y)<=180){t.stealthUntil=t.invisibleUntil=t.blindUntil=t.rangeReducedUntil=0;t.revealedUntil=state.time+6;if(sameTeam(t.owner,e.owner))t.clearSightUntil=state.time+6;}
   burst(e.x,e.y,'magic',e.owner,.3);
  }else{state.smoke??=[];state.smoke.push({x:e.x,y:e.y,owner:e.owner,radius:130,expires:state.time+6,shroud:true});burst(e.x,e.y,'smoke',e.owner,.5);}
  e.unitAbilityReady=state.time+abilityDefinition(e).cooldown;e.action={kind:'attack',duration:.7,until:state.time+.7};return true;
 };
 const issue=issueCommand;issueCommand=function(p,append=false,allowMove=true){if(commandMode!=='bombardGround')return issue(p,append,allowMove);if(!state||paused||state.count>0||state.ended)return;for(const e of selected.filter(e=>e.owner===0&&e.type==='siege'&&state.players[e.owner].faction==='horde'))unitAbility(e,false,{x:p.x,y:p.y});commandMode=null;orderMarker={...p,left:1};updateUI();};
 const support=supportTick;supportTick=function(e,dt){
  if(e.type==='melee'&&state.players[e.owner].faction==='covenant'&&(e.action?.kind==='attack'||e.order?.kind==='attack'||nearbyEnemies(e,80).length))e.combatGlowUntil=state.time+1;
  const o=e.order;if(o?.kind==='bombardGround'){
   if(e.stunUntil>state.time)return true;const distance=Math.hypot(o.x-e.x,o.y-e.y);
   if(distance>units.siege.range){const d=distance||1,point=openMovePoint(e,{x:o.x+(e.x-o.x)/d*(units.siege.range-25),y:o.y+(e.y-o.y)/d*(units.siege.range-25)});move(e,point.x,point.y,dt);return true;}
   if(e.cool<=0){state.groundBombards??=[];state.groundBombards.push({owner:e.owner,x:o.x,y:o.y,fromX:e.x,fromY:e.y,at:state.time+.65,damage:units.siege.damage*(1+(state.players[e.owner].artillery||0)*.2)});if(state.groundBombards.length>48)state.groundBombards.shift();e.facing=Math.atan2(o.y-e.y,o.x-e.x);e.cool=2.4;e.action={kind:'attack',duration:.55,until:state.time+.55};e.shot={rock:true,x:o.x,y:o.y,fromX:e.x,fromY:e.y,fromHeight:18,toHeight:terrainHeight(o.x,o.y),left:.65,duration:.65};}return true;
  }
  return support(e,dt);
 };
 function update(dt){
  for(const p of state.players)if(p.faction==='covenant'&&!p.verdantRenewal){p.verdantRenewal=true;if(p.heroChoice==='hero3')p.heroChoice='hero2';for(const e of state.entities.filter(e=>e.owner===state.players.indexOf(p))){if(e.type==='hero3')e.type='hero2';for(const q of e.queue||[])if(q.type==='hero3')q.type='hero2';}}
  state.tidalWaves??=[];
  for(const w of state.tidalWaves){const age=state.time-w.at,front=Math.min(360,Math.max(0,age/w.duration*360)),previous=Math.max(0,front-dt/w.duration*360-25),dx=Math.cos(w.angle),dy=Math.sin(w.angle);
   for(const t of state.entities){if(t.hp<=0||t.building||t.hiddenInMine||w.hitIds.includes(t.id))continue;const x=t.x-w.x,y=t.y-w.y,along=x*dx+y*dy,across=Math.abs(-x*dy+y*dx);if(along<previous||along>front+25||across>75+t.size)continue;w.hitIds.push(t.id);if(sameTeam(t.owner,w.owner)){t.hp=Math.min(t.max,t.hp+70);burst(t.x,t.y,'magic',w.owner,.2);}else{dealAbilityDamage({owner:w.owner},t,90);t.lastDamageType='hero2';} }
  }
  state.tidalWaves=state.tidalWaves.filter(w=>state.time-w.at<w.duration+.3);
  state.groundBombards??=[];for(const shell of state.groundBombards)if(shell.at<=state.time){for(const t of state.entities)if(t.hp>0&&Math.hypot(t.x-shell.x,t.y-shell.y)<=70+t.size){const friendly=sameTeam(t.owner,shell.owner);t.lastDamageOwner=friendly?null:shell.owner;t.lastDamageType='siege';t.hp-=shell.damage*armorMultiplier(t)*shieldMultiplier(t)*(t.building?1.4:1);recordArtilleryDeath(t,shell.fromX,shell.fromY);}burst(shell.x,shell.y,'rock',shell.owner);burst(shell.x,shell.y,'dust',shell.owner);}
  state.groundBombards=state.groundBombards.filter(s=>s.at>state.time);
 }
 const tick=KawWarfront.tick;KawWarfront.tick=function(dt){tick(dt);update(dt);};
 const aiBase=ai;ai=function(schedule=false){aiBase(schedule);for(let owner=0;owner<state.players.length;owner++){const p=state.players[owner];if(!p.ai||!['hard','extreme'].includes(p.difficulty||state.difficulty)||(p.assaultAt||0)>state.time)continue;const own=state.entities.filter(e=>e.owner===owner&&e.hp>0),base=own.find(e=>e.type==='base');if(!base)continue;const fighters=own.filter(e=>!e.building&&!e.convoy&&e.type!=='worker'&&units[e.type]?.damage>0&&e.hp/e.max>.45&&!e.aiEngaged);if(fighters.length<6||state.time<40)continue;const threat=state.entities.some(e=>!sameTeam(e.owner,owner)&&e.hp>0&&!e.building&&units[e.type]?.damage>0&&Math.hypot(e.x-base.x,e.y-base.y)<450&&canSee(owner,e.x,e.y));if(threat)continue;
   const known=(p.intel||[]).filter(e=>e.hp>0&&e.building),spots=state.spawns.filter(([x,y])=>Math.hypot(x-base.x,y-base.y)>600);p.assaultIndex??=0;const target=known.sort((a,b)=>Math.hypot(a.x-base.x,a.y-base.y)-Math.hypot(b.x-base.x,b.y-base.y))[0]||(()=>{const spot=spots[p.assaultIndex++%Math.max(1,spots.length)];return spot?{x:spot[0],y:spot[1]}:{x:SIZE/2,y:SIZE/2};})();
   p.assaultAt=state.time+45;p.attackWave={phase:'advance',at:state.time,targetId:target.id};const slots=formationSlots(fighters,target,'line');for(const e of fighters)queueTask(e,{kind:'attackMove',...slots.get(e.id)});
  }};
 const draw=KawWarfront.draw;KawWarfront.draw=function(c){draw(c);if(window.KawBattlefield?.active)return;for(const w of state.tidalWaves||[]){const t=Math.min(1,(state.time-w.at)/w.duration),front=t*360;c.save();c.translate(w.x+Math.cos(w.angle)*front,w.y+Math.sin(w.angle)*front);c.rotate(w.angle);const wash=c.createLinearGradient(-40,0,28,0);wash.addColorStop(0,'#07516600');wash.addColorStop(.55,'#127b99bb');wash.addColorStop(.8,'#83e7efdd');wash.addColorStop(1,'#e4fbffaa');c.fillStyle=wash;c.beginPath();c.ellipse(-5,-12,38,75,0,0,Math.PI*2);c.fill();c.strokeStyle='#e4fbff';c.lineWidth=5;c.beginPath();for(let i=0;i<=30;i++){const y=(i/30-.5)*145,x=12+Math.sin(i*.8+state.time*9)*3;i?c.lineTo(x,y-12):c.moveTo(x,y-12);}c.stroke();for(let i=0;i<18;i++){const phase=(state.time*2+i*.618)%1;c.fillStyle='#e4fbffbb';c.beginPath();c.ellipse(14+phase*22,(i/17-.5)*145-12-Math.sin(phase*Math.PI)*12,2,3,0,0,Math.PI*2);c.fill();}c.restore();}};
 function visibleEntity(owner,e){if(sameTeam(owner,e.owner)||e.building||e.revealedUntil>state.time)return true;const concealed=e.stealthUntil>state.time||e.invisibleUntil>state.time||(state.smoke||[]).some(s=>s.shroud&&s.expires>state.time&&sameTeam(s.owner,e.owner)&&Math.hypot(e.x-s.x,e.y-s.y)<=s.radius);if(!concealed)return true;return state.entities.some(a=>sameTeam(a.owner,owner)&&a.hp>0&&!a.hiddenInMine&&Math.hypot(a.x-e.x,a.y-e.y)<=visionRadius(a)&&canTarget(a,e));}
 globalThis.KawNature={canTarget,visibleEntity,update};
})();
