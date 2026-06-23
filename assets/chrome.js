const NAV_HTML = `
<nav>
  <div class="nav-topbar">
    <span>In Australia call <strong>1800 PREONE</strong></span>
    <span>contact@preoneglobal.com</span>
  </div>
  <div class="nav-main">
    <a href="index.html" class="nav-logo">
      <img src="assets/logo-dark-transparent.png" alt="PreOne">
    </a>
    <ul class="nav-links">
      <li><a href="packaging-solutions.html">Packaging Solutions</a></li>
      <li><a href="sustainable-polymers.html">Sustainable Polymers</a></li>
      <li><a href="feedstock.html">Feedstock</a></li>
      <li><a href="investors.html">Investors</a></li>
      <li><a href="technical-support.html">Technical Support</a></li>
      <li><a href="members-portal.html">Members Portal</a></li>
      <li><a href="contact.html" class="nav-cta">Contact Us</a></li>
    </ul>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-main">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo"><img src="assets/logo-white-transparent.png" alt="PreOne"></div>
          <p class="footer-brand-text">Australian polymers thoughtfully made. Bridging the world of waste to the world of polymers.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/preone-australia" target="_blank" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="packaging-solutions.html">Packaging Solutions</a></li>
            <li><a href="sustainable-polymers.html">Sustainable Polymers</a></li>
            <li><a href="feedstock.html">Feedstock</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="investors.html">Investors</a></li>
            <li><a href="investors.html#investment">Invest With Us</a></li>
            <li><a href="contact.html">Partner With Us</a></li>
            <li><a href="technical-support.html">Technical Support</a></li>
            <li><a href="members-portal.html">Members Portal</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:1800773663">1800 PREONE</a></li>
            <li><a href="mailto:contact@preoneglobal.com">contact@preoneglobal.com</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom-bar">
    <div class="footer-inner">
      <div class="footer-bottom">
        <div class="footer-legal">© 2026 PreOne Australia Pty Ltd.</div>
        <div class="footer-legal-links">
          <a href="#">Legal</a>
          <a href="#">Media</a>
          <a href="#">Privacy Statement</a>
          <a href="#">Cookie Settings</a>
        </div>
        <div class="footer-follow">
          Follow Us
          <a href="https://www.linkedin.com/company/preone-australia" target="_blank" class="social-icon-sm">in</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
  document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;

  // Active nav
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Page dots
  const dots = document.querySelectorAll('.page-dot');
  const sections = Array.from(document.querySelectorAll('section[id],.page-hero[id],.hero[id]'));
  function updateDots() {
    let cur = 0;
    sections.forEach((s,i) => { if (window.scrollY >= s.offsetTop - 200) cur = i; });
    dots.forEach((d,i) => d.classList.toggle('active', i === cur));
  }
  dots.forEach((d,i) => d.addEventListener('click', () => sections[i]?.scrollIntoView({behavior:'smooth'})));
  if (dots.length) { window.addEventListener('scroll', updateDots, {passive:true}); updateDots(); }
});
