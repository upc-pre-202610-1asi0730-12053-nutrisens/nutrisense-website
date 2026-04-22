/**
 * @fileoverview NutriSense main script.
 * Bootstraps all interactive modules: navigation, hero carousel, FAQ accordion, and contact form.
 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
  initNav();
  initCarousel();
  initFAQ();
  initContactForm();
});

/* ============================================================
   NAVIGATION
   ============================================================ */

/**
 * Initialises the responsive navigation bar.
 * Handles hamburger toggle, overlay backdrop, drawer close button,
 * link-click dismissal, and active-link highlighting based on the current page.
 * @returns {void}
 */
function initNav() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  const overlay    = document.querySelector('.navbar__overlay');
  if (!hamburger || !mobileMenu) return;

  /**
   * Opens the mobile navigation drawer and locks body scroll.
   * @returns {void}
   */
  function openMenu() {
    mobileMenu.classList.add('is-open');
    overlay?.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Closes the mobile navigation drawer and restores body scroll.
   * @returns {void}
   */
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    overlay?.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  mobileMenu.querySelector('.navbar__mobile-close')?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .navbar__mobile a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ============================================================
   HERO CAROUSEL
   ============================================================ */

/**
 * Initialises the hero carousel with auto-play, manual navigation,
 * dot indicators, touch/swipe support, hover pause, and keyboard control.
 * @returns {void}
 */
function initCarousel() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const track     = hero.querySelector('.hero__track');
  const slides    = hero.querySelectorAll('.hero__slide');
  const dots      = hero.querySelectorAll('.hero__dot');
  const btnPrev   = hero.querySelector('.hero__btn--prev');
  const btnNext   = hero.querySelector('.hero__btn--next');

  if (!track || slides.length === 0) return;

  /** @type {number} Index of the currently visible slide. */
  let current  = 0;

  /** @type {number|null} Handle for the auto-play interval timer. */
  let autoTimer = null;

  /** @type {number} Milliseconds between automatic slide transitions. */
  const INTERVAL = 6000;

  /**
   * Transitions the carousel to the given slide index.
   * Wraps around both ends and updates ARIA attributes and dot indicators.
   * @param {number} index - Target slide index (may be out of bounds; will wrap).
   * @returns {void}
   */
  function goTo(index) {
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current]?.classList.remove('is-active');

    current = (index + slides.length) % slides.length;

    track.style.transform = `translateX(-${current * 100}%)`;
    slides[current].setAttribute('aria-hidden', 'false');
    dots[current]?.classList.add('is-active');
    dots[current]?.setAttribute('aria-current', 'true');
    dots.forEach((d, i) => { if (i !== current) d.removeAttribute('aria-current'); });
  }

  /**
   * Starts (or restarts) the auto-play interval timer.
   * Clears any existing timer before creating a new one.
   * @returns {void}
   */
  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  /**
   * Resets the auto-play timer after a manual interaction.
   * @returns {void}
   */
  function resetAuto() {
    startAuto();
  }

  goTo(0);
  startAuto();

  btnPrev?.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  btnNext?.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAuto(); });
  });

  /** @type {number} X coordinate where a touch gesture started. */
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      goTo(dx < 0 ? current + 1 : current - 1);
      resetAuto();
    }
  }, { passive: true });

  hero.addEventListener('mouseenter', () => clearInterval(autoTimer));
  hero.addEventListener('mouseleave', startAuto);

  hero.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); resetAuto(); }
  });
}