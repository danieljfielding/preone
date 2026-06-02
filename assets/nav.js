// Shared nav + scroll reveal script
document.addEventListener('DOMContentLoaded', function() {
  // Active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(el => revealObserver.observe(el));

  // Page dots
  const dots = document.querySelectorAll('.page-dot');
  const sections = Array.from(document.querySelectorAll('section[id], .page-hero[id]'));
  function updateDots() {
    let current = 0;
    sections.forEach((s, i) => {
      if (window.scrollY >= s.offsetTop - 180) current = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  if (dots.length) window.addEventListener('scroll', updateDots, { passive: true });
  updateDots();

  // Smooth scroll for page dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (sections[i]) sections[i].scrollIntoView({ behavior: 'smooth' });
    });
  });
});
