/* Uncountable 3.0 marketing home page — vanilla JS interactions.
   No framework, no build step. Mirrors the Claude Design prototype's
   behavior (mega nav, customer marquee, testimonials rotation, stats
   reveal) without pulling in React/GSAP as runtime dependencies. */
(function () {
  'use strict';

  /* ---------- Sticky nav: scrolled shadow + mega menu ---------- */
  var nav = document.getElementById('siteNav');
  var backdrop = document.getElementById('navBackdrop');
  var tabs = Array.prototype.slice.call(nav.querySelectorAll('.nav-tab'));
  var panels = Array.prototype.slice.call(nav.querySelectorAll('.nav-panel'));

  function closeAllPanels() {
    tabs.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
    panels.forEach(function (p) { p.classList.remove('is-open'); });
    nav.classList.remove('is-open');
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.getAttribute('data-panel');
      var willOpen = tab.getAttribute('aria-expanded') !== 'true';
      closeAllPanels();
      if (willOpen) {
        tab.setAttribute('aria-expanded', 'true');
        var panel = panels.filter(function (p) { return p.getAttribute('data-panel') === key; })[0];
        if (panel) panel.classList.add('is-open');
        nav.classList.add('is-open');
      }
    });
  });
  backdrop.addEventListener('click', closeAllPanels);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAllPanels(); });

  function onScroll() {
    if (window.scrollY > 8) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Carousel arrow buttons (Solutions / Resources) ---------- */
  Array.prototype.slice.call(document.querySelectorAll('[data-scroll]')).forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.getAttribute('data-scroll'));
      var dir = parseInt(btn.getAttribute('data-dir'), 10);
      if (track) track.scrollBy({ left: dir * track.clientWidth * 0.6, behavior: 'smooth' });
    });
  });

  /* ---------- Testimonials: auto-rotate + tabs + progress ---------- */
  var TESTIMONIALS = [
    { tab: 'HALENDZA', quote: 'Uncountable replaced a dozen spreadsheets. Our chemists run fewer, smarter experiments and the model tells us where to look next.', name: 'Dana Lee', role: 'VP of R&D, Halendza', avatar: 'assets/dana-lee.png', stat: '+62%', statDesc: 'Increase in experiment throughput in the first year.' },
    { tab: 'NOVARA', quote: 'We hit spec on a two-year-old formulation problem in eleven runs. The recommendations pointed at an interaction nobody had tried.', name: 'Marta Ruiz', role: 'Director of Formulation, Novara', avatar: null, stat: '−40%', statDesc: 'Fewer experiments to reach spec on new programs.' },
    { tab: 'POLYFORM', quote: 'Every result from every site lands in one model. Our teams stopped re-running each other’s experiments within the first quarter.', name: 'James Okafor', role: 'Head of Materials Science, Polyform', avatar: null, stat: '3×', statDesc: 'Faster from concept to formulation lock.' },
    { tab: 'CELTEK', quote: 'Rollout took weeks, not quarters. The lab teams actually like it — capture happens in the workflow, not after hours.', name: 'Priya Anand', role: 'CTO, Celtek', avatar: null, stat: '12', statDesc: 'R&D sites running on one shared platform.' }
  ];
  var ROTATE_MS = 15000;
  var active = 0;
  var timer = null;

  var panelEl = document.getElementById('testiPanel');
  var quoteText = document.getElementById('testiQuoteText');
  var nameEl = document.getElementById('testiName');
  var roleEl = document.getElementById('testiRole');
  var statEl = document.getElementById('testiStat');
  var statDescEl = document.getElementById('testiStatDesc');
  var avatarImg = document.getElementById('testiAvatarImg');
  var avatarFallback = document.getElementById('testiAvatarFallback');
  var tabEls = Array.prototype.slice.call(document.querySelectorAll('.testi-tab'));

  function initials(name) {
    return name.split(' ').map(function (p) { return p[0]; }).filter(Boolean).slice(0, 2).join('').toUpperCase();
  }

  function renderProgress() {
    tabEls.forEach(function (tab, i) {
      var bar = document.getElementById('testiProgress' + i);
      bar.classList.remove('is-running');
      // force reflow so the animation restarts cleanly
      void bar.offsetWidth;
      if (i === active) bar.classList.add('is-running');
      else bar.style.width = '0';
    });
  }

  function applyContent() {
    var t = TESTIMONIALS[active];
    quoteText.textContent = t.quote;
    nameEl.textContent = t.name;
    roleEl.innerHTML = t.role.replace('R&D', 'R&amp;D');
    statEl.textContent = t.stat;
    statDescEl.textContent = t.statDesc;
    if (t.avatar) {
      avatarImg.src = t.avatar;
      avatarImg.alt = t.name;
      avatarImg.hidden = false;
      avatarFallback.hidden = true;
      avatarFallback.style.display = 'none';
    } else {
      avatarImg.hidden = true;
      avatarFallback.hidden = false;
      avatarFallback.textContent = initials(t.name);
      avatarFallback.style.display = 'flex';
    }
    tabEls.forEach(function (tab, i) {
      var isActive = i === active;
      tab.classList.toggle('testi-tab-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    renderProgress();
  }

  function goTo(i, userInitiated) {
    if (i === active && userInitiated) return;
    active = i;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      applyContent();
    } else {
      panelEl.classList.add('is-switching');
      setTimeout(function () {
        applyContent();
        panelEl.classList.remove('is-switching');
      }, 220);
    }
    if (timer) clearInterval(timer);
    timer = setInterval(function () { goTo((active + 1) % TESTIMONIALS.length, false); }, ROTATE_MS);
  }

  tabEls.forEach(function (tab, i) {
    tab.addEventListener('click', function () { goTo(i, true); });
  });

  applyContent();
  timer = setInterval(function () { goTo((active + 1) % TESTIMONIALS.length, false); }, ROTATE_MS);

  /* ---------- Stats row: stagger-reveal on scroll (once) ---------- */
  var statsRow = document.getElementById('statsRow');
  if ('IntersectionObserver' in window && statsRow) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          statsRow.classList.add('is-visible');
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(statsRow);
  } else if (statsRow) {
    statsRow.classList.add('is-visible');
  }
})();
