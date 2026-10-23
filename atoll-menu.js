/* Browser-only preset selection and resource-rich preview. */
(()=>{
 for(const key of Object.keys(KawAtoll.presets).reverse()){
 const d=mapDefinitions[key],card=document.createElement('button');card.className='map-card';card.dataset.map=key;
 const canvas=document.createElement('canvas');canvas.className='map-preview';canvas.width=360;canvas.height=270;canvas.setAttribute('aria-label',d.description);card.append(canvas);
 const heading=document.createElement('h2');heading.textContent=d.name;card.append(heading);const text=document.createElement('p');text.textContent=d.description;card.append(text);card.onclick=()=>chooseMap(key);document.querySelector('.map-options').prepend(card);
 const option=document.createElement('option');option.value=key;option.textContent=d.name;$('mpMap').prepend(option);
 function preview(){const previous=state;try{state={map:key,rivers:makeRivers(key),entities:[],resources:[],mountains:[],plateaus:[],wallVersion:0,blockCache:{}};populateResources(KawAtoll.lanes.map(l=>[l.home.x,l.home.y]));const g=canvas.getContext('2d');g.setTransform(canvas.width/SIZE,0,0,canvas.height/SIZE,0,0);KawAtoll.paint(g,true);for(const r of state.resources){g.fillStyle=r.type==='gold'?'#ffdd6b':'#163c25';g.beginPath();g.arc(r.x,r.y,r.type==='gold'?27:16,0,Math.PI*2);g.fill();}for(const l of KawAtoll.lanes){g.strokeStyle='#fff1c7';g.lineWidth=10;g.beginPath();g.arc(l.home.x,l.home.y,50,0,Math.PI*2);g.stroke();}g.setTransform(1,0,0,1,0,0);}finally{state=previous;}}
 const old=renderMapPreviews;renderMapPreviews=function(){old();preview();};preview();
 }
})();
