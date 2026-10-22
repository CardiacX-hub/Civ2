/* Original score, synthesized once into looping audio buffers. No downloads,
 * per-frame oscillators, external music services or third-party compositions. */
(()=>{
 const beat=60/92,bars=8,length=bars*4*beat;
 async function compose(combat){const Offline=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!Offline)return null;const c=new Offline(2,Math.ceil(length*22050),22050),master=c.createGain();master.gain.value=.38;master.connect(c.destination);const echo=c.createDelay(1),feedback=c.createGain();echo.delayTime.value=beat*.75;feedback.gain.value=.23;echo.connect(feedback).connect(echo);echo.connect(master);
 function note(midi,at,duration,amount,type='triangle',pad=false){const o=c.createOscillator(),g=c.createGain(),filter=c.createBiquadFilter();o.type=type;o.frequency.value=440*2**((midi-69)/12);filter.type='lowpass';filter.frequency.value=pad?900:combat?2400:1700;g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime(amount,at+Math.min(.18,duration*.18));g.gain.setTargetAtTime(.0001,at+duration*.65,Math.max(.03,duration*.12));o.connect(filter).connect(g);g.connect(master);if(!pad)g.connect(echo);o.start(at);o.stop(Math.min(length,at+duration));}
 const progression=[[45,52,57,60],[41,48,53,57],[48,55,60,64],[43,50,55,62],[45,52,59,60],[41,48,55,57],[38,45,53,57],[43,50,55,59]],melody=[0,2,3,2,1,3,2,1];
 for(let bar=0;bar<bars;bar++){const chord=progression[bar],at=bar*4*beat;for(const pitch of chord)note(pitch+12,at,4*beat,.06,'sawtooth',true);note(chord[0]-12,at,3.7*beat,.25,'sine');for(let step=0;step<8;step++){const pitch=chord[(step+bar)%4]+(step%4===3?24:12);note(pitch,at+step*beat*.5,.7*beat,combat?.075:.04,'triangle');}for(let step=0;step<4;step++)if(step!==1||bar%2)note(chord[melody[(bar+step)%8]],at+step*beat,beat*(step===3?.85:1.3),.11,combat?'sawtooth':'triangle');
 if(combat)for(let step=0;step<4;step++){const t=at+step*beat,o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(step%2?170:100,t);o.frequency.exponentialRampToValueAtTime(35,t+.16);g.gain.setValueAtTime(.22,t);g.gain.exponentialRampToValueAtTime(.0001,t+.22);o.connect(g).connect(master);o.start(t);o.stop(t+.24);}
 }
 const buffer=await c.startRendering();for(let ch=0;ch<buffer.numberOfChannels;ch++){const data=buffer.getChannelData(ch),fade=Math.floor(.025*buffer.sampleRate);for(let i=0;i<fade;i++){data[i]*=i/fade;data[data.length-1-i]*=i/fade;}}return buffer;
 }
 function create(audio){const calm=audio.createGain(),battle=audio.createGain();calm.gain.value=battle.gain.value=0;calm.connect(audio.destination);battle.connect(audio.destination);let sources=[],last={enabled:false,volume:0,combat:false};const ready=Promise.all([compose(false),compose(true)]).then(buffers=>{for(const [i,b]of buffers.entries()){if(!b)continue;const s=audio.createBufferSource();s.buffer=b;s.loop=true;s.connect(i?battle:calm);s.start(audio.currentTime+.05);sources.push(s);}set(last);}).catch(()=>{});
 function set(settings){last=settings;const amount=settings.enabled?settings.volume:0;calm.gain.setTargetAtTime(amount*(settings.combat?.27:.8),audio.currentTime,.8);battle.gain.setTargetAtTime(amount*(settings.combat?.8:0),audio.currentTime,.8);}
 return {set,ready,get tracks(){return sources.length;},dispose(){for(const s of sources){s.stop();s.disconnect();}sources=[];calm.disconnect();battle.disconnect();}};
 }
 window.KawScore={create};
})();
