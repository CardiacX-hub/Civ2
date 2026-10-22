/* Progressive pages reuse the original controls and preserve setup values. */
(()=>{
 const menu=$('menu'),flow=document.createElement('div');flow.id='menuFlow';menu.classList.add('progressive-menu');menu.append(flow);
 const pages=new Map(),make=(tag,text,parent)=>{const n=document.createElement(tag);if(text)n.textContent=text;parent?.append(n);return n;};
 function page(key,title){const n=make('section',null,flow);n.id='menu-'+key;n.className='menu-page';const heading=make('h2',title,n);heading.tabIndex=-1;pages.set(key,n);return n;}
 function button(label,parent,fn,id){const b=make('button',label,parent);b.type='button';if(id)b.id=id;b.onclick=fn;return b;}
 const home=page('home','Choose your next adventure'),modes=page('single','Single player'),factions=page('faction','Choose your faction'),match=page('match','Set your opponents'),campaign=page('campaign','Campaign options'),extras=page('extras','Library & creative tools');let mode='skirmish',current='home';
 const nav=make('nav',null,flow);nav.className='menu-navigation';nav.setAttribute('aria-label','Menu navigation');const back=button('← Back',nav,()=>show(current==='faction'?'single':current==='match'||current==='campaign'?'faction':'home'),'menuBack');button('Settings',nav,()=>$('menuSettings').click());flow.prepend(nav);
 const survivalBrief=make('p','CENTERHOLD · Defend your central Stronghold against endless waves. Start with 600 gold, 600 lumber, four collectors and four fighters. Prepare for 60 seconds; earn resources and 35 seconds to rebuild after each clear. Selected terrain becomes an open arena with clear approaches. Siege joins at wave 5; flyers at wave 7. Defeat comes when your Stronghold falls.',$('mapMenu'));survivalBrief.id='survivalBrief';survivalBrief.hidden=true;
 function show(key){survivalBrief.hidden=mode!=='waves';current=key;menu.dataset.page=key;for(const [id,n]of pages)n.hidden=id!==key;nav.hidden=key==='home';pages.get(key).querySelector('h2').focus({preventScroll:true});menu.scrollIntoView({block:'start'});}
 button('Single player',home,()=>show('single'),'singlePlayerMenu');home.append($('multiplayerMenu'));$('multiplayerMenu').textContent='Multiplayer · Host / Join';button('Library & creative tools',home,()=>show('extras'),'extrasMenu');home.append($('menuSettings'));$('menuSettings').textContent='Settings';
 button('Campaign',modes,()=>{mode='campaign';next.textContent='Campaign options →';show('faction');},'chooseCampaign');button('Skirmish against AI',modes,()=>{mode='skirmish';next.textContent='Choose opponents →';show('faction');},'chooseSkirmish');button('Centerhold · Endless waves',modes,()=>{mode='waves';next.textContent='Choose survival battlefield →';show('faction');},'chooseSurvival');button('Faction field drill · Scout & signature power',modes,()=>{mode='drill';next.textContent='Begin faction drill →';show('faction');},'chooseFactionDrill');modes.append($('tutorialStart'));
 factions.append($('selectedRaceBanner'),menu.querySelector('.setup'));
 const players=menu.querySelector('.players'),banner=players.firstElementChild;banner.classList.add('banner-choice');factions.append(banner);match.append(players,menu.querySelector('.difficulty-choice'));
 const next=button('Choose opponents →',factions,()=>{if(mode==='drill'){KawBattlePolish.startFactionTutorial();return;}if(mode==='waves'){$('start').onclick();return;}show(mode==='campaign'?'campaign':'match');},'factionContinue');
 const advanced=make('details',null,match);make('summary','Advanced AI strategies',advanced);advanced.append($('aiPersonalities'));match.append($('openSkirmish'),$('start'));$('start').textContent='Choose battlefield →';
 const campaignControls=$('campaignMenu');campaign.append(campaignControls);for(const child of [...campaignControls.children]){if(child.tagName==='LABEL'){match.insertBefore(child,advanced);continue;}if(child.id==='campaignTalentMenu'||/^Campaign|^Original campaign/.test(child.textContent))continue;extras.append(child);}
 for(const id of ['bannerWorkshop','openBalance','modelGalleryButton'])if($(id))extras.append($(id));
 const hint=menu.querySelector('.hint');if(hint)home.append(hint);menu.append(flow);
 // The graphics module adds its gallery asynchronously after classic scripts.
 new MutationObserver(records=>{for(const record of records)for(const n of record.addedNodes)if(n.nodeType===1&&n.parentElement===menu&&n!==flow&&n.tagName==='BUTTON')extras.append(n);}).observe(menu,{childList:true});
 const leave=$('exit').onclick;$('exit').onclick=function(...args){const result=leave.apply(this,args);if(!state)show('home');return result;};
 const mapBack=$('backToFactions').onclick;$('backToFactions').onclick=function(...args){mapBack.apply(this,args);show(mode==='waves'?'faction':'match');};$('backToFactions').textContent='← Match setup';
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden&&!document.querySelector('dialog[open]')&&current!=='home'){e.preventDefault();back.click();}});
 const launch=$('launchMap').onclick;$('launchMap').onclick=function(...args){KawSurvival.pending=mode==='waves';return launch.apply(this,args);};
 window.KawMenuFlow={show,get mode(){return mode;},get page(){return current;}};show('home');
})();
