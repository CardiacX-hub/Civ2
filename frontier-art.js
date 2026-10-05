'use strict';
// Frames rendered from the user's Frontier 3D character models. No runtime WebGL required.
const frontierSheets={};
for(const name of ['knight','orc','ranger','troll','mage','shaman','worker','peon']){const img=new Image();img.src='assets/frontier-'+name+'.png';frontierSheets[name]=img;}
function frontierAppearance(type,horde){return ({worker:horde?'peon':'worker',melee:horde?'orc':'knight',ranged:horde?'troll':'ranger',sniper:horde?'shaman':'ranger',hero:horde?'shaman':'mage'})[type]||null;}
function drawFrontierUnit(e,p,horde){const name=frontierAppearance(e.type,horde),img=frontierSheets[name];if(!img?.complete||!img.naturalWidth)return false;
 const action=e.action&&e.action.until>state.time?e.action:null,walking=e.walkUntil>state.time,phase=action?2:walking?1:0,dir=(Math.round((e.facing||0)/(Math.PI/4))+8)%8;
 const progress=action?1-(action.until-state.time)/action.duration:(state.time+(e.id%8)*.07)*(walking?1.7:.4),frame=action?Math.min(7,Math.max(0,Math.floor(progress*8))):Math.floor(progress*8)%8;
 const width=e.type==='hero'?54:e.type==='melee'?48:42,height=width*4/3;
 ctx.save();if(e.type==='sniper')ctx.filter='saturate(.55) brightness(.8)';
 ctx.drawImage(img,frame*96,(phase*8+dir)*128,96,128,-width/2,-height+13,width,height);ctx.restore();
 if(e.type==='sniper'&&!horde){ctx.save();ctx.rotate(e.facing||0);ctx.fillStyle='#344d60';ctx.fillRect(3,-18,21,4);ctx.fillStyle='#bd995d';ctx.fillRect(2,-17,7,6);ctx.fillStyle='#e1c788';ctx.fillRect(15,-20,6,2);ctx.restore();}
 if(e.type==='worker'){ctx.save();ctx.rotate(e.facing||0);const swing=action?Math.sin(progress*Math.PI)*.9:0;ctx.translate(10,-15);ctx.rotate(-.6+swing);ctx.strokeStyle='#c5a46b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,7);ctx.lineTo(0,-15);ctx.stroke();ctx.fillStyle='#bfccd2';if(action?.kind==='repair'||action?.kind==='build')ctx.fillRect(-5,-16,10,5);else if(e.order?.target?.type==='gold'){ctx.beginPath();ctx.moveTo(-8,-12);ctx.quadraticCurveTo(0,-19,8,-12);ctx.strokeStyle='#d9e4db';ctx.stroke();}else{ctx.beginPath();ctx.moveTo(0,-17);ctx.lineTo(8,-13);ctx.lineTo(7,-6);ctx.lineTo(0,-9);ctx.closePath();ctx.fill();}ctx.restore();}
 // Team pennant stays legible even when using Frontier's original armor colors.
 ctx.fillStyle=p.color;ctx.strokeStyle='#10212a';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-5,-height+11);ctx.lineTo(5,-height+11);ctx.lineTo(0,-height+18);ctx.closePath();ctx.fill();ctx.stroke();
 if(e.hitUntil>state.time){ctx.strokeStyle='#fff0b1';ctx.beginPath();ctx.ellipse(0,-height*.48,13,height*.3,0,0,Math.PI*2);ctx.stroke();}
 if(action&&['melee','worker'].includes(e.type)){ctx.save();ctx.rotate(e.facing||0);ctx.globalAlpha=Math.max(0,Math.sin(progress*Math.PI));ctx.strokeStyle=horde?'#ffba80':'#fff0aa';ctx.lineWidth=2;ctx.beginPath();ctx.arc(2,-8,23,-1.2+progress*2.8,-.4+progress*2.8);ctx.stroke();ctx.restore();}return true;
}
