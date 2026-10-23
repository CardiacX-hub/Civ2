/** Motion and compositing rules for the painted Home Screen. */
export function wingStroke(t,frequency){const p=((t*frequency)%1+1)%1;return p<.36?(1-Math.cos(Math.PI*p/.36))*.5:(1+Math.cos(Math.PI*(p-.36)/.64))*.5;}
export function paintingPose(t){const bird=wingStroke(t,.34),dragon=wingStroke(t,.24);return{phoenixLeft:bird*.09,phoenixRight:-bird*.12,dragonLeft:dragon*.065,dragonRight:-dragon*.07,treeBreath:Math.sin(t*1.3)*.0018,treeArm:(Math.sin(t*1.3+.5)-Math.sin(.5))*.006,shipX:-t*.015};}
export function layerOrder(name){return({flagship:5,escorts:5,phoenixLeft:20,phoenixRight:21,phoenixBody:22,dragonLeft:30,dragonRight:31,dragonBody:32,fire:33,treeHead:40,treeArm:41,treeFeet:42,treeBody:43})[name];}
// Texture sampling is upstream (+u,+v); visible transport is outward (-u,-v).
// At each phase reset the resetting sample has zero contribution.
export function fireFlow(t){const a=((t*.65)%1+1)%1;return{a,b:(a+.5)%1,blend:Math.abs(a*2-1),distance:t*.65,direction:[-.09,.14]};}
export function protectedPhoenix(x,y){return Math.hypot((x-.245)/.055,(y-.22)/.045)<1.1||Math.hypot((x-.22)/.036,(y-.276)/.045)<1.1;}
export function wingClass(r,g,b,x,y){const high=v=>v>155,low=v=>v<105;if(high(r)&&low(g)&&low(b))return y<.31&&!protectedPhoenix(x,y)?0:-1;if(high(r)&&high(g)&&low(b))return !protectedPhoenix(x,y)?1:-1;if(low(r)&&low(g)&&high(b))return 2;if(low(r)&&high(g)&&high(b))return 3;return -1;}
/** Bound complete mattes rather than using rectangular wing guesses. */
export function measureWings(data,width,height){const out=Array.from({length:4},()=>({count:0,minX:width,minY:height,maxX:0,maxY:0}));for(let y=0;y<height;y++)for(let x=0;x<width;x++){const i=(y*width+x)*4,k=wingClass(data[i],data[i+1],data[i+2],x/width,y/height);if(k<0)continue;const a=out[k];a.count++;a.minX=Math.min(a.minX,x);a.maxX=Math.max(a.maxX,x);a.minY=Math.min(a.minY,y);a.maxY=Math.max(a.maxY,y);}return out.map(a=>({...a,bounds:[Math.max(0,(a.minX-5)/width),Math.max(0,(a.minY-5)/height),Math.min(1,(a.maxX+6)/width),Math.min(1,(a.maxY+6)/height)]}));}
