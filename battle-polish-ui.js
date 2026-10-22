/* Device-local presentation and teaching. Rules and authoritative commands stay
 * in shared modules; bounded sampling never adds an army-sized per-frame scan. */
(()=>{
 const el=(tag,text,parent)=>{const n=document.createElement(tag);if(text)n.textContent=text;parent?.append(n);return n;};
 const button=(text,parent,fn)=>{const n=el('button',text,parent);n.type='button';n.onclick=fn;return n;};
 const KEY='kaw-battle-polish-v1';let saved={};try{saved=JSON.parse(localStorage.getItem(KEY)||'{}');}catch{}
 const prefs={healthBars:false,clearWindups:true,touchScale:1,...saved};
 prefs.touchScale=[1,1.15,1.3].includes(+prefs.touchScale)?+prefs.touchScale:1;
 const options=el('fieldset',null);el('legend','Combat clarity & touch controls',options);
 $('keySettings').insertBefore(options,$('closeKeySettings'));
 const apply=()=>{document.body.style.setProperty('--touch-size',prefs.touchScale);try{localStorage.setItem(KEY,JSON.stringify(prefs));}catch{}scheduleViewportResize();};
 for(const [key,text]of [['healthBars','Larger health bars for visible units'],['clearWindups','Heavy-attack cues and incoming boulder warnings']]){const label=el('label',text,options),input=el('input',null,label);input.type='checkbox';input.checked=prefs[key];input.onchange=()=>{prefs[key]=input.checked;apply();};}
 const label=el('label','Phone button size',options),scale=el('select',null,label);scale.id='touchTargetScale';for(const [value,text]of [[1,'Standard'],[1.15,'Large'],[1.3,'Extra large']]){const o=el('option',text,scale);o.value=value;}scale.value=prefs.touchScale;scale.onchange=()=>{prefs.touchScale=+scale.value;apply();};apply();

 const main=document.querySelector('#game main'),wave=el('output',null,main);wave.id='waveStatus';wave.hidden=true;wave.setAttribute('aria-live','polite');
 const notice=el('output',null,main);notice.id='orderFeedback';notice.hidden=true;notice.setAttribute('aria-live','polite');
 let noticeUntil=0,session,routeAt=0,commandUntil=0,lastCommand='',marker=null,acks=0;
 function feedback(text){notice.textContent=text;notice.hidden=false;noticeUntil=performance.now()+2600;}
 // One acknowledgment per group command, not per unit; shift orders retain sequencing.
 const queued=queueTask;queueTask=function(e,o,append=false){const result=queued(e,o,append);if(result!==false&&e.owner===0&&state&&!state.ended&&selected.includes(e)&&!state.networkMatch){acks++;lastCommand=append?'Order queued':o.kind==='stop'?'Stopped':o.kind==='attackMove'?'Attack-move ordered':o.kind==='gather'?'Gathering ordered':'Order accepted';commandUntil=performance.now()+100;if(Number.isFinite(o.x)&&Number.isFinite(o.y))marker={x:o.x,y:o.y,at:state.time,attack:o.kind==='attackMove'};}return result;};
 // Network orders pass through the existing request path; no optimistic success sound.
 const stopped=stopSelected;stopSelected=function(...args){const count=selected.filter(e=>e.owner===0&&!e.building).length;const result=stopped(...args);if(count){feedback('Stopped · '+count+' units');window.KawBattleAudio?.play('ack',selected[0]);}return result;};
 const issued=issueCommand;issueCommand=function(...args){const before=orderMarker;const result=issued(...args);if(state&&orderMarker&&orderMarker!==before){marker={x:orderMarker.x,y:orderMarker.y,at:state.time,attack:orderMarker.kind==='attack'};if(state.networkMatch)feedback('Order sent to server');}return result;};

 const wheel=el('section',null,main);wheel.id='quickCommandWheel';wheel.hidden=true;wheel.setAttribute('aria-label','Quick unit commands');
 const toggle=button('✥ Commands',main,()=>{wheel.hidden=!wheel.hidden;toggle.setAttribute('aria-expanded',String(!wheel.hidden));});toggle.id='quickCommandToggle';toggle.setAttribute('aria-expanded','false');
 function choose(kind){if(!state||paused||state.count>0||state.ended)return;if(!selected.some(e=>!e.building&&e.owner===0)){feedback('Select troops or collectors first');return;}if(kind==='gather'&&!selected.some(e=>e.owner===0&&e.type==='worker')){feedback('Select a collector to gather resources');return;}if(kind==='stop')stopSelected();else if(kind==='hold')selected.filter(e=>!e.building).forEach(e=>queueTask(e,{kind:'hold'}));else{placement=null;commandMode=kind==='gather'?'command':kind;setTouchMode('order');feedback(kind==='gather'?'Tap a tree or gold mine':kind==='attackMove'?'Tap a destination: fight along the way':kind==='command'?'Tap an enemy or work target':'Tap a destination');}wheel.hidden=true;toggle.setAttribute('aria-expanded','false');}
 for(const [kind,text]of [['move','Move'],['attackMove','Attack-move'],['command','Attack'],['gather','Gather'],['stop','Stop'],['hold','Hold']])button(text,wheel,()=>choose(kind));
 button('Close',wheel,()=>{wheel.hidden=true;toggle.setAttribute('aria-expanded','false');});
 // Optional high-contrast bars and precise windup wedges are bounded to models
 // already being drawn. Effects never expose unseen enemies.
 const overlay=drawStandardOverlay;drawStandardOverlay=function(e,p){overlay(e,p);if(e.hp<=0||e.hiddenInMine)return;const heavy=prefs.clearWindups&&e.action?.kind==='attack'&&['siege','bogbreaker','devoured','cavalier','rootColossus'].includes(e.type);if(!prefs.healthBars&&!heavy)return;ctx.save();
  if(prefs.healthBars&&!e.construction){const w=Math.max(28,e.size*2),y=window.KawBattlefield?.active?-66:-e.size-22;ctx.fillStyle='#090f15';ctx.fillRect(-w/2-2,y-2,w+4,11);ctx.fillStyle=sameTeam(e.owner,0)?'#9bea92':'#ff8c79';ctx.fillRect(-w/2,y,w*Math.max(0,e.hp/e.max),7);}
  if(heavy){const progress=Math.max(0,Math.min(1,1-(e.action.until-state.time)/e.action.duration));if(progress<.32){const angle=e.facing||0;ctx.strokeStyle=sameTeam(e.owner,0)?'#eac66e':'#ff907c';ctx.lineWidth=2;ctx.globalAlpha=.65;ctx.beginPath();ctx.arc(0,2,e.size+13,angle-.65,angle+.65);ctx.stroke();}}
  ctx.restore();
 };
 const hud=KawHUD.draw;KawHUD.draw=function(g){hud(g);if(prefs.clearWindups){g.save();g.lineWidth=2;g.strokeStyle='#ffba77';g.setLineDash([5,4]);for(const hit of state.rockHits||[]){if(hit.at<=state.time||!visible(hit.x,hit.y)||!inViewport(hit.x,hit.y))continue;g.beginPath();g.ellipse(hit.x,hit.y-terrainHeight(hit.x,hit.y),28,12,0,0,Math.PI*2);g.stroke();}g.restore();}if(!marker||state.time-marker.at>1.6)return;const age=state.time-marker.at;g.save();g.globalAlpha=1-age/1.6;g.lineWidth=2;g.strokeStyle=marker.attack?'#ff9b74':'#b5f3e7';g.beginPath();g.ellipse(marker.x,marker.y-terrainHeight(marker.x,marker.y),12+age*8,6+age*4,0,0,Math.PI*2);g.stroke();g.restore();};
 const frame=KawExperience.frame;KawExperience.frame=function(dt,t){frame(dt,t);const key=KawPerformance.sessionKey(state);if(session!==key){session=key;routeAt=0;marker=null;notice.hidden=true;wheel.hidden=true;toggle.setAttribute('aria-expanded','false');wave.hidden=true;wave.textContent='';}
  if(!state||$('game').hidden)return;
  if(acks&&t>commandUntil){feedback(lastCommand+' · '+acks+' unit'+(acks===1?'':'s'));acks=0;}
  if(t>noticeUntil)notice.hidden=true;
  if(state.survival){const s=state.survival;wave.hidden=false;const text=s.phase==='prepare'?'CENTERHOLD · Wave '+(s.wave+1)+' in '+Math.max(0,Math.ceil(s.nextAt-state.time))+'s · '+s.cleared+' cleared':'CENTERHOLD · Wave '+s.wave+' · '+['North','East','South','West'][s.direction]+' · '+(s.remaining??s.spawned)+' enemies';if(wave.textContent!==text)wave.textContent=text;}else wave.hidden=true;
  if(state.time>=routeAt){routeAt=state.time+.75;const blocked=selected.filter(e=>!e.building&&e.hp>0&&e.navStatus&&/no clear|blocked|unreachable/i.test(e.navStatus));if(blocked.length)feedback(blocked.length+' selected unit'+(blocked.length===1?'':'s')+' cannot reach the destination. Try another approach.');}
 };

 // Existing upgrade comparisons and visible research fittings are retained.
 // Surface faction strategy and a unit's role next to its exact current stats.
 const stats=characterStats;characterStats=function(e){const rows=stats(e);if(!e.building){const role=e.convoy?'Convoy · escort to its destination':isBannerBearer(e)?'Standard · one active support aura':e.type==='medic'||e.type==='naniteTender'?'Support · heal and protect your army':e.type==='engineer'?'Engineer · fortifications and siege support':e.type==='worker'?'Economy · gather, build and repair':isScout(e)?'Reconnaissance · cannot attack':isHeroType(e.type)?'Hero · aura and signature power':e.type==='siege'?'Siege · vulnerable without escorts':isFlying(e)?'Air · vulnerable to ranged attacks':units[e.type]?.range>100?'Ranged · protect behind the front line':'Front line · close combat';rows.unshift(['Role',role.split(' · ')[0]]);}return rows;};
 const guide=el('details',null,options);el('summary','Faction identity & upgrade guide',guide);for(const p of Object.values(KawBattle.profiles)){el('h3',p.name,guide);el('p',p.strength+' '+p.weakness+' Counterplay: '+p.counter,guide);}el('p','Research tooltips show exact before → after values and which troop type benefits. Weapon research adds visible equipment. Target armor, auras and shields modify final damage; selected-unit stats and status effects explain these modifiers.',guide);

 // Add chronological economy and casualties to the existing post-battle report.
 const results=showMatchResults;showMatchResults=function(...args){results(...args);const root=document.querySelector('.match-results');if(!root)return;const panel=el('details',null,root);el('summary','Battle timeline',panel);const list=el('ol',null,panel),moments=[];
  for(const p of args[1]||state.matchStats||state.players){const s=p.stats||{},name=p.name||factionName(p.faction);for(const event of s.moments||[])moments.push({time:event.time,text:name+' · '+event.label});const history=s.economy||[];for(let i=1;i<history.length;i++)if(history[i].time>=60&&Math.floor(history[i].time/60)>Math.floor(history[i-1].time/60))moments.push({time:history[i].time,text:name+' · income '+Math.round(history[i].earned-history[i-1].earned)+' in last sample · '+Math.round(history[i].earned)+' total resources earned'});}
  for(const e of state.survival?.events||[])moments.push({time:e.time,text:e.label});for(const e of moments.sort((a,b)=>a.time-b.time).slice(-160))el('li',formatGameTime(e.time)+' · '+e.text,list);if(!moments.length)el('li','No major events recorded yet.',list);if(state.survival)el('p','Centerhold: '+state.survival.cleared+' waves cleared; reached wave '+state.survival.wave+'. Resources include wave-clear rewards.',root);
 };
 tutorialLessons.push(['Scout with your faction','A scout is provided. Move it at least 300 units from your Stronghold to reveal terrain. Scouts cannot attack.','factionScout'],['Use your faction power','A hero is provided. Select it and use its signature power. Read its aura and power descriptions; keep supporting units nearby.','factionPower']);
 const tutorialDraw=renderTutorial;renderTutorial=function(){if(tutorial.active&&state){const key=tutorialLessons[tutorial.step]?.[2],race=state.players[0].faction;if(key==='factionScout'&&!state.tutorialScout){const base=state.entities.find(e=>e.owner===0&&e.type==='base'),site=productionSpawnPoint(base,'scout')||tutorialSite('wall');if(site){const scout=entity('scout',0,site.x,site.y);state.tutorialScout=scout.id;selected=[scout];toast(names[race].scout+': reveal terrain; this unit cannot attack.');}}
 if(key==='factionPower'&&!state.tutorialHero){const site=tutorialSite('wall');if(site){const hero=entity('hero',0,site.x,site.y);state.tutorialHero=hero.id;selected=[hero];toast(heroAbilityName(hero)+': '+heroAbilityDescription(hero));}}
 }tutorialDraw();if(tutorial.active&&state&&tutorial.step>=10){const p=KawBattle.profiles[state.players[0].faction];$('tutorialText').textContent+=' '+p.strength+' '+p.weakness;}};
 const teach=tutorialAdvance;tutorialAdvance=function(){if(tutorial.active&&state){const scout=state.entities.find(e=>e.id===state.tutorialScout),base=state.entities.find(e=>e.owner===0&&e.type==='base'),hero=state.entities.find(e=>e.id===state.tutorialHero);if(scout&&base&&Math.hypot(scout.x-base.x,scout.y-base.y)>=300)tutorial.events.add('factionScout');if(hero?.abilityReady>state.time)tutorial.events.add('factionPower');}return teach();};
 function startFactionTutorial(){startTutorial();if(!tutorial.active)return;tutorial.step=tutorialLessons.findIndex(l=>l[2]==='factionScout');renderTutorial();updateUI();}
 window.KawBattlePolish={prefs,choose,feedback,startFactionTutorial};
})();
