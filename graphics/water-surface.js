import {attachDeformation} from './vertex-deformation.js';
import {waveDeformation} from './gerstner-waves.js';
/** Gerstner geometry + Beer–Lambert absorption. Depth is from the opaque-only
 * prepass; screen-space reflections are composited later in linear HDR. */
export function prepareRiver(material,time,pipeline){
 material.userData.kawWater=true;material.transparent=true;material.depthWrite=false;
 attachDeformation(material,waveDeformation(time));
 const compile=material.onBeforeCompile,key=material.customProgramCacheKey;
 material.onBeforeCompile=shader=>{compile(shader);Object.assign(shader.uniforms,{riverTime:time,riverDepth:{value:pipeline.buffers.opaque.depthTexture},riverResolution:pipeline.resolution,riverInverseProjection:{value:pipeline.camera.projectionMatrixInverse}});
 shader.fragmentShader='uniform float riverTime;uniform sampler2D riverDepth;uniform vec2 riverResolution;uniform mat4 riverInverseProjection;\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 vec2 screenUV=gl_FragCoord.xy/riverResolution;float bedDepth=texture2D(riverDepth,screenUV).r;
 vec4 bed=riverInverseProjection*vec4(screenUV*2.-1.,bedDepth*2.-1.,1.);bed.xyz/=bed.w;
 float thickness=clamp(-bed.z-vViewPosition.z,0.,12.);
 // Absorption increases exponentially with optical path length, never linearly.
 vec3 absorption=exp(-vec3(.32,.10,.055)*thickness);
 diffuseColor.rgb=mix(vec3(.018,.10,.12),diffuseColor.rgb,absorption);
 diffuseColor.a=smoothstep(0.,.35,thickness)*(.38+.52*(1.-exp(-thickness*.6)));
 float foam=(1.-smoothstep(.05,.65,thickness))*pow(max(0.,sin(visualWorld.z*3.-riverTime*2.+sin(visualWorld.x*4.))),12.);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.7,.82,.8),foam*.35);
 `);
 shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
 vec3 waveNormal=normalize(cross(dFdx(visualWorld),dFdy(visualWorld)));if(waveNormal.y<0.)waveNormal=-waveNormal;
 normal=normalize(mat3(viewMatrix)*waveNormal);
 vec2 flow=visualWorld.xz+vec2(0.,-riverTime*1.3);
 normal=normalize(normal+vec3(sin(flow.y*2.7+sin(flow.x*1.31))*.025,0.,cos(flow.x*3.17+riverTime*.6)*.025));
 `);};material.customProgramCacheKey=()=>key()+':depth-river-v3';material.needsUpdate=true;
}
