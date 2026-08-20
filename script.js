
const menuBtn=document.querySelector('.menu-btn');
const mobileNav=document.querySelector('.mobile-nav');
menuBtn?.addEventListener('click',()=>mobileNav.classList.toggle('open'));
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
const openBtn=document.getElementById('openChannels');
const sheet=document.getElementById('sheet');
const close=document.querySelector('.close');
const backdrop=document.querySelector('.backdrop');
const openSheet=()=>{sheet.classList.add('open');sheet.setAttribute('aria-hidden','false')};
const closeSheet=()=>{sheet.classList.remove('open');sheet.setAttribute('aria-hidden','true')};
openBtn?.addEventListener('click',openSheet); close?.addEventListener('click',closeSheet); backdrop?.addEventListener('click',closeSheet); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet()});
const g=document.getElementById('heroCandles');
if(g){const data=[72,84,80,94,98,110,104,116,122,118,130,136,140,144,142,149,154,156];data.forEach((d,i)=>{const x=18+i*16; const o=d+(i%3===0?8:-5); const c=d+(i%2===0?7:-6); const hi=Math.max(o,c)+10; const lo=Math.min(o,c)-10; const color=c>o?'#16a34a':'#e05a59'; const line=document.createElementNS('http://www.w3.org/2000/svg','line'); line.setAttribute('x1',x); line.setAttribute('x2',x); line.setAttribute('y1',160-hi); line.setAttribute('y2',160-lo); line.setAttribute('stroke',color); line.setAttribute('stroke-width','2'); const rect=document.createElementNS('http://www.w3.org/2000/svg','rect'); rect.setAttribute('x',x-4); rect.setAttribute('width',8); rect.setAttribute('y',160-Math.max(o,c)); rect.setAttribute('height',Math.max(8,Math.abs(o-c))); rect.setAttribute('fill',color); rect.setAttribute('rx','2'); g.append(line,rect);});}
