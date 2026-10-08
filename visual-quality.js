/* Canvas matches keep authoritative gameplay unchanged. A separate GPU canvas
 * grades the finished sprite scene; it does NOT invent scene depth or normals. */
(()=>{'use strict';
 const presets={low:{scale:1,bloom:0,aa:0},balanced:{scale:1.25,bloom:.055,aa:1},high:{scale:1.5,bloom:.085,aa:1}};
 let quality=window.matchMedia?.('(pointer:coarse)').matches?'low':'balanced';try{quality=localStorage.getItem('kaw-visual-quality')||quality;}catch{}if(!presets[quality])quality='balanced';
 const source=document.getElementById('world'),output=document.createElement('canvas');output.id='visualOutput';output.setAttribute('aria-hidden','true');output.style.cssText='position:absolute;pointer-events:none;display:none;z-index:0';source.insertAdjacentElement('afterend',output);
 let gl,program,texture,ready=false;const uniforms={};
 const vertex=`#version 300 es
 in vec2 position;out vec2 uv;void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`;
 const fragment=`#version 300 es
 precision highp float;uniform sampler2D scene;uniform vec2 texel;uniform float bloom;uniform bool aa;in vec2 uv;out vec4 color;
 float luma(vec3 c){return dot(c,vec3(.299,.587,.114));}
 vec3 sampleScene(vec2 p){return texture(scene,clamp(p,vec2(0.),vec2(1.))).rgb;}
 void main(){vec3 c=sampleScene(uv);vec3 n=sampleScene(uv+vec2(0.,texel.y)),s=sampleScene(uv-vec2(0.,texel.y)),e=sampleScene(uv+vec2(texel.x,0.)),w=sampleScene(uv-vec2(texel.x,0.));
 // Contrast-gated antialiasing preserves flat surfaces and avoids temporal trails.
 float contrast=max(max(luma(n),luma(s)),max(luma(e),luma(w)))-min(min(luma(n),luma(s)),min(luma(e),luma(w)));
 if(aa&&contrast>.16)c=mix(c,(n+s+e+w)*.25,.18);
 vec3 glow=vec3(0.);for(int i=0;i<8;i++){float a=float(i)*.785398;vec3 v=sampleScene(uv+vec2(cos(a),sin(a))*texel*5.);glow+=v*smoothstep(.78,.98,luma(v));}c+=glow*bloom*.125;
 // Sprites are already tone mapped. Grade gently in display space; no second ACES pass.
 c=mix(vec3(luma(c)),c,1.035);c=(c-.5)*1.025+.5;color=vec4(clamp(c,0.,1.),1.);}`;
 function fail(){ready=false;output.style.display='none';source.style.opacity='1';}
 try{gl=output.getContext('webgl2',{alpha:false,antialias:false,preserveDrawingBuffer:false});if(!gl)throw Error('WebGL2 unavailable');
  function shader(type,text){const s=gl.createShader(type);gl.shaderSource(s,text);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;}
  program=gl.createProgram();const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,fragment);gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));gl.deleteShader(vs);gl.deleteShader(fs);gl.useProgram(program);
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);const loc=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);for(const key of ['scene','texel','bloom','aa'])uniforms[key]=gl.getUniformLocation(program,key);gl.uniform1i(uniforms.scene,0);ready=true;
 }catch{fail();}
 output.addEventListener('webglcontextlost',e=>{e.preventDefault();fail();});
 // Sustained slow presentation automatically drops bloom/AA; never alter simulation timing.
 let slow=0,adaptive=false,suspended=false;
 window.KawVisual={suspend(value){suspended=!!value;if(suspended){output.style.display='none';source.style.opacity='1';}},get quality(){return quality;},get scale(){return adaptive?1:presets[quality].scale;},get status(){return quality==='low'||adaptive?'Canvas · battery saver':ready?(adaptive?'GPU · reduced effects':'GPU · '+quality):'Canvas fallback';},setQuality(value){if(!presets[value])return;quality=value;adaptive=false;slow=0;try{localStorage.setItem('kaw-visual-quality',value);}catch{}if(typeof resize==='function')resize();},present(){if(suspended)return;if(quality==='low'||adaptive){output.style.display='none';source.style.opacity='1';return;}if(!ready||!source.width||!source.height)return;const start=performance.now();try{
  const rect=source.getBoundingClientRect(),parent=source.parentElement.getBoundingClientRect();output.style.left=(rect.left-parent.left+source.parentElement.scrollLeft)+'px';output.style.top=(rect.top-parent.top+source.parentElement.scrollTop)+'px';output.style.width=rect.width+'px';output.style.height=rect.height+'px';
  if(output.width!==source.width||output.height!==source.height){output.width=source.width;output.height=source.height;gl.viewport(0,0,output.width,output.height);}
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,source);gl.uniform2f(uniforms.texel,1/source.width,1/source.height);gl.uniform1f(uniforms.bloom,adaptive?0:presets[quality].bloom);gl.uniform1i(uniforms.aa,adaptive?0:presets[quality].aa);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);output.style.display='block';source.style.opacity='0';
  slow=performance.now()-start>8?slow+1:Math.max(0,slow-1);if(slow>90){adaptive=true;slow=0;if(typeof resize==='function')resize();}
 }catch{fail();}}};
 const control=document.getElementById('visualQuality');if(control){control.value=quality;control.onchange=()=>window.KawVisual.setQuality(control.value);}
})();

// Fog-of-war presentation only: the simulation's visibility mask remains authoritative.
// Two cached cloud tiles drift over an opaque unknown-region mask. No enemy geometry
// or undiscovered terrain can show through the cloud texture, even on Low quality.
window.KawFog=(()=>{
 const tile=document.createElement('canvas');tile.width=tile.height=256;
 const paint=tile.getContext('2d');let seed=8137;
 const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<65;i++){const x=random()*256,y=random()*256,r=20+random()*48;
  for(const ox of [-256,0,256])for(const oy of [-256,0,256]){const g=paint.createRadialGradient(x+ox,y+oy,0,x+ox,y+oy,r);g.addColorStop(0,'rgba(166,188,189,.14)');g.addColorStop(1,'rgba(166,188,189,0)');paint.fillStyle=g;paint.fillRect(x+ox-r,y+oy-r,r*2,r*2);}}
 const layer=document.createElement('canvas'),mask=document.createElement('canvas');
 let lastMask='',previousVisible=null,previousSeen=null;
 function draw(ctx,state,cam,viewport,cell,n){
  // Half-resolution clouds bound fill cost on phones; masks are redrawn only when
  // visibility or the viewport changes. Clouds animate without per-cell gradients.
  const w=Math.ceil(viewport.width/2),h=Math.ceil(viewport.height/2);
  if(layer.width!==w||layer.height!==h){layer.width=w;layer.height=h;lastMask='';}
  const left=Math.max(0,Math.floor(cam.x/cell)),top=Math.max(0,Math.floor(cam.y/cell)),right=Math.min(n,Math.ceil((cam.x+viewport.width)/cell)),bottom=Math.min(n,Math.ceil((cam.y+viewport.height)/cell));
  const key=String(n);let dirty=key!==lastMask||previousVisible?.length!==state.visible.length;
  if(!dirty)for(let y=0;y<n&&!dirty;y++)for(let x=0;x<n;x++){const i=y*n+x;if(previousVisible[i]!==state.visible[i]||previousSeen[i]!==state.seen[i]){dirty=true;break;}}
  const m=mask.getContext('2d');if(dirty){
   // Distance to hidden regions feathers INTO visible terrain. Hidden cells retain
   // their exact opacity, so smoothing cannot reveal undiscovered enemies/terrain.
   const detail=4,side=n*detail,total=side*side,feather=detail*.95;
   mask.width=mask.height=side;const distance=new Float32Array(total),density=new Uint8Array(total);
   for(let y=0;y<side;y++)for(let x=0;x<side;x++){const i=y*side+x,c=Math.floor(y/detail)*n+Math.floor(x/detail);distance[i]=state.visible[c]?9999:0;density[i]=state.visible[c]?0:state.seen[c]?186:255;}
   const diagonal=Math.SQRT2;
   const relax=(i,j,cost)=>{const d=distance[j]+cost;if(d<distance[i]){distance[i]=d;density[i]=density[j];}};
   for(let y=0;y<side;y++)for(let x=0;x<side;x++){const i=y*side+x;if(x)relax(i,i-1,1);if(y){relax(i,i-side,1);if(x)relax(i,i-side-1,diagonal);if(x+1<side)relax(i,i-side+1,diagonal);}}
   for(let y=side-1;y>=0;y--)for(let x=side-1;x>=0;x--){const i=y*side+x;if(x+1<side)relax(i,i+1,1);if(y+1<side){relax(i,i+side,1);if(x)relax(i,i+side-1,diagonal);if(x+1<side)relax(i,i+side+1,diagonal);}}
   const pixels=m.createImageData(side,side);for(let y=0;y<side;y++)for(let x=0;x<side;x++){const i=y*side+x,cellIndex=Math.floor(y/detail)*n+Math.floor(x/detail),t=Math.min(1,Math.max(0,(distance[i]-1.5)/feather));pixels.data[i*4+3]=state.visible[cellIndex]?Math.round(density[i]*(1-t*t*(3-2*t))):state.seen[cellIndex]?186:255;}
   m.putImageData(pixels,0,0);previousVisible=new Uint8Array(state.visible);previousSeen=new Uint8Array(state.seen);lastMask=key;
  }
  const g=layer.getContext('2d');g.globalCompositeOperation='source-over';g.fillStyle='#26383e';g.fillRect(0,0,w,h);
  const t=performance.now()/1000;for(let pass=0;pass<2;pass++){const size=pass?320:220,dx=((cam.x/2-t*(pass?2:4))%size+size)%size,dy=((cam.y/2+t*(pass?1:2))%size+size)%size;g.globalAlpha=pass?.7:1;for(let y=-size;y<h+size;y+=size)for(let x=-size;x<w+size;x+=size)g.drawImage(tile,x-dx,y-dy,size,size);}
  g.globalAlpha=1;g.globalCompositeOperation='destination-in';g.imageSmoothingEnabled=true;g.drawImage(mask,cam.x/cell*4,cam.y/cell*4,viewport.width/cell*4,viewport.height/cell*4,0,0,w,h);g.imageSmoothingEnabled=true;g.globalCompositeOperation='source-over';
  ctx.save();ctx.translate(cam.x,cam.y);ctx.drawImage(layer,0,0,viewport.width,viewport.height);ctx.restore();
 }
 return {draw};
})();
