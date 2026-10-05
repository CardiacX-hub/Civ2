'use strict';
const $=id=>document.getElementById(id), canvas=$('world'),ctx=canvas.getContext('2d'), mini=$('minimap'),mc=mini.getContext('2d');
const SIZE=2400,CELL=40,N=SIZE/CELL;
const buildings={tower:{name:'Watchtower',gold:140,wood:160,hp:1000,size:24,damage:22,range:290,reload:1.1},bastion:{name:'Siege Bastion',gold:280,wood:240,hp:1600,size:32,damage:60,range:340,reload:2.6,splash:60},base:{name:'Stronghold',gold:400,wood:300,hp:2200,size:45},barracks:{name:'Infantry Lodge',gold:160,wood:120,hp:900,size:32},forge:{name:'Siege Works',gold:200,wood:180,hp:850,size:32},roost:{name:'Sky Roost',gold:220,wood:200,hp:750,size:32},altar:{name:'Hero Sanctum',gold:240,wood:180,hp:950,size:34},mill:{name:'Harvest Guild',gold:140,wood:100,hp:650,size:28},armory:{name:'Infantry Armory',gold:180,wood:140,hp:700,size:28},foundry:{name:'Artillery Foundry',gold:200,wood:160,hp:700,size:28}};
const units={worker:{gold:50,wood:0,hp:75,damage:4,range:22,speed:85,time:5},melee:{gold:70,wood:25,hp:180,damage:18,range:25,speed:80,time:6},ranged:{gold:90,wood:40,hp:105,damage:15,range:160,speed:80,time:7},sniper:{gold:140,wood:60,hp:65,damage:38,range:215,speed:70,time:9},siege:{gold:180,wood:110,hp:210,damage:65,range:260,speed:45,time:12},air:{gold:170,wood:100,hp:150,damage:23,range:140,speed:130,time:11},hero:{gold:250,wood:150,hp:500,damage:32,range:100,speed:85,time:15}};
const names={human:{worker:'Peasant',melee:'Dawn Knight',ranged:'Longbow Ranger',sniper:'Royal Marksman',siege:'Bombard',air:'Gryphon Rider',hero:'Sun Marshal'},horde:{worker:'Peon',melee:'Orc Ravager',ranged:'Troll Spearthrower',sniper:'Shadow Hunter',siege:'Rock Hewer',air:'Wyvern Rider',hero:'Stormcaller'}};
let faction='human',state=null,cam={x:0,y:0},keys={},selected=[],placement=null,commandMode=null,orderMarker=null,drag=null,mouse={x:0,y:0},last=0,paused=false,toastTimer=0,uid=0;
function toast(s){$('toast').textContent=s;$('toast').style.display='block';toastTimer=3;}
function entity(type,owner,x,y,building=false){const def=(building?buildings:units)[type];const e={id:++uid,type,owner,x,y,hp:def.hp,max:def.hp,building,size:building?def.size:type==='siege'?14:type==='hero'?13:9,cool:0,queue:[],order:null,facing:0,walkUntil:0,action:null,rally:null};state.entities.push(e);return e;}
function start(){const colors=[$('color').value,$('c1').value,$('c2').value];const count=$('ai2').value==='off'?2:3;if(new Set(colors.slice(0,count)).size!==count){toast('Choose different banner colors.');alert('Each player needs a different banner color.');return;}state={effects:[],entities:[],resources:[],players:[],seen:new Uint8Array(N*N),visible:new Uint8Array(N*N),time:0,count:3.6,ended:false,ai:0};selected=[];placement=null;commandMode=null;orderMarker=null;terrainLayer=null;paused=false;cam={x:0,y:0};$('pause').textContent='Ⅱ Pause';$('end').hidden=true;
const spots=[[250,300],[2080,2000],[2070,300]];for(let i=0;i<count;i++){state.players.push({faction:i===0?faction:$(i===1?'ai1':'ai2').value,color:colors[i],gold:650,wood:500,gather:0,infantry:0,artillery:0});const [x,y]=spots[i];entity('base',i,x,y,true);for(let w=0;w<4;w++)entity('worker',i,x-60+w*30,y+85);}
let seed=83;function rnd(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
for(let i=0;i<190;i++){const x=80+rnd()*2240,y=80+rnd()*2240;if(spots.some(p=>Math.hypot(p[0]-x,p[1]-y)<140))continue;state.resources.push({x,y,type:i%5===0?'gold':'wood',amount:i%5===0?4500:1000});}for(const [x,y] of spots){for(let n=0;n<9;n++)state.resources.push({x:x+160+n%3*35,y:y+80+Math.floor(n/3)*35,type:'wood',amount:1200});state.resources.push({x:x-110,y:y-100,type:'gold',amount:6000});}
$('menu').hidden=true;$('game').hidden=false;resize();fog();updateUI();}
document.querySelectorAll('.faction').forEach(el=>el.onclick=()=>{faction=el.dataset.faction;document.querySelectorAll('.faction').forEach(e=>e.classList.toggle('selected',e===el));});$('start').onclick=start;$('pause').onclick=()=>{paused=!paused;$('pause').textContent=paused?'▶ Resume':'Ⅱ Pause';};$('exit').onclick=()=>{state=null;$('game').hidden=true;$('menu').hidden=false;};
function resize(){canvas.width=canvas.clientWidth;canvas.height=canvas.clientHeight;}window.addEventListener('resize',resize);
function visible(x,y){return state.visible[Math.floor(y/CELL)*N+Math.floor(x/CELL)]===1;}
function fog(){state.visible.fill(0);for(const e of state.entities.filter(e=>e.owner===0&&e.hp>0)){const r=e.building?260:e.type==='air'?320:230;for(let y=Math.max(0,Math.floor((e.y-r)/CELL));y<Math.min(N,Math.ceil((e.y+r)/CELL));y++)for(let x=Math.max(0,Math.floor((e.x-r)/CELL));x<Math.min(N,Math.ceil((e.x+r)/CELL));x++)if(Math.hypot(x*CELL+20-e.x,y*CELL+20-e.y)<r){state.visible[y*N+x]=1;state.seen[y*N+x]=1;}}}
function pay(owner,g,w){const p=state.players[owner];if(p.gold<g||p.wood<w){if(owner===0)toast('Not enough gold or lumber.');return false;}p.gold-=g;p.wood-=w;return true;}
function train(b,type){const d=units[type];if(b.queue.length>=5){toast('Production queue full.');return;}if(type==='hero'&&state.entities.some(e=>e.owner===b.owner&&(e.type==='hero'||e.queue.some(q=>q.type==='hero')))){toast('Only one hero per faction.');return;}if(pay(b.owner,d.gold,d.wood))b.queue.push({type,left:d.time,total:d.time});updateUI();}
function upgrade(b,key){const p=state.players[b.owner],level=p[key];if(level>=3){toast('Maximum upgrade reached.');return;}if(pay(b.owner,120+level*90,90+level*70)){p[key]++;toast(key==='gather'?'Collectors gather faster.':key==='infantry'?'Infantry damage and armor improved.':'Artillery damage improved.');updateUI();}}
function build(type,x,y,owner=0){const d=buildings[type];if(x<d.size||y<d.size||x>SIZE-d.size||y>SIZE-d.size)return false;if(owner===0&&!visible(x,y)){toast('Build within explored, visible territory.');return false;}if(state.entities.some(e=>e.building&&Math.hypot(e.x-x,e.y-y)<e.size+d.size+25)||state.resources.some(e=>e.amount>0&&Math.hypot(e.x-x,e.y-y)<d.size+20)){if(owner===0)toast('Construction area is blocked.');return false;}if(pay(owner,d.gold,d.wood)){entity(type,owner,x,y,true);return true;}return false;}
function updateUI(){if(!state)return;selected=selected.filter(e=>e.hp>0);const p=state.players[0];$('resources').innerHTML=`<span>◆ <b>${Math.floor(p.gold)}</b> gold</span><span>♣ <b>${Math.floor(p.wood)}</b> lumber</span><span>⚑ ${state.entities.filter(e=>e.owner===0&&!e.building).length} troops</span>`;const e=selected[0];$('selectionTitle').textContent=e?(selected.length>1?selected.length+' units':e.building?buildings[e.type].name:names[p.faction][e.type]):'Your command awaits';$('selectionInfo').textContent=e?`${Math.ceil(e.hp)} / ${e.max} health${e.building&&buildings[e.type].damage?' · '+buildings[e.type].damage+' damage · '+buildings[e.type].range+' range':''}${e.type==='hero'?' · Aura radius 190 · '+(p.faction==='human'?'30% damage reduction':'30% attack bonus'):''}`:'Select a collector to construct buildings. Right click trees or gold to gather.';$('queue').textContent=e&&e.queue.length?'Training: '+e.queue.map(q=>names[p.faction][q.type]+' '+Math.ceil(q.left)+'s').join(' · '):'';const a=$('actions');a.innerHTML='';function button(label,cost,fn){const b=document.createElement('button');b.innerHTML=label+'<small>'+cost+'</small>';b.onclick=fn;a.appendChild(b);}if(!e)return;if(e.building&&['base','barracks','forge','roost','altar'].includes(e.type)){button('Set rally point','Click destination · right click',()=>{placement=null;commandMode='rally';toast('Click ground or a resource to set the rally point.');});if(e.rally)button('Clear rally point','New units stay at the building',()=>{e.rally=null;updateUI();});}if(!e.building){button('Move / command','Click destination · M',()=>{placement=null;commandMode='command';toast('Click ground to move, a resource to gather, or an enemy to attack.');});button('Stop','Cancel current orders',()=>{commandMode=null;selected.forEach(s=>s.order=null);});button('Hold position','Attack enemies in range',()=>{commandMode=null;selected.forEach(s=>s.order={kind:'hold'});});}if(e.type==='worker')for(const [type,d] of Object.entries(buildings)){if(type==='base')continue;button(d.name,`${d.gold} gold · ${d.wood} lumber`,()=>{commandMode=null;placement=type;toast('Click a clear area to construct '+d.name+'.');});}if(e.building){const options={base:['worker'],barracks:['melee','ranged','sniper'],forge:['siege'],roost:['air'],altar:['hero']}[e.type]||[];for(const t of options)button(names[p.faction][t],`${units[t].gold} gold · ${units[t].wood} lumber`,()=>train(e,t));const key={mill:'gather',armory:'infantry',foundry:'artillery'}[e.type];if(key)button('Upgrade '+(key==='gather'?'harvesting':key)+' '+(p[key]+1),p[key]>=3?'MAX LEVEL':`${120+p[key]*90} gold · ${90+p[key]*70} lumber`,()=>upgrade(e,key));}}
function point(ev){const r=canvas.getBoundingClientRect();return{x:ev.clientX-r.left+cam.x,y:ev.clientY-r.top+cam.y};}
function issueCommand(p){
 const producers=selected.filter(e=>e.building&&['base','barracks','forge','roost','altar'].includes(e.type));
 if(producers.length&&(commandMode==='rally'||!selected.some(e=>!e.building))){const resource=state.resources.find(r=>r.amount>0&&visible(r.x,r.y)&&Math.hypot(r.x-p.x,r.y-p.y)<30);producers.forEach(e=>e.rally={x:Math.max(10,Math.min(SIZE-10,p.x)),y:Math.max(10,Math.min(SIZE-10,p.y)),resource:resource||null});orderMarker={x:p.x,y:p.y,left:1};commandMode=null;toast('Rally point set. New troops will go here.');updateUI();return;}
 const troops=selected.filter(e=>!e.building&&e.hp>0);
 if(!troops.length){toast('Select a unit first, then choose a destination.');return;}
 const target=state.entities.find(e=>e.owner!==0&&visible(e.x,e.y)&&Math.hypot(e.x-p.x,e.y-p.y)<e.size+12);
 const resource=state.resources.find(r=>r.amount>0&&visible(r.x,r.y)&&Math.hypot(r.x-p.x,r.y-p.y)<30);
 troops.forEach((e,i)=>{e.action=null;e.order=target?{kind:'attack',target}:e.type==='worker'&&resource?{kind:'gather',target:resource}:{kind:'move',x:Math.max(10,Math.min(SIZE-10,p.x+(i%5)*20)),y:Math.max(10,Math.min(SIZE-10,p.y+Math.floor(i/5)*20))};});
 orderMarker={x:p.x,y:p.y,left:1};commandMode=null;placement=null;
 toast(target?'Attack order issued.':resource&&troops.some(e=>e.type==='worker')?'Gather order issued.':'Move order issued.');
}
canvas.onpointerdown=ev=>{if(!state||state.count>0||state.ended)return;if(paused){toast('Resume the game to issue orders.');return;}const p=point(ev);mouse=p;if(ev.button===0){if(commandMode){issueCommand(p);return;}if(placement){if(build(placement,p.x,p.y))placement=null;updateUI();return;}drag={x:p.x,y:p.y,shift:ev.shiftKey};canvas.setPointerCapture?.(ev.pointerId);}if(ev.button===2){ev.preventDefault();issueCommand(p);}};
canvas.onpointermove=ev=>{mouse=point(ev);};canvas.onpointerup=ev=>{if(ev.button!==0||!drag)return;const p=point(ev),box=Math.hypot(p.x-drag.x,p.y-drag.y)>8;const picked=state.entities.filter(e=>e.owner===0&&(box?e.x>=Math.min(p.x,drag.x)&&e.x<=Math.max(p.x,drag.x)&&e.y>=Math.min(p.y,drag.y)&&e.y<=Math.max(p.y,drag.y)&&!e.building:hitFriendly(e,p)));selected=drag.shift?[...new Set([...selected,...picked])]:box?picked:picked.slice(-1);drag=null;updateUI();};function hitFriendly(e,p){return e.building?Math.hypot(e.x-p.x,e.y-p.y)<e.size+10:Math.abs(e.x-p.x)<=e.size+12&&p.y>=e.y-35&&p.y<=e.y+20;}
canvas.ondblclick=ev=>{if(!state||state.count>0||state.ended||placement||commandMode)return;const p=point(ev);const unit=state.entities.filter(e=>e.owner===0&&!e.building&&e.hp>0&&hitFriendly(e,p)).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0];if(!unit)return;const same=state.entities.filter(e=>e.owner===0&&!e.building&&e.hp>0&&e.type===unit.type);selected=ev.shiftKey?[...new Set([...selected,...same])]:same;drag=null;toast('Selected all '+same.length+' '+names[state.players[0].faction][unit.type]+' units.');updateUI();};
canvas.oncontextmenu=e=>e.preventDefault();window.onkeydown=e=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key)&&state)e.preventDefault();keys[e.key.toLowerCase()]=true;if(e.key.toLowerCase()==='m'&&state&&selected.some(s=>!s.building)){placement=null;commandMode='command';toast('Click a destination to issue an order.');}if(e.key==='Escape'){placement=null;commandMode=null;drag=null;}};window.onkeyup=e=>keys[e.key.toLowerCase()]=false;window.onblur=()=>{keys={};drag=null;};mini.onmousedown=ev=>{if(!state)return;const r=mini.getBoundingClientRect();cam.x=(ev.clientX-r.left)/r.width*SIZE-canvas.width/2;cam.y=(ev.clientY-r.top)/r.height*SIZE-canvas.height/2;clampCam();};
function clampCam(){cam.x=Math.max(0,Math.min(SIZE-canvas.width,cam.x));cam.y=Math.max(0,Math.min(SIZE-canvas.height,cam.y));}
function move(e,x,y,dt){const d=Math.hypot(x-e.x,y-e.y),step=units[e.type].speed*dt;if(d>3){e.facing=Math.atan2(y-e.y,x-e.x);e.walkUntil=state.time+.12;e.x+=((x-e.x)/d)*Math.min(step,d);e.y+=((y-e.y)/d)*Math.min(step,d);e.x=Math.max(10,Math.min(SIZE-10,e.x));e.y=Math.max(10,Math.min(SIZE-10,e.y));}return d;}
function ai(){for(let i=1;i<state.players.length;i++){const p=state.players[i],es=state.entities.filter(e=>e.owner===i),base=es.find(e=>e.type==='base');if(!base)continue;for(const w of es.filter(e=>e.type==='worker'&&!e.order)){const rs=state.resources.filter(r=>r.amount>0&&r.type===(p.gold<p.wood?'gold':'wood')).sort((a,b)=>Math.hypot(a.x-w.x,a.y-w.y)-Math.hypot(b.x-w.x,b.y-w.y));if(rs[0])w.order={kind:'gather',target:rs[0]};}if(es.filter(e=>e.type==='worker').length<7&&!base.queue.length)train(base,'worker');const order=['barracks','tower','mill','armory','forge','altar','roost','bastion','foundry'];const missing=order.find(t=>!es.some(e=>e.type===t));if(missing){const a=(state.time+i)*2.4;build(missing,base.x+Math.cos(a)*180,base.y+Math.sin(a)*180,i);}for(const b of es.filter(e=>e.building&&!e.queue.length)){const opts={barracks:['melee','ranged','sniper'],forge:['siege'],roost:['air'],altar:['hero']}[b.type];if(opts){const t=opts[Math.floor(Math.random()*opts.length)];if(t!=='hero'||!es.some(e=>e.type==='hero'))train(b,t);}}if(state.time>65){const target=state.entities.find(e=>e.owner!==i&&e.type==='base');const army=es.filter(e=>!e.building&&e.type!=='worker');if(target&&army.length>=5)army.forEach(e=>{if(!e.order||e.order.kind==='hold')e.order={kind:'attack',target};});}for(const [t,k] of [['mill','gather'],['armory','infantry'],['foundry','artillery']])if(p.gold>550&&p.wood>400&&p[k]<3&&es.some(e=>e.type===t)){p.gold-=200;p.wood-=160;p[k]++;}}}
function tick(dt){state.time+=dt;updateEffects(dt);state.ai-=dt;if(state.ai<=0){ai();state.ai=4;}for(const e of [...state.entities]){if(e.hp<=0)continue;e.cool-=dt;if(e.shot)e.shot.left-=dt;if(e.action&&e.action.until<=state.time)e.action=null;if(e.building){defenseAttack(e);if(e.queue.length){const q=e.queue[0];q.left-=dt;if(q.left<=0){const troop=entity(q.type,e.owner,e.x+e.size+20,e.y+e.size+20);if(e.rally){troop.order=q.type==='worker'&&e.rally.resource?.amount>0?{kind:'gather',target:e.rally.resource}:{kind:'move',x:e.rally.x,y:e.rally.y};}e.queue.shift();}}continue;}const d=units[e.type],p=state.players[e.owner];let o=e.order;if(o&&o.kind==='gather'){const r=o.target;if(r.amount<=0)e.order=null;else if(Math.hypot(r.x-e.x,r.y-e.y)>23){move(e,r.x,r.y,dt);}else{e.facing=Math.atan2(r.y-e.y,r.x-e.x);if(!e.action){e.action={kind:'gather',resource:r.type,duration:.8,until:state.time+.8};}if(!e.action.emitted&&state.time>=e.action.until-e.action.duration*.5){burst(r.x,r.y,r.type,e.owner);e.action.emitted=true;}const n=Math.min(r.amount,dt*11*(1+p.gather*.4));r.amount-=n;p[r.type==='gold'?'gold':'wood']+=n;}continue;}let target=o&&o.kind==='attack'&&o.target.hp>0?o.target:null;if(!target&&e.type!=='worker'){target=state.entities.filter(t=>t.owner!==e.owner&&t.hp>0&&(e.owner!==0||visible(t.x,t.y))&&Math.hypot(t.x-e.x,t.y-e.y)<(o&&o.kind==='hold'?d.range+ t.size:250)).sort((a,b)=>Math.hypot(a.x-e.x,a.y-e.y)-Math.hypot(b.x-e.x,b.y-e.y))[0];}if(target){e.facing=Math.atan2(target.y-e.y,target.x-e.x);const distance=Math.hypot(target.x-e.x,target.y-e.y);if(distance>d.range+target.size){if(!o||o.kind!=='hold')move(e,target.x,target.y,dt);}else if(e.cool<=0){let damage=d.damage*(1+(e.type==='siege'?p.artillery:['melee','ranged','sniper'].includes(e.type)?p.infantry:0)*.2);const heroes=state.entities.filter(h=>h.type==='hero'&&h.hp>0);if(p.faction==='horde'&&heroes.some(h=>h.owner===e.owner&&Math.hypot(h.x-e.x,h.y-e.y)<190))damage*=1.3;const enemy=state.players[target.owner];if(!target.building&&enemy.faction==='human'&&heroes.some(h=>h.owner===target.owner&&Math.hypot(h.x-target.x,h.y-target.y)<190))damage*=.7;if(['melee','ranged','sniper'].includes(target.type))damage*=1-enemy.infantry*.08;target.hp-=damage;target.hitUntil=state.time+.2;e.cool=e.type==='siege'?2.4:e.type==='sniper'?1.7:1;e.action={kind:'attack',duration:.55,until:state.time+.55};burst(target.x,target.y,e.type==='siege'?'blast':e.type==='hero'||e.type==='air'?'magic':'hit',e.owner,['melee','worker'].includes(e.type)?.12:e.type==='siege'?.65:.35);if(e.type==='sniper'||e.type==='siege')burst(e.x,e.y,'smoke',e.owner);if(!['melee','worker'].includes(e.type)){const duration=e.type==='siege'?.65:.35;e.shot={x:target.x,y:target.y,fromX:e.x,fromY:e.y,left:duration,duration};}if(e.type==='siege')for(const t of state.entities)if(t!==target&&t.owner!==e.owner&&Math.hypot(t.x-target.x,t.y-target.y)<65)t.hp-=damage*.35;}}else if(o&&o.kind==='move'){if(move(e,o.x,o.y,dt)<6)e.order=null;}else if(o&&o.kind==='attack'&&o.target.hp<=0)e.order=null;}
state.entities=state.entities.filter(e=>e.hp>0);fog();const alive=state.players.map((p,i)=>state.entities.some(e=>e.owner===i&&e.type==='base'));if(!alive[0]||alive.slice(1).every(v=>!v)){state.ended=true;$('end').hidden=false;$('end').innerHTML=alive[0]?'VICTORY<br><small style="font:16px Inter">The wilds belong to your banner.</small>':'DEFEAT<br><small style="font:16px Inter">Your stronghold has fallen.</small>';}}
function drawEntity(e){const p=state.players[e.owner],horde=p.faction==='horde';ctx.save();ctx.translate(e.x,e.y);if(e.type==='hero'){ctx.beginPath();ctx.arc(0,0,190,0,Math.PI*2);ctx.fillStyle=p.color+'10';ctx.fill();ctx.strokeStyle=p.color+'44';ctx.setLineDash([5,8]);ctx.stroke();ctx.setLineDash([]);}ctx.fillStyle='#0005';ctx.beginPath();ctx.ellipse(3,8,e.size+5,e.size*.6,0,0,7);ctx.fill();ctx.strokeStyle='#142219';ctx.lineWidth=2;if(selected.includes(e)){ctx.strokeStyle='#dce9b3';ctx.beginPath();ctx.ellipse(0,5,e.size+9,e.size*.7+7,0,0,7);ctx.stroke();}if(e.building&&buildings[e.type].damage){drawDefense(e,p,horde);}else if(e.building){drawBuilding(e,p,horde);}else{drawUnit(e,p,horde);}if(e.hp<e.max||selected.includes(e)){ctx.fillStyle='#17241a';ctx.fillRect(-e.size,-e.size-22,e.size*2,4);ctx.fillStyle=e.hp/e.max>.35?'#8ec86a':'#e06b55';ctx.fillRect(-e.size,-e.size-22,e.size*2*Math.max(0,e.hp/e.max),4);}ctx.restore();drawShot(e,p);}
// Procedural sprite details remain crisp at battlefield scale; all animation uses simulation time.
function drawUnit(e,p,horde){
 const time=state.time,walking=e.walkUntil>time,phase=time*10+e.id,step=walking?Math.sin(phase)*3:0;
 const active=e.action&&e.action.until>time?e.action:null;
 const progress=active?1-(active.until-time)/active.duration:0;
 const swing=active?Math.sin(progress*Math.PI):0;
 const face=Math.cos(e.facing||0)<0?-1:1;
 function poly(points,fill,stroke='#17221e'){ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();}}
 function line(x,y,x2,y2,color,width=2){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.stroke();}
 function oval(x,y,rx,ry,fill){ctx.fillStyle=fill;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();}
 ctx.save();ctx.scale(face*1.16,1.16);if(e.hitUntil>time){ctx.shadowColor='#ffe7b0';ctx.shadowBlur=9;}
 if(e.type==='siege'){
  const recoil=active?swing*5:0;
  poly([[-19,-8],[13,-12],[22,9],[-15,15]],'#65513a');
  for(let i=0;i<5;i++){ctx.fillStyle='#b99b6a';ctx.fillRect(-12+i*6,-7,2,2);}for(let y=-5;y<13;y+=5)line(-15,y,16,y-3,'#9c7950',1);
  for(const x of [-17,16]){oval(x,7,5,11,'#252a24');oval(x,7,2,7,'#8a8974');line(x,0,x,14,'#c0b292',1);}
  ctx.fillStyle=p.color;ctx.fillRect(-10,5,22,4);
  ctx.save();ctx.rotate((e.facing||0)+(face<0?Math.PI:0));
  if(horde){line(-9,0,16-recoil,0,'#b58c58',5);line(-5,-10,10,12,'#443c2b',3);oval(16-recoil,0,7,6,'#aca48b');line(-9,-8,0,8,'#d1bc87',1);}
  else{poly([[-9,-8],[23-recoil,-5],[23-recoil,5],[-9,8]],'#617579');line(-6,-5,18-recoil,-3,'#b3c6c3',2);oval(23-recoil,0,3,5,'#1a2327');ctx.fillStyle='#c9ac64';ctx.fillRect(-5,-9,3,18);}
  if(active&&!horde){poly([[23,-3],[33,-7],[30,0],[36,3],[24,5]],'#ffe8a0',null);}
  ctx.restore();ctx.restore();return;
 }
 if(e.type==='air'){
  const flap=Math.sin(time*7+e.id),lift=flap*9;
  const wing=horde?'#728b53':'#d5c9a3';
  poly([[-4,0],[-17,-16-lift],[-35,-8-lift],[-27,6],[-9,9]],wing);
  poly([[4,0],[17,-16-lift],[35,-8-lift],[27,6],[9,9]],wing);
  for(const side of [-1,1])for(let n=0;n<4;n++)line(side*8,3,side*(18+n*4),-8-lift+n*3,horde?'#405e38':'#938b74',1);
  oval(0,5,9,18,horde?'#526f43':'#9d805c');
  for(let y=-2;y<16;y+=4)line(-5,y,5,y+1,horde?'#a1b977':'#c5a779',1);poly([[-5,15],[0,31],[7,22],[4,12]],horde?'#668947':'#b39a6c');
  oval(6,-9,8,6,horde?'#88a960':'#e0d6b6');poly([[11,-11],[21,-7],[12,-4]],horde?'#afc384':'#c6a455');
  oval(9,-11,1.4,1.4,'#f5dc78');line(-3,12,-10,20,'#31291d',2);line(5,12,12,20,'#31291d',2);
 }
 const bob=walking?Math.abs(Math.sin(phase))*1.7:Math.sin(time*2+e.id)*.5;
 ctx.translate(0,-bob-(e.type==='air'?8:0));
 const troll=horde&&['ranged','sniper'].includes(e.type),skin=horde?(troll?'#76a9a0':'#91a465'):'#e0b88e';
 const armor=e.type==='melee'||e.type==='hero';
 // Boots, gait, tabard, belts, plate seams and leather stitching.
 line(-5,5,-6+step,16,'#30291f',5);line(5,5,6-step,16,'#30291f',5);
 line(-7+step,16,-2+step,16,'#a49065',2);line(4-step,16,9-step,16,'#a49065',2);
 if(e.type==='sniper'||e.type==='hero')poly([[-9,-9],[-13,14],[0,10],[12,15],[9,-9]],e.type==='hero'?(horde?'#663f38':'#385066'):(horde?'#42384c':'#314738'));
 poly([[-8,-10],[8,-10],[11,6],[6,10],[-7,10],[-11,5]],armor?(horde?'#6f7766':'#91a3ab'):e.type==='worker'?'#b79865':p.color);
 ctx.fillStyle=p.color;ctx.fillRect(-4,-7,8,16);line(-2,-6,-2,7,'#f3efd055',1);line(3,-5,3,8,'#102e2944',1);
 if(armor){for(let y=-5;y<7;y+=4)line(-9,y,9,y,'#c3cdc0',.7);oval(-10,-6,5,4,horde?'#77796a':'#b6c2c0');oval(10,-6,5,4,horde?'#77796a':'#b6c2c0');if(horde)for(const x of [-12,12])poly([[x-2,-9],[x,-16],[x+3,-9]],'#d6c8a2');}
 else{for(let y=-4;y<8;y+=4){line(-8,y,-6,y+1,'#dfcba3',1);line(6,y,8,y+1,'#dfcba3',1);}}
 if(e.type==='worker'){poly([[-6,0],[5,0],[6,11],[-7,11]],'#705c42');line(-4,2,3,2,'#d2b282',1);line(-4,5,3,5,'#d2b282',1);}if(e.type==='ranged'){poly([[-11,-8],[-8,-8],[-5,8],[-9,9]],'#67513b');for(let i=0;i<3;i++)line(-10+i,-8,-13+i,-16,'#ddd8b8',1);}if(e.type==='sniper'){line(-8,-4,7,3,'#b2a781',2);ctx.fillStyle='#79664a';ctx.fillRect(-11,4,5,6);ctx.fillRect(7,4,5,6);}if(armor){for(let x of [-7,7])for(let y of [-7,0,7])oval(x,y,.9,.9,'#ecddaf');}line(-9,5,9,5,'#433327',3);ctx.fillStyle='#dfbf74';ctx.fillRect(-2,3,4,4);
 oval(0,-15,troll?5:6,troll?8:6,skin);oval(-3,-16,1,1,'#1d2b25');oval(3,-16,1,1,'#1d2b25');line(-2,-12,3,-12,horde?'#e3d7b2':'#925c44',1);
 if(horde){poly([[-5,-16],[-12,-19],[-6,-11]],skin);poly([[5,-16],[12,-19],[6,-11]],skin);if(!troll){poly([[-4,-12],[-4,-8],[-1,-11]],'#efe4c8');poly([[4,-12],[4,-8],[1,-11]],'#efe4c8');}line(-3,-22,1,-26,'#473c32',3);}
 else if(armor){poly([[-7,-15],[-7,-21],[0,-25],[7,-21],[7,-15]],'#aeb9b8');line(-5,-20,5,-20,'#e6e5ce',1);line(0,-25,0,-15,'#6b818b',1);}
 else if(e.type==='worker'){poly([[-7,-19],[-5,-24],[4,-24],[8,-19]],'#a8935c');line(-9,-19,10,-19,'#d4bf85',2);}
 else if(e.type==='sniper'){poly([[-8,-15],[-8,-23],[0,-27],[8,-23],[8,-15],[4,-20],[-4,-20]],horde?'#4c3a59':'#314536');}
 if(e.type==='hero'){line(-4,-7,4,2,'#d6ba6a',2);line(4,-7,-4,2,'#d6ba6a',2);oval(0,-3,2,2,'#f6e0a2');poly([[-7,-23],[-8,-30],[-3,-26],[0,-32],[4,-26],[8,-30],[7,-23]],'#e3c46c');oval(0,-25,1.5,1.5,p.color);}
 if(e.type==='melee'&&!horde){poly([[-19,-7],[-10,-8],[-9,5],[-14,11],[-20,5]],'#7a909b');line(-15,-6,-15,8,p.color,3);line(-19,0,-11,0,'#e3d5ab',1);}
 // Weapon arm pivots through a complete stroke, synchronized to actual work/attacks.
 ctx.save();ctx.translate(10,-5);
 let angle=active?(e.type==='worker'||e.type==='melee'?-1.3+swing*2.2:e.type==='ranged'?-.35+swing*.5:e.type==='hero'?-.6+swing*1.2:0):-.2;
 ctx.rotate(angle);line(0,0,7,5,skin,4);oval(7,5,2.5,2.5,skin);
 const resource=active?.kind==='gather'?active.resource:e.order?.kind==='gather'?e.order.target.type:null;
 if(e.type==='worker'){
  line(7,8,7,-19,'#9d754b',3);line(6,-17,6,5,'#d0aa72',1);
  if(resource==='gold'){line(-1,-17,17,-17,'#c5c9c0',3);line(17,-17,21,-12,'#8d9fa3',2);}
  else poly([[7,-20],[18,-23],[19,-12],[7,-15]],'#b8c7c7');
 }else if(e.type==='melee'){
  line(7,8,7,-18,'#81603e',3);
  if(horde)poly([[7,-24],[21,-26],[24,-15],[7,-13]],'#a9b8ad');
  else{poly([[5,-12],[5,-28],[7,-33],[10,-28],[10,-12]],'#d8e0d8');line(0,-11,15,-11,'#e2bc64',3);line(7,-28,7,-13,'#faffed',1);oval(7,-9,1,1,'#73c1d2');}
 }else if(e.type==='ranged'){
  if(horde){line(5,10,11,-27,'#b8955b',2);poly([[9,-27],[13,-35],[15,-25]],'#d6dcd0');}
  else{ctx.strokeStyle='#c5a06c';ctx.lineWidth=2;ctx.beginPath();ctx.arc(7,1,15,-1.3,1.3);ctx.stroke();line(11,-13,active?2-swing*7:11,1,'#f0ddab',1);line(active?2-swing*7:11,1,11,15,'#f0ddab',1);line(-5,1,20,1,'#cec9a6',1);}
 }else if(e.type==='sniper'){
  if(horde){line(-4,7,18,-12,'#a59ad0',3);poly([[15,-13],[26,-23],[23,-9]],'#c4dbac');}
  else{const recoil=swing*4;line(-5-recoil,6,23-recoil,-4,'#55696c',5);line(8-recoil,-1,23-recoil,-4,'#c6cac0',1);ctx.fillStyle='#997345';ctx.fillRect(-7-recoil,4,9,4);if(active&&progress<.45)poly([[23,-4],[31,-10],[29,-4],[34,-1],[24,0]],'#ffe5a0',null);}
 }else if(e.type==='hero'){
  line(7,15,7,-24,'#a88a56',3);if(horde){poly([[7,-31],[0,-23],[7,-15],[14,-23]],'#8cdaca');oval(7,-23,3+swing*3,3+swing*3,'#e4f9c6');}else{poly([[5,-17],[5,-31],[7,-36],[10,-31],[10,-17]],'#f3dda0');line(0,-16,15,-16,'#d5a944',3);}
 }else if(e.type==='air')line(7,12,14,-19,'#dbc28a',2);
 ctx.restore();
 if(active&&['melee','hero','worker'].includes(e.type)){ctx.save();ctx.globalAlpha=(1-progress)*.75;ctx.strokeStyle=e.type==='hero'?'#ffe7a0':active.resource==='gold'?'#b6e9f7':'#eef0cd';ctx.lineWidth=3;ctx.beginPath();ctx.arc(10,-5,25,-2+progress*2,.2+progress*2);ctx.stroke();ctx.restore();}
 if(active&&['worker','melee'].includes(e.type)&&progress>.35&&progress<.85){ctx.strokeStyle=active.resource==='gold'?'#ffe3a0':'#d3bc8d';ctx.lineWidth=1;for(let i=0;i<5;i++){const x=19+(progress-.35)*25;line(x,0,x+Math.cos(i*1.9)*8,-5+Math.sin(i*1.9)*8,ctx.strokeStyle,1);}}
 ctx.restore();
}
function drawShot(e,p){
 const s=e.shot;if(!s||s.left<=0)return;
 const t=1-s.left/s.duration,dx=s.x-s.fromX,dy=s.y-s.fromY;
 const x=s.fromX+dx*t,y=s.fromY+dy*t-((e.type==='siege'||e.type==='bastion')?Math.sin(t*Math.PI)*45:0);
 ctx.save();ctx.translate(x,y);ctx.rotate(Math.atan2(dy,dx));ctx.lineWidth=2;
 if(e.type==='siege'||e.type==='bastion'){ctx.fillStyle=state.players[e.owner].faction==='horde'?'#b2aa8b':'#343b3b';ctx.beginPath();ctx.arc(0,0,5,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#edc88c';ctx.beginPath();ctx.moveTo(-14,0);ctx.lineTo(-6,0);ctx.stroke();}
 else if(e.type==='hero'||e.type==='air'||(e.type==='sniper'&&state.players[e.owner].faction==='horde')){ctx.fillStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=8;ctx.beginPath();ctx.arc(0,0,4,0,Math.PI*2);ctx.fill();}
 else{ctx.strokeStyle=e.type==='sniper'?'#ffe4a0':'#dcc39a';ctx.beginPath();ctx.moveTo(-12,0);ctx.lineTo(5,0);ctx.stroke();ctx.fillStyle='#e9e4cd';ctx.beginPath();ctx.moveTo(8,0);ctx.lineTo(2,-3);ctx.lineTo(2,3);ctx.fill();}
 ctx.restore();
}

function render(){ctx.fillStyle='#314532';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.translate(-cam.x,-cam.y);drawTerrain();for(const r of state.resources){if(r.amount>0&&state.seen[Math.floor(r.y/CELL)*N+Math.floor(r.x/CELL)])drawResource(r);}for(const e of state.entities.filter(e=>e.owner===0||visible(e.x,e.y)).sort((a,b)=>a.y-b.y))drawEntity(e);drawEffects();for(let y=Math.max(0,Math.floor(cam.y/CELL));y<Math.min(N,Math.ceil((cam.y+canvas.height)/CELL));y++)for(let x=Math.max(0,Math.floor(cam.x/CELL));x<Math.min(N,Math.ceil((cam.x+canvas.width)/CELL));x++){const i=y*N+x;if(!state.visible[i]){ctx.fillStyle=state.seen[i]?'#0b161c99':'#0b1417';ctx.fillRect(x*CELL,y*CELL,CELL+1,CELL+1);}}for(const e of selected.filter(e=>e.building&&e.rally)){ctx.strokeStyle=state.players[e.owner].color;ctx.setLineDash([5,6]);ctx.beginPath();ctx.moveTo(e.x,e.y);ctx.lineTo(e.rally.x,e.rally.y);ctx.stroke();ctx.setLineDash([]);ctx.strokeStyle='#eed7a0';ctx.beginPath();ctx.moveTo(e.rally.x,e.rally.y+8);ctx.lineTo(e.rally.x,e.rally.y-23);ctx.stroke();ctx.fillStyle=state.players[e.owner].color;ctx.beginPath();ctx.moveTo(e.rally.x,e.rally.y-23);ctx.lineTo(e.rally.x+20,e.rally.y-17);ctx.lineTo(e.rally.x,e.rally.y-10);ctx.fill();}if(placement){ctx.strokeStyle='#c7dc9d';ctx.fillStyle='#c7dc9d33';const s=buildings[placement].size;ctx.fillRect(mouse.x-s,mouse.y-s,s*2,s*2);ctx.strokeRect(mouse.x-s,mouse.y-s,s*2,s*2);}if(orderMarker&&orderMarker.left>0){ctx.strokeStyle='#e2e9ac';ctx.lineWidth=2;ctx.beginPath();ctx.arc(orderMarker.x,orderMarker.y,10+(1-orderMarker.left)*15,0,Math.PI*2);ctx.stroke();}if(drag){ctx.fillStyle='#aeeaba22';ctx.strokeStyle='#c6eec1';ctx.fillRect(drag.x,drag.y,mouse.x-drag.x,mouse.y-drag.y);ctx.strokeRect(drag.x,drag.y,mouse.x-drag.x,mouse.y-drag.y);}ctx.restore();mc.fillStyle='#081216';mc.fillRect(0,0,210,150);for(let y=0;y<N;y++)for(let x=0;x<N;x++){const i=y*N+x;if(state.seen[i]){mc.fillStyle=state.visible[i]?'#456044':'#29352d';mc.fillRect(x*210/N,y*150/N,210/N+1,150/N+1);}}for(const e of state.entities){if(e.owner!==0&&!visible(e.x,e.y))continue;mc.fillStyle=e.owner===0?state.players[0].color:'#ff514a';mc.beginPath();mc.arc(e.x/SIZE*210,e.y/SIZE*150,e.building?3:1.7,0,7);mc.fill();}mc.strokeStyle='#f5e8b5';mc.lineWidth=1;mc.strokeRect(cam.x/SIZE*210,cam.y/SIZE*150,canvas.width/SIZE*210,canvas.height/SIZE*150);}
let uiTime=0;function frame(t){const dt=Math.min(.05,(t-last)/1000||0);last=t;if(state){canvas.style.cursor=commandMode?'crosshair':placement?'crosshair':'default';if(orderMarker)orderMarker.left-=dt;if(toastTimer>0){toastTimer-=dt;if(toastTimer<=0)$('toast').style.display='none';}if(state.count>0){state.count-=dt;$('countdown').textContent=Math.ceil(state.count)<=3?Math.max(1,Math.ceil(state.count)):'';if(state.count<=0){$('countdown').textContent='';toast('Gather resources. Raise an army. Destroy enemy strongholds.');}}else if(!paused&&!state.ended){cam.x+=((keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0))*500*dt;cam.y+=((keys.s||keys.arrowdown?1:0)-(keys.w||keys.arrowup?1:0))*500*dt;clampCam();tick(dt);}uiTime+=dt;if(uiTime>.3){updateUI();uiTime=0;}render();}requestAnimationFrame(frame);}requestAnimationFrame(frame);

function burst(x,y,kind,owner,delay=0){
 const palette={wood:['#bd9256','#e0bb79','#7e6040'],gold:['#fff0b5','#e9bd48','#c7d8de'],hit:['#fff0b0','#f2aa6a','#ded7b2'],smoke:['#b7afa0','#8b928b','#616f69'],magic:['#a9f1df','#daf9af','#79c5ee'],blast:['#fff0b3','#efad58','#8e8d80'],dust:['#98876c','#c1b08c']}[kind]||['#efdd9d'];
 const count=kind==='blast'?20:kind==='smoke'?8:kind==='dust'?3:10;
 for(let i=0;i<count;i++){const a=i*2.399+state.time,speed=(kind==='blast'?75:40)+(i%4)*12;
  state.effects.push({x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed-25,kind,color:palette[i%palette.length],age:-delay,life:kind==='smoke'?1:.65+(i%3)*.1,owner,size:kind==='smoke'?4:kind==='blast'?3:2});}
 if(state.effects.length>650)state.effects.splice(0,state.effects.length-650);
}
function updateEffects(dt){for(const f of state.effects){f.age+=dt;if(f.age>=0){f.x+=f.vx*dt;f.y+=f.vy*dt;if(f.kind!=='smoke')f.vy+=85*dt;else f.vy-=8*dt;}}state.effects=state.effects.filter(f=>f.age<f.life);}
function drawEffects(){for(const f of state.effects){if(f.age<0||!visible(f.x,f.y))continue;ctx.save();ctx.globalAlpha=Math.max(0,1-f.age/f.life);ctx.fillStyle=f.color;if(f.kind==='smoke'){ctx.beginPath();ctx.arc(f.x,f.y,f.size+f.age*10,0,Math.PI*2);ctx.fill();}else{ctx.translate(f.x,f.y);ctx.rotate(f.age*6);ctx.fillRect(-f.size/2,-f.size/2,f.size,f.kind==='wood'?f.size*2:f.size);}ctx.restore();}}
function defenseAttack(e){const d=buildings[e.type];if(!d.damage||e.cool>0)return;
 const target=state.entities.filter(t=>t.owner!==e.owner&&t.hp>0&&Math.hypot(t.x-e.x,t.y-e.y)<=d.range&&(e.owner!==0||visible(t.x,t.y))).sort((a,b)=>Math.hypot(a.x-e.x,a.y-e.y)-Math.hypot(b.x-e.x,b.y-e.y))[0];
 if(!target)return;
 e.facing=Math.atan2(target.y-e.y,target.x-e.x);e.cool=d.reload;e.action={kind:'attack',duration:.55,until:state.time+.55};
 const duration=e.type==='bastion'?.65:.35;e.shot={fromX:e.x,fromY:e.y-e.size,x:target.x,y:target.y,left:duration,duration};
 const victims=d.splash?state.entities.filter(t=>t.owner!==e.owner&&t.hp>0&&Math.hypot(t.x-target.x,t.y-target.y)<=d.splash):[target];
 for(const t of victims){let amount=d.damage*(t===target?1:.4),p=state.players[t.owner];if(!t.building&&p.faction==='human'&&state.entities.some(h=>h.owner===t.owner&&h.type==='hero'&&h.hp>0&&Math.hypot(h.x-t.x,h.y-t.y)<190))amount*=.7;if(['melee','ranged','sniper'].includes(t.type))amount*=1-p.infantry*.08;t.hp-=amount;t.hitUntil=state.time+.2;}
 burst(e.x,e.y-e.size,e.type==='bastion'?'smoke':'magic',e.owner);burst(target.x,target.y,e.type==='bastion'?'blast':'hit',e.owner,duration);
}
function drawDefense(e,p,horde){
 const s=e.size;ctx.lineWidth=1.5;ctx.strokeStyle='#202820';ctx.fillStyle=horde?'#564739':'#879591';
 ctx.fillRect(-s*.7,-s*1.7,s*1.4,s*2.4);ctx.strokeRect(-s*.7,-s*1.7,s*1.4,s*2.4);
 // Stone courses or timber planks with joints, rivets and faction banners.
 ctx.strokeStyle=horde?'#b08958':'#bbc3b6';for(let y=-s*1.5;y<s*.6;y+=8){ctx.beginPath();ctx.moveTo(-s*.7,y);ctx.lineTo(s*.7,y);ctx.stroke();if(!horde){ctx.beginPath();ctx.moveTo((Math.round(y/8)%2)*10-5,y);ctx.lineTo((Math.round(y/8)%2)*10-5,y+8);ctx.stroke();}}
 ctx.fillStyle=horde?'#867150':'#adbbb3';ctx.fillRect(-s,-s*1.8,s*2,10);for(let x=-s;x<s;x+=12)ctx.fillRect(x,-s*2.1,7,10);
 ctx.fillStyle=p.color;ctx.fillRect(-5,-s*1.45,10,22);ctx.fillStyle='#e8d8a6';ctx.fillRect(-1,-s*1.4,2,14);
 ctx.fillStyle='#182321';ctx.fillRect(-4,-s*.35,8,15);
 if(horde){for(const sign of [-1,1]){ctx.fillStyle='#d6c49a';ctx.beginPath();ctx.moveTo(sign*s,-s*1.8);ctx.lineTo(sign*(s+6),-s*2.5);ctx.lineTo(sign*(s+3),-s*1.7);ctx.fill();}}
 ctx.save();ctx.translate(0,-s*1.6);ctx.rotate(e.facing||0);ctx.fillStyle=e.type==='bastion'?'#384c50':'#8b6d43';ctx.fillRect(-7,-4,27,8);ctx.fillStyle='#c6bc8d';ctx.fillRect(4,-7,4,14);if(e.type==='tower'){ctx.strokeStyle='#ddd2aa';ctx.beginPath();ctx.moveTo(10,-14);ctx.lineTo(16,0);ctx.lineTo(10,14);ctx.stroke();}if(e.action){ctx.fillStyle='#ffe6a3';ctx.beginPath();ctx.arc(25,0,5,0,Math.PI*2);ctx.fill();}ctx.restore();
 ctx.font='9px Inter, sans-serif';ctx.textAlign='center';ctx.fillStyle='#e9e3c6';ctx.fillText(buildings[e.type].name,0,s+16);
 if(selected.includes(e)){ctx.strokeStyle=p.color+'88';ctx.setLineDash([6,9]);ctx.beginPath();ctx.arc(0,0,buildings[e.type].range,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);}
}

let terrainLayer=null;
function drawTerrain(){
 if(!terrainLayer){terrainLayer=document.createElement('canvas');terrainLayer.width=SIZE;terrainLayer.height=SIZE;const g=terrainLayer.getContext('2d');
 g.fillStyle='#35482d';g.fillRect(0,0,SIZE,SIZE);let seed=7941;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 // Cached mottled soil, soft moss patches and grass avoid repeating a tile grid.
 for(let i=0;i<450;i++){const x=random()*SIZE,y=random()*SIZE,r=35+random()*120;const glow=g.createRadialGradient(x,y,0,x,y,r);glow.addColorStop(0,i%3?'#7c885b20':'#172e232c');glow.addColorStop(1,'#35482d00');g.fillStyle=glow;g.fillRect(x-r,y-r,r*2,r*2);}
 for(let i=0;i<25000;i++){const x=random()*SIZE,y=random()*SIZE;g.strokeStyle=['#73865066','#afac7355','#1d382c77','#5a704c77'][i%4];g.lineWidth=.7;g.beginPath();g.moveTo(x,y);g.lineTo(x-2,y-2-random()*4);g.moveTo(x,y);g.lineTo(x+2,y-3);g.stroke();}
 for(let i=0;i<1300;i++){const x=random()*SIZE,y=random()*SIZE;g.fillStyle=i%6?'#8a896344':'#d7c38c77';g.beginPath();g.ellipse(x,y,1+random()*3,1+random()*2,random()*3,0,Math.PI*2);g.fill();}
 for(let i=0;i<220;i++){const x=random()*SIZE,y=random()*SIZE;g.fillStyle=i%2?'#d9c88899':'#a49cc088';g.fillRect(x,y,2,2);g.fillRect(x+4,y+3,2,2);g.fillRect(x-3,y+4,2,2);}
 }
 ctx.drawImage(terrainLayer,cam.x,cam.y,canvas.width,canvas.height,cam.x,cam.y,canvas.width,canvas.height);
}
function drawResource(r){
 ctx.save();ctx.translate(r.x,r.y);ctx.fillStyle='#101d1866';ctx.beginPath();ctx.ellipse(7,12,23,9,0,0,Math.PI*2);ctx.fill();
 if(r.type==='wood'){
 ctx.fillStyle='#725139';ctx.fillRect(-4,-10,8,27);ctx.fillStyle='#b08a57';ctx.fillRect(-3,-8,2,24);ctx.strokeStyle='#493b2b';ctx.lineWidth=1;for(let y=-7;y<15;y+=5){ctx.beginPath();ctx.moveTo(-1,y);ctx.lineTo(2,y+3);ctx.stroke();}
 const variant=Math.floor(r.x+r.y)%3;
 if(variant===0){for(let i=0;i<6;i++){const angle=i*2.4;ctx.fillStyle=['#305637','#436b3b','#527740'][i%3];ctx.beginPath();ctx.arc(Math.cos(angle)*10,-22+Math.sin(angle)*8,14,0,Math.PI*2);ctx.fill();ctx.fillStyle='#73955177';ctx.beginPath();ctx.arc(Math.cos(angle)*10-4,-27+Math.sin(angle)*8,7,0,Math.PI*2);ctx.fill();}}
 else for(let j=0;j<4;j++){const width=25-j*4,y=6-j*12;ctx.fillStyle=['#234531','#31583a','#3b6840','#508049'][j];ctx.beginPath();ctx.moveTo(-width,y);ctx.lineTo(-width*.65,y-6);ctx.lineTo(0,y-29);ctx.lineTo(width*.65,y-6);ctx.lineTo(width,y);ctx.lineTo(3,y-3);ctx.closePath();ctx.fill();ctx.strokeStyle='#80a26355';for(let n=0;n<4;n++){ctx.beginPath();ctx.moveTo(-width+n*6,y-2);ctx.lineTo(-width+n*6+5,y-8);ctx.stroke();}}
 ctx.fillStyle='#617348';ctx.fillRect(-11,13,4,2);ctx.fillRect(7,15,5,2);
 }else{
 const faces=[[[-25,12],[-19,-9],[-4,-21],[0,6]],[[-4,-21],[12,-17],[26,7],[0,6]],[[0,6],[26,7],[16,18],[-25,12]]];
 for(let i=0;i<faces.length;i++){ctx.fillStyle=['#899080','#a4a88b','#606e62'][i];ctx.beginPath();faces[i].forEach(([x,y],n)=>n?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fill();}
 ctx.strokeStyle='#d1ae55';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-11,-7);ctx.lineTo(-5,-2);ctx.lineTo(3,-8);ctx.lineTo(14,0);ctx.stroke();ctx.fillStyle='#f2d278';for(const [x,y] of [[-10,-9],[4,-5],[13,5],[-17,5]]){ctx.fillRect(x,y,4,3);ctx.fillStyle='#fae9a0';ctx.fillRect(x,y,2,1);ctx.fillStyle='#f2d278';}
 }
 ctx.restore();
}
function drawBuilding(e,p,horde){
 const s=e.size,t=state.time;ctx.strokeStyle='#253028';ctx.lineWidth=1;
 ctx.fillStyle='#6a705850';ctx.beginPath();ctx.ellipse(0,s*.4,s+18,s*.65,0,0,Math.PI*2);ctx.fill();
 ctx.fillStyle=horde?'#6c573b':'#9a9e8b';ctx.fillRect(-s-4,s*.4,s*2+8,s*.5);ctx.fillStyle=horde?'#94734a':'#c4c4a8';ctx.fillRect(-s-4,s*.4,s*2+8,4);
 const wall=ctx.createLinearGradient(-s,0,s,0);wall.addColorStop(0,horde?'#776040':'#a2aaa0');wall.addColorStop(1,horde?'#413c2e':'#626f69');ctx.fillStyle=wall;ctx.fillRect(-s,-s*.7,s*2,s*1.3);
 ctx.strokeStyle=horde?'#c49b5f66':'#35463a77';for(let y=-s*.6;y<s*.5;y+=8){ctx.beginPath();ctx.moveTo(-s,y);ctx.lineTo(s,y);ctx.stroke();for(let x=-s+(Math.round(y/8)%2?8:0);x<s;x+=16){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y+8);ctx.stroke();}}
 const roof=ctx.createLinearGradient(0,-s*1.5,0,-s*.65);roof.addColorStop(0,horde?'#a36542':'#678b96');roof.addColorStop(1,horde?'#643e31':'#354e61');ctx.fillStyle=roof;ctx.beginPath();ctx.moveTo(-s-8,-s*.65);ctx.lineTo(0,-s*1.5);ctx.lineTo(s+8,-s*.65);ctx.closePath();ctx.fill();
 ctx.strokeStyle=horde?'#d09c6266':'#a1b7af66';for(let row=1;row<5;row++){const y=-s*1.5+row*s*.17,half=row*(s+8)/5;ctx.beginPath();ctx.moveTo(-half,y);ctx.lineTo(half,y);ctx.stroke();for(let x=-half+5;x<half;x+=12){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+2,y+5);ctx.stroke();}}
 ctx.strokeStyle='#dcc995';ctx.beginPath();ctx.moveTo(-s-8,-s*.65);ctx.lineTo(0,-s*1.5);ctx.lineTo(s+8,-s*.65);ctx.stroke();
 ctx.fillStyle='#222c25';ctx.fillRect(-8,-1,16,s*.6);ctx.fillStyle='#836442';ctx.fillRect(-6,0,12,s*.6);ctx.strokeStyle='#c6a56e';ctx.strokeRect(-6,0,12,s*.6);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,s*.6);ctx.stroke();ctx.fillStyle='#f2dc91';ctx.fillRect(3,s*.3,2,2);
 for(const x of [-s*.65,s*.5]){ctx.fillStyle='#21362f';ctx.fillRect(x,-s*.42,8,10);ctx.fillStyle='#d9c273';ctx.fillRect(x+1,-s*.4,5,7);ctx.strokeStyle='#5c6551';ctx.beginPath();ctx.moveTo(x+4,-s*.42);ctx.lineTo(x+4,-s*.42+10);ctx.stroke();}
 ctx.fillStyle='#bdbe9c';ctx.fillRect(-12,s*.62,24,3);ctx.fillStyle='#737b67';ctx.fillRect(-15,s*.7,30,3);
 // Working structures have distinct silhouettes and animated equipment.
 if(['forge','foundry','armory'].includes(e.type)){ctx.fillStyle='#586355';ctx.fillRect(s*.55,-s*1.6,11,s*.7);ctx.fillStyle='#b7b99a';ctx.fillRect(s*.55-2,-s*1.6,15,4);for(let i=0;i<3;i++){ctx.fillStyle='#b0b7a133';ctx.beginPath();ctx.arc(s*.7+Math.sin(t+i)*5,-s*1.7-((t*12+i*9)%32),4+i*2,0,Math.PI*2);ctx.fill();}ctx.fillStyle='#e8b65b';ctx.fillRect(s*.7,0,7,9);ctx.fillStyle='#fcdb8b';ctx.fillRect(s*.7+2,3,3,4);}
 if(e.type==='mill'){ctx.save();ctx.translate(0,-s*.9);ctx.rotate(t*.75);for(let i=0;i<4;i++){ctx.rotate(Math.PI/2);ctx.fillStyle='#bca477';ctx.fillRect(0,-3,s*.85,6);ctx.strokeStyle='#665b3a';ctx.strokeRect(0,-3,s*.85,6);}ctx.restore();}
 if(e.type==='roost'){ctx.strokeStyle='#cbb984';ctx.beginPath();ctx.ellipse(0,-s*.78,s*.65,7,0,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#eadfc0';ctx.beginPath();ctx.ellipse(3,-s*.85,4,6,0,0,Math.PI*2);ctx.fill();}
 if(e.type==='altar'){ctx.fillStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=10;ctx.beginPath();ctx.moveTo(0,-s*1.9);ctx.lineTo(6,-s*1.65);ctx.lineTo(0,-s*1.4);ctx.lineTo(-6,-s*1.65);ctx.fill();ctx.shadowBlur=0;}
 if(e.type==='base'){for(const sign of [-1,1]){ctx.fillStyle=horde?'#776448':'#929f91';ctx.fillRect(sign*s-8,-s*.8,16,s*1.5);ctx.fillStyle=horde?'#bcb08b':'#c8cbb2';for(let i=0;i<3;i++)ctx.fillRect(sign*s-9+i*7,-s*.92,5,7);ctx.fillStyle='#25382d';ctx.fillRect(sign*s-2,-s*.4,4,9);}}
 if(e.type==='barracks'){ctx.strokeStyle='#e0d1a3';ctx.lineWidth=2;for(const sign of [-1,1]){ctx.beginPath();ctx.moveTo(-9*sign,-s*.6);ctx.lineTo(9*sign,-s*1.1);ctx.stroke();}}
 ctx.strokeStyle='#e0c790';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(s*.65,-s*.4);ctx.lineTo(s*.65,-s*1.9);ctx.stroke();ctx.fillStyle=p.color;ctx.beginPath();ctx.moveTo(s*.65,-s*1.9);ctx.quadraticCurveTo(s*.65+14,-s*1.8+Math.sin(t*3+e.id)*3,s*.65+26,-s*1.78);ctx.lineTo(s*.65+22,-s*1.55);ctx.quadraticCurveTo(s*.65+12,-s*1.64+Math.sin(t*3+e.id)*3,s*.65,-s*1.65);ctx.fill();
 ctx.fillStyle='#e2dbc0';ctx.textAlign='center';ctx.font='9px Inter, sans-serif';ctx.fillText(buildings[e.type].name,0,s+16);
}
