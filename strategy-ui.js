/* Tactical presentation only. Shared rules and validation live in strategy.js. */
(() => {
  const make=(tag,text,parent)=>{const e=document.createElement(tag);if(text)e.textContent=text;parent?.append(e);return e;};
  const button=(text,parent,fn)=>{const e=make('button',text,parent);e.type='button';e.onclick=fn;return e;};
  const intel=make('details',null,$('battleTools'));intel.id='tacticalIntel';intel.open=!matchMedia('(max-width:760px)').matches;const summary=make('summary',null,intel);const forecast=make('span',null,summary);forecast.id='incomeForecast';forecast.setAttribute('aria-label','Resource income forecast');
  const rates=make('span','Income: measuring deliveries… · Map pings',forecast);
  const warnings=make('div',null,intel);warnings.id='resourceWarnings';
  const roles=make('section',null,document.querySelector('.selection'));roles.id='unitRoleGuide';
  const objective=make('section',null,document.querySelector('#game main'));objective.id='convoyObjective';objective.hidden=true;
  const pings=make('section',null,intel);pings.id='teamPingControls';make('span','Map pings',pings);
  const styles={danger:{label:'Danger',color:'#ff8974',symbol:'!'},attack:{label:'Attack here',color:'#ffd075',symbol:'⚔'},help:{label:'Need help',color:'#8fe9d3',symbol:'+'}};
  for(const [kind,style] of Object.entries(styles)) button(style.label,pings,()=>{
    if(!state||paused||state.replay||state.spectating||state.ended)return;
    commandMode='ping:'+kind;placement=null;setTouchMode('order');if(matchMedia('(max-width:760px)').matches)setMobilePanel('map');toast('Choose a map or minimap location for '+style.label.toLowerCase()+'.');
  }).dataset.ping=kind;
  const notice=make('section',null,intel);notice.id='teamPingNotices';notice.setAttribute('aria-live','polite');
  async function sendPing(kind,p) {
    try {
      if(multiplayer.active)await multiplayerRequest('/api/lobbies/'+multiplayer.session.code,{action:'ping',kind,x:p.x,y:p.y});
      else {const error=KawStrategy.ping(0,kind,p.x,p.y);if(error)throw Error(error);}
      toast(styles[kind].label+' ping sent.');
    } catch(error){toast(error.message);}
  }
  const issue=issueCommand;issueCommand=function(p,...args){
    if(commandMode?.startsWith('ping:')){const kind=commandMode.slice(5);commandMode=null;sendPing(kind,p);return;}
    if(selected.length&&selected.every(e=>e.convoy)){toast('Convoys follow their depot route. Use Guard ally to escort one.');return;}
    return issue(p,...args);
  };
  function describe(type,faction,parent){const [role,strong,weak]=KawStrategy.role(type,faction);make('strong',role,parent);make('p','Strong role: '+strong,parent);make('p','Watch for: '+weak,parent);}
  const update=updateUI;updateUI=function(...args){update(...args);if(!state)return;
    roles.replaceChildren();const e=selected[0];if(e&&!e.building)describe(e.type,state.players[e.owner].faction,roles);
    // Recruitment cards carry the same guidance as selected units, with an
    // accessible expansion instead of relying only on mouse-hover tooltips.
    for(const b of document.querySelectorAll('#actions button.build-action')) {
      const type=b.dataset.unitType;if(!type||b.querySelector('.unit-role-details'))continue;
      const [role,strong,weak]=KawStrategy.role(type,state.players[0].faction);b.title=role+' · '+strong+' '+weak;
      const note=make('small',role+' · '+strong,b);note.className='unit-role-details';
    }
  };
  // tag recruitment cards at creation without changing their command behavior.
  const register=registerCommand;registerCommand=function(b,label,fn,opts){register(b,label,fn,opts);if(opts.unit)b.dataset.unitType=opts.unit;};
  let refreshedAt=0,warningKey='',pingKey='';
  const frame=KawExperience.frame;KawExperience.frame=function(dt,t){frame(dt,t);if(!state||$('game').hidden)return;
    if(t-refreshedAt<500)return;refreshedAt=t;
    const income=KawStrategy.economy(0);rates.textContent=income.elapsed<1?'Income: measuring deliveries…':`Income / min · ${Math.round(income.gold)} gold · ${Math.round(income.wood)} lumber (last ${Math.round(income.elapsed)}s) · Map pings`;
    const depleted=KawStrategy.depletion(0),key=depleted.map(r=>r.resourceId||r.x+':'+r.y).join('|');
    if(key!==warningKey){warningKey=key;warnings.replaceChildren();for(const r of depleted.slice(0,3))button(r.type==='gold'?'Mine nearly depleted':'Forest nearly depleted',warnings,()=>{cam.x=r.x-viewport.width/2;cam.y=r.y-viewport.height/2;clampCam();});}
    objective.hidden=state.rules?.victory!=='convoy';
    if(!objective.hidden){const race=state.convoyRace;objective.replaceChildren();make('strong','Convoy race · first side to 3 deliveries',objective);
      if(race){const ownKey=KawRules.teamKey(0);make('span','Your side: '+(race.scores[ownKey]||0)+' / 3',objective);
        const destination=race.destinations.find(d=>d.owner===0);if(destination)button('Locate convoy depot',objective,()=>{cam.x=destination.x-viewport.width/2;cam.y=destination.y-viewport.height/2;clampCam();});}}
    const live=(state.pings||[]).filter(p=>p.until>state.time&&sameTeam(p.owner,0)),pk=live.map(p=>p.owner+':'+p.until).join('|');
    if(pk!==pingKey){pingKey=pk;notice.replaceChildren();for(const p of live.slice(-3))button((state.players[p.owner]?.name||'Ally')+': '+styles[p.kind].label,notice,()=>{cam.x=p.x-viewport.width/2;cam.y=p.y-viewport.height/2;clampCam();});}
  };
  function drawWorld(c){
    c.save();c.textAlign='center';c.font='bold 13px system-ui';
    for(const p of state.pings||[]){if(p.until<=state.time||!sameTeam(p.owner,0))continue;const style=styles[p.kind],radius=18+Math.sin(state.time*5)*4;c.strokeStyle=style.color;c.fillStyle=style.color;c.lineWidth=2;c.beginPath();c.arc(p.x,p.y,radius,0,Math.PI*2);c.stroke();c.fillText(style.symbol+' '+style.label,p.x,p.y-25);}
    for(const d of state.convoyRace?.destinations||[]){if(!sameTeam(d.owner,0))continue;c.strokeStyle=state.players[d.owner].color;c.fillStyle='#eaddb1';c.strokeRect(d.x-28,d.y-28,56,56);c.fillText('Convoy depot',d.x,d.y-36);}
    c.restore();
  }
  const mini=KawHUD.drawMini;KawHUD.drawMini=function(c){mini(c);c.save();for(const p of state.pings||[]){if(p.until<=state.time||!sameTeam(p.owner,0))continue;c.strokeStyle=styles[p.kind].color;c.lineWidth=2;c.beginPath();c.arc(p.x/SIZE*210,p.y/SIZE*150,5,0,Math.PI*2);c.stroke();}for(const d of state.convoyRace?.destinations||[]){if(!sameTeam(d.owner,0))continue;c.fillStyle='#ffe9a4';c.fillRect(d.x/SIZE*210-3,d.y/SIZE*150-3,6,6);}c.restore();};
  const guide=make('details',null,$('keySettings'));make('summary','Groups, economy forecasts & teammate pings',guide);make('p','Store group, then choose a numbered army button. Ctrl + 1–9 also stores; 1–9 recalls. Counts exclude dead units. Income shows actually earned resources per minute over the last minute; early estimates use the time available. Expand the income bar for depletion warnings and map pings. Danger, Attack here and Need help last eight seconds, are limited to one every two seconds, and are visible only to your side. Pings never uncover fog. Convoy races require escorting three automatic wagons to marked depots; destroyed wagons are replaced after thirty seconds.',guide);window.KawStrategyUI={drawWorld,sendPing};
})();

/* Commander tools are collapsible: detailed economy controls do not shrink the map. */
(() => {
 const node=(tag,text,parent)=>{const n=document.createElement(tag);if(text)n.textContent=text;parent?.append(n);return n;};
 const btn=(text,parent,fn)=>{const b=node('button',text,parent);b.type='button';b.onclick=fn;return b;};
 const usable=()=>state&&!paused&&!state.ended&&!state.replay&&!state.spectating&&state.count<=0;
 const dispatch=(e,mode,p={})=>{const c={kind:'tactical',id:e.id,mode,...p};return multiplayerCommand(c)||KawBattle.command(e,mode,c);};
 const update=updateUI;updateUI=function(...a){update(...a);const troops=selected.filter(e=>e.owner===0&&!e.building&&e.hp>0&&e.type!=='worker');if(!troops.length||$('attackPriorities'))return;const box=node('details',null,$('actions'));box.id='attackPriorities';node('summary','Target priorities & retreat point',box);const choice=node('select',null,box);choice.setAttribute('aria-label','Attack priority');for(const [v,label]of [['nearest','Nearest enemy'],['fighters','Enemy fighters'],['artillery','Enemy artillery'],['buildings','Enemy buildings']]){const o=node('option',label,choice);o.value=v;}choice.value=troops[0].attackPriority||'nearest';choice.onchange=()=>{if(usable())for(const e of troops)dispatch(e,'priority',{priority:choice.value});};const auto=node('label','Retreat automatically below 30% health ',box),check=node('input',null,auto);check.type='checkbox';check.checked=!!troops[0].autoRetreat;check.onchange=()=>{if(usable())for(const e of troops)dispatch(e,'autoRetreat',{enabled:check.checked});};btn('Set retreat point',box,()=>{if(!usable())return;commandMode='retreatPoint';placement=null;setTouchMode('order');toast('Choose a safe retreat destination.');});};
 const issue=issueCommand;issueCommand=function(p,...a){if(commandMode!=='retreatPoint')return issue(p,...a);if(!usable())return;for(const e of selected.filter(e=>e.owner===0&&!e.building))dispatch(e,'retreatPoint',p);commandMode=null;orderMarker={...p,left:1};toast('Retreat destination saved for selected troops.');};
 const panel=node('details',null,$('battleTools'));panel.id='resourceManagement';node('summary','Resource assignments',panel);const content=node('div',null,panel);let at=0;
 const frame=KawExperience.frame;KawExperience.frame=function(dt,t){frame(dt,t);const voteStatus=$('rematchVoteStatus');if(voteStatus&&multiplayer.room){const humans=multiplayer.room.members.filter(m=>!m.ai&&!m.left);voteStatus.textContent=(multiplayer.room.rematchVotes||0)+' / '+humans.length+' human rematch votes. All must vote and be connected.';}if(!state||!panel.open||t-at<1000)return;at=t;content.replaceChildren();const workers=state.entities.filter(e=>e.owner===0&&e.type==='worker'&&e.hp>0);btn('Send idle workers to lumber',content,()=>{if(!usable())return;for(const w of workers.filter(w=>!w.order||['hold','stop'].includes(w.order.kind))){const r=state.resources.filter(r=>r.type==='wood'&&r.amount>0&&visible(r.x,r.y)&&treeAvailable(r,w)).sort((a,b)=>Math.hypot(a.x-w.x,a.y-w.y)-Math.hypot(b.x-w.x,b.y-w.y))[0];if(r)dispatch(w,'assignResource',{resourceId:r.resourceId??state.resources.indexOf(r)});}});node('p',`${workers.length} workers · ${workers.filter(e=>!e.order||['hold','stop'].includes(e.order.kind)).length} idle`,content);for(const r of state.resources.filter(r=>r.type==='gold'&&r.amount>0&&state.seen[Math.floor(r.y/CELL)*N+Math.floor(r.x/CELL)])){const assigned=workers.filter(w=>workerAssignedToResource(w,r)),row=node('div',null,content);node('span',`Mine ${r.resourceId??state.resources.indexOf(r)} · ${assigned.length}/5 assigned · ${Math.ceil(r.amount)} gold `,row);btn('View workers',row,()=>{selected=assigned;updateUI();});btn('Assign selected workers',row,()=>{if(!usable())return;for(const w of selected.filter(e=>e.owner===0&&e.type==='worker'))dispatch(w,'assignResource',{resourceId:r.resourceId??state.resources.indexOf(r)});updateUI();});btn('Assign idle',row,()=>{if(!usable())return;let count=assigned.length;for(const w of workers.filter(w=>!w.order||['hold','stop'].includes(w.order.kind))){if(count>=5)break;if(dispatch(w,'assignResource',{resourceId:r.resourceId??state.resources.indexOf(r)}))count++;}toast('Idle workers assigned; carrying and building workers keep their tasks.');});}}
 const oldResults=showMatchResults;showMatchResults=function(...a){oldResults(...a);const root=document.querySelector('.match-results');if(!root)return;for(const p of state.matchStats||state.players.map(p=>({name:p.name,faction:p.faction,stats:p.stats}))){const stats=p.stats||{};const best=Object.entries(stats.killsByType||{}).sort((a,b)=>b[1]-a[1])[0];node('p',`${p.name}: ${Math.round(stats.goldSpent||0)} gold / ${Math.round(stats.woodSpent||0)} lumber spent · ${Math.round(stats.productionIdle||0)} idle production-building seconds · top fighter: ${best?(names[p.faction]?.[best[0]]||best[0])+' ('+best[1]+' defeats)':'no credited defeats'}`,root);}if(multiplayer.session&&!state.spectating){node('p','All remaining human players must vote for a rematch.',root).id='rematchVoteStatus';btn('Vote for rematch',root,async()=>{try{await multiplayerRequest('/api/lobbies/'+multiplayer.session.code,{action:'rematch'});toast('Rematch vote recorded. All remaining human players must vote.');await pollMultiplayer();}catch(e){toast(e.message);}});}};
 for(const key of ['islands','plateau','valleys']){const definition=mapDefinitions[key],card=node('button',null,document.querySelector('.map-options'));card.className='map-card';card.dataset.map=key;const canvas=node('canvas',null,card);canvas.className='map-preview';canvas.width=360;canvas.height=270;canvas.setAttribute('aria-label',definition.name+' terrain preview');node('h2',definition.name,card);node('p',definition.description,card);card.onclick=()=>chooseMap(key);const o=node('option',definition.name,$('mpMap'));o.value=key;}renderMapPreviews();
})();

/* Independent render budgets. Texture filtering never changes the unit model. */
(() => {
 const settings={textures:'high',shadows:'medium',grass:true,effects:true};try{Object.assign(settings,JSON.parse(localStorage.getItem('kaw-graphics-detail')||'{}'));}catch{}
 window.KawGraphicsDetail={settings};const box=document.createElement('fieldset');box.id='graphicsComponents';box.innerHTML='<legend>Graphics detail</legend><p>Unit model detail is preserved at every zoom level.</p>';$('keySettings').append(box);
 for(const [key,label,choices]of [['textures','Texture filtering',['standard','high']],['shadows','Shadows',['off','low','medium']],['grass','Wind grass',['on','off']],['effects','Ambient occlusion & bloom',['on','off']]]){const row=document.createElement('label');row.textContent=label;const s=document.createElement('select');s.setAttribute('aria-label',label);for(const value of choices){const o=document.createElement('option');o.value=value;o.textContent=value;s.append(o);}s.value=typeof settings[key]==='boolean'?(settings[key]?'on':'off'):settings[key];s.onchange=()=>{settings[key]=['grass','effects'].includes(key)?s.value==='on':s.value;localStorage.setItem('kaw-graphics-detail',JSON.stringify(settings));if(key==='grass')KawExperience.settings.grass=settings.grass;window.KawBattlefield?.stop();};row.append(s);box.append(row);}KawExperience.settings.grass=settings.grass;
})();
