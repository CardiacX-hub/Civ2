/* Campaign progression is data, never a change to shared unit definitions. */
(function(root){
 const branches=[['melee','Frontline'],['ranged','Ranged infantry'],['sniper','Precision infantry'],['siege','Artillery'],['air','Starships & flyers'],['worker','Collectors & support']];
 const nodes=branches.flatMap(([branch,label])=>[['health','Reinforced body',.05],['damage','Weapon mastery',.05],['speed','Mobility',.03]].map(([stat,name,amount],i)=>({id:branch+'_'+stat,branch,label,name,stat,amount,max:3,parent:i?branch+'_'+(i===1?'health':'damage'):null})));
 const normalize=input=>Object.fromEntries(nodes.map(n=>[n.id,Math.min(3,Math.max(0,Math.floor(Number(input?.[n.id])||0)))]));
 const budget=stars=>3+Object.values(stars||{}).reduce((sum,n)=>sum+Math.min(3,Math.max(0,Number(n)||0)),0);
 const spent=input=>Object.values(normalize(input)).reduce((a,b)=>a+b,0);
 function valid(input,points){const ranks=normalize(input);if(spent(ranks)>points)return normalize(null);for(const n of nodes)if(ranks[n.id]&&n.parent&&!ranks[n.parent])ranks[n.id]=0;return ranks;}
 function purchase(input,id,points){const ranks=valid(input,points),n=nodes.find(n=>n.id===id);if(!n||ranks[id]>=n.max||spent(ranks)>=points||n.parent&&!ranks[n.parent])return null;ranks[id]++;return ranks;}
 function category(type){return ['air','air2','air3'].includes(type)?'air':['phaseSentinel','melee','cavalier','devoured','beetle','bogbreaker','shieldwarden','stormLancer','chainbreaker'].includes(type)?'melee':['ranged','nullDisruptor','trapper'].includes(type)?'ranged':type==='sniper'?'sniper':['siege','rootColossus','siegeMarshal'].includes(type)?'siege':['worker','naniteTender','medic','engineer','bannerDamage','bannerHealth','bannerHarvest'].includes(type)?'worker':null;}
 function multiplier(ranks,type,stat){const branch=category(type),node=nodes.find(n=>n.id===branch+'_'+stat);return node?1+Math.min(3,Math.max(0,Number(ranks?.[node.id])||0))*node.amount:1;}
 const api={branches,nodes,normalize,budget,spent,valid,purchase,category,multiplier};root.KawTalentRules=api;if(typeof module==='object')module.exports=api;
})(typeof globalThis==='object'?globalThis:this);
