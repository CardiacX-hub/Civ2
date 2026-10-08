// Pixel checks keep decorative clouds from weakening fog-of-war privacy.
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});
 const page=await browser.newPage();await page.goto(process.env.CHECK_URL||'http://localhost:3025');
 const result=await page.evaluate(async()=>{
  const canvas=document.createElement('canvas');canvas.width=192;canvas.height=64;const ctx=canvas.getContext('2d');
  const state={visible:new Uint8Array([1,0,0,1,0,0,1,0,0]),seen:new Uint8Array([1,1,0,1,1,0,1,1,0])};
  const draw=()=>{ctx.clearRect(0,0,192,64);KawFog.draw(ctx,state,{x:0,y:0},{width:192,height:64},64,3);return ctx.getImageData(0,0,192,64).data;};
  const first=draw(),alpha=x=>first[(32*192+x)*4+3];await new Promise(r=>setTimeout(r,350));const second=draw();
  let changes=0;for(let i=0;i<first.length;i+=4)if(first[i]!==second[i])changes++;
  state.visible[2]=1;const revealed=draw()[(32*192+160)*4+3];
  return {visible:alpha(32),remembered:alpha(96),unknown:alpha(160),revealed,changes};
 });assert.equal(result.visible,0);assert.equal(result.unknown,255);assert.equal(result.remembered,186);assert.equal(result.revealed,0);assert(result.changes>0);console.log(result);await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
