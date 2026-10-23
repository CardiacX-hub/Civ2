var xf=0,Oh=1,vf=2;var Bh=1,ll=2,si=3,Vn=0,$t=1,Mt=2,Rt=0,gi=1,Ni=2,zh=3,Hh=4,cl=5,_n=100,yf=101,_f=102,Mf=103,Sf=104,ds=200,bf=201,wf=202,Tf=203,Ba=204,za=205,Eo=206,Ef=207,Ao=208,Af=209,Cf=210,Rf=211,Pf=212,If=213,Df=214,hl=0,ul=1,dl=2,Zi=3,fl=4,pl=5,ml=6,gl=7,xl=0,Lf=1,Nf=2,Xn=0,vl=1,yl=2,_l=3,rr=4,Ml=5,Sl=6,bl=7,Eh="attached",Uf="detached",kh=300,fs=301,ps=302,wl=303,Tl=304,Co=306,Nt=1e3,jn=1001,Vs=1002,yt=1003,El=1004;var ms=1005;var Ut=1006,or=1007;var cn=1008;var En=1009,Vh=1010,Gh=1011,ar=1012,Al=1013,ri=1014,Nn=1015,bt=1016,Cl=1017,Rl=1018,Ui=1020,Wh=35902,Ro=35899,Xh=1021,lr=1022,hn=1023,Gs=1026,Fi=1027,Pl=1028,Il=1029,qh=1030,Dl=1031;var Ll=1033,Po=33776,Io=33777,Do=33778,Lo=33779,Nl=35840,Ul=35841,Fl=35842,Ol=35843,Bl=36196,zl=37492,Hl=37496,kl=37808,Vl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,jl=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,$l=37820,ec=37821,tc=36492,nc=36494,ic=36495,sc=36283,rc=36284,oc=36285,ac=36286,Ff=2200,Of=2201,Bf=2202,Ji=2300,Qi=2301,Oa=2302,Yi=2400,ji=2401,Vr=2402,lc=2500,zf=2501,Yh=0,No=1,cr=2,cc=3200,hr=3201;var Uo=0,Hf=1,An="",ct="srgb",Zt="srgb-linear",Gr="linear",dt="srgb";var qi=7680;var Ah=519,kf=512,Vf=513,Gf=514,jh=515,Wf=516,Xf=517,qf=518,Yf=519,Ha=35044,gs=35048;var Kh="300 es",kn=2e3,Wr=2001;var Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=1234567,Br=Math.PI/180,$i=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function jm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Km(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function Zm(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function Jm(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function Qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tg(i,e){return i+Math.random()*(e-i)}function ng(i){return i*(.5-Math.random())}function ig(i){i!==void 0&&(Rd=i);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sg(i){return i*Br}function rg(i){return i*$i}function og(i){return(i&i-1)===0&&i!==0}function ag(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*x,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*x,a*c);break;case"ZYZ":i.set(l*x,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Un={DEG2RAD:Br,RAD2DEG:$i,generateUUID:Dn,clamp:nt,euclideanModulo:Zh,mapLinear:jm,inverseLerp:Km,lerp:zr,damp:Zm,pingpong:Jm,smoothstep:Qm,smootherstep:$m,randInt:eg,randFloat:tg,randFloatSpread:ng,seededRandom:ig,degToRad:sg,radToDeg:rg,isPowerOfTwo:og,ceilPowerOfTwo:ag,floorPowerOfTwo:lg,setQuaternionFromProperEuler:cg,normalize:mt,denormalize:Hn},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],x=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=m;return}if(h!==m||l!==d||c!==f||u!==x){let p=1-a,g=l*d+c*f+u*x+h*m,v=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let R=Math.sqrt(M),S=Math.atan2(R,g*v);p=Math.sin(p*S)/R,a=Math.sin(a*S)/R}let y=a*v;if(l=l*p+d*y,c=c*p+f*y,u=u*p+x*y,h=h*p+m*y,p===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return e[t]=a*x+u*h+l*f-c*d,e[t+1]=l*x+u*d+c*h-a*f,e[t+2]=c*x+u*f+a*d-l*h,e[t+3]=u*x-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"YZX":this._x=d*u*h+c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h-d*f*x;break;case"XZY":this._x=d*u*h-c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zc=new L,Pd=new Wt,et=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],x=n[8],m=s[0],p=s[3],g=s[6],v=s[1],M=s[4],y=s[7],R=s[2],S=s[5],T=s[8];return r[0]=o*m+a*v+l*R,r[3]=o*p+a*M+l*S,r[6]=o*g+a*y+l*T,r[1]=c*m+u*v+h*R,r[4]=c*p+u*M+h*S,r[7]=c*g+u*y+h*T,r[2]=d*m+f*v+x*R,r[5]=d*p+f*M+x*S,r[8]=d*g+f*y+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,x=t*h+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/x;return e[0]=h*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=d*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jc=new et;function Jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){let i=Ws("canvas");return i.style.display="block",i}var Id={};function Xs(i){i in Id||(Id[i]=!0,console.warn(i))}function Kf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Dd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){let i={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zt]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),i}var st=hg();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Ws("canvas")),As.width=e.width,As.height=e.height;let s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=As}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ug=0,qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qc(s[o].image)):r.push(Qc(s[o]))}else r=Qc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dg=0,$c=new L,Bt=class i extends Zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=Ut,o=cn,a=hn,l=En,c=i.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Dn(),this.name="",this.source=new qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nt:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nt:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=kh;Bt.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],x=l[9],m=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(x+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,R=(g+1)/2,S=(u+d)/4,T=(h+m)/4,A=(x+p)/4;return M>y&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=T/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=A/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-x)*(p-x)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(h-m)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Bt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new qs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pt=class extends Va{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},es=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),ha.subVectors(this.max,Rr),Cs.subVectors(e.a,Rr),Rs.subVectors(e.b,Rr),Ps.subVectors(e.c,Rr),Ai.subVectors(Rs,Cs),Ci.subVectors(Ps,Rs),Vi.subVectors(Cs,Ps);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Vi.z,Vi.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Vi.z,0,-Vi.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Vi.y,Vi.x,0];return!eh(t,Cs,Rs,Ps,ha)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,Cs,Rs,Ps,ha))?!1:(ua.crossVectors(Ai,Ci),t=[ua.x,ua.y,ua.z],eh(t,Cs,Rs,Ps,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,ca=new Tt,Cs=new L,Rs=new L,Ps=new L,Ai=new L,Ci=new L,Vi=new L,Rr=new L,ha=new L,ua=new L,Gi=new L;function eh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var fg=new Tt,Pr=new L,th=new L,dn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(th)),this.expandByPoint(Pr.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hi=new L,nh=new L,da=new L,Ri=new L,ih=new L,fa=new L,sh=new L,ts=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nh.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(nh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(da),a=Ri.dot(this.direction),l=-Ri.dot(da),c=Ri.lengthSq(),u=Math.abs(1-o*o),h,d,f,x;if(u>0)if(h=o*l-a,d=o*a-l,x=r*u,h>=0)if(d>=-x)if(d<=x){let m=1/u;h*=m,d*=m,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nh).addScaledVector(da,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){ih.subVectors(t,e),fa.subVectors(n,e),sh.crossVectors(ih,fa);let o=this.direction.dot(sh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);let l=a*this.direction.dot(fa.crossVectors(Ri,fa));if(l<0)return null;let c=a*this.direction.dot(ih.cross(Ri));if(c<0||l+c>o)return null;let u=-a*Ri.dot(sh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,x,m,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,x,m,p)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,x,m,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=x,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,x=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+x*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,x=c*u,m=c*h;t[0]=d+m*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-x,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,x=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,x=a*u,m=a*h;t[0]=l*u,t[4]=x*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,x=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=x*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+x,t[10]=d-m*h}else if(e.order==="XZY"){let d=o*l,f=o*c,x=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pg,e,mg)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Pi.crossVectors(n,vn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Pi.crossVectors(n,vn)),Pi.normalize(),pa.crossVectors(vn,Pi),s[0]=Pi.x,s[4]=pa.x,s[8]=vn.x,s[1]=Pi.y,s[5]=pa.y,s[9]=vn.y,s[2]=Pi.z,s[6]=pa.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],x=n[2],m=n[6],p=n[10],g=n[14],v=n[3],M=n[7],y=n[11],R=n[15],S=s[0],T=s[4],A=s[8],w=s[12],_=s[1],b=s[5],E=s[9],D=s[13],U=s[2],N=s[6],O=s[10],Y=s[14],k=s[3],H=s[7],oe=s[11],ae=s[15];return r[0]=o*S+a*_+l*U+c*k,r[4]=o*T+a*b+l*N+c*H,r[8]=o*A+a*E+l*O+c*oe,r[12]=o*w+a*D+l*Y+c*ae,r[1]=u*S+h*_+d*U+f*k,r[5]=u*T+h*b+d*N+f*H,r[9]=u*A+h*E+d*O+f*oe,r[13]=u*w+h*D+d*Y+f*ae,r[2]=x*S+m*_+p*U+g*k,r[6]=x*T+m*b+p*N+g*H,r[10]=x*A+m*E+p*O+g*oe,r[14]=x*w+m*D+p*Y+g*ae,r[3]=v*S+M*_+y*U+R*k,r[7]=v*T+M*b+y*N+R*H,r[11]=v*A+M*E+y*O+R*oe,r[15]=v*w+M*D+y*Y+R*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],m=e[7],p=e[11],g=e[15];return x*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+m*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+g*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],m=e[13],p=e[14],g=e[15],v=h*p*c-m*d*c+m*l*f-a*p*f-h*l*g+a*d*g,M=x*d*c-u*p*c-x*l*f+o*p*f+u*l*g-o*d*g,y=u*m*c-x*h*c+x*a*f-o*m*f-u*a*g+o*h*g,R=x*h*l-u*m*l-x*a*d+o*m*d+u*a*p-o*h*p,S=t*v+n*M+s*y+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=v*T,e[1]=(m*d*r-h*p*r-m*s*f+n*p*f+h*s*g-n*d*g)*T,e[2]=(a*p*r-m*l*r+m*s*c-n*p*c-a*s*g+n*l*g)*T,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*T,e[4]=M*T,e[5]=(u*p*r-x*d*r+x*s*f-t*p*f-u*s*g+t*d*g)*T,e[6]=(x*l*r-o*p*r-x*s*c+t*p*c+o*s*g-t*l*g)*T,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*T,e[8]=y*T,e[9]=(x*h*r-u*m*r-x*n*f+t*m*f+u*n*g-t*h*g)*T,e[10]=(o*m*r-x*a*r+x*n*c-t*m*c-o*n*g+t*a*g)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*T,e[12]=R*T,e[13]=(u*m*s-x*h*s+x*n*d-t*m*d-u*n*p+t*h*p)*T,e[14]=(x*a*s-o*m*s-x*n*l+t*m*l+o*n*p-t*a*p)*T,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,x=r*h,m=o*u,p=o*h,g=a*h,v=l*c,M=l*u,y=l*h,R=n.x,S=n.y,T=n.z;return s[0]=(1-(m+g))*R,s[1]=(f+y)*R,s[2]=(x-M)*R,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+g))*S,s[6]=(p+v)*S,s[7]=0,s[8]=(x+M)*T,s[9]=(p-v)*T,s[10]=(1-(d+m))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);let c=1/r,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=kn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),x,m;if(l)x=r/(o-r),m=o*r/(o-r);else if(a===kn)x=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Wr)x=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),x,m;if(l)x=1/(o-r),m=o/(o-r);else if(a===kn)x=-2/(o-r),m=-(o+r)/(o-r);else if(a===Wr)x=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new L,Bn=new Ve,pg=new L(0,0,0),mg=new L(1,1,1),Pi=new L,pa=new L,vn=new L,Nd=new Ve,Ud=new Wt,Ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gg=0,Fd=new L,Ds=new Wt,ui=new Ve,ma=new L,Ir=new L,xg=new L,vg=new Wt,Od=new L(1,0,0),Bd=new L(0,1,0),zd=new L(0,0,1),Hd={type:"added"},yg={type:"removed"},Ls={type:"childadded",child:null},rh={type:"childremoved",child:null},ht=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ln,n=new Wt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new et}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Ir,ma,this.up):ui.lookAt(ma,Ir,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yg),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ht.DEFAULT_UP=new L(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new L,di=new L,oh=new L,fi=new L,Ns=new L,Us=new L,kd=new L,ah=new L,lh=new L,ch=new L,hh=new rt,uh=new rt,dh=new rt,Li=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),di.subVectors(n,t),oh.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(di),l=zn.dot(oh),c=di.dot(di),u=di.dot(oh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,x=(o*u-a*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hh.setScalar(0),uh.setScalar(0),dh.setScalar(0),hh.fromBufferAttribute(e,t),uh.fromBufferAttribute(e,n),dh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hh,r.x),o.addScaledVector(uh,r.y),o.addScaledVector(dh,r.z),o}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),di.subVectors(e,t),zn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,n),Us.subVectors(r,n),ah.subVectors(e,n);let l=Ns.dot(ah),c=Us.dot(ah);if(l<=0&&c<=0)return t.copy(n);lh.subVectors(e,s);let u=Ns.dot(lh),h=Us.dot(lh);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ns,o);ch.subVectors(e,r);let f=Ns.dot(ch),x=Us.dot(ch);if(x>=0&&f<=x)return t.copy(r);let m=f*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Us,a);let p=u*x-f*h;if(p<=0&&h-u>=0&&f-x>=0)return kd.subVectors(r,s),a=(h-u)/(h-u+(f-x)),t.copy(s).addScaledVector(kd,a);let g=1/(p+m+d);return o=m*g,a=d*g,t.copy(n).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},ga={h:0,s:0,l:0};function fh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Zh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fh(o,r,e+1/3),this.g=fh(o,r,e),this.b=fh(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let n=Zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return st.workingToColorSpace(tn.copy(this),e),Math.round(nt(tn.r*255,0,255))*65536+Math.round(nt(tn.g*255,0,255))*256+Math.round(nt(tn.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=ct){st.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(ga);let n=zr(Ii.h,ga.h,t),s=zr(Ii.s,ga.s,t),r=zr(Ii.l,ga.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new we;we.NAMES=Zf;var _g=0,nn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=gi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==_n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ct=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new L,xa=new le,Mg=0,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}};var qr=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yr=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ke=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sg=0,In=new Ve,ph=new ht,Fs=new L,yn=new Tt,Dr=new Tt,Kt=new L,ot=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?Yr:qr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(yn.min,Dr.min),yn.expandByPoint(Kt),Kt.addVectors(yn.max,Dr.max),yn.expandByPoint(Kt)):(yn.expandByPoint(Dr.min),yn.expandByPoint(Dr.max))}yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),Kt.add(Fs)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new L,l[A]=new L;let c=new L,u=new L,h=new L,d=new le,f=new le,x=new le,m=new L,p=new L;function g(A,w,_){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,w),x.fromBufferAttribute(r,_),u.sub(c),h.sub(c),f.sub(d),x.sub(d);let b=1/(f.x*x.y-x.x*f.y);isFinite(b)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(b),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(b),a[A].add(m),a[w].add(m),a[_].add(m),l[A].add(p),l[w].add(p),l[_].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,w=v.length;A<w;++A){let _=v[A],b=_.start,E=_.count;for(let D=b,U=b+E;D<U;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new L,y=new L,R=new L,S=new L;function T(A){R.fromBufferAttribute(s,A),S.copy(R);let w=a[A];M.copy(w),M.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(S,w);let b=y.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,b)}for(let A=0,w=v.length;A<w;++A){let _=v[A],b=_.start,E=_.count;for(let D=b,U=b+E;D<U;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,x=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let g=0;g<u;g++)d[x++]=c[f++]}return new Lt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vd=new Ve,Wi=new ts,va=new dn,Gd=new L,ya=new L,_a=new L,Ma=new L,mh=new L,Sa=new L,Wd=new L,ba=new L,Ie=class extends ht{constructor(e=new ot,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(mh.fromBufferAttribute(h,e),o?Sa.addScaledVector(mh,u):Sa.addScaledVector(mh.sub(t),u))}t.add(Sa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(va.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(va,Gd)===null||Wi.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=d.length;x<m;x++){let p=d[x],g=o[p.materialIndex],v=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,R=M;y<R;y+=3){let S=a.getX(y),T=a.getX(y+1),A=a.getX(y+2);s=wa(this,g,e,n,c,u,h,S,T,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let p=x,g=m;p<g;p+=3){let v=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);s=wa(this,o,e,n,c,u,h,v,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=d.length;x<m;x++){let p=d[x],g=o[p.materialIndex],v=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,R=M;y<R;y+=3){let S=y,T=y+1,A=y+2;s=wa(this,g,e,n,c,u,h,S,T,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let p=x,g=m;p<g;p+=3){let v=p,M=p+1,y=p+2;s=wa(this,o,e,n,c,u,h,v,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function bg(i,e,t,n,s,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Vn,a),l===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:i}}function wa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ya),i.getVertexPosition(l,_a),i.getVertexPosition(c,Ma);let u=bg(i,e,t,n,ya,_a,Ma,Wd);if(u){let h=new L;Li.getBarycoord(Wd,ya,_a,Ma,h),s&&(u.uv=Li.getInterpolatedAttribute(s,a,l,c,h,new le)),r&&(u.uv1=Li.getInterpolatedAttribute(r,a,l,c,h,new le)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Li.getNormal(ya,_a,Ma,d.normal),u.face=d,u.barycoord=h}return u}var Xt=class i extends ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function x(m,p,g,v,M,y,R,S,T,A,w){let _=y/T,b=R/A,E=y/2,D=R/2,U=S/2,N=T+1,O=A+1,Y=0,k=0,H=new L;for(let oe=0;oe<O;oe++){let ae=oe*b-D;for(let fe=0;fe<N;fe++){let B=fe*_-E;H[m]=B*v,H[p]=ae*M,H[g]=U,c.push(H.x,H.y,H.z),H[m]=0,H[p]=0,H[g]=S>0?1:-1,u.push(H.x,H.y,H.z),h.push(fe/T),h.push(1-oe/A),Y+=1}}for(let oe=0;oe<A;oe++)for(let ae=0;ae<T;ae++){let fe=d+ae+N*oe,B=d+ae+N*(oe+1),Q=d+(ae+1)+N*(oe+1),se=d+(ae+1)+N*oe;l.push(fe,B,se),l.push(B,Q,se),k+=6}a.addGroup(f,k,w),f+=k,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=xs(i[t]);for(let s in n)e[s]=n[s]}return e}function wg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Ft={clone:xs,merge:sn},Tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,it=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},jr=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new L,Xd=new le,qd=new le,Gt=class extends jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Xd,qd),t.subVectors(qd,Xd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=-90,Bs=1,Wa=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Os,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Os,Bs,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Os,Bs,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Os,Bs,e,t);a.layers=this.layers,this.add(a);let l=new Gt(Os,Bs,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Os,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Kr=class extends Bt{constructor(e=[],t=fs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xa=class extends pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xt(5,5,5),r=new it({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Rt});r.uniforms.tEquirect.value=t;let o=new Ie(s,r),a=t.minFilter;return t.minFilter===cn&&(t.minFilter=Ut),new Wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ue=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),g=this._getHandJoint(c,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Zr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xi=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new L,Ks=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ta=new L,Yd=new L,Jr=class extends ht{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ta.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Ta);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Ta.setFromMatrixPosition(e.matrixWorld),Yd.setFromMatrixPosition(this.matrixWorld);let n=Ta.distanceTo(Yd)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},jd=new L,Kd=new rt,Zd=new rt,Cg=new L,Jd=new Ve,Ea=new L,gh=new dn,Qd=new Ve,xh=new ts,Qr=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingBox.expandByPoint(Ea)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingSphere.expandByPoint(Ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gh.copy(this.boundingSphere),gh.applyMatrix4(s),e.ray.intersectsSphere(gh)!==!1&&(Qd.copy(s).invert(),xh.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&xh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Kd.fromBufferAttribute(s.attributes.skinIndex,e),Zd.fromBufferAttribute(s.attributes.skinWeight,e),jd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Zd.getComponent(r);if(o!==0){let a=Kd.getComponent(r);Jd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Cg.copy(jd).applyMatrix4(Jd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Zs=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mn=class extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=yt,u=yt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$d=new Ve,Rg=new Ve,$r=class i{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Rg;$d.multiplyMatrices(a,t[r]),$d.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Mn(t,e,e,hn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zs),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Jn=class extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new Ve,ef=new Ve,Aa=[],tf=new Tt,Pg=new Ve,Lr=new Ie,Nr=new dn,Jt=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),tf.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(tf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Nr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),ef.multiplyMatrices(n,zs),Lr.matrixWorld=ef,Lr.raycast(e,Aa);for(let o=0,a=Aa.length;o<a;o++){let l=Aa[o];l.instanceId=r,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mn(new Float32Array(s*this.count),s,this.count,Pl,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vh=new L,Ig=new L,Dg=new et,Yn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vh.subVectors(n,t).cross(Ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dg.getNormalMatrix(e),s=this.coplanarPoint(vh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new dn,Lg=new le(.5,.5),Ca=new L,Js=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],x=r[8],m=r[9],p=r[10],g=r[11],v=r[12],M=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-u,g-x,R-v).normalize(),s[1].setComponents(c+o,f+u,g+x,R+v).normalize(),s[2].setComponents(c+a,f+h,g+m,R+M).normalize(),s[3].setComponents(c-a,f-h,g-m,R-M).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,g-p,R-y).normalize();else if(s[4].setComponents(c-l,f-d,g-p,R-y).normalize(),t===kn)s[5].setComponents(c+l,f+d,g+p,R+y).normalize();else if(t===Wr)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let t=Lg.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ca.x=s.normal.x>0?e.max.x:e.min.x,Ca.y=s.normal.y>0?e.max.y:e.min.y,Ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qs=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qa=new L,Ya=new L,nf=new Ve,Ur=new ts,Ra=new dn,yh=new L,sf=new L,ns=class extends ht{constructor(e=new ot,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qa.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qa.distanceTo(Ya);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;nf.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let m=f,p=x-1;m<p;m+=c){let g=u.getX(m),v=u.getX(m+1),M=Pa(this,e,Ur,l,g,v,m);M&&t.push(M)}if(this.isLineLoop){let m=u.getX(x-1),p=u.getX(f),g=Pa(this,e,Ur,l,m,p,x-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let m=f,p=x-1;m<p;m+=c){let g=Pa(this,e,Ur,l,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){let m=Pa(this,e,Ur,l,x-1,f,x-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(qa.fromBufferAttribute(a,s),Ya.fromBufferAttribute(a,r),t.distanceSqToSegment(qa,Ya,yh,sf)>n)return;yh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yh);if(!(c<e.near||c>e.far))return{distance:c,point:sf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var rf=new L,of=new L,eo=class extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rf.fromBufferAttribute(t,s),of.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rf.distanceTo(of);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},to=class extends ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$s=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},af=new Ve,Ch=new ts,Ia=new dn,Da=new L,is=class extends ht{constructor(e=new ot,t=new $s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;af.copy(s).invert(),Ch.copy(e.ray).applyMatrix4(af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let x=d,m=f;x<m;x++){let p=c.getX(x);Da.fromBufferAttribute(h,p),lf(Da,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=d,m=f;x<m;x++)Da.fromBufferAttribute(h,x),lf(Da,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lf(i,e,t,n,s,r,o){let a=Ch.distanceSqToPoint(i);if(a<t){let l=new L;Ch.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Sn=class extends Bt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class extends Bt{constructor(e,t,n=ri,s,r,o,a=yt,l=yt,c,u=Gs,h=1){if(u!==Gs&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},no=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var tt=class i extends ot{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],x=0,m=[],p=n/2,g=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(f,2));function v(){let y=new L,R=new L,S=0,T=(t-e)/n;for(let A=0;A<=r;A++){let w=[],_=A/r,b=_*(t-e)+e;for(let E=0;E<=s;E++){let D=E/s,U=D*l+a,N=Math.sin(U),O=Math.cos(U);R.x=b*N,R.y=-_*n+p,R.z=b*O,h.push(R.x,R.y,R.z),y.set(N,T,O).normalize(),d.push(y.x,y.y,y.z),f.push(D,1-_),w.push(x++)}m.push(w)}for(let A=0;A<s;A++)for(let w=0;w<r;w++){let _=m[w][A],b=m[w+1][A],E=m[w+1][A+1],D=m[w][A+1];(e>0||w!==0)&&(u.push(_,b,D),S+=3),(t>0||w!==r-1)&&(u.push(b,E,D),S+=3)}c.addGroup(g,S,0),g+=S}function M(y){let R=x,S=new le,T=new L,A=0,w=y===!0?e:t,_=y===!0?1:-1;for(let E=1;E<=s;E++)h.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),x++;let b=x;for(let E=0;E<=s;E++){let U=E/s*l+a,N=Math.cos(U),O=Math.sin(U);T.x=w*O,T.y=p*_,T.z=w*N,h.push(T.x,T.y,T.z),d.push(0,_,0),S.x=N*.5+.5,S.y=O*.5*_+.5,f.push(S.x,S.y),x++}for(let E=0;E<s;E++){let D=R+E,U=b+E;y===!0?u.push(U,U+1,D):u.push(U+1,U,D),A+=3}c.addGroup(g,A,y===!0?1:2),g+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Et=class i extends tt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},er=class i extends ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new L,y=new L,R=new L;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],y),f(t[S+2],R),l(M,y,R,v)}function l(v,M,y,R){let S=R+1,T=[];for(let A=0;A<=S;A++){T[A]=[];let w=v.clone().lerp(y,A/S),_=M.clone().lerp(y,A/S),b=S-A;for(let E=0;E<=b;E++)E===0&&A===S?T[A][E]=w:T[A][E]=w.clone().lerp(_,E/b)}for(let A=0;A<S;A++)for(let w=0;w<2*(S-A)-1;w++){let _=Math.floor(w/2);w%2===0?(d(T[A][_+1]),d(T[A+1][_]),d(T[A][_])):(d(T[A][_+1]),d(T[A+1][_+1]),d(T[A+1][_]))}}function c(v){let M=new L;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let v=new L;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let y=p(v)/2/Math.PI+.5,R=g(v)/Math.PI+.5;o.push(y,1-R)}x(),h()}function h(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],R=o[v+4],S=Math.max(M,y,R),T=Math.min(M,y,R);S>.9&&T<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function x(){let v=new L,M=new L,y=new L,R=new L,S=new le,T=new le,A=new le;for(let w=0,_=0;w<r.length;w+=9,_+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),S.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),A.set(o[_+4],o[_+5]),R.copy(v).add(M).add(y).divideScalar(3);let b=p(R);m(S,_+0,v,b),m(T,_+2,M,b),m(A,_+4,y,b)}}function m(v,M,y,R){R<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=R/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},io=class i extends er{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new Ve;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},tr=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ja=class extends tr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $h(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var La=new L,_h=new $h,Mh=new $h,Sh=new $h,nr=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(La.subVectors(s[0],s[1]).add(s[0]),c=La);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(La.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=La),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);m<1e-4&&(m=1),x<1e-4&&(x=m),p<1e-4&&(p=m),_h.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,x,m,p),Mh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,x,m,p),Sh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,x,m,p)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Mh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Sh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(_h.calc(l),Mh.calc(l),Sh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Ng(i,e){let t=1-i;return t*t*e}function Ug(i,e){return 2*(1-i)*i*e}function Fg(i,e){return i*i*e}function Hr(i,e,t,n){return Ng(i,e)+Ug(i,t)+Fg(i,n)}function Og(i,e){let t=1-i;return t*t*t*e}function Bg(i,e){let t=1-i;return 3*t*t*i*e}function zg(i,e){return 3*(1-i)*i*i*e}function Hg(i,e){return i*i*i*e}function kr(i,e,t,n,s){return Og(i,e)+Bg(i,t)+zg(i,n)+Hg(i,s)}var so=class extends bn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends bn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ro=class extends bn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends bn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends bn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends bn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y),Hr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(cf(a,l.x,c.x,u.x,h.x),cf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Ja=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:nr,CubicBezierCurve:so,CubicBezierCurve3:Ka,EllipseCurve:tr,LineCurve:ro,LineCurve3:Za,QuadraticBezierCurve:oo,QuadraticBezierCurve3:ao,SplineCurve:lo}),Qa=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ja[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ja[s.type]().fromJSON(s))}return this}},co=class extends Qa{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ro(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new oo(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new so(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new tr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gn=class extends co{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new co().fromJSON(s))}return this}};function kg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Jf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=qg(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=i[d],x=i[d+1];f<a&&(a=f),x<l&&(l=x),f>u&&(u=f),x>h&&(h=x)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ho(r,o,t,a,l,c,0),o}function Jf(i,e,t,n,s){let r;if(s===i0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=hf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=hf(o/n|0,i[o],i[o+1],r);return r&&ir(r,r.next)&&(fo(r),r=r.next),r}function ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ir(t,t.next)||Dt(t.prev,t,t.next)===0)){if(fo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ho(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gg(i,n,s,r):Vg(i)){e.push(l.i,i.i,c.i),fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Wg(ss(i),e),ho(i,e,t,n,s,r,2)):o===2&&Xg(i,e,t,n,s,r):ho(ss(i),e,t,n,s,r,1);break}}}function Vg(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=d&&x.y>=h&&x.y<=f&&Or(s,a,r,l,o,c,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Gg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),x=Math.min(u,h,d),m=Math.max(a,l,c),p=Math.max(u,h,d),g=Rh(f,x,e,t,n),v=Rh(m,p,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=f&&M.x<=m&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&Or(a,u,l,h,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=m&&y.y>=x&&y.y<=p&&y!==s&&y!==o&&Or(a,u,l,h,c,d,y.x,y.y)&&Dt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=m&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&Or(a,u,l,h,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=m&&y.y>=x&&y.y<=p&&y!==s&&y!==o&&Or(a,u,l,h,c,d,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ir(n,s)&&$f(n,t,t.next,s)&&uo(n,s)&&uo(s,n)&&(e.push(n.i,t.i,s.i),fo(t),fo(t.next),t=i=s),t=t.next}while(t!==i);return ss(t)}function Xg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e0(o,a)){let l=ep(o,a);o=ss(o,o.next),l=ss(l,l.next),ho(o,e,t,n,s,r,0),ho(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Jf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push($g(c))}s.sort(Yg);for(let r=0;r<s.length;r++)t=jg(s[r],t);return t}function Yg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function jg(i,e){let t=Kg(i,e);if(!t)return e;let n=ep(t,i);return ss(n,n.next),ss(t,t.next)}function Kg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ir(i,t))return t;do{if(ir(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);uo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Zg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Zg(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Jg(i,e,t,n){let s=i;do s.z===0&&(s.z=Rh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Rh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $g(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Or(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Qf(i,e,t,n,s,r,o,a)}function e0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!t0(i,e)&&(uo(i,e)&&uo(e,i)&&n0(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ir(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ir(i,e){return i.x===e.x&&i.y===e.y}function $f(i,e,t,n){let s=Ua(Dt(i,e,t)),r=Ua(Dt(i,e,n)),o=Ua(Dt(t,n,i)),a=Ua(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&Na(i,t,e)||r===0&&Na(i,n,e)||o===0&&Na(t,i,n)||a===0&&Na(t,e,n))}function Na(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ua(i){return i>0?1:i<0?-1:0}function t0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$f(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function uo(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function n0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ep(i,e){let t=Ph(i.i,i.x,i.y),n=Ph(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hf(i,e,t,n){let s=Ph(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ph(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ih=class{static triangulate(e,t,n=2){return kg(e,t,n)}},Ki=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];uf(e),df(n,e);let o=e.length;t.forEach(uf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,df(n,t[l]);let a=Ih.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function df(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Qn=class i extends ot{constructor(e=new Gn([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:s0,M,y=!1,R,S,T,A;g&&(M=g.getSpacedPoints(u),y=!0,d=!1,R=g.computeFrenetFrames(u,!1),S=new L,T=new L,A=new L),d||(p=0,f=0,x=0,m=0);let w=a.extractPoints(c),_=w.shape,b=w.holes;if(!Ki.isClockWise(_)){_=_.reverse();for(let ie=0,ne=b.length;ie<ne;ie++){let $=b[ie];Ki.isClockWise($)&&(b[ie]=$.reverse())}}function D(ie){let $=10000000000000001e-36,re=ie[0];for(let me=1;me<=ie.length;me++){let G=me%ie.length,j=ie[G],xe=j.x-re.x,Se=j.y-re.y,I=xe*xe+Se*Se,C=Math.max(Math.abs(j.x),Math.abs(j.y),Math.abs(re.x),Math.abs(re.y)),V=$*C*C;if(I<=V){ie.splice(G,1),me--;continue}re=j}}D(_),b.forEach(D);let U=b.length,N=_;for(let ie=0;ie<U;ie++){let ne=b[ie];_=_.concat(ne)}function O(ie,ne,$){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ne,$)}let Y=_.length;function k(ie,ne,$){let re,me,G,j=ie.x-ne.x,xe=ie.y-ne.y,Se=$.x-ie.x,I=$.y-ie.y,C=j*j+xe*xe,V=j*I-xe*Se;if(Math.abs(V)>Number.EPSILON){let Z=Math.sqrt(C),de=Math.sqrt(Se*Se+I*I),ee=ne.x-xe/Z,Re=ne.y+j/Z,ve=$.x-I/de,Pe=$.y+Se/de,Fe=((ve-ee)*I-(Pe-Re)*Se)/(j*I-xe*Se);re=ee+j*Fe-ie.x,me=Re+xe*Fe-ie.y;let ye=re*re+me*me;if(ye<=2)return new le(re,me);G=Math.sqrt(ye/2)}else{let Z=!1;j>Number.EPSILON?Se>Number.EPSILON&&(Z=!0):j<-Number.EPSILON?Se<-Number.EPSILON&&(Z=!0):Math.sign(xe)===Math.sign(I)&&(Z=!0),Z?(re=-xe,me=j,G=Math.sqrt(C)):(re=j,me=xe,G=Math.sqrt(C/2))}return new le(re/G,me/G)}let H=[];for(let ie=0,ne=N.length,$=ne-1,re=ie+1;ie<ne;ie++,$++,re++)$===ne&&($=0),re===ne&&(re=0),H[ie]=k(N[ie],N[$],N[re]);let oe=[],ae,fe=H.concat();for(let ie=0,ne=U;ie<ne;ie++){let $=b[ie];ae=[];for(let re=0,me=$.length,G=me-1,j=re+1;re<me;re++,G++,j++)G===me&&(G=0),j===me&&(j=0),ae[re]=k($[re],$[G],$[j]);oe.push(ae),fe=fe.concat(ae)}let B;if(p===0)B=Ki.triangulateShape(N,b);else{let ie=[],ne=[];for(let $=0;$<p;$++){let re=$/p,me=f*Math.cos(re*Math.PI/2),G=x*Math.sin(re*Math.PI/2)+m;for(let j=0,xe=N.length;j<xe;j++){let Se=O(N[j],H[j],G);ce(Se.x,Se.y,-me),re===0&&ie.push(Se)}for(let j=0,xe=U;j<xe;j++){let Se=b[j];ae=oe[j];let I=[];for(let C=0,V=Se.length;C<V;C++){let Z=O(Se[C],ae[C],G);ce(Z.x,Z.y,-me),re===0&&I.push(Z)}re===0&&ne.push(I)}}B=Ki.triangulateShape(ie,ne)}let Q=B.length,se=x+m;for(let ie=0;ie<Y;ie++){let ne=d?O(_[ie],fe[ie],se):_[ie];y?(T.copy(R.normals[0]).multiplyScalar(ne.x),S.copy(R.binormals[0]).multiplyScalar(ne.y),A.copy(M[0]).add(T).add(S),ce(A.x,A.y,A.z)):ce(ne.x,ne.y,0)}for(let ie=1;ie<=u;ie++)for(let ne=0;ne<Y;ne++){let $=d?O(_[ne],fe[ne],se):_[ne];y?(T.copy(R.normals[ie]).multiplyScalar($.x),S.copy(R.binormals[ie]).multiplyScalar($.y),A.copy(M[ie]).add(T).add(S),ce(A.x,A.y,A.z)):ce($.x,$.y,h/u*ie)}for(let ie=p-1;ie>=0;ie--){let ne=ie/p,$=f*Math.cos(ne*Math.PI/2),re=x*Math.sin(ne*Math.PI/2)+m;for(let me=0,G=N.length;me<G;me++){let j=O(N[me],H[me],re);ce(j.x,j.y,h+$)}for(let me=0,G=b.length;me<G;me++){let j=b[me];ae=oe[me];for(let xe=0,Se=j.length;xe<Se;xe++){let I=O(j[xe],ae[xe],re);y?ce(I.x,I.y+M[u-1].y,M[u-1].x+$):ce(I.x,I.y,h+$)}}}W(),K();function W(){let ie=s.length/3;if(d){let ne=0,$=Y*ne;for(let re=0;re<Q;re++){let me=B[re];ue(me[2]+$,me[1]+$,me[0]+$)}ne=u+p*2,$=Y*ne;for(let re=0;re<Q;re++){let me=B[re];ue(me[0]+$,me[1]+$,me[2]+$)}}else{for(let ne=0;ne<Q;ne++){let $=B[ne];ue($[2],$[1],$[0])}for(let ne=0;ne<Q;ne++){let $=B[ne];ue($[0]+Y*u,$[1]+Y*u,$[2]+Y*u)}}n.addGroup(ie,s.length/3-ie,0)}function K(){let ie=s.length/3,ne=0;pe(N,ne),ne+=N.length;for(let $=0,re=b.length;$<re;$++){let me=b[$];pe(me,ne),ne+=me.length}n.addGroup(ie,s.length/3-ie,1)}function pe(ie,ne){let $=ie.length;for(;--$>=0;){let re=$,me=$-1;me<0&&(me=ie.length-1);for(let G=0,j=u+p*2;G<j;G++){let xe=Y*G,Se=Y*(G+1),I=ne+re+xe,C=ne+me+xe,V=ne+me+Se,Z=ne+re+Se;De(I,C,V,Z)}}}function ce(ie,ne,$){l.push(ie),l.push(ne),l.push($)}function ue(ie,ne,$){We(ie),We(ne),We($);let re=s.length/3,me=v.generateTopUV(n,s,re-3,re-2,re-1);F(me[0]),F(me[1]),F(me[2])}function De(ie,ne,$,re){We(ie),We(ne),We(re),We(ne),We($),We(re);let me=s.length/3,G=v.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);F(G[0]),F(G[1]),F(G[3]),F(G[1]),F(G[2]),F(G[3])}function We(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function F(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return r0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ja[s.type]().fromJSON(s)),new i(n,e.options)}},s0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],x=e[s*3+2],m=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-h),new le(d,1-x),new le(m,1-g)]:[new le(a,1-l),new le(u,1-h),new le(f,1-x),new le(p,1-g)]}};function r0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var rs=class i extends er{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var po=class i extends er{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},wn=class i extends ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],x=[],m=[],p=[];for(let g=0;g<u;g++){let v=g*d-o;for(let M=0;M<c;M++){let y=M*h-r;x.push(y,-v,0),m.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let M=v+c*g,y=v+c*(g+1),R=v+1+c*(g+1),S=v+1+c*g;f.push(M,y,S),f.push(y,R,S)}this.setIndex(f),this.setAttribute("position",new ke(x,3)),this.setAttribute("normal",new ke(m,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},mo=class i extends ot{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new L,x=new le;for(let m=0;m<=s;m++){for(let p=0;p<=n;p++){let g=r+p/n*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,u.push(x.x,x.y)}h+=d}for(let m=0;m<s;m++){let p=m*(n+1);for(let g=0;g<n;g++){let v=g+p,M=v,y=v+n+1,R=v+n+2,S=v+1;a.push(M,y,S),a.push(y,R,S)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qt=class i extends ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new L,d=new L,f=[],x=[],m=[],p=[];for(let g=0;g<=n;g++){let v=[],M=g/n,y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let S=R/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+M*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),p.push(S+y,1-M),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let M=u[g][v+1],y=u[g][v],R=u[g+1][v],S=u[g+1][v+1];(g!==0||o>0)&&f.push(M,y,S),(g!==n-1||l<Math.PI)&&f.push(y,R,S)}this.setIndex(f),this.setAttribute("position",new ke(x,3)),this.setAttribute("normal",new ke(m,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wn=class i extends ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let m=x/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(m),h.y=(e+t*Math.cos(p))*Math.sin(m),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let m=(s+1)*f+x-1,p=(s+1)*(f-1)+x-1,g=(s+1)*(f-1)+x,v=(s+1)*f+x;o.push(m,p,v),o.push(p,g,v)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var go=class i extends ot{constructor(e=new ao(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new le,u=new L,h=[],d=[],f=[],x=[];m(),this.setIndex(x),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(f,2));function m(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),v(),g()}function p(M){u=e.getPointAt(M/t,u);let y=o.normals[M],R=o.binormals[M];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,A=Math.sin(T),w=-Math.cos(T);l.x=w*y.x+A*R.x,l.y=w*y.y+A*R.y,l.z=w*y.z+A*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let R=(s+1)*(M-1)+(y-1),S=(s+1)*M+(y-1),T=(s+1)*M+y,A=(s+1)*(M-1)+y;x.push(R,S,A),x.push(S,T,A)}}function v(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ja[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var xo=class extends it{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ge=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zt=class extends Ge{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var os=class extends nn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},vo=class extends nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$n=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function o0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function a0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ff(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function tp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yi,endingEnd:Yi}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ji:r=e,a=2*t-n;break;case Vr:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ji:o=e,l=2*n-t;break;case Vr:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),m=x*x,p=m*x,g=-d*p+2*d*m-d*x,v=(1+d)*p+(-1.5-2*d)*m+(-.5+d)*x+1,M=(-1-f)*p+(1.5+f)*m+.5*x,y=f*p-f*m;for(let R=0;R!==a;++R)r[R]=g*o[u+R]+v*o[c+R]+M*o[l+R]+y*o[h+R];return r}},yo=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},tl=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case Qi:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return Qi;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&o0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let x=0;x!==n;++x){let m=t[h+x];if(m!==t[d+x]||m!==t[f+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Qi;var _i=class extends fn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Ji;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};_o.prototype.ValueTypeName="color";var ei=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};ei.prototype.ValueTypeName="number";var nl=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Wt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ti=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};ti.prototype.ValueTypeName="quaternion";ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends fn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Ji;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};ni.prototype.ValueTypeName="vector";var as=class{constructor(e="",t=-1,n=[],s=lc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(c0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=a0(l);l=ff(l,1,u),c=ff(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ei(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,x,m){if(f.length!==0){let p=[],g=[];tp(f,p,g,x),p.length!==0&&m.push(new h(d,p,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let m=0;m<d[x].morphTargets.length;m++)f[d[x].morphTargets[m]]=-1;for(let m in f){let p=[],g=[];for(let v=0;v!==d[x].morphTargets.length;++v){let M=d[x];p.push(M.time),g.push(M.morphTarget===m?1:0)}s.push(new ei(".morphTargetInfluence["+m+"]",p,g))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(ni,f+".position",d,"pos",s),n(ti,f+".quaternion",d,"rot",s),n(ni,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function l0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ei;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return _o;case"quaternion":return ti;case"bool":case"boolean":return _i;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function c0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=l0(i.type);if(i.times===void 0){let t=[],n=[];tp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},il=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],x=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},np=new il,ii=class{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Dh=class extends Error{constructor(e,t){super(e),this.response=t}},sr=class extends ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=pi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0,m=0,p=new ReadableStream({start(g){v();function v(){h.read().then(({done:M,value:y})=>{if(M)g.close();else{m+=y.byteLength;let R=new ProgressEvent("progress",{lengthComputable:x,loaded:m,total:f});for(let S=0,T=u.length;S<T;S++){let A=u[S];A.onProgress&&A.onProgress(R)}g.enqueue(y),v()}},M=>{g.error(M)})}}});return new Response(p)}else throw new Dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Kn.add(`file:${e}`,c);let u=pi[e];delete pi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=new WeakMap,sl=class extends ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Hs.get(o);h===void 0&&(h=[],Hs.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Ws("img");function l(){u(),t&&t(this);let h=Hs.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Kn.remove(`image:${e}`);let d=Hs.get(this)||[];for(let f=0;f<d.length;f++){let x=d[f];x.onError&&x.onError(h)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ls=class extends ii{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,o=new sl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cs=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mo=class extends cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bh=new Ve,pf=new L,mf=new L,So=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lh=class extends So{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=$i*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bo=class extends cs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},gf=new Ve,Fr=new L,wh=new L,Nh=class extends So{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fr),wh.copy(n.position),wh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wh),n.updateMatrixWorld(),s.makeTranslation(-Fr.x,-Fr.y,-Fr.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,n.coordinateSystem,n.reversedDepth)}},Si=class extends cs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tn=class extends jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uh=class extends So{constructor(){super(new Tn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Th=new WeakMap,wo=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Th.has(o)===!0)s&&s(Th.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Th.set(l,c),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rl=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},To=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ol=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Wt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Wt.multiplyQuaternionsFlat(e,o,e,t,e,n),Wt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},eu="\\[\\]\\.:\\/",h0=new RegExp("["+eu+"]","g"),tu="[^"+eu+"]",u0="[^"+eu.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",tu),f0=/(WCOD+)?/.source.replace("WCOD",u0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),g0=new RegExp("^"+d0+f0+p0+m0+"$"),x0=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(e){let t=g0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);x0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Fh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var al=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Yi,endingEnd:Yi};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Of,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case zf:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case lc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Bf;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Ff){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=ji,s.endingEnd=ji):(e?s.endingStart=this.zeroSlopeAtStart?ji:Yi:s.endingStart=Vr,t?s.endingEnd=this.zeroSlopeAtEnd?ji:Yi:s.endingEnd=Vr)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},v0=new Float32Array(1),us=class extends Zn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,x=u[f];if(x!==void 0)++x.referenceCount,o[h]=x;else{if(x=o[h],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,f));continue}let m=t&&t._propertyBindings[h].binding.parsedPath;x=new ol(vt.create(n,f,m),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,f),o[h]=x}a[h].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new yo(new Float32Array(2),new Float32Array(2),1,v0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?as.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=lc),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new al(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?as.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};function nu(i,e,t,n){let s=y0(n);switch(t){case Xh:return i*e;case Pl:return i*e/s.components*s.byteLength;case Il:return i*e/s.components*s.byteLength;case qh:return i*e*2/s.components*s.byteLength;case Dl:return i*e*2/s.components*s.byteLength;case lr:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Ll:return i*e*4/s.components*s.byteLength;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Ol:return Math.max(i,16)*Math.max(e,8)/4;case Nl:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case Bl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y0(i){switch(i){case En:case Vh:return{byteLength:1,components:1};case ar:case Gh:case bt:return{byteLength:2,components:1};case Cl:case Rl:return{byteLength:2,components:4};case ri:case Al:case Nn:return{byteLength:4,components:1};case Wh:case Ro:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ep(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<h.length;f++){let x=h[d],m=h[f];m.start<=x.start+x.count+1?x.count=Math.max(x.count,m.start+m.count-x.start):(++d,h[d]=m)}h.length=d+1;for(let f=0,x=h.length;f<x;f++){let m=h[f];i.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,av=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:b0,alphahash_pars_fragment:w0,alphamap_fragment:T0,alphamap_pars_fragment:E0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:P0,batching_pars_vertex:I0,batching_vertex:D0,begin_vertex:L0,beginnormal_vertex:N0,bsdfs:U0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:k0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:X0,common:q0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:j0,displacementmap_pars_vertex:K0,displacementmap_vertex:Z0,emissivemap_fragment:J0,emissivemap_pars_fragment:Q0,colorspace_fragment:$0,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:ux,lights_lambert_fragment:dx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:xx,lights_phong_fragment:vx,lights_phong_pars_fragment:yx,lights_physical_fragment:_x,lights_physical_pars_fragment:Mx,lights_fragment_begin:Sx,lights_fragment_maps:bx,lights_fragment_end:wx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Ix,map_particle_pars_fragment:Dx,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ux,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:kx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:Qx,project_vertex:$x,dithering_fragment:ev,dithering_pars_fragment:tv,roughnessmap_fragment:nv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:sv,shadowmap_pars_vertex:rv,shadowmap_vertex:ov,shadowmask_pars_fragment:av,skinbase_vertex:lv,skinning_pars_vertex:cv,skinning_vertex:hv,skinnormal_vertex:uv,specularmap_fragment:dv,specularmap_pars_fragment:fv,tonemapping_fragment:pv,tonemapping_pars_fragment:mv,transmission_fragment:gv,transmission_pars_fragment:xv,uv_pars_fragment:vv,uv_pars_vertex:yv,uv_vertex:_v,worldpos_vertex:Mv,background_vert:Sv,background_frag:bv,backgroundCube_vert:wv,backgroundCube_frag:Tv,cube_vert:Ev,cube_frag:Av,depth_vert:Cv,depth_frag:Rv,distanceRGBA_vert:Pv,distanceRGBA_frag:Iv,equirect_vert:Dv,equirect_frag:Lv,linedashed_vert:Nv,linedashed_frag:Uv,meshbasic_vert:Fv,meshbasic_frag:Ov,meshlambert_vert:Bv,meshlambert_frag:zv,meshmatcap_vert:Hv,meshmatcap_frag:kv,meshnormal_vert:Vv,meshnormal_frag:Gv,meshphong_vert:Wv,meshphong_frag:Xv,meshphysical_vert:qv,meshphysical_frag:Yv,meshtoon_vert:jv,meshtoon_frag:Kv,points_vert:Zv,points_frag:Jv,shadow_vert:Qv,shadow_frag:$v,sprite_vert:ey,sprite_frag:ty},Ee={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},oi={basic:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new we(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:sn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:sn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new we(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:sn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:sn([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:sn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:sn([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:sn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:sn([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:sn([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:sn([Ee.lights,Ee.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};oi.physical={uniforms:sn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var hc={r:0,b:0,g:0},vs=new Ln,ny=new Ve;function iy(i,e,t,n,s,r,o){let a=new we(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function x(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function m(M){let y=!1,R=x(M);R===null?g(a,l):R&&R.isColor&&(g(R,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,y){let R=x(y);R&&(R.isCubeTexture||R.mapping===Co)?(u===void 0&&(u=new Ie(new Xt(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:xs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vs.copy(y.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(vs)),u.material.toneMapped=st.getTransfer(R.colorSpace)!==dt,(h!==R||d!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ie(new wn(2,2),new it({name:"BackgroundMaterial",uniforms:xs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(R.colorSpace)!==dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,y){M.getRGB(hc,Qh(i)),n.buffers.color.setClear(hc.r,hc.g,hc.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:m,addToRenderList:p,dispose:v}}function sy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,b,E,D,U){let N=!1,O=h(D,E,b);r!==O&&(r=O,c(r.object)),N=f(_,D,E,U),N&&x(_,D,E,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(_,b,E,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,b,E){let D=E.wireframe===!0,U=n[_.id];U===void 0&&(U={},n[_.id]=U);let N=U[b.id];N===void 0&&(N={},U[b.id]=N);let O=N[D];return O===void 0&&(O=d(l()),N[D]=O),O}function d(_){let b=[],E=[],D=[];for(let U=0;U<t;U++)b[U]=0,E[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:E,attributeDivisors:D,object:_,attributes:{},index:null}}function f(_,b,E,D){let U=r.attributes,N=b.attributes,O=0,Y=E.getAttributes();for(let k in Y)if(Y[k].location>=0){let oe=U[k],ae=N[k];if(ae===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),oe===void 0||oe.attribute!==ae||ae&&oe.data!==ae.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function x(_,b,E,D){let U={},N=b.attributes,O=0,Y=E.getAttributes();for(let k in Y)if(Y[k].location>=0){let oe=N[k];oe===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor));let ae={};ae.attribute=oe,oe&&oe.data&&(ae.data=oe.data),U[k]=ae,O++}r.attributes=U,r.attributesNum=O,r.index=D}function m(){let _=r.newAttributes;for(let b=0,E=_.length;b<E;b++)_[b]=0}function p(_){g(_,0)}function g(_,b){let E=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;E[_]=1,D[_]===0&&(i.enableVertexAttribArray(_),D[_]=1),U[_]!==b&&(i.vertexAttribDivisor(_,b),U[_]=b)}function v(){let _=r.newAttributes,b=r.enabledAttributes;for(let E=0,D=b.length;E<D;E++)b[E]!==_[E]&&(i.disableVertexAttribArray(E),b[E]=0)}function M(_,b,E,D,U,N,O){O===!0?i.vertexAttribIPointer(_,b,E,U,N):i.vertexAttribPointer(_,b,E,D,U,N)}function y(_,b,E,D){m();let U=D.attributes,N=E.getAttributes(),O=b.defaultAttributeValues;for(let Y in N){let k=N[Y];if(k.location>=0){let H=U[Y];if(H===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(H=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(H=_.instanceColor)),H!==void 0){let oe=H.normalized,ae=H.itemSize,fe=e.get(H);if(fe===void 0)continue;let B=fe.buffer,Q=fe.type,se=fe.bytesPerElement,W=Q===i.INT||Q===i.UNSIGNED_INT||H.gpuType===Al;if(H.isInterleavedBufferAttribute){let K=H.data,pe=K.stride,ce=H.offset;if(K.isInstancedInterleavedBuffer){for(let ue=0;ue<k.locationSize;ue++)g(k.location+ue,K.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<k.locationSize;ue++)p(k.location+ue);i.bindBuffer(i.ARRAY_BUFFER,B);for(let ue=0;ue<k.locationSize;ue++)M(k.location+ue,ae/k.locationSize,Q,oe,pe*se,(ce+ae/k.locationSize*ue)*se,W)}else{if(H.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)g(k.location+K,H.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let K=0;K<k.locationSize;K++)p(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,B);for(let K=0;K<k.locationSize;K++)M(k.location+K,ae/k.locationSize,Q,oe,ae*se,ae/k.locationSize*K*se,W)}}else if(O!==void 0){let oe=O[Y];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}v()}function R(){A();for(let _ in n){let b=n[_];for(let E in b){let D=b[E];for(let U in D)u(D[U].object),delete D[U];delete b[E]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;let b=n[_.id];for(let E in b){let D=b[E];for(let U in D)u(D[U].object),delete D[U];delete b[E]}delete n[_.id]}function T(_){for(let b in n){let E=n[b];if(E[_.id]===void 0)continue;let D=E[_.id];for(let U in D)u(D[U].object),delete D[U];delete E[_.id]}}function A(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:p,disableUnusedAttributes:v}}function ry(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let x=0;for(let m=0;m<h;m++)x+=u[m]*d[m];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==hn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:m,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:R,maxSamples:S}}function ay(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Yn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let x=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let v=r?0:n,M=v*4,y=g.clippingState||null;l.value=y,y=u(x,d,M,f);for(let R=0;R!==M;++R)y[R]=t[R];g.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,x){let m=h!==null?h.length:0,p=null;if(m!==0){if(p=l.value,x!==!0||p===null){let g=f+m*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=f;M!==m;++M,y+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function ly(i){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=fs:a===Tl&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===Tl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xa(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var dr=4,ip=[.125,.215,.35,.446,.526,.582],Ms=20,iu=new Tn,sp=new we,su=null,ru=0,ou=0,au=!1,_s=(1+Math.sqrt(5))/2,ur=1/_s,rp=[new L(-_s,ur,0),new L(_s,ur,0),new L(-ur,0,_s),new L(ur,0,_s),new L(0,_s,-ur),new L(0,_s,ur),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],cy=new L,pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=cy}=r;su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(su,ru,ou),this._renderer.xr.enabled=au,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:bt,format:hn,colorSpace:Zt,depthBuffer:!1},s=op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hy(r)),this._blurMaterial=uy(r,e,t)}return s}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,iu)}_sceneToCubeUV(e,t,n,s,r){let l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(sp),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let m=new Ct({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),p=new Ie(new Xt,m),g=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(sp),g=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let R=this._cubeSize;uc(s,y*R,M>2?R:0,R,R),h.setRenderTarget(s),g&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fs||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;uc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,iu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rp[(s-r-1)%rp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ie(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),m=r/x,p=isFinite(r)?1+Math.floor(u*m):Ms;p>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ms}`);let g=[],v=0;for(let T=0;T<Ms;++T){let A=T/m,w=Math.exp(-A*A/2);g.push(w),T===0?v+=w:T<p&&(v+=2*w)}for(let T=0;T<g.length;T++)g[T]=g[T]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-n;let y=this._sizeLods[s],R=3*y*(s>M-dr?s-M+dr:0),S=4*(this._cubeSize-y);uc(t,R,S,3*y,2*y),l.setRenderTarget(t),l.render(h,iu)}};function hy(i){let e=[],t=[],n=[],s=i,r=i-dr+1+ip.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-dr?l=ip[o-i+dr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,x=6,m=3,p=2,g=1,v=new Float32Array(m*x*f),M=new Float32Array(p*x*f),y=new Float32Array(g*x*f);for(let S=0;S<f;S++){let T=S%3*2/3-1,A=S>2?0:-1,w=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(w,m*x*S),M.set(d,p*x*S);let _=[S,S,S,S,S,S];y.set(_,g*x*S)}let R=new ot;R.setAttribute("position",new Lt(v,m)),R.setAttribute("uv",new Lt(M,p)),R.setAttribute("faceIndex",new Lt(y,g)),e.push(R),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function op(i,e,t){let n=new pt(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function uy(i,e,t){let n=new Float32Array(Ms),s=new L(0,1,0);return new it({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function ap(){return new it({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function lp(){return new it({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rt,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wl||l===Tl,u=l===fs||l===ps;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new pr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new pr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function py(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,x=h.attributes.position,m=0;if(f!==null){let v=f.array;m=f.version;for(let M=0,y=v.length;M<y;M+=3){let R=v[M+0],S=v[M+1],T=v[M+2];d.push(R,S,S,T,T,R)}}else if(x!==void 0){let v=x.array;m=x.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let R=M+0,S=M+1,T=M+2;d.push(R,S,S,T,T,R)}}else return;let p=new(Jh(d)?Yr:qr)(d,1);p.version=m;let g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function my(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*o,x),t.update(f,n,x))}function u(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let p=0;for(let g=0;g<x;g++)p+=f[g];t.update(p,n,1)}function h(d,f,x,m){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],m[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,m,0,x);let g=0;for(let v=0;v<x;v++)g+=f[v]*m[v];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function gy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xy(i,e,t){let n=new WeakMap,s=new rt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let y=a.attributes.position.count*M,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*R*4*h),T=new es(S,y,R,h);T.type=Nn,T.needsUpdate=!0;let A=M*4;for(let _=0;_<h;_++){let b=p[_],E=g[_],D=v[_],U=y*R*4*_;for(let N=0;N<b.count;N++){let O=N*A;f===!0&&(s.fromBufferAttribute(b,N),S[U+O+0]=s.x,S[U+O+1]=s.y,S[U+O+2]=s.z,S[U+O+3]=0),x===!0&&(s.fromBufferAttribute(E,N),S[U+O+4]=s.x,S[U+O+5]=s.y,S[U+O+6]=s.z,S[U+O+7]=0),m===!0&&(s.fromBufferAttribute(D,N),S[U+O+8]=s.x,S[U+O+9]=s.y,S[U+O+10]=s.z,S[U+O+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new le(y,R)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ap=new Bt,cp=new vi(1,1),Cp=new es,Rp=new Ga,Pp=new Kr,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hp[s];if(r===void 0&&(r=new Float32Array(s),hp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fc(i,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function by(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;pp.set(n),i.uniformMatrix2fv(this.addr,!1,pp),Yt(t,n)}}function wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;fp.set(n),i.uniformMatrix3fv(this.addr,!1,fp),Yt(t,n)}}function Ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;dp.set(n),i.uniformMatrix4fv(this.addr,!1,dp),Yt(t,n)}}function Ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cp.compareFunction=jh,r=cp):r=Ap,t.setTexture2D(e||r,s)}function Uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rp,s)}function Fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pp,s)}function Oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cp,s)}function By(i){switch(i){case 5126:return yy;case 35664:return _y;case 35665:return My;case 35666:return Sy;case 35674:return by;case 35675:return wy;case 35676:return Ty;case 5124:case 35670:return Ey;case 35667:case 35671:return Ay;case 35668:case 35672:return Cy;case 35669:case 35673:return Ry;case 5125:return Py;case 36294:return Iy;case 36295:return Dy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}function zy(i,e){i.uniform1fv(this.addr,e)}function Hy(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function ky(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Vy(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function Gy(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wy(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xy(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qy(i,e){i.uniform1iv(this.addr,e)}function Yy(i,e){i.uniform2iv(this.addr,e)}function jy(i,e){i.uniform3iv(this.addr,e)}function Ky(i,e){i.uniform4iv(this.addr,e)}function Zy(i,e){i.uniform1uiv(this.addr,e)}function Jy(i,e){i.uniform2uiv(this.addr,e)}function Qy(i,e){i.uniform3uiv(this.addr,e)}function $y(i,e){i.uniform4uiv(this.addr,e)}function e_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ap,r[o])}function t_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rp,r[o])}function n_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function i_(i,e,t){let n=this.cache,s=e.length,r=fc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cp,r[o])}function s_(i){switch(i){case 5126:return zy;case 35664:return Hy;case 35665:return ky;case 35666:return Vy;case 35674:return Gy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return jy;case 35669:case 35673:return Ky;case 5125:return Zy;case 36294:return Jy;case 36295:return Qy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}var cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=By(t.type)}},hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s_(t.type)}},uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},lu=/(\w+)(\])?(\[|\.)?/g;function mp(i,e){i.seq.push(e),i.map[e.id]=e}function r_(i,e,t){let n=i.name,s=n.length;for(lu.lastIndex=0;;){let r=lu.exec(n),o=lu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mp(t,c===void 0?new cu(a,i,e):new hu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new uu(a),mp(t,h)),t=h}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);r_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function gp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var o_=37297,a_=0;function l_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var xp=new et;function c_(i){st._getMatrix(xp,st.workingColorSpace,i);let e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Gr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+l_(i.getShaderSource(e),a)}else return r}function h_(i,e){let t=c_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u_(i,e){let t;switch(e){case vl:t="Linear";break;case yl:t="Reinhard";break;case _l:t="Cineon";break;case rr:t="ACESFilmic";break;case Sl:t="AgX";break;case bl:t="Neutral";break;case Ml:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dc=new L;function d_(){st.getLuminanceCoefficients(dc);let i=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function p_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Fo(i){return i!==""}function yp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(i){return i.replace(g_,v_)}var x_=new Map;function v_(i,e){let t=Qe[e];if(t===void 0){let n=x_.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}var y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(y_,__)}function __(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ll?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function S_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Lf:e="ENVMAP_BLENDING_MIX";break;case Nf:e="ENVMAP_BLENDING_ADD";break}return e}function T_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=M_(t),c=S_(t),u=b_(t),h=w_(t),d=T_(t),f=f_(t),x=p_(r),m=s.createProgram(),p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Fo).join(`
`),g.length>0&&(g+=`
`)):(p=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),g=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Xn?u_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,h_("linearToOutputTexel",t.outputColorSpace),d_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),o=du(o),o=yp(o,t),o=_p(o,t),a=du(a),a=yp(a,t),a=_p(a,t),o=Mp(o),a=Mp(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=v+p+o,y=v+g+a,R=gp(s,s.VERTEX_SHADER,M),S=gp(s,s.FRAGMENT_SHADER,y);s.attachShader(m,R),s.attachShader(m,S),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(b){if(i.debug.checkShaderErrors){let E=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(R)||"",U=s.getShaderInfoLog(S)||"",N=E.trim(),O=D.trim(),Y=U.trim(),k=!0,H=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,R,S);else{let oe=vp(s,R,"vertex"),ae=vp(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+oe+`
`+ae)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||Y==="")&&(H=!1);H&&(b.diagnostics={runnable:k,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(R),s.deleteShader(S),A=new fr(s,m),w=m_(s,m)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(m,o_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=S,this}var A_=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=A_++,this.code=e,this.usedTimes=0}};function C_(i,e,t,n,s,r,o){let a=new Xr,l=new fu,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,_,b,E,D){let U=E.fog,N=D.geometry,O=w.isMeshStandardMaterial?E.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||O),k=Y&&Y.mapping===Co?Y.image.height:null,H=x[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ae=oe!==void 0?oe.length:0,fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let B,Q,se,W;if(H){let ft=oi[H];B=ft.vertexShader,Q=ft.fragmentShader}else B=w.vertexShader,Q=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),W=l.getFragmentShaderID(w);let K=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),ce=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,De=!!w.map,We=!!w.matcap,F=!!Y,ie=!!w.aoMap,ne=!!w.lightMap,$=!!w.bumpMap,re=!!w.normalMap,me=!!w.displacementMap,G=!!w.emissiveMap,j=!!w.metalnessMap,xe=!!w.roughnessMap,Se=w.anisotropy>0,I=w.clearcoat>0,C=w.dispersion>0,V=w.iridescence>0,Z=w.sheen>0,de=w.transmission>0,ee=Se&&!!w.anisotropyMap,Re=I&&!!w.clearcoatMap,ve=I&&!!w.clearcoatNormalMap,Pe=I&&!!w.clearcoatRoughnessMap,Fe=V&&!!w.iridescenceMap,ye=V&&!!w.iridescenceThicknessMap,Ae=Z&&!!w.sheenColorMap,je=Z&&!!w.sheenRoughnessMap,He=!!w.specularMap,Te=!!w.specularColorMap,Ze=!!w.specularIntensityMap,z=de&&!!w.transmissionMap,ge=de&&!!w.thicknessMap,be=!!w.gradientMap,Ne=!!w.alphaMap,_e=w.alphaTest>0,he=!!w.alphaHash,Be=!!w.extensions,$e=Xn;w.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($e=i.toneMapping);let St={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:B,fragmentShader:Q,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:ce,instancingColor:ce&&D.instanceColor!==null,instancingMorph:ce&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Zt,alphaToCoverage:!!w.alphaToCoverage,map:De,matcap:We,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:k,aoMap:ie,lightMap:ne,bumpMap:$,normalMap:re,displacementMap:d&&me,emissiveMap:G,normalMapObjectSpace:re&&w.normalMapType===Hf,normalMapTangentSpace:re&&w.normalMapType===Uo,metalnessMap:j,roughnessMap:xe,anisotropy:Se,anisotropyMap:ee,clearcoat:I,clearcoatMap:Re,clearcoatNormalMap:ve,clearcoatRoughnessMap:Pe,dispersion:C,iridescence:V,iridescenceMap:Fe,iridescenceThicknessMap:ye,sheen:Z,sheenColorMap:Ae,sheenRoughnessMap:je,specularMap:He,specularColorMap:Te,specularIntensityMap:Ze,transmission:de,transmissionMap:z,thicknessMap:ge,gradientMap:be,opaque:w.transparent===!1&&w.blending===gi&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:_e,alphaHash:he,combine:w.combine,mapUv:De&&m(w.map.channel),aoMapUv:ie&&m(w.aoMap.channel),lightMapUv:ne&&m(w.lightMap.channel),bumpMapUv:$&&m(w.bumpMap.channel),normalMapUv:re&&m(w.normalMap.channel),displacementMapUv:me&&m(w.displacementMap.channel),emissiveMapUv:G&&m(w.emissiveMap.channel),metalnessMapUv:j&&m(w.metalnessMap.channel),roughnessMapUv:xe&&m(w.roughnessMap.channel),anisotropyMapUv:ee&&m(w.anisotropyMap.channel),clearcoatMapUv:Re&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(w.sheenRoughnessMap.channel),specularMapUv:He&&m(w.specularMap.channel),specularColorMapUv:Te&&m(w.specularColorMap.channel),specularIntensityMapUv:Ze&&m(w.specularIntensityMap.channel),transmissionMapUv:z&&m(w.transmissionMap.channel),thicknessMapUv:ge&&m(w.thicknessMap.channel),alphaMapUv:Ne&&m(w.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(re||Se),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(De||Ne),fog:!!U,useFog:w.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:fe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:De&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===dt,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&st.getTransfer(w.emissiveMap.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Mt,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function g(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let b in w.defines)_.push(b),_.push(w.defines[b]);return w.isRawShaderMaterial===!1&&(v(_,w),M(_,w),_.push(i.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function v(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function M(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let _=x[w.type],b;if(_){let E=oi[_];b=Ft.clone(E.uniforms)}else b=w.uniforms;return b}function R(w,_){let b;for(let E=0,D=u.length;E<D;E++){let U=u[E];if(U.cacheKey===_){b=U,++b.usedTimes;break}}return b===void 0&&(b=new E_(i,_,w,r),u.push(b)),b}function S(w){if(--w.usedTimes===0){let _=u.indexOf(w);u[_]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:R,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:A}}function R_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function P_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,x,m,p){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=x,g.renderOrder=h.renderOrder,g.z=m,g.group=p),e++,g}function a(h,d,f,x,m,p){let g=o(h,d,f,x,m,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(h,d,f,x,m,p){let g=o(h,d,f,x,m,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||P_),n.length>1&&n.sort(d||bp),s.length>1&&s.sort(d||bp)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function I_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wp,i.set(n,[o])):s>=r.length?(o=new wp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function D_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function L_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var N_=0;function U_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F_(i){let e=new D_,t=L_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ve,o=new Ve;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,x=0,m=0,p=0,g=0,v=0,M=0,y=0,R=0,S=0,T=0;c.sort(U_);for(let w=0,_=c.length;w<_;w++){let b=c[w],E=b.color,D=b.intensity,U=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=E.r*D,h+=E.g*D,d+=E.b*D;else if(b.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(b.sh.coefficients[O],D);T++}else if(b.isDirectionalLight){let O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Y=b.shadow,k=t.get(b);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=b.shadow.matrix,v++}n.directional[f]=O,f++}else if(b.isSpotLight){let O=e.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(E).multiplyScalar(D),O.distance=U,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,n.spot[m]=O;let Y=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,Y.updateMatrices(b),b.castShadow&&S++),n.spotLightMatrix[m]=Y.matrix,b.castShadow){let k=t.get(b);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=N,y++}m++}else if(b.isRectAreaLight){let O=e.get(b);O.color.copy(E).multiplyScalar(D),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=O,p++}else if(b.isPointLight){let O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){let Y=b.shadow,k=t.get(b);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=N,n.pointShadowMatrix[x]=b.shadow.matrix,M++}n.point[x]=O,x++}else if(b.isHemisphereLight){let O=e.get(b);O.skyColor.copy(b.color).multiplyScalar(D),O.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[g]=O,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==x||A.spotLength!==m||A.rectAreaLength!==p||A.hemiLength!==g||A.numDirectionalShadows!==v||A.numPointShadows!==M||A.numSpotShadows!==y||A.numSpotMaps!==R||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=p,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,A.directionalLength=f,A.pointLength=x,A.spotLength=m,A.rectAreaLength=p,A.hemiLength=g,A.numDirectionalShadows=v,A.numPointShadows=M,A.numSpotShadows=y,A.numSpotMaps=R,A.numLightProbes=T,n.version=N_++)}function l(c,u){let h=0,d=0,f=0,x=0,m=0,p=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){let M=c[g];if(M.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(M.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(M.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Tp(i){let e=new F_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function O_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Tp(i),e.set(s,[a])):r>=o.length?(a=new Tp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function H_(i,e,t){let n=new Js,s=new le,r=new le,o=new rt,a=new $n({depthPacking:hr}),l=new $a,c={},u=t.maxTextureSize,h={[Vn]:$t,[$t]:Vn,[Mt]:Mt},d=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:B_,fragmentShader:z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new ot;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Ie(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let g=this.type;this.render=function(S,T,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let w=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),E=i.state;E.setBlending(Rt),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let D=g!==si&&this.type===si,U=g===si&&this.type!==si;for(let N=0,O=S.length;N<O;N++){let Y=S[N],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let H=k.getFrameExtents();if(s.multiply(H),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,k.mapSize.y=r.y)),k.map===null||D===!0||U===!0){let ae=this.type!==si?{minFilter:yt,magFilter:yt}:{};k.map!==null&&k.map.dispose(),k.map=new pt(s.x,s.y,ae),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let oe=k.getViewportCount();for(let ae=0;ae<oe;ae++){let fe=k.getViewport(ae);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),E.viewport(o),k.updateMatrices(Y,ae),n=k.getFrustum(),y(T,A,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===si&&v(k,A),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,_,b)};function v(S,T){let A=e.update(m);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new pt(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,A,d,m,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,A,f,m,null)}function M(S,T,A,w){let _=null,b=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)_=b;else if(_=A.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let E=_.uuid,D=T.uuid,U=c[E];U===void 0&&(U={},c[E]=U);let N=U[D];N===void 0&&(N=_.clone(),U[D]=N,T.addEventListener("dispose",R)),_=N}if(_.visible=T.visible,_.wireframe=T.wireframe,w===si?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let E=i.properties.get(_);E.light=A}return _}function y(S,T,A,w,_){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===si)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);let D=e.update(S),U=S.material;if(Array.isArray(U)){let N=D.groups;for(let O=0,Y=N.length;O<Y;O++){let k=N[O],H=U[k.materialIndex];if(H&&H.visible){let oe=M(S,H,w,_);S.onBeforeShadow(i,S,T,A,D,oe,k),i.renderBufferDirect(A,null,D,oe,S,k),S.onAfterShadow(i,S,T,A,D,oe,k)}}}else if(U.visible){let N=M(S,U,w,_);S.onBeforeShadow(i,S,T,A,D,N,null),i.renderBufferDirect(A,null,D,N,S,null),S.onAfterShadow(i,S,T,A,D,N,null)}}let E=S.children;for(let D=0,U=E.length;D<U;D++)y(E[D],T,A,w,_)}function R(S){S.target.removeEventListener("dispose",R);for(let A in c){let w=c[A],_=S.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}var k_={[hl]:ul,[dl]:ml,[fl]:gl,[Zi]:pl,[ul]:hl,[ml]:dl,[gl]:fl,[pl]:Zi};function V_(i,e){function t(){let z=!1,ge=new rt,be=null,Ne=new rt(0,0,0,0);return{setMask:function(_e){be!==_e&&!z&&(i.colorMask(_e,_e,_e,_e),be=_e)},setLocked:function(_e){z=_e},setClear:function(_e,he,Be,$e,St){St===!0&&(_e*=$e,he*=$e,Be*=$e),ge.set(_e,he,Be,$e),Ne.equals(ge)===!1&&(i.clearColor(_e,he,Be,$e),Ne.copy(ge))},reset:function(){z=!1,be=null,Ne.set(-1,0,0,0)}}}function n(){let z=!1,ge=!1,be=null,Ne=null,_e=null;return{setReversed:function(he){if(ge!==he){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ge=he;let $e=_e;_e=null,this.setClear($e)}},getReversed:function(){return ge},setTest:function(he){he?K(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(he){be!==he&&!z&&(i.depthMask(he),be=he)},setFunc:function(he){if(ge&&(he=k_[he]),Ne!==he){switch(he){case hl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case dl:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=he}},setLocked:function(he){z=he},setClear:function(he){_e!==he&&(ge&&(he=1-he),i.clearDepth(he),_e=he)},reset:function(){z=!1,be=null,Ne=null,_e=null,ge=!1}}}function s(){let z=!1,ge=null,be=null,Ne=null,_e=null,he=null,Be=null,$e=null,St=null;return{setTest:function(ft){z||(ft?K(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(ft){ge!==ft&&!z&&(i.stencilMask(ft),ge=ft)},setFunc:function(ft,li,qn){(be!==ft||Ne!==li||_e!==qn)&&(i.stencilFunc(ft,li,qn),be=ft,Ne=li,_e=qn)},setOp:function(ft,li,qn){(he!==ft||Be!==li||$e!==qn)&&(i.stencilOp(ft,li,qn),he=ft,Be=li,$e=qn)},setLocked:function(ft){z=ft},setClear:function(ft){St!==ft&&(i.clearStencil(ft),St=ft)},reset:function(){z=!1,ge=null,be=null,Ne=null,_e=null,he=null,Be=null,$e=null,St=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],x=null,m=!1,p=null,g=null,v=null,M=null,y=null,R=null,S=null,T=new we(0,0,0),A=0,w=!1,_=null,b=null,E=null,D=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=Y>=2);let H=null,oe={},ae=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),B=new rt().fromArray(ae),Q=new rt().fromArray(fe);function se(z,ge,be,Ne){let _e=new Uint8Array(4),he=i.createTexture();i.bindTexture(z,he),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<be;Be++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ge+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return he}let W={};W[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Zi),$(!1),re(Oh),K(i.CULL_FACE),ie(Rt);function K(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function pe(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function ce(z,ge){return h[z]!==ge?(i.bindFramebuffer(z,ge),h[z]=ge,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function ue(z,ge){let be=f,Ne=!1;if(z){be=d.get(ge),be===void 0&&(be=[],d.set(ge,be));let _e=z.textures;if(be.length!==_e.length||be[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Be=_e.length;he<Be;he++)be[he]=i.COLOR_ATTACHMENT0+he;be.length=_e.length,Ne=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(be)}function De(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let We={[_n]:i.FUNC_ADD,[yf]:i.FUNC_SUBTRACT,[_f]:i.FUNC_REVERSE_SUBTRACT};We[Mf]=i.MIN,We[Sf]=i.MAX;let F={[ds]:i.ZERO,[bf]:i.ONE,[wf]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[Cf]:i.SRC_ALPHA_SATURATE,[Ao]:i.DST_COLOR,[Eo]:i.DST_ALPHA,[Tf]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[Af]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Df]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(z,ge,be,Ne,_e,he,Be,$e,St,ft){if(z===Rt){m===!0&&(pe(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),z!==cl){if(z!==p||ft!==w){if((g!==_n||y!==_n)&&(i.blendEquation(i.FUNC_ADD),g=_n,y=_n),ft)switch(z){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,M=null,R=null,S=null,T.set(0,0,0),A=0,p=z,w=ft}return}_e=_e||ge,he=he||be,Be=Be||Ne,(ge!==g||_e!==y)&&(i.blendEquationSeparate(We[ge],We[_e]),g=ge,y=_e),(be!==v||Ne!==M||he!==R||Be!==S)&&(i.blendFuncSeparate(F[be],F[Ne],F[he],F[Be]),v=be,M=Ne,R=he,S=Be),($e.equals(T)===!1||St!==A)&&(i.blendColor($e.r,$e.g,$e.b,St),T.copy($e),A=St),p=z,w=!1}function ne(z,ge){z.side===Mt?pe(i.CULL_FACE):K(i.CULL_FACE);let be=z.side===$t;ge&&(be=!be),$(be),z.blending===gi&&z.transparent===!1?ie(Rt):ie(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ne=z.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),G(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(z){_!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),_=z)}function re(z){z!==xf?(K(i.CULL_FACE),z!==b&&(z===Oh?i.cullFace(i.BACK):z===vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),b=z}function me(z){z!==E&&(O&&i.lineWidth(z),E=z)}function G(z,ge,be){z?(K(i.POLYGON_OFFSET_FILL),(D!==ge||U!==be)&&(i.polygonOffset(ge,be),D=ge,U=be)):pe(i.POLYGON_OFFSET_FILL)}function j(z){z?K(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function xe(z){z===void 0&&(z=i.TEXTURE0+N-1),H!==z&&(i.activeTexture(z),H=z)}function Se(z,ge,be){be===void 0&&(H===null?be=i.TEXTURE0+N-1:be=H);let Ne=oe[be];Ne===void 0&&(Ne={type:void 0,texture:void 0},oe[be]=Ne),(Ne.type!==z||Ne.texture!==ge)&&(H!==be&&(i.activeTexture(be),H=be),i.bindTexture(z,ge||W[z]),Ne.type=z,Ne.texture=ge)}function I(){let z=oe[H];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function C(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(z){B.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),B.copy(z))}function je(z){Q.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function He(z,ge){let be=c.get(ge);be===void 0&&(be=new WeakMap,c.set(ge,be));let Ne=be.get(z);Ne===void 0&&(Ne=i.getUniformBlockIndex(ge,z.name),be.set(z,Ne))}function Te(z,ge){let Ne=c.get(ge).get(z);l.get(ge)!==Ne&&(i.uniformBlockBinding(ge,Ne,z.__bindingPointIndex),l.set(ge,Ne))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},H=null,oe={},h={},d=new WeakMap,f=[],x=null,m=!1,p=null,g=null,v=null,M=null,y=null,R=null,S=null,T=new we(0,0,0),A=0,w=!1,_=null,b=null,E=null,D=null,U=null,B.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:pe,bindFramebuffer:ce,drawBuffers:ue,useProgram:De,setBlending:ie,setMaterial:ne,setFlipSided:$,setCullFace:re,setLineWidth:me,setPolygonOffset:G,setScissorTest:j,activeTexture:xe,bindTexture:Se,unbindTexture:I,compressedTexImage2D:C,compressedTexImage3D:V,texImage2D:Fe,texImage3D:ye,updateUBOMapping:He,uniformBlockBinding:Te,texStorage2D:ve,texStorage3D:Pe,texSubImage2D:Z,texSubImage3D:de,compressedTexSubImage2D:ee,compressedTexSubImage3D:Re,scissor:Ae,viewport:je,reset:Ze}}function G_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,C){return f?new OffscreenCanvas(I,C):Ws("canvas")}function m(I,C,V){let Z=1,de=Se(I);if((de.width>V||de.height>V)&&(Z=V/Math.max(de.width,de.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ee=Math.floor(Z*de.width),Re=Math.floor(Z*de.height);h===void 0&&(h=x(ee,Re));let ve=C?x(ee,Re):h;return ve.width=ee,ve.height=Re,ve.getContext("2d").drawImage(I,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ee+"x"+Re+")."),ve}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function p(I){return I.generateMipmaps}function g(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,C,V,Z,de=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=C;if(C===i.RED&&(V===i.FLOAT&&(ee=i.R32F),V===i.HALF_FLOAT&&(ee=i.R16F),V===i.UNSIGNED_BYTE&&(ee=i.R8)),C===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.R8UI),V===i.UNSIGNED_SHORT&&(ee=i.R16UI),V===i.UNSIGNED_INT&&(ee=i.R32UI),V===i.BYTE&&(ee=i.R8I),V===i.SHORT&&(ee=i.R16I),V===i.INT&&(ee=i.R32I)),C===i.RG&&(V===i.FLOAT&&(ee=i.RG32F),V===i.HALF_FLOAT&&(ee=i.RG16F),V===i.UNSIGNED_BYTE&&(ee=i.RG8)),C===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RG8UI),V===i.UNSIGNED_SHORT&&(ee=i.RG16UI),V===i.UNSIGNED_INT&&(ee=i.RG32UI),V===i.BYTE&&(ee=i.RG8I),V===i.SHORT&&(ee=i.RG16I),V===i.INT&&(ee=i.RG32I)),C===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),V===i.UNSIGNED_INT&&(ee=i.RGB32UI),V===i.BYTE&&(ee=i.RGB8I),V===i.SHORT&&(ee=i.RGB16I),V===i.INT&&(ee=i.RGB32I)),C===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),V===i.UNSIGNED_INT&&(ee=i.RGBA32UI),V===i.BYTE&&(ee=i.RGBA8I),V===i.SHORT&&(ee=i.RGBA16I),V===i.INT&&(ee=i.RGBA32I)),C===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),C===i.RGBA){let Re=de?Gr:st.getTransfer(Z);V===i.FLOAT&&(ee=i.RGBA32F),V===i.HALF_FLOAT&&(ee=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ee=Re===dt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(I,C){let V;return I?C===null||C===ri||C===Ui?V=i.DEPTH24_STENCIL8:C===Nn?V=i.DEPTH32F_STENCIL8:C===ar&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ri||C===Ui?V=i.DEPTH_COMPONENT24:C===Nn?V=i.DEPTH_COMPONENT32F:C===ar&&(V=i.DEPTH_COMPONENT16),V}function R(I,C){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==yt&&I.minFilter!==Ut?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function S(I){let C=I.target;C.removeEventListener("dispose",S),A(C),C.isVideoTexture&&u.delete(C)}function T(I){let C=I.target;C.removeEventListener("dispose",T),_(C)}function A(I){let C=n.get(I);if(C.__webglInit===void 0)return;let V=I.source,Z=d.get(V);if(Z){let de=Z[C.__cacheKey];de.usedTimes--,de.usedTimes===0&&w(I),Object.keys(Z).length===0&&d.delete(V)}n.remove(I)}function w(I){let C=n.get(I);i.deleteTexture(C.__webglTexture);let V=I.source,Z=d.get(V);delete Z[C.__cacheKey],o.memory.textures--}function _(I){let C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(C.__webglFramebuffer[Z]))for(let de=0;de<C.__webglFramebuffer[Z].length;de++)i.deleteFramebuffer(C.__webglFramebuffer[Z][de]);else i.deleteFramebuffer(C.__webglFramebuffer[Z]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[Z])}else{if(Array.isArray(C.__webglFramebuffer))for(let Z=0;Z<C.__webglFramebuffer.length;Z++)i.deleteFramebuffer(C.__webglFramebuffer[Z]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Z=0;Z<C.__webglColorRenderbuffer.length;Z++)C.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[Z]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let V=I.textures;for(let Z=0,de=V.length;Z<de;Z++){let ee=n.get(V[Z]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(I)}let b=0;function E(){b=0}function D(){let I=b;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),b+=1,I}function U(I){let C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function N(I,C){let V=n.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,I,C);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+C)}function O(I,C){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){W(V,I,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+C)}function Y(I,C){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){W(V,I,C);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+C)}function k(I,C){let V=n.get(I);if(I.version>0&&V.__version!==I.version){K(V,I,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+C)}let H={[Nt]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},oe={[yt]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[or]:i.LINEAR_MIPMAP_NEAREST,[cn]:i.LINEAR_MIPMAP_LINEAR},ae={[kf]:i.NEVER,[Yf]:i.ALWAYS,[Vf]:i.LESS,[jh]:i.LEQUAL,[Gf]:i.EQUAL,[qf]:i.GEQUAL,[Wf]:i.GREATER,[Xf]:i.NOTEQUAL};function fe(I,C){if(C.type===Nn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ut||C.magFilter===or||C.magFilter===ms||C.magFilter===cn||C.minFilter===Ut||C.minFilter===or||C.minFilter===ms||C.minFilter===cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,H[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,H[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,H[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,oe[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,oe[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ae[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===yt||C.minFilter!==ms&&C.minFilter!==cn||C.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function B(I,C){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",S));let Z=C.source,de=d.get(Z);de===void 0&&(de={},d.set(Z,de));let ee=U(C);if(ee!==I.__cacheKey){de[ee]===void 0&&(de[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),de[ee].usedTimes++;let Re=de[I.__cacheKey];Re!==void 0&&(de[I.__cacheKey].usedTimes--,Re.usedTimes===0&&w(C)),I.__cacheKey=ee,I.__webglTexture=de[ee].texture}return V}function Q(I,C,V){return Math.floor(Math.floor(I/V)/C)}function se(I,C,V,Z){let ee=I.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,V,Z,C.data);else{ee.sort((ye,Ae)=>ye.start-Ae.start);let Re=0;for(let ye=1;ye<ee.length;ye++){let Ae=ee[Re],je=ee[ye],He=Ae.start+Ae.count,Te=Q(je.start,C.width,4),Ze=Q(Ae.start,C.width,4);je.start<=He+1&&Te===Ze&&Q(je.start+je.count-1,C.width,4)===Te?Ae.count=Math.max(Ae.count,je.start+je.count-Ae.start):(++Re,ee[Re]=je)}ee.length=Re+1;let ve=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let ye=0,Ae=ee.length;ye<Ae;ye++){let je=ee[ye],He=Math.floor(je.start/4),Te=Math.ceil(je.count/4),Ze=He%C.width,z=Math.floor(He/C.width),ge=Te,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Ze,z,ge,be,V,Z,C.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function W(I,C,V){let Z=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Z=i.TEXTURE_3D);let de=B(I,C),ee=C.source;t.bindTexture(Z,I.__webglTexture,i.TEXTURE0+V);let Re=n.get(ee);if(ee.version!==Re.__version||de===!0){t.activeTexture(i.TEXTURE0+V);let ve=st.getPrimaries(st.workingColorSpace),Pe=C.colorSpace===An?null:st.getPrimaries(C.colorSpace),Fe=C.colorSpace===An||ve===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ye=m(C.image,!1,s.maxTextureSize);ye=xe(C,ye);let Ae=r.convert(C.format,C.colorSpace),je=r.convert(C.type),He=M(C.internalFormat,Ae,je,C.colorSpace,C.isVideoTexture);fe(Z,C);let Te,Ze=C.mipmaps,z=C.isVideoTexture!==!0,ge=Re.__version===void 0||de===!0,be=ee.dataReady,Ne=R(C,ye);if(C.isDepthTexture)He=y(C.format===Fi,C.type),ge&&(z?t.texStorage2D(i.TEXTURE_2D,1,He,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,He,ye.width,ye.height,0,Ae,je,null));else if(C.isDataTexture)if(Ze.length>0){z&&ge&&t.texStorage2D(i.TEXTURE_2D,Ne,He,Ze[0].width,Ze[0].height);for(let _e=0,he=Ze.length;_e<he;_e++)Te=Ze[_e],z?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Te.width,Te.height,Ae,je,Te.data):t.texImage2D(i.TEXTURE_2D,_e,He,Te.width,Te.height,0,Ae,je,Te.data);C.generateMipmaps=!1}else z?(ge&&t.texStorage2D(i.TEXTURE_2D,Ne,He,ye.width,ye.height),be&&se(C,ye,Ae,je)):t.texImage2D(i.TEXTURE_2D,0,He,ye.width,ye.height,0,Ae,je,ye.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){z&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,He,Ze[0].width,Ze[0].height,ye.depth);for(let _e=0,he=Ze.length;_e<he;_e++)if(Te=Ze[_e],C.format!==hn)if(Ae!==null)if(z){if(be)if(C.layerUpdates.size>0){let Be=nu(Te.width,Te.height,C.format,C.type);for(let $e of C.layerUpdates){let St=Te.data.subarray($e*Be/Te.data.BYTES_PER_ELEMENT,($e+1)*Be/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,$e,Te.width,Te.height,1,Ae,St)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Te.width,Te.height,ye.depth,Ae,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,He,Te.width,Te.height,ye.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Te.width,Te.height,ye.depth,Ae,je,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,He,Te.width,Te.height,ye.depth,0,Ae,je,Te.data)}else{z&&ge&&t.texStorage2D(i.TEXTURE_2D,Ne,He,Ze[0].width,Ze[0].height);for(let _e=0,he=Ze.length;_e<he;_e++)Te=Ze[_e],C.format!==hn?Ae!==null?z?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,He,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Te.width,Te.height,Ae,je,Te.data):t.texImage2D(i.TEXTURE_2D,_e,He,Te.width,Te.height,0,Ae,je,Te.data)}else if(C.isDataArrayTexture)if(z){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,He,ye.width,ye.height,ye.depth),be)if(C.layerUpdates.size>0){let _e=nu(ye.width,ye.height,C.format,C.type);for(let he of C.layerUpdates){let Be=ye.data.subarray(he*_e/ye.data.BYTES_PER_ELEMENT,(he+1)*_e/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Ae,je,Be)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ae,je,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ye.width,ye.height,ye.depth,0,Ae,je,ye.data);else if(C.isData3DTexture)z?(ge&&t.texStorage3D(i.TEXTURE_3D,Ne,He,ye.width,ye.height,ye.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ae,je,ye.data)):t.texImage3D(i.TEXTURE_3D,0,He,ye.width,ye.height,ye.depth,0,Ae,je,ye.data);else if(C.isFramebufferTexture){if(ge)if(z)t.texStorage2D(i.TEXTURE_2D,Ne,He,ye.width,ye.height);else{let _e=ye.width,he=ye.height;for(let Be=0;Be<Ne;Be++)t.texImage2D(i.TEXTURE_2D,Be,He,_e,he,0,Ae,je,null),_e>>=1,he>>=1}}else if(Ze.length>0){if(z&&ge){let _e=Se(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ne,He,_e.width,_e.height)}for(let _e=0,he=Ze.length;_e<he;_e++)Te=Ze[_e],z?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ae,je,Te):t.texImage2D(i.TEXTURE_2D,_e,He,Ae,je,Te);C.generateMipmaps=!1}else if(z){if(ge){let _e=Se(ye);t.texStorage2D(i.TEXTURE_2D,Ne,He,_e.width,_e.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,je,ye)}else t.texImage2D(i.TEXTURE_2D,0,He,Ae,je,ye);p(C)&&g(Z),Re.__version=ee.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function K(I,C,V){if(C.image.length!==6)return;let Z=B(I,C),de=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+V);let ee=n.get(de);if(de.version!==ee.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);let Re=st.getPrimaries(st.workingColorSpace),ve=C.colorSpace===An?null:st.getPrimaries(C.colorSpace),Pe=C.colorSpace===An||Re===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Fe=C.isCompressedTexture||C.image[0].isCompressedTexture,ye=C.image[0]&&C.image[0].isDataTexture,Ae=[];for(let he=0;he<6;he++)!Fe&&!ye?Ae[he]=m(C.image[he],!0,s.maxCubemapSize):Ae[he]=ye?C.image[he].image:C.image[he],Ae[he]=xe(C,Ae[he]);let je=Ae[0],He=r.convert(C.format,C.colorSpace),Te=r.convert(C.type),Ze=M(C.internalFormat,He,Te,C.colorSpace),z=C.isVideoTexture!==!0,ge=ee.__version===void 0||Z===!0,be=de.dataReady,Ne=R(C,je);fe(i.TEXTURE_CUBE_MAP,C);let _e;if(Fe){z&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Ze,je.width,je.height);for(let he=0;he<6;he++){_e=Ae[he].mipmaps;for(let Be=0;Be<_e.length;Be++){let $e=_e[Be];C.format!==hn?He!==null?z?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,$e.width,$e.height,He,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,Ze,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,$e.width,$e.height,He,Te,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,Ze,$e.width,$e.height,0,He,Te,$e.data)}}}else{if(_e=C.mipmaps,z&&ge){_e.length>0&&Ne++;let he=Se(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Ze,he.width,he.height)}for(let he=0;he<6;he++)if(ye){z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae[he].width,Ae[he].height,He,Te,Ae[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ze,Ae[he].width,Ae[he].height,0,He,Te,Ae[he].data);for(let Be=0;Be<_e.length;Be++){let St=_e[Be].image[he].image;z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,St.width,St.height,He,Te,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,Ze,St.width,St.height,0,He,Te,St.data)}}else{z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,He,Te,Ae[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ze,He,Te,Ae[he]);for(let Be=0;Be<_e.length;Be++){let $e=_e[Be];z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,He,Te,$e.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,Ze,He,Te,$e.image[he])}}}p(C)&&g(i.TEXTURE_CUBE_MAP),ee.__version=de.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function pe(I,C,V,Z,de,ee){let Re=r.convert(V.format,V.colorSpace),ve=r.convert(V.type),Pe=M(V.internalFormat,Re,ve,V.colorSpace),Fe=n.get(C),ye=n.get(V);if(ye.__renderTarget=C,!Fe.__hasExternalTextures){let Ae=Math.max(1,C.width>>ee),je=Math.max(1,C.height>>ee);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ee,Pe,Ae,je,C.depth,0,Re,ve,null):t.texImage2D(de,ee,Pe,Ae,je,0,Re,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),G(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,de,ye.__webglTexture,0,me(C)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,de,ye.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(I,C,V){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){let Z=C.depthTexture,de=Z&&Z.isDepthTexture?Z.type:null,ee=y(C.stencilBuffer,de),Re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=me(C);G(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ee,C.width,C.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ee,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ee,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,I)}else{let Z=C.textures;for(let de=0;de<Z.length;de++){let ee=Z[de],Re=r.convert(ee.format,ee.colorSpace),ve=r.convert(ee.type),Pe=M(ee.internalFormat,Re,ve,ee.colorSpace),Fe=me(C);V&&G(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Pe,C.width,C.height):G(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Pe,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(C.depthTexture);Z.__renderTarget=C,(!Z.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),N(C.depthTexture,0);let de=Z.__webglTexture,ee=me(C);if(C.depthTexture.format===Gs)G(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(C.depthTexture.format===Fi)G(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function De(I){let C=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Z){let de=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Z.removeEventListener("dispose",de)};Z.addEventListener("dispose",de),C.__depthDisposeCallback=de}C.__boundDepthTexture=Z}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let Z=I.texture.mipmaps;Z&&Z.length>0?ue(C.__webglFramebuffer[0],I):ue(C.__webglFramebuffer,I)}else if(V){C.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[Z]),C.__webglDepthbuffer[Z]===void 0)C.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(C.__webglDepthbuffer[Z],I,!1);else{let de=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=C.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ee)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),ce(C.__webglDepthbuffer,I,!1);else{let de=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(I,C,V){let Z=n.get(I);C!==void 0&&pe(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&De(I)}function F(I){let C=I.texture,V=n.get(I),Z=n.get(C);I.addEventListener("dispose",T);let de=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Re=de.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=C.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer[ve]=[];for(let Pe=0;Pe<C.mipmaps.length;Pe++)V.__webglFramebuffer[ve][Pe]=i.createFramebuffer()}else V.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer=[];for(let ve=0;ve<C.mipmaps.length;ve++)V.__webglFramebuffer[ve]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ve=0,Pe=de.length;ve<Pe;ve++){let Fe=n.get(de[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&G(I)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){let Pe=de[ve];V.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);let Fe=r.convert(Pe.format,Pe.colorSpace),ye=r.convert(Pe.type),Ae=M(Pe.internalFormat,Fe,ye,Pe.colorSpace,I.isXRRenderTarget===!0),je=me(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ae,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),fe(i.TEXTURE_CUBE_MAP,C);for(let ve=0;ve<6;ve++)if(C.mipmaps&&C.mipmaps.length>0)for(let Pe=0;Pe<C.mipmaps.length;Pe++)pe(V.__webglFramebuffer[ve][Pe],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Pe);else pe(V.__webglFramebuffer[ve],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(C)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ve=0,Pe=de.length;ve<Pe;ve++){let Fe=de[ve],ye=n.get(Fe),Ae=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ye.__webglTexture),fe(Ae,Fe),pe(V.__webglFramebuffer,I,Fe,i.COLOR_ATTACHMENT0+ve,Ae,0),p(Fe)&&g(Ae)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Z.__webglTexture),fe(ve,C),C.mipmaps&&C.mipmaps.length>0)for(let Pe=0;Pe<C.mipmaps.length;Pe++)pe(V.__webglFramebuffer[Pe],I,C,i.COLOR_ATTACHMENT0,ve,Pe);else pe(V.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,ve,0);p(C)&&g(ve),t.unbindTexture()}I.depthBuffer&&De(I)}function ie(I){let C=I.textures;for(let V=0,Z=C.length;V<Z;V++){let de=C[V];if(p(de)){let ee=v(I),Re=n.get(de).__webglTexture;t.bindTexture(ee,Re),g(ee),t.unbindTexture()}}}let ne=[],$=[];function re(I){if(I.samples>0){if(G(I)===!1){let C=I.textures,V=I.width,Z=I.height,de=i.COLOR_BUFFER_BIT,ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(I),ve=C.length>1;if(ve)for(let Fe=0;Fe<C.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Pe=I.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Fe=0;Fe<C.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Fe]);let ye=n.get(C[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,de,i.NEAREST),l===!0&&(ne.length=0,$.length=0,ne.push(i.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ne.push(ee),$.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Fe=0;Fe<C.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Fe]);let ye=n.get(C[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function me(I){return Math.min(s.maxSamples,I.samples)}function G(I){let C=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function j(I){let C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function xe(I,C){let V=I.colorSpace,Z=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Zt&&V!==An&&(st.getTransfer(V)===dt?(Z!==hn||de!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),C}function Se(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=E,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=G}function W_(i,e){function t(n,s=An){let r,o=st.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ro)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===bt)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===lr)return i.RGB;if(n===hn)return i.RGBA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===qh)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===Po||n===Io||n===Do||n===Lo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===zl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===Kl||n===Zl||n===Jl||n===Ql||n===$l||n===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===nc||n===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tc)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===rc||n===oc||n===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new no(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new it({vertexShader:X_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends Zn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,x=null,m=typeof XRWebGLBinding<"u",p=new mu,g={},v=t.getContextAttributes(),M=null,y=null,R=[],S=[],T=new le,A=null,w=new Gt;w.viewport=new rt;let _=new Gt;_.viewport=new rt;let b=[w,_],E=new rl,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=R[W];return K===void 0&&(K=new Ys,R[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=R[W];return K===void 0&&(K=new Ys,R[W]=K),K.getGripSpace()},this.getHand=function(W){let K=R[W];return K===void 0&&(K=new Ys,R[W]=K),K.getHandSpace()};function N(W){let K=S.indexOf(W.inputSource);if(K===-1)return;let pe=R[K];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Y);for(let W=0;W<R.length;W++){let K=S[W];K!==null&&(S[W]=null,R[W].disconnect(K))}D=null,U=null,p.reset();for(let W in g)delete g[W];e.setRenderTarget(M),f=null,d=null,h=null,s=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&m&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ce=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?Fi:Gs,ce=v.stencil?Ui:ri);let De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new pt(d.textureWidth,d.textureHeight,{format:hn,type:En,depthTexture:new vi(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pt(f.framebufferWidth,f.framebufferHeight,{format:hn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(W){for(let K=0;K<W.removed.length;K++){let pe=W.removed[K],ce=S.indexOf(pe);ce>=0&&(S[ce]=null,R[ce].disconnect(pe))}for(let K=0;K<W.added.length;K++){let pe=W.added[K],ce=S.indexOf(pe);if(ce===-1){for(let De=0;De<R.length;De++)if(De>=S.length){S.push(pe),ce=De;break}else if(S[De]===null){S[De]=pe,ce=De;break}if(ce===-1)break}let ue=R[ce];ue&&ue.connect(pe)}}let k=new L,H=new L;function oe(W,K,pe){k.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(pe.matrixWorld);let ce=k.distanceTo(H),ue=K.projectionMatrix.elements,De=pe.projectionMatrix.elements,We=ue[14]/(ue[10]-1),F=ue[14]/(ue[10]+1),ie=(ue[9]+1)/ue[5],ne=(ue[9]-1)/ue[5],$=(ue[8]-1)/ue[0],re=(De[8]+1)/De[0],me=We*$,G=We*re,j=ce/(-$+re),xe=j*-$;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xe),W.translateZ(j),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ue[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Se=We+j,I=F+j,C=me-xe,V=G+(ce-xe),Z=ie*F/I*Se,de=ne*F/I*Se;W.projectionMatrix.makePerspective(C,V,Z,de,Se,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let K=W.near,pe=W.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),E.near=_.near=w.near=K,E.far=_.far=w.far=pe,(D!==E.near||U!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,U=E.far),E.layers.mask=W.layers.mask|6,w.layers.mask=E.layers.mask&3,_.layers.mask=E.layers.mask&5;let ce=W.parent,ue=E.cameras;ae(E,ce);for(let De=0;De<ue.length;De++)ae(ue[De],ce);ue.length===2?oe(E,w,_):E.projectionMatrix.copy(w.projectionMatrix),fe(W,E,ce)};function fe(W,K,pe){pe===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=$i*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(E)},this.getCameraTexture=function(W){return g[W]};let B=null;function Q(W,K){if(u=K.getViewerPose(c||o),x=K,u!==null){let pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ce=!1;pe.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let F=0;F<pe.length;F++){let ie=pe[F],ne=null;if(f!==null)ne=f.getViewport(ie);else{let re=h.getViewSubImage(d,ie);ne=re.viewport,F===0&&(e.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(y))}let $=b[F];$===void 0&&($=new Gt,$.layers.enable(F),$.viewport=new rt,b[F]=$),$.matrix.fromArray(ie.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ie.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ne.x,ne.y,ne.width,ne.height),F===0&&(E.matrix.copy($.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push($)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){h=n.getBinding();let F=h.getDepthInformation(pe[0]);F&&F.isValid&&F.texture&&p.init(F,s.renderState)}if(ue&&ue.includes("camera-access")&&m){e.state.unbindTexture(),h=n.getBinding();for(let F=0;F<pe.length;F++){let ie=pe[F].camera;if(ie){let ne=g[ie];ne||(ne=new no,g[ie]=ne);let $=h.getCameraImage(ie);ne.sourceTexture=$}}}}for(let pe=0;pe<R.length;pe++){let ce=S[pe],ue=R[pe];ce!==null&&ue!==void 0&&ue.update(ce,K,c||o)}B&&B(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}let se=new Ep;se.setAnimationLoop(Q),this.setAnimationLoop=function(W){B=W},this.dispose=function(){}}},ys=new Ln,Y_=new Ve;function j_(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Qh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,M,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),x(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),m(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===$t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===$t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),M=v.envMap,y=v.envMapRotation;M&&(p.envMap.value=M,ys.copy(y),ys.x*=-1,ys.y*=-1,ys.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(ys)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let y=M.program;n.uniformBlockBinding(v,y)}function c(v,M){let y=s[v.id];y===void 0&&(x(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));let R=M.program;n.updateUBOMapping(v,R);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function u(v){let M=h();v.__bindingPointIndex=M;let y=i.createBuffer(),R=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],y=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,T=y.length;S<T;S++){let A=Array.isArray(y[S])?y[S]:[y[S]];for(let w=0,_=A.length;w<_;w++){let b=A[w];if(f(b,S,w,R)===!0){let E=b.__offset,D=Array.isArray(b.value)?b.value:[b.value],U=0;for(let N=0;N<D.length;N++){let O=D[N],Y=m(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,E+U,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,y,R){let S=v.value,T=M+"_"+y;if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:R[T]=S.clone(),!0;{let A=R[T];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return R[T]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function x(v){let M=v.uniforms,y=0,R=16;for(let T=0,A=M.length;T<A;T++){let w=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,b=w.length;_<b;_++){let E=w[_],D=Array.isArray(E.value)?E.value:[E.value];for(let U=0,N=D.length;U<N;U++){let O=D[U],Y=m(O),k=y%R,H=k%Y.boundary,oe=k+H;y+=H,oe!==0&&R-oe<Y.storage&&(y+=R-oe),E.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,y+=Y.storage}}}let S=y%R;return S>0&&(y+=R-S),v.__size=y,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){let M=v.target;M.removeEventListener("dispose",p);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var mr=class{constructor(e={}){let{canvas:t=jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),m=new Int32Array(4),p=null,g=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=ct;let S=0,T=0,A=null,w=-1,_=null,b=new rt,E=new rt,D=null,U=new we(0),N=0,O=t.width,Y=t.height,k=1,H=null,oe=null,ae=new rt(0,0,O,Y),fe=new rt(0,0,O,Y),B=!1,Q=new Js,se=!1,W=!1,K=new Ve,pe=new L,ce=new rt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function We(){return A===null?k:1}let F=n;function ie(P,X){return t.getContext(P,X)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){let X="webgl2";if(F=ie(X,P),F===null)throw ie(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ne,$,re,me,G,j,xe,Se,I,C,V,Z,de,ee,Re,ve,Pe,Fe,ye,Ae,je,He,Te,Ze;function z(){ne=new fy(F),ne.init(),He=new W_(F,ne),$=new oy(F,ne,e,He),re=new V_(F,ne),$.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),me=new gy(F),G=new R_,j=new G_(F,ne,re,G,$,He,me),xe=new ly(y),Se=new dy(y),I=new S0(F),Te=new sy(F,I),C=new py(F,I,me,Te),V=new vy(F,C,I,me),ye=new xy(F,$,j),ve=new ay(G),Z=new C_(y,xe,Se,ne,$,Te,ve),de=new j_(y,G),ee=new I_,Re=new O_(ne),Fe=new iy(y,xe,Se,re,V,f,l),Pe=new H_(y,V,$),Ze=new K_(F,me,$,re),Ae=new ry(F,ne,me),je=new my(F,ne,me),me.programs=Z.programs,y.capabilities=$,y.extensions=ne,y.properties=G,y.renderLists=ee,y.shadowMap=Pe,y.state=re,y.info=me}z();let ge=new gu(y,F);this.xr=ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let P=ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(O,Y,!1))},this.getSize=function(P){return P.set(O,Y)},this.setSize=function(P,X,J=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,Y=X,t.width=Math.floor(P*k),t.height=Math.floor(X*k),J===!0&&(t.style.width=P+"px",t.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(O*k,Y*k).floor()},this.setDrawingBufferSize=function(P,X,J){O=P,Y=X,k=J,t.width=Math.floor(P*J),t.height=Math.floor(X*J),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,X,J,te){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,X,J,te),re.viewport(b.copy(ae).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(fe)},this.setScissor=function(P,X,J,te){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,X,J,te),re.scissor(E.copy(fe).multiplyScalar(k).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(P){re.setScissorTest(B=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){oe=P},this.getClearColor=function(P){return P.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(P=!0,X=!0,J=!0){let te=0;if(P){let q=!1;if(A!==null){let Me=A.texture.format;q=Me===Ll||Me===Dl||Me===Il}if(q){let Me=A.texture.type,Ce=Me===En||Me===ri||Me===ar||Me===Ui||Me===Cl||Me===Rl,Oe=Fe.getClearColor(),Le=Fe.getClearAlpha(),Ke=Oe.r,Je=Oe.g,Xe=Oe.b;Ce?(x[0]=Ke,x[1]=Je,x[2]=Xe,x[3]=Le,F.clearBufferuiv(F.COLOR,0,x)):(m[0]=Ke,m[1]=Je,m[2]=Xe,m[3]=Le,F.clearBufferiv(F.COLOR,0,m))}else te|=F.COLOR_BUFFER_BIT}X&&(te|=F.DEPTH_BUFFER_BIT),J&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Fe.dispose(),ee.dispose(),Re.dispose(),G.dispose(),xe.dispose(),Se.dispose(),V.dispose(),Te.dispose(),Ze.dispose(),Z.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",qn),ge.removeEventListener("sessionend",bd),Hi.stop()};function be(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let P=me.autoReset,X=Pe.enabled,J=Pe.autoUpdate,te=Pe.needsUpdate,q=Pe.type;z(),me.autoReset=P,Pe.enabled=X,Pe.autoUpdate=J,Pe.needsUpdate=te,Pe.type=q}function _e(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){let X=P.target;X.removeEventListener("dispose",he),Be(X)}function Be(P){$e(P),G.remove(P)}function $e(P){let X=G.get(P).programs;X!==void 0&&(X.forEach(function(J){Z.releaseProgram(J)}),P.isShaderMaterial&&Z.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,J,te,q,Me){X===null&&(X=ue);let Ce=q.isMesh&&q.matrixWorld.determinant()<0,Oe=Vm(P,X,J,te,q);re.setMaterial(te,Ce);let Le=J.index,Ke=1;if(te.wireframe===!0){if(Le=C.getWireframeAttribute(J),Le===void 0)return;Ke=2}let Je=J.drawRange,Xe=J.attributes.position,lt=Je.start*Ke,xt=(Je.start+Je.count)*Ke;Me!==null&&(lt=Math.max(lt,Me.start*Ke),xt=Math.min(xt,(Me.start+Me.count)*Ke)),Le!==null?(lt=Math.max(lt,0),xt=Math.min(xt,Le.count)):Xe!=null&&(lt=Math.max(lt,0),xt=Math.min(xt,Xe.count));let Ot=xt-lt;if(Ot<0||Ot===1/0)return;Te.setup(q,te,Oe,J,Le);let wt,_t=Ae;if(Le!==null&&(wt=I.get(Le),_t=je,_t.setIndex(wt)),q.isMesh)te.wireframe===!0?(re.setLineWidth(te.wireframeLinewidth*We()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(q.isLine){let qe=te.linewidth;qe===void 0&&(qe=1),re.setLineWidth(qe*We()),q.isLineSegments?_t.setMode(F.LINES):q.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else q.isPoints?_t.setMode(F.POINTS):q.isSprite&&_t.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let qe=q._multiDrawStarts,Pt=q._multiDrawCounts,ut=q._multiDrawCount,gn=Le?I.get(Le).bytesPerElement:1,Es=G.get(te).currentProgram.getUniforms();for(let xn=0;xn<ut;xn++)Es.setValue(F,"_gl_DrawID",xn),_t.render(qe[xn]/gn,Pt[xn])}else if(q.isInstancedMesh)_t.renderInstances(lt,Ot,q.count);else if(J.isInstancedBufferGeometry){let qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pt=Math.min(J.instanceCount,qe);_t.renderInstances(lt,Ot,Pt)}else _t.render(lt,Ot)};function St(P,X,J){P.transparent===!0&&P.side===Mt&&P.forceSinglePass===!1?(P.side=$t,P.needsUpdate=!0,la(P,X,J),P.side=Vn,P.needsUpdate=!0,la(P,X,J),P.side=Mt):la(P,X,J)}this.compile=function(P,X,J=null){J===null&&(J=P),g=Re.get(J),g.init(X),M.push(g),J.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),P!==J&&P.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();let te=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Me=q.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){let Oe=Me[Ce];St(Oe,J,q),te.add(Oe)}else St(Me,J,q),te.add(Me)}),g=M.pop(),te},this.compileAsync=function(P,X,J=null){let te=this.compile(P,X,J);return new Promise(q=>{function Me(){if(te.forEach(function(Ce){G.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){q(P);return}setTimeout(Me,10)}ne.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ft=null;function li(P){ft&&ft(P)}function qn(){Hi.stop()}function bd(){Hi.start()}let Hi=new Ep;Hi.setAnimationLoop(li),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(P){ft=P,ge.setAnimationLoop(P),P===null?Hi.stop():Hi.start()},ge.addEventListener("sessionstart",qn),ge.addEventListener("sessionend",bd),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(X),X=ge.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,X,A),g=Re.get(P,M.length),g.init(X),M.push(g),K.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(K,kn,X.reversedDepth),W=this.localClippingEnabled,se=ve.init(this.clippingPlanes,W),p=ee.get(P,v.length),p.init(),v.push(p),ge.enabled===!0&&ge.isPresenting===!0){let Me=y.xr.getDepthSensingMesh();Me!==null&&jc(Me,X,-1/0,y.sortObjects)}jc(P,X,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(H,oe),De=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,De&&Fe.addToRenderList(p,P),this.info.render.frame++,se===!0&&ve.beginShadows();let J=g.state.shadowsArray;Pe.render(J,P,X),se===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=p.opaque,q=p.transmissive;if(g.setupLights(),X.isArrayCamera){let Me=X.cameras;if(q.length>0)for(let Ce=0,Oe=Me.length;Ce<Oe;Ce++){let Le=Me[Ce];Td(te,q,P,Le)}De&&Fe.render(P);for(let Ce=0,Oe=Me.length;Ce<Oe;Ce++){let Le=Me[Ce];wd(p,P,Le,Le.viewport)}}else q.length>0&&Td(te,q,P,X),De&&Fe.render(P),wd(p,P,X);A!==null&&T===0&&(j.updateMultisampleRenderTarget(A),j.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(y,P,X),Te.resetDefaultState(),w=-1,_=null,M.pop(),M.length>0?(g=M[M.length-1],se===!0&&ve.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function jc(P,X,J,te){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){te&&ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);let Ce=V.update(P),Oe=P.material;Oe.visible&&p.push(P,Ce,Oe,J,ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){let Ce=V.update(P),Oe=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ce.copy(P.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ce.copy(Ce.boundingSphere.center)),ce.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Oe)){let Le=Ce.groups;for(let Ke=0,Je=Le.length;Ke<Je;Ke++){let Xe=Le[Ke],lt=Oe[Xe.materialIndex];lt&&lt.visible&&p.push(P,Ce,lt,J,ce.z,Xe)}}else Oe.visible&&p.push(P,Ce,Oe,J,ce.z,null)}}let Me=P.children;for(let Ce=0,Oe=Me.length;Ce<Oe;Ce++)jc(Me[Ce],X,J,te)}function wd(P,X,J,te){let q=P.opaque,Me=P.transmissive,Ce=P.transparent;g.setupLightsView(J),se===!0&&ve.setGlobalState(y.clippingPlanes,J),te&&re.viewport(b.copy(te)),q.length>0&&aa(q,X,J),Me.length>0&&aa(Me,X,J),Ce.length>0&&aa(Ce,X,J),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Td(P,X,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new pt(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?bt:En,minFilter:cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let Me=g.state.transmissionRenderTarget[te.id],Ce=te.viewport||b;Me.setSize(Ce.z*y.transmissionResolutionScale,Ce.w*y.transmissionResolutionScale);let Oe=y.getRenderTarget(),Le=y.getActiveCubeFace(),Ke=y.getActiveMipmapLevel();y.setRenderTarget(Me),y.getClearColor(U),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),De&&Fe.render(J);let Je=y.toneMapping;y.toneMapping=Xn;let Xe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),se===!0&&ve.setGlobalState(y.clippingPlanes,te),aa(P,J,te),j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me),ne.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let xt=0,Ot=X.length;xt<Ot;xt++){let wt=X[xt],_t=wt.object,qe=wt.geometry,Pt=wt.material,ut=wt.group;if(Pt.side===Mt&&_t.layers.test(te.layers)){let gn=Pt.side;Pt.side=$t,Pt.needsUpdate=!0,Ed(_t,J,te,qe,Pt,ut),Pt.side=gn,Pt.needsUpdate=!0,lt=!0}}lt===!0&&(j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me))}y.setRenderTarget(Oe,Le,Ke),y.setClearColor(U,N),Xe!==void 0&&(te.viewport=Xe),y.toneMapping=Je}function aa(P,X,J){let te=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Me=P.length;q<Me;q++){let Ce=P[q],Oe=Ce.object,Le=Ce.geometry,Ke=Ce.group,Je=Ce.material;Je.allowOverride===!0&&te!==null&&(Je=te),Oe.layers.test(J.layers)&&Ed(Oe,X,J,Le,Je,Ke)}}function Ed(P,X,J,te,q,Me){P.onBeforeRender(y,X,J,te,q,Me),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(y,X,J,te,P,Me),q.transparent===!0&&q.side===Mt&&q.forceSinglePass===!1?(q.side=$t,q.needsUpdate=!0,y.renderBufferDirect(J,X,te,q,P,Me),q.side=Vn,q.needsUpdate=!0,y.renderBufferDirect(J,X,te,q,P,Me),q.side=Mt):y.renderBufferDirect(J,X,te,q,P,Me),P.onAfterRender(y,X,J,te,q,Me)}function la(P,X,J){X.isScene!==!0&&(X=ue);let te=G.get(P),q=g.state.lights,Me=g.state.shadowsArray,Ce=q.state.version,Oe=Z.getParameters(P,q.state,Me,X,J),Le=Z.getProgramCacheKey(Oe),Ke=te.programs;te.environment=P.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(P.isMeshStandardMaterial?Se:xe).get(P.envMap||te.environment),te.envMapRotation=te.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",he),Ke=new Map,te.programs=Ke);let Je=Ke.get(Le);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Ce)return Cd(P,Oe),Je}else Oe.uniforms=Z.getUniforms(P),P.onBeforeCompile(Oe,y),Je=Z.acquireProgram(Oe,Le),Ke.set(Le,Je),te.uniforms=Oe.uniforms;let Xe=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=ve.uniform),Cd(P,Oe),te.needsLights=Wm(P),te.lightsStateVersion=Ce,te.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function Ad(P){if(P.uniformsList===null){let X=P.currentProgram.getUniforms();P.uniformsList=fr.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Cd(P,X){let J=G.get(P);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Vm(P,X,J,te,q){X.isScene!==!0&&(X=ue),j.resetTextureUnits();let Me=X.fog,Ce=te.isMeshStandardMaterial?X.environment:null,Oe=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zt,Le=(te.isMeshStandardMaterial?Se:xe).get(te.envMap||Ce),Ke=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,xt=!!J.morphAttributes.color,Ot=Xn;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ot=y.toneMapping);let wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=wt!==void 0?wt.length:0,qe=G.get(te),Pt=g.state.lights;if(se===!0&&(W===!0||P!==_)){let an=P===_&&te.id===w;ve.setState(te,P,an)}let ut=!1;te.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Pt.state.version||qe.outputColorSpace!==Oe||q.isBatchedMesh&&qe.batching===!1||!q.isBatchedMesh&&qe.batching===!0||q.isBatchedMesh&&qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&qe.instancing===!1||!q.isInstancedMesh&&qe.instancing===!0||q.isSkinnedMesh&&qe.skinning===!1||!q.isSkinnedMesh&&qe.skinning===!0||q.isInstancedMesh&&qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qe.instancingMorph===!1&&q.morphTexture!==null||qe.envMap!==Le||te.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ve.numPlanes||qe.numIntersection!==ve.numIntersection)||qe.vertexAlphas!==Ke||qe.vertexTangents!==Je||qe.morphTargets!==Xe||qe.morphNormals!==lt||qe.morphColors!==xt||qe.toneMapping!==Ot||qe.morphTargetsCount!==_t)&&(ut=!0):(ut=!0,qe.__version=te.version);let gn=qe.currentProgram;ut===!0&&(gn=la(te,X,q));let Es=!1,xn=!1,Cr=!1,It=gn.getUniforms(),Rn=qe.uniforms;if(re.useProgram(gn.program)&&(Es=!0,xn=!0,Cr=!0),te.id!==w&&(w=te.id,xn=!0),Es||_!==P){re.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),It.setValue(F,"projectionMatrix",P.projectionMatrix),It.setValue(F,"viewMatrix",P.matrixWorldInverse);let un=It.map.cameraPosition;un!==void 0&&un.setValue(F,pe.setFromMatrixPosition(P.matrixWorld)),$.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&It.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,xn=!0,Cr=!0)}if(q.isSkinnedMesh){It.setOptional(F,q,"bindMatrix"),It.setOptional(F,q,"bindMatrixInverse");let an=q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),It.setValue(F,"boneTexture",an.boneTexture,j))}q.isBatchedMesh&&(It.setOptional(F,q,"batchingTexture"),It.setValue(F,"batchingTexture",q._matricesTexture,j),It.setOptional(F,q,"batchingIdTexture"),It.setValue(F,"batchingIdTexture",q._indirectTexture,j),It.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&It.setValue(F,"batchingColorTexture",q._colorsTexture,j));let Pn=J.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&ye.update(q,J,gn),(xn||qe.receiveShadow!==q.receiveShadow)&&(qe.receiveShadow=q.receiveShadow,It.setValue(F,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Rn.envMap.value=Le,Rn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(Rn.envMapIntensity.value=X.environmentIntensity),xn&&(It.setValue(F,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&Gm(Rn,Cr),Me&&te.fog===!0&&de.refreshFogUniforms(Rn,Me),de.refreshMaterialUniforms(Rn,te,k,Y,g.state.transmissionRenderTarget[P.id]),fr.upload(F,Ad(qe),Rn,j)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(fr.upload(F,Ad(qe),Rn,j),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&It.setValue(F,"center",q.center),It.setValue(F,"modelViewMatrix",q.modelViewMatrix),It.setValue(F,"normalMatrix",q.normalMatrix),It.setValue(F,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let an=te.uniformsGroups;for(let un=0,Kc=an.length;un<Kc;un++){let ki=an[un];Ze.update(ki,gn),Ze.bind(ki,gn)}}return gn}function Gm(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Wm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,X,J){let te=G.get(P);te.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),G.get(P.texture).__webglTexture=X,G.get(P.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:J,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,X){let J=G.get(P);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};let Xm=F.createFramebuffer();this.setRenderTarget=function(P,X=0,J=0){A=P,S=X,T=J;let te=!0,q=null,Me=!1,Ce=!1;if(P){let Le=G.get(P);if(Le.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(F.FRAMEBUFFER,null),te=!1;else if(Le.__webglFramebuffer===void 0)j.setupRenderTarget(P);else if(Le.__hasExternalTextures)j.rebindTextures(P,G.get(P.texture).__webglTexture,G.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(Le.__boundDepthTexture!==Xe){if(Xe!==null&&G.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(P)}}let Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ce=!0);let Je=G.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?q=Je[X][J]:q=Je[X],Me=!0):P.samples>0&&j.useMultisampledRTT(P)===!1?q=G.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?q=Je[J]:q=Je,b.copy(P.viewport),E.copy(P.scissor),D=P.scissorTest}else b.copy(ae).multiplyScalar(k).floor(),E.copy(fe).multiplyScalar(k).floor(),D=B;if(J!==0&&(q=Xm),re.bindFramebuffer(F.FRAMEBUFFER,q)&&te&&re.drawBuffers(P,q),re.viewport(b),re.scissor(E),re.setScissorTest(D),Me){let Le=G.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,J)}else if(Ce){let Le=X;for(let Ke=0;Ke<P.textures.length;Ke++){let Je=G.get(P.textures[Ke]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ke,Je.__webglTexture,J,Le)}}else if(P!==null&&J!==0){let Le=G.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Le.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(P,X,J,te,q,Me,Ce,Oe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=G.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){re.bindFramebuffer(F.FRAMEBUFFER,Le);try{let Ke=P.textures[Oe],Je=Ke.format,Xe=Ke.type;if(!$.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-te&&J>=0&&J<=P.height-q&&(P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe),F.readPixels(X,J,te,q,He.convert(Je),He.convert(Xe),Me))}finally{let Ke=A!==null?G.get(A).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(P,X,J,te,q,Me,Ce,Oe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=G.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(X>=0&&X<=P.width-te&&J>=0&&J<=P.height-q){re.bindFramebuffer(F.FRAMEBUFFER,Le);let Ke=P.textures[Oe],Je=Ke.format,Xe=Ke.type;if(!$.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe),F.readPixels(X,J,te,q,He.convert(Je),He.convert(Xe),0);let xt=A!==null?G.get(A).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,xt);let Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kf(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(lt),F.deleteSync(Ot),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,X=null,J=0){let te=Math.pow(2,-J),q=Math.floor(P.image.width*te),Me=Math.floor(P.image.height*te),Ce=X!==null?X.x:0,Oe=X!==null?X.y:0;j.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Ce,Oe,q,Me),re.unbindTexture()};let qm=F.createFramebuffer(),Ym=F.createFramebuffer();this.copyTextureToTexture=function(P,X,J=null,te=null,q=0,Me=null){Me===null&&(q!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=q,q=0):Me=0);let Ce,Oe,Le,Ke,Je,Xe,lt,xt,Ot,wt=P.isCompressedTexture?P.mipmaps[Me]:P.image;if(J!==null)Ce=J.max.x-J.min.x,Oe=J.max.y-J.min.y,Le=J.isBox3?J.max.z-J.min.z:1,Ke=J.min.x,Je=J.min.y,Xe=J.isBox3?J.min.z:0;else{let Pn=Math.pow(2,-q);Ce=Math.floor(wt.width*Pn),Oe=Math.floor(wt.height*Pn),P.isDataArrayTexture?Le=wt.depth:P.isData3DTexture?Le=Math.floor(wt.depth*Pn):Le=1,Ke=0,Je=0,Xe=0}te!==null?(lt=te.x,xt=te.y,Ot=te.z):(lt=0,xt=0,Ot=0);let _t=He.convert(X.format),qe=He.convert(X.type),Pt;X.isData3DTexture?(j.setTexture3D(X,0),Pt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(j.setTexture2DArray(X,0),Pt=F.TEXTURE_2D_ARRAY):(j.setTexture2D(X,0),Pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let ut=F.getParameter(F.UNPACK_ROW_LENGTH),gn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Es=F.getParameter(F.UNPACK_SKIP_PIXELS),xn=F.getParameter(F.UNPACK_SKIP_ROWS),Cr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);let It=P.isDataArrayTexture||P.isData3DTexture,Rn=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){let Pn=G.get(P),an=G.get(X),un=G.get(Pn.__renderTarget),Kc=G.get(an.__renderTarget);re.bindFramebuffer(F.READ_FRAMEBUFFER,un.__webglFramebuffer),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Kc.__webglFramebuffer);for(let ki=0;ki<Le;ki++)It&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(P).__webglTexture,q,Xe+ki),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(X).__webglTexture,Me,Ot+ki)),F.blitFramebuffer(Ke,Je,Ce,Oe,lt,xt,Ce,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||G.has(P)){let Pn=G.get(P),an=G.get(X);re.bindFramebuffer(F.READ_FRAMEBUFFER,qm),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ym);for(let un=0;un<Le;un++)It?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pn.__webglTexture,q,Xe+un):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pn.__webglTexture,q),Rn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,an.__webglTexture,Me,Ot+un):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,an.__webglTexture,Me),q!==0?F.blitFramebuffer(Ke,Je,Ce,Oe,lt,xt,Ce,Oe,F.COLOR_BUFFER_BIT,F.NEAREST):Rn?F.copyTexSubImage3D(Pt,Me,lt,xt,Ot+un,Ke,Je,Ce,Oe):F.copyTexSubImage2D(Pt,Me,lt,xt,Ke,Je,Ce,Oe);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Rn?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(Pt,Me,lt,xt,Ot,Ce,Oe,Le,_t,qe,wt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,Me,lt,xt,Ot,Ce,Oe,Le,_t,wt.data):F.texSubImage3D(Pt,Me,lt,xt,Ot,Ce,Oe,Le,_t,qe,wt):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,lt,xt,Ce,Oe,_t,qe,wt.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,lt,xt,wt.width,wt.height,_t,wt.data):F.texSubImage2D(F.TEXTURE_2D,Me,lt,xt,Ce,Oe,_t,qe,wt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Es),F.pixelStorei(F.UNPACK_SKIP_ROWS,xn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Cr),Me===0&&X.generateMipmaps&&F.generateMipmap(Pt),re.unbindTexture()},this.initRenderTarget=function(P){G.get(P).__webglFramebuffer===void 0&&j.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?j.setTextureCube(P,0):P.isData3DTexture?j.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?j.setTexture2DArray(P,0):j.setTexture2D(P,0),re.unbindTexture()},this.resetState=function(){S=0,T=0,A=null,re.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function Ip(i,e){let t=new ot,n=[];for(let o=0;o<48;o++)n.push(o/48,o*37%47/47,o*19%43/43);t.setAttribute("position",new ke(n,3));let s=new it({uniforms:{clock:e},transparent:!0,depthTest:!1,depthWrite:!1,blending:gi,vertexShader:"uniform float clock;varying float life;varying float smoke;void main(){float t=fract(clock*.55+position.x);life=sin(t*3.14159);smoke=step(.82,position.x);vec2 p=vec2(.709,.18)+vec2(-.089,.14)*t;float spread=t*t*.012;p+=vec2(sin(position.y*99.0+clock*2.0),cos(position.z*93.0+clock*1.7))*spread;p.y-=smoke*t*.014;gl_Position=projectionMatrix*modelViewMatrix*vec4((p.x-.5)*1672.0,(.5-p.y)*941.0,0,1);gl_PointSize=mix(2.5,15.0,smoke)*life;}",fragmentShader:"varying float life;varying float smoke;void main(){float r=length(gl_PointCoord-.5)*2.0;float a=(1.0-smoothstep(.1,1.0,r))*life;gl_FragColor=vec4(mix(vec3(1,.36,.04),vec3(.15,.14,.13),smoke),a*mix(.7,.16,smoke));}"}),r=new is(t,s);return r.frustumCulled=!1,r.renderOrder=34,i.add(r),r}function Dp(i,e){let t=(i*e%1+1)%1;return t<.36?(1-Math.cos(Math.PI*t/.36))*.5:(1+Math.cos(Math.PI*(t-.36)/.64))*.5}function vu(i){let e=Dp(i,.34),t=Dp(i,.18);return{phoenixLeft:e*.09,phoenixRight:-e*.12,dragonLeft:t*.045,dragonRight:-t*.05,treeBreath:Math.sin(i*1.3)*.0018,treeArm:(Math.sin(i*1.3+.5)-Math.sin(.5))*.006,shipX:-i*.015}}function Np(i){return{flagship:5,escorts:5,phoenixLeft:20,phoenixRight:21,phoenixBody:22,dragonLeft:30,dragonRight:31,dragonBody:32,fire:33,treeHead:40,treeArm:41,treeFeet:42,treeBody:43}[i]}function yu(i){let e=(i*.65%1+1)%1;return{a:e,b:(e+.5)%1,blend:Math.abs(e*2-1),distance:i*.65,direction:[-.09,.14]}}function Lp(i,e){return Math.hypot((i-.245)/.055,(e-.22)/.045)<1.1||Math.hypot((i-.22)/.036,(e-.276)/.045)<1.1}function Z_(i,e,t,n,s){let r=a=>a>155,o=a=>a<105;return r(i)&&o(e)&&o(t)?s<.31&&!Lp(n,s)?0:-1:r(i)&&r(e)&&o(t)?Lp(n,s)?-1:1:o(i)&&o(e)&&r(t)?2:o(i)&&r(e)&&r(t)?3:-1}function Up(i,e,t){let n=Array.from({length:4},()=>({count:0,minX:e,minY:t,maxX:0,maxY:0}));for(let s=0;s<t;s++)for(let r=0;r<e;r++){let o=(s*e+r)*4,a=Z_(i[o],i[o+1],i[o+2],r/e,s/t);if(a<0)continue;let l=n[a];l.count++,l.minX=Math.min(l.minX,r),l.maxX=Math.max(l.maxX,r),l.minY=Math.min(l.minY,s),l.maxY=Math.max(l.maxY,s)}return n.map(s=>({...s,bounds:[Math.max(0,(s.minX-5)/e),Math.max(0,(s.minY-5)/t),Math.min(1,(s.maxX+6)/e),Math.min(1,(s.maxY+6)/t)]}))}var gt=1672,kt=941,Fp=`varying vec2 paintingUV;uniform vec4 hinge;uniform float wingEnabled;uniform float clock;uniform float part;attribute vec2 wingUV;varying vec2 spriteUV;
void main(){paintingUV=uv;spriteUV=wingUV;vec3 p=position;float w=wingEnabled*smoothstep(hinge.w,hinge.w*2.0+.1,length(p.xy));// The painting ends at the frame: never pull its cut edge into the scene.
float edge=smoothstep(0.0,.065,min(min(uv.x,1.0-uv.x),min(uv.y,1.0-uv.y)));
edge=mix(edge,1.0,wingEnabled);w*=edge;
// Distal membrane follows the main stroke with a small elastic delay.
float flex=wingEnabled*w*w*edge*.008*(sin(clock*1.13-length(p.xy)*.003)-sin(-length(p.xy)*.003));
float z=hinge.x*w+flex,y=hinge.y*w,x=hinge.z*w;
p.xy=mat2(cos(z),sin(z),-sin(z),cos(z))*p.xy;p.xz=mat2(cos(y),-sin(y),sin(y),cos(y))*p.xz;p.yz=mat2(cos(x),sin(x),-sin(x),cos(x))*p.yz;
// Tail motion is weighted away from the spine; the muzzle remains fixed.
if(part>4.5&&part<5.5){float tail=smoothstep(.87,.98,uv.x);p.y+=tail*5.0*(sin(clock*1.35+uv.x*19.0)-sin(uv.x*19.0));}
gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`,Op=`precision highp float;varying vec2 paintingUV;uniform sampler2D painting;uniform sampler2D matte;uniform sampler2D cleanPlate;uniform sampler2D waterMatte;uniform sampler2D wingMatte;uniform sampler2D wingAtlas;uniform sampler2D foreground;varying vec2 spriteUV;uniform vec3 firePhases;uniform float clock;uniform float part;
float label(vec3 m,vec3 c){return 1.0-smoothstep(.18,.65,length(m-c));}
// Real alpha cutouts avoid the scenery holes and colored fringes of semantic masks.
float category(vec2 uv,float which){vec2 p=vec2(uv.x,1.0-uv.y);float a=texture2D(foreground,uv).a;
 float phoenix=1.0-step(.32,p.x),tree=step(.26,p.y)*step(.60,p.x),ship=step(.32,p.x)*(1.0-step(.60,p.x));
 vec2 axis=vec2(-.089,.14),d=p-vec2(.709,.18);float along=dot(d,axis)/dot(axis,axis),across=abs(d.x*axis.y-d.y*axis.x)/length(axis);float flame=step(0.02,along)*(1.0-step(1.35,along))*(1.0-smoothstep(.025,.045,across))*(1.0-step(.75,p.x));
 float dragon=(1.0-phoenix)*(1.0-ship)*(1.0-tree);
 if(which<.5)return a*phoenix;if(which<1.5)return a*dragon*(1.0-flame);if(which<2.5)return a*ship;if(which<3.5)return a*tree*(1.0-flame);return a*flame;}
float headProtection(vec2 p){float face=length((p-vec2(.245,.22))/vec2(.055,.045));float neck=length((p-vec2(.22,.276))/vec2(.036,.045));return max(1.0-smoothstep(1.0,1.1,face),1.0-smoothstep(1.0,1.1,neck));}
vec2 phoenixWings(vec2 p){vec3 m=texture2D(wingMatte,vec2(p.x,1.0-p.y)).rgb;float safe=1.0-headProtection(p);return vec2(label(m,vec3(1,0,0))*(1.0-smoothstep(.29,.31,p.y)),label(m,vec3(1,1,0)))*safe;}
vec2 dragonWings(vec2 p){vec3 m=texture2D(wingMatte,vec2(p.x,1.0-p.y)).rgb;return vec2(label(m,vec3(0,0,1)),label(m,vec3(0,1,1)));}
vec3 treeParts(vec2 p){float feet=smoothstep(.87,.93,p.y);float head=(1.0-smoothstep(.52,.58,p.y))*(1.0-feet);float arm=(1.0-smoothstep(.87,.92,p.x+.25*(p.y-.60)))*smoothstep(.53,.59,p.y)*(1.0-smoothstep(.75,.81,p.y))*(1.0-feet);return vec3(head,arm,feet);}
float partAlpha(vec2 uv){vec2 p=vec2(uv.x,1.0-uv.y);vec2 pw=phoenixWings(p),dw=dragonWings(p);vec3 tr=treeParts(p);if(part<.5)return pw.x;if(part<1.5)return pw.y;if(part<2.5)return max(0.0,category(uv,0.0)-pw.x-pw.y)*smoothstep(.15,.17,p.y);if(part<3.5)return dw.x;if(part<4.5)return dw.y;if(part<5.5)return max(0.0,category(uv,1.0)-dw.x-dw.y)*smoothstep(p.x>.91?-.02:p.x<.82?.10:.065,p.x>.91?-.01:p.x<.82?.12:.085,p.y);if(part<6.5)return category(uv,2.0);if(part<7.5)return 0.0;if(part<8.5)return category(uv,3.0)*tr.x;if(part<9.5)return category(uv,3.0)*tr.y;if(part<10.5)return category(uv,3.0)*tr.z;if(part<11.5)return category(uv,3.0)*max(0.0,1.0-tr.x-tr.y-tr.z);return category(uv,4.0);}
`,J_=Op+`void main(){bool wing=part<1.5||(part>2.5&&part<4.5);if(wing){vec4 sprite=texture2D(wingAtlas,spriteUV);if(sprite.a<.01)discard;gl_FragColor=sprite;return;}float a=partAlpha(paintingUV);a*=smoothstep(0.0,.035,min(min(paintingUV.x,1.0-paintingUV.x),min(paintingUV.y,1.0-paintingUV.y)));if(a<.005)discard;vec2 uv=paintingUV;vec3 c=texture2D(foreground,uv).rgb;if(part>11.5){
 // Mouth-to-tip distance in image coordinates. Keep the muzzle anchored.
 vec2 p=vec2(uv.x,1.0-uv.y),axis=vec2(-.089,.14);float along=clamp(dot(p-vec2(.709,.18),axis)/dot(axis,axis),0.0,1.0);float pin=smoothstep(.02,.16,along);
 // Upstream texture samples move flame detail OUT from the mouth. Two offset
 // phases crossfade; the resetting phase is invisible, so nothing jumps back.
 uv.x+=sin(uv.y*700.0-clock*10.0)*.00045*pin;vec2 drift=vec2(.008,.012)*pin;vec2 ua=uv+drift*firePhases.x,ub=uv+drift*firePhases.y;
 vec3 ca=mix(c,texture2D(foreground,ua).rgb,category(ua,4.0)),cb=mix(c,texture2D(foreground,ub).rgb,category(ub,4.0));c=mix(c,mix(ca,cb,firePhases.z),.6*pin);
 // A continuous travelling highlight reinforces outward flow without moving
 // the jet silhouette or the original mouth pixels.
 c*=1.0+pin*.055*sin(along*65.0-clock*12.0+sin(p.x*173.0)*.6);
 }gl_FragColor=vec4(c,a);}`,Q_=Op+`float holeAt(vec2 uv){vec3 m=texture2D(matte,uv).rgb;vec2 pw=phoenixWings(vec2(uv.x,1.0-uv.y)),dw=dragonWings(vec2(uv.x,1.0-uv.y));float a=max(max(max(category(uv,0.0),category(uv,1.0)),max(category(uv,2.0),category(uv,3.0))),max(category(uv,4.0),max(max(pw.x,pw.y),max(dw.x,dw.y))));vec2 p=vec2(uv.x,1.0-uv.y);float beam=label(m,vec3(0,1,1))*(1.0-smoothstep(.002,.006,abs(p.x-.598)))*step(.12,p.y);return a*(1.0-beam); }void main(){vec2 uv=paintingUV,p=vec2(uv.x,1.0-uv.y);vec3 c=texture2D(painting,uv).rgb;float hole=max(holeAt(uv),max(1.0-smoothstep(.33,.38,p.y),max(smoothstep(.59,.64,p.x)*smoothstep(.25,.33,p.y),(1.0-smoothstep(.31,.35,p.x))*(1.0-smoothstep(.69,.75,p.y)))));vec2 texel=vec2(1.0/1672.0,1.0/941.0)*min(1.0,clock*2.0);for(int i=-1;i<=1;i++)for(int j=-1;j<=1;j++)hole=max(hole,holeAt(uv+vec2(float(i),float(j))*texel));c=mix(c,texture2D(cleanPlate,uv).rgb,hole);
// Cross-fade two advected samples, avoiding jumps when the phase wraps.
float wet=smoothstep(.08,.9,texture2D(waterMatte,uv).r);float a=fract(clock*.24),b=fract(clock*.24+.5),blend=abs(a*2.0-1.0);vec2 drift=vec2(sin(p.y*90.0-clock*2.0)*.001,.016);vec3 flow=mix(texture2D(painting,uv+drift*a).rgb,texture2D(painting,uv+drift*b).rgb,blend);c=mix(c,flow,wet*.85*min(1.0,clock));gl_FragColor=vec4(c,1.0);}`;function Bp(){let i=document.getElementById("menu");if(!i)return;let e=document.createElement("canvas");e.id="menuAtmosphere",e.hidden=!0,e.setAttribute("aria-hidden","true"),i.prepend(e);let t;try{t=new mr({canvas:e,alpha:!1,antialias:!0,powerPreference:"low-power"}),t.setClearColor(1382684),t.outputColorSpace=ct,t.toneMapping=Xn}catch{e.remove();return}let n=new xi,s=new Tn(-gt/2,gt/2,kt/2,-kt/2,.1,1e3);s.position.z=500;let r=matchMedia("(prefers-reduced-motion: reduce)"),o=new ls,a={value:0},l={value:new L},c=[],u=!1,h=1,d="full";try{d=localStorage.getItem("kaw-menu-motion")||"full"}catch{}["full","reduced","still"].includes(d)||(d="full");let f=!1,x=!1,m=0,p=0,g=0,v=0,M=[],y=Ip(n,a),R=document.getElementById("keySettings")||document.getElementById("closeKeySettings")?.parentElement;if(R){let b=document.createElement("label");b.textContent="Menu background animation ";let E=document.createElement("select");E.id="menuMotion";for(let[D,U]of[["full","Full"],["reduced","Reduced"],["still","Still"]])E.add(new Option(U,D));E.value=d,E.onchange=()=>{d=E.value;try{localStorage.setItem("kaw-menu-motion",d)}catch{}v=0,w()},b.append(E),R.insertBefore(b,document.getElementById("closeKeySettings"))}Promise.all(["assets/four-faction-battle.jpg?v=2","assets/menu-battle-matte.png?v=r49","assets/menu-battle-scenery.jpg?v=r48","assets/menu-water-matte.png?v=r49","assets/menu-wing-matte.png?v=r50","assets/menu-complete-wings.png?v=r52","assets/menu-battle-foreground.png?v=r52"].map(b=>o.loadAsync(b))).then(([b,E,D,U,N,O,Y])=>{for(let Q of[b,E,D,U,N,O,Y])Q.colorSpace=An,Q.minFilter=Q.magFilter=Ut,Q.generateMipmaps=!1;let k=document.createElement("canvas");k.width=gt,k.height=kt;let H=k.getContext("2d");H.drawImage(N.image,0,0,gt,kt),M=Up(H.getImageData(0,0,gt,kt).data,gt,kt);let oe={painting:{value:b},matte:{value:E},cleanPlate:{value:D},waterMatte:{value:U},wingMatte:{value:N},wingAtlas:{value:O},foreground:{value:Y},clock:a,firePhases:l},ae=new Ie(new wn(gt,kt),new it({uniforms:{...oe,part:{value:-1},hinge:{value:new rt},wingEnabled:{value:0}},vertexShader:Fp,fragmentShader:Q_,depthTest:!1,depthWrite:!1}));ae.renderOrder=0,n.add(ae);let fe=[["phoenixLeft",.205,.245],["phoenixRight",.207,.215],["phoenixBody",.2,.29],["dragonLeft",.765,.15],["dragonRight",.795,.15],["dragonBody",.84,.19],["flagship",.43,.14],["escorts",.62,.15],["treeHead",.925,.55],["treeArm",.91,.61],["treeFeet",.94,.94],["treeBody",.94,.91],["fire",.709,.18]],B=[[0,0,.23,.26],[.19,0,.34,.25],[0,0,.34,.68],[.56,0,.86,.17],[.8,0,1,.15],[.65,0,1,.29],[.3,0,.69,.36],[.3,.02,.69,.36],[.72,.2,1,.58],[.61,.52,.93,.83],[.65,.87,1,1],[.65,.5,1,.95],[.6,.14,.73,.35]];for(let[Q,se]of[[0,0],[1,1],[3,2],[4,3]])B[Q]=M[se].bounds;fe.forEach(([Q,se,W],K)=>{let[pe,ce,ue,De]=B[K],We=new Ue,F=[0,1,3,4].includes(K),ie={value:new rt(0,0,0,K<3?45:65)},ne=new wn((ue-pe)*gt,(De-ce)*kt,F?48:K===5?32:1,F?24:K===5?12:1);ne.translate(((pe+ue)/2-se)*gt,(W-(ce+De)/2)*kt,0);let $=ne.attributes.uv;for(let G=0;G<$.count;G++)$.setXY(G,pe+$.getX(G)*(ue-pe),1-De+$.getY(G)*(De-ce));if(F){let G={0:[.23,.26,.85,.12,0,0],1:[.16,.24,.15,.12,.5,0],3:[.24,.21,.92,.06,0,.5],4:[.22,.21,.08,.06,.5,.5]},[j,xe,Se,I,C,V]=G[K],Z=[],de=ne.attributes.position;for(let ee=0;ee<$.count;ee++){let Re=($.getX(ee)-pe)/(ue-pe),ve=($.getY(ee)-(1-De))/(De-ce);de.setXYZ(ee,(Re-Se)*j*gt,(ve-I)*xe*kt,0),Z.push(C+Re*.5,V+ve*.5)}ne.setAttribute("wingUV",new ke(Z,2))}let re=new it({uniforms:{...oe,part:{value:K},hinge:ie,wingEnabled:{value:F?1:0}},vertexShader:Fp,fragmentShader:J_,transparent:!0,depthTest:!1,depthWrite:!1,side:Mt}),me=new Ie(ne,re);me.frustumCulled=!1,me.renderOrder=Np(Q),We.position.set((se-.5)*gt,(.5-W)*kt,2+K*.01),We.add(me),n.add(We),c.push({name:Q,pivot:We,hinge:ie,isWing:F,order:me.renderOrder,bounds:B[K],x:We.position.x,y:We.position.y})}),f=!0,w()}).catch(b=>{x=!0,console.warn("Painted menu animation unavailable:",b.message),w()});function S(){return f&&!x&&!document.hidden&&!i.hidden&&getComputedStyle(i).display!=="none"&&i.dataset.page==="home"}function T(){let b=d==="reduced"?.45:1,E=v*b,D=vu(E);if(d==="reduced")for(let N of["phoenixLeft","phoenixRight","dragonLeft","dragonRight"])D[N]*=.35;a.value=E;let U=yu(E);l.value.set(U.a,U.b,U.blend);for(let N of c){let O=N.pivot;if(O.position.set(N.x,N.y,O.position.z),O.rotation.set(0,0,0),O.scale.setScalar(1),N.name==="phoenixLeft"||N.name==="phoenixRight"?N.hinge.value.set(D[N.name],Math.abs(D[N.name])*.55,0,45):N.name==="dragonLeft"||N.name==="dragonRight"?N.hinge.value.set(D[N.name],0,Math.abs(D[N.name])*.65,65):N.name==="flagship"?(O.position.x+=D.shipX*gt,O.position.y+=Math.sin(v*.45)*5,O.position.x<-gt&&(O.position.x+=Math.ceil((-gt-O.position.x)/(gt*1.6))*gt*1.6)):N.name==="escorts"?(O.position.x-=v*.021*gt,O.position.x<-gt&&(O.position.x+=Math.ceil((-gt-O.position.x)/(gt*1.6))*gt*1.6)):N.name==="treeHead"?O.rotation.z=D.treeBreath*.35:N.name==="treeArm"?O.rotation.z=D.treeArm*.2:N.name==="treeBody"&&(O.rotation.z=D.treeBreath*.3),!u&&(N.name.startsWith("dragon")||N.name==="fire")&&(O.position.y-=kt*.06),u){let Y=N.name.startsWith("dragon")||N.name==="fire",k=N.name.startsWith("phoenix"),H=N.name.startsWith("tree"),oe=H||k||Y?.35:.4,ae=Y?[.8,.18]:k?[.205,.245]:H?[.94,.7]:[.5,.14],fe=Y?[.56,.2]:k?[.445,.23]:H?[.56,.77]:[.5,.08];O.position.x=(O.position.x-(ae[0]-.5)*gt)*oe+(fe[0]-.5)*gt,O.position.y=(O.position.y-(.5-ae[1])*kt)*oe+(.5-fe[1])*kt,O.scale.setScalar(oe)}else O.position.x*=h,O.position.y*=h,O.scale.setScalar(h)}y.visible=d==="full"&&!r.matches,u?(y.scale.setScalar(.35),y.position.set((.56-.5-(.8-.5)*.35)*gt,(.5-.2-(.5-.18)*.35)*kt,0)):(y.scale.setScalar(h),y.position.set(0,-kt*.06*h,0))}function A(b){if(m=0,!S())return;let E=!r.matches&&d!=="still";if(b-p>=(d==="reduced"?66:32)||!E){let D=g?Math.min(.1,(b-g)/1e3):0;g=b,p=b,E&&(v+=D);let U=i.getBoundingClientRect(),N=Math.max(1,Math.round(U.width)),O=Math.max(1,Math.round(U.height)),Y=Math.min(2,devicePixelRatio||1,2560/N);t.getPixelRatio()!==Y&&t.setPixelRatio(Y),(e.width!==Math.round(N*Y)||e.height!==Math.round(O*Y))&&t.setSize(N,O,!1),u=N<700&&O>N;let k=N/O,H=gt/kt;h=Math.min(.95,k/H*.95),k>=H?(s.left=-gt/2,s.right=gt/2,s.top=gt/k/2,s.bottom=-s.top):(s.top=kt/2,s.bottom=-kt/2,s.left=-kt*k/2,s.right=-s.left),s.updateProjectionMatrix(),T(),t.render(n,s),e.hidden=!1,i.classList.add("painted-menu-ready")}E&&(m=requestAnimationFrame(A))}function w(){cancelAnimationFrame(m),m=0,g=0,S()?m=requestAnimationFrame(A):(e.hidden=!0,i.classList.remove("painted-menu-ready"))}new MutationObserver(w).observe(i,{attributes:!0,attributeFilter:["hidden","style","data-page"]}),document.addEventListener("visibilitychange",w),r.addEventListener("change",w),window.addEventListener("resize",w),e.addEventListener("webglcontextlost",b=>{b.preventDefault(),x=!0,w()});function _(b,E){t.render(n,s);let D=new L((b-.5)*gt,(.5-E)*kt,0).project(s),U=t.getContext(),N=new Uint8Array(4);return Math.abs(D.x)>1||Math.abs(D.y)>1?null:(U.readPixels(Math.floor((D.x+1)*.5*e.width),Math.floor((D.y+1)*.5*e.height),1,1,U.RGBA,U.UNSIGNED_BYTE,N),Array.from(N))}window.KawMenuAtmosphere={seek(b){!f||!Number.isFinite(b)||b<0||(v=b,T(),t.render(n,s))},probe:_,get active(){return S()&&!r.matches&&d!=="still"},get time(){return v},get stats(){return{loaded:f?7:0,source:"original-painting",mode:d,portrait:u,sceneFit:h,layers:c.length,wingAudit:M,drawCalls:t.info.render.calls}},sample(){return{time:v,waterPhase:v*.24,fire:yu(v),parts:c.map(b=>({name:b.name,order:b.order,bounds:b.bounds,x:b.pivot.position.x,y:b.pivot.position.y,rotation:b.isWing?[b.hinge.value.z,b.hinge.value.y,b.hinge.value.x]:b.pivot.rotation.toArray().slice(0,3)}))}}}}var _u=new Xt(1,1,1),$_=new tt(1,1,1,10),eM=new tt(1,1,1,12),tM=new Et(.14,.65,8),Mu=new Map,Oi=new L,xr=new L,zp=new Wt;function nM(i){if(!Mu.has(i)){let e=i==="horde"||i==="covenant";Mu.set(i,new Ge({color:{human:9148064,horde:5850163,covenant:5530170,alien:8036016}[i],metalness:e?.15:.75,roughness:e?.74:.32}))}return Mu.get(i)}function Oo(i,e,t,n,s,r,o,a,l){let c=new Ie(e,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=c.receiveShadow=!0,i.add(c),c}function iM(i,e,t,n){let s=(i.box.max.y-i.box.min.y)*i.factor,r=(i.box.max.x-i.box.min.x)*i.factor,o=e.type==="base",a=new Ue,l=nM(t);a.position.set(o?(n?1:-1)*r*.28:0,o?s*.66:s*.96,o?-s*.05:0),i.root.add(a),Oo(a,eM,l,0,0,0,.5,.2,.5);let c=new Ue;c.position.y=.18,a.add(c),Oo(c,_u,l,0,0,0,.7,.32,.8);let u=e.type==="bastion",h=t==="alien";if(!u&&(t==="human"||t==="covenant")){for(let f of[-1,1]){let x=Oo(c,_u,l,f*.55,0,-.35,.8,.1,.12);x.rotation.y=f*.28}Oo(c,_u,l,0,0,-.7,.12,.12,1.1)}else for(let f of u||h?[-1,1]:[0]){let x=Oo(c,$_,l,f*.2,0,-.65,.09,.95,.09);x.rotation.x=Math.PI/2}let d=new Ue;return d.position.z=-1.2,c.add(d),i.defenseAttachments??=[],i.defenseAttachments.push(a),{yaw:a,pitch:c,muzzle:d,index:n}}function sM(i,e,t){if(i.defensePivots=[],e.type==="tower"&&t==="horde")return;let n=e.type==="base"?2:1;for(let s=0;s<n;s++){let r=i.model.getObjectByName("astralDefenseYaw"+s),o=i.model.getObjectByName("astralDefensePitch"+s),a=i.model.getObjectByName("defenseMuzzle"+s);i.defensePivots.push(r&&o&&a?{yaw:r,pitch:o,muzzle:a,index:s}:iM(i,e,t,s))}for(let s of i.defensePivots){let r=new Ie(tM,new Ct({color:t==="alien"?8645375:16765294,transparent:!0,opacity:.85,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.z=-.2,r.visible=!1,r.userData.noShadow=!0,s.muzzle.add(r),s.flash=r,i.defenseAttachments??=[],i.defenseAttachments.push(r)}i.batchSources=null}function Hp(i,e,t,n){if(!e.building||e.construction||!["tower","bastion","base"].includes(e.type)||e.type==="base"&&(e.level||1)<3)return;let s=t.state.players[e.owner].faction;i.defensePivots||sM(i,e,s);let r=Math.min(.1,Math.max(0,n-(i.defenseAt??n)));i.defenseAt=n;for(let o of i.defensePivots){let a=e.defenseAim?.[o.index];if(a){o.yaw.getWorldPosition(Oi),o.yaw.parent.getWorldQuaternion(zp),xr.set(a.x*.1-Oi.x,(a.height??t.terrainHeight(a.x,a.y)+12)*.1-Oi.y,a.y*.1-Oi.z).applyQuaternion(zp.invert());let u=Math.atan2(-xr.x,-xr.z),h=Math.max(-.35,Math.min(.65,Math.atan2(xr.y,Math.hypot(xr.x,xr.z))));o.aimed||(o.yaw.rotation.y=u,o.pitch.rotation.x=h,o.aimed=!0),o.yaw.rotation.y+=Math.atan2(Math.sin(u-o.yaw.rotation.y),Math.cos(u-o.yaw.rotation.y))*Math.min(1,r*16),o.pitch.rotation.x+=(h-o.pitch.rotation.x)*Math.min(1,r*12)}let l=e.type==="base"?e.defenseShots?.[o.index]:e.shot,c=l?l.born===void 0?l.duration-l.left:n-l.born:1/0;o.flash.visible=!!l&&l.left>0&&c<l.duration&&(l.machineGun?c%.1<.045:c<.08),o.pitch.position.z=l?.left>0?Math.sin(c*35)*.05:0}}function kp(i,e=0){let t=i?.defensePivots?.[e]?.muzzle;return t?(t.getWorldPosition(Oi),{x:Oi.x/.1,y:Oi.z/.1,height:Oi.y/.1}):null}function Vp(i){for(let e of i.defenseAttachments||[])e.removeFromParent(),e.isMesh&&e.material.dispose();i.defenseAttachments=null}var mc=new Gn;for(let[i,[e,t]]of[[-.38,-.5],[.38,-.5],[.5,-.38],[.5,.38],[.38,.5],[-.38,.5],[-.5,.38],[-.5,-.38]].entries())i?mc.lineTo(e,t):mc.moveTo(e,t);mc.closePath();var Bo=new Qn(mc,{depth:.8,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:1,steps:1});Bo.center();Bo.computeBoundingBox();var pc=new L;Bo.boundingBox.getSize(pc);Bo.scale(1/pc.x,1/pc.y,1/pc.z);var rM=new Et(1,1,4),Su=new Map;function oM(i,e){let t=i+e;if(!Su.has(t)){let n={human:[10398646,13216608],horde:[6120553,10510392],covenant:[4798497,4154679],alien:[9216952,10718429]};Su.set(t,new Ge({color:n[i]?.[e>1?1:0]||10660013,metalness:i==="covenant"?.15:.72,roughness:i==="covenant"?.78:.32}))}return Su.get(t)}function aM(i,e){return Math.min(3,Math.max(0,i.type==="siege"?e.artillery||0:e[i.type+"Training"]||0,i.type==="phaseSentinel"&&e.phaseArmor||0,["ranged","sniper","air","air2","nullDisruptor"].includes(i.type)&&e.faction==="alien"&&e.laserFocus||0))}function Gp(i,e,t){if(e.building||!i.unit)return;let n=aM(e,t),s=t.faction+":"+n;if(i.researchKey===s||(i.researchKey=s,i.researchParts?.forEach(p=>p.removeFromParent()),i.researchParts=[],i.batchSources=null,!n))return;let r=i.box.max.y-i.box.min.y,o=t.faction==="alien",a=oM(t.faction,n),l=[];i.model.traverse(p=>{p.isBone&&p.children.length>=3&&l.push(p)});let c=i.model.getObjectByName("alienTorso")||l.find(p=>Math.abs(p.position.x)<1&&p.position.y>r*.25&&p.position.y<r*.65)||i.model;function u(p){let g=new Ue;return g.name="researchEquipmentRank"+n,p.add(g),i.researchParts.push(g),g}function h(p,g,v,M,y,R,S,T=!1){let A=new Ie(T?rM:Bo,a);return A.position.set(g,v,M),A.scale.set(y,R,S),A.castShadow=A.receiveShadow=!0,p.add(A),A}if(t.faction==="covenant"&&["ranged","sniper"].includes(e.type)){let p=u(i.model);for(let g=0;g<n+1;g++)h(p,(g-n/2)*r*.065,i.box.min.y+r*.28,-r*.08,r*.025,r*(.08+n*.012),r*.035,!0);return}let d=u(c),f=o?-1:1,x=c===i.model?i.box.min.y+r*.46:0;for(let p=0;p<n;p++)h(d,0,x+r*(.07-p*.05),f*r*.145,r*.25,r*.045,r*.035);if(n>=2)for(let p of[-1,1]){let g=i.model.getObjectByName("alienArm"+p)||l.find(M=>Math.sign(M.position.x)===p&&Math.abs(M.position.x)>r*.15&&M.position.y>0),v=u(g||c);h(v,g?0:p*r*.22,g?0:x+r*.12,0,r*.19,r*.055,r*.19),n===3&&h(v,0,r*.065,0,r*.025,r*.1,r*.025,!0)}let m=i.model.getObjectByName("alienRifle")||l.find(p=>p.position.y<-r*.15&&p.children.length>=4);if(m){let p=u(m);for(let g=0;g<n;g++)h(p,0,o?-3:r*.06+g*r*.035,o?-r*.25:0,r*.06,r*.025,r*.065)}}function Wp(i){i.researchParts?.forEach(e=>e.removeFromParent()),i.researchParts=null}function lM(i,e){let t=(i.hitUntil||0)-e;if(t<=0||i.building)return{pitch:0,roll:0};let n=Math.min(1,t/.3),s=Math.sin(n*Math.PI),r=Math.atan2(i.y-(i.impactFromY??i.y-1),i.x-(i.impactFromX??i.x))-(i.facing||0),o=["siege","devoured","cavalier","beetle","bogbreaker","rootColossus","phaseSentinel"].includes(i.type),a=o?.045:.09;return{pitch:Math.cos(r)*s*a,roll:Math.sin(r)*s*a}}function Xp(i,e,t,n){if(!e.building){if(["cov-wasp","cov-wasp-venom","cov-centipede"].includes(i.name)){i.flightLegs||(i.flightLegs=[],i.model.traverse(o=>{o.isBone&&o.position.y<0&&Math.abs(o.position.x)>5&&(o.userData.flightRestX=o.rotation.x,i.flightLegs.push(o))}));let r=e.walkUntil>n;i.legTuck=(i.legTuck||0)+((r?-.28:0)-(i.legTuck||0))*.18;for(let o of i.flightLegs)o.rotation.x=o.userData.flightRestX+i.legTuck}let s=lM(e,n);if(globalThis.KawHUD?.settings.reduced||(i.root.rotation.x+=s.pitch,i.root.rotation.z+=s.roll),t.isFlying(e)){let r=Math.min(.1,Math.max(.001,n-(i.bankAt??n))),o=i.root.rotation.y,a=i.bankYaw===void 0?0:Math.atan2(Math.sin(o-i.bankYaw),Math.cos(o-i.bankYaw));i.bankYaw=o,i.bankAt=n,i.bank=(i.bank||0)+(Math.max(-.24,Math.min(.24,-a/r*.06))-(i.bank||0))*Math.min(1,r*6),i.root.rotation.z+=globalThis.KawHUD?.settings.reduced?0:i.bank}}}function bu(i){let e=i.name||"";return i.userData?.previewFloor||i.emissive&&i.emissive.r+i.emissive.g+i.emissive.b>.2||i.transparent&&i.opacity<.9||/leaf|water|cascade|flame|glow|roof/i.test(e)?0:/bark|wood|timber/i.test(e)?2:/stone|masonry|rock/i.test(e)?3:(i.metalness||0)>.4?1:i.userData?.structure?3:4}function qp(i,e){if(!e)return;i.vertexShader=`varying vec3 detailPosition; varying float detailDamage;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
detailPosition=position;
#ifdef USE_INSTANCING_COLOR
detailDamage=clamp((1.0-instanceColor.r)/.45,0.0,1.0);
#else
detailDamage=0.0;
#endif`),i.fragmentShader=`varying vec3 detailPosition; varying float detailDamage;
`+i.fragmentShader;let t=e===2?"detailPosition.x*.9+sin(detailPosition.y*.13+detailPosition.z*.4)*.7":e===1?"detailPosition.y*5.0+sin(detailPosition.x*.7)*.15":e===3?"detailPosition.x*1.8+detailPosition.z*1.3+sin(detailPosition.y*2.4)*.6":"dot(detailPosition,vec3(2.1,3.7,1.6))";i.fragmentShader=i.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 float detailCoord=${t};
 float detailAA=1.0-smoothstep(.35,1.5,fwidth(detailCoord));
 float detailGroove=pow(.5+.5*sin(detailCoord*6.2831853),${e===2?"8.0":"4.0"})*detailAA;
 roughnessFactor=clamp(roughnessFactor+(detailGroove-.3)*${e===1?".1":".06"},.12,1.0);
 diffuseColor.rgb*=1.0-detailGroove*${e===2?".13":e===3?".085":".04"};
 if(detailDamage>.25){float fissure=1.0-smoothstep(.012,.04,abs(sin(detailPosition.y*.7+sin(detailPosition.x*.9+detailPosition.z*.45)*2.4)));float fissureMask=step(.62,fract(floor(detailPosition.x*.5)*.23+floor(detailPosition.y*.5)*.71));diffuseColor.rgb*=1.0-fissure*fissureMask*detailDamage*.7;}`),i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 vec3 detailDx=dFdx(-vViewPosition),detailDy=dFdy(-vViewPosition);
 vec3 detailR1=cross(detailDy,normal),detailR2=cross(normal,detailDx);
 float detailDet=dot(detailDx,detailR1);
 vec3 detailGradient=(dFdx(detailGroove)*detailR1+dFdy(detailGroove)*detailR2)*sign(detailDet);
 normal=normalize(normal-detailGradient*${e===2?".004":e===1?".002":".0015"}/max(abs(detailDet),.0001));`)}async function Yp(i,e,t=()=>!1){let n=i.parser;if(!n?.associations||!globalThis.crypto?.subtle)return;let s=new Set,r=new Set;i.scene.traverse(u=>{if(u.isMesh)for(let h of Array.isArray(u.material)?u.material:[u.material]){s.add(h);for(let d of Object.values(h))d?.isTexture&&r.add(d)}});let o=await Promise.all([...r].map(async u=>{let h=n.associations.get(u)?.textures,d=n.json.textures?.[h]?.source,f=n.json.images?.[d];if(f?.bufferView===void 0)return null;let x=await n.getDependency("bufferView",f.bufferView),m=await crypto.subtle.digest("SHA-256",x),p=[...new Uint8Array(m)].map(v=>v.toString(16).padStart(2,"0")).join(""),g=[u.colorSpace,u.channel,u.wrapS,u.wrapT,u.magFilter,u.minFilter,u.flipY,u.offset.toArray(),u.repeat.toArray(),u.center.toArray(),u.rotation];return{texture:u,key:p+JSON.stringify(g)}}));if(t())return;let a=new Map,l=new Set;for(let u of o){if(!u)continue;let h=e.get(u.key);h?(a.set(u.texture,h),l.add(u.texture)):e.set(u.key,u.texture)}for(let u of s)for(let[h,d]of Object.entries(u))a.has(d)&&(u[h]=a.get(d));let c=new Set([...e.values()].map(u=>u.image));for(let u of l)u.dispose(),c.has(u.image)||u.image?.close?.()}var zo={sun:2.9,fill:1.05,environment:.42,exposure:1};function jp(i){if(!i||!Number.isFinite(i.roughness))return i;let e=(t,n,s)=>Math.min(s,Math.max(n,t));return(i.opacity??1)<.85?(i.roughness=e(i.roughness,.25,.8),i):(/stone|masonry|rock|bark|wood|cloth/i.test(i.name||"")?(i.metalness=0,i.roughness=e(i.roughness,.78,.98)):i.isMeshPhysicalMaterial?i.roughness=e(i.roughness,.12,.85):(i.metalness||0)>=.4?i.roughness=e(i.roughness,.32,.62):i.roughness=e(i.roughness,.7,.96),i.emissiveIntensity!==void 0&&(i.emissiveIntensity=e(i.emissiveIntensity,0,2)),i)}var gc={blend:.12,stride:45,maxPoseDistance:50};var wu=new Ve,Ho=class i{constructor(e){e=e||{},this.zNear=e.webGL===!0?-1:0,this.vertices={near:[new L,new L,new L,new L],far:[new L,new L,new L,new L]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){let n=this.zNear,s=e.elements[11]===0;return wu.copy(e).invert(),this.vertices.near[0].set(1,1,n),this.vertices.near[1].set(1,-1,n),this.vertices.near[2].set(-1,-1,n),this.vertices.near[3].set(-1,1,n),this.vertices.near.forEach(function(r){r.applyMatrix4(wu)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(wu);let o=Math.abs(r.z);s?r.z*=Math.min(t/o,1):r.multiplyScalar(Math.min(t/o,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new i);t.length=e.length;for(let n=0;n<e.length;n++){let s=t[n];if(n===0)for(let r=0;r<4;r++)s.vertices.near[r].copy(this.vertices.near[r]);else for(let r=0;r<4;r++)s.vertices.near[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n-1]);if(n===e.length-1)for(let r=0;r<4;r++)s.vertices.far[r].copy(this.vertices.far[r]);else for(let r=0;r<4;r++)s.vertices.far[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n])}}toSpace(e,t){for(let n=0;n<4;n++)t.vertices.near[n].copy(this.vertices.near[n]).applyMatrix4(e),t.vertices.far[n].copy(this.vertices.far[n]).applyMatrix4(e)}};var Tu={lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;

		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
 	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

  		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
		vec2 cascade;
		float cascadeCenter;
		float closestEdge;
		float margin;
		float csmx;
		float csmy;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				// NOTE: Depth gets larger away from the camera.
				// cascade.x is closer, cascade.y is further
				cascade = CSM_cascades[ i ];
				cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
				closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
				margin = 0.25 * pow( closestEdge, 2.0 );
				csmx = cascade.x - margin / 2.0;
				csmy = cascade.y + margin / 2.0;
				if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

					float dist = min( linearDepth - csmx, csmy - linearDepth );
					float ratio = clamp( dist / margin, 0.0, 1.0 );

					vec3 prevColor = directLight.color;
					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
					directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

					ReflectedLight prevLight = reflectedLight;
					RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

					bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
					float blendRatio = shouldBlend ? ratio : 1.0;

					reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
					reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
					reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
					reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

				}
			#endif

		}
		#pragma unroll_loop_end
	#elif defined (USE_SHADOWMAP)

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )

				directionalLightShadow = directionalLightShadows[ i ];
				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

			#endif

		}
		#pragma unroll_loop_end

	#elif ( NUM_DIR_LIGHT_SHADOWS > 0 )
		// note: no loop here - all CSM lights are in fact one light only
		getDirectionalLightInfo( directionalLights[0], directLight );
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, directLight );

			RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+Qe.lights_pars_begin};var Kp=new Ve,Eu=new Ho({webGL:!0}),wi=new L,ko=new Tt,Au=[],Cu=[],Ru=new Ve,Zp=new Ve,cM=new L(0,1,0),xc=class{constructor(e){this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new L(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||3,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Ho({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this._createLights(),this.updateFrustums(),this._injectInclude()}_createLights(){for(let e=0;e<this.cascades;e++){let t=new hs(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}_initCascades(){let e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}_updateShadowBounds(){let e=this.frustums;for(let t=0;t<e.length;t++){let s=this.lights[t].shadow.camera,r=this.frustums[t],o=r.vertices.near,a=r.vertices.far,l=a[0],c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let u=l.distanceTo(c);if(this.fade){let h=this.camera,d=Math.max(h.far,this.maxFar),f=r.vertices.far[0].z/(d-h.near),x=.25*Math.pow(f,2)*(d-h.near);u+=x}s.left=-u/2,s.right=u/2,s.top=u/2,s.bottom=-u/2,s.updateProjectionMatrix()}}_getBreaks(){let e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":n(this.cascades,e.near,t,this.breaks);break;case"logarithmic":s(this.cascades,e.near,t,this.breaks);break;case"practical":r(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function n(o,a,l,c){for(let u=1;u<o;u++)c.push((a+(l-a)*u/o)/l);c.push(1)}function s(o,a,l,c){for(let u=1;u<o;u++)c.push(a*(l/a)**(u/o)/l);c.push(1)}function r(o,a,l,c,u){Au.length=0,Cu.length=0,s(o,a,l,Cu),n(o,a,l,Au);for(let h=1;h<o;h++)u.push(Un.lerp(Au[h-1],Cu[h-1],c));u.push(1)}}update(){let e=this.camera,t=this.frustums;Ru.lookAt(new L,this.lightDirection,cM),Zp.copy(Ru).invert();for(let n=0;n<t.length;n++){let s=this.lights[n],r=s.shadow.camera,o=(r.right-r.left)/this.shadowMapSize,a=(r.top-r.bottom)/this.shadowMapSize;Kp.multiplyMatrices(Zp,e.matrixWorld),t[n].toSpace(Kp,Eu);let l=Eu.vertices.near,c=Eu.vertices.far;ko.makeEmpty();for(let u=0;u<4;u++)ko.expandByPoint(l[u]),ko.expandByPoint(c[u]);ko.getCenter(wi),wi.z=ko.max.z+this.lightMargin,wi.x=Math.floor(wi.x/o)*o,wi.y=Math.floor(wi.y/a)*a,wi.applyMatrix4(Ru),s.position.copy(wi),s.target.position.copy(wi),s.target.position.x+=this.lightDirection.x,s.target.position.y+=this.lightDirection.y,s.target.position.z+=this.lightDirection.z}}_injectInclude(){Qe.lights_fragment_begin=Tu.lights_fragment_begin,Qe.lights_pars_begin=Tu.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");let t=[],n=this,s=this.shaders;e.onBeforeCompile=function(r){let o=Math.min(n.camera.far,n.maxFar);n._getExtendedBreaks(t),r.uniforms.CSM_cascades={value:t},r.uniforms.cameraNear={value:n.camera.near},r.uniforms.shadowFar={value:o},s.set(e,r)},s.set(e,null)}_updateUniforms(){let e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(n,s){if(n!==null){let r=n.uniforms;this._getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in s.defines?(delete s.defines.CSM_FADE,s.needsUpdate=!0):this.fade&&!("CSM_FADE"in s.defines)&&(s.defines.CSM_FADE="",s.needsUpdate=!0)},this)}_getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new le);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){let n=this.breaks[t],s=this.breaks[t-1]||0;e[t].x=s,e[t].y=n}}updateFrustums(){this._getBreaks(),this._initCascades(),this._updateShadowBounds(),this._updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){let e=this.shaders;e.forEach(function(t,n){delete n.onBeforeCompile,delete n.defines.USE_CSM,delete n.defines.CSM_CASCADES,delete n.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),n.needsUpdate=!0}),e.clear()}};var pn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var jt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},hM=new Tn(-1,1,1,-1,0,1),Pu=class extends ot{constructor(){super(),this.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ke([0,2,0,0,2,0],2))}},uM=new Pu,rn=class{constructor(e){this._mesh=new Ie(uM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ss=class extends jt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ft.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vo=class extends jt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vc=class extends jt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var yc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ss(pn),this.copyPass.material.blending=Rt,this.clock=new To}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vo!==void 0&&(o instanceof Vo?n=!0:o instanceof vc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _c=class extends jt{constructor(e,t,n,s={type:bt}){super(),this.scene=e,this.camera=t,this.needsSwap=!1,this.target=new pt(1,1,{...s,depthBuffer:!0}),this.target.samples=n,this.uniforms=Ft.clone(pn.uniforms),this.uniforms.tDiffuse.value=this.target.texture,this.material=new it({uniforms:this.uniforms,vertexShader:pn.vertexShader,fragmentShader:pn.fragmentShader,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.quad=new rn(this.material)}setSize(e,t){this.target.setSize(e,t)}render(e,t,n){let s=e.autoClear;try{e.autoClear=!1,e.setRenderTarget(this.target),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:n),this.quad.render(e)}finally{e.autoClear=s}}dispose(){this.target.dispose(),this.material.dispose(),this.quad.dispose()}};var Go={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Wo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Mc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Jp(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=dM(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Mn(s,e,e);return r.wrapS=Nt,r.wrapT=Nt,r.needsUpdate=!0,r}function dM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Xo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Iu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Iu(i,e,t){let n=fM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function fM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var Sc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,x=e-d,m=t-f,p,g;x>m?(p=1,g=0):(p=0,g=1);let v=x-p+u,M=m-g+u,y=x-1+2*u,R=m-1+2*u,S=l&255,T=c&255,A=this.perm[S+this.perm[T]]%12,w=this.perm[S+p+this.perm[T+g]]%12,_=this.perm[S+1+this.perm[T+1]]%12,b=.5-x*x-m*m;b<0?n=0:(b*=b,n=b*b*this._dot(this.grad3[A],x,m));let E=.5-v*v-M*M;E<0?s=0:(E*=E,s=E*E*this._dot(this.grad3[w],v,M));let D=.5-y*y-R*R;return D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[_],y,R)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,x=(u+h+d)*f,m=u-x,p=h-x,g=d-x,v=e-m,M=t-p,y=n-g,R,S,T,A,w,_;v>=M?M>=y?(R=1,S=0,T=0,A=1,w=1,_=0):v>=y?(R=1,S=0,T=0,A=1,w=0,_=1):(R=0,S=0,T=1,A=1,w=0,_=1):M<y?(R=0,S=0,T=1,A=0,w=1,_=1):v<y?(R=0,S=1,T=0,A=0,w=1,_=1):(R=0,S=1,T=0,A=1,w=1,_=0);let b=v-R+f,E=M-S+f,D=y-T+f,U=v-A+2*f,N=M-w+2*f,O=y-_+2*f,Y=v-1+3*f,k=M-1+3*f,H=y-1+3*f,oe=u&255,ae=h&255,fe=d&255,B=this.perm[oe+this.perm[ae+this.perm[fe]]]%12,Q=this.perm[oe+R+this.perm[ae+S+this.perm[fe+T]]]%12,se=this.perm[oe+A+this.perm[ae+w+this.perm[fe+_]]]%12,W=this.perm[oe+1+this.perm[ae+1+this.perm[fe+1]]]%12,K=.6-v*v-M*M-y*y;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[B],v,M,y));let pe=.6-b*b-E*E-D*D;pe<0?r=0:(pe*=pe,r=pe*pe*this._dot3(this.grad3[Q],b,E,D));let ce=.6-U*U-N*N-O*O;ce<0?o=0:(ce*=ce,o=ce*ce*this._dot3(this.grad3[se],U,N,O));let ue=.6-Y*Y-k*k-H*H;return ue<0?a=0:(ue*=ue,a=ue*ue*this._dot3(this.grad3[W],Y,k,H)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,x,m=(e+t+n+s)*l,p=Math.floor(e+m),g=Math.floor(t+m),v=Math.floor(n+m),M=Math.floor(s+m),y=(p+g+v+M)*c,R=p-y,S=g-y,T=v-y,A=M-y,w=e-R,_=t-S,b=n-T,E=s-A,D=w>_?32:0,U=w>b?16:0,N=_>b?8:0,O=w>E?4:0,Y=_>E?2:0,k=b>E?1:0,H=D+U+N+O+Y+k,oe=o[H][0]>=3?1:0,ae=o[H][1]>=3?1:0,fe=o[H][2]>=3?1:0,B=o[H][3]>=3?1:0,Q=o[H][0]>=2?1:0,se=o[H][1]>=2?1:0,W=o[H][2]>=2?1:0,K=o[H][3]>=2?1:0,pe=o[H][0]>=1?1:0,ce=o[H][1]>=1?1:0,ue=o[H][2]>=1?1:0,De=o[H][3]>=1?1:0,We=w-oe+c,F=_-ae+c,ie=b-fe+c,ne=E-B+c,$=w-Q+2*c,re=_-se+2*c,me=b-W+2*c,G=E-K+2*c,j=w-pe+3*c,xe=_-ce+3*c,Se=b-ue+3*c,I=E-De+3*c,C=w-1+4*c,V=_-1+4*c,Z=b-1+4*c,de=E-1+4*c,ee=p&255,Re=g&255,ve=v&255,Pe=M&255,Fe=a[ee+a[Re+a[ve+a[Pe]]]]%32,ye=a[ee+oe+a[Re+ae+a[ve+fe+a[Pe+B]]]]%32,Ae=a[ee+Q+a[Re+se+a[ve+W+a[Pe+K]]]]%32,je=a[ee+pe+a[Re+ce+a[ve+ue+a[Pe+De]]]]%32,He=a[ee+1+a[Re+1+a[ve+1+a[Pe+1]]]]%32,Te=.6-w*w-_*_-b*b-E*E;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[Fe],w,_,b,E));let Ze=.6-We*We-F*F-ie*ie-ne*ne;Ze<0?h=0:(Ze*=Ze,h=Ze*Ze*this._dot4(r[ye],We,F,ie,ne));let z=.6-$*$-re*re-me*me-G*G;z<0?d=0:(z*=z,d=z*z*this._dot4(r[Ae],$,re,me,G));let ge=.6-j*j-xe*xe-Se*Se-I*I;ge<0?f=0:(ge*=ge,f=ge*ge*this._dot4(r[je],j,xe,Se,I));let be=.6-C*C-V*V-Z*Z-de*de;return be<0?x=0:(be*=be,x=be*be*this._dot4(r[He],C,V,Z,de)),27*(u+h+d+f+x)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var qo=class i extends jt{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Jp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new pt(this.width,this.height,{type:bt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new it({defines:Object.assign({},Go.defines),uniforms:Ft.clone(Go.uniforms),vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader,blending:Rt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new os,this.normalMaterial.blending=Rt,this.pdMaterial=new it({defines:Object.assign({},Xo.defines),uniforms:Ft.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new it({defines:Object.assign({},Wo.defines),uniforms:Ft.clone(Wo.uniforms),vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,blending:Rt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new it({uniforms:Ft.clone(pn.uniforms),vertexShader:pn.vertexShader,fragmentShader:pn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ao,blendDst:ds,blendEquation:_n,blendSrcAlpha:Eo,blendDstAlpha:ds,blendEquationAlpha:_n}),this.blendMaterial=new it({uniforms:Ft.clone(Mc.uniforms),vertexShader:Mc.vertexShader,fragmentShader:Mc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cl,blendSrc:Ao,blendDst:ds,blendEquation:_n,blendSrcAlpha:Eo,blendDstAlpha:ds,blendEquationAlpha:_n}),this._fsQuad=new rn(null),this._originalClearColor=new we,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new vi,this.depthTexture.format=Fi,this.depthTexture.type=Ui,this.normalRenderTarget=new pt(this.width,this.height,{minFilter:yt,magFilter:yt,type:bt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Iu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Rt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Sc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Mn(s,e,e,hn,En);return r.wrapS=Nt,r.wrapT=Nt,r.needsUpdate=!0,r}};qo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Qp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var vr=class i extends jt{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pt(r,o,{type:bt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new pt(r,o,{type:bt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new pt(r,o,{type:bt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Qp;this.highPassUniforms=Ft.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ft.clone(pn.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:pn.vertexShader,fragmentShader:pn.fragmentShader,blending:Ni,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new Ct,this._fsQuad=new rn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new it({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new it({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};vr.BlurDirectionX=new le(1,0);vr.BlurDirectionY=new le(0,1);var Yo={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var bc=class extends jt{constructor(e,t,n){super(),this.scene=e,this.camera=t;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new pt(1,1,{minFilter:yt,magFilter:yt,type:bt}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new $n,this._materialDepth.depthPacking=hr,this._materialDepth.blending=Rt;let a=Ft.clone(Yo.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=t.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=t.near,a.farClip.value=t.far,this.materialBokeh=new it({defines:Object.assign({},Yo.defines),uniforms:a,vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader}),this.uniforms=a,this._fsQuad=new rn(this.materialBokeh),this._oldClearColor=new we}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var jo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var wc=class extends jt{constructor(){super(),this.uniforms=Ft.clone(jo.uniforms),this.material=new xo({name:jo.name,uniforms:this.uniforms,vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader}),this._fsQuad=new rn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ml&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new le(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Zo={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new le(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Tc={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new le(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Ec=class extends jt{constructor(){super(),this._edgesRT=new pt(1,1,{depthBuffer:!1,type:bt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new pt(1,1,{depthBuffer:!1,type:bt}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Bt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Ut,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Bt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=yt,this._searchTexture.minFilter=yt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Ft.clone(Ko.uniforms),this._materialEdges=new it({defines:Object.assign({},Ko.defines),uniforms:this._uniformsEdges,vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader}),this._uniformsWeights=Ft.clone(Zo.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new it({defines:Object.assign({},Zo.defines),uniforms:this._uniformsWeights,vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader}),this._uniformsBlend=Ft.clone(Tc.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new it({uniforms:this._uniformsBlend,vertexShader:Tc.vertexShader,fragmentShader:Tc.fragmentShader}),this._fsQuad=new rn(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var Ac=class extends xi{constructor(){super();let e=new Xt;e.deleteAttribute("uv");let t=new Ge({side:$t}),n=new Ge,s=new Si(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Jt(e,n,6),a=new ht;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ie(e,yr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ie(e,yr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ie(e,yr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Ie(e,yr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Ie(e,yr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ie(e,yr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yr(i){return new vo({color:0,emissive:16777215,emissiveIntensity:i})}function Du(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ot,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let x=0;x<f.count;++x)h.push(f.getX(x)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=$p(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let m=0;m<o[u].length;++m)f.push(o[u][m][d]);let x=$p(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function $p(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Lt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let x=0;x<t;x++){let m=u.getComponent(d,x);a.setComponent(d+h,x,m)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function em(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,M=a.length;v<M;v++){let y=a[v],R=i.attributes[y];l[y]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let S=i.morphAttributes[y];S&&(c[y]||(c[y]=[]),S.forEach((T,A)=>{let w=new T.array.constructor(T.count*T.itemSize);c[y][A]=new T.constructor(w,T.itemSize,T.normalized)}))}let f=e*.5,x=Math.log10(1/e),m=Math.pow(10,x),p=f*m;for(let v=0;v<r;v++){let M=n?n.getX(v):v,y="";for(let R=0,S=a.length;R<S;R++){let T=a[R],A=i.getAttribute(T),w=A.itemSize;for(let _=0;_<w;_++)y+=`${~~(A[h[_]](M)*m+p)},`}if(y in t)u.push(t[y]);else{for(let R=0,S=a.length;R<S;R++){let T=a[R],A=i.getAttribute(T),w=i.morphAttributes[T],_=A.itemSize,b=l[T],E=c[T];for(let D=0;D<_;D++){let U=h[D],N=d[D];if(b[N](o,A[U](M)),w)for(let O=0,Y=w.length;O<Y;O++)E[O][N](o,w[O][U](M))}}t[y]=o,u.push(o),o++}}let g=i.clone();for(let v in i.attributes){let M=l[v];if(g.setAttribute(v,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),v in c)for(let y=0;y<c[v].length;y++){let R=c[v][y];g.morphAttributes[v][y]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return g.setIndex(u),g}function Lu(i,e){if(e===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===cr||e===No){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===cr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Cc=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ed(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=bi.extractUrlBase(e);o=bi.resolveURL(c,this.path)}else o=bi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===rm){try{o[at.KHR_BINARY_GLTF]=new td(e)}catch(h){s&&s(h);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ld(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new Bu;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new nd(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new id;break;case at.KHR_MESH_QUANTIZATION:o[h]=new sd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function mM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ou=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new we(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Si(u),c.distance=h;break;case"spot":c=new bo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Bu=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let s=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ct))}return Promise.all(s)}},zu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Hu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(a,a)}return Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ct)),Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ku=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Zu=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ju=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Qu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},$u=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},ed=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let x of h){let m=new Ve,p=new L,g=new Wt,v=new L(1,1,1),M=new Jt(x.geometry,x.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,m.compose(p,g,v));for(let y in l)if(y==="_COLOR_0"){let R=l[y];M.instanceColor=new Jn(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,l[y]);ht.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},rm="glTF",Jo=12,tm={JSON:1313821514,BIN:5130562},td=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Jo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Jo,r=new DataView(e,Jo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===tm.JSON){let c=new Uint8Array(e,Jo+o,a);this.content=n.decode(c)}else if(l===tm.BIN){let c=Jo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=od[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=od[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=_r[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let x in f.attributes){let m=f.attributes[x],p=l[x];p!==void 0&&(m.normalized=p)}h(f)},a,c,Zt,d)})})}},id=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},sd=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Rc=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,x=e*c,m=x-c,p=-2*f+3*d,g=f-d,v=1-p,M=g-d+h;for(let y=0;y!==a;y++){let R=o[m+y+a],S=o[m+y+l]*u,T=o[x+y+a],A=o[x+y]*u;r[y]=v*R+M*S+p*T+g*A}return r}},gM=new Wt,rd=class extends Rc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return gM.fromArray(r).normalize().toArray(r),r}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nm={9728:yt,9729:Ut,9984:El,9985:or,9986:ms,9987:cn},im={33071:jn,33648:Vs,10497:Nt},Nu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},od={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xM={CUBICSPLINE:void 0,LINEAR:Qi,STEP:Ji},Uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),i.DefaultMaterial}function bs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _M(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MM(i){let e,t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fu(t.attributes):e=i.indices+":"+Fu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Fu(i.targets[n]);return e}function Fu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ad(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bM=new Ve,ld=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ls(this.options.manager):this.textureLoader=new wo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return bs(r,a,s),ai(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(bi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Nu[s.type],a=_r[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Lt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Nu[s.type],c=_r[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,m,p;if(f&&f!==h){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=t.cache.get(v);M||(m=new c(a,g*f,s.count*f/u),M=new js(m,f/u),t.cache.add(v,M)),p=new Ks(M,l,d%f/u,x)}else a===null?m=new c(s.count*l):m=new c(a,d,s.count*l),p=new Lt(m,l,x);if(s.sparse!==void 0){let g=Nu.SCALAR,v=_r[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,R=new v(o[1],M,s.sparse.count*g),S=new c(o[2],y,s.sparse.count*l);a!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,A=R.length;T<A;T++){let w=R[T];if(p.setX(w,S[T*l]),l>=2&&p.setY(w,S[T*l+1]),l>=3&&p.setZ(w,S[T*l+2]),l>=4&&p.setW(w,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=nm[d.magFilter]||Ut,u.minFilter=nm[d.minFilter]||cn,u.wrapS=im[d.wrapS]||Nt,u.wrapT=im[d.wrapT]||Nt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==yt&&u.minFilter!==Ut,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let p=new Bt(m);p.needsUpdate=!0,d(p)}),t.load(bi.resolveURL(h,r.path),x,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ai(h,o),h.userData.mimeType=o.mimeType||SM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new $s,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Qs,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ge}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){let h=s[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ct)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mt);let u=r.alphaMode||Uu.OPAQUE;if(u===Uu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Uu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ct){let h=r.emissiveFactor;a.emissive=new we().setRGB(h[0],h[1],h[2],Zt)}return r.emissiveTexture!==void 0&&o!==Ct&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ct)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&bs(s,h,r),h})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return sm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=MM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=sm(new ot,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?vM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,x=u.length;f<x;f++){let m=u[f],p=o[f],g,v=c[f];if(p.mode===Fn.TRIANGLES||p.mode===Fn.TRIANGLE_STRIP||p.mode===Fn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Qr(m,v):new Ie(m,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Fn.TRIANGLE_STRIP?g.geometry=Lu(g.geometry,No):p.mode===Fn.TRIANGLE_FAN&&(g.geometry=Lu(g.geometry,cr));else if(p.mode===Fn.LINES)g=new eo(m,v);else if(p.mode===Fn.LINE_STRIP)g=new ns(m,v);else if(p.mode===Fn.LINE_LOOP)g=new to(m,v);else if(p.mode===Fn.POINTS)g=new is(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&_M(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ai(g,r),p.extensions&&bs(s,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,x=h.length;f<x;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&bs(s,h[0],r),h[0];let d=new Ue;r.extensions&&bs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=h.length;f<x;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Un.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Tn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $r(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],x=s.samplers[f.sampler],m=f.target,p=m.node,g=s.parameters!==void 0?s.parameters[x.input]:x.input,v=s.parameters!==void 0?s.parameters[x.output]:x.output;m.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(x),u.push(m))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],x=h[2],m=h[3],p=h[4],g=[];for(let M=0,y=d.length;M<y;M++){let R=d[M],S=f[M],T=x[M],A=m[M],w=p[M];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let _=n._createAnimationTracks(R,S,T,A,w);if(_)for(let b=0;b<_.length;b++)g.push(_[b])}let v=new as(r,void 0,g);return ai(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bM)});for(let f=0,x=h.length;f<x;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Zs:c.length>1?u=new Ue:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ai(u,r),r.extensions&&bs(n,u,r),r.matrix!==void 0){let h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ue;n.name&&(r.name=s.createUniqueName(n.name)),ai(r,n),n.extensions&&bs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof nn||d instanceof Bt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Bi[r.path]===Bi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Bi[r.path]){case Bi.weights:c=ei;break;case Bi.rotation:c=ti;break;case Bi.translation:case Bi.scale:c=ni;break;default:switch(n.itemSize){case 1:c=ei;break;case 2:case 3:default:c=ni;break}break}let u=s.interpolation!==void 0?xM[s.interpolation]:Qi,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let x=new c(l[d]+"."+Bi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ad(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ti?rd:Rc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wM(i,e,t){let n=e.attributes,s=new Tt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let u=ad(_r[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){let m=ad(_r[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new dn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function sm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=od[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return st.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ai(i,e),wM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?yM(i,e.targets,t):i})}function cd(i,e){e&&(Object.assign(i.uniforms,e.uniforms),i.vertexShader=e.declarations+`
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+e.code))}function Mr(i,e){let t=i.onBeforeCompile,n=i.customProgramCacheKey;i.userData.vertexDeformation=e,i.onBeforeCompile=s=>{t.call(i,s),cd(s,e)},i.customProgramCacheKey=()=>n.call(i)+":"+e.key,i.needsUpdate=!0}function om(i){let e=Array.isArray(i.material)?i.material[0]:i.material;if(!e?.userData.vertexDeformation)return;let t=new $n({depthPacking:hr,side:e.side,map:e.map,alphaMap:e.alphaMap,alphaTest:e.alphaTest});Mr(t,e.userData.vertexDeformation),i.customDepthMaterial=t}function am(i,e,t){let n=()=>{let f=new pt(1,1,{type:bt,depthBuffer:!0});return f.depthTexture=new vi(1,1,ri),f.texture.generateMipmaps=!1,f},s=n(),r=n();s.texture.magFilter=s.texture.minFilter=yt;let o=new Map,a=[],l=0;function c(f,x){let m=f.uuid+":"+x;if(o.has(m)){let v=o.get(m);return v.used=l,v.material}let p=x?new $n({depthPacking:cc}):new os({normalMap:f.normalMap,normalScale:f.normalScale?.clone(),bumpMap:f.bumpMap,bumpScale:f.bumpScale});p.side=f.side,p.flatShading=!!f.userData.kawWater||!!f.flatShading,p.alphaMap=f.alphaMap,p.alphaTest=f.alphaTest,p.map=f.map,p.blending=Rt,p.toneMapped=!1,p.fog=!1;let g=f.userData.kawWater?.65:Math.max(0,Math.min(.6,(f.metalness||0)*(1-(f.roughness??1))));return p.onBeforeCompile=v=>{cd(v,f.userData.vertexDeformation),x||(v.fragmentShader=v.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>`).replace("#include <normal_fragment_begin>",`#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <normal_fragment_begin>`).replace("gl_FragColor.a = 1.0;",`gl_FragColor.a = ${g.toFixed(4)};`))},p.customProgramCacheKey=()=>`buffer:${x}:${g}:${f.userData.vertexDeformation?.key||"rigid"}`,o.set(m,{material:p,used:l}),p}function u(f=!0){if(l++,l%300===0)for(let[S,T]of o)l-T.used>300&&(T.material.dispose(),o.delete(S));let x=i.getRenderTarget(),m=e.background,p=e.overrideMaterial,g=new we;i.getClearColor(g);let v=i.getClearAlpha(),M=i.autoClear,y=i.shadowMap.autoUpdate,R=i.xr.enabled;a.length=0;try{if(e.background=null,e.overrideMaterial=null,i.xr.enabled=!1,i.autoClear=!0,i.shadowMap.autoUpdate=!1,e.traverseVisible(S=>{if(!S.isMesh)return;let T=Array.isArray(S.material)?S.material:[S.material];if(a.push([S,S.material,S.visible]),!f&&S.userData.kawGrass){S.visible=!1;return}T.some(A=>A.transparent&&!A.userData.kawWater)&&(S.visible=!1),S.material=T.map(A=>c(A,!0)),Array.isArray(a.at(-1)[1])||(S.material=S.material[0]),T.some(A=>A.userData.kawWater)&&(S.visible=!1)}),i.setRenderTarget(r),i.setClearColor(16777215,1),i.clear(),i.render(e,t),f){for(let[S,T,A]of a){let w=Array.isArray(T)?T:[T];S.visible=A&&!w.some(_=>_.transparent&&!_.userData.kawWater),S.material=Array.isArray(T)?w.map(_=>c(_,!1)):c(T,!1)}i.setRenderTarget(s),i.setClearColor(8421631,0),i.clear(),i.render(e,t)}}finally{for(let[S,T,A]of a)S.material=T,S.visible=A;e.background=m,e.overrideMaterial=p,i.setRenderTarget(x),i.setClearColor(g,v),i.autoClear=M,i.shadowMap.autoUpdate=y,i.xr.enabled=R}}function h(f,x){r.setSize(f,x),s.setSize(f,x)}function d(){r.dispose(),s.dispose();for(let f of o.values())f.material.dispose();o.clear()}return{surface:s,opaque:r,capture:u,resize:h,dispose:d}}var lm="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",cm=`vec3 viewPoint(vec2 uv,float d){vec4 p=inverseProjection*vec4(uv*2.-1.,d*2.-1.,1.);return p.xyz/p.w;}
 vec2 projectPoint(vec3 p){vec4 clip=projection*vec4(p,1.);return clip.xy/clip.w*.5+.5;}`;function hm(i,e,{steps:t=24,distance:n=18,thickness:s=.35,opacity:r=.32}={}){let o=new Ss({uniforms:{tDiffuse:{value:null},tSurface:{value:null},tDepth:{value:null},tOpaqueDepth:{value:null},inverseProjection:{value:e.projectionMatrixInverse},projection:{value:e.projectionMatrix},perspective:{value:e.isPerspectiveCamera?1:0},maxDistance:{value:n},thickness:{value:s},opacity:{value:r}},vertexShader:lm,fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse,tSurface,tDepth,tOpaqueDepth;uniform mat4 inverseProjection,projection;uniform float perspective,maxDistance,thickness,opacity;${cm}
 void main(){vec4 source=texture2D(tDiffuse,vUv),surface=texture2D(tSurface,vUv);float d=texture2D(tDepth,vUv).r;
  if(d>=.999999||surface.a<.015){gl_FragColor=source;return;}
  vec3 origin=viewPoint(vUv,d),normal=normalize(surface.rgb*2.-1.);vec3 incoming=perspective>.5?normalize(origin):vec3(0.,0.,-1.);vec3 ray=reflect(incoming,normal);
  vec3 start=origin+normal*.06;float previous=-1.;vec2 hit=vec2(-1.);float hitDistance=0.;
  for(int i=1;i<=${Math.max(8,Math.min(48,Math.round(t)))};i++){float travel=maxDistance*float(i)/float(${Math.max(8,Math.min(48,Math.round(t)))});vec3 point=start+ray*travel;vec2 uv=projectPoint(point);
   if(any(lessThan(uv,vec2(.002)))||any(greaterThan(uv,vec2(.998)))||point.z>-.1)break;
   float depth=texture2D(tOpaqueDepth,uv).r;if(depth>=.999999){previous=-1.;continue;}float difference=viewPoint(uv,depth).z-point.z;
   if(previous<0.&&difference>=0.){float lo=max(0.,travel-maxDistance/float(${Math.max(8,Math.min(48,Math.round(t)))})),hi=travel;
    for(int j=0;j<4;j++){float mid=(lo+hi)*.5;vec3 probe=start+ray*mid;vec2 puv=projectPoint(probe);float gap=viewPoint(puv,texture2D(tOpaqueDepth,puv).r).z-probe.z;if(gap>=0.)hi=mid;else lo=mid;}
    vec3 refined=start+ray*hi;vec2 refinedUV=projectPoint(refined);float finalGap=viewPoint(refinedUV,texture2D(tOpaqueDepth,refinedUV).r).z-refined.z;if(finalGap<thickness){hit=refinedUV;hitDistance=hi;break;}}previous=difference;}
  if(hit.x<0.){gl_FragColor=source;return;}float edge=smoothstep(0.,.08,min(min(hit.x,hit.y),min(1.-hit.x,1.-hit.y)));float fresnel=.04+.96*pow(1.-max(0.,dot(normal,-incoming)),5.);
  float amount=surface.a*opacity*edge*(1.-hitDistance/maxDistance)*fresnel;gl_FragColor=vec4(mix(source.rgb,texture2D(tDiffuse,hit).rgb,amount),source.a);
 }`});return o.name="Bounded screen-space reflections",o.uniforms.tSurface.value=i.surface.texture,o.uniforms.tDepth.value=i.surface.depthTexture,o.uniforms.tOpaqueDepth.value=i.opaque.depthTexture,o.uniforms.inverseProjection.value=e.projectionMatrixInverse,o.uniforms.projection.value=e.projectionMatrix,o}function um(i,e,t,{steps:n=8,density:s=.003}={}){let r=t.lights.at(-1),o=new Ss({uniforms:{tDiffuse:{value:null},tDepth:{value:null},inverseProjection:{value:e.projectionMatrixInverse},projection:{value:e.projectionMatrix},cameraWorld:{value:e.matrixWorld},density:{value:s},time:{value:0},sunDirection:{value:t.lightDirection.clone().negate()},sunColor:{value:new we(16769456)},fogColor:{value:new we(9480620)},shadowMap:{value:null},shadowMatrix:{value:r.shadow.matrix},hasShadow:{value:0}},vertexShader:lm,fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse,tDepth,shadowMap;uniform mat4 inverseProjection,projection,cameraWorld,shadowMatrix;uniform float density,time,hasShadow;uniform vec3 sunDirection,sunColor,fogColor;${cm}
 #include <packing>
 float visibility(vec3 world){if(hasShadow<.5)return 1.;vec4 p=shadowMatrix*vec4(world,1.);vec3 s=p.xyz/p.w;if(any(lessThan(s,vec3(0.)))||any(greaterThan(s,vec3(1.))))return 1.;return step(s.z-.002,unpackRGBAToDepth(texture2D(shadowMap,s.xy)));}
 void main(){vec4 source=texture2D(tDiffuse,vUv);float depth=texture2D(tDepth,vUv).r;vec3 end=viewPoint(vUv,min(depth,.9999)),begin=viewPoint(vUv,0.);float distance=min(350.,length(end-begin)),stepLength=distance/float(${Math.max(4,Math.min(16,Math.round(n)))});vec3 direction=normalize(end-begin);float transmission=1.;vec3 scatter=vec3(0.);
  float mu=dot(normalize(mat3(cameraWorld)*direction),normalize(sunDirection));float g=.45,phase=(1.-g*g)/(12.56637*pow(max(.01,1.+g*g-2.*g*mu),1.5));
  for(int i=0;i<${Math.max(4,Math.min(16,Math.round(n)))};i++){vec3 p=begin+direction*(float(i)+.5)*stepLength;vec3 world=(cameraWorld*vec4(p,1.)).xyz;float height=exp(-max(0.,world.y)*.035);float cloud=.8+.2*sin(world.x*.035+sin(world.z*.04+time*.08));float attenuation=exp(-density*height*cloud*stepLength);vec3 illumination=fogColor*.35+sunColor*visibility(world)*phase*2.5;scatter+=transmission*(1.-attenuation)*illumination;transmission*=attenuation;}
  // Cap extinction to retain readable unit edges at long RTS zoom distances.
  float hazeStrength=min(1.,.12/max(1.-transmission,.0001));
  gl_FragColor=vec4(source.rgb*mix(1.,transmission,hazeStrength)+scatter*hazeStrength,source.a);
 }`});return o.name="Height atmosphere and shadowed sun shafts",o.uniforms.tDepth.value=i.opaque.depthTexture,o.uniforms.inverseProjection.value=e.projectionMatrixInverse,o.uniforms.projection.value=e.projectionMatrix,o.uniforms.cameraWorld.value=e.matrixWorld,o.uniforms.shadowMatrix.value=r.shadow.matrix,o.update=(a,l=!0)=>{o.uniforms.time.value=a,o.uniforms.sunColor.value.copy(r.color).multiplyScalar(r.intensity*.35),o.uniforms.shadowMap.value=r.shadow.map?.texture||null,o.uniforms.hasShadow.value=l&&r.shadow.map?1:0},o}function dm(i=256){let e=new Uint8Array(i*i*4*3),t=new Uint8Array(e.length),n=new Uint8Array(e.length),s=[[78,112,45],[116,87,57],[112,115,111]],r=(c,u,h,d)=>{let f=c*h,x=u*h,m=Math.floor(f),p=Math.floor(x),g=f-m,v=x-p,M=g*g*(3-2*g),y=v*v*(3-2*v),R=(_,b)=>{_=(_%h+h)%h,b=(b%h+h)%h;let E=Math.imul(_+d*97,374761393)^Math.imul(b+d*31,668265263);return E=Math.imul(E^E>>>13,1274126177),((E^E>>>16)>>>0)/4294967295},S=R(m,p),T=R(m+1,p),A=R(m,p+1),w=R(m+1,p+1);return(S+(T-S)*M)*(1-y)+(A+(w-A)*M)*y},o=(c,u)=>{let h=(c*12%1+1)%1,d=(u*12%1+1)%1,f=.44*Math.sin(d*Math.PI),x=f-Math.abs(h-.5);return Math.max(0,Math.min(1,x*24))*(.5+.3*Math.exp(-Math.abs(h-.5)*45)+.2*Math.pow(Math.max(0,Math.cos((d-Math.abs(h-.5)*.7)*36)),10))},a=(c,u,h)=>Math.min(.99,.36+.25*r(c,u,4,h+1)+.2*r(c,u,16,h+7)+(h===0?.035:.12)*r(c,u,64,h+19)+(h===0?o(c,u)*.1:0));for(let c=0;c<3;c++)for(let u=0;u<i;u++)for(let h=0;h<i;h++){let d=((c*i+u)*i+h)*4,f=a(h/i,u/i,c),x=a((h+1)/i,u/i,c)-a((h-1)/i,u/i,c),m=a(h/i,(u+1)/i,c)-a(h/i,(u-1)/i,c),p=1/Math.hypot(x*1.2,m*1.2,1),g={x:-x*1.2*p,y:-m*1.2*p,z:p};for(let v=0;v<3;v++)e[d+v]=Math.min(255,s[c][v]*(.78+f*.4+(c===0?o(h/i,u/i)*.16:0)));e[d+3]=f*255,t[d]=(g.x*.5+.5)*255,t[d+1]=(g.y*.5+.5)*255,t[d+2]=(g.z*.5+.5)*255,t[d+3]=255,n[d]=[.48,.87,.76][c]*255,n[d+1]=0,n[d+2]=(.72+f*.28)*255,n[d+3]=255}let l=(c,u=!1)=>{let h=new es(c,i,i,3);return h.wrapS=h.wrapT=Nt,h.magFilter=Ut,h.minFilter=cn,h.generateMipmaps=!0,h.colorSpace=u?ct:An,h.needsUpdate=!0,h};return{albedoHeight:l(e,!0),normal:l(t),orm:l(n)}}function Qo(i,{grass:e=4875318,dirt:t=7956046,rock:n=7500916,layers:s=null,splatmap:r=null,tileScale:o=.18,heightBlend:a=.18,mapSize:l=400}={}){let c=s||(i.terrainLayers??=dm()),u=new Ge({color:16777215,roughness:1});i.prepareMaterial(u,{rim:0}),u.userData.ownedTextures=s?[]:Object.values(c);let h=new we(e),d=new we(5140525);h.r/=d.r,h.g/=d.g,h.b/=d.b;let f=u.onBeforeCompile;return u.onBeforeCompile=x=>{f(x),Object.assign(x.uniforms,{terrainWind:i.weather?.windTime||{value:0},terrainAlbedo:{value:c.albedoHeight},terrainNormal:{value:c.normal},terrainOrm:{value:c.orm},terrainScale:{value:o},heightBlend:{value:Math.max(.01,a)},terrainSplat:{value:r},terrainMapSize:{value:l},terrainTint:{value:h}}),x.vertexShader=`varying vec3 terrainWorldNormal;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
terrainWorldNormal=normalize(mat3(modelMatrix)*objectNormal);`),x.fragmentShader=`varying vec3 terrainWorldNormal;
   uniform highp sampler2DArray terrainAlbedo,terrainNormal,terrainOrm;
   uniform vec3 terrainTint;uniform sampler2D terrainSplat;uniform float terrainScale,heightBlend,terrainMapSize,terrainWind;
   vec4 triSample(highp sampler2DArray tex,vec3 p,vec3 n,vec3 w,float layer){
    return texture(tex,vec3(p.zy*vec2(sign(n.x),1.),layer))*w.x+
     texture(tex,vec3(p.xz*vec2(sign(n.y),1.),layer))*w.y+
     texture(tex,vec3(p.xy*vec2(-sign(n.z),1.),layer))*w.z;}
   vec3 triNormal(vec3 p,vec3 n,vec3 w,float layer){
    vec3 x=texture(terrainNormal,vec3(p.zy*vec2(sign(n.x),1.),layer)).xyz*2.-1.;
    vec3 y=texture(terrainNormal,vec3(p.xz*vec2(sign(n.y),1.),layer)).xyz*2.-1.;
    vec3 z=texture(terrainNormal,vec3(p.xy*vec2(-sign(n.z),1.),layer)).xyz*2.-1.;
    return normalize(vec3(x.z*sign(n.x),x.y,x.x*sign(n.x))*w.x+
     vec3(y.x*sign(n.y),y.z*sign(n.y),y.y)*w.y+
     vec3(-z.x*sign(n.z),z.y,z.z*sign(n.z))*w.z);}
   `+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
   vec3 tn=normalize(terrainWorldNormal),tw=pow(abs(tn),vec3(4.));tw/=max(dot(tw,vec3(1.)),.0001);
   vec3 tp=visualWorld*terrainScale;
   vec3 grassUV=tp+vec3(.018*sin(terrainWind*1.8+visualWorld.x*.29+visualWorld.z*.21),0.,.012*cos(terrainWind*1.2+visualWorld.x*.18));
   vec4 ta=triSample(terrainAlbedo,grassUV,tn,tw,0.),tb=triSample(terrainAlbedo,tp,tn,tw,1.),tc=triSample(terrainAlbedo,tp,tn,tw,2.);
   float slope=1.-abs(tn.y);float rocky=smoothstep(.18,.65,slope);
   vec3 masks=vec3((1.-rocky)*(.86+.06*sin(visualWorld.x*.04)*sin(visualWorld.z*.033)),(1.-rocky)*(.14-.06*sin(visualWorld.x*.04)*sin(visualWorld.z*.033)),rocky);
   ${r?"masks=texture2D(terrainSplat,visualWorld.xz/terrainMapSize).rgb;":""}
   // Highest (height + coverage) layer wins; transition width softens boundaries.
   vec3 priority=vec3(ta.a,tb.a,tc.a)+masks;float peak=max(priority.x,max(priority.y,priority.z));
   vec3 blend=max(priority-peak+heightBlend,vec3(0.))*masks;blend/=max(dot(blend,vec3(1.)),.0001);
   diffuseColor.rgb=ta.rgb*terrainTint*blend.x+tb.rgb*blend.y+tc.rgb*blend.z;
   vec3 terrainProperties=triSample(terrainOrm,grassUV,tn,tw,0.).rgb*blend.x+triSample(terrainOrm,tp,tn,tw,1.).rgb*blend.y+triSample(terrainOrm,tp,tn,tw,2.).rgb*blend.z;
  `),x.fragmentShader=x.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=clamp(terrainProperties.r*(1.-wetness*.55),.08,1.);`),x.fragmentShader=x.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor=terrainProperties.g;`),x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
   vec3 terrainDetail=triNormal(grassUV,tn,tw,0.)*blend.x+triNormal(tp,tn,tw,1.)*blend.y+triNormal(tp,tn,tw,2.)*blend.z;
   normal=normalize(mat3(viewMatrix)*terrainDetail);
  `),x.fragmentShader=x.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.indirectDiffuse*=terrainProperties.b;reflectedLight.indirectSpecular*=terrainProperties.b;`)},u.customProgramCacheKey=()=>`height-triplanar-pbr-v2:${!!r}`,u}var fm={low:{dpr:1,shadow:1024,cascades:2,distance:180,ao:!1,bloom:!1},balanced:{dpr:1.25,shadow:2048,cascades:3,distance:260,ao:!0,bloom:!0},high:{dpr:2,shadow:4096,cascades:4,distance:350,ao:!0,bloom:!0}};function Pc(i,{quality:e="balanced",cinematic:t=!1,cameraType:n="perspective"}={}){let s={...fm[e]||fm.balanced},r=globalThis.KawGraphicsDetail?.settings||{};r.shadows==="low"&&(s.shadow=1024,s.distance=180),r.shadows==="medium"&&(s.shadow=2048,s.distance=260),r.effects===!1&&(s.ao=!1,s.bloom=!1);let o=new mr({canvas:i,antialias:!1,powerPreference:"high-performance"}),a=Math.max(s.dpr,e==="low"?1:Math.min(2,globalThis.devicePixelRatio||1)),l=(G,j)=>Math.min(a,Math.max(1,Math.sqrt(8e6/Math.max(1,G*j))));s.dpr=l(i.clientWidth,i.clientHeight),o.setPixelRatio(s.dpr),o.outputColorSpace=ct,o.toneMapping=rr,o.toneMappingExposure=zo.exposure,o.info.autoReset=!1,o.shadowMap.enabled=r.shadows!=="off",o.shadowMap.type=ll;let c=new xi;c.matrixWorldAutoUpdate=!1,c.matrixAutoUpdate=!1,c.background=new we("#607e89"),c.fog=new Zr("#607e89",200,500);let u=new pr(o),h=new Ac,d=u.fromScene(h,.04);c.environment=d.texture,c.environmentIntensity=zo.environment,h.dispose(),u.dispose();let f=n==="orthographic"?new Tn(-50,50,40,-40,.5,600):new Gt(42,1,.5,600);f.position.set(90,100,145),f.lookAt(0,15,0),c.add(new Mo(13100031,4866867,zo.fill));let x=new xc({camera:f,parent:c,cascades:s.cascades,maxFar:s.distance,mode:"practical",shadowMapSize:Math.min(s.shadow,o.capabilities.maxTextureSize),lightDirection:new L(-1,-1,-.5).normalize(),lightIntensity:zo.sun,lightNear:1,lightFar:650,shadowBias:-2e-4});x.fade=!0;for(let G of x.lights)G.shadow.normalBias=.025,G.color.set(16772304);let m=o.getContext(),p=Math.min(e==="low"?2:4,o.capabilities.maxSamples||0),v=(o.extensions.has("EXT_color_buffer_float")?m.getInternalformatParameter(m.RENDERBUFFER,m.R11F_G11F_B10F,m.SAMPLES):[]).some(G=>G>=p)?{format:lr,type:Ro}:{type:bt},M=new pt(1,1,{...v,depthBuffer:!1}),y=new yc(o,M),R=new _c(c,f,Math.min(e==="low"?2:4,o.capabilities.maxSamples||0),v);y.addPass(R);let S=new qo(c,f,1,1),T=S.setSize.bind(S);S.setSize=(G,j)=>T(Math.max(1,Math.ceil(G/2)),Math.max(1,Math.ceil(j/2))),S.enabled=s.ao,S.blendIntensity=.65,S.updateGtaoMaterial({radius:3,distanceExponent:1.8,thickness:1}),y.addPass(S);let A=am(o,c,f),w={value:new le(1,1)},_=hm(A,f,{steps:e==="high"?32:16});_.enabled=r.reflections===!0,y.addPass(_);let b=um(A,f,x,{steps:e==="high"?12:6,density:8e-4});b.enabled=r.atmosphere===!0,y.addPass(b);let E=new vr(new le(1,1),.12,.35,1.2);E.enabled=s.bloom,y.addPass(E);let D=new bc(c,f,{focus:160,aperture:15e-6,maxblur:.006});D.enabled=t&&r.dof===!0,y.addPass(D),y.addPass(new wc);let U=new Ec;y.addPass(U);let N={windTime:{value:0},wetness:{value:0},weathering:{value:.12},rimStrength:{value:.12}},O=new Map,Y=new Set,k=[],H=new L,oe=0,ae=0,fe=!1;function B(G,{sss:j=0,rim:xe=.12}={}){if(!G?.isMeshStandardMaterial||Y.has(G))return G;Y.add(G),G.addEventListener("dispose",()=>{Y.delete(G),x.shaders.delete(G)}),G.userData.visual={sss:j,rim:xe};for(let I of[G.map,G.normalMap,G.roughnessMap])if(I){let C=Math.min(o.capabilities.getMaxAnisotropy(),e==="low"?2:8);I.anisotropy!==C&&(I.anisotropy=C,I.needsUpdate=!0)}jp(G),G.roughness=Un.clamp(G.roughness,.08,1),x.setupMaterial(G);let Se=G.onBeforeCompile;return G.onBeforeCompile=I=>{Se(I),qp(I,bu(G)),Object.assign(I.uniforms,{wetness:N.wetness,weathering:N.weathering,rimStrength:N.rimStrength,sssStrength:{value:j},assetRim:{value:xe}}),I.vertexShader=`varying vec3 visualWorld;
`+I.vertexShader,I.vertexShader=I.vertexShader.replace("#include <project_vertex>",`vec4 visualPosition=vec4(transformed,1.0);
#ifdef USE_INSTANCING
visualPosition=instanceMatrix*visualPosition;
#endif
visualWorld=(modelMatrix*visualPosition).xyz;
#include <project_vertex>`),I.fragmentShader=`varying vec3 visualWorld; uniform float wetness,weathering,rimStrength,sssStrength,assetRim;
`+I.fragmentShader,I.fragmentShader=I.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,max(.08,roughnessFactor*.45),wetness);`),I.fragmentShader=I.fragmentShader.replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
float wear=weathering*metalnessFactor*(.5+.5*sin(visualWorld.x*.37+sin(visualWorld.z*.71)));metalnessFactor*=1.-wear;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.23,.095,.035),wear*.3);diffuseColor.rgb*=1.-wetness*.12;`),I.fragmentShader=I.fragmentShader.replace("#include <opaque_fragment>",`float edge=pow(1.-max(0.,dot(normal,normalize(vViewPosition))),3.);outgoingLight+=vec3(.5,.63,.67)*edge*assetRim*rimStrength*8.;outgoingLight+=diffuseColor.rgb*sssStrength*.12*(1.-max(0.,normal.y));
#include <opaque_fragment>`)},G.customProgramCacheKey=()=>`visual-v2-${bu(G)}-${j}-${xe}-${s.cascades}`,G.needsUpdate=!0,G}function Q(G){return G.traverse(j=>{if(j.isMesh){j.castShadow=j.userData.noShadow!==!0,j.receiveShadow=j.userData.noShadow!==!0;for(let xe of Array.isArray(j.material)?j.material:[j.material])B(xe,{sss:xe.userData.kawThinSurface||j.userData.sss||0})}}),c.add(G),G}async function se(G,{attach:j=!0}={}){let xe=await new Cc().loadAsync(G);if(await Yp(xe,O,()=>fe),fe){let Se=new Set,I=new Set,C=new Set;xe.scene.traverse(V=>{if(V.geometry&&C.add(V.geometry),V.isMesh)for(let Z of Array.isArray(V.material)?V.material:[V.material])I.add(Z)});for(let V of I){for(let Z of Object.values(V))Z?.isTexture&&Se.add(Z);V.dispose()}for(let V of C)V.dispose();for(let V of Se)V.dispose(),V.image?.close?.();throw new Error("Asset loading cancelled after renderer shutdown.")}return/model-world-/.test(G)&&xe.scene.traverse(Se=>{if(Se.isMesh)for(let I of Array.isArray(Se.material)?Se.material:[Se.material])I.userData.structure=!0}),Q(xe.scene),j||xe.scene.removeFromParent(),xe}function W(G){let j=new Jr;for(let{object:xe,distance:Se}of G)j.addLevel(xe,Se);return Q(j),j}function K(G,j,xe){B(j);let Se=new Jt(G,j,xe.length);return xe.forEach((I,C)=>Se.setMatrixAt(C,I)),Se.instanceMatrix.needsUpdate=!0,Se.computeBoundingSphere(),Q(Se)}function pe(G,j,xe=8,Se=30){if(k.length>=8)return null;let I=new Si(j,xe,Se,2);return I.position.copy(G),I.castShadow=!1,c.add(I),k.push(I),I}function ce(){let G=Math.max(1,i.clientWidth),j=Math.max(1,i.clientHeight);if(G===oe&&j===ae)return;oe=G,ae=j,ue=De=We=-1/0;let xe=l(G,j);xe!==s.dpr&&(xe>s.dpr&&o.setSize(G,j,!1),s.dpr=xe,o.setPixelRatio(xe),y.setPixelRatio(xe)),o.setSize(G,j,!1),y.setSize(G,j),w.value.set(i.width,i.height),A.resize(Math.max(1,Math.round(i.width*.5)),Math.max(1,Math.round(i.height*.5))),f.aspect=G/j,f.updateProjectionMatrix(),x.updateFrustums()}let ue=-1/0,De=-1/0,We=-1/0,F=-1,ie=null,ne=new Ve,$=new Ve;function re(G=0){N.windTime.value=globalThis.KawHUD?.settings.reduced||globalThis.KawExperience?.settings.grass===!1?0:G,E.enabled=s.bloom&&window.KawHUD?.settings.reduced!==!0,o.info.reset(),ce(),o.shadowMap.enabled=r.shadows!=="off"&&globalThis.KawExperience?.settings.shadows!==!1,f.updateMatrixWorld(),x.update(),c.updateMatrixWorld();let j=!ne.equals(f.matrixWorld)||!$.equals(f.projectionMatrix)||F!==c.children.length,xe=j||G<ue||G-ue>=1/30;o.shadowMap.autoUpdate=xe,xe&&(ue=G,c.traverse(Se=>{Se.isMesh&&Se.visible&&(Se.userData.shadowAnchor?H.copy(Se.userData.shadowAnchor):H.setFromMatrixPosition(Se.matrixWorld),Se.castShadow=!Se.userData.noShadow&&H.distanceTo(f.position)<s.distance)})),ne.copy(f.matrixWorld),$.copy(f.projectionMatrix),F=c.children.length;for(let Se of k)Se.visible=Se.position.distanceTo(f.position)<s.distance;(_.enabled||b.enabled||(ie??[...Y].some(Se=>Se.userData.kawWater)))&&(_.enabled||j||G<De||G-De>=1/30)&&(A.capture(_.enabled),De=G),b.update(G,o.shadowMap.enabled),S._renderGBuffer=j||G<We||G-We>=1/30,S.enabled&&S._renderGBuffer&&(We=G),y.render()}function me(){if(fe)return;fe=!0,c.traverse(j=>{if(j.isMesh)for(let xe of Array.isArray(j.material)?j.material:[j.material])Y.add(xe)}),A.dispose(),x.remove(),x.dispose();let G=new Set(O.values());O.clear();for(let j of Y){for(let xe of Object.values(j))xe?.isTexture&&G.add(xe);for(let xe of j.userData.ownedTextures||[])G.add(xe);j.dispose()}for(let j of G)j.userData.sharedLifetime||j.dispose();c.traverse(j=>{j.geometry?.userData.lowDetail&&j.geometry.userData.lowDetail!==j.geometry&&j.geometry.userData.lowDetail.dispose(),j.geometry?.dispose(),j.customDepthMaterial?.dispose(),j.isSkinnedMesh&&j.skeleton.dispose()});for(let j of y.passes)j.dispose?.();y.dispose(),d.dispose(),o.dispose()}return{renderer:o,scene:c,camera:f,csm:x,scenePass:R,get renderBudget(){return{colorBytes:v.format===lr?4:8,sceneSamples:R.target.samples,postSamples:y.renderTarget1.samples,scenePixels:R.target.width*R.target.height,aoPixels:S.width*S.height}},get resourceStats(){return{materials:Y.size,shadowMaterials:x.shaders.size,sharedTextures:O.size}},setWaterVisible(G){ie=!!G},effects:{ao:S,reflections:_,atmosphere:b,bloom:E,dof:D,aa:U},buffers:A,resolution:w,setSun({direction:G,intensity:j,color:xe}={}){G?.lengthSq()>1e-8&&x.lightDirection.copy(G).normalize();for(let Se of x.lights)j!==void 0&&(Se.intensity=Math.max(0,j)),xe!==void 0&&Se.color.set(xe);b.uniforms.sunDirection.value.copy(x.lightDirection).negate(),xe!==void 0&&b.uniforms.sunColor.value.set(xe),x.update(),ue=-1/0},setDepthOfField({enabled:G=!1,focus:j=160,aperture:xe=15e-6,maxblur:Se=.006}={}){D.enabled=t&&G,D.uniforms.focus.value=Math.max(.5,j),D.uniforms.aperture.value=Un.clamp(xe,0,1e-4),D.uniforms.maxblur.value=Un.clamp(Se,0,.015)},weather:N,prepare:Q,prepareMaterial:B,loadAsset:se,addLOD:W,addInstances:K,emissiveLight:pe,render:re,resize:ce,dispose:me}}var hd;function TM(){if(typeof document>"u")return null;if(hd)return hd;let i=document.createElement("canvas"),e=document.createElement("canvas");i.width=i.height=e.width=e.height=512;let t=i.getContext("2d"),n=e.getContext("2d");t.fillStyle="#d8dce0",t.fillRect(0,0,512,512),n.fillStyle="#8080ff",n.fillRect(0,0,512,512);let s=7831;for(let u=0;u<1800;u++){s=s*1664525+1013904223>>>0;let h=s%512,d=(s>>>9)%512,f=4+(s>>>18)%45;t.fillStyle=u%2?"#ffffff14":"#30405216",t.fillRect(h,d,f,1)}for(let u of[8,252,504])t.fillStyle="#263442",t.fillRect(0,u,512,2),t.fillStyle="#ffffff80",t.fillRect(0,u+2,512,1),n.fillStyle="#8097ed",n.fillRect(0,u,512,2),n.fillStyle="#8069ed",n.fillRect(0,u+2,512,2);for(let u of[12,500])for(let h of[20,240,264,488])t.fillStyle="#485866",t.beginPath(),t.arc(u,h,2,0,Math.PI*2),t.fill();let r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d");o.fillStyle="#a8a8a8",o.fillRect(0,0,512,512);for(let u=0;u<4;u++)for(let h=0;h<4;h++){let d=h*128+4,f=u*128+4;t.strokeStyle="#25343d",t.lineWidth=3,t.strokeRect(d,f,120,120),t.strokeStyle="#edf8ff70",t.lineWidth=1,t.strokeRect(d+2,f+2,116,116),n.strokeStyle="#6898ed",n.lineWidth=2,n.strokeRect(d,f,120,120),o.fillStyle=(u+h)%2?"#999999":"#b6b6b6",o.fillRect(d+3,f+3,114,114);for(let x of[8,112])for(let m of[8,112])t.fillStyle="#29343a",t.fillRect(d+x-2,f+m-2,4,4),t.fillStyle="#c9d5dc",t.fillRect(d+x-1,f+m-1,2,2);for(let x=0;x<5;x++)t.fillStyle="#1f2e38aa",t.fillRect(d+30,f+85+x*4,55,2),n.fillStyle="#708ff0",n.fillRect(d+30,f+85+x*4,55,1)}let a=new Sn(i),l=new Sn(e),c=new Sn(r);a.colorSpace=ct;for(let u of[a,l,c])u.wrapS=u.wrapT=Nt,u.userData.sharedLifetime=!0;return hd={map:a,normalMap:l,roughnessMap:c}}function Ic(i){let e=new Ue,t=!i.startsWith("alien-world-"),n=i.replace(/^alien-(world-)?/,"").replace(/-(carry|logs|hammer|pick)$/,""),s=Number(n.match(/level(\d)/)?.[1]||1),r=TM(),o=r?{...r,normalScale:new le(.2,.2)}:{},a=new Ge({...o,color:3622994,metalness:.78,roughness:.38}),l=new Ge({...o,color:10597560,metalness:.85,roughness:.27}),c=new Ge({...o,color:1384240,metalness:.6,roughness:.5}),u=new Ge({color:6913688,roughness:.58}),h=new Ge({color:7661538,emissive:2669249,emissiveIntensity:1.3,metalness:.3,roughness:.25}),d=new Ge({...o,color:9018301,metalness:.35,roughness:.42});d.userData.alienTeam=!0;function f(_,b,E=0,D=0,U=0,N=e){let O=new Ie(_,b);return O.position.set(E,D,U),O.castShadow=O.receiveShadow=!0,N.add(O),O}let x=new Map,m=(_,b,E,D=1)=>{let U=new Ue;U.name="alienThruster",U.position.set(_,b,E),U.userData.size=D,U.visible=!1;for(let[N,O,Y,k]of[[.9,5.4,1465599,.32],[.55,4,4242431,.7],[.25,2.5,13826047,.9]]){let H=f(new Et(N*D,O*D,12,1,!0),new Ct({color:Y,transparent:!0,opacity:k,depthWrite:!1,side:Mt,blending:Ni}),0,0,O*D*.5,U);H.rotation.x=Math.PI/2,H.userData.noShadow=!0,H.castShadow=H.receiveShadow=!1}return e.add(U),U},p=(_,b,E,D,U,N,O=a,Y=e)=>{let k=D+":"+U+":"+N,H=x.get(k);if(!H){{let oe=Math.min(D,U,N)*.12,ae=new Gn,fe=D/2-oe,B=U/2-oe;ae.moveTo(-fe,-B),ae.lineTo(fe,-B),ae.lineTo(fe,B),ae.lineTo(-fe,B),ae.closePath(),H=new Qn(ae,{depth:N-2*oe,bevelEnabled:!0,bevelThickness:oe,bevelSize:oe,bevelSegments:1,steps:1}),H.translate(0,0,-N/2+oe)}x.set(k,H)}return f(H,O,_,b,E,Y)},g=new Qt(1,16,10),v=new Et(1,1,8),M=new Map,y=(_,b,E,D,U,N,O=a,Y=e)=>{let k=f(g,O,_,b,E,Y);return k.scale.set(D,U,N),k},R=(_,b,E,D,U,N=l,O=e)=>{let Y=f(v,N,_,b,E,O);return Y.scale.set(D,U,D),Y};function S(_,b,E,D,U=l,N=e){let O=M.get(D);O||(O=new Wn(D,.12,6,24),M.set(D,O));let Y=f(O,U,_,b,E,N);return Y.rotation.x=Math.PI/2,Y}function T(_,b,E,D,U,N,O=e){let Y=p(_,b,E,D,U,N,a,O);p(_,b+U*.51,E,D*.9,.09,N*.9,l,O);for(let k=0;k<3;k++)p(_-D*.32+k*D*.32,b+U*.56,E,.06,.04,N*.78,c,O);return Y}function A(_,b,E,D,U){let N=new Ue;N.name="astralSolarHinge",N.position.set(b,E,D),N.userData.side=U,_.add(N),p(U*2,0,0,4,.22,6,l,N);for(let O=0;O<5;O++)for(let Y=0;Y<3;Y++)p(U*(.35+Y*1.1),.14,-2.35+O*1.15,1,.08,1.04,c,N);return p(0,-.6,0,.35,1.2,.35,a,N),N}function w(_,b,E,D,U){let N=new Ue;N.name="astralDefenseYaw"+b,N.position.set(E,D,U),_.add(N);let O=f(new tt(1.5,1.8,.8,12),a,0,0,0,N);p(0,.7,0,2.5,1.1,2.4,d,N);let Y=new Ue;Y.name="astralDefensePitch"+b,Y.position.y=.8,N.add(Y);for(let H of[-1,1])p(H*.5,0,-2,.35,.35,3.8,l,Y),S(H*.5,0,-3.9,.24,c,Y).rotation.x=0;let k=new Ue;return k.name="defenseMuzzle"+b,k.position.set(0,0,-4),Y.add(k),N}if(t)if(n==="scout"){f(new tt(3.2,2.4,1.2,12),a,0,3,0),S(0,3.7,0,2.5,d),y(0,4.1,0,1.7,.8,1.7,c);let _=new Ue;_.name="alienSensor",_.position.y=5,e.add(_);let b=f(new tt(1.7,.4,.5,12),l,0,0,0,_);b.rotation.z=.4,y(0,.5,0,.45,.45,.45,h,_);for(let E of[-1,1])p(E*3.7,3,0,2,.35,1,d),p(E*4.5,4,0,.15,2,.15,l),y(E*4.5,5.1,0,.25,.25,.25,h)}else if(n==="siege"){T(0,3.2,0,6,2,8);for(let E of[-1,1])for(let D=0;D<3;D++){let U=new Ue;U.name="alienLeg"+E+"_"+D,U.userData.phase=D*Math.PI*.65+E,U.position.set(E*3,3,-2.5+D*2.5),e.add(U);let N=p(E*1.3,-.5,0,3,.7,.9,l,U);N.rotation.z=-E*.4,p(E*2.5,-1.8,0,.65,2,.8,a,U),p(E*2.5,-2.8,-.3,1.5,.4,1.8,c,U)}let _=new Ue;_.name="alienMortar",_.position.set(0,5,-1),e.add(_);let b=f(new tt(.85,1.3,6,12),l,0,2,-1,_);b.rotation.x=-.6;for(let E=0;E<3;E++){let D=S(0,1+E,-.4-E*.6,1.1,E===2?h:c,_);D.rotation.x=-.6}p(0,0,1,3,1,4,d,_);for(let E of[-1,1])y(E*2,4,2,1,1,1,h)}else if(n==="air"){let _=f(new tt(1.3,2.8,10,6),a,0,3,0);_.rotation.x=-Math.PI/2;let b=R(0,3,-6,1.3,3,a);b.rotation.x=-Math.PI/2,y(0,5.5,-1,1,.7,2,c);for(let E of[-1,1]){let D=new Gn;D.moveTo(E,-3),D.lineTo(E*8,4),D.lineTo(E*7,6),D.lineTo(E,3);let U=f(new Qn(D,{depth:.3,bevelEnabled:!1}),d,0,3,0);U.rotation.x=Math.PI/2,p(E*2,3,-5,.55,.55,4,l),y(E*3,3,4,1,1,2,c),y(E*3,3,5.8,.75,.75,.25,h);let N=p(E*3,4.7,4,.3,3,2,a);N.rotation.z=E*.25}}else if(n==="air2"){let _=f(new tt(1.8,3.5,12,8),a,0,3,0);_.rotation.x=-Math.PI/2;let b=R(0,3,-7,1.8,4,a);b.rotation.x=-Math.PI/2,T(0,6.3,1,4,.8,6),y(0,7,-2,1.4,.7,2.4,c),p(0,7.3,-2,1,.15,3,h);for(let E of[-1,1]){let D=new Gn;D.moveTo(E*1,-3),D.lineTo(E*9,3),D.lineTo(E*8,6),D.lineTo(E*2,4);let U=f(new Qn(D,{depth:.6,bevelEnabled:!0,bevelThickness:.12,bevelSize:.1,bevelSegments:1}),d,0,3,0);U.rotation.x=Math.PI/2;let N=f(new tt(1.1,1.5,6,12),l,E*5,3.2,3);N.rotation.x=-Math.PI/2,y(E*5,3.2,6,1,1,.3,h),p(E*3,3,-5,.8,.8,6,l),y(E*3,3,-8,.4,.4,.2,h);let O=p(E*2.8,5,3,.3,3,3,a);O.rotation.z=E*.3;for(let Y=0;Y<3;Y++)p(E*5,4.5,1+Y,2,.15,.2,c)}}else if(n==="naniteTender"){h.color.set(8054460),h.emissive.set(2804639),y(0,3,0,2,1.5,2.5,a),S(0,3.5,0,2,d);let _=new Ue;_.name="alienHalo",_.position.y=5,e.add(_),S(0,0,0,2,h,_);for(let b of[-1,1])p(b*2.5,3,-1,2,.4,.6,l),y(b*3,3,-1,.5,.5,.5,h),f(new tt(.6,.6,3,10),h,b*1.2,4,1),p(b*1.2,4,1,1.4,.3,1.4,l);p(0,3,-2.4,1.5,.2,.2,h),p(0,3,-2.4,.2,1.5,.2,h)}else if(n==="worker"){T(0,4,0,4,2.8,4),y(0,5,-2,1.2,1,1,c),y(0,5.2,-2.9,.8,.35,.2,h);for(let E of[-1,1])for(let D=0;D<2;D++){let U=new Ue;U.name="alienLeg"+E+"_"+D,U.userData.phase=D*Math.PI+E,U.position.set(E*2,3,-1.5+D*3),e.add(U);let N=p(E*.7,-.5,0,2,.6,.6,l,U);N.rotation.z=-E*.5,p(E*1.4,-1.8,0,.5,2,.6,a,U),p(E*1.4,-2.8,0,1,.4,1.6,c,U)}let _=new Ue;_.name="alienTool",_.position.set(2,4,-2),e.add(_),p(.5,0,-1,.5,.6,2,l,_),y(.5,0,-2,.5,.5,.5,c,_),p(.5,0,-3,.5,.5,2,d,_);let b=R(.5,0,-4,.6,2,l,_);b.rotation.x=-Math.PI/2;for(let E of[-1.5,1.5])p(E,6.3,1,.25,2.5,3,l);for(let E=0;E<3;E++)p(0,6,0+E,3,.2,.2,c);if(/carry|logs/.test(i))for(let E=0;E<3;E++){let D=f(new tt(.5,.5,3,8),/logs/.test(i)?u:l,E-1,7,1);D.rotation.x=Math.PI/2}}else{let _=n==="melee"||n==="phaseSentinel",b=n==="sniper",E=n==="hero2",D=n==="hero",U=n==="hero3",N=n==="trapper"||n==="nullDisruptor",O=n.startsWith("banner"),Y=_||D,k=f(new tt(Y?2.1:1.3,Y?1.6:1,4.2,6),a,0,6,0);k.scale.z=.7,k.name="alienTorso",p(0,6.6,-1.15,Y?3.4:1.8,2,.4,d);for(let B=0;B<3;B++)p(0,5.4+B*.65,-1.4,Y?2.5:1.5,.12,.15,l);y(0,10,0,b?1.05:1.3,b?1.45:1.8,1.1,_?l:u),y(0,10.3,-1,b?.8:1,.28,.25,h);for(let B of[-1,1]){y(B*.75,10.6,-.85,.2,.22,.22,h);let Q=R(B*.65,9,-.7,.22,1.4,l);Q.rotation.z=B*.3}let H=f(new tt(.45,.7,2.2,5),c,0,11.5,.25);if(H.rotation.x=-.3,_||D){for(let B of[-1,1]){let Q=p(B*.57,10.7,-1.05,.95,.22,.35,l);Q.rotation.z=B*.16,p(B*.82,9.3,-.85,.32,1,.35,c);for(let se=0;se<3;se++)p(B*.4,9.2+se*.22,-1.12,.22,.08,.1,a)}p(0,9,-1.05,.7,.3,.3,l)}let oe=[];for(let B of[-1,1]){let Q=new Ue;Q.position.set(B*(Y?1.2:.8),4,0),Q.name="alienLeg"+B,e.add(Q),p(0,-1,0,Y?1.1:.65,3,1,a,Q),p(0,-3,1,.65,2,.8,l,Q),p(0,-4,0,1,.5,2,c,Q);let se=new Ue;se.position.set(B*(Y?2.4:1.7),8,0),se.name="alienArm"+B,e.add(se),oe.push(se);let W=f(new tt(Y?1.35:.7,Y?1:.6,1.2,6),Y?d:l,0,0,0,se);if(W.rotation.z=B*.3,p(0,-1.5,0,.65,3,.8,a,se),y(0,-3,-.3,.55,.6,.55,u,se),_&&B===1){let K=f(new Et(.75,9.5,4),h,0,-3,-5.2,se);K.rotation.x=-Math.PI/2;for(let[pe,ce]of[[.9,.12],[1.1,.055]]){let ue=f(new Et(pe,9.8,4),new Ct({color:2387455,transparent:!0,opacity:ce,depthWrite:!1,blending:Ni}),0,-3,-5.2,se);ue.rotation.x=-Math.PI/2,ue.name="riftBladeHalo",ue.userData.noShadow=!0,ue.castShadow=ue.receiveShadow=!1}p(0,-3,-.8,1.2,.8,1,l,se)}}let ae=oe[1],fe=oe[0];if(_){let B=new Ge({color:2649855,emissive:1334015,emissiveIntensity:1.7,metalness:.5,roughness:.22});ae.traverse(Q=>{Q.isMesh&&Q.geometry.type==="ConeGeometry"&&Q.name!=="riftBladeHalo"&&(Q.material=B,Q.name="riftEnergyBlade")});for(let Q of[-1,1])for(let se=0;se<3;se++)p(Q*2.4,8.3-se*.32,-.1,1.8,.16,1.8,l),y(Q*1.5,6.9-se*.55,-1.42,.09,.09,.06,l);p(0,4.3,-1.1,2.4,.65,.25,c);for(let Q of[-1,1])p(Q*1.15,2.5,-.6,.85,.7,.3,d)}if(_){let B=f(new tt(n==="phaseSentinel"?3.3:3,n==="phaseSentinel"?3.3:3,.45,6),d,0,-2,-1,fe);B.rotation.x=Math.PI/2,B.name="alienShield",S(0,-2,-1.3,n==="phaseSentinel"?2.5:2.2,h,fe).rotation.x=0;for(let se of[-1,1]){let W=R(se*.6,12.2,.1,.35,2.6,l);W.rotation.z=se*.2,p(se*2.3,8.6,0,2,.35,2,l)}let Q=f(new Et(2.5,6,6,1,!0),c,0,5,1.4);Q.scale.z=.45}if(n==="nullDisruptor"){let B=p(0,12,1,.2,4,.2,l);y(0,14.1,1,.5,.5,.5,h)}if(n==="ranged"||b){let B=new Ue;if(B.name="alienRifle",ae.add(B),p(0,-3,-2.2,b?.65:1,.8,b?5:3.6,c,B),p(0,-3,-(b?5:3.8),.45,.45,b?3.5:1.8,l,B),y(0,-3,-(b?6.8:4.7),.3,.3,.15,h,B),p(0,-3,-1,1.15,1.3,1.3,d,B),fe.scale.y=1.4,fe.rotation.x=.45,fe.rotation.z=.7,b){p(0,-2.3,-3,.5,.5,1.8,h,B);for(let se of[-1,1]){let W=p(se*1.1,10,0,.35,2.2,2.4,c);W.rotation.z=se*.15}p(0,11.2,0,2.4,.35,2.8,c);let Q=f(new Et(2.2,6,5,1,!0),c,0,5,1.2);Q.scale.z=.4}else{for(let Q=0;Q<3;Q++)p(.6,-3,-1.2-Q*.7,.2,.5,.25,h,B);T(0,7,1.8,2,3,1)}}else if(N||E){for(let[Q,se]of oe.entries()){let W=S(0,-3,-.7,N?1.3:1.7,h,se);W.rotation.x=Math.PI/2,y(0,-3,-.8,.5,.5,.5,h,se),se.rotation.x=-.45}let B=new Ue;B.name="alienHalo",B.position.set(0,9,1),e.add(B),S(0,0,0,E?3:2.3,l,B).rotation.x=0;for(let Q=0;Q<4;Q++){let se=Q*Math.PI/2;y(Math.cos(se)*2.3,Math.sin(se)*2.3,0,.35,.35,.35,h,B)}if(N)for(let Q of[-1,1])f(new tt(.6,.6,4,10),h,Q*1.1,6.5,2),p(Q*1.1,6.5,2,1.5,.3,1.5,l);else{let Q=f(new Et(2.5,5,6,1,!0),d,0,5,0);Q.scale.z=.65;for(let se of[-1,1])R(se*1.3,12,0,.3,2.5,l)}}else if(D){let B=new Ue;B.name="alienShield",fe.add(B);let Q=f(new tt(2.2,2.2,.4,6),d,0,-2,-1,B);Q.rotation.x=Math.PI/2,S(0,-2,-1.3,1.4,h,B).rotation.x=0;let se=R(0,-3,-3,.8,6,l,ae);se.rotation.x=-Math.PI/2,p(0,-3,-.6,2,.3,.6,h,ae);for(let W of[-1,1])R(W,12.2,0,.3,2,l)}else if(U){let B=new Ue;B.position.y=11.7,B.name="alienHalo",e.add(B),S(0,0,0,2,h,B);for(let se=0;se<5;se++){let W=se*Math.PI*2/5;R(Math.cos(W)*1.8,1,Math.sin(W)*1.8,.3,2,l,B)}let Q=f(new Et(3,7,6,1,!0),c,0,5,0);Q.scale.z=.6;for(let se of[-1,1]){let W=p(se*3.3,8,1,.8,4,1,d);W.rotation.z=se*.2,y(se*3.3,10,1,.6,.6,.6,h)}p(0,-1,-.5,.3,9,.3,l,ae),y(0,3.7,-.5,.9,.9,.9,h,ae)}else O&&(p(0,1,-.5,.3,13,.3,l,ae),p(2,5,-.5,4,5,.15,d,ae),y(0,8,-.5,.6,.6,.6,h,ae),T(0,6,1.5,3,3,1))}else if(n.startsWith("base")){let _=new Ue;e.add(_),_.rotation.z=s===1?-.1:0,_.position.y=s===1?1:2,_.name="astralShipHull";let b=f(new tt(9,11,5,12),a,0,3,0,_);if(b.name="astralPrimaryHull",b.scale.set(1.25+(s-1)*.16,1+(s-1)*.16,.8+(s-1)*.4),s>=2){let E=new Gn;E.moveTo(-7,6),E.lineTo(-8,-8-(s-2)*2),E.lineTo(0,-20-(s-2)*5),E.lineTo(8,-8-(s-2)*2),E.lineTo(7,6),E.closePath();let D=new Qn(E,{depth:2.6+(s-2)*.3,bevelEnabled:!0,bevelThickness:.35,bevelSize:.4,bevelSegments:1});D.rotateX(Math.PI/2),D.translate(0,2.6+(s-2)*.3,0);let U=f(D,a,0,3,0,_);U.name="astralCommandProw";for(let N of[-1,1]){for(let O=0;O<4+s;O++)p(N*(3+O*.4),6.1,-9-O*1.6,.18,.12,1.1,l,_);p(N*2.2,5.7,-14-(s-2)*3,1,.2,5,d,_)}p(0,6.3,-9,2,.3,8,h,_)}y(0,6,-5,4,1.5,2.5,c,_),y(0,6.3,-5.5,3.4,1,2,h,_);for(let E of[-1,1])for(let D=0;D<6;D++)p(E*(9-D*.35),3,-4+D*1.6,.3,2.5,.7,c,_),y(E*(9.3-D*.35),4,-4+D*1.6,.17,.17,.17,l,_);for(let E=-4;E<=4;E++){T(E*2.6,5.7+(s-1)*.6,1,2.45,.45,8,_);for(let D of[-3,5])y(E*2.6,6.05+(s-1)*.6,D,.12,.12,.12,l,_)}for(let E of[-1,1]){let D=new Ue;D.position.set(E*10,2.5,1),D.rotation.z=s===1?E*.23:0,_.add(D),T(E*3,0,1,8,.8,8,D),p(E*3,.55,1,5,.15,3,d,D);let U=f(new tt(2,2.4,7,16),c,E*13,2.7,6,_);U.rotation.x=Math.PI/2;let N=f(new tt(1.4,1.7,.4,16),h,E*13,2.7,9.7,_);N.rotation.x=Math.PI/2;for(let O=0;O<5;O++)p(E*13,4.6,3+O,3,.1,.15,l,_)}if(s===1){for(let E=0;E<5;E++){let D=T(-12+E*5,.25,11+E%2*2,3,.2,2);D&&(D.rotation.z=.2)}R(9,6,4,1,4,c);for(let E=0;E<5;E++){let D=p(-6+E*2,6.05,2+E%2,.18,.08,4,c,_);D.rotation.y=.4+E*.2}for(let E of[-10,-7,8]){let D=p(E,3,9,.3,3,4,l);D.rotation.x=.45,D.rotation.z=E*.035}}if(s>=2){for(let U of[-1,1])A(e,U*10,8,-2,U);let E=new Ue;E.name="astralSatelliteDish",E.position.set(0,10,1),e.add(E),p(0,-1,0,.5,2,.5,l,E);let D=f(new Qt(1.8,12,6,0,Math.PI*2,0,Math.PI/2),l,0,0,0,E);D.rotation.x=-.6,p(0,1.1,-.6,.14,1.8,.14,h,E);for(let U of[-9,9])p(U,1,0,1.3,2,1.3,c),p(U,.3,0,4,.6,4,l);S(0,7,0,4,h),y(0,7.6,0,2.7,1.7,2.7,d);for(let U of[-6,6])T(U,6.6,2,3,1,5)}if(s>=3){for(let E of[-15,15])T(E,3,-6,6,2,8),p(E,5,-6,4,2,4,d),S(E,6.5,-6,1.5,h),w(e,E<0?0:1,E,7,-6);p(0,8,5,5,4,4,c),y(0,10.5,5,3,.6,3,h)}if(s>=4){let E=new Ue;E.name="astralSatelliteOrbit",E.position.y=16,e.add(E),p(9,0,0,1.8,1.2,1.5,a,E),y(9,.2,-.9,.3,.3,.3,h,E);for(let D of[-1,1])A(E,9+D,0,0,D).scale.setScalar(.35);for(let D of[-20,20])T(D,3,2,6,2,9),p(D,7,2,2,7,2,l),y(D,11,2,2,1,2,h);S(0,12,0,7,h),R(0,12.8,0,2,6,l)}}else if(["wall","gate","gate-open"].includes(n)){p(0,2,0,12,4,2,c),p(0,4,0,12,.3,2,h);for(let _ of[-5,5])p(_,3,0,1.5,6,3,l);n==="gate-open"&&(e.scale.y=.25)}else{let _=(b,E,D,U=1.3)=>{f(new tt(U,U,1.5,12),c,b,E,D),S(b,E+.8,D,U,h);for(let N=0;N<4;N++){let O=p(b,E+.9,D,U*1.6,.12,.18,l);O.rotation.y=N*Math.PI/4}};if(n==="house"){for(let b of[-2.5,2.5])y(b,2.4,0,3,2.8,3,a),S(b,3.2,0,2.7,d),y(b,3,-2.7,1,.7,.3,h);p(0,1.6,0,4,2,3,c)}else if(n==="barracks"){T(0,2.5,0,12,5,8);for(let b of[-4,4])p(b,5.4,0,3,1,9,d),R(b,6.2,2,.5,2,h);p(0,2,-4.2,4,4,.4,c);for(let b of[-2.3,2.3])p(b,2,-4.5,.3,4,.3,h);T(0,.3,-7,6,.5,6);for(let b=0;b<3;b++)p(0,.65,-5-b*1.5,5,.06,.12,l)}else if(n==="forge"){for(let E of[-4,4])T(E,2,0,3,4,10),p(E,6,0,1,8,1,l);p(0,9,0,10,1,2,d);let b=S(0,7.8,0,1.3,h);b.rotation.x=0,T(0,1,0,5,2,7);for(let E of[-2,2])_(0,3,E,1.5)}else if(n==="roost"){f(new tt(7,7.7,1.4,12),a,0,.8,0),S(0,1.6,0,6,h);for(let b of[-5,5])T(b,2.2,4,2,3,3),_(b,4,4,.8);p(0,1.8,-1,7,.2,.3,d),p(0,1.8,-1,.3,.2,7,d),p(6,4.5,-4,2,8,2,l),y(6,9,-4,1.3,.8,1.3,h)}else if(n==="altar"){f(new tt(4.5,6,2,8),c,0,1,0);for(let b=0;b<4;b++){let E=b*Math.PI/2,D=Math.cos(E)*4,U=Math.sin(E)*4;R(D,5,U,1.2,9,l),y(D,7,U,.45,.6,.45,h)}f(new po(2.5),h,0,7,0),S(0,4,0,3.4,d),S(0,9,0,2.7,l)}else if(n==="mill"){T(0,1,0,11,2,8);for(let b of[-3,0,3])T(b,3,2,2.5,3,3);p(-4,5,-2,1,8,1,l),p(0,8.5,-2,9,.7,1,d),p(3,6.5,-2,.15,4,.15,h),y(3,4.2,-2,.8,.6,.8,l)}else if(n==="armory"){for(let b of[-3,3])f(new tt(2,2,6,10),a,b,3,0),S(b,5.5,0,1.9,d),S(b,2.8,0,2,h);T(0,2,0,3,4,7);for(let b of[-1,1])for(let E=0;E<3;E++){let D=p(b*3,3+E,-3,.4,.4,3,l);D.rotation.y=b*.15}}else if(n==="foundry"){T(0,2,0,11,4,9);for(let b of[-3,3]){f(new tt(1.2,1.8,6,10),l,b,6,1),S(b,9,1,1.2,h);for(let E=0;E<3;E++)p(b,7,1,2.6,.25,.25,c).rotation.y=E*Math.PI/3}p(0,3,-4.6,4,3,.3,h)}else if(n==="depot"){let b=f(new tt(4,4,10,8,1,!1,0,Math.PI),d,0,3,0);b.rotation.z=Math.PI/2,b.rotation.y=Math.PI/2,T(0,.5,0,10,1,8);for(let E of[-3,0,3])T(E,1.8,-4,2,2,2)}else if(n==="goldmine"){f(new tt(5,6,2,10),c,0,1,0);for(let E of[-3,3])p(E,4,0,1,6,2,d);p(0,7,0,8,1,3,l);let b=R(0,3,0,1.6,5,l);b.rotation.z=Math.PI,S(0,5,0,2,h);for(let E of[-3,3])_(0,2,E,1.2)}else if(n==="tower"||n==="bastion"){let b=n==="bastion";f(new tt(b?5:2.7,b?6:3.5,3,8),c,0,1.5,0),f(new tt(b?3:1.5,b?4:2.5,b?6:10,6),a,0,b?5:7,0);let E=b?9:13;w(e,0,0,E,0).scale.setScalar(b?1.4:1),S(0,E-1,0,b?3:2,h)}else T(0,1,0,5,2,5),S(0,2.2,0,2,h)}if(t&&["air","air2","scout"].includes(n))if(n==="scout")m(0,3,3,.55);else for(let _ of[-1,1])m(_*(n==="air"?3:5),n==="air"?3:3.2,n==="air"?6:6.3,n==="air"?1:1.35);if(!t&&!["wall","gate","gate-open","trap","barricade"].includes(n)){let _=e.getObjectByName("astralPrimaryHull");if(_)for(let E=0;E<2;E++)for(let D=0;D<12;D++){let U=D*Math.PI/6,N=10-(E-.5)*2.1*.4+.22,O=p(Math.cos(U)*N,(E-.5)*2.1,Math.sin(U)*N,4.5,1.8,.35,a,_);O.rotation.y=Math.PI/2-U}let b=[];e.traverse(E=>{if(E.isMesh&&E!==_&&E.material===a){E.geometry.boundingBox||E.geometry.computeBoundingBox();let D=E.geometry.boundingBox,U=D.getSize(new L);U.x>=5&&U.y>=3&&U.z>=4&&b.push({o:E,b:D,v:U})}});for(let{o:E,b:D,v:U}of b.sort((N,O)=>O.v.x*O.v.y-N.v.x*N.v.y).slice(0,3)){let N=Math.min(5,Math.floor(U.x/2)),O=Math.min(3,Math.floor(U.y/1.5)),Y=U.x/N,k=U.y/O;for(let H=0;H<O;H++)for(let oe=0;oe<N;oe++){let ae=D.min.x+Y*(oe+.5),fe=D.min.y+k*(H+.5),B=p(ae,fe,D.min.z-.16,Y*.88,k*.82,.28,d,E);for(let Q of[-1,1])y(ae+Q*Y*.32,fe+k*.25,D.min.z-.33,.065,.065,.04,l,E)}}}if(!t){for(let[_,b]of[[a,"astral-hull-alloy"],[l,"astral-edge-alloy"],[c,"astral-recess-alloy"],[d,"astral-painted-alloy"]])_.name=b,_.userData.structure=!0;if(!["wall","gate","gate-open","trap","barricade"].includes(n)){let _=new Tt().setFromObject(e),b=_.max.x-_.min.x,E=_.max.z-_.min.z;for(let D of[-1,1]){let U=D*b*.32;T(U,.45,E*.26,Math.max(1,b*.2),.5,Math.max(1,E*.2));for(let N=0;N<5;N++)p(U-.6+N*.3,.8,E*.26,.12,.12,Math.max(1,E*.16),c);for(let N of[-E*.2,E*.2])y(U,1,N,.16,.16,.16,l),p(U,1.6,N,.12,.8,.12,h)}}}if(n.startsWith("base")&&s>=2){let _=new Ue;_.add(...e.children.slice()),_.scale.set(1.08,1,1.08),e.add(_)}return e.name=i,e.userData.alien=!0,e}function Dc(i,e,t){if(!i.name.startsWith("alien-"))return;if(e.building){i.astralMachines||(i.astralMachines=[],i.model.traverse(a=>{/^astral(SolarHinge|SatelliteDish|SatelliteOrbit)$/.test(a.name)&&i.astralMachines.push(a)}));for(let a of i.astralMachines)a.name==="astralSolarHinge"?a.rotation.z=(a.userData.side||1)*(.12+Math.sin(t*.28+(e.id||0))*.13):a.name==="astralSatelliteDish"?a.rotation.y=t*.22:a.rotation.y=t*.35;return}i.alienPivots||(i.alienPivots=[],i.model.traverse(a=>{/^alien(Wing|Tail|Leg|Arm|Tool|Sensor|Mortar|Halo|Rifle|Torso|Thruster)/.test(a.name)&&i.alienPivots.push(a)}));let n=e.walkUntil>t,s=e.action?.until>t,r=s?Math.max(0,Math.min(1,1-(e.action.until-t)/e.action.duration)):0,o=r<.22?-r/.22*.3:r<.4?-.3+(r-.22)/.18*1.3:1-(r-.4)/.6;for(let a of i.alienPivots){let l=a.name.includes("-1")?-1:1;if(a.name==="alienThruster"){a.visible=n;let c=.9+Math.sin(t*27+(e.id||0))*.08+Math.sin(t*43)*.04;a.scale.set(1,1,n?c:0)}else if(a.name.startsWith("alienWing"))a.rotation.z=l*Math.sin(t*4)*.28;else if(a.name==="alienTail")a.rotation.y=Math.sin(t*2)*.25;else if(a.name==="alienSensor")a.rotation.y=t*.8;else if(a.name==="alienHalo")a.rotation.y=t*.3;else if(a.name==="alienMortar")a.position.z=-1+(s?Math.sin(r*Math.PI)*.8:0);else if(a.name==="alienTorso")a.rotation.y=s&&["melee","phaseSentinel"].includes(e.type)?o*.22:0,a.scale.z=.7*(1+Math.sin(t*1.7+(e.id||0))*.008);else if(a.name==="alienRifle")a.position.z=s?Math.sin(r*Math.PI)*.25:0;else if(a.name==="alienTool")a.rotation.x=s?-o*.8:0;else if(a.name.startsWith("alienLeg"))a.rotation.x=n?Math.sin(t*9+(a.userData.phase??l*Math.PI*.5))*.4:0;else if(a.name.startsWith("alienArm")){let c=["ranged","sniper"].includes(e.type),u=["trapper","hero2"].includes(e.type);a.rotation.x=c?l<0?.45:0:u?-.45-(s?o*.6:0):l<0&&["melee","phaseSentinel"].includes(e.type)?-.18:s?-o*(e.type==="melee"?1.3:.65):n?Math.sin(t*9-l*Math.PI*.5)*.25:0}}}function Lc(i){let e=new Ue,t=new Ge({color:i==="alien"?7835037:8419691,metalness:.75,roughness:.32}),n=new Ge({color:6703922,roughness:.82}),s=new Ge({color:i==="horde"?9846318:3428230,roughness:.7}),r=new Ge({color:3231801,roughness:.5}),o=new Ge({color:6671847,emissive:1477561,emissiveIntensity:1.3,roughness:.2}),a=(m,p,g,v,M,y=e)=>{let R=new Ie(m,p);return R.position.set(g,v,M),R.castShadow=R.receiveShadow=!0,y.add(R),R},l=(m,p,g,v,M,y,R,S)=>a(new Xt(m,p,g),v,M,y,R,S),c=(m,p,g,v,M,y,R,S)=>{let T=a(new Qt(1,16,10),R,m,p,g,S);return T.scale.set(v,M,y),T},u=new Uint8Array(16384*4);for(let m=0;m<128;m++)for(let p=0;p<128;p++){let g=(m*128+p)*4,v=(Math.sin(p*.7+Math.sin(m*.08)*2)*.5+.5)*30+(p*17+m*31)%11;u[g]=u[g+1]=u[g+2]=205+v,u[g+3]=255}let h=new Mn(u,128,128);h.wrapS=h.wrapT=Nt,h.repeat.set(3,2),h.needsUpdate=!0,n.map=s.map=h,l(14,4,7,["human","covenant"].includes(i)?n:t,0,5,0);for(let m=0;m<7;m++)l(.22,4.4,7.3,i==="covenant"?r:n,-6+m*2,5,0);l(.6,4,6,t,-7,5,0);for(let m of[-3.6,3.6])for(let p=0;p<3;p++)l(1.8,1.2,.12,o,-3+p*3,6,m);if(i==="human"){c(0,26,0,11,15,10,s);for(let p=0;p<16;p++){let g=p*Math.PI/8,v=a(new Wn(10.3,.075,4,40),n,0,26,0);v.rotation.y=g,v.scale.y=1.45}for(let p of[-5,5])for(let g of[-3,3])l(.17,12,.17,n,p,12,g);for(let p=0;p<9;p++)l(14,.22,.25,n,0,3.2+p*.45,3.7),l(14,.22,.25,n,0,3.2+p*.45,-3.7);l(5,.6,4,t,0,10,0);let m=a(new Et(.7,4,12),o,0,12,0);m.userData.transportFlame=!0;for(let p of[-4,4])l(12,.35,.35,t,0,7,p)}else if(i==="horde"){c(0,15,0,12,6,5.5,s);for(let m=-3;m<=3;m++){let p=a(new Wn(5.45,.13,5,24),t,m*3,15,0);p.rotation.y=Math.PI/2,p.scale.y=1.08}for(let m of[-5,5])for(let p of[-3,3]){let g=l(.25,7,.25,n,m,10,p);g.rotation.z=m*.035}for(let m of[-6,6]){l(4,2,2,t,-4,7,m);let p=new Ue;p.position.set(-6.5,7,m),p.userData.transportSpin=!0,e.add(p);for(let g=0;g<3;g++){let v=l(.35,5,.45,t,0,0,0,p);v.rotation.x=g*Math.PI/3}}if(i==="horde"){for(let m=0;m<12;m++)for(let p of[-1,1])l(1.6,.25,.8,t,-10+m*1.8,18,p*4.8),c(-10+m*1.8,18.2,p*4.8,.15,.15,.15,t);for(let m of[-10,10]){let p=a(new Et(.8,6,8),t,m,18,0);p.rotation.z=-m*.08}for(let m=0;m<5;m++)a(new Et(.6,2,6),t,-7+m*3.5,21,0)}else{for(let m of[-5.8,5.8])l(10,.5,2,s,1,13,m);a(new Et(2,4,5),t,11,15,0).rotation.z=-Math.PI/2}}else if(i==="covenant"){for(let m=0;m<11;m++){let p=-10+m*2;c(p,8-Math.abs(p)*.18,0,2.2,1.3,5,n);for(let g of[-4.5,4.5]){let v=l(.45,5,.45,n,p,8,g);v.rotation.x=g*.08}}for(let m of[-1,1]){let p=new Ue;p.position.set(0,14,m*3),p.userData.transportWing=m,e.add(p);for(let g=0;g<13;g++){let v=-9+g*1.5,M=m*(5+Math.sin(g/12*Math.PI)*3),y=c(v,1,M,2.6,.22,7,r,p);y.rotation.y=m*(g-6)*.055;let R=l(.12,.28,12,n,v,1.2,M,p);R.rotation.y=y.rotation.y;for(let S=0;S<3;S++){let T=l(2,.15,.13,n,v,1.3,M+m*(S-1)*3,p);T.rotation.y=m*.45}}}for(let m of[-7,0,7]){l(.6,11,.6,n,m,12,0),c(m,18,0,2.5,4,2.5,o);for(let p=0;p<6;p++){let g=p*Math.PI/3;c(m+Math.cos(g)*2,17,Math.sin(g)*2,.7,3,.7,r)}}for(let m=0;m<18;m++){let p=m*Math.PI/9,g=Math.cos(p)*9,v=Math.sin(p)*4.5,M=l(.3,4+m%3,.3,n,g,3,v);M.rotation.z=Math.sin(p)*.3,c(g,5,v,1.5,.35,2,r)}}else{c(0,8,0,11,3,5,t),l(6,2,4,o,6,10,0);for(let m of[-1,1]){l(13,1.2,4,t,-2,7,m*6);for(let v=0;v<4;v++)l(2,.4,3,t,-7+v*3,8,m*6);let p=a(new tt(1.4,1.8,6,12),t,-6,7,m*6);p.rotation.z=Math.PI/2;let g=a(new Et(1.25,5,12),o,-11,7,m*6);g.rotation.z=Math.PI/2,g.userData.transportFlame=!0}}e.updateMatrixWorld(!0);let d=[];e.traverse(m=>{m.userData.transportWing&&d.push(m)});for(let m of d){let p=m.matrixWorld.clone().invert(),g=new Map,v=[];m.traverse(M=>{if(!M.isMesh)return;let y=g.get(M.material)||[];y.push(M.geometry.clone().applyMatrix4(M.matrixWorld).applyMatrix4(p)),g.set(M.material,y),v.push(M)});for(let M of v)M.removeFromParent(),M.geometry.dispose();for(let[M,y]of g){let R=Du(y);y.forEach(T=>T.dispose());let S=new Ie(R,M);S.castShadow=S.receiveShadow=!0,m.add(S)}}e.updateMatrixWorld(!0);let f=new Map,x=[];e.traverse(m=>{if(!m.isMesh)return;for(let g=m;g&&g!==e;g=g.parent)if(g.userData.transportSpin||g.userData.transportWing||g.userData.transportFlame)return;let p=f.get(m.material)||[];p.push(m.geometry.clone().applyMatrix4(m.matrixWorld)),f.set(m.material,p),x.push(m)});for(let m of x)m.removeFromParent(),m.geometry.dispose();for(let[m,p]of f){let g=Du(p);for(let M of p)M.dispose();let v=new Ie(g,m);v.castShadow=v.receiveShadow=!0,e.add(v)}return e.userData.transport=!0,e}function Nc(i,e,t){if(i.name.startsWith("transport-")){i.transportParts||(i.transportParts=[],i.model.traverse(n=>{(n.userData.transportSpin||n.userData.transportWing||n.userData.transportFlame)&&i.transportParts.push(n)}));for(let n of i.transportParts)n.userData.transportSpin&&(n.rotation.x=e*14),n.userData.transportWing&&(n.rotation.x=n.userData.transportWing*Math.sin(e*3)*.18),n.userData.transportFlame&&(n.matrixAutoUpdate=!0,n.scale.y=(t?1:.35)*(1+Math.sin(e*23)*.08))}}function EM(i){let e=Math.max(0,Math.min(1,i));return e<.2?e*.6:e<.38?.12+(e-.2)/.18*.5:.62+(e-.38)/.62*.38}function Uc(i,e,t,n,s,r=!1){let o=e.action?.until>t?"attack":e.walkUntil>t?"walk":"idle",a=o==="idle"&&!r&&!(e.hitUntil>t)?1/30:0;if(o===i.phase&&a&&t-(i.poseAt??-1)<a)return!1;i.poseAt=t,i.clipLookup??=new Map(i.clips.map(u=>[u.name,u]));let l=i.clipLookup.get(o);if(!l)return i.phase!==o&&(i.mixer.stopAllAction(),i.phase=o),!1;if(o!==i.phase){let u=i.action;i.action=i.mixer.clipAction(l).reset().play(),i.action.timeScale=0,u&&u!==i.action&&i.action.crossFadeFrom(u,gc.blend,!1),i.phase=o}let c=Math.min(gc.maxPoseDistance,Math.hypot(n-(i.poseX??n),s-(i.poseY??s)));return i.poseX=n,i.poseY=s,o==="walk"&&(i.gait=(i.gait||0)+c*l.duration/gc.stride),i.action.time=o==="attack"?Math.max(0,Math.min(l.duration,(e.type==="melee"||e.type==="devoured"||e.type==="cavalier"||e.type==="bogbreaker"?EM(1-(e.action.until-t)/e.action.duration):1-(e.action.until-t)/e.action.duration)*l.duration)):o==="walk"?(i.gait||0)%l.duration:(t+e.id*.07)%l.duration,i.mixer.update(Math.max(0,Math.min(.1,t-(i.blendAt??t)))),i.blendAt=t,!0}function Fc(i){i.updateMatrixWorld(!0);let e=[];i.traverse(n=>{n.isSkinnedMesh&&e.push(n)});let t=0;for(let n of e){let s=n.geometry,r=s.attributes.skinWeight,o=s.attributes.skinIndex;if(!r||!o||Array.isArray(n.material)||Object.keys(s.morphAttributes).length)continue;let a=[],l=!0;for(let h=0;h<r.count;h++){let d=-1;for(let f=0;f<4;f++){let x=r.getComponent(h,f);if(x>.001){if(d!==-1||Math.abs(x-1)>.001){l=!1;break}d=o.getComponent(h,f)}}if(!l||d<0||!n.skeleton.bones[d]){l=!1;break}a.push(d)}if(!l)continue;let c=new Map,u=s.index?.count||r.count;for(let h=0;h<u;h+=3){let d=[0,1,2].map(x=>s.index?s.index.getX(h+x):h+x),f=a[d[0]];if(d.some(x=>a[x]!==f)){l=!1;break}c.has(f)||c.set(f,[]),c.get(f).push(...d)}if(l){for(let[h,d]of c){let f=[...new Set(d)],x=new Map(f.map((v,M)=>[v,M])),m=new ot;m.setIndex(d.map(v=>x.get(v)));for(let[v,M]of Object.entries(s.attributes)){if(["skinIndex","skinWeight"].includes(v))continue;let y=new Float32Array(f.length*M.itemSize);for(let R=0;R<f.length;R++)for(let S=0;S<M.itemSize;S++)y[R*M.itemSize+S]=M.getComponent(f[R],S);m.setAttribute(v,new Lt(y,M.itemSize))}let p=n.skeleton.boneInverses[h].clone().multiply(n.bindMatrix);m.applyMatrix4(p),m.computeBoundingBox(),m.computeBoundingSphere();let g=new Ie(m,n.material);g.name=n.name+"-rigid-"+h,g.castShadow=n.castShadow,g.receiveShadow=n.receiveShadow,n.skeleton.bones[h].add(g)}if(n.children.length&&n.parent){let h=new Ue;h.name=n.name,h.position.copy(n.position),h.quaternion.copy(n.quaternion),h.scale.copy(n.scale),n.parent.add(h);for(let d of[...n.children])h.add(d)}n.removeFromParent(),t++}}return t}function pm(i){let e=document.createElement("dialog");e.id="modelGallery",e.innerHTML='<h2>Unit & building inspection</h2><p>Drag to rotate. Use the mouse wheel or zoom slider to inspect surfaces. Preview settings do not change your battle settings.</p><div class="gallery-controls"><label>Faction <select id="galleryFaction"><option value="human">Dawnward</option><option value="horde">The Dominion</option><option value="covenant">Verdant Council</option><option value="alien">Astral Remnant</option></select></label><label>Asset <select id="galleryAsset"></select></label><label>Animation <select id="galleryMotion"><option value="idle">Idle</option><option value="walk">Move</option><option value="attack">Attack</option></select></label><label>Preview quality <select id="galleryQuality"><option value="balanced">Balanced</option><option value="high">High</option><option value="low">Low</option></select></label><label>Zoom <input id="galleryZoom" type="range" min=".6" max="2.2" step=".05" value="1"></label></div><canvas aria-label="Rotatable 3D asset preview"></canvas><output id="galleryStatus" role="status"></output><button type="button" id="galleryDone">Done</button>',document.body.append(e);let t=g=>e.querySelector("#"+g),n=e.querySelector("canvas"),s=document.createElement("button");s.type="button",s.id="modelGalleryButton",s.textContent="Inspect units & buildings",document.getElementById("menu").append(s);let r,o,a=0,l=0,c=.5,u=null,h=0,d=0,f=60,x=()=>{cancelAnimationFrame(a),l++,o=null,r&&(r.dispose(),r=null)};function m(){let g=i(t("galleryFaction").value);t("galleryAsset").replaceChildren(...g.map((v,M)=>{let y=document.createElement("option");return y.value=M,y.textContent=v.label,y})),p()}async function p(){x();let g=l,v=i(t("galleryFaction").value)[+t("galleryAsset").value];if(!(!v||!e.open)){t("galleryStatus").textContent="Loading detailed asset\u2026";try{r=Pc(n,{quality:t("galleryQuality").value,cameraType:"perspective"});let M=r;M.scene.background=new we("#202a31"),M.scene.fog=null;let y,R=[];if(v.name.startsWith("transport-"))y=Lc(v.name.slice(10)),y.rotation.y=-Math.PI/2,M.prepare(y);else if(v.name.startsWith("alien-"))y=Ic(v.name),M.prepare(y);else{let D=await M.loadAsset("assets/model-"+v.name+".glb?v=20261013-bark-balanced-r27");if(g!==l)return;y=D.scene,R=D.animations,Fc(y)}if(g!==l)return;let S=new Tt().setFromObject(y),T=S.getSize(new L),A=S.getCenter(new L),w=Math.max(T.x,T.y,T.z);y.position.sub(A);let _=new Ue;M.scene.remove(y),_.add(y),M.scene.add(_);let b=new Ie(new wn(w*4,w*4),new Ge({color:3489603,roughness:.92}));b.rotation.x=-Math.PI/2,b.position.y=-T.y/2-.02,b.material.userData.previewFloor=!0,M.prepare(b),o={root:_,model:y,name:v.name,clips:R,mixer:new us(y),span:w,building:v.building},d=0,h=0,f=60;let E=D=>{if(!e.open||g!==l||!o)return;if(a=requestAnimationFrame(E),document.hidden){h=0;return}let U=h?Math.min(.05,(D-h)/1e3):0;h&&(f=f*.94+1e3/Math.max(1,D-h)*.06),h=D,d+=U;let N=t("galleryMotion").value,O={type:v.type,building:v.building,id:1,walkUntil:N==="walk"?d+1:0,action:N==="attack"?{kind:"attack",duration:1.3,until:d+(1.3-d%1.3)}:null};_.rotation.y=c+(v.name.startsWith("alien-")?Math.PI:0),O.building||(Uc(o,O,d,d*35,0,!0),Dc(o,O,d),Nc(o,d,N==="walk")),M.camera.position.set(0,w*.6,w*1.65/+t("galleryZoom").value),M.camera.lookAt(0,0,0),M.resize(),M.render(d),Math.floor(d*2)!==o.readout&&(o.readout=Math.floor(d*2),t("galleryStatus").textContent=Math.round(f)+" preview FPS \xB7 "+M.renderer.info.render.calls+" draw calls \xB7 "+M.renderer.info.render.triangles.toLocaleString()+" triangles")};a=requestAnimationFrame(E)}catch(M){g===l&&(t("galleryStatus").textContent="Preview unavailable: "+M.message,x())}}}s.onclick=()=>{document.getElementById("game").hidden&&window.KawBattlefield?.stop(),e.showModal(),m()},t("galleryFaction").onchange=m,t("galleryAsset").onchange=p,t("galleryQuality").onchange=p,t("galleryDone").onclick=()=>e.close(),e.addEventListener("close",x),n.addEventListener("pointerdown",g=>{u={id:g.pointerId,x:g.clientX},n.setPointerCapture(g.pointerId)}),n.addEventListener("pointermove",g=>{u&&(c+=(g.clientX-u.x)*.01,u.x=g.clientX)}),n.addEventListener("pointerup",()=>u=null),n.addEventListener("pointercancel",()=>u=null),n.addEventListener("wheel",g=>{g.preventDefault(),t("galleryZoom").value=Math.max(.6,Math.min(2.2,+t("galleryZoom").value-g.deltaY*.001))},{passive:!1}),window.KawModelGallery={open:()=>s.click(),get active(){return!!r}}}var AM=new Set(["world-tree","world-pine","world-mountain","world-gold","world-gold-outcrop"]);function mm(i){for(let e of i){if(e.unit||!e.root.visible||!AM.has(e.name))continue;let t=e.root;if(!e.staticTransform){e.staticTransform=new Float64Array(12),e.staticTransform.fill(NaN),t.traverse(c=>{c.updateMatrix(),c.matrixAutoUpdate=!1});let l=t.updateMatrixWorld;t.updateMatrixWorld=function(c){(c||this.matrixWorldNeedsUpdate)&&l.call(this,c)}}let n=e.staticTransform,s=t.position,r=t.rotation,o=t.scale;(n[0]!==s.x||n[1]!==s.y||n[2]!==s.z||n[3]!==r.x||n[4]!==r.y||n[5]!==r.z||n[6]!==o.x||n[7]!==o.y||n[8]!==o.z)&&(n.set([s.x,s.y,s.z,r.x,r.y,r.z,o.x,o.y,o.z]),t.updateMatrix());let a=e.model;a&&(n[9]!==a.scale.x||n[10]!==a.scale.y||n[11]!==a.scale.z)&&(n[9]=a.scale.x,n[10]=a.scale.y,n[11]=a.scale.z,a.updateMatrix(),t.matrixWorldNeedsUpdate=!0)}}function gm(i,e=[]){let t=new Set(e.flatMap(n=>n.tracks.map(s=>s.name.split(".")[0])));i.traverse(n=>{!n.isMesh||n.isSkinnedMesh||n.userData.convoyWheel||t.has(n.name)||/^alien(Torso|Wing|Tail|Sensor|Mortar|Halo|Rifle)/.test(n.name)||(n.updateMatrix(),n.matrixAutoUpdate=!1)})}function xm(i,e,t=!0){let n=0,s=120;for(let r of i||[]){let o=r.userData.grassBounds,a=!1;if(t&&o&&o.x1>=e.cam.x-s&&o.x0<=e.cam.x+e.viewport.width+s&&o.y1>=e.cam.y-s&&o.y0<=e.cam.y+e.viewport.height+s){let l=Math.max(0,Math.floor((o.x0-s)/e.CELL)),c=Math.min(e.N-1,Math.floor((o.x1+s)/e.CELL)),u=Math.max(0,Math.floor((o.y0-s)/e.CELL)),h=Math.min(e.N-1,Math.floor((o.y1+s)/e.CELL));a=r.userData.grassExplored===!0;for(let d=u;d<=h&&!a;d++)for(let f=l;f<=c;f++)if(e.state.seen[d*e.N+f]){a=!0,r.userData.grassExplored=!0;break}}r.visible=a,a&&n++}return n}function vm(i){return(i.state.rivers||[]).some(t=>{let n=1/0,s=-1/0,r=1/0,o=-1/0;for(let l of t.points)n=Math.min(n,l.x),s=Math.max(s,l.x),r=Math.min(r,l.y),o=Math.max(o,l.y);let a=t.width/2+256;return s+a>=i.cam.x&&n-a<=i.cam.x+i.viewport.width&&o+256>=i.cam.y&&r-256<=i.cam.y+i.viewport.height})}function ym(i){let e=new Ue;e.name="specialist-effects",i.scene.add(e);let t=new Ge({color:7754038,roughness:.9}),n=new Ge({color:5602620,roughness:.65}),s=new Ge({color:3882555,roughness:1}),r=new Ge({color:15241526,emissive:16280856,emissiveIntensity:.7}),o=new Ct({color:9360885,transparent:!0,opacity:.45,depthWrite:!1}),a=new Ge({color:8359308,metalness:.7,roughness:.35}),l=new Et(.45,3,7),c=new Qt(2.4,10,6),u=new Qt(.16,6,4),h=new Wn(1,.025,4,48),d=new Wn(.17,.055,5,10),f=new zt({color:3587547,roughness:.12,metalness:0,clearcoat:1,transparent:!0,opacity:.6,side:Mt,depthWrite:!1}),x=new Ct({color:15006719,transparent:!0,opacity:.8,depthWrite:!1}),m=new Ge({color:6911085,transparent:!0,opacity:.28,roughness:1,depthWrite:!1}),p=[[-3.2,0],[-2.1,.35],[-1.3,1.2],[-.65,2.4],[.05,3.3],[.95,3.65],[1.75,3.25],[2.05,2.55],[1.7,2.15],[1.25,2.4],[1.2,2.85],[.75,2.95],[.25,2.5],[.4,1.3],[1.2,.35],[2.8,0]],g=[],v=[],M=[];for(let H=0;H<=40;H++)for(let oe=0;oe<p.length;oe++){let[ae,fe]=p[oe],B=(H/40-.5)*15,Q=Math.sin(B*1.4)*.13;g.push(B,fe+Q*fe/3.65,ae);let se=new we().lerpColors(new we(479590),new we(11006446),fe/3.65);if(v.push(se.r,se.g,se.b),H<40&&oe<p.length-1){let W=H*p.length+oe;M.push(W,W+p.length,W+1,W+1,W+p.length,W+p.length+1)}}let y=new ot;y.setAttribute("position",new ke(g,3)),y.setAttribute("color",new ke(v,3)),y.setIndex(M),y.computeVertexNormals(),f.vertexColors=!0,f.color.set(16777215),f.opacity=.82;let R=new go(new nr(Array.from({length:41},(H,oe)=>new L((oe/40-.5)*15,3.65+Math.sin(oe*.5)*.15,.95+Math.sin(oe*.8)*.12))),80,.23,6,!1),S=new Qt(1,10,6),T=[],A=[],w=new rs(.65,1),_=new Ge({color:9145730,roughness:.78,flatShading:!0}),b=new Jt(w,_,160),E=new ht;b.instanceMatrix.setUsage(gs),b.frustumCulled=!1,b.castShadow=!0,e.add(b);let D=[],U=[],N=[],O=[],Y=new ht,k=(H,oe)=>{let ae=new Ie(H,oe);return ae.visible=!1,ae.castShadow=!1,ae.userData.noShadow=!0,e.add(ae),ae};return{update(H,oe){for(let B of[D,U,N,O,T,A])for(let Q of B)for(let se of Q.meshes)se.visible=!1;let ae=0;for(let B of H.state.entities){let Q=B.shot;if(B.type!=="siege"||H.state.players[B.owner]?.faction!=="horde"||!Q||Q.left<=0||!H.visible(B.x,B.y)||ae>=64)continue;let se=Math.max(0,Math.min(1,(1-Q.left/Q.duration-.18)/.82));if(se<=0)continue;let W=Q.fromX+(Q.x-Q.fromX)*se,K=Q.fromY+(Q.y-Q.fromY)*se;if(!H.inViewport(W,K,100))continue;let pe=(Q.fromHeight||18)*(1-se)+(Q.toHeight||0)*se+Math.sin(se*Math.PI)*65;E.position.set(W*.1,pe*.1,K*.1),E.rotation.set(se*8,se*5,se*4),E.scale.setScalar(1),E.updateMatrix(),b.setMatrixAt(ae++,E.matrix)}for(let B of H.state.effects){if(B.kind!=="rock"||B.age<0||B.age>=B.life||ae>=160||!H.inViewport(B.x,B.y,80)||!H.visible(B.x,B.y))continue;let Q=B.age/B.life;E.position.set(B.x*.1,H.terrainHeight(B.x,B.y)*.1+Math.sin(Q*Math.PI)*1.6,B.y*.1),E.rotation.set(Q*9,Q*5,Q*7),E.scale.setScalar((B.size||3)*.055*(1-Q*.7)),E.updateMatrix(),b.setMatrixAt(ae++,E.matrix)}b.count=ae,b.visible=ae>0,b.instanceMatrix.needsUpdate=!0;let fe=0;for(let B of H.state.rootBursts||[]){if(fe>=32||!H.inViewport(B.x,B.y,250)&&!H.inViewport(B.fromX,B.fromY,250)||!H.visible(B.x,B.y)&&!H.visible(B.fromX,B.fromY))continue;let Q=D[fe]??={meshes:Array.from({length:17},(ce,ue)=>k(l,ue<12?t:n))},se=Math.max(0,Math.min(1,(H.state.time-B.at)/(B.impactAt-B.at))),W=B.x-B.fromX,K=B.y-B.fromY;for(let ce=0;ce<12;ce++){let ue=(ce+1)/12,De=Q.meshes[ce],We=B.fromX+W*ue+Math.sin(ce*2.1)*4,F=B.fromY+K*ue,ie=ce/12,ne=B.fromX+W*ie+Math.sin((ce-1)*2.1)*4,$=B.fromY+K*ie,re=new L(ne*.1,H.terrainHeight(ne,$)*.1+.08,$*.1),me=new L(We*.1,H.terrainHeight(We,F)*.1+.08,F*.1),G=me.clone().sub(re);De.visible=ue<=se,De.position.copy(re.add(me).multiplyScalar(.5)),De.scale.set(.8,G.length()/3,.8),De.quaternion.setFromUnitVectors(new L(0,1,0),G.normalize())}let pe=Math.max(0,Math.sin(Math.min(1,Math.max(0,H.state.time-B.impactAt)/.65)*Math.PI));for(let ce=0;ce<5;ce++){let ue=Q.meshes[12+ce],De=B.x+(ce-2)*7,We=B.y+Math.sin(ce*2.4)*5;ue.visible=se>=1&&pe>.01,ue.scale.set(.9,pe*(ce===2?1.4:1),.9),ue.position.set(De*.1,H.terrainHeight(De,We)*.1+1.5*ue.scale.y,We*.1),ue.rotation.set(.15*(ce-2),0,.12*(ce-2))}fe++}fe=0;for(let B of H.state.phoenixAshes||[]){if(fe>=64||!H.inViewport(B.x,B.y,60)||B.owner!==0&&!H.visible(B.x,B.y))continue;(U[fe]??={meshes:[k(c,s),...Array.from({length:8},()=>k(u,r))]}).meshes.forEach((se,W)=>{se.visible=!0;let K=W*2.399,pe=B.x+(W?Math.cos(K)*16:0),ce=B.y+(W?Math.sin(K)*8:0);se.position.set(pe*.1,H.terrainHeight(pe,ce)*.1+(W?.09:.08),ce*.1),se.scale.set(1,W?.5:.07,W?1:.55)}),fe++}fe=0;for(let B of H.state.entities)if(!(fe>=24||!H.inViewport(B.x,B.y,180)||B.owner!==0&&!H.visible(B.x,B.y))&&(B.aegisUntil>H.state.time||B.rooted&&B.type==="rootColossus")){let Q=N[fe]??={meshes:[k(h,o)]},se=Q.meshes[0],W=B.aegisUntil>H.state.time?14:3;se.visible=!0,se.rotation.x=Math.PI/2,se.scale.setScalar(W),se.position.set(B.x*.1,H.terrainHeight(B.x,B.y)*.1+.15,B.y*.1),fe++}fe=0;for(let B of H.state.tidalWaves||[]){let Q=H.state.time-B.at,se=Math.min(1,Q/B.duration),W=B.x+Math.cos(B.angle)*se*360,K=B.y+Math.sin(B.angle)*se*360;if(fe>=24||!H.inViewport(W,K,120)||!H.visible(W,K))continue;let pe=T[fe]??={meshes:[k(y,f),k(R,x),...Array.from({length:24},()=>k(u,x))]},ce=pe.meshes[0],ue=pe.meshes[1],De=Math.max(.12,Math.min(1,Q/.16)*(1-Math.max(0,(se-.82)/.18)*.8)),We=Math.PI/2-B.angle;ce.visible=ue.visible=!0,ce.position.set(W*.1,H.terrainHeight(W,K)*.1+.08,K*.1),ce.rotation.set(0,We,0),ce.scale.set(1,De,1),ue.position.copy(ce.position),ue.rotation.copy(ce.rotation),ue.scale.copy(ce.scale);for(let F=0;F<24;F++){let ie=pe.meshes[F+2],ne=(F/23-.5)*15,$=(Q*2.3+F*.618)%1,re=1+$*2.1,me=3.65*De+Math.sin($*Math.PI)*1.1-$*2.4;ie.visible=!0,ie.position.set(ce.position.x-Math.sin(B.angle)*ne+Math.cos(B.angle)*re,ce.position.y+Math.max(.1,me),ce.position.z+Math.cos(B.angle)*ne+Math.sin(B.angle)*re),ie.scale.set(1.1,1.6*(1-$)+.4,1.1)}fe++}fe=0;for(let B of H.state.smoke||[]){if(fe>=24||B.expires<=H.state.time||!H.inViewport(B.x,B.y,B.radius)||!H.visible(B.x,B.y))continue;let Q=A[fe]??={meshes:Array.from({length:4},()=>k(S,m))};for(let se=0;se<4;se++){let W=Q.meshes[se],K=se*2.399+H.state.time*.15,pe=B.radius*.065;W.visible=!0,W.position.set(B.x*.1+Math.cos(K)*pe*.55,H.terrainHeight(B.x,B.y)*.1+1.5+Math.sin(K)*.5,B.y*.1+Math.sin(K)*pe*.5),W.scale.set(pe,2.1,pe*.8)}fe++}fe=0;for(let B of H.state.entities){if(fe>=12||!B.chainCast||B.chainCast.until<=H.state.time||!H.visible(B.x,B.y))continue;let Q=H.state.entities.find(ie=>ie.id===B.chainCast.targetId);if(!Q||!H.visible(Q.x,Q.y))continue;let se=O[fe]??=(()=>{let ie=new Jt(d,a,48);return ie.frustumCulled=!1,ie.castShadow=!1,ie.instanceMatrix.setUsage(gs),e.add(ie),{meshes:[ie]}})(),W=se.meshes[0],K=new L(B.x*.1,H.terrainHeight(B.x,B.y)*.1+2,B.y*.1),pe=new L(Q.x*.1,H.terrainHeight(Q.x,Q.y)*.1+1.5,Q.y*.1),ce=oe?.get("e"+B.id)?.model.getObjectByName("armR");ce&&(ce.updateWorldMatrix(!0,!1),K.set(2,-12,3).applyMatrix4(ce.matrixWorld));let ue=pe.clone().sub(K),De=ue.length(),We=Math.min(48,Math.max(4,Math.ceil(De/.3))),F=new Wt().setFromUnitVectors(new L(0,1,0),ue.clone().normalize());W.visible=!0,W.count=We;for(let ie=0;ie<We;ie++){let ne=Y,$=ie/(We-1),re=Math.sin($*Math.PI)*Math.min(.8,De*.05)*Math.max(0,B.chainCast.until-H.state.time);ne.position.copy(K).addScaledVector(ue,$),ne.position.y-=re,ne.scale.set(1,1.5,1),ne.quaternion.copy(F).multiply(new Wt().setFromAxisAngle(new L(0,1,0),ie%2*Math.PI/2)),ne.updateMatrix(),W.setMatrixAt(ie,ne.matrix)}W.instanceMatrix.needsUpdate=!0,fe++}},dispose(){b.dispose(),w.dispose(),_.dispose();for(let H of O)H.meshes[0].dispose();e.removeFromParent();for(let H of[l,c,u,h,d,y,R,S])H.dispose();for(let H of[t,n,s,r,o,a,f,x,m])H.dispose()}}}var _m=i=>Math.max(0,Math.min(1,i)),ud=i=>(i=_m(i),i*i*(3-2*i));function Mm(i,e,t=!1){let n=i.blastDirection??i.facing??0,s=0,r=0,o=0,a=0;if(i.blastDirection!==void 0&&!t){let l=_m(e/.9),c=ud((e-.9)/.8);s=l*85+c*26,r=4*l*(1-l)*65,a=l*Math.PI*4+c*Math.PI*2,o=l*Math.PI*.5}else{let l=ud(e/(t?.8:.65));s=l*7,o=l*Math.PI*.5}return{x:Math.cos(n)*s,y:Math.sin(n)*s,height:r,pitch:a,roll:o,yaw:Math.PI/2-n,fade:ud((e-3.2)/1),finished:e>=4.2}}function Sm(i){return{key:"gerstner-v1",uniforms:{riverTime:i},declarations:`uniform float riverTime;
 vec3 gerstner(vec3 p,vec2 d,float a,float lambda,float q){d=normalize(d);float k=6.2831853/lambda;float phase=k*dot(d,p.xz)-sqrt(9.81*k)*riverTime;return vec3(q*a*d.x*cos(phase),a*sin(phase),q*a*d.y*cos(phase));}`,code:`vec3 wavePosition=(modelMatrix*vec4(transformed,1.)).xyz;
 transformed+=gerstner(wavePosition,vec2(.28,1.),.025,3.7,.25)+gerstner(wavePosition,vec2(-.65,.76),.014,1.9,.18)+gerstner(wavePosition,vec2(.9,.43),.008,.9,.1);`}}function bm(i,e,t){i.userData.kawWater=!0,i.transparent=!0,i.depthWrite=!1,Mr(i,Sm(e));let n=i.onBeforeCompile,s=i.customProgramCacheKey;i.onBeforeCompile=r=>{n(r),Object.assign(r.uniforms,{riverTime:e,riverDepth:{value:t.buffers.opaque.depthTexture},riverResolution:t.resolution,riverInverseProjection:{value:t.camera.projectionMatrixInverse}}),r.fragmentShader=`uniform float riverTime;uniform sampler2D riverDepth;uniform vec2 riverResolution;uniform mat4 riverInverseProjection;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 screenUV=gl_FragCoord.xy/riverResolution;float bedDepth=texture2D(riverDepth,screenUV).r;
 vec4 bed=riverInverseProjection*vec4(screenUV*2.-1.,bedDepth*2.-1.,1.);bed.xyz/=bed.w;
 float thickness=clamp(-bed.z-vViewPosition.z,0.,12.);
 // Absorption increases exponentially with optical path length, never linearly.
 vec3 absorption=exp(-vec3(.32,.10,.055)*thickness);
 diffuseColor.rgb=mix(vec3(.018,.10,.12),diffuseColor.rgb,absorption);
 diffuseColor.a=smoothstep(0.,.35,thickness)*(.38+.52*(1.-exp(-thickness*.6)));
 float foam=(1.-smoothstep(.05,.65,thickness))*pow(max(0.,sin(visualWorld.z*3.-riverTime*2.+sin(visualWorld.x*4.))),12.);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.7,.82,.8),foam*.35);
 `),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 vec3 waveNormal=normalize(cross(dFdx(visualWorld),dFdy(visualWorld)));if(waveNormal.y<0.)waveNormal=-waveNormal;
 normal=normalize(mat3(viewMatrix)*waveNormal);
 vec2 flow=visualWorld.xz+vec2(0.,-riverTime*1.3);
 normal=normalize(normal+vec3(sin(flow.y*2.7+sin(flow.x*1.31))*.025,0.,cos(flow.x*3.17+riverTime*.6)*.025));
 `)},i.customProgramCacheKey=()=>s()+":depth-river-v3",i.needsUpdate=!0}function wm(i){let e=new Map,t=new WeakMap,n=0;return{update(s){let r=performance.now();for(let o of e.values())o.sources.length=0,o.mesh.visible=!1;n=0;for(let o of s)if(!(!(o.unit||o.batchRigid)||!o.root.visible||!o.model.visible)){o.root.updateMatrixWorld(!0),o.batchSources||(o.batchSources=[],o.model.traverse(a=>{a.isMesh&&o.batchSources.push(a)}));for(let a of o.batchSources){if(!a.isMesh||a.isSkinnedMesh||Array.isArray(a.material)||a.material.transparent||!a.visible&&!a.userData.batchHidden)continue;let l=t.get(a),c=l?.batch;if(!l||c.retired||l.geometry!==a.geometry||l.material!==a.material||l.cast!==a.castShadow||l.receive!==a.receiveShadow){let u=a.geometry.uuid+":"+a.material.uuid+":"+a.castShadow+":"+a.receiveShadow;if(c=e.get(u),!c){let h=new Jt(a.geometry,a.material,64);h.instanceMatrix.setUsage(gs),h.castShadow=a.castShadow,h.receiveShadow=a.receiveShadow,h.frustumCulled=!1,h.count=0,i.add(h),c={mesh:h,sources:[],used:r},e.set(u,c)}t.set(a,{batch:c,geometry:a.geometry,material:a.material,cast:a.castShadow,receive:a.receiveShadow})}a.userData.healthFraction=o.healthFraction??1,c.sources.push(a),a.visible=!1,a.userData.batchHidden=!0,n++}}for(let[o,a]of e){let l=a.sources.length;if(!l){r-a.used>45e3&&(a.mesh.removeFromParent(),a.mesh.dispose(),a.retired=!0,e.delete(o));continue}if(a.used=r,l>a.mesh.instanceMatrix.count){let x=a.mesh,m=new Jt(x.geometry,x.material,2**Math.ceil(Math.log2(l)));m.instanceMatrix.setUsage(gs),m.castShadow=x.castShadow,m.receiveShadow=x.receiveShadow,m.frustumCulled=!1,x.removeFromParent(),x.dispose(),i.add(m),a.mesh=m}a.mesh.count=l,a.mesh.visible=!0,a.mesh.userData.rigidBatch=!0,a.mesh.userData.shadowAnchor??=new L,a.mesh.userData.shadowAnchor.setFromMatrixPosition(a.sources[0].matrixWorld),a.mesh.instanceColor||(a.mesh.instanceColor=new Jn(new Float32Array(a.mesh.instanceMatrix.count*3).fill(1),3));let c=a.mesh.instanceColor.array,u=!1;for(let x=0;x<l;x++){let m=.55+.45*Math.max(0,Math.min(1,a.sources[x].userData.healthFraction??1));for(let p=0;p<3;p++)Math.abs(c[x*3+p]-m)>1e-5&&(c[x*3+p]=m,u=!0)}u&&(a.mesh.instanceColor.needsUpdate=!0);let h=a.mesh.instanceMatrix.array,d=1/0,f=-1;(!a.previous||a.previous.length!==h.length)&&(a.previous=new Float64Array(h.length),a.previous.fill(NaN));for(let x=0;x<l;x++){let m=a.sources[x].matrixWorld.elements,p=x*16;for(let g=0;g<16;g++)if(a.previous[p+g]!==m[g]){h.set(m,p),a.previous.set(m,p),d=Math.min(d,p),f=p+16;break}}f>=0&&(a.mesh.instanceMatrix.addUpdateRange(d,f-d),a.mesh.instanceMatrix.needsUpdate=!0)}},get stats(){return{batches:[...e.values()].filter(s=>s.mesh.visible).length,instances:n}},dispose(){for(let s of e.values())s.retired=!0,s.mesh.removeFromParent(),s.mesh.dispose();e.clear()}}}var $o;function dd(){if($o)return $o;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#86633e",e.fillRect(0,0,256,256);for(let t=0;t<110;t++){e.strokeStyle=t%3?"#66472b":"#b18d5e",e.lineWidth=t%4===0?2:1,e.beginPath();for(let n=0;n<=256;n+=4){let s=t*2.4+Math.sin(n*.035+t)*2.5;n?e.lineTo(s,n):e.moveTo(s,n)}e.stroke()}for(let[t,n]of[[65,85],[180,190]])for(let s=3;s<16;s+=3)e.beginPath(),e.ellipse(t,n,s,s*2,0,0,Math.PI*2),e.stroke();return $o=new Sn(i),$o.colorSpace=ct,$o}function Tm(i,e,t,n){let s=t.state.players[e.owner]?.faction;if(e.building&&e.type==="wall"&&s==="covenant"){let r=t.wallNeighbors?.get(e.id)||[],o=r.map(a=>a.id).join(":");if(i.wallSignature!==o){i.wallSignature=o,fd(i),i.polish=new Ue,i.root.add(i.polish);let a=new Ge({color:10857093,roughness:.85});for(let l of r){let c=(l.x-e.x)*.1,u=(l.y-e.y)*.1,h=Math.hypot(c,u)/2+.04,d=new Ie(new Xt(h,1.1,1.3),a);d.position.set(c/4,.75,u/4),d.rotation.y=-Math.atan2(u,c),d.castShadow=d.receiveShadow=!0,i.polish.add(d)}}}if(e.type==="siege"&&s==="horde"&&i.name!=="specialist-rockHewer"){if(!i.polish){i.polish=new Ue,i.root.add(i.polish);let o=new Ge({map:dd(),bumpMap:dd(),bumpScale:.035,roughness:.83});i.model.traverse(h=>{if(!h.isMesh)return;let d=Array.isArray(h.material)?h.material:[h.material];h.material=d.map(f=>{if(!f.color||f.metalness>.4)return f;let x=f.color;if(x.r>x.b*1.3&&x.g>x.b*1.1){let m=f.clone();return m.map=m.bumpMap=dd(),m.bumpScale=.025,i.polishMaterials??=[],i.polishMaterials.push(m),m}return f}),(!Array.isArray(d)||h.material.length===1)&&(h.material=h.material[0])});let a=new Ue;a.position.set(0,1.25,0);let l=new Ie(new Xt(.24,.24,3.8),o);l.position.z=1.4,a.add(l);let c=new Ie(new Qt(.35,12,8,0,Math.PI*2,0,Math.PI/2),new Ge({color:4993056,roughness:.95,side:Mt}));c.rotation.x=Math.PI,c.position.set(0,.1,3.2),a.add(c),i.polish.add(a),i.slingArm=a;let u=new Ie(new rs(.48,1),new Ge({color:9343370,roughness:.95}));u.position.set(0,.18,3.2),a.add(u),i.loadedRock=u}let r=e.action?.kind==="attack"?Math.max(0,Math.min(1,1-(e.action.until-n)/e.action.duration)):0;i.slingArm.rotation.x=r<.15?-.45-r*3:r<.3?-.9+(r-.15)/.15*2:1.1-(r-.3)/.7*1.55,i.loadedRock.visible=r<.15}}function fd(i){i.polish&&(i.polish.traverse(e=>{if(e.geometry?.dispose(),e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}),i.polish.removeFromParent(),i.polish=null),i.polishMaterials?.forEach(e=>e.dispose()),i.polishMaterials=null}var ea=new Map,Oc=new WeakMap,Ti=null;function CM(){if(Ti)return Ti;let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,64,64);for(let t=0;t<64;t++)e.fillStyle=t%2?"#a0a0a0":"#606060",e.fillRect(t,0,1,64),e.fillStyle=t%2?"#ffffff33":"#00000033",e.fillRect(0,t,64,1);return Ti=new Sn(i),Ti.wrapS=Ti.wrapT=Nt,Ti.repeat.set(5,8),Ti}function Em(i,e,t){e.bannerWind??={value:0},e.bannerDamage??={value:0},i.bumpMap=CM(),i.bumpScale=.025;let n=i.onBeforeCompile;i.onBeforeCompile=s=>{n(s),s.uniforms.bannerWindTime=e.bannerWind,s.uniforms.bannerDamage=e.bannerDamage,s.fragmentShader=`uniform float bannerDamage;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
#ifdef USE_MAP
float tear=fract(vMapUv.y*13.0+sin(vMapUv.y*32.0)*.2);if(bannerDamage>.35&&vMapUv.x>1.0-bannerDamage*.18&&tear<bannerDamage*.32)discard;diffuseColor.rgb*=1.0-bannerDamage*.18;
#endif`),s.vertexShader=`uniform float bannerWindTime;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.z += sin(bannerWindTime*3.2+uv.x*9.0+uv.y*4.0)*pow(clamp(uv.x,0.0,1.0),1.5)*`+t.toFixed(3)+";")},i.customProgramCacheKey=()=>"woven-banner-wind:"+t,i.needsUpdate=!0}function Am(){for(let i of ea.values())i.dispose();ea.clear(),Ti?.dispose(),Ti=null,Oc=new WeakMap}function RM(i){let e=Oc.get(i);if(e&&e.color===i.color&&e.banner===i.banner)return e.texture;let t=window.KawBanners;if(!t)return null;let n=t.normalize(i.banner),s=i.color+JSON.stringify(n);if(ea.has(s)){let l=ea.get(s);return Oc.set(i,{color:i.color,banner:i.banner,texture:l}),l}let r=document.createElement("canvas");r.width=128,r.height=192,t.draw(r.getContext("2d"),n,i.color,128,192);let o=r.getContext("2d");for(let l=0;l<r.width;l+=2)o.fillStyle=l%4?"#ffffff0c":"#00000012",o.fillRect(l,0,1,r.height);for(let l=0;l<r.height;l+=3)o.fillStyle=l%6?"#ffffff09":"#00000012",o.fillRect(0,l,r.width,1);let a=new Sn(r);return a.colorSpace=ct,a.anisotropy=4,ea.set(s,a),Oc.set(i,{color:i.color,banner:i.banner,texture:a}),a}function Cm(i,e,t,n){let s=RM(t);if(s){if(i.bannerWind??={value:n},i.bannerWind.value=n,i.bannerDamage??={value:0},i.bannerDamage.value=e.building?1-e.hp/e.max:0,i.name.startsWith("banner-")||i.name==="world-tower-dominion"){i.standardMaterials||(i.standardMaterials=[],i.model.traverse(r=>{!r.isMesh||!["banner-cloth","tower-banner-cloth"].includes(r.material.name)||(r.material=r.material.clone(),r.material.vertexColors=!1,r.material.color.set(16777215),r.material.normalMap=null,r.material.roughnessMap=null,Em(r.material,i,i.name.startsWith("banner-")?5.5:3.5),i.standardMaterials.push(r.material))}));for(let r of i.standardMaterials)r.map=s,r.needsUpdate=!r.userData.bannerApplied,r.userData.bannerApplied=!0}if(!(!e.building||e.construction||["wall","gate","trap","barricade"].includes(e.type))){if(!i.banner){let r=(i.box.max.y-i.box.min.y)*i.factor,o=(i.box.max.x-i.box.min.x)*i.factor,a=Math.max(1.1,Math.min(3,r*.28)),l=new Ue,c=new Ie(new tt(.04,.05,a*1.6,6),new Ge({color:8413246,roughness:.85})),u=new Ie(new wn(a*.65,a,12,16),new Ge({map:s,roughness:.93,side:Mt}));Em(u.material,i,.18),c.position.y=a*.7,u.position.set(a*.32,a,0),l.position.set(-o*.32,r*.66,0),l.add(c,u),i.root.add(l),i.banner={group:l,cloth:u}}i.banner.cloth.material.map=s,i.banner.cloth.rotation.y=Math.sin(n*1.6+e.id)*.12}}}function Rm(i){i.standardMaterials?.forEach(e=>e.dispose()),i.banner?.group.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())})}function Pm(){let i=[],e=[],t=[],n=[];for(let r=0;r<12;r++){let o=i.length/3,a=r*2.399,l=Math.sin(a),c=Math.cos(a),u=.6+r%3*.07,h=Math.sin(r*7.13)*.85,d=Math.cos(r*5.37)*.85;for(let[f,x]of[[0,0],[.5,-1],[.5,1],[1,0]]){let p=f*u;i.push(h+l*p+c*x*.125,Math.sin(f*Math.PI*.72)*(.32+r%3*.045),d+c*p-l*x*.125),e.push(.65+f*.3,.78+f*.2,.5+f*.24),t.push(.5+x*.5,f)}n.push(o,o+1,o+2,o+1,o+3,o+2)}let s=new ot;return s.setAttribute("position",new ke(i,3)),s.setAttribute("color",new ke(e,3)),s.setAttribute("uv",new ke(t,2)),s.setIndex(n),s.computeVertexNormals(),s}function Im(){let e=new Uint8Array(262144);for(let s=0;s<256;s++)for(let r=0;r<256;r++){let o=r/255,a=s/255,l=Math.exp(-Math.abs(o-.5)*90),c=Math.pow(Math.max(0,Math.cos((a-Math.abs(o-.5)*.75)*85)),16),u=.76+.16*Math.sin(o*Math.PI)+l*.1+c*.06,h=(s*256+r)*4;e[h]=u*230,e[h+1]=u*255,e[h+2]=u*185,e[h+3]=255}let t=new Mn(e,256,256);t.colorSpace=ct,t.magFilter=Ut,t.minFilter=cn,t.generateMipmaps=!0,t.anisotropy=8,t.needsUpdate=!0;let n=new zt({color:16777215,map:t,bumpMap:t,bumpScale:.009,vertexColors:!0,metalness:0,roughness:.43,clearcoat:.32,clearcoatRoughness:.38,side:Mt});return n.userData.kawThinSurface=.24,n}function Dm(i,e,t){let n=Pm(),s=Im();i.prepareMaterial(s,{sss:.24,rim:.06});let r=new Map,o=new ht,a=e.state.map==="canyon"?[11373913,9993037,11967339,9204298]:[3235630,2510374,3827760,2246947],l=(h,d,f,x=!1)=>{if(h<0||d<0||h>e.SIZE||d>e.SIZE||e.riverAt(h,d))return;o.position.set(h*.1,e.terrainHeight(h,d)*.1+.02,d*.1),o.rotation.y=f*2.399,o.scale.set(1+f%5*.1,(x?1.35:.65)+f%7*.085,1.05),o.updateMatrix();let m=Math.floor(h/(e.SIZE/16))+":"+Math.floor(d/(e.SIZE/16));r.has(m)||r.set(m,{matrices:[],tints:[]});let p=r.get(m);p.matrices.push(o.matrix.clone()),p.tints.push(new we(a[f%a.length]))},c=window.KawVisual?.quality==="low"?14:window.KawVisual?.quality==="high"?10:12,u=0;for(let h=c/2;h<e.SIZE;h+=c)for(let d=c/2;d<e.SIZE;d+=c){let f=u++,x=c*.18;l(d+Math.sin(f*12.9898)*x,h+Math.sin(f*7.233)*x,f)}for(let h of e.state.rivers||[])for(let d=h.points[0].y;d<=h.points.at(-1).y;d+=7)if(!h.bridges.some(f=>Math.abs(f-d)<65))for(let f of[-1,1])for(let x=0;x<3;x++){let m=e.riverCenter(h,d)+f*(h.width/2+5+x*6);l(m,d+Math.sin(d+x)*3,Math.floor(d)+x,!0)}i.grassChunks=[];for(let[h,{matrices:d,tints:f}]of r){let x=i.addInstances(n,s,d);f.forEach((v,M)=>x.setColorAt(M,v)),x.instanceColor.needsUpdate=!0,x.castShadow=!1,x.userData.noShadow=!0,x.userData.kawGrass=!0,x.updateMatrix(),x.matrixAutoUpdate=!1;let[m,p]=h.split(":").map(Number),g=e.SIZE/16;x.userData.grassBounds={x0:m*g,x1:(m+1)*g,y0:p*g,y1:(p+1)*g},i.grassChunks.push(x)}Mr(s,{key:"rooted-leaf-grass-v4",uniforms:{grassTime:t},declarations:"uniform float grassTime;",code:"vec3 grassAnchor=instanceMatrix[3].xyz;float bend=position.y*position.y;transformed.x+=bend*(sin(grassTime*1.8+grassAnchor.x*.29+grassAnchor.z*.21)*.34+sin(grassTime*.73+grassAnchor.z*.12)*.16);transformed.z+=bend*cos(grassTime*1.2+grassAnchor.x*.18)*.18;"})}function Lm(i,e,t,n,s,r,o,a){let l=Math.hypot(n-e,s-t),c=Math.max(1,Math.ceil(l/18)),u=6,h=(d,f)=>{let x=d/c,m=f/u,p=e+(n-e)*x,g=t+(s-t)*x,v=r+(o-r)*x,M=p-a.x,y=g-a.z,R=Math.hypot(M,y)||1,S=(1-m)*22+Math.sin(d*1.3+f*2.1)*2.3*Math.sin(m*Math.PI);return[(p+M/R*S)*.1,v*m*.1,(g+y/R*S)*.1]};for(let d=0;d<c;d++)for(let f=0;f<u;f++){let x=h(d,f),m=h(d,f+1),p=h(d+1,f+1),g=h(d+1,f);i.push(...x,...m,...g,...g,...m,...p)}}function Nm(i,e,t,n=!1){i.traverse(s=>{if(!s.isMesh||n&&s.material.name!=="living-leaf")return;let r=Array.isArray(s.material),o=r?s.material:[s.material];s.material=o.map(a=>{let l=a.clone(),c=a.onBeforeCompile,u=a.customProgramCacheKey;return l.onBeforeCompile=h=>c.call(l,h),l.customProgramCacheKey=()=>u.call(a),Mr(l,{key:"rooted-tree-v2",uniforms:{treeWindTime:e,treeWindHeight:{value:t}},declarations:"uniform float treeWindTime,treeWindHeight;",code:"float crown=clamp(position.y/treeWindHeight,0.0,1.0);vec3 anchor=modelMatrix[3].xyz;float gust=sin(treeWindTime*1.8+anchor.x*.29+anchor.z*.21)*.65+sin(treeWindTime*.73+anchor.z*.12)*.35;transformed.x+=crown*crown*treeWindHeight*.035*gust;transformed.z+=crown*crown*treeWindHeight*.015*cos(treeWindTime*1.2+anchor.x*.18);"}),l}),r||(s.material=s.material[0]),om(s)})}var pd=new L,Um=new L,Bc=class{modify(e,t){e=e.clone(),delete e.morphAttributes.position,delete e.morphAttributes.normal;let n=e.attributes;for(let A in n)A!=="position"&&A!=="uv"&&A!=="normal"&&A!=="tangent"&&A!=="color"&&e.deleteAttribute(A);e=em(e);let s=[],r=[],o=e.getAttribute("position"),a=e.getAttribute("uv"),l=e.getAttribute("normal"),c=e.getAttribute("tangent"),u=e.getAttribute("color"),h=null,d=null,f=null,x=null;for(let A=0;A<o.count;A++){let w=new L().fromBufferAttribute(o,A);a&&(d=new le().fromBufferAttribute(a,A)),l&&(f=new L().fromBufferAttribute(l,A)),c&&(h=new rt().fromBufferAttribute(c,A)),u&&(x=new we().fromBufferAttribute(u,A));let _=new md(w,d,f,h,x);s.push(_)}let m=e.getIndex();if(m!==null)for(let A=0;A<m.count;A+=3){let w=m.getX(A),_=m.getX(A+1),b=m.getX(A+2),E=new zc(s[w],s[_],s[b],w,_,b);r.push(E)}else for(let A=0;A<o.count;A+=3){let w=A,_=A+1,b=A+2,E=new zc(s[w],s[_],s[b],w,_,b);r.push(E)}for(let A=0,w=s.length;A<w;A++)Om(s[A]);let p,g=t;for(;g--;){if(p=NM(s),!p){console.log("THREE.SimplifyModifier: No next vertex");break}LM(s,r,p,p.collapseNeighbor)}let v=new ot,M=[],y=[],R=[],S=[],T=[];m=[];for(let A=0;A<s.length;A++){let w=s[A];M.push(w.position.x,w.position.y,w.position.z),w.uv&&y.push(w.uv.x,w.uv.y),w.normal&&R.push(w.normal.x,w.normal.y,w.normal.z),w.tangent&&S.push(w.tangent.x,w.tangent.y,w.tangent.z,w.tangent.w),w.color&&T.push(w.color.r,w.color.g,w.color.b),w.id=A}for(let A=0;A<r.length;A++){let w=r[A];m.push(w.v1.id,w.v2.id,w.v3.id)}return v.setAttribute("position",new ke(M,3)),y.length>0&&v.setAttribute("uv",new ke(y,2)),R.length>0&&v.setAttribute("normal",new ke(R,3)),S.length>0&&v.setAttribute("tangent",new ke(S,4)),T.length>0&&v.setAttribute("color",new ke(T,3)),v.setIndex(m),v}};function PM(i,e){i.indexOf(e)===-1&&i.push(e)}function ws(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function IM(i,e){let t=e.position.distanceTo(i.position),n=0,s=[];for(let a=0,l=i.faces.length;a<l;a++){let c=i.faces[a];c.hasVertex(e)&&s.push(c)}for(let a=0,l=i.faces.length;a<l;a++){let c=1,u=i.faces[a];for(let h=0;h<s.length;h++){let d=s[h],f=u.normal.dot(d.normal);c=Math.min(c,(1.001-f)/2)}n=Math.max(n,c)}let r=0;return s.length<2&&(n=1),t*n+r}function Om(i){if(i.neighbors.length===0){i.collapseNeighbor=null,i.collapseCost=-.01;return}i.collapseCost=1e5,i.collapseNeighbor=null;for(let e=0;e<i.neighbors.length;e++){let t=IM(i,i.neighbors[e]);i.collapseNeighbor||(i.collapseNeighbor=i.neighbors[e],i.collapseCost=t,i.minCost=t,i.totalCost=0,i.costCount=0),i.costCount++,i.totalCost+=t,t<i.minCost&&(i.collapseNeighbor=i.neighbors[e],i.minCost=t)}i.collapseCost=i.totalCost/i.costCount}function Fm(i,e){for(console.assert(i.faces.length===0);i.neighbors.length;){let t=i.neighbors.pop();ws(t.neighbors,i)}ws(e,i)}function DM(i,e){ws(e,i),i.v1&&ws(i.v1.faces,i),i.v2&&ws(i.v2.faces,i),i.v3&&ws(i.v3.faces,i);let t=[i.v1,i.v2,i.v3];for(let n=0;n<3;n++){let s=t[n],r=t[(n+1)%3];!s||!r||(s.removeIfNonNeighbor(r),r.removeIfNonNeighbor(s))}}function LM(i,e,t,n){if(!n){Fm(t,i);return}n.uv&&t.uv.copy(n.uv),n.normal&&n.normal.add(t.normal).normalize(),n.tangent&&n.tangent.add(t.tangent).normalize();let s=[];for(let r=0;r<t.neighbors.length;r++)s.push(t.neighbors[r]);for(let r=t.faces.length-1;r>=0;r--)t.faces[r]&&t.faces[r].hasVertex(n)&&DM(t.faces[r],e);for(let r=t.faces.length-1;r>=0;r--)t.faces[r].replaceVertex(t,n);Fm(t,i);for(let r=0;r<s.length;r++)Om(s[r])}function NM(i){let e=i[0];for(let t=0;t<i.length;t++)i[t].collapseCost<e.collapseCost&&(e=i[t]);return e}var zc=class{constructor(e,t,n,s,r,o){this.a=s,this.b=r,this.c=o,this.v1=e,this.v2=t,this.v3=n,this.normal=new L,this.computeNormal(),e.faces.push(this),e.addUniqueNeighbor(t),e.addUniqueNeighbor(n),t.faces.push(this),t.addUniqueNeighbor(e),t.addUniqueNeighbor(n),n.faces.push(this),n.addUniqueNeighbor(e),n.addUniqueNeighbor(t)}computeNormal(){let e=this.v1.position,t=this.v2.position,n=this.v3.position;pd.subVectors(n,t),Um.subVectors(e,t),pd.cross(Um).normalize(),this.normal.copy(pd)}hasVertex(e){return e===this.v1||e===this.v2||e===this.v3}replaceVertex(e,t){e===this.v1?this.v1=t:e===this.v2?this.v2=t:e===this.v3&&(this.v3=t),ws(e.faces,this),t.faces.push(this),e.removeIfNonNeighbor(this.v1),this.v1.removeIfNonNeighbor(e),e.removeIfNonNeighbor(this.v2),this.v2.removeIfNonNeighbor(e),e.removeIfNonNeighbor(this.v3),this.v3.removeIfNonNeighbor(e),this.v1.addUniqueNeighbor(this.v2),this.v1.addUniqueNeighbor(this.v3),this.v2.addUniqueNeighbor(this.v1),this.v2.addUniqueNeighbor(this.v3),this.v3.addUniqueNeighbor(this.v1),this.v3.addUniqueNeighbor(this.v2),this.computeNormal()}},md=class{constructor(e,t,n,s,r){this.position=e,this.uv=t,this.normal=n,this.tangent=s,this.color=r,this.id=-1,this.faces=[],this.neighbors=[],this.collapseCost=0,this.collapseNeighbor=null}addUniqueNeighbor(e){PM(this.neighbors,e)}removeIfNonNeighbor(e){let t=this.neighbors,n=this.faces,s=t.indexOf(e);if(s!==-1){for(let r=0;r<n.length;r++)if(n[r].hasVertex(e))return;t.splice(s,1)}}};function Bm(i){let e=new Map,t=new Map,n=i.clone();return zm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)zm(i.children[n],e.children[n],t)}var xd=0,gd=new L,ze=.1,FM="20261013-bark-balanced-r27",on=document.createElement("canvas");on.id="liveBattlefield";on.style.cssText="position:absolute;pointer-events:none;z-index:0;display:none";var Er=document.getElementById("world");Er.insertAdjacentElement("beforebegin",on);Er.style.position="relative";Er.style.zIndex="1";var Ei=document.createElement("div");Ei.id="battlefieldLoading";Ei.textContent="Preparing detailed battlefield\u2026";Ei.style.cssText="position:absolute;inset:0;z-index:3;display:none;place-items:center;background:#16201e;color:#e6d7ac;pointer-events:none";Er.parentElement.append(Ei);var wr=0;try{wr=Math.max(0,Math.min(1,Number(localStorage.getItem("kaw-ground-wetness"))||0))}catch{}var sa={value:0},Tr=!0;try{Tr=localStorage.getItem("kaw-live-3d")!=="off"}catch{}var ra=null,Gc=null,_d=!1;on.addEventListener("webglcontextlost",i=>{i.preventDefault(),_d=!0,window.dispatchEvent(new Event("kaw-render-lost"))});on.addEventListener("webglcontextrestored",()=>{_d=!1,queueMicrotask(()=>{Xc(),oa=null,Ar=!1})});var Ye=null,oa=null,Wc=null,ta=null,qc=!1,Ts=!1,Ar=!1,ia=0,na=null,zi=null,At=new Map,Cn=new Map,br=new Set,OM=null,Md=[],mn=null,vd="",Vc=null,yd="";function Xc(){Gc?.dispose(),Gc=null,ra?.dispose(),ra=null,ia++,qc=!1,Ts=!1,Ei.style.display="none",on.style.display="none";for(let e of At.values())Sd(e);At.clear(),Am();let i=new Set;for(let e of Cn.values())e.gltf.scene.traverse(t=>{t.geometry&&(i.add(t.geometry),t.geometry.userData.lowDetail&&i.add(t.geometry.userData.lowDetail))});for(let e of i)e.dispose();Cn.clear(),br.clear(),Md=[],mn=null,na=null,zi=null,OM=null,vd="",Vc=null,yd="",Ye?.dispose(),Ye=null,window.KawVisual?.suspend(!1)}function BM(i){Xc(),Ar=!1,oa=i.sessionKey,Wc=window.KawVisual?.quality||"balanced";try{Ye=Pc(on,{quality:Wc,cameraType:"orthographic"}),ra=wm(Ye.scene),Gc=ym(Ye),Ye.scene.background=new we("#314532"),Ye.scene.fog=null,Ye.weather.wetness.value=wr;for(let e=0;e<4;e++)Md.push(Ye.emissiveLight(new L(9999,9999,9999),16748602,16,12));HM(i),qc=!0}catch(e){Yc(e)}}function Yc(i){Ei.style.display="none",Ar=!0,qc=!1,Ts=!1,on.style.display="none",window.KawVisual?.suspend(!1),console.warn("Live 3D unavailable; using sprite renderer.",i.message)}function Hm(i){if(i?.startsWith("transport-")&&!Cn.has(i)){let t=Lc(i.slice(10));Ye.prepare(t),t.removeFromParent(),t.updateMatrixWorld(!0);let n=new Tt().setFromObject(t);t.visible=!1,Cn.set(i,{gltf:{scene:t,animations:[]},box:n,height:n.max.y-n.min.y,width:n.max.x-n.min.x})}if(i?.startsWith("alien-")&&!Cn.has(i)){let t=Ic(i);Ye.prepare(t),t.removeFromParent(),t.updateMatrixWorld(!0);let n=new Tt().setFromObject(t),s=Math.max(1,n.max.x-n.min.x,n.max.z-n.min.z),r=Math.max(1,n.max.y-n.min.y,i.startsWith("alien-world-")?0:s*.65);t.visible=!1,Cn.set(i,{gltf:{scene:t,animations:[]},box:n,height:r,width:s})}if(i==="campaign-wagon"&&!Cn.has(i)){let t=new Ue,n=new Ge({color:9069115,roughness:.82}),s=new Ge({color:9077361,metalness:.65,roughness:.4}),r=new Ge({color:10767158,roughness:1}),o=(l,c,u,h,d,f,x)=>{let m=new Ie(new Xt(l,c,u),x);m.position.set(h,d,f),t.add(m)};o(17,2,11,0,5,0,s);for(let l=0;l<5;l++)o(17,.6,.5,0,6+l*.85,-5.5,n),o(17,.6,.5,0,6+l*.85,5.5,n);o(.7,5,11,-8,8,0,n),o(.7,5,11,8,8,0,n);for(let l of[-6,6])for(let c of[-6.5,6.5]){let u=new Ie(new tt(3.2,3.2,1.6,14),s);u.position.set(l,3.2,c),u.rotation.z=Math.PI/2,u.userData.convoyWheel=!0,t.add(u)}for(let l=0;l<3;l++)o(4,3,5,-5+l*5,8,0,n);o(14,.5,11,0,11,0,r),Ye.prepare(t),t.visible=!1,t.removeFromParent(),t.updateMatrixWorld(!0);let a=new Tt().setFromObject(t);Cn.set(i,{gltf:{scene:t,animations:[]},box:a,height:a.max.y-a.min.y,width:17})}if(Cn.has(i))return Cn.get(i);if(br.has(i))return null;br.add(i);let e=ia;return Ye.loadAsset("assets/model-"+i+".glb?v="+FM,{attach:!1}).then(t=>{if(e!==ia)return;Fc(t.scene),t.scene.visible=!1,t.scene.updateMatrixWorld(!0),t.scene.traverse(s=>{s.isSkinnedMesh&&(s.skeleton.update(),s.computeBoundingBox())});let n=new Tt().setFromObject(t.scene);Cn.set(i,{gltf:{scene:t.scene,animations:t.animations},box:n,height:Math.max(1,n.max.y-n.min.y),width:Math.max(1,n.max.x-n.min.x,n.max.z-n.min.z)}),br.delete(i)}).catch(t=>{e===ia&&(br.delete(i),Yc(t))}),null}function km(i,e){if(i.type==="transport")return"transport-"+e.state.players[i.owner].faction;if(i.type==="rootColossus"&&i.rooted)return"specialist-rootColossusRooted";if(i.convoy)return"campaign-wagon";let t=e.state.players[i.owner]?.faction;if(t==="alien")return i.building?"alien-world-"+(i.type==="base"&&i.level>1?"base-level"+Math.min(4,i.level):i.type==="gate"&&i.gateOpen?"gate-open":i.type):e.unitAppearance(i.type,t,i.owner)+(i.type==="worker"?i.cargoGold>0?"-carry":i.cargoWood>0?"-logs":"":"");if(i.type==="trap"&&t!=="covenant")return"world-trap-resin";if(i.building){let s=Math.min(4,i.level||1),r=i.type==="base"&&s>1?"base-level"+s:i.type==="gate"&&i.gateOpen?"gate-open":i.type;return"world-"+r+(["trap","barricade"].includes(r)?"-covenant":t==="horde"?"-dominion":t==="covenant"?"-covenant":"")}let n=i.type==="air2"&&t==="covenant"&&i.venomStinger?"cov-wasp-venom":e.unitAppearance(i.type,t,i.owner);return i.type==="worker"&&(i.cargoGold>0?n+="-carry":i.cargoWood>0&&i.order?.kind==="deliver"?n+="-logs":["repair","build"].includes(i.order?.kind)?n+="-hammer":i.order?.target?.type==="gold"&&(n+="-pick")),n}function Sd(i){Vp(i),Wp(i),i.alienTeamMaterials?.forEach(e=>e.dispose()),fd(i),i.faceGlow?.forEach(e=>e.dispose()),i.teamBadge?.geometry.dispose(),i.teamBadge?.material.dispose(),Rm(i),i.mixer?.stopAllAction(),i.mixer?.uncacheRoot(i.model),i.roofMaterials?.forEach(e=>e.dispose()),i.root.traverse(e=>{e.customDepthMaterial?.dispose(),e.isSkinnedMesh&&e.skeleton.dispose()});for(let e of[i.frame,i.mound])e&&(e.geometry.dispose(),e.material.dispose());i.wind&&i.model.traverse(e=>{e.isMesh&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>t.dispose())}),Ye.scene.remove(i.root)}function Sr(i,e,t,n=!1){let s=Hm(e),r=/^(world-base|alien-world-base)/.test(e)?Hm(e.replace(/-level[234]/,"")):null;if(!s||/^(world-base|alien-world-base)/.test(e)&&!r)return At.get(i)||null;let o=At.get(i);if(o?.name===e)return o;o&&Sd(o);let a=new Ue,l=Bm(s.gltf.scene);l.visible=!0,l.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)});let c=t*ze/(n?e==="phoenix"?s.width/2.9:s.height:r?.width||s.width);l.scale.setScalar(c),n&&e.startsWith("alien-")&&(l.rotation.y=Math.PI),e.startsWith("transport-")&&(l.rotation.y=-Math.PI/2),l.position.y=-s.box.min.y*c;let u=["specialist-rootColossus","specialist-rootColossusRooted","specialist-bloomWeaver","specialist-ancientTreant"].includes(e),h=["world-tree","world-pine"].includes(e)||u;return h&&Nm(l,sa,u?12:s.height,u),gm(l,s.gltf.animations),a.add(l),Ye.scene.add(a),o={name:e,root:a,model:l,wind:h,unit:n,box:s.box,factor:c,mixer:n?new us(l):null,clips:s.gltf.animations,phase:null,frame:null},At.set(i,o),o}function zM(i,e,t){if(!e.building){if(!i.teamBadge){let n=new Ct({color:t.state.players[e.owner].color,transparent:!0,opacity:.48,depthWrite:!1});i.teamBadge=new Ie(new mo(e.size*ze*1.15,e.size*ze*1.4,24),n),i.teamBadge.rotation.x=-Math.PI/2,i.teamBadge.position.y=.08,i.root.add(i.teamBadge)}i.teamBadge.material.color.set(t.state.players[e.owner].color),i.teamBadge.material.opacity=t.selectedIds?.has(e.id)?.85:.4,i.teamBadge.position.y=(t.terrainHeight(e.x,e.y)-t.renderAltitude(e))*ze+.08}}function HM(i){let e=i.N,t=i.CELL,n=[],s=[],r=[];for(let S=0;S<=e;S++)for(let T=0;T<=e;T++)n.push(T*t*ze,i.riverAt(T*t,S*t)?-1.6:0,S*t*ze),r.push(T/e,S/e);for(let S=0;S<e;S++)for(let T=0;T<e;T++){let A=S*(e+1)+T;s.push(A,A+e+1,A+1,A+1,A+e+1,A+e+2)}let o=new ot;o.setAttribute("position",new ke(n,3)),o.setAttribute("uv",new ke(r,2)),o.setIndex(s),o.computeVertexNormals();let a=Qo(Ye,{grass:i.state.map==="canyon"?10057548:i.state.map==="frontier"?3431225:3232553});na=new Ie(o,a),Ye.prepare(na),na.castShadow=!1,na.userData.noShadow=!0;let l=Qo(Ye);l.side=Mt;let c=Qo(Ye,{grass:i.state.map==="canyon"?8545351:i.state.map==="frontier"?5466969:3888431}),u=[],h=[],d=(S,T,A,w,_)=>S.push(...T,...A,...w,...w,...A,..._),f=(S,T,A,w,_,b)=>d(u,[S*ze,_*ze,A*ze],[S*ze,b*ze,w*ze],[T*ze,_*ze,A*ze],[T*ze,b*ze,w*ze]),x,m=(S,T,A,w,_,b)=>Lm(h,S,T,A,w,_,b,x);for(let S of i.state.plateaus||[]){x={x:S.x+S.w/2,z:S.y+S.h/2};let T=S.rampX-64,A=S.rampX+64,w=S.y+S.h,_=w-80,b=w+80;f(S.x,T,S.y,w,S.height,S.height),f(A,S.x+S.w,S.y,w,S.height,S.height),f(T,A,S.y,_,S.height,S.height),f(T,A,_,b,S.height,0),m(S.x,S.y,S.x+S.w,S.y,S.height,S.height),m(S.x,S.y,S.x,w,S.height,S.height),m(S.x+S.w,S.y,S.x+S.w,w,S.height,S.height),m(S.x,w,T,w,S.height,S.height),m(A,w,S.x+S.w,w,S.height,S.height),m(T,_,T,b,S.height,0),m(A,_,A,b,S.height,0)}for(let[S,T]of[[u,c],[h,l]])if(S.length){let A=new ot;A.setAttribute("position",new ke(S,3));let w=[];for(let _=0;_<S.length;_+=3)w.push(T===l?(S[_]+S[_+2])/20:S[_]/(i.SIZE*ze),T===l?S[_+1]/8:(S[_+2]+S[_+1])/(i.SIZE*ze));A.setAttribute("uv",new ke(w,2)),A.computeVertexNormals(),Ye.prepare(new Ie(A,T))}let p=[],g=[];for(let S of i.state.rivers||[]){let T=S.crownwater?Math.max(2,Math.round(S.width/15.625)):8,A=[];for(let _=0;_<S.points.length-1;_++){let b=S.points[_],E=S.points[_+1],D=Math.max(1,Math.ceil(Math.hypot(E.x-b.x,E.y-b.y)/(S.crownwater?15.625:8)));for(let U=0;U<D;U++)A.push({x:b.x+(E.x-b.x)*U/D,y:b.y+(E.y-b.y)*U/D})}A.push(S.points.at(-1));let w=p.length/3;for(let _ of A)for(let b=0;b<=T;b++)p.push((_.x+(b/T-.5)*S.width)*ze,.08,_.y*ze);for(let _=0;_<A.length-1;_++)for(let b=0;b<T;b++){let E=w+_*(T+1)+b;g.push(E,E+T+1,E+1,E+1,E+T+1,E+T+2)}}if(p.length){let S=new ot;S.setAttribute("position",new ke(p,3)),S.setIndex(g),S.computeVertexNormals();let T=new zt({color:3239035,roughness:.12,metalness:0,clearcoat:.55,clearcoatRoughness:.16,ior:1.333,side:Mt});zi=new Ie(S,T),Ye.prepare(zi),zi.castShadow=!1,zi.userData.noShadow=!0,bm(T,sa,Ye)}let v=new Ge({color:8413501,roughness:.88});Ye.prepareMaterial(v,{rim:0});let M=[];function y(S,T,A,w){let _=new Ie(new tt(.35,.38,w,8),v);_.rotation.z=Math.PI/2,_.position.set(S*ze,T*ze,A*ze),_.castShadow=!0,_.receiveShadow=!0,Ye.scene.add(_),M.push(_)}for(let S of i.state.rivers||[])for(let T of S.bridges){let A=i.riverCenter(S,T);for(let w=0;w<14;w++)y(A,4,T-52+w*8,14)}for(let S of i.state.plateaus||[])for(let T=0;T<21;T++){let A=S.y+S.h-80+T*8;y(S.rampX,i.terrainHeight(S.rampX,A)+1,A,12.4)}let R=Dm(Ye,i,sa);R&&(R.userData.kawGrass=!0)}function kM(i){if(xd++,ta=i,_d)return Ts;let e=i.state.time+(i.state.networkReceivedAt?Math.min(.18,(performance.now()-i.state.networkReceivedAt)/1e3):0);if(!Tr||Ar&&oa===i.sessionKey||((!Ye||oa!==i.sessionKey||Wc!==(window.KawVisual?.quality||"balanced"))&&BM(i),!qc))return!1;let t=window.KawExperience?.settings.grass!==!1;Ye.visibleGrassChunks=xm(Ye.grassChunks,i,t),zi&&(zi.visible=vm(i)),Ye.setWaterVisible(!!zi?.visible);try{let n=Er.getBoundingClientRect(),s=Er.parentElement.getBoundingClientRect();on.style.left=n.left-s.left+"px",on.style.top=n.top-s.top+"px",on.style.width=n.width+"px",on.style.height=n.height+"px",Ye.resize();let r=Ye.camera,o=i.viewport.width*ze,a=i.viewport.height*ze*Math.SQRT1_2;r.left=-o/2,r.right=o/2,r.top=a/2,r.bottom=-a/2,r.position.set((i.cam.x+i.viewport.width/2)*ze,100,(i.cam.y+i.viewport.height/2)*ze+100),r.lookAt((i.cam.x+i.viewport.width/2)*ze,0,(i.cam.y+i.viewport.height/2)*ze),r.updateProjectionMatrix();let l=o+":"+a;l!==vd&&(Ye.csm.updateFrustums(),vd=l);let c=i.state.wallVersion+":"+i.state.entities.length,u=!Vc||yd!==c;if(u&&(Vc=new Map,yd=c),i.wallNeighbors=Vc,u){let m=new Map;for(let p of i.state.entities)p.building&&p.type==="wall"&&p.hp>0&&i.state.players[p.owner]?.faction==="covenant"&&m.set(p.owner+":"+p.x+":"+p.y,p);for(let p of m.values()){let g=[];for(let[v,M]of[[32,0],[-32,0],[0,32],[0,-32]]){let y=m.get(p.owner+":"+(p.x+v)+":"+(p.y+M));y&&g.push(y)}i.wallNeighbors.set(p.id,g)}}let h=!1,d=new Set;for(let m of i.state.entities){if(m.hp<=0||m.hiddenInMine||i.entityVisible&&!i.entityVisible(m)||m.owner!==0&&!i.visible(m.x,m.y)||!i.inViewport(m.x,m.y,220))continue;let p="e"+m.id;d.add(p);let g=m.building?m.size*2.7:m.type==="sniper"&&i.state.players[m.owner].faction==="covenant"?78:m.type==="melee"&&i.state.players[m.owner].faction==="covenant"?80:["air2","air3"].includes(m.type)?85:m.type==="beetle"||m.type==="cavalier"?70:55,v=Sr(p,km(m,i),g*(m.building?1:i.unitVisualScale(m)),!m.building);if(!v){h=!0;continue}v.root.visible=!0,v.batchRigid=m.building&&!m.construction&&!v.wind,v.root.scale.setScalar(m.type==="bloomPod"?.25+.75*Math.min(1,Math.max(0,1-(m.maturesAt-i.state.time)/1.5)):m.type==="air2"&&m.rebornAt!==void 0?.35+.65*Math.min(1,Math.max(0,(i.state.time-m.rebornAt)/.6)):1);let M=m.x,y=m.y;if(m.networkAt&&m.networkFrom){v.networkAt!==m.networkAt&&(v.networkAt=m.networkAt,v.from=v.anchor||m.networkFrom);let T=Math.min(1,(performance.now()-m.networkAt)/150);M=v.from.x+(m.x-v.from.x)*T,y=v.from.y+(m.y-v.from.y)*T}if(!m.building&&!m.networkAt){let T=performance.now(),A=Math.min(.1,(T-(v.positionAt??T))/1e3),w=1-Math.exp(-A*24);v.positionAt=T,v.anchor&&Math.hypot(M-v.anchor.x,y-v.anchor.y)<100&&(M=v.anchor.x+(M-v.anchor.x)*w,y=v.anchor.y+(y-v.anchor.y)*w)}if(v.anchor={x:M,y},Tm(v,m,i,e),Dc(v,m,e),Nc(v,e,m.order?.kind==="move"),v.name.startsWith("alien-")){v.alienTeamMaterials||(v.alienTeamMaterials=[],v.model.traverse(T=>{T.isMesh&&T.material.userData.alienTeam&&(T.material=T.material.clone(),v.alienTeamMaterials.push(T.material))}));for(let T of v.alienTeamMaterials)T.color.set(i.state.players[m.owner].color)}v.lastUsed=performance.now(),v.root.position.set(M*ze,i.renderAltitude(m)*ze,y*ze),v.healthFraction=m.building?m.hp/m.max:1;let R=m.building||i.selectedIds?.has(m.id)||g/i.viewport.width*on.clientWidth>=20;v.shadowDetail!==R&&(v.shadowDetail=R,v.model.traverse(T=>{T.isMesh&&(T.userData.originalCastShadow??=T.castShadow,T.castShadow=R&&T.userData.originalCastShadow)}));let S=m.building?m.type==="trap"&&i.state.players[m.owner].faction==="covenant"?e*1.6:["wall","gate"].includes(m.type)?0:Math.PI/6:Math.PI/2-(m.facing||0);if(m.building)v.root.rotation.y=S;else{let T=Math.max(0,Math.min(.1,e-(v.headingAt??e)));v.heading=v.heading===void 0?S:v.heading+Math.atan2(Math.sin(S-v.heading),Math.cos(S-v.heading))*(1-Math.exp(-T*14)),v.headingAt=e,v.root.rotation.y=v.heading}if(Hp(v,m,i,e),Gp(v,m,i.state.players[m.owner]),zM(v,m,i),Cm(v,m,i.state.players[m.owner],window.KawHUD?.settings.reduced?0:e),m.building&&!v.damageHooksBound&&(v.damageHooksBound=!0,v.model.traverse(T=>{!T.isMesh||T.userData.damageBound||(T.userData.damageBound=!0,T.onBeforeRender=()=>{for(let A of Array.isArray(T.material)?T.material:[T.material])A.color&&(A.userData.undamagedColor??=A.color.clone(),A.color.copy(A.userData.undamagedColor).multiplyScalar(.65+.35*v.healthFraction))},T.onAfterRender=()=>{for(let A of Array.isArray(T.material)?T.material:[T.material])A.userData.undamagedColor&&A.color.copy(A.userData.undamagedColor)})})),v.root.rotation.x=0,v.root.rotation.z=0,!m.building&&!i.isFlying(m)){(!v.slopeAt||Math.hypot(m.x-v.slopeAt.x,m.y-v.slopeAt.y)>4)&&(v.slopeAt={x:m.x,y:m.y,dx:(i.terrainHeight(m.x+8,m.y)-i.terrainHeight(m.x-8,m.y))/16,dy:(i.terrainHeight(m.x,m.y+8)-i.terrainHeight(m.x,m.y-8))/16});let T=v.slopeAt,A=m.facing||0,w=-Math.atan(T.dx*Math.cos(A)+T.dy*Math.sin(A)),_=Math.atan(T.dx*Math.sin(A)-T.dy*Math.cos(A));v.root.rotation.x=Un.clamp(w,-.16,.16),v.root.rotation.z+=Un.clamp(_,-.12,.12)}if(m.convoy&&v.model.traverse(T=>{T.userData.convoyWheel&&(T.rotation.y=m.walkUntil>e?e*3:0)}),m.building&&m.type==="tower"&&i.state.players[m.owner].faction==="horde"&&!m.construction){let T="garrison"+m.id;d.add(T);let A=Sr(T,"troll",33,!0);if(!A)h=!0;else{A.lastUsed=performance.now(),A.root.visible=!0,A.root.position.copy(v.root.position),A.root.position.y+=(v.box.max.y-v.box.min.y)*v.factor*.76,A.root.rotation.y=Math.PI/2-(m.facing||0);let w=m.action&&m.action.until>e?"attack":"idle",_=A.clips.find(b=>b.name===w);_&&(A.phase!==w&&(A.mixer.stopAllAction(),A.action=A.mixer.clipAction(_).play(),A.phase=w),A.action.time=w==="attack"?Math.min(_.duration,(1-(m.action.until-e)/m.action.duration)*_.duration):e%_.duration,A.mixer.update(0))}}if(m.building&&i.state.players[m.owner].faction==="covenant"&&!v.roofMaterials&&(v.roofMaterials=[],v.model.traverse(T=>{if(!T.isMesh||T.material.name!=="verdant-roof")return;let A=T.material.clone(),w=new we(i.state.players[m.owner].color);Ye.prepareMaterial(A);let _=A.onBeforeCompile;A.onBeforeCompile=b=>{_(b),b.uniforms.roofTeam={value:w},b.fragmentShader=`uniform vec3 roofTeam;
`+b.fragmentShader,b.fragmentShader=b.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb=roofTeam*clamp(dot(diffuseColor.rgb,vec3(.2126,.7152,.0722))*2.5,.3,1.2);`)},A.customProgramCacheKey=()=>"verdant-team-roof",T.material=A,v.roofMaterials.push(A)})),m.type==="melee"&&i.state.players[m.owner].faction==="covenant"){v.faceGlow||(v.faceGlow=[],v.model.traverse(T=>{T.isMesh&&T.material.name==="treant-face-glow"&&(T.material=T.material.clone(),Ye.prepareMaterial(T.material),v.faceGlow.push(T.material))}));for(let T of v.faceGlow)T.emissive.setHex(m.combatGlowUntil>i.state.time?16726309:5570389)}if(v.name==="specialist-waterElemental"){if(!v.waterMaps){let T=new Set;v.model.traverse(A=>{A.isMesh&&A.material.map&&T.add(A.material.map)}),v.waterMaps=[...T]}for(let T of v.waterMaps)T.offset.y=e*.07}if(v.detailEnabled!==window.KawExperience?.settings.models&&(v.detailEnabled=window.KawExperience?.settings.models,v.model.traverse(T=>{if(!T.isMesh||T.isSkinnedMesh)return;let A=T.userData.detailGeometry??=T.geometry;if(window.KawExperience?.settings.models===!1&&A.attributes.position.count>100&&A.attributes.position.count<12e3){if(!A.userData.lowDetail)try{A.userData.lowDetail=new Bc().modify(A,Math.floor(A.attributes.position.count*.3))}catch{A.userData.lowDetail=A}T.geometry=A.userData.lowDetail}else T.geometry=A})),v.model.visible=!(m.burrowUntil>i.state.time),!v.model.visible&&!v.mound&&(v.mound=new Ie(new Qt(2.7,10,6),new Ge({color:8414022,roughness:1})),Ye.prepareMaterial(v.mound.material),v.mound.receiveShadow=v.mound.castShadow=!0,v.mound.scale.set(1,.3,1),v.mound.position.y=.2,v.root.add(v.mound)),v.mound&&(v.mound.visible=!v.model.visible),m.construction){let T=1-m.construction.left/m.construction.total;v.model.scale.y=v.factor*(.2+.8*T),v.frame||(v.frame=new Ie(new Xt(m.size*2.5*ze,8,m.size*2.2*ze),new Ct({color:12296312,wireframe:!0})),v.frame.position.y=4,v.root.add(v.frame)),v.frame.visible=!0}else v.model.scale.y=v.factor,v.frame&&(v.frame.visible=!1);v.mixer&&Uc(v,m,e,M,y,i.selectedIds?.has(m.id)),Xp(v,m,i,e)}let f=[];for(let m of i.state.ruins||[]){let p=i.state.time-m.at;if(!i.visible(m.x,m.y)||!i.inViewport(m.x,m.y,240))continue;let g=m.building?4:4.2;if(p<g){let v="fallen:"+m.id;d.add(v);let M=At.get(v);if(!M&&!m.building&&(M=At.get("e"+m.id),M&&(At.delete("e"+m.id),At.set(v,M),M.mixer&&(M.mixer.timeScale=0))),M??=Sr(v,km(m,i),m.building?m.size*2.7:55*i.unitVisualScale(m),!m.building),M)if(M.lastUsed=performance.now(),M.root.visible=!0,m.building){M.root.position.set(m.x*ze,i.terrainHeight(m.x,m.y)*ze,m.y*ze),M.root.rotation.set(0,["wall","gate"].includes(m.type)?0:Math.PI/6,0);let y=Math.min(1,p/g);M.model.scale.set(M.factor*(1-.5*y),M.factor*Math.max(.025,1-y*1.6),M.factor*(1-.5*y)),M.root.rotation.z=Math.sin(y*30)*(1-y)*.025,M.mixer?.stopAllAction()}else{let y=Mm(m,p,document.body.classList.contains("reduced-effects")),R=m.x+y.x,S=m.y+y.y;M.model.scale.setScalar(M.factor),M.root.position.set(R*ze,(i.terrainHeight(R,S)+y.height+Math.sin(y.roll)*4-y.fade*18)*ze,S*ze),M.root.rotation.set(y.pitch,y.yaw,y.roll),M.mixer&&(M.mixer.timeScale=0),M.teamBadge&&(M.teamBadge.visible=!1)}}if(m.building)for(let v=0;v<6;v++){let M=v*2.399+m.id;f.push({x:(m.x+Math.cos(M)*m.size*.6)*ze,y:i.terrainHeight(m.x,m.y)*ze,z:(m.y+Math.sin(M)*m.size*.4)*ze,size:Math.max(.35,m.size*ze*.12),a:M})}}if(f.length&&!mn&&(mn=new Jt(new io(1,0),new Ge({color:8485477,roughness:.93}),480),Ye.prepare(mn),Ye.scene.add(mn),mn.frustumCulled=!1,mn.castShadow=!1,mn.userData.noShadow=!0),mn){mn.count=Math.min(480,f.length);let m=new ht;for(let p=0;p<mn.count;p++){let g=f[p];m.position.set(g.x,g.y+g.size*.4,g.z),m.rotation.set(g.a,.4,g.a*.3),m.scale.set(g.size,g.size*.6,g.size*.9),m.updateMatrix(),mn.setMatrixAt(p,m.matrix)}mn.instanceMatrix.needsUpdate=!0}for(let m of i.state.resources){if(m.type!=="gold"||m.backAngle===void 0||m.noOutcrop||!i.inViewport(m.x,m.y,240)||!i.state.seen[Math.floor(m.y/i.CELL)*i.N+Math.floor(m.x/i.CELL)])continue;let p="ore-rock:"+m.x+":"+m.y;d.add(p);let g=Sr(p,"world-gold-outcrop",160,!1);if(!g){h=!0;continue}g.lastUsed=performance.now(),g.root.visible=!0,g.root.position.set(m.x*ze,i.terrainHeight(m.x,m.y)*ze,m.y*ze),g.root.rotation.y=Math.atan2(-Math.cos(m.backAngle),-Math.sin(m.backAngle))}for(let m of i.state.resources){if(m.type==="gold"&&m.backAngle!==void 0&&!m.noOutcrop||m.amount<=0&&!(m.type==="wood"&&m.fallAt!==void 0&&i.state.time-m.fallAt<.65)||!i.inViewport(m.x,m.y,160)||!i.state.seen[Math.floor(m.y/i.CELL)*i.N+Math.floor(m.x/i.CELL)])continue;let p="r"+m.x+":"+m.y;d.add(p);let g=m.type==="gold"?"world-gold":Math.floor(m.x+m.y)%3===0?"world-pine":"world-tree",v=Sr(p,g,m.type==="gold"?54:65,!1);if(v||(h=!0),v){v.lastUsed=performance.now(),v.root.visible=!0,v.root.position.set(m.x*ze,i.terrainHeight(m.x,m.y)*ze,m.y*ze),v.root.rotation.y=m.type==="gold"&&m.backAngle!==void 0?Math.atan2(-Math.cos(m.backAngle),-Math.sin(m.backAngle)):0;let M=m.fallAt===void 0?0:Math.min(1,Math.max(0,(e-m.fallAt)/.65));v.root.rotation.z=-(m.fallDirection||1)*M*M*Math.PI/2,v.model.scale.setScalar(v.factor*(1-Math.max(0,(M-.75)/.25)))}}for(let[m,p]of(i.state.mountains||[]).entries()){if(!i.inViewport(p.x,p.y,200))continue;let g="m"+m;d.add(g);let v=Sr(g,"world-mountain",p.half*2.4,!1);v||(h=!0),v&&(v.lastUsed=performance.now(),v.root.visible=!0,v.root.position.set(p.x*ze,0,p.y*ze))}for(let m of At.values())m.root.visible&&!m.root.parent&&Ye.scene.add(m.root);for(let[m,p]of At)d.has(m)||(p.root.visible=!1,p.root.removeFromParent(),(m.startsWith("fallen:")||performance.now()-(p.lastUsed||0)>45e3)&&(Sd(p),At.delete(m)));let x=i.state.entities.filter(m=>(m.breath||m.shot?.fire&&m.shot.left>0||m.burn&&!m.burn.poison||m.type==="air2"&&i.state.players[m.owner].faction==="human")&&i.visible(m.x,m.y)&&i.inViewport(m.x,m.y));return Md.forEach((m,p)=>{if(!m)return;let g=x[p];if(g){let v=g.breath||(g.shot?.left>0?g.shot:null)||g,M=g.breath?.5:v===g?0:1-v.left/v.duration;m.color.set(g.breath?.blue?6929151:16756293),m.position.set((g.x+(v.x-g.x)*M)*ze,(i.renderAltitude(g)+20)*ze,(g.y+(v.y-g.y)*M)*ze)}else m.position.set(9999,9999,9999)}),h&&!Ts?(Ei.style.display="grid",on.style.display="none",window.KawVisual?.suspend(!0),!0):(Ei.style.display="none",sa.value=window.KawHUD?.settings.reduced?0:e,on.style.display="block",Gc.update(i,At),mm(At.values()),ra.update(At.values()),Ye.render(sa.value),Ts=!0,window.KawVisual?.suspend(!0),!0)}catch(n){return Yc(n),!1}}on.addEventListener("webglcontextlost",i=>{i.preventDefault(),Yc(new Error("WebGL context lost"))});var Hc=document.getElementById("groundWetness");Hc&&(Hc.value=String(wr),Hc.oninput=()=>window.KawBattlefield.setWetness(Number(Hc.value)));var kc=document.getElementById("graphicsRenderer");kc&&(kc.value=Tr?"live":"sprite",kc.onchange=()=>window.KawBattlefield.setEnabled(kc.value==="live"));window.KawBattlefield={present:kM,setWetness(i){wr=Math.max(0,Math.min(1,i)),Ye&&(Ye.weather.wetness.value=wr);try{localStorage.setItem("kaw-ground-wetness",String(wr))}catch{}},setEnabled(i){Tr=!!i;try{localStorage.setItem("kaw-live-3d",Tr?"on":"off")}catch{}Xc(),Ar=!1},get enabled(){return Tr},get loading(){return Ei.style.display==="grid"},get active(){return Ts},resourceHit(i,e,t){let n=(i.backAngle!==void 0&&!i.noOutcrop?"ore-rock:":"r")+i.x+":"+i.y;return this.hit(n,e,t)},hit(i,e,t){let n=At.get("e"+i)||At.get(i);if(!Ts||!n?.root.visible)return!1;if(n.pickFrame!==xd){n.pickFrame=xd;let r=n.pickBounds??={x0:1/0,x1:-1/0,y0:1/0,y1:-1/0};r.x0=r.y0=1/0,r.x1=r.y1=-1/0;let o=n.box;for(let a of[o.min.x,o.max.x])for(let l of[o.min.y,o.max.y])for(let c of[o.min.z,o.max.z]){gd.set(a,l,c).applyMatrix4(n.model.matrixWorld).project(Ye.camera);let u=(gd.x+1)*ta.viewport.width/2,h=(1-gd.y)*ta.viewport.height/2;r.x0=Math.min(r.x0,u),r.x1=Math.max(r.x1,u),r.y0=Math.min(r.y0,h),r.y1=Math.max(r.y1,h)}}let s=n.pickBounds;return e>=s.x0-3&&e<=s.x1+3&&t>=s.y0-3&&t<=s.y1+3},defenseMuzzle(i,e){return kp(At.get("e"+i),e)},anchor(i){return At.get("e"+i)?.anchor},bounds(i){let e=At.get("e"+i)||At.get(i);if(!e)return null;e.root.updateMatrixWorld(!0);let t=new Tt().setFromObject(e.model);return{width:t.max.x-t.min.x,height:t.max.y-t.min.y,depth:t.max.z-t.min.z,scale:e.factor}},get stats(){return Ye?{generation:ia,drawCalls:Ye.renderer.info.render.calls,triangles:Ye.renderer.info.render.triangles,models:At.size,hiddenTemplatesInScene:[...Cn.values()].filter(i=>i.gltf.scene.parent===Ye.scene).length,grassChunks:Ye.grassChunks?.length||0,visibleGrassChunks:Ye.visibleGrassChunks||0,attachedModels:[...At.values()].filter(i=>i.root.parent===Ye.scene).length,unitBatches:ra?.stats,joinedWalls:[...At.values()].filter(i=>i.wallSignature).length,slings:[...At.values()].filter(i=>i.slingArm).length,pending:br.size,loaded:Cn.size,quality:Wc,ruins:mn?.count||0}:null},project(i,e,t=0){if(!Ye)return null;let n=new L(i*ze,t*ze,e*ze).project(Ye.camera);return{x:(n.x+1)/2*ta.viewport.width,y:(1-n.y)/2*ta.viewport.height}},stop(){Xc(),oa=null,Ar=!1}};pm(i=>[...(typeof troopOptions=="function"?[...new Set(["worker",...["base","barracks","forge","roost","altar"].flatMap(n=>troopOptions(n,i))])]:["worker","melee","ranged","sniper","siege","air","air2","hero","hero2","hero3"]).map(n=>({type:n,building:!1,label:typeof names<"u"&&names[i][n]||n,name:typeof unitAppearance=="function"?unitAppearance(n,i,0):"alien-"+n})),...[1,2,3,4].map(n=>({type:"base",building:!0,label:"Stronghold \xB7 level "+n,name:(i==="alien"?"alien-world-":"world-")+"base"+(n>1?"-level"+n:"")+(i==="horde"?"-dominion":i==="covenant"?"-covenant":"")})),...["barracks","forge","roost","altar","mill","armory","foundry","house","tower","bastion","depot"].map(n=>({type:n,building:!0,label:n,name:(i==="alien"?"alien-world-":"world-")+n+(i==="horde"?"-dominion":i==="covenant"?"-covenant":"")}))].filter(n=>n.name));Bp();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
