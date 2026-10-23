/** Skip work whose final pixels are outside the camera or under opaque unknown fog.
 * Conservative margins retain grass around feathered fog edges and raised terrain.
 * Geometry, texture resolution and wind animation remain unchanged. */
export function updateGrassVisibility(meshes,c,enabled=true){
 let visible=0;const margin=120;
 for(const mesh of meshes||[]){const b=mesh.userData.grassBounds;let show=false;
  if(enabled&&b&&b.x1>=c.cam.x-margin&&b.x0<=c.cam.x+c.viewport.width+margin&&b.y1>=c.cam.y-margin&&b.y0<=c.cam.y+c.viewport.height+margin){
   const x0=Math.max(0,Math.floor((b.x0-margin)/c.CELL)),x1=Math.min(c.N-1,Math.floor((b.x1+margin)/c.CELL)),y0=Math.max(0,Math.floor((b.y0-margin)/c.CELL)),y1=Math.min(c.N-1,Math.floor((b.y1+margin)/c.CELL));
   show=mesh.userData.grassExplored===true;for(let y=y0;y<=y1&&!show;y++)for(let x=x0;x<=x1;x++)if(c.state.seen[y*c.N+x]){show=true;mesh.userData.grassExplored=true;break;}
  }mesh.visible=show;if(show)visible++;
 }return visible;
}
export function riverInView(c){
 const margin=256;
 return (c.state.rivers||[]).some(r=>{let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity;for(const p of r.points){x0=Math.min(x0,p.x);x1=Math.max(x1,p.x);y0=Math.min(y0,p.y);y1=Math.max(y1,p.y);}const bank=r.width/2+margin;return x1+bank>=c.cam.x&&x0-bank<=c.cam.x+c.viewport.width&&y1+margin>=c.cam.y&&y0-margin<=c.cam.y+c.viewport.height;});
}
