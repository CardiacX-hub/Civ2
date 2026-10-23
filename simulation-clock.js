/* A bounded 20 Hz RTS simulation clock. Rendering stays at the display rate.
 * One update per frame prevents catch-up spirals on a struggling device. */
(function(root){
 'use strict';
 class FixedSimulationClock{
  constructor(){this.state=null;this.remainder=0;}
  reset(state){this.state=state;this.remainder=0;}
  advance(state,dt,step){
   if(this.state!==state)this.reset(state);
   if(!Number.isFinite(dt)||dt<=0)return false;
   this.remainder=Math.min(.1,this.remainder+dt);
   if(this.remainder+1e-9<.05)return false;
   this.remainder=Math.max(0,this.remainder-.05);
   step(.05);return true;
  }
 }
 if(typeof module==='object'&&module.exports)module.exports=FixedSimulationClock;
 else root.KawFixedClock=FixedSimulationClock;
})(globalThis);
