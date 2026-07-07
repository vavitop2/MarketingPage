// ===== Menú móvil =====
const burger = document.getElementById('burger');
const mnav = document.getElementById('mnav');
if (burger && mnav) {
  burger.addEventListener('click', () => {
    const open = mnav.classList.toggle('on');
    burger.classList.toggle('on', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  mnav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mnav.classList.remove('on');
      burger.classList.remove('on');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

// ===== Año dinámico =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Reveal on scroll =====
const targets = document.querySelectorAll('.sec-head, .prob__cell, .mod, .bigstat, .matrix__scroll, .proc__step, .ben, .quote, .faq__item, .cta__in, .specs__in');
targets.forEach(el => el.classList.add('rev'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add('in'));
}
