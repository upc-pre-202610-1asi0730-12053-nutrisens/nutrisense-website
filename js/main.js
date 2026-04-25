/**
 * @fileoverview NutriSense main script.
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

/* ============================================================
   FAQ ACCORDION
   ============================================================ */

/**
 * Initialises the FAQ accordion.
 * Clicking a question expands its answer and collapses any previously open item.
 * @returns {void}
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn    = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');
    if (!btn || !answer) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      faqItems.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq-item__question')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * @section Terms Page — Language Block Sync
 * @description Toggles `lang-en` / `lang-es` CSS classes on `<body>` to show
 * or hide the corresponding `.terms-en` / `.terms-es` content blocks.
 * Runs only on pages that contain a `.terms-en` element.
 * Depends on {@link I18n} being initialised before this script executes.
 */
if (document.querySelector('.terms-en')) {

  /**
   * Applies the active language to the `<body>` class list so that CSS can
   * show the correct terms content block and hide the other.
   * @param {string} lang - Language code to activate ('en' or 'es').
   * @returns {void}
   */
  function syncTermsLang(lang) {
    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-es', lang === 'es');
  }

  // Apply on load using the persisted language preference.
  syncTermsLang(I18n.getLang() || 'en');

  // React to every lang-select change on the page.
  document.querySelectorAll('.lang-select').forEach(sel => {
    sel.addEventListener('change', e => syncTermsLang(e.target.value));
  });

}

/* ============================================================
   CONTACT FORM
   ============================================================ */

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput    = form.querySelector('#contact-name');
  const emailInput   = form.querySelector('#contact-email');
  const phoneInput   = form.querySelector('#contact-phone-field');
  const messageInput = form.querySelector('#contact-message');
  const successBox   = document.getElementById('formSuccess');

  function showError(input, errId, show) {
    const errEl = document.getElementById(errId);
    if (!errEl) return;
    if (show) {
      input.classList.add('is-error');
      errEl.classList.add('is-visible');
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', errId);
    } else {
      input.classList.remove('is-error');
      errEl.classList.remove('is-visible');
      input.setAttribute('aria-invalid', 'false');
      input.removeAttribute('aria-describedby');
    }
  }

  function isValidName(val) {
    const trimmed = val.trim();
    if (/\d/.test(trimmed)) return false;
    const parts = trimmed.split(/\s+/);
    return parts.length >= 2 && parts.every(p => p.length >= 2);
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(val.trim());
  }

  function isValidPhone(val) {
    const trimmed = val.trim();
    if (!trimmed) return true;
    return /^\+\d{1,4}[\s\-]?\d[\d\s\-]{5,}$/.test(trimmed);
  }

  function isValidMessage(val) {
    return val.trim().length >= 20;
  }

  nameInput?.addEventListener('input',    () => showError(nameInput,    'err-name',  !isValidName(nameInput.value)));
  emailInput?.addEventListener('input',   () => showError(emailInput,   'err-email', !isValidEmail(emailInput.value)));
  phoneInput?.addEventListener('input',   () => showError(phoneInput,   'err-phone', !isValidPhone(phoneInput.value)));
  messageInput?.addEventListener('input', () => showError(messageInput, 'err-msg',   !isValidMessage(messageInput.value)));

  form.addEventListener('submit', e => {
    e.preventDefault();

    let valid = true;

    if (!isValidName(nameInput?.value))       { showError(nameInput,    'err-name',  true);  valid = false; }
    else                                       { showError(nameInput,    'err-name',  false); }

    if (!isValidEmail(emailInput?.value))      { showError(emailInput,   'err-email', true);  valid = false; }
    else                                       { showError(emailInput,   'err-email', false); }

    if (!isValidPhone(phoneInput?.value))      { showError(phoneInput,   'err-phone', true);  valid = false; }
    else                                       { showError(phoneInput,   'err-phone', false); }

    if (!isValidMessage(messageInput?.value))  { showError(messageInput, 'err-msg',   true);  valid = false; }
    else                                       { showError(messageInput, 'err-msg',   false); }

    if (!valid) {
      const firstError = form.querySelector('.is-error');
      firstError?.focus();
      return;
    }

    successBox?.classList.add('is-visible');
    successBox?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    form.reset();
    setTimeout(() => successBox?.classList.remove('is-visible'), 6000);
  });
}