'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),{createEngine}=require('../multiplayer/engine.cjs');
function fixture(difficulty='normal'){
 const engine=createEngine([{name:'You',faction:'human',color:'#53c9eb',ai:false},{name:'Enemy',faction:'horde',color:'#ef685a',ai:false,difficulty}]),s=engine.state;
 s.count=0;s.ai=999;s.posts=[];s.resources=[];s.mountains=[];s.rivers=[];s.plateaus=[];s.wallVersion++;
 const template=s.entities.find(e=>!e.building);s.entities=s.entities.filter(e=>e.building);
 for(const e of s.entities){e.x=e.owner?3200:200;e.y=e.owner?3200:200;}
 function add(id,type,owner,x,y,building=false){const e={...template,id,type,owner,x,y,building,hp:10000,max:10000,size:building?35:9,queue:[],tasks:[],order:{kind:'stop'},cool:0};s.entities.push(e);return e;}
 return{engine,s,add};
}
test('a squad attacks a building around a blocking grove without targeting its occupied center',()=>{
 const {engine,s,add}=fixture(),target=s.entities.find(e=>e.owner===1&&e.type==='base');target.x=1100;target.y=850;target.hp=target.max=100000;
 for(let y=730;y<=940;y+=24)s.resources.push({type:'wood',x:930,y,amount:240});
 const troops=Array.from({length:8},(_,i)=>add(500+i,'melee',0,760,760+i*25));
 for(const e of troops)e.order={kind:'attack',target};
 for(let i=0;i<500;i++)engine.step(.05);
 assert(target.hp<99500,'attackers must reach the stronghold and deal sustained damage');
 assert(troops.filter(e=>e.combatApproach).length>=6);
 assert(new Set(troops.map(e=>Math.round(e.combatApproach?.x/10)+','+Math.round(e.combatApproach?.y/10))).size>=4,'approach positions spread across faces');
 assert(troops.every(e=>!s.resources.some(r=>Math.abs(r.x-e.x)<17&&Math.abs(r.y-e.y)<17)),'no movement through the grove');
});
test('hard AI fills deeper troop queues while normal AI keeps one pending fighter',()=>{
 function queued(difficulty){const {engine,s,add}=fixture(difficulty),p=s.players[1],base=s.entities.find(e=>e.owner===1);p.ai=true;p.nextAI=0;p.gold=p.wood=10000;s.ai=0;base.level=4;base.research={key:'stronghold',left:500,total:500,gold:0,wood:0};
  for(let i=0;i<8;i++)add(600+i,'house',1,2700+i*55,3000,true);
  const barracks=add(700,'barracks',1,3000,3000,true);for(let i=0;i<4;i++)add(710+i,'melee',1,3100,3100+i*30);
  for(let i=0;i<60;i++)engine.step(.05);return{queue:barracks.queue.length,p};}
 const hard=queued('hard'),normal=queued('normal');assert.equal(normal.queue,1);assert.equal(hard.queue,3);assert(hard.p.gold>=0&&hard.p.wood>=0);
});
test('mixed ground squads match their slowest member while traveling',()=>{
 const {engine,add}=fixture(),infantry=add(800,'melee',0,600,600),artillery=add(801,'siege',0,630,600);
 for(const [e,dy]of [[infantry,0],[artillery,40]])e.order={kind:'move',x:1100,y:600+dy,formation:{key:'test',leaderId:800,dx:0,dy,finalX:1100,finalY:600+dy}};
 for(let i=0;i<80;i++)engine.step(.05);
 assert(infantry.order.formation.groupSpeed>0);assert.equal(infantry.order.formation.groupSpeed,artillery.order.formation.groupSpeed);
 assert(Math.hypot(infantry.x-artillery.x,infantry.y-artillery.y)<150,'infantry should not outrun its artillery escort');
});
test('match highlights preserve army counts, spending and major losses in the report',()=>{
 const {engine,s,add}=fixture();add(900,'melee',0,500,500);const hero=add(901,'hero',0,550,550);hero.hp=0;hero.lastDamageOwner=1;engine.step(.05);
 const stats=s.players[0].stats;assert.equal(stats.economy.at(-1).fighters,1);assert.equal(stats.peakArmy,1);assert(stats.moments.some(e=>e.label==='Hero defeated'));
 const snap=engine.snapshot(0);assert(snap.players[0].stats.moments.length);assert(!snap.players[1].stats,'live enemy statistics remain private');
});
