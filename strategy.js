/* Shared battlefield strategy. Browser and authoritative server use identical rules.
 * Scouting consumes visible observations only; forecasts use recorded deliveries.
 * No presentation or networking code runs inside this module. */
(() => {
  const roles = {
    worker: ['Collector', 'Builds, repairs and delivers resources.', 'Vulnerable to every fighter.'],
    melee: ['Front line', 'Protects ranged troops and closes on artillery.', 'Vulnerable to kiting and concentrated ranged fire.'],
    ranged: ['Ranged support', 'Paired ranged units gain 15% damage against heavy infantry.', 'Needs a front line against melee attackers.'],
    sniper: ['Heavy ranged damage', 'Paired ranged units punish heavy infantry.', 'Low health; vulnerable to flanking.'],
    siege: ['Siege artillery', '+40% damage against buildings.', 'Slow; protect against melee and flyers.'],
    scout: ['Reconnaissance', 'Wide sight range; finds raids and expansions.', 'Avoid direct fights with combat units.'],
    shieldwarden: ['Defensive infantry', 'Protects nearby allies.', 'Can be flanked or outranged.'],
    medic: ['Healer', 'Keeps nearby friendly troops fighting.', 'Needs protection from focused attacks.'],
    engineer: ['Siege support', 'Repairs friendly machinery.', 'Needs an escort.'],
    trapper: ['Area control', 'Traps punish advancing enemies.', 'Vulnerable while repositioning.'],
    cavalier: ['Heavy assault', 'Armored front line for breaking ranged positions.', 'Paired ranged troops counter heavy armor.'],
    devoured: ['Heavy assault', 'Armored front line for breaking ranged positions.', 'Paired ranged troops counter heavy armor.'],
    beetle: ['Heavy assault', 'Armored front line.', 'Artillery punishes rooted Verdant formations.'],
    bogbreaker: ['Close assault', 'Strong close-range pressure.', 'Can be kited by ranged troops.'],
    convoy: ['Supply convoy', 'Escort to its marked depot to score.', 'Cannot attack; vulnerable without an escort.']
  };
  function role(type, faction) {
    if (type === 'ranged' && faction === 'horde') return ['Anti-air spears', '+40% damage against flying units.', 'Needs protection against melee.'];
    if (type.startsWith('banner')) return ['Aura bearer', 'Supports nearby allies with its selected aura.', 'Only one aura is active; protect the bearer.'];
    if (type.startsWith('hero')) return ['Hero', 'Special abilities and an aura support the army.', 'Focused fire and isolation are dangerous.'];
    if (units[type]?.flying) return ['Flying attacker', 'Crosses cliffs and bypasses ground obstacles.', 'Dominion ranged spears deal extra damage to flyers.'];
    return roles[type] || ['Fighter', 'Supports your army.', 'Protect against concentrated attacks.'];
  }

  // One bounded rolling sample per simulation second, including delivered resources.
  function sampleEconomy() {
    if (state.time < (state.forecastAt || 0)) return;
    state.forecastAt = state.time + 1;
    for (let owner = 0; owner < state.players.length; owner++) {
      const p = state.players[owner], s = matchStats(owner);
      p.incomeHistory ||= [];
      p.incomeHistory.push({time:state.time, gold:s.goldGained, wood:s.woodGained});
      while (p.incomeHistory.length > 61) p.incomeHistory.shift();
    }
  }
  function economy(owner) {
    const p = state.players[owner], history = p.incomeHistory || [], first = history[0], last = history.at(-1);
    const elapsed = first && last ? last.time - first.time : 0;
    return {gold:elapsed > 0 ? (last.gold-first.gold)*60/elapsed : 0,
      wood:elapsed > 0 ? (last.wood-first.wood)*60/elapsed : 0, elapsed};
  }
  function depletion(owner) {
    const assigned = new Set(state.entities.filter(e=>e.owner===owner && e.type==='worker' && e.hp>0)
      .map(e=>e.order?.kind==='gather'?e.order.target:e.order?.kind==='deliver'?e.order.mine||e.mineResume:null).filter(r=>r&&['gold','wood'].includes(r.type)));
    return [...assigned].filter(r=>{
      if(r.amount<0)return false;
      if(r.type==='gold')return r.amount<=90||r.initialAmount&&r.amount/r.initialAmount<.2;
      const grove=state.resources.filter(t=>t.type==='wood'&&Math.hypot(t.x-r.x,t.y-r.y)<180);
      const remaining=grove.reduce((n,t)=>n+t.amount,0),initial=grove.reduce((n,t)=>n+(t.initialAmount||240),0);
      return !grove.length||initial>0&&remaining/initial<.2;
    });
  }

  // Keep short-lived, serializable observations rather than references to hidden foes.
  function reconnaissance(owner) {
    const p=state.players[owner], own=state.entities.filter(e=>e.owner===owner && e.hp>0);
    const mask=state.networkSight?.[owner] || playerVisibility(owner);
    const observed=state.entities.filter(e=>e.hp>0 && !sameTeam(owner,e.owner) && !e.hiddenInMine && mask[Math.floor(e.y/CELL)*N+Math.floor(e.x/CELL)]);
    p.scouted ||= {};
    for(const e of observed) p.scouted[e.id]={id:e.id,type:e.type,x:e.x,y:e.y,building:e.building,at:state.time};
    for(const [id,e] of Object.entries(p.scouted)) if(state.time-e.at>30) delete p.scouted[id];
    const seen=Object.values(p.scouted), fighters=seen.filter(e=>!e.building && e.type!=='worker');
    const air=fighters.filter(e=>units[e.type]?.flying).length, heavy=fighters.filter(e=>['melee','devoured','cavalier','beetle','shieldwarden'].includes(e.type)).length;
    p.counterPlan=air>=2?'air':heavy>=3?'armor':seen.filter(e=>e.building).length>=3?'siege':'balanced';
    return {own,observed,seen};
  }
  function trainingType(owner, building, fallback, counted) {
    const p=state.players[owner];
    if(building==='barracks' && !['scout','medic','shieldwarden','trapper'].includes(fallback)) {
      if(p.counterPlan==='air' && counted('ranged')<Math.max(4,counted('melee')*2)) return 'ranged';
      if(p.counterPlan==='armor' && counted('sniper')<Math.max(2,counted('melee'))) return 'sniper';
    }
    if(building==='forge' && p.counterPlan==='siege' && counted('siege')<3) return 'siege';
    if(building==='roost' && p.counterPlan==='siege' && counted('air2')<2) return 'air2';
    return fallback;
  }
  function adaptiveAI(owner, intel) {
    const p=state.players[owner], {own,observed,seen}=intel, base=own.find(e=>e.type==='base'&&!e.construction);
    if(!base) return;
    const army=own.filter(e=>!e.building && !e.convoy && e.type!=='worker' && units[e.type]?.damage>0);
    const scout=own.find(e=>e.type==='scout') || army.find(isFlying);
    if(scout && !scout.aiEngaged && !observed.some(t=>!t.building&&units[t.type]?.damage>0&&Math.hypot(t.x-scout.x,t.y-scout.y)<250) && (!scout.order || !scout.scoutUntil || state.time>=scout.scoutUntil)) {
      const spots=state.spawns.filter(([x,y])=>Math.hypot(x-base.x,y-base.y)>600);
      if(spots.length) {p.scoutIndex=(p.scoutIndex||0)+1;const [x,y]=spots[p.scoutIndex%spots.length];
        queueTask(scout,{kind:'move',...openMovePoint(scout,{x,y})});scout.scoutUntil=state.time+18;}
    }
    // Evaluate nearby opponents only. Do not redirect an army away from base defense.
    const threats=observed.filter(e=>!e.building && units[e.type]?.damage>0);
    const retreatRatio=(p.difficulty||state.difficulty)==='easy'?.45:.8;
    for(const e of army) {
      if(e===scout || !threats.some(t=>Math.hypot(t.x-e.x,t.y-e.y)<330)) continue;
      const power=group=>group.reduce((sum,u)=>sum+(units[u.type]?.damage||0)*Math.sqrt(Math.max(0,u.hp/u.max)),0);
      const nearbyFriends=army.filter(t=>Math.hypot(t.x-e.x,t.y-e.y)<300), nearbyFoes=threats.filter(t=>Math.hypot(t.x-e.x,t.y-e.y)<300);
      if(Math.hypot(e.x-base.x,e.y-base.y)>350 && power(nearbyFriends)<power(nearbyFoes)*retreatRatio) {
        KawBattle.command(e,'retreat');e.aiEngaged=true;e.fallbackUntil=state.time+4;
      }
    }
    if(state.time<(p.raidAt||0)) return;
    p.raidAt=state.time+10;
    const target=seen.filter(e=>e.type==='worker'||e.type==='depot'||e.type==='goldmine').sort((a,b)=>b.at-a.at)[0];
    const raiders=army.filter(e=>e!==scout && !e.aiEngaged && e.hp/e.max>.7 && !isBannerBearer(e)).slice(0,p.personality==='raider'?4:2);
    if(target && army.length>=6 && !threats.some(t=>Math.hypot(t.x-base.x,t.y-base.y)<450)) {
      for(const e of raiders) queueTask(e,{kind:'attackMove',...openMovePoint(e,{x:target.x,y:target.y})});
    }
    if(state.rules?.victory==='convoy') {
      const wagon=own.find(e=>e.convoy && e.hp>0);
      if(wagon) for(const e of army.filter(e=>!e.aiEngaged).slice(0,4)) KawBattle.command(e,'guard',{targetId:wagon.id});
    }
  }
  const previousAI=ai;
  ai=function(schedule=false) {
    const observations=new Map();
    for(let owner=0;owner<state.players.length;owner++) {
      const p=state.players[owner];
      if(p.ai===false || owner===0 && p.ai!==true || (schedule||state.networkMatch) && (p.nextAI||0)>state.time) continue;
      observations.set(owner,reconnaissance(owner));
    }
    previousAI(schedule);
    for(const [owner,intel] of observations) adaptiveAI(owner,intel);
  };

  // Competitive convoy race: three successful deliveries per side. Vehicles use
  // normal ground pathfinding and collision; destruction schedules a replacement.
  units.convoy={gold:0,wood:0,hp:700,damage:0,range:0,speed:85,time:0};
  for(const faction of Object.values(names)) faction.convoy='Supply Convoy';
  function initializeConvoys() {
    if(state.rules?.victory!=='convoy') return;
    state.convoyRace={scores:{},next:{},active:{},destinations:[]};
    for(let owner=0;owner<state.players.length;owner++) {
      const base=state.entities.find(e=>e.owner===owner&&e.type==='base'), probe={x:base.x,y:base.y,size:12,type:'convoy',owner};
      const river=state.rivers?.[0],bridges=river?.bridges.map(y=>({x:riverCenter(river,y)+(base.x<riverCenter(river,y)?-150:150),y})).filter(p=>Math.hypot(p.x-base.x,p.y-base.y)>600).sort((a,b)=>Math.hypot(a.x-base.x,a.y-base.y)-Math.hypot(b.x-base.x,b.y-base.y));
      // Stock maps validate these cleared approach corridors at match start.
      // Use a ground relay beside a crossing rather than exhaust path budgets
      // while searching every possible endpoint during initialization.
      const center=bridges?.[0]||(state.posts||[]).find(p=>Math.hypot(p.x-base.x,p.y-base.y)>650)||{x:SIZE/2,y:SIZE/2};
      let destination=null;
      for(let i=0;i<160;i++) {
        const a=i*2.399, point={x:center.x+Math.cos(a)*i*4,y:center.y+Math.sin(a)*i*4};
        if(point.x<80||point.y<80||point.x>SIZE-80||point.y>SIZE-80||Math.hypot(point.x-base.x,point.y-base.y)<550||blockedGroundPoint(point.x,point.y,20))continue;
        destination=point;break;
      }
      // A valid nearby fallback keeps custom map destinations reachable.
      destination ||= openMovePoint(probe,{x:base.x+(base.x<SIZE/2?180:-180),y:base.y+100});
      state.convoyRace.destinations.push({owner,...destination});state.convoyRace.next[owner]=10+owner*2;
      state.convoyRace.scores[KawRules.teamKey(owner)] ||= 0;
    }
  }
  function convoyTick() {
    const race=state.convoyRace;if(state.rules?.victory!=='convoy'||!race)return;
    for(const destination of race.destinations) {
      const owner=destination.owner,key=KawRules.teamKey(owner),base=state.entities.find(e=>e.owner===owner&&e.type==='base'&&e.hp>0);
      if(!base)continue;
      let wagon=state.entities.find(e=>e.owner===owner&&e.convoy&&e.hp>0);
      if(wagon) {
        if(Math.hypot(wagon.x-destination.x,wagon.y-destination.y)<45) {
          race.scores[key]=(race.scores[key]||0)+1;state.entities=state.entities.filter(e=>e!==wagon);race.next[owner]=state.time+30;race.active[owner]=null;
          if(race.scores[key]>=3)race.winner=key;
        } else if(!wagon.order) queueTask(wagon,{kind:'move',x:destination.x,y:destination.y});
      } else if(race.active?.[owner]){race.active[owner]=null;race.next[owner]=state.time+30;} else if(state.time>=(race.next[owner]||0)) {
        const spawn=productionSpawnPoint(base,'convoy');if(!spawn)continue;
        wagon=entity('convoy',owner,spawn.x,spawn.y);wagon.convoy=true;wagon.size=12;race.active ||= {};race.active[owner]=wagon.id;
        queueTask(wagon,{kind:'move',x:destination.x,y:destination.y});race.next[owner]=state.time+45;
      }
    }
  }
  function ping(owner,kind,x,y) {
    if(!['danger','attack','help'].includes(kind)||!Number.isFinite(x)||!Number.isFinite(y)||x<0||y<0||x>SIZE||y>SIZE) return 'Choose a valid ping and map location.';
    if(state.ended||state.count>0||state.replay) return 'Battle is not accepting pings.';
    const p=state.players[owner];if(!p) return 'Unknown commander.';
    if(state.time<(p.pingReady||0)) return 'Wait two seconds before another ping.';
    p.pingReady=state.time+2;state.pings=(state.pings||[]).filter(p=>p.until>state.time);
    state.pings.push({owner,kind,x,y,until:state.time+8});state.pings=state.pings.slice(-24);return null;
  }
  const previousStart=start;start=function(options){const result=previousStart(options);if(state){sampleEconomy();initializeConvoys();}return result;};
  const previousTick=tick;tick=function(dt){state.pings=(state.pings||[]).filter(p=>p.until>state.time);convoyTick();const result=previousTick(dt);sampleEconomy();return result;};
  globalThis.KawStrategy={role,economy,depletion,reconnaissance,trainingType,adaptiveAI,initializeConvoys,convoyTick,ping};
})();
