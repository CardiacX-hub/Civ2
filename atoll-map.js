/* Crownwater Atoll: deterministic land topology shared by rendering, collision,
 * AI and saves. Prefix sums make water tests O(1); a quadtree merges water cells
 * into a bounded set of square obstacles. No per-unit polygon scans. */
(()=>{
 const presets={};
 function createPreset(KEY,mode){
 const G=128,S=SIZE/G,C=SIZE/2,R_HOME=1640,R_EXP=1050,HOME=350,EXP=mode==='isolated'?200:240,HUB=650,ROAD=96;
 const lanes=Array.from({length:6},(_,i)=>{const a=-Math.PI/2+i*Math.PI/3,dx=Math.cos(a),dy=Math.sin(a);return{a,dx,dy,tx:-dy,ty:dx,home:{x:C+dx*R_HOME,y:C+dy*R_HOME},expansion:{x:C+dx*R_EXP,y:C+dy*R_EXP}};});
 function onLand(x,y){if(mode==='ring'&&Math.abs(Math.hypot(x-C,y-C)-R_HOME)<115)return true;if(Math.hypot(x-C,y-C)<=HUB)return true;for(const l of lanes){if(Math.hypot(x-l.home.x,y-l.home.y)<=HOME||Math.hypot(x-l.expansion.x,y-l.expansion.y)<=EXP)return true;const radial=(x-C)*l.dx+(y-C)*l.dy,lateral=Math.abs((x-C)*l.tx+(y-C)*l.ty);if(mode!=='isolated'&&radial>=HUB-40&&radial<=R_HOME&&lateral<=ROAD)return true;}return false;}
 const wet=new Uint8Array(G*G),sum=new Uint32Array((G+1)*(G+1));
 for(let y=0;y<G;y++)for(let x=0;x<G;x++){wet[y*G+x]=onLand((x+.5)*S,(y+.5)*S)?0:1;sum[(y+1)*(G+1)+x+1]=wet[y*G+x]+sum[y*(G+1)+x+1]+sum[(y+1)*(G+1)+x]-sum[y*(G+1)+x];}
 const count=(x0,y0,x1,y1)=>sum[y1*(G+1)+x1]-sum[y0*(G+1)+x1]-sum[y1*(G+1)+x0]+sum[y0*(G+1)+x0];
 function water(x,y,pad=0){if(x-pad<0||y-pad<0||x+pad>=SIZE||y+pad>=SIZE)return true;const x0=Math.floor((x-pad)/S),y0=Math.floor((y-pad)/S),x1=Math.min(G,Math.floor((x+pad)/S)+1),y1=Math.min(G,Math.floor((y+pad)/S)+1);return count(x0,y0,x1,y1)>0;}
 const tiles=[],obstacles=[];
 function subdivide(x,y,n){const total=count(x,y,x+n,y+n);if(!total)return;if(total===n*n){const w=n*S,cx=(x+n/2)*S,cy=(y+n/2)*S;tiles.push({crownwater:true,preset:KEY,width:w,points:[{x:cx,y:y*S},{x:cx,y:(y+n)*S}],bridges:[]});obstacles.push({x:cx,y:cy,half:w/2});return;}const h=n/2;subdivide(x,y,h);subdivide(x+h,y,h);subdivide(x,y+h,h);subdivide(x+h,y+h,h);}
 subdivide(0,0,G);
 const active=()=>state?.rivers?.[0]?.crownwater===true&&(state.rivers[0].preset||'atoll')===KEY;
 const mountains=makeMountains;makeMountains=function(key=mapChoice){return key===KEY?[]:mountains(key);};
 const plateaus=makePlateaus;makePlateaus=function(key){return key===KEY?[]:plateaus(key);};
 const rivers=makeRivers;makeRivers=function(key){return key===KEY?tiles.map(t=>({...t,points:t.points.map(p=>({...p})),bridges:[]})):rivers(key);};
 const at=riverAt;riverAt=function(x,y,pad=0){return active()?water(x,y,pad):at(x,y,pad);};
 const blocked=riverObstacles;riverObstacles=function(){return active()?obstacles:blocked();};
 const spawns=spawnLocations;spawnLocations=function(random=Math.random){if(!active())return spawns(random);const out=lanes.map(l=>[l.home.x,l.home.y]);for(let i=out.length-1;i>0;i--){const j=Math.min(i,Math.floor(random()*(i+1)));[out[i],out[j]]=[out[j],out[i]];}return out;};
 mapDefinitions[KEY]={name:mode==='ring'?'Crownwater Landring':mode==='isolated'?'Crownwater Shattered Isles':'Crownwater Atoll',description:mode==='ring'?'Large home islands linked by an outer land ring, with gold outposts leading to the central island.':mode==='isolated'?'Separate home islands, gold outposts and a rich central island. Flying transports carry armies across the sea.':'Larger home islands, each with one outlet to a gold expansion, then a resource-rich central island.',color:'#48694c',ridges:[]};
 function roadClear(x,y,pad=130){return lanes.some(l=>{const r=(x-C)*l.dx+(y-C)*l.dy;return r>HUB-150&&r<R_HOME+100&&Math.abs((x-C)*l.tx+(y-C)*l.ty)<pad;});}
 function resources(spots){
  state.resources=[];const mine=(x,y,zone,index)=>{const r={x,y,type:'gold',amount:zone==='center'?9000:6000,zone,island:index};if(water(x,y,45))throw Error('Atoll mine overlaps water');state.resources.push(r);attachGoldOutcrop(r,spots);};
  for(let i=0;i<lanes.length;i++){const l=lanes[i];mine(l.home.x-l.tx*135-l.dx*45,l.home.y-l.ty*135-l.dy*45,'home',i);mine(l.expansion.x+l.tx*105,l.expansion.y+l.ty*105,'expansion',i);}
  for(let i=0;i<6;i++){const a=i*Math.PI/3+Math.PI/6;mine(C+Math.cos(a)*380,C+Math.sin(a)*380,'center',i);}
  for(let i=0;i<3;i++){const a=i*Math.PI*2/3;mine(C+Math.cos(a)*150,C+Math.sin(a)*150,'center',6+i);}
  const rocks=mineRockObstacles();
  const tree=(x,y,zone)=>{if(water(x,y,23)||roadClear(x,y)||lanes.some(l=>Math.hypot(x-l.home.x,y-l.home.y)<175)||state.resources.some(r=>Math.hypot(r.x-x,r.y-y)<(r.type==='gold'?105:34))||rocks.some(o=>Math.abs(o.x-x)<o.half+20&&Math.abs(o.y-y)<o.half+20))return;state.resources.push({x,y,type:'wood',amount:240,zone});};
  // Dense coastal groves, with broad gaps where each causeway meets an island.
  for(const l of lanes){for(const radius of [215,255])for(let i=0;i<32;i++){const a=i*Math.PI/16;tree(l.home.x+Math.cos(a)*radius,l.home.y+Math.sin(a)*radius,'home');}for(let i=0;i<24;i++){const a=i*Math.PI/12;tree(l.expansion.x+Math.cos(a)*170,l.expansion.y+Math.sin(a)*170,'expansion');}}
  for(const radius of [515,555,595]){const n=Math.floor(Math.PI*2*radius/40);for(let i=0;i<n;i++){const a=i*Math.PI*2/n;tree(C+Math.cos(a)*radius,C+Math.sin(a)*radius,'center');}}
  state.mapRoads=lanes.map(l=>[l.home,l.expansion,{x:C+l.dx*500,y:C+l.dy*500}]);state.wallVersion++;state.blockCache={};
 }
 const populate=populateResources;populateResources=function(spots){if(active())return resources(spots);return populate(spots);};
 function validate(){
  const errors=[],warnings=[],n=125,cell=32,seen=new Uint8Array(n*n),blocked=new Uint8Array(n*n),rocks=mineRockObstacles(),trees=state.resources.filter(r=>r.type==='wood'&&r.amount>0);
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){const px=(x+.5)*cell,py=(y+.5)*cell;blocked[y*n+x]=water(px,py,14)||rocks.some(r=>Math.abs(r.x-px)<r.half+14&&Math.abs(r.y-py)<r.half+14)||trees.some(r=>Math.abs(r.x-px)<26&&Math.abs(r.y-py)<26)?1:0;}
  const index=p=>Math.floor(p.y/cell)*n+Math.floor(p.x/cell),queue=[index({x:C,y:C})];seen[queue[0]]=1;
  for(let i=0;i<queue.length;i++){const p=queue[i],x=p%n,y=Math.floor(p/n);for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,ny=y+dy,k=ny*n+nx;if(nx>=0&&ny>=0&&nx<n&&ny<n&&!blocked[k]&&!seen[k]){seen[k]=1;queue.push(k);}}}
  for(let i=0;i<lanes.length;i++){const l=lanes[i];if(water(l.home.x,l.home.y,130))errors.push('Unsafe home island '+i);if(mode!=='isolated'&&(!seen[index(l.home)]||!seen[index(l.expansion)]))errors.push('Disconnected island chain '+i);if(!state.resources.some(r=>r.type==='gold'&&r.zone==='expansion'&&r.island===i))errors.push('Missing expansion gold '+i);}
  for(const r of state.resources)if(water(r.x,r.y,r.type==='gold'?40:12))errors.push('Resource overlaps water');
  return{errors:[...new Set(errors)],warnings,waterTiles:tiles.length,reachableCells:queue.length};
 }
 // Both 2D fallback and previews paint a single continuous water surface.
 let surface;
 function paint(g,preview=false){if(!surface){surface=document.createElement('canvas');surface.width=surface.height=1024;const c=surface.getContext('2d');c.scale(1024/SIZE,1024/SIZE);const fill=c.createLinearGradient(0,0,SIZE,SIZE);fill.addColorStop(0,'#438a9a');fill.addColorStop(.5,'#235d79');fill.addColorStop(1,'#164558');c.fillStyle=fill;for(const o of obstacles)c.fillRect(o.x-o.half,o.y-o.half,o.half*2,o.half*2);c.strokeStyle='#b1af82';c.lineWidth=10;c.beginPath();for(let y=0;y<G;y++)for(let x=0;x<G;x++){if(!wet[y*G+x])continue;const px=x*S,py=y*S;if(x&& !wet[y*G+x-1]){c.moveTo(px,py);c.lineTo(px,py+S);}if(x<G-1&&!wet[y*G+x+1]){c.moveTo(px+S,py);c.lineTo(px+S,py+S);}if(y&&!wet[(y-1)*G+x]){c.moveTo(px,py);c.lineTo(px+S,py);}if(y<G-1&&!wet[(y+1)*G+x]){c.moveTo(px,py+S);c.lineTo(px+S,py+S);}}c.stroke();}
  if(preview){g.fillStyle='#48694c';g.fillRect(0,0,SIZE,SIZE);}g.drawImage(surface,0,0,SIZE,SIZE);
 }
 const previousStart=start;start=function(options){const result=previousStart(options);if(active()){for(let owner=0;owner<state.players.length;owner++){const base=state.entities.find(e=>e.owner===owner&&e.type==='base'),l=lanes.find(l=>Math.hypot(l.home.x-base.x,l.home.y-base.y)<1);if(!l)continue;let i=0;for(const w of state.entities.filter(e=>e.owner===owner&&e.type==='worker')){const lateral=-54+i++*36;w.x=base.x-l.dx*110+l.tx*lateral;w.y=base.y-l.dy*110+l.ty*lateral;}}fog();updateUI();}return result;};
 const draw=drawRivers;drawRivers=function(g){if(active())return paint(g);return draw(g);};
 // Shared world-space water never needs hundreds of tiny per-tile ripple loops.
 const ripple=drawRiverRipples;drawRiverRipples=function(fishOnly=false){if(!active())return ripple(fishOnly);if(fishOnly)return;ctx.save();ctx.strokeStyle='#d7efff55';ctx.lineWidth=1;for(let y=Math.max(0,Math.floor(cam.y/90)*90);y<Math.min(SIZE,cam.y+viewport.height);y+=90)for(let x=Math.max(0,Math.floor(cam.x/100)*100);x<Math.min(SIZE,cam.x+viewport.width);x+=100)if(water(x,y,12)){const f=Math.sin(state.time*1.6+x*.01+y*.007);ctx.beginPath();ctx.moveTo(x,y+f*3);ctx.lineTo(x+18,y+f*3-2);ctx.stroke();}ctx.restore();};
 presets[KEY]={key:KEY,active,water,lanes,tiles,obstacles,validate,paint};
 }
 createPreset('atoll','chain');createPreset('atollRing','ring');createPreset('atollIsles','isolated');
 const current=()=>presets[state?.rivers?.[0]?.preset||'atoll']||presets.atoll;
 globalThis.KawAtoll={key:'atoll',presets,active:()=>Object.values(presets).some(p=>p.active()),get lanes(){return current().lanes;},get tiles(){return current().tiles;},water:(...a)=>current().water(...a),validate:()=>current().validate(),paint:(...a)=>current().paint(...a)};
})();
