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