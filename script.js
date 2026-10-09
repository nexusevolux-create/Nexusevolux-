// ANTES DE PUBLICAR: troca pelo teu WhatsApp com indicativo do país, só dígitos.
// Exemplo de formato: 2449XXXXXXXX
const WHATSAPP_NUMBER = "SUBSTITUIR_PELO_TEU_NUMERO";
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }));
const wa = document.getElementById('whatsapp-link');
wa.addEventListener('click', e => { if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) { e.preventDefault(); alert('Antes de publicar, abre script.js e substitui WHATSAPP_NUMBER pelo teu número com indicativo do país.'); return; } wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, NexusEvolux! Gostaria de conversar sobre um projeto digital.')}`; });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const progress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${max > 0 ? scrollY/max*100 : 0}%`; }, {passive:true});
const art = document.querySelector('.hero-art'); if (matchMedia('(pointer:fine)').matches) { art.addEventListener('mousemove', e => { const r=art.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5; art.querySelector('.core').style.transform=`translate(${x*12}px,${y*12}px) rotateY(${x*12}deg)`; }); art.addEventListener('mouseleave',()=>art.querySelector('.core').style.transform=''); }
