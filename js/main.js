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