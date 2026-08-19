
// Smooth reveals
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Hero candlesticks
const group = document.getElementById('candleGroup');
if(group){
  const closes=[220,248,230,278,265,292,270,246,262,235,227,250,287,273,301,286,319,300,336,321,355,338,371,350,392,370,414,398];
  closes.forEach((v,i)=>{
    const x = 90 + i*25;
    const open = v + (i%3===0 ? 18 : -11);
    const close = v + (i%4===0 ? -15 : 14);
    const hi = Math.max(open,close)+22;
    const lo = Math.min(open,close)-24;
    const c = i%3===0 ? '#9d2dff' : (i%2===0 ? '#008cff' : '#5a53ff');
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x);line.setAttribute('x2',x);line.setAttribute('y1',470-hi);line.setAttribute('y2',470-lo);
    line.style.stroke=c;
    const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x',x-5);rect.setAttribute('width',10);rect.setAttribute('y',470-Math.max(open,close));
    rect.setAttribute('height',Math.max(7,Math.abs(open-close)));rect.style.fill=c;rect.style.opacity='.92';
    group.append(line,rect);
  });
}

// Card tilt desktop only
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    if(innerWidth < 900) return;
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1000px) rotateY(${x*3.2}deg) rotateX(${-y*3.2}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

// Mobile nav
const menuBtn=document.querySelector('.mobile-menu');
const drawer=document.querySelector('.mobile-drawer');
if(menuBtn && drawer){
  menuBtn.addEventListener('click',()=>{
    const open=drawer.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
  });
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));
}

// Floating channel bubble
const bubble=document.getElementById('channelBubble');
const modal=document.getElementById('channelModal');
const closeBtn=document.querySelector('.modal-close');
const backdrop=document.querySelector('.modal-backdrop');
function openModal(){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
bubble?.addEventListener('click',openModal);
closeBtn?.addEventListener('click',closeModal);
backdrop?.addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
