/* ============================================================
   John Paul Bantillo — Portfolio interactions
   ============================================================ */
(function () {
  'use strict';

  // Current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Navbar background on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cursor-following glow (desktop, pointer devices only)
  const glow = document.getElementById('cursorGlow');
  if (glow && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    const render = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(render);
      else raf = null;
    };
    window.addEventListener('mousemove', (e) => {
      tx = e.clientX; ty = e.clientY; glow.style.opacity = '1';
      if (!raf) raf = requestAnimationFrame(render);
    }, { passive: true });
  }

  // Typing effect for the role line
  const typed = document.getElementById('typed');
  if (typed && !reduceMotion) {
    const roles = ['Web & Mobile Developer', 'SEO Specialist', 'AR / Unity Developer', 'Virtual Assistant', 'Customer Support Pro'];
    let r = 0, i = 0, deleting = false;
    const tick = () => {
      const word = roles[r];
      typed.textContent = word.slice(0, i);
      if (!deleting && i < word.length) { i++; setTimeout(tick, 70); }
      else if (!deleting && i === word.length) { deleting = true; setTimeout(tick, 1700); }
      else if (deleting && i > 0) { i--; setTimeout(tick, 35); }
      else { deleting = false; r = (r + 1) % roles.length; setTimeout(tick, 240); }
    };
    setTimeout(tick, 1400);
  }

  // Reveal-on-scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => io.observe(el));

  // Animate skill bars when in view
  const barsWrap = document.querySelector('.bars');
  if (barsWrap) {
    const barIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar').forEach((b) => b.classList.add('animate'));
            barIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    barIO.observe(barsWrap);
  }

  // Count-up stats
  const counters = document.querySelectorAll('.stat-num');
  const countIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const isYear = target > 1900;
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = Math.round(eased * target);
          el.textContent = isYear ? String(val) : val.toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = isYear ? String(target) : target.toLocaleString();
        };
        requestAnimationFrame(step);
        countIO.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => countIO.observe(c));

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = links.querySelectorAll('a');
  const spyIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchors.forEach((a) =>
            a.classList.toggle('active', a.getAttribute('href') === '#' + id)
          );
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => spyIO.observe(s));
})();
