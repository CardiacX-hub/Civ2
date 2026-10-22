/** Sample authored clips once per presented frame for active troops.
 * The simulation owns attack timing; distance owns footfall timing. The mixer
 * advances only fade weights, so it cannot add another step to either clock. */
import {animationStandard} from './appearance-standards.js';
export function attackPoseProgress(progress){const p=Math.max(0,Math.min(1,progress));return p<.2?p*.6:p<.38?.12+(p-.2)/.18*.5:.62+(p-.38)/.62*.38;}
export function animateActor(entry,e,time,x,y,selected=false){
 const phase=e.action?.until>time?'attack':e.walkUntil>time?'walk':'idle';
 const interval=phase==='idle'&&!selected&&!(e.hitUntil>time)?1/30:0;
 if(phase===entry.phase&&interval&&time-(entry.poseAt??-1)<interval)return false;
 entry.poseAt=time;
 entry.clipLookup??=new Map(entry.clips.map(c=>[c.name,c]));
 const clip=entry.clipLookup.get(phase);
 if(!clip){if(entry.phase!==phase){entry.mixer.stopAllAction();entry.phase=phase;}return false;}
 if(phase!==entry.phase){
  const previous=entry.action;entry.action=entry.mixer.clipAction(clip).reset().play();
  entry.action.timeScale=0; // Preserve the explicit simulation/distance clock.
  if(previous&&previous!==entry.action)entry.action.crossFadeFrom(previous,animationStandard.blend,false);
  entry.phase=phase;
 }
 const distance=Math.min(animationStandard.maxPoseDistance,Math.hypot(x-(entry.poseX??x),y-(entry.poseY??y)));
 entry.poseX=x;entry.poseY=y;
 if(phase==='walk')entry.gait=(entry.gait||0)+distance*clip.duration/animationStandard.stride;
 entry.action.time=phase==='attack'?Math.max(0,Math.min(clip.duration,((e.type==='melee'||e.type==='devoured'||e.type==='cavalier'||e.type==='bogbreaker')?attackPoseProgress(1-(e.action.until-time)/e.action.duration):(1-(e.action.until-time)/e.action.duration))*clip.duration)):phase==='walk'?(entry.gait||0)%clip.duration:((time+e.id*.07)%clip.duration);
 entry.mixer.update(Math.max(0,Math.min(.1,time-(entry.blendAt??time))));entry.blendAt=time;
 return true;
}
