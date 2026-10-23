'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),{createEngine}=require('../multiplayer/engine.cjs');
function fixture(){
 const engine=createEngine([{name:'A',faction:'human',color:'#53c9eb',ai:false},{name:'B',faction:'horde',color:'#ef685a',ai:false}]),s=engine.state;s.count=0;s.ai=1e9;s.resources=[];s.mountains=[];s.rivers=[];s.plateaus=[];s.posts=[];s.cover=[];s.wallVersion++;
 const template=s.entities.find(e=>!e.building);s.entities=s.entities.filter(e=>e.building);for(const e of s.entities){e.x=e.owner?3500:100;e.y=e.owner?3500:100;}
 const add=(id,type,x,y)=>{const e={...template,id,type,owner:0,x,y,hp:1000,max:1000,size:9,queue:[],tasks:[],order:{kind:'stop'},cool:0};s.entities.push(e);return e;};return{engine,s,add};
}
test('attack-move infantry closes at its own full speed rather than artillery formation speed',()=>{
 const {engine,add}=fixture(),infantry=add(800,'melee',500,600),siege=add(801,'siege',500,800),control=add(802,'melee',500,1200);
 for(const [e,dy]of [[infantry,0],[siege,200]])e.order={kind:'attackMove',x:1800,y:600+dy,formation:{key:'assault',leaderId:800,dx:0,dy,finalX:1800,finalY:600+dy}};
 control.order={kind:'move',x:1800,y:1200};for(let i=0;i<20;i++)engine.step(.05);
 assert(Math.abs((infantry.x-500)-(control.x-500))<1,'attack-move should use full unit speed');assert(infantry.x>siege.x+20,'infantry can close ahead of slower siege');
});
test('units round a grove continuously without walking through trees or pausing at grid corners',()=>{
 const {engine,s,add}=fixture(),u=add(810,'melee',500,650);for(let y=540;y<=780;y+=24)s.resources.push({type:'wood',x:700,y,amount:300});u.order={kind:'move',x:1050,y:650};let stopped=0,moving=0;
 for(let i=0;i<260&&u.order?.kind==='move';i++){const x=u.x,y=u.y;engine.step(.05);const d=Math.hypot(u.x-x,u.y-y);if(d<.01)stopped++;else moving++;assert(!s.resources.some(t=>Math.abs(u.x-t.x)<18&&Math.abs(u.y-t.y)<18),'route intersects a tree');}
 assert(Math.hypot(u.x-1050,u.y-650)<15,'must arrive beyond the grove');assert(stopped<=2,'unexpected idle ticks: '+stopped);assert(moving>50);
});
test('an exhausted partial corridor continues planning immediately instead of idling',()=>{
 const {engine,s,add}=fixture(),u=add(820,'melee',500,650);for(let y=540;y<=780;y+=24)s.resources.push({type:'wood',x:700,y,amount:300});u.order={kind:'move',x:1050,y:650};u.route={x:1050,y:650,version:s.wallVersion,time:s.time,points:[],endpoint:{x:500,y:650}};engine.step(.05);assert(Math.hypot(u.x-500,u.y-650)>1,'partial route must continue on the same tick');
});
test('pursuing an enemy uses full movement speed and clears a stale stationary attack pose',()=>{
 const {engine,s,add}=fixture(),u=add(830,'melee',500,600),control=add(831,'melee',500,1000),target=s.entities.find(e=>e.owner===1);target.x=1700;target.y=600;u.order={kind:'attack',target};u.action={kind:'attack',duration:.55,until:s.time+.55};control.order={kind:'move',x:1700,y:1000};engine.step(.05);assert(Math.abs(u.x-control.x)<.1);assert.equal(u.action,null);
});
