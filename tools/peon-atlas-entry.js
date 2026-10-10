// Capture the optimized live rigs so Classic uses the same detailed peons.
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(35,144/192,.1,1000);
scene.add(new THREE.HemisphereLight(0xd4e0e4,0x474632,2));
for(const [color,strength,x,y,z] of [[0xffe2b6,3,-80,130,100],[0xbed9ea,1.7,100,65,-50]]){const light=new THREE.DirectionalLight(color,strength);light.position.set(x,y,z);scene.add(light);}
camera.position.set(0,82,260);camera.lookAt(0,38,0);
window.KawPeonSheet=async name=>{
 const asset=await new GLTFLoader().loadAsync('assets/model-'+name+'.glb'),model=asset.scene;
 scene.add(model);camera.position.set(0,82,260);camera.lookAt(0,38,0);if(name==='dragon'||name==='wyvern'){camera.position.set(0,180,330);camera.lookAt(0,22,0);}if(name.startsWith('banner-')){const bounds=new THREE.Box3().setFromObject(model),height=bounds.max.y-bounds.min.y,center=(bounds.max.y+bounds.min.y)/2;camera.position.set(0,center+height*.18,height/(2*Math.tan(camera.fov*Math.PI/360))*1.25);camera.lookAt(0,center,0);}
 const mixer=new THREE.AnimationMixer(model),atlas=document.createElement('canvas');atlas.width=144*16;atlas.height=192*24;
 const g=atlas.getContext('2d');renderer.setSize(144,192,false);
 for(let phase=0;phase<3;phase++){mixer.stopAllAction();const clip=asset.animations.find(a=>a.name===['idle','walk','attack'][phase])||new THREE.AnimationClip('idle',2.5,[]),action=mixer.clipAction(clip).play();
  for(let direction=0;direction<8;direction++)for(let frame=0;frame<16;frame++){action.time=clip.duration*frame/16;mixer.update(0);model.rotation.y=Math.PI/2-direction*Math.PI/4;renderer.render(scene,camera);g.drawImage(renderer.domElement,frame*144,(phase*8+direction)*192);}
 }
 const portrait=document.createElement('canvas');portrait.width=96;portrait.height=128;
 const ratio=260/205;portrait.getContext('2d').drawImage(atlas,0,384,144,192,48*(1-ratio),64*(1-ratio),96*ratio,128*ratio);
 mixer.stopAllAction();const idle=mixer.clipAction(asset.animations.find(a=>a.name==='idle')||new THREE.AnimationClip('idle',2.5,[])).play();idle.time=.1;mixer.update(0);model.rotation.y=-.2;
 renderer.setSize(480,640,false);renderer.render(scene,camera);const detail=renderer.domElement.toDataURL('image/webp',.96).split(',')[1];
 scene.remove(model);mixer.uncacheRoot(model);model.traverse(m=>{if(m.isMesh){m.geometry.dispose();(Array.isArray(m.material)?m.material:[m.material]).forEach(material=>material.dispose());}});
 return {atlas:atlas.toDataURL('image/webp',.95).split(',')[1],portrait:portrait.toDataURL('image/webp',.96).split(',')[1],detail};
};
