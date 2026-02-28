/* ===========================
   THE MINER — main.js
=========================== */

// ---- COUNTDOWN TIMERS ----
function pad(n) { return String(n).padStart(2, '0'); }

function updateTimers() {
  const now   = new Date();
  
  // Main banner: counts to midnight
  const midnight = new Date(now);
  midnight.setHours(23, 59, 59, 0);
  const diff = midnight - now;

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const el_h = document.getElementById('hours');
  const el_m = document.getElementById('minutes');
  const el_s = document.getElementById('seconds');
  if (el_h) el_h.textContent = pad(h);
  if (el_m) el_m.textContent = pad(m);
  if (el_s) el_s.textContent = pad(s);

  // Sidebar lightning: fixed 4h 22m offset from now
  const endTime  = new Date(now.getTime() + (4 * 3600 + 22 * 60) * 1000);
  const diff2    = endTime - now;
  const h2 = Math.floor(diff2 / 3600000);
  const m2 = Math.floor((diff2 % 3600000) / 60000);
  const s2 = Math.floor((diff2 % 60000) / 1000);

  const sh = document.getElementById('s-h');
  const sm = document.getElementById('s-m');
  const ss = document.getElementById('s-s');
  if (sh) sh.textContent = pad(h2);
  if (sm) sm.textContent = pad(m2);
  if (ss) ss.textContent = pad(s2);
}

updateTimers();
setInterval(updateTimers, 1000);

// ---- FILTER TAGS ----
document.querySelectorAll('.tag').forEach(function(tag) {
  tag.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.tag').forEach(function(t) {
      t.classList.remove('active');
    });
    tag.classList.add('active');
  });
});

// ---- SCROLL REVEAL (deal cards) ----
(function() {
  var cards = document.querySelectorAll('.deal-card');
  
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    cards.forEach(function(card, i) {
      card.style.animationDelay = (i * 0.06) + 's';
      observer.observe(card);
    });
  } else {
    // Fallback: just show them
    cards.forEach(function(card) {
      card.classList.add('visible');
    });
  }
})();

// ---- MOBILE HAMBURGER ----
(function() {
  var btn = document.getElementById('hamburger');
  var nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function() {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    btn.querySelectorAll('span').forEach(function(s, i) {
      if (isOpen) {
        if (i === 0) s.style.transform = 'translateY(7px) rotate(45deg)';
        if (i === 1) s.style.opacity = '0';
        if (i === 2) s.style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        s.style.transform = '';
        s.style.opacity = '';
      }
    });
  });
})();

// ---- NEWSLETTER ----
(function() {
  var btn = document.querySelector('.newsletter-btn');
  var input = document.querySelector('.newsletter-input');
  if (!btn || !input) return;

  btn.addEventListener('click', function() {
    var email = input.value.trim();
    if (!email || !email.includes('@')) {
      input.style.borderColor = '#E83535';
      input.focus();
      setTimeout(function() { input.style.borderColor = ''; }, 2000);
      return;
    }
    btn.textContent = '✓ You\'re in the crew!';
    btn.style.background = '#4ECDC4';
    btn.style.color = '#0D0D0D';
    btn.disabled = true;
    input.disabled = true;
    input.value = '';
  });
})();

// ---- DEAL CARD CLICK (affiliate link placeholder) ----
document.querySelectorAll('.deal-card').forEach(function(card) {
  card.addEventListener('click', function(e) {
    // In production: replace href with your Amazon affiliate links
    // Example: window.open('https://amzn.to/YOURLINK', '_blank', 'noopener');
    e.preventDefault();
  });
});

console.log('%c⛏ THE MINER', 'color:#F5A623; font-size:24px; font-weight:bold;');
console.log('%cMining the best deals since 2025.', 'color:#8C7B6B; font-size:14px;');
