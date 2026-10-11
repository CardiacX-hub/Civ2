/** Visual-only corpse motion, in gameplay units. Bounded analytical trajectories
 * avoid per-corpse physics bodies, collision work, and integration drift. */
export const CORPSE_SECONDS=4.2;
const clamp=x=>Math.max(0,Math.min(1,x));
const smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
export function deathPose(dead,age,reduced=false){
 const direction=dead.blastDirection??dead.facing??0;
 let distance=0,height=0,roll=0,pitch=0;
 if(dead.blastDirection!==undefined&&!reduced){
  const air=clamp(age/.9),settle=smooth((age-.9)/.8);
  // Ballistic arc: zero height at launch/landing; two full flips in flight.
  distance=air*85+settle*26;height=4*air*(1-air)*65;
  pitch=air*Math.PI*4+settle*Math.PI*2;roll=air*Math.PI*.5;
 }else{const fall=smooth(age/(reduced?.8:.65));distance=fall*7;roll=fall*Math.PI*.5;}
 return {x:Math.cos(direction)*distance,y:Math.sin(direction)*distance,height,pitch,roll,yaw:Math.PI/2-direction,fade:smooth((age-3.2)/1),finished:age>=CORPSE_SECONDS};
}
