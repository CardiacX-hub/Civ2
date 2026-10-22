/** Original analytic micro-surfaces. Derivative filtering fades detail below a
 * pixel so close-up relief does not become shimmering noise at RTS distances.
 * Existing albedo/normal maps and silhouettes remain intact. */
export function surfaceKind(material){
 const n=material.name||'';if(material.userData?.previewFloor)return 0;if(material.emissive&&material.emissive.r+material.emissive.g+material.emissive.b>.2)return 0;if(material.transparent&&material.opacity<.9||/leaf|water|cascade|flame|glow|roof/i.test(n))return 0;
 if(/bark|wood|timber/i.test(n))return 2;
 if(/stone|masonry|rock/i.test(n))return 3;
 if((material.metalness||0)>.4)return 1;
 return material.userData?.structure?3:4;
}
export function injectSurfaceDetail(shader,kind){
 if(!kind)return;
 shader.vertexShader='varying vec3 detailPosition;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ndetailPosition=position;');
 shader.fragmentShader='varying vec3 detailPosition;\n'+shader.fragmentShader;
 // Object-space coordinates keep scratches attached to moving units. fwidth
 // integrates away subpixel grooves, avoiding extra texture reads and allocations.
 const sample=kind===2?'detailPosition.x*.9+sin(detailPosition.y*.13+detailPosition.z*.4)*.7':kind===1?'detailPosition.y*5.0+sin(detailPosition.x*.7)*.15':kind===3?'detailPosition.x*1.8+detailPosition.z*1.3+sin(detailPosition.y*2.4)*.6':'dot(detailPosition,vec3(2.1,3.7,1.6))';
 shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
 float detailCoord=${sample};
 float detailAA=1.0-smoothstep(.35,1.5,fwidth(detailCoord));
 float detailGroove=pow(.5+.5*sin(detailCoord*6.2831853),${kind===2?'8.0':'4.0'})*detailAA;
 roughnessFactor=clamp(roughnessFactor+(detailGroove-.3)*${kind===1?'.1':'.06'},.12,1.0);
 diffuseColor.rgb*=1.0-detailGroove*${kind===2?'.13':kind===3?'.085':'.04'};`);
 // Perturb the already mapped normal through screen-space surface derivatives.
 // It is bounded and vanishes below a pixel; no displacement cracks or geometry.
 shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
 vec3 detailDx=dFdx(-vViewPosition),detailDy=dFdy(-vViewPosition);
 vec3 detailR1=cross(detailDy,normal),detailR2=cross(normal,detailDx);
 float detailDet=dot(detailDx,detailR1);
 vec3 detailGradient=(dFdx(detailGroove)*detailR1+dFdy(detailGroove)*detailR2)*sign(detailDet);
 normal=normalize(normal-detailGradient*${kind===2?'.004':kind===1?'.002':'.0015'}/max(abs(detailDet),.0001));`);
}
