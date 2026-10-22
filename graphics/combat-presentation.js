/** Cosmetic response only: never displaces simulation positions or delays orders. */
export function hitReaction(e,time){
 const left=(e.hitUntil||0)-time;if(left<=0||e.building)return {pitch:0,roll:0};
 const phase=Math.min(1,left/.3),pulse=Math.sin(phase*Math.PI),angle=Math.atan2(e.y-(e.impactFromY??e.y-1),e.x-(e.impactFromX??e.x))- (e.facing||0),heavy=['siege','devoured','cavalier','beetle','bogbreaker','rootColossus','phaseSentinel'].includes(e.type),weight=heavy?.045:.09;
 return {pitch:Math.cos(angle)*pulse*weight,roll:Math.sin(angle)*pulse*weight};
}
export function applyCombatPresentation(entry,e,c,time){
 if(!e.building){if(['cov-wasp','cov-wasp-venom','cov-centipede'].includes(entry.name)){if(!entry.flightLegs){entry.flightLegs=[];entry.model.traverse(o=>{if(o.isBone&&o.position.y<0&&Math.abs(o.position.x)>5){o.userData.flightRestX=o.rotation.x;entry.flightLegs.push(o);}});}const moving=e.walkUntil>time;entry.legTuck=(entry.legTuck||0)+((moving?-.28:0)-(entry.legTuck||0))*.18;for(const leg of entry.flightLegs)leg.rotation.x=leg.userData.flightRestX+entry.legTuck;}const reaction=hitReaction(e,time);if(!globalThis.KawHUD?.settings.reduced){entry.root.rotation.x+=reaction.pitch;entry.root.rotation.z+=reaction.roll;}
  if(c.isFlying(e)){const dt=Math.min(.1,Math.max(.001,time-(entry.bankAt??time))),yaw=entry.root.rotation.y,turn=entry.bankYaw===undefined?0:Math.atan2(Math.sin(yaw-entry.bankYaw),Math.cos(yaw-entry.bankYaw));entry.bankYaw=yaw;entry.bankAt=time;entry.bank=(entry.bank||0)+(Math.max(-.24,Math.min(.24,-turn/dt*.06))-(entry.bank||0))*Math.min(1,dt*6);entry.root.rotation.z+=globalThis.KawHUD?.settings.reduced?0:entry.bank;}
 }
}
