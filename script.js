/* ============================================================
   John Paul Bantillo — Portfolio interactions
   ============================================================ */
(function () {
  'use strict';

  // Current year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Navbar background on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
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

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = links ? links.querySelectorAll('a') : [];
  navAnchors.forEach((a) => {
    const target = new URL(a.getAttribute('href'), window.location.href);
    const isCurrentPage =
      target.pathname === window.location.pathname ||
      (target.pathname.endsWith('/index.html') && window.location.pathname.endsWith('/'));
    a.classList.toggle('current', isCurrentPage && !target.hash);
  });

  if (sections.length && navAnchors.length) {
    const spyIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navAnchors.forEach((a) => {
              const target = new URL(a.getAttribute('href'), window.location.href);
              const samePage = target.pathname === window.location.pathname;
              a.classList.toggle('active', samePage && target.hash === '#' + id);
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => spyIO.observe(s));
  }
})();
