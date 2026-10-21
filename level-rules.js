/* Original Kingdoms campaign data and progression. No renderer or DOM required. */
(function(root){
 const levels=[
 {id:1,name:'First Banner',map:'highlands',difficulty:'easy',opponents:1,brief:'Establish your economy and defeat an infantry outpost.',introduces:'Melee infantry'},
 {id:2,name:'Arrows in the Vale',map:'valleys',difficulty:'easy',opponents:1,brief:'Ranged defenders now support the enemy frontline. Protect your collectors.',introduces:'Ranged infantry'},
 {id:3,name:'Hunters on the Ridge',map:'frontier',difficulty:'normal',opponents:1,brief:'Precision troops threaten your infantry. Scout the ridges and close the distance.',introduces:'Precision infantry'},
 {id:4,name:'Hidden Paths',map:'plateau',difficulty:'normal',opponents:1,brief:'Enemy scouts and support troops patrol the approaches. Find a safe route across the heights.',introduces:'Scouts and support troops'},
 {id:5,name:'Iron Oath',map:'highlands',difficulty:'hard',opponents:1,brief:'Elite infantry reinforce a developed fortress. Combine your troops to break its defenses.',introduces:'Elite infantry'},
 {id:6,name:'The Siege Road',map:'canyon',difficulty:'hard',opponents:1,brief:'An established siege works supplies enemy artillery. Strike its production and protect your base.',introduces:'Artillery'},
 {id:7,name:'Wings over the Crossing',map:'islands',difficulty:'hard',opponents:2,brief:'Two allied enemy outposts deploy flying troops. Bring ranged defenders and secure the crossings.',introduces:'Flying troops'},
 {id:8,name:'Standards of Power',map:'plateau',difficulty:'hard',opponents:2,brief:'Heroes, standards and specialist troops lead the enemy armies. Fight around their auras.',introduces:'Heroes, standards and specialists'},
 {id:9,name:'War of the Rivers',map:'islands',difficulty:'extreme',opponents:2,brief:'Full enemy rosters contest the rivers. Build an army that can answer siege and air attacks.',introduces:'Advanced flying troops and full rosters'},
 {id:10,name:'Crown of the Three Realms',map:'canyon',difficulty:'extreme',opponents:3,brief:'Three allied enemy strongholds stand against your chosen faction. Destroy every opposing stronghold.',introduces:'Three allied opponents'}
 ];
 const definition=id=>levels.find(l=>l.id===id);
 function normalize(value){const stars={};for(const l of levels){const n=Number(value?.stars?.[l.id]);if(Number.isInteger(n)&&n>=1&&n<=3)stars[l.id]=n;}return {version:1,stars};}
 const unlocked=(profile,id)=>!!definition(id)&&(id===1||normalize(profile).stars[id-1]>0);
 const par=id=>600+id*60;
 const lossLimit=id=>3+id*2;
 function rating(id,won,time,stats={}){return definition(id)&&won?1+(time<=par(id)?1:0)+((stats.unitsLost||0)<=lossLimit(id)&&!(stats.buildingsLost>0)?1:0):0;}
 function record(profile,id,stars){const p=normalize(profile);if(!unlocked(p,id)||!Number.isInteger(stars)||stars<1||stars>3)return p;p.stars[id]=Math.max(p.stars[id]||0,stars);return p;}
 function allowed(id,type,faction){if(!definition(id))return true;if(type==='worker'||type==='melee')return true;if(type==='ranged')return id>=2;if(type==='sniper')return id>=3;if(['scout','shieldwarden','medic','trapper'].includes(type))return id>=4;if(['cavalier','devoured','beetle','bogbreaker'].includes(type))return id>=5;if(['siege','engineer'].includes(type))return id>=6;if(type==='air'||type==='air2'&&faction==='covenant')return id>=7;if(type==='air2'||type==='air3')return id>=9;return id>=8;}
 const api={levels,definition,normalize,unlocked,par,lossLimit,rating,record,allowed};root.KawLevelRules=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
