// Exercise peon and Gold Mine models, tier growth, wind and Classic fallback on PC and phone.
const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});try{
 for(const mobile of [false,true]){const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1280,height:900},isMobile:mobile,hasTouch:mobile}),errors=[];
 page.setDefaultTimeout(180000);page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});
 await page.goto(process.env.CHECK_URL||'http://localhost:3042');await page.evaluate(()=>KawVisual.setQuality('low'));await page.click('#start');await page.click('#launchMap');
 await page.evaluate(()=>{state.count=0;state.ai=999;paused=true;state.entities=[];state.resources=[{type:'gold',x:760,y:770,amount:1200,backAngle:0}];state.mountains=[];state.rivers=[];state.plateaus=[];state.visible.fill(1);state.seen.fill(1);state.wallVersion++;state.players[0].faction='horde';state.players[0].gold=state.players[0].wood=1000;cam.x=350;cam.y=450;KawBattlefield.stop();entity('base',0,520,650,true);entity('goldmine',0,760,650,true);const worker=entity('worker',0,650,650);worker.order={kind:'stop'};selected=[worker];updateUI();});
 const ready=()=>page.waitForFunction(()=>KawBattlefield.active&&KawBattlefield.stats.pending===0,{},{timeout:180000});await ready();
 assert(await page.locator('#buildActions').innerText().then(t=>t.includes('Gold Mine')));
 const base=await page.evaluate(()=>state.entities.find(e=>e.type==='base').id);let baseline;
 const dir='/workspace/artifacts/woodland-peons-mines';fs.mkdirSync(dir,{recursive:true});
 for(const level of mobile?[1]:[1,2,3,4]){await page.evaluate(level=>{state.entities.find(e=>e.type==='base').level=level;},level);await page.waitForTimeout(200);await ready();const bounds=await page.evaluate(id=>KawBattlefield.bounds(id),base);if(!baseline)baseline=bounds;else assert.equal(bounds.scale,baseline.scale);await page.screenshot({path:dir+'/dominion-'+(mobile?'phone':'level-'+level)+'.png'});}
 // Grass and tree shaders must produce different frames for a changed breeze clock.
 const before=await page.locator('#liveBattlefield').screenshot();await page.evaluate(()=>{state.time+=1.2;});await page.waitForTimeout(150);const after=await page.locator('#liveBattlefield').screenshot();assert(!before.equals(after),'wind must change the rendered scene');
 await page.evaluate(()=>KawBattlefield.setEnabled(false));await page.waitForTimeout(150);await page.screenshot({path:dir+'/classic-'+(mobile?'phone':'pc')+'.png'});assert.deepEqual(errors,[]);console.log({mobile,goldMineUI:true,wind:true,classic:true,errors});await page.close();
 }
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
