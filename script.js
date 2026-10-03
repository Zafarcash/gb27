const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');
const tiltTarget = document.querySelector('[data-tilt]');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const syncHeader = () => header?.setAttribute('data-scrolled', window.scrollY > 12 ? 'true' : 'false');
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

if (tiltTarget && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  tiltTarget.addEventListener('pointermove', (event) => {
    const rect = tiltTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltTarget.style.transform = `perspective(900px) rotateY(${x * 2.3}deg) rotateX(${y * -2.3}deg)`;
  });
  tiltTarget.addEventListener('pointerleave', () => {
    tiltTarget.style.transform = '';
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', () => {
    const destination = document.querySelector(anchor.getAttribute('href'));
    if (destination) destination.setAttribute('tabindex', '-1');
  });
});
