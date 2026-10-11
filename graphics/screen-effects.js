import * as THREE from 'three';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
const vertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
// Inverse projection reconstructs both orthographic RTS and perspective cameras.
const reconstruction=`vec3 viewPoint(vec2 uv,float d){vec4 p=inverseProjection*vec4(uv*2.-1.,d*2.-1.,1.);return p.xyz/p.w;}
 vec2 projectPoint(vec3 p){vec4 clip=projection*vec4(p,1.);return clip.xy/clip.w*.5+.5;}`;
/** View-space ray marching with a depth crossing test and binary refinement.
 * Linear HDR input is mixed before ACES. Off-screen/missing hits retain PBR IBL.
 * Finite step budgets and distance/edge fades limit cost and screen-space artifacts. */
export function createReflectionPass(buffers,camera,{steps=24,distance=18,thickness=.35,opacity=.32}={}){
 const pass=new ShaderPass({uniforms:{tDiffuse:{value:null},tSurface:{value:null},tDepth:{value:null},tOpaqueDepth:{value:null},inverseProjection:{value:camera.projectionMatrixInverse},projection:{value:camera.projectionMatrix},perspective:{value:camera.isPerspectiveCamera?1:0},maxDistance:{value:distance},thickness:{value:thickness},opacity:{value:opacity}},vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse,tSurface,tDepth,tOpaqueDepth;uniform mat4 inverseProjection,projection;uniform float perspective,maxDistance,thickness,opacity;${reconstruction}
 void main(){vec4 source=texture2D(tDiffuse,vUv),surface=texture2D(tSurface,vUv);float d=texture2D(tDepth,vUv).r;
  if(d>=.999999||surface.a<.015){gl_FragColor=source;return;}
  vec3 origin=viewPoint(vUv,d),normal=normalize(surface.rgb*2.-1.);vec3 incoming=perspective>.5?normalize(origin):vec3(0.,0.,-1.);vec3 ray=reflect(incoming,normal);
  vec3 start=origin+normal*.06;float previous=-1.;vec2 hit=vec2(-1.);float hitDistance=0.;
  for(int i=1;i<=${Math.max(8,Math.min(48,Math.round(steps)))};i++){float travel=maxDistance*float(i)/float(${Math.max(8,Math.min(48,Math.round(steps)))});vec3 point=start+ray*travel;vec2 uv=projectPoint(point);
   if(any(lessThan(uv,vec2(.002)))||any(greaterThan(uv,vec2(.998)))||point.z>-.1)break;
   float depth=texture2D(tOpaqueDepth,uv).r;if(depth>=.999999){previous=-1.;continue;}float difference=viewPoint(uv,depth).z-point.z;
   if(previous<0.&&difference>=0.){float lo=max(0.,travel-maxDistance/float(${Math.max(8,Math.min(48,Math.round(steps)))})),hi=travel;
    for(int j=0;j<4;j++){float mid=(lo+hi)*.5;vec3 probe=start+ray*mid;vec2 puv=projectPoint(probe);float gap=viewPoint(puv,texture2D(tOpaqueDepth,puv).r).z-probe.z;if(gap>=0.)hi=mid;else lo=mid;}
    vec3 refined=start+ray*hi;vec2 refinedUV=projectPoint(refined);float finalGap=viewPoint(refinedUV,texture2D(tOpaqueDepth,refinedUV).r).z-refined.z;if(finalGap<thickness){hit=refinedUV;hitDistance=hi;break;}}previous=difference;}
  if(hit.x<0.){gl_FragColor=source;return;}float edge=smoothstep(0.,.08,min(min(hit.x,hit.y),min(1.-hit.x,1.-hit.y)));float fresnel=.04+.96*pow(1.-max(0.,dot(normal,-incoming)),5.);
  float amount=surface.a*opacity*edge*(1.-hitDistance/maxDistance)*fresnel;gl_FragColor=vec4(mix(source.rgb,texture2D(tDiffuse,hit).rgb,amount),source.a);
 }`});pass.name='Bounded screen-space reflections';pass.uniforms.tSurface.value=buffers.surface.texture;pass.uniforms.tDepth.value=buffers.surface.depthTexture;pass.uniforms.tOpaqueDepth.value=buffers.opaque.depthTexture;pass.uniforms.inverseProjection.value=camera.projectionMatrixInverse;pass.uniforms.projection.value=camera.projectionMatrix;return pass;
}
/** Homogeneous single-scattering integration: T=exp(-σt*d), scattering=
 * (1-T)*radiance. Density varies with height and drifting weather noise.
 * Henyey–Greenstein phase approximates forward-scattered sunlight. Shadow-map
 * visibility gives directional shafts; short budgets keep RTS motion responsive. */
export function createAtmospherePass(buffers,camera,csm,{steps=8,density=.003}={}){
 const light=csm.lights.at(-1),pass=new ShaderPass({uniforms:{tDiffuse:{value:null},tDepth:{value:null},inverseProjection:{value:camera.projectionMatrixInverse},projection:{value:camera.projectionMatrix},cameraWorld:{value:camera.matrixWorld},density:{value:density},time:{value:0},sunDirection:{value:csm.lightDirection.clone().negate()},sunColor:{value:new THREE.Color(0xffe1b0)},fogColor:{value:new THREE.Color(0x90a9ac)},shadowMap:{value:null},shadowMatrix:{value:light.shadow.matrix},hasShadow:{value:0}},vertexShader:vertex,fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse,tDepth,shadowMap;uniform mat4 inverseProjection,projection,cameraWorld,shadowMatrix;uniform float density,time,hasShadow;uniform vec3 sunDirection,sunColor,fogColor;${reconstruction}
 #include <packing>
 float visibility(vec3 world){if(hasShadow<.5)return 1.;vec4 p=shadowMatrix*vec4(world,1.);vec3 s=p.xyz/p.w;if(any(lessThan(s,vec3(0.)))||any(greaterThan(s,vec3(1.))))return 1.;return step(s.z-.002,unpackRGBAToDepth(texture2D(shadowMap,s.xy)));}
 void main(){vec4 source=texture2D(tDiffuse,vUv);float depth=texture2D(tDepth,vUv).r;vec3 end=viewPoint(vUv,min(depth,.9999)),begin=viewPoint(vUv,0.);float distance=min(350.,length(end-begin)),stepLength=distance/float(${Math.max(4,Math.min(16,Math.round(steps)))});vec3 direction=normalize(end-begin);float transmission=1.;vec3 scatter=vec3(0.);
  float mu=dot(normalize(mat3(cameraWorld)*direction),normalize(sunDirection));float g=.45,phase=(1.-g*g)/(12.56637*pow(max(.01,1.+g*g-2.*g*mu),1.5));
  for(int i=0;i<${Math.max(4,Math.min(16,Math.round(steps)))};i++){vec3 p=begin+direction*(float(i)+.5)*stepLength;vec3 world=(cameraWorld*vec4(p,1.)).xyz;float height=exp(-max(0.,world.y)*.035);float cloud=.8+.2*sin(world.x*.035+sin(world.z*.04+time*.08));float attenuation=exp(-density*height*cloud*stepLength);vec3 illumination=fogColor*.35+sunColor*visibility(world)*phase*2.5;scatter+=transmission*(1.-attenuation)*illumination;transmission*=attenuation;}
  gl_FragColor=vec4(source.rgb*transmission+scatter,source.a);
 }`});pass.name='Height atmosphere and shadowed sun shafts';pass.uniforms.tDepth.value=buffers.opaque.depthTexture;pass.uniforms.inverseProjection.value=camera.projectionMatrixInverse;pass.uniforms.projection.value=camera.projectionMatrix;pass.uniforms.cameraWorld.value=camera.matrixWorld;pass.uniforms.shadowMatrix.value=light.shadow.matrix;pass.update=(time,shadows=true)=>{pass.uniforms.time.value=time;pass.uniforms.sunColor.value.copy(light.color).multiplyScalar(light.intensity*.35);pass.uniforms.shadowMap.value=light.shadow.map?.texture||null;pass.uniforms.hasShadow.value=shadows&&light.shadow.map?1:0;};return pass;
}
