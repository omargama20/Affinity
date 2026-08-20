
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menu=document.querySelector('.menu-btn');
const mobile=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>mobile.classList.toggle('open'));
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));

const bubble=document.getElementById('channelBubble');
const sheet=document.getElementById('channelSheet');
const close=document.querySelector('.sheet-close');
const backdrop=document.querySelector('.sheet-backdrop');
const openSheet=()=>{sheet.classList.add('open');sheet.setAttribute('aria-hidden','false')};
const closeSheet=()=>{sheet.classList.remove('open');sheet.setAttribute('aria-hidden','true')};
bubble?.addEventListener('click',openSheet);
close?.addEventListener('click',closeSheet);
backdrop?.addEventListener('click',closeSheet);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet()});
