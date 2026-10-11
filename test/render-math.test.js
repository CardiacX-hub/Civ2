'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
test('Gerstner water remains finite, bounded and free of folding over long simulations',async()=>{
 const {waves,sampleWaves}=await import('../graphics/gerstner-waves.js');
 const maxY=waves.reduce((s,w)=>s+w.amplitude,0),maxXZ=waves.reduce((s,w)=>s+w.steepness*w.amplitude,0);
 assert(waves.reduce((s,w)=>s+w.steepness*2*Math.PI/w.wavelength*w.amplitude,0)<1);
 for(const t of [0,1,300,3600,86400])for(let i=0;i<30;i++){const p=sampleWaves(i*7.11,-i*3.07,t);assert(Object.values(p).every(Number.isFinite));assert(Math.abs(p.y)<=maxY+1e-12);assert(Math.hypot(p.x,p.z)<=maxXZ+1e-12);}
 const a=sampleWaves(3,9,1),b=sampleWaves(3,9,1.00001);assert(Math.abs(a.y-b.y)<.00001);assert.notDeepEqual(a,sampleWaves(3,9,2));
});
test('Shared deformation retains one clock across color/depth poses',async()=>{
 const {waveDeformation}=await import('../graphics/gerstner-waves.js'),{attachDeformation,attachShadowDeformation}=await import('../graphics/vertex-deformation.js'),T=await import('three');
 const time={value:2},material=new T.MeshStandardMaterial(),mesh=new T.Mesh(new T.PlaneGeometry(),material);attachDeformation(material,waveDeformation(time));attachShadowDeformation(mesh);
 const shader=()=>({uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:''}),a=shader(),b=shader();material.onBeforeCompile(a);mesh.customDepthMaterial.onBeforeCompile(b);assert.equal(a.uniforms.riverTime,time);assert.equal(b.uniforms.riverTime,time);time.value=20;assert.equal(a.uniforms.riverTime.value,b.uniforms.riverTime.value);material.dispose();mesh.customDepthMaterial.dispose();mesh.geometry.dispose();
});
test('Terrain arrays use complete PBR channels and correct linear/sRGB spaces',async()=>{
 const {createTerrainLayers}=await import('../graphics/terrain-layers.js'),T=await import('three'),maps=createTerrainLayers(16);assert.equal(maps.albedoHeight.colorSpace,T.SRGBColorSpace);assert.equal(maps.normal.colorSpace,T.NoColorSpace);assert.equal(maps.orm.colorSpace,T.NoColorSpace);
 for(const texture of Object.values(maps)){assert.equal(texture.image.depth,3);assert.equal(texture.image.data.length,16*16*4*3);assert(texture.generateMipmaps);texture.dispose();}
 const data=maps.normal.image.data;for(let i=0;i<data.length;i+=4){const length=Math.hypot(data[i]/255*2-1,data[i+1]/255*2-1,data[i+2]/255*2-1);assert(Math.abs(length-1)<.025);}
});
