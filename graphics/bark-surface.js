/** Authored deterministic bark relief, baked once during asset export. */
import * as T from 'three';
export function createBarkSurface(){
 const size=512,height=new Float32Array(size*size),color=document.createElement('canvas');color.width=color.height=size;const g=color.getContext('2d'),pixels=g.createImageData(size,size);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const wave=x+Math.sin(y*.026)*4+Math.sin(y*.007+x*.021)*8,ridge=Math.abs(Math.sin(wave*.095)),split=Math.abs(Math.sin(wave*.19+y*.012)),knot=Math.sin(Math.hypot((x-173)*.8,(y-290)*.45)*.17),h=.25+.48*ridge+.12*knot-.16*(split<.1?1:0)+.035*Math.sin(x*2.3+y*1.9),i=(y*size+x)*4;height[y*size+x]=h;const shade=100+h*125;pixels.data[i]=shade+8;pixels.data[i+1]=shade+3;pixels.data[i+2]=shade-5;pixels.data[i+3]=255;}
 g.putImageData(pixels,0,0);const normal=document.createElement('canvas');normal.width=normal.height=size;const n=normal.getContext('2d'),data=n.createImageData(size,size);const sample=(x,y)=>height[(y+size)%size*size+(x+size)%size];for(let y=0;y<size;y++)for(let x=0;x<size;x++){const dx=(sample(x-1,y)-sample(x+1,y))*3,dy=(sample(x,y+1)-sample(x,y-1))*3,len=Math.hypot(dx,dy,1),i=(y*size+x)*4;data.data[i]=(dx/len*.5+.5)*255;data.data[i+1]=(dy/len*.5+.5)*255;data.data[i+2]=(1/len*.5+.5)*255;data.data[i+3]=255;}n.putImageData(data,0,0);
 const map=new T.CanvasTexture(color),normalMap=new T.CanvasTexture(normal);map.colorSpace=T.SRGBColorSpace;for(const t of [map,normalMap]){t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=8;}return {map,normalMap};
}
