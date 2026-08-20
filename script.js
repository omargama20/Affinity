
const menuBtn=document.querySelector('.menu-btn');
const mobileNav=document.querySelector('.mobile-nav');
menuBtn?.addEventListener('click',()=>mobileNav.classList.toggle('open'));
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
const openSheet=document.getElementById('openSheet');
const sheet=document.getElementById('sheet');
const closeBtn=document.querySelector('.sheet-close');
const backdrop=document.querySelector('.sheet-backdrop');
const showSheet=()=>{sheet.classList.add('open');sheet.setAttribute('aria-hidden','false')};
const hideSheet=()=>{sheet.classList.remove('open');sheet.setAttribute('aria-hidden','true')};
openSheet?.addEventListener('click',showSheet);
closeBtn?.addEventListener('click',hideSheet);
backdrop?.addEventListener('click',hideSheet);
document.addEventListener('keydown',e=>{if(e.key==='Escape')hideSheet()});
