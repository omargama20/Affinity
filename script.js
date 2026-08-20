
const menuBtn=document.querySelector('.menu-btn');
const mobileNav=document.querySelector('.mobile-nav');
menuBtn?.addEventListener('click',()=>mobileNav.classList.toggle('open'));
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
const openChannels=document.getElementById('openChannels');
const sheet=document.getElementById('channelSheet');
const closeBtn=document.querySelector('.sheet-close');
const backdrop=document.querySelector('.sheet-backdrop');
const showSheet=()=>{sheet.classList.add('open');sheet.setAttribute('aria-hidden','false')};
const hideSheet=()=>{sheet.classList.remove('open');sheet.setAttribute('aria-hidden','true')};
openChannels?.addEventListener('click',showSheet);
closeBtn?.addEventListener('click',hideSheet);
backdrop?.addEventListener('click',hideSheet);
document.addEventListener('keydown',e=>{if(e.key==='Escape')hideSheet()});
const g=document.getElementById('candleChart');
if(g){
  const data=[72,84,78,96,102,110,103,118,114,129,122,136,141,145,152,150,158,164,160,168];
  data.forEach((d,i)=>{
    const x=12+i*14;
    const o=d+(i%3===0?10:-6), c=d+(i%2===0?8:-7), hi=Math.max(o,c)+10, lo=Math.min(o,c)-10;
    const line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x); line.setAttribute('x2',x); line.setAttribute('y1',160-hi); line.setAttribute('y2',160-lo);
    line.setAttribute('stroke', c>o ? '#17a34a' : '#df5356'); line.setAttribute('stroke-width','2');
    const rect=document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x',x-4); rect.setAttribute('width',8); rect.setAttribute('y',160-Math.max(o,c)); rect.setAttribute('height',Math.max(8,Math.abs(o-c)));
    rect.setAttribute('rx','2'); rect.setAttribute('fill', c>o ? '#17a34a' : '#df5356');
    g.append(line,rect);
  });
}
