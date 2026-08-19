// Visual-only chart bars + interactions. No dependencies.
const bars = document.getElementById('bars');
if (bars) {
  const vals=[286,302,278,323,314,346,331,299,311,287,274,301,333,320,347,329,356,344,370,351,382,367,392,378,405,390,421,403];
  vals.forEach((v,i)=>{
    const x=70+i*24, open=v+(i%3===0?18:-10), close=v+(i%4===0?-14:14), hi=Math.max(open,close)+22, lo=Math.min(open,close)-24;
    const line=document.createElementNS('http://www.w3.org/2000/svg','line'); line.setAttribute('x1',x);line.setAttribute('x2',x);line.setAttribute('y1',430-hi);line.setAttribute('y2',430-lo);
    const rect=document.createElementNS('http://www.w3.org/2000/svg','rect'); rect.setAttribute('x',x-5);rect.setAttribute('y',430-Math.max(open,close));rect.setAttribute('width',10);rect.setAttribute('height',Math.max(8,Math.abs(open-close)));rect.setAttribute('rx',2);
    const rising=close>open; const c=rising?(i%2?'#6272ff':'#168cff'):'#8b3cff'; line.style.stroke=c;rect.style.fill=c;rect.style.opacity=.9;
    bars.append(line,rect);
  });
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const counters=document.querySelectorAll('.counter');const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.target;let s=0;const start=performance.now();const tick=t=>{const p=Math.min(1,(t-start)/900);el.textContent=Math.round(target*(1-Math.pow(1-p,3))).toLocaleString('en-US');if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);cio.unobserve(el)}),{threshold:.6});counters.forEach(c=>cio.observe(c));
document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('mousemove',e=>{if(innerWidth<900)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${-y*4}deg) translateY(-3px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});
const toast=document.getElementById('toast');document.querySelectorAll('[data-needs-link]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2300)}));