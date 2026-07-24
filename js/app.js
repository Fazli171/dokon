(function () {
  'use strict';

  /* =========================================================
     COURSES DATA
     Structured so this array can later be replaced by a fetch()
     call to the future admin/backend API, e.g.:
       const COURSES = await fetch('/api/courses').then(r => r.json());
     Each object shape mirrors what the API is expected to return.
  ========================================================= */
  const COURSES = [
    {
      id: 'president-tayyorlov',
      title: 'Prezident maktabiga tayyorlov',
      description: 'Prezident maktabi qabul imtihonlariga maxsus dastur asosida tayyorgarlik.',
      icon: 'school',
      color: '#173EB5',
      link: '#'
    },
    {
      id: 'alxorazmiy-tayyorlov',
      title: 'Al-Xorazmiy maktabiga tayyorlov',
      description: 'Al-Xorazmiy nomidagi maktab uchun ixtisoslashtirilgan tayyorgarlik kursi.',
      icon: 'building',
      color: '#2C6BE0',
      link: '#'
    },
    {
      id: 'ixtisoslashtirilgan-tayyorlov',
      title: 'Ixtisoslashtirilgan maktablar uchun tayyorlov',
      description: 'Turli ixtisoslashtirilgan maktablar qabul talablariga mos kompleks tayyorgarlik.',
      icon: 'target',
      color: '#0EA5A5',
      link: '#'
    },
    {
      id: 'tanqidiy-fikrlash',
      title: 'Tanqidiy fikrlash darslari',
      description: 'Mantiqiy va tanqidiy fikrlash ko‘nikmalarini rivojlantiruvchi mashg‘ulotlar.',
      icon: 'brain',
      color: '#7C3AED',
      link: '#'
    },
    {
      id: 'ingliz-tili',
      title: 'Ingliz tili',
      description: 'Prezident va ixtisoslashtirilgan maktablar uchun ingliz tili dasturi.',
      icon: 'language',
      color: '#7C3AED',
      link: '#'
    },
    {
      id: 'milliy-sertifikat',
      title: 'Milliy sertifikatga tayyorlov',
      description: 'Milliy sertifikat imtihoniga to‘liq mos keluvchi tayyorgarlik dasturi.',
      icon: 'certificate',
      color: '#DC6803',
      link: '#'
    },
    {
      id: 'sat-mathematics',
      title: 'SAT Mathematics kurslari',
      description: 'Xalqaro SAT imtihonining matematika bo‘limiga ixtisoslashgan kurs.',
      icon: 'calculator',
      color: '#173EB5',
      link: '#'
    },
    {
      id: 'chuqurlashtirilgan-matematika',
      title: 'Chuqurlashtirilgan matematika guruhlari',
      description: 'Matematikani chuqur o‘rganishni istagan o‘quvchilar uchun maxsus guruhlar.',
      icon: 'calculator',
      color: '#16A34A',
      link: '#'
    },
    {
      id: 'olimpiada-tayyorlov',
      title: 'Olimpiadalarga professional tayyorlov',
      description: 'Respublika va xalqaro olimpiadalarga professional darajada tayyorgarlik.',
      icon: 'trophy',
      color: '#CA8A04',
      link: '#'
    }
  ];

  const ICONS = {
    school: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 9 12 4 2 9l10 5 10-5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" stroke="currentColor" stroke-width="1.7"/></svg>',
    building: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" stroke-width="1.7"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    target: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
    brain: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 4.5a3 3 0 0 0-3 3v1a3 3 0 0 0-1.5 5.6A3 3 0 0 0 7 18.5 3 3 0 0 0 9 19.5V4.5Zm6 0a3 3 0 0 1 3 3v1a3 3 0 0 1 1.5 5.6A3 3 0 0 1 17 18.5a3 3 0 0 1-2 1v-15Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    language: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h9M8.5 4v2.4C8.5 10 6.5 13 3.5 15" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M5 11c1.6 2.2 4 3.6 6.5 4.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="m14 20 4-9 4 9M15.3 17h5.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    certificate: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" stroke="currentColor" stroke-width="1.7"/><path d="M8.5 14 7 21l5-2.5L17 21l-1.5-7" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    calculator: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 7h8M8 11h1M11.5 11h1M15 11h1M8 15h1M11.5 15h1M15 15h1M8 18.5h1M11.5 18.5h1M15 18.5h1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    trophy: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M12 14v3M9 20h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
  };

  /* -------------------- Render courses -------------------- */
  function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;
    grid.innerHTML = COURSES.map((course) => `
      <article class="course-card" data-course-id="${course.id}">
        <span class="course-icon" style="background:${course.color}">${ICONS[course.icon] || ''}</span>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <a href="${course.link}" class="btn btn-outline course-more">Batafsil</a>
      </article>
    `).join('');
  }

  /* -------------------- Header scroll state + active nav -------------------- */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8 ? '0 4px 16px rgba(16,24,43,0.08)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initNavActiveState() {
    const links = document.querySelectorAll('[data-nav]');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        links.forEach((l) => l.classList.remove('is-active'));
        link.classList.add('is-active');
      });
    });
  }

  /* -------------------- Mobile nav -------------------- */
  function initMobileNav() {
    const btn = document.getElementById('hamburgerBtn');
    const panel = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileNavOverlay');
    if (!btn || !panel || !overlay) return;

    const close = () => {
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      panel.classList.remove('is-open');
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    const open = () => {
      btn.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      panel.classList.add('is-open');
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    btn.addEventListener('click', () => {
      if (panel.classList.contains('is-open')) close(); else open();
    });
    overlay.addEventListener('click', close);
    panel.querySelectorAll('[data-nav-mobile]').forEach((link) => {
      link.addEventListener('click', close);
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* -------------------- Hero slider -------------------- */
  function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;
    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const dotsWrap = document.getElementById('heroDots');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    let current = 0;
    let timer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Slayd ' + (i + 1));
      if (i === 0) dot.classList.add('is-active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function goTo(index) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
      resetTimer();
    }

    function resetTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 6000);
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    slider.addEventListener('mouseenter', () => timer && clearInterval(timer));
    slider.addEventListener('mouseleave', resetTimer);

    resetTimer();
  }

  /* -------------------- Login modal -------------------- */
  function initLoginModal() {
    const overlay = document.getElementById('loginOverlay');
    const openBtn = document.getElementById('loginOpenBtn');
    const closeBtn = document.getElementById('loginCloseBtn');
    const form = document.getElementById('loginForm');
    if (!overlay || !openBtn || !closeBtn) return;

    const open = () => {
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      const firstField = form.querySelector('input');
      if (firstField) firstField.focus();
    };
    const close = () => {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    /* Placeholder submit handler.
       Backend engineer should replace this with a real POST request to the
       auth endpoint, e.g. POST /api/auth/login { identifier, password }.
       The API is expected to determine the user's role server-side and
       redirect to the correct dashboard (Super Admin / Admin / O'qituvchi /
       O'quvchi / Ota-ona / Buxgalter / Menejer) — the role is never chosen
       on the frontend. */
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Login submit — connect this to the backend auth API.');
      close();
    });
  }

  function initFooterYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    initHeaderScroll();
    initNavActiveState();
    initMobileNav();
    initHeroSlider();
    initLoginModal();
    initFooterYear();
  });
})();
