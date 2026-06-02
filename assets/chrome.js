const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">
    <img src="assets/logo-white-clean.png" alt="PreOne">
  </a>
  <ul class="nav-links">
    <li><a href="solution.html">The Problem</a></li>
    <li><a href="technology.html">Technology</a></li>
    <li><a href="who-we-serve.html">Who We Serve</a></li>
    <li><a href="facilities.html">Our Facilities</a></li>
    <li><a href="contact.html" class="nav-cta">Contact Us</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo"><img src="assets/logo-white-clean.png" alt="PreOne"></div>
        <p class="footer-brand-text">Bridging the World of Waste to the World of Polymers. Advanced mechanical recycling technology for a circular plastic economy.</p>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="solution.html">About PreOne</a></li>
          <li><a href="technology.html">Our Technology</a></li>
          <li><a href="facilities.html">Our Facilities</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="who-we-serve.html#mrf">MRF Operators</a></li>
          <li><a href="who-we-serve.html#manufacturers">Packaging Manufacturers</a></li>
          <li><a href="who-we-serve.html#brands">Brand Owners</a></li>
          <li><a href="who-we-serve.html#retailers">Retailers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:t.welsh@preoneglobal.com">t.welsh@preoneglobal.com</a></li>
          <li><a href="contact.html">Partner With Us</a></li>
          <li><a href="https://www.linkedin.com/company/preone-australia" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-legal">© 2026 PreOne Global. All rights reserved.</div>
      <div class="footer-contact">Melbourne &amp; Adelaide, Australia &nbsp;·&nbsp; <a href="mailto:t.welsh@preoneglobal.com">t.welsh@preoneglobal.com</a></div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
  document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
});
