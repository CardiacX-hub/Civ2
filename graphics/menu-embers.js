import * as T from 'three';
/** Fixed-size GPU pool: particles advect outward; respawning particles are invisible. */
export function createMenuEmbers(scene,clock){
 const geometry=new T.BufferGeometry(),seeds=[];for(let i=0;i<48;i++)seeds.push(i/48,((i*37)%47)/47,((i*19)%43)/43);
 geometry.setAttribute('position',new T.Float32BufferAttribute(seeds,3));
 const material=new T.ShaderMaterial({uniforms:{clock},transparent:true,depthTest:false,depthWrite:false,blending:T.NormalBlending,
 vertexShader:`uniform float clock;varying float life;varying float smoke;void main(){float t=fract(clock*.55+position.x);life=sin(t*3.14159);smoke=step(.82,position.x);vec2 p=vec2(.709,.18)+vec2(-.089,.14)*t;float spread=t*t*.012;p+=vec2(sin(position.y*99.0+clock*2.0),cos(position.z*93.0+clock*1.7))*spread;p.y-=smoke*t*.014;gl_Position=projectionMatrix*modelViewMatrix*vec4((p.x-.5)*1672.0,(.5-p.y)*941.0,0,1);gl_PointSize=mix(2.5,15.0,smoke)*life;}`,
 fragmentShader:`varying float life;varying float smoke;void main(){float r=length(gl_PointCoord-.5)*2.0;float a=(1.0-smoothstep(.1,1.0,r))*life;gl_FragColor=vec4(mix(vec3(1,.36,.04),vec3(.15,.14,.13),smoke),a*mix(.7,.16,smoke));}`});
 const points=new T.Points(geometry,material);points.frustumCulled=false;points.renderOrder=34;scene.add(points);return points;
}
