/** Sum of three deep-water Gerstner waves: k=2π/λ, ω=√(gk),
 * y=A sin(k D·x-ωt), xz += Q A D cos(phase). ΣQkA<1 avoids loops.
 * CPU sampling mirrors GLSL for deterministic tests and placement tools. */
export const waves=[{direction:[.28,1],amplitude:.025,wavelength:3.7,steepness:.25},{direction:[-.65,.76],amplitude:.014,wavelength:1.9,steepness:.18},{direction:[.9,.43],amplitude:.008,wavelength:.9,steepness:.1}];
export function sampleWaves(x,z,time){const result={x:0,y:0,z:0};for(const w of waves){const n=Math.hypot(...w.direction),dx=w.direction[0]/n,dz=w.direction[1]/n,k=2*Math.PI/w.wavelength,phase=k*(dx*x+dz*z)-Math.sqrt(9.81*k)*time;result.x+=w.steepness*w.amplitude*dx*Math.cos(phase);result.y+=w.amplitude*Math.sin(phase);result.z+=w.steepness*w.amplitude*dz*Math.cos(phase);}return result;}
export function waveDeformation(time){return {key:'gerstner-v1',uniforms:{riverTime:time},declarations:`uniform float riverTime;
 vec3 gerstner(vec3 p,vec2 d,float a,float lambda,float q){d=normalize(d);float k=6.2831853/lambda;float phase=k*dot(d,p.xz)-sqrt(9.81*k)*riverTime;return vec3(q*a*d.x*cos(phase),a*sin(phase),q*a*d.y*cos(phase));}`,
 code:`vec3 wavePosition=(modelMatrix*vec4(transformed,1.)).xyz;
 transformed+=gerstner(wavePosition,vec2(.28,1.),.025,3.7,.25)+gerstner(wavePosition,vec2(-.65,.76),.014,1.9,.18)+gerstner(wavePosition,vec2(.9,.43),.008,.9,.1);`};}
