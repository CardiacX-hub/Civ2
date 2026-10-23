/* Animated battle illustration: local motion fields keep bodies grounded while
 * wings, foliage, falling water and fire move independently. One GPU pass, no
 * per-frame image uploads. Stops completely outside the home page or hidden tab. */
(()=>{
 const menu=document.getElementById('menu'),canvas=document.createElement('canvas');canvas.id='menuAtmosphere';canvas.setAttribute('aria-hidden','true');menu.prepend(canvas);
 const gl=canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'}),reduced=matchMedia('(prefers-reduced-motion: reduce)');if(!gl)return;
 const vertex='attribute vec2 p; varying vec2 v; void main(){v=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
 const fragment=`precision highp float;
 varying vec2 v; uniform sampler2D art;uniform vec2 resolution;uniform float time;
 float oval(vec2 p,vec2 c,vec2 r){return 1.-smoothstep(.45,1.,length((p-c)/r));}
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 float turbulence(vec2 p){return noise(p)*.57+noise(p*2.03)*.28+noise(p*4.11)*.15;}
 void main(){
  float aspect=resolution.x/resolution.y,source=1672./941.;vec2 uv=vec2(v.x,1.-v.y);
  if(aspect>source)uv.y=(uv.y-.5)*source/aspect+.5;else uv.x=(uv.x-.5)*aspect/source+.5;
  vec2 q=uv;float t=time;
  // Feather fans flex about the shoulders; the head and talons stay stable.
  float left=oval(uv,vec2(.095,.115),vec2(.19,.23)),right=oval(uv,vec2(.268,.09),vec2(.065,.21));
  q.y+=sin(t*2.15)*(.019*left+.027*right);q.x+=sin(t*2.15+.4)*(.007*left-.009*right);
  // Ships cruise on a separate slow field, with a slight engine vibration.
  float ship=oval(uv,vec2(.443,.13),vec2(.147,.15));q+=vec2(sin(t*.32)*.009,cos(t*.32)*.004)*ship;
  float dragonWing=oval(uv,vec2(.81,.035),vec2(.22,.095));q.y+=sin(t*1.45)*.01*dragonWing;
  float canopy=oval(uv,vec2(.88,.49),vec2(.18,.22));q.x+=sin(t*1.8+uv.y*22.)*.0028*canopy;
  // River motion follows the perspective channel, increasing toward camera.
  float channel=1.-smoothstep(.025,.095,abs(uv.x-(.50+.055*uv.y)));
  float water=channel*smoothstep(.60,.9,uv.y);q.x+=sin(uv.y*145.-t*4.)*.0018*water;q.y+=sin(uv.x*240.+uv.y*65.-t*5.)*.0023*water;
  float fall=oval(uv,vec2(.548,.927),vec2(.025,.09));q.y+=sin(uv.y*95.-t*8.)*.004*fall;
  vec3 color=texture2D(art,clamp(q,.001,.999)).rgb;
  // Advected turbulent fire volumes, widening away from the dragon's mouth.
  vec2 mouth=vec2(.709,.18),tip=vec2(.622,.31),axis=tip-mouth;float along=clamp(dot(uv-mouth,axis)/dot(axis,axis),0.,1.);
  vec2 nearest=mouth+along*axis;float n=turbulence(uv*110.-vec2(-t*2.,t*3.));float width=.003+along*.014;
  float flame=(1.-smoothstep(width*.3,width*(.75+n),length(uv-nearest)))*smoothstep(0.,.06,along)*(1.-smoothstep(.88,1.,along));
  color+=mix(vec3(1.,.12,.01),vec3(1.,.8,.25),n)*flame*(.18+.22*sin(t*5.+along*10.));
  // Phoenix embers, waterfall glints, and restrained bioluminescent foliage.
  float phoenix=oval(uv,vec2(.16,.26),vec2(.16,.29));color+=vec3(.08,.025,.002)*phoenix*(.5+.5*sin(t*5.+uv.y*35.));
  color+=vec3(.04,.07,.08)*water*pow(max(0.,sin(uv.y*290.-t*6.+noise(uv*90.)*5.)),18.);
  // Small distant original delta craft traverse the sky, with blue exhaust.
  for(int i=0;i<3;i++){float fi=float(i),x=fract(t*(.012+fi*.003)+fi*.31),y=.11+fi*.07;vec2 d=(uv-vec2(x,y))*vec2(1.,1.77);float hull=1.-smoothstep(.001,.0025,abs(d.y)+abs(d.x)*.22);hull*=1.-smoothstep(.009,.014,abs(d.x));float exhaust=exp(-length((d-vec2(.015,0.))*vec2(70.,750.)));color=mix(color,vec3(.49,.64,.72),hull*.8)+vec3(.01,.25,.45)*exhaust;}
  gl_FragColor=vec4(color,1.);
 }`;
 function shader(type,source){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;}
 let program,ready=false,raf=0,previous=0,elapsed=0,last=0;
 try{program=gl.createProgram();const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,fragment);gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error('Menu shader link failed');gl.useProgram(program);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const p=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0);
 const texture=gl.createTexture(),image=new Image();image.onload=()=>{gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,image);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);ready=true;sync();};image.src='assets/four-faction-battle.jpg?v=2';
 }catch(error){canvas.remove();console.warn('Animated menu unavailable:',error.message);return;}
 const time=gl.getUniformLocation(program,'time'),resolution=gl.getUniformLocation(program,'resolution');
 function active(){return ready&&!document.hidden&&!reduced.matches&&!menu.hidden&&getComputedStyle(menu).display!=='none'&&menu.dataset.page==='home';}
 function frame(now){raf=0;if(!active()){canvas.hidden=true;return;}canvas.hidden=false;if(now-last>32){elapsed+=previous?Math.min(.1,(now-previous)/1000):0;previous=now;last=now;const r=menu.getBoundingClientRect(),scale=Math.min(1.5,devicePixelRatio||1,1920/r.width);const w=Math.max(1,Math.round(r.width*scale)),h=Math.max(1,Math.round(r.height*scale));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}gl.uniform2f(resolution,w,h);gl.uniform1f(time,elapsed);gl.drawArrays(gl.TRIANGLES,0,6);}raf=requestAnimationFrame(frame);}
 function sync(){if(!active()){cancelAnimationFrame(raf);raf=0;previous=0;canvas.hidden=true;}else if(!raf)raf=requestAnimationFrame(frame);}
 new MutationObserver(sync).observe(menu,{attributes:true,attributeFilter:['hidden','style','data-page','class']});document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();ready=false;sync();});window.KawMenuAtmosphere={get active(){return active();},get time(){return elapsed;}};
})();
