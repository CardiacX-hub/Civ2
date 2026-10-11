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
