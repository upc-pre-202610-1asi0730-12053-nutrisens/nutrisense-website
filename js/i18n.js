**
 * @fileoverview NutriSense Internationalization (i18n) module.
 * Supports en_US (default) and es_419 (Latin-American Spanish).
 * The selected language is persisted in localStorage and applied to every
 * element that carries a `data-i18n`, `data-i18n-placeholder`, or `data-i18n-aria` attribute.
 */

/**
 * @typedef {Object} TranslationMap
 * @description Flat key-value map where each key is a translation identifier
 *   and each value is the localised string for that language.
 */

/**
 * All supported translation strings grouped by language code.
 * @type {Object.<string, TranslationMap>}
 */
const translations = {
  /** @type {TranslationMap} English (en_US) strings. */
  en: {
    /* --- NAV --- */
    nav_about:    'About Us',
    nav_features: 'Features',
    nav_contact:  'Contact',
    nav_links:    'Links',
    nav_login:    'Log In',
    nav_lang_label: 'Language',

    /* --- HERO CAROUSEL --- */
    hero1_tag:      'Weight Loss',
    hero1_title:    'Smart Nutrition,\nYour Way',
    hero1_subtitle: 'The only platform that adapts its recommendations to your location, daily weather, and health profile so you can lose weight without rigid diets.',
    hero1_cta:      'Start Losing Weight',

    hero2_tag:      'Muscle Gain',
    hero2_title:    'Build Your\nBest Body',
    hero2_subtitle: 'Track your macros intelligently. Get contextual meal suggestions tailored to your muscle-gain goals, wherever you are, whatever the weather.',
    hero2_cta:      'Start Building Muscle',

    hero3_title:   'About the Product',
    hero3_sub:     'Watch how NutriSense transforms your nutrition journey',

    hero4_title:   'Meet Our Team',
    hero4_sub:     'The people behind the platform that puts your health first',

    /* --- FEATURE HIGHLIGHTS (index) --- */
    fh_title:       'What makes us different',
    fh_subtitle:    'NutriSense goes beyond calorie counting. Context is everything.',

    fh1_title: 'Smart Scan',
    fh1_desc:  'Take a photo of your plate or a restaurant menu and get instant nutritional estimates, automatically matched to your profile and goals.',

    fh2_title: 'Global Nutrition',
    fh2_desc:  'Discover healthy local dishes wherever you are. Our platform suggests options based on the food culture of your current city or country.',

    fh3_title: 'Weather-Based Tips',
    fh3_desc:  'Hot day? Cold night? NutriSense adjusts your meal recommendations in real time to match your local weather conditions.',

    /* --- WEATHER SECTION --- */
    weather_title:    'Your weather, your diet',
    weather_subtitle: 'The world\'s first smart nutrition assistant that considers your climate. Hot days call for light hydrating meals; cold days call for warming, calorie-dense options.',
    weather_cta:      'See How It Works',

    /* --- SEGMENTS --- */
    seg_title:    'Join us and transform your life',
    seg_subtitle: 'Choose the goal that best describes you and get started today.',

    seg1_title: 'I want to gain\nmuscle mass',
    seg1_desc:  'Optimized macro tracking, protein targets, and context-aware suggestions for athletes and fitness enthusiasts.',
    seg1_cta:   'Get Started',

    seg2_title: 'I want to\nlose weight',
    seg2_desc:  'Effortless calorie control, smart meal swaps, and recommendations that fit your real life, no strict diets required.',
    seg2_cta:   'Get Started',

    /* --- PLANS --- */
    plans_title:    'Choose your Plan',
    plans_subtitle: 'Start with the plan that fits your goals. Upgrade anytime.',

    plan_basic:   'Basic',
    plan_pro:     'Pro',
    plan_premium: 'Premium',
    plan_popular:      'Most Popular',
    plan_recommended:  'Recommended',
    plan_month:   '/ month',
    plan_cta:     'Subscribe Now',

    plan_basic_desc:   'Core tools to start tracking your nutrition today.',
    plan_pro_desc:     'Context-aware features for serious goal-setters.',
    plan_premium_desc: 'Everything you need, unlimited, for the committed.',

    pf_nutrition_log:    'Nutrition Log',
    pf_basic_dashboard:  'Basic Dashboard',
    pf_body_metrics:     'BMI / BMR / TDEE',
    pf_smart_scan:       'Smart Scan (photo analysis)',
    pf_travel_mode:      'Travel Mode',
    pf_weather_recs:     'Weather Recommendations',
    pf_pantry:           'Pantry & Recipe Ideas',
    pf_wearable:         'Wearable Sync (Google Fit)',
    pf_menu_analysis:    'Restaurant Menu Analysis',
    pf_unlimited_hist:   'Unlimited History',
    pf_pdf_reports:      'PDF Reports',

    /* --- FEATURES GRID --- */
    feat_title:    'Features to enjoy',
    feat_subtitle: 'A complete toolkit for a healthier life.',
    feat_see_all:  'See All Features',

    feat1_title: 'Smart Scan',
    feat1_desc:  'Analyze meals and menus by photo',
    feat2_title: 'Weather Tips',
    feat2_desc:  'Meal suggestions by local weather',
    feat3_title: 'Travel Mode',
    feat3_desc:  'Healthy local dishes anywhere',
    feat4_title: 'Recipe Ideas',
    feat4_desc:  'Recipes from your pantry ingredients',
    feat5_title: 'Wearable Sync',
    feat5_desc:  'Sync activity from Google Fit',
    feat6_title: 'Meal Logging',
    feat6_desc:  'Log breakfast, lunch, dinner & snacks',

    /* --- FAQ --- */
    faq_title: 'Frequently Asked Questions',

    faq1_q: 'What makes NutriSense different from other nutrition apps?',
    faq1_a: 'NutriSense is the only platform that combines visual food analysis (Smart Scan), real-time weather recommendations, travel mode with local dish suggestions, and pantry-based recipe ideas, all tailored to your individual health profile and dietary restrictions.',

    faq2_q: 'How does the "Smart Scan" photo analysis work?',
    faq2_a: 'Simply take a photo of your plate or a restaurant menu. NutriSense uses computer vision to identify the food items and cross-references our nutritional database to estimate calories and macros. You review and confirm the result before it\'s saved to your log.',

    faq3_q: 'Does the app help me if I go on a trip or if the weather changes?',
    faq3_a: 'Yes! Travel Mode detects or lets you enter your current city/country and suggests healthy local dishes compatible with your profile. The weather engine updates meal recommendations daily based on real-time conditions in your location.',

    faq4_q: 'Can I use NutriSense if I have allergies or medical restrictions?',
    faq4_a: 'Absolutely. During profile setup you can specify allergies, intolerances, and medical conditions (diabetes, hypertension, celiac disease, etc.). These filters are applied permanently to every recommendation and search result throughout the app.',

    faq5_q: 'Can I sync my exercise data with the platform?',
    faq5_a: 'Premium subscribers can connect Google Fit to automatically import daily steps and active calories burned. These calories are factored into your daily balance in real time. Users without a wearable can also log activity manually.',

    /* --- ABOUT US PAGE --- */
    about_hero_title: 'We are NutriSense',
    about_hero_desc:  'Eating well shouldn\'t be a challenge. At NutriSense, we transform dietary management by combining nutritional tracking with smart contextual analysis. We don\'t just count calories — we understand your environment so you can reach your fitness goals, no matter where you are or what the weather is today.',

    mission_title: 'Mission',
    mission_desc:  'To empower people to eat better through visual food analysis and smart recommendations adapted to their environment and habits.',

    vision_title: 'Vision',
    vision_desc:  'To be the leading personalized nutrition platform in Latin America, transforming user health regardless of their location.',

    /* --- FEATURES PAGE --- */
    more_feat_title: 'More features to enjoy',
    more_feat_sub:   'Everything you need to eat smarter, live better.',

    mf1_title: 'Smart Scan',       mf1_desc: 'Scan your meal with a photo to get instant calorie and nutrient estimates.',
    mf2_title: 'Weather Tips',     mf2_desc: 'Get meal suggestions based on your local weather conditions in real time.',
    mf3_title: 'Travel Mode',      mf3_desc: 'Find the healthiest local dishes wherever you go in the world.',
    mf4_title: 'Recipe Ideas',     mf4_desc: 'Get nutritious recipe ideas using ingredients available in your pantry.',
    mf5_title: 'Wearable Sync',    mf5_desc: 'Automatically sync your physical activity data from Google Fit.',
    mf6_title: 'Menu Analysis',    mf6_desc: 'Find the healthiest option on any restaurant menu based on your profile.',
    mf7_title: 'Meal Logging',     mf7_desc: 'Easily track breakfast, lunch, dinner, and daily snacks.',
    mf8_title: 'Unlimited History',mf8_desc: 'Access your full progress and past logs without any time limits.',
    mf9_title: 'PDF Reports',      mf9_desc: 'Download detailed nutritional summaries as PDF files anytime.',
    mf10_title:'Health Metrics',   mf10_desc:'Get your BMI, BMR, and TDEE calculated automatically.',

    /* --- CONTACT PAGE --- */
    contact_hero_title: 'Contact Us',
    contact_phone:      '+51 984 231 995',
    contact_form_title: 'Write to us',
    contact_name:       'Name',
    contact_email:      'Email',
    contact_phone_lbl:  'Phone',
    contact_message:    'Message',
    contact_submit:     'Submit',
    contact_success:    'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.',
    contact_err_name:   'Please enter your full name (first and last, at least 2 characters each).',
    contact_err_email:  'Please enter a valid email address (e.g. name@domain.com).',
    contact_err_phone:  'Please enter a valid international phone number (e.g. +51 984 231 995).',
    contact_err_msg:    'Message must be at least 20 characters.',

    /* --- TERMS PAGE --- */
    terms_title:   'Terms and Conditions',
    terms_updated: 'Last updated: April 10, 2026',

    /* --- FOOTER --- */
    footer_tagline:  'Smarter nutrition for real life.',
    footer_nav_head: 'Navigate',
    footer_social:   'Social Media',
    footer_lang:     'Language',
    footer_terms:    'Terms and Conditions',
    footer_copy:     '© 2026 NutriSense. Designed by the NutriSense Team',
  },
