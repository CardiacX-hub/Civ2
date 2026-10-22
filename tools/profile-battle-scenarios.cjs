/* Fixed-seed, fixed-order RTS benchmark. CPU-only by default; BENCH_RENDER=1
 * adds real presented-frame timing with an identical camera path. GPU/device
 * timings vary, so compare repeated runs on the same machine and settings. */
const {chromium}=require('/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const graphics=process.env.BENCH_RENDER==='1',quality=process.env.BENCH_QUALITY||'balanced';
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:800}});
  await page.addInitScript(({graphics,quality})=>{localStorage.setItem('kaw-live-3d',graphics?'on':'off');localStorage.setItem('kaw-visual-quality',quality);},{graphics,quality});
  await page.goto(process.env.CHECK_URL||'http://localhost:3092');await page.waitForFunction(()=>window.KawPerformance);
  const result=await page.evaluate(async({steps,filter,graphics})=>{
   const out={},raf=()=>new Promise(resolve=>requestAnimationFrame(resolve));frame=()=>{};
   for(const scenario of ['crowded fight','mine traffic','AI pathfinding'].filter(s=>!filter||s===filter)){
    const originalRandom=Math.random;let seed=20261022;
    Math.random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
    try{
     mapChoice='highlands';setFaction('human');start();paused=true;state.count=0;
     const base=state.entities.find(e=>e.owner===0&&e.type==='base'),enemy=state.entities.find(e=>e.owner===1&&e.type==='base'),mine=state.resources.find(r=>r.type==='gold');
     const arena={x:(base.x+enemy.x)/2,y:(base.y+enemy.y)/2};
     for(let i=0;i<120;i++){const owner=i%2,b=owner?enemy:base,row=Math.floor(i/20),col=Math.floor(i/2)%10,crowded=scenario==='crowded fight',x=crowded?arena.x+(owner?1:-1)*(100+row*28):b.x+100+i%10*28,y=crowded?arena.y+(col-4.5)*28:b.y+100+Math.floor(i/10)*28,u=entity(scenario==='mine traffic'?'worker':i%3?'melee':'ranged',owner,x,y);queueTask(u,scenario==='mine traffic'?{kind:'gather',target:mine}:{kind:'attackMove',x:crowded?arena.x+(owner?-120:120):owner?base.x:enemy.x,y:crowded?arena.y:owner?base.y:enemy.y});}
     const focus=scenario==='crowded fight'?arena:base;cam.x=Math.max(0,focus.x-viewport.width/2);cam.y=Math.max(0,focus.y-viewport.height/2);
     const mapFingerprint=state.resources.reduce((h,r)=>((h*31+Math.floor(r.x)*7+Math.floor(r.y))>>>0),2166136261);
     // Stop the normal RAF loop while keeping loading promises and GPU work live.
     await raf();await raf();if(graphics)for(let i=0;i<120&&!KawBattlefield.active;i++){render();await raf();}
     paused=false;const times=[],spikes=[],frameTimes=[];let previous=0;
     for(let n=0;n<steps;n++){
      if(graphics){const stamp=await raf();if(previous)frameTimes.push(stamp-previous);previous=stamp;}
      const target=scenario==='crowded fight'?arena:scenario==='mine traffic'?mine:enemy,t=scenario==='crowded fight'?0:(n%1200)/1200;cam.x=Math.max(0,Math.min(SIZE-viewport.width,focus.x+(target.x-focus.x)*t+Math.sin(n/300)*120-viewport.width/2));cam.y=Math.max(0,Math.min(SIZE-viewport.height,focus.y+(target.y-focus.y)*t+Math.cos(n/450)*90-viewport.height/2));
      const at=performance.now();tick(.05);const ms=performance.now()-at;times.push(ms);
      if(ms>40&&spikes.length<12)spikes.push({tick:n,ms,...KawPerformance.report().phases});
      if(graphics){render();KawVisual.present();}
     }
     times.sort((a,b)=>a-b);frameTimes.sort((a,b)=>a-b);paused=true;
     out[scenario]={seed:20261022,mapFingerprint,graphics,cameraPath:'fixed sweep over armies and their resource/attack route',simulatedSeconds:steps*.05,units:state.entities.length,medianTickMs:times[Math.floor(steps*.5)],p95TickMs:times[Math.floor(steps*.95)],worstTickMs:times.at(-1),...(graphics?{averageFPS:1000*frameTimes.length/frameTimes.reduce((a,b)=>a+b,0),p95FrameMs:frameTimes[Math.floor(frameTimes.length*.95)],renderer:KawBattlefield.stats}:{}),spikes};
    }finally{Math.random=originalRandom;}
   }
   return out;
  },{steps:Number(process.env.SCENARIO_STEPS)||(graphics?300:6000),filter:process.env.SCENARIO||null,graphics});
  console.log(JSON.stringify(result,null,2));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
