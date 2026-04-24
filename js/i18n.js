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

  /** @type {TranslationMap} Spanish Latin-American (es_419) strings. */
  es: {
    /* --- NAV --- */
    nav_about:    'Nosotros',
    nav_features: 'Funcionalidades',
    nav_contact:  'Contacto',
    nav_links:    'Enlances',
    nav_login:    'Iniciar sesión',
    nav_lang_label: 'Idioma',

    /* --- HERO CAROUSEL --- */
    hero1_tag:      'Pérdida de peso',
    hero1_title:    'Nutrición inteligente,\na tu manera',
    hero1_subtitle: 'La única plataforma que adapta sus recomendaciones a tu ubicación, el clima del día y tu perfil de salud para que puedas perder peso sin dietas estrictas.',
    hero1_cta:      'Comenzar a adelgazar',

    hero2_tag:      'Ganancia de masa',
    hero2_title:    'Construye tu\nmejor cuerpo',
    hero2_subtitle: 'Registra tus macros de manera inteligente. Recibe sugerencias de comidas según tu contexto real, adaptadas a tus metas de ganancia muscular.',
    hero2_cta:      'Comenzar a ganar músculo',

    hero3_title:   'Sobre el producto',
    hero3_sub:     'Mira cómo NutriSense transforma tu experiencia nutricional',

    hero4_title:   'Conoce nuestro equipo',
    hero4_sub:     'Las personas detrás de la plataforma que pone tu salud primero',

    /* --- FEATURE HIGHLIGHTS --- */
    fh_title:    'Lo que nos hace diferentes',
    fh_subtitle: 'NutriSense va más allá de contar calorías. El contexto lo es todo.',

    fh1_title: 'Smart Scan',
    fh1_desc:  'Toma una foto de tu plato o del menú de un restaurante y obtén estimaciones nutricionales al instante, adaptadas automáticamente a tu perfil y metas.',

    fh2_title: 'Nutrición Global',
    fh2_desc:  'Descubre platos locales saludables donde estés. Nuestra plataforma sugiere opciones basadas en la cultura gastronómica de tu ciudad o país actual.',

    fh3_title: 'Consejos por clima',
    fh3_desc:  '¿Día caluroso? ¿Noche fría? NutriSense ajusta tus recomendaciones de comidas en tiempo real según el clima de tu ubicación.',

    /* --- WEATHER SECTION --- */
    weather_title:    'Tu clima, tu dieta',
    weather_subtitle: 'El primer asistente de nutrición inteligente del mundo que considera tu clima. Los días calurosos exigen comidas ligeras e hidratantes; los fríos, opciones reconfortantes y calóricas.',
    weather_cta:      'Ver cómo funciona',

    /* --- SEGMENTS --- */
    seg_title:    'Únete y transforma tu vida',
    seg_subtitle: 'Elige el objetivo que mejor te describa y comienza hoy.',

    seg1_title: 'Quiero ganar\nmasa muscular',
    seg1_desc:  'Seguimiento optimizado de macros, objetivos de proteínas y sugerencias contextuales para atletas y entusiastas del fitness.',
    seg1_cta:   'Comenzar',

    seg2_title: 'Quiero\nadelgazar',
    seg2_desc:  'Control de calorías sin esfuerzo, intercambios de comidas inteligentes y recomendaciones que se adaptan a tu vida real, sin dietas estrictas.',
    seg2_cta:   'Comenzar',

    /* --- PLANS --- */
    plans_title:    'Elige tu plan',
    plans_subtitle: 'Empieza con el plan que se adapte a tus metas. Puedes mejorar en cualquier momento.',

    plan_basic:   'Básico',
    plan_pro:     'Pro',
    plan_premium: 'Premium',
    plan_popular:      'Más popular',
    plan_recommended:  'Recomendado',
    plan_month:   '/ mes',
    plan_cta:     'Suscríbete ya',

    plan_basic_desc:   'Herramientas esenciales para comenzar a registrar tu nutrición hoy.',
    plan_pro_desc:     'Funciones contextuales para quienes van en serio con sus metas.',
    plan_premium_desc: 'Todo lo que necesitas, sin límites, para los más comprometidos.',

    pf_nutrition_log:   'Registro nutricional',
    pf_basic_dashboard: 'Panel básico',
    pf_body_metrics:    'IMC / TMB / TDEE',
    pf_smart_scan:      'Smart Scan (análisis de fotos)',
    pf_travel_mode:     'Modo viaje',
    pf_weather_recs:    'Recomendaciones por clima',
    pf_pantry:          'Despensa y sugerencias de recetas',
    pf_wearable:        'Sincronización de wearable (Google Fit)',
    pf_menu_analysis:   'Análisis de menú de restaurante',
    pf_unlimited_hist:  'Historial ilimitado',
    pf_pdf_reports:     'Reportes en PDF',

    /* --- FEATURES GRID --- */
    feat_title:    'Funcionalidades para disfrutar',
    feat_subtitle: 'Un conjunto completo de herramientas para una vida más saludable.',
    feat_see_all:  'Ver todas las funcionalidades',

    feat1_title: 'Smart Scan',
    feat1_desc:  'Analiza comidas y menús mediante fotos',
    feat2_title: 'Consejos de clima',
    feat2_desc:  'Sugerencias de comidas según el clima local',
    feat3_title: 'Modo viaje',
    feat3_desc:  'Platos locales saludables en cualquier parte',
    feat4_title: 'Ideas de recetas',
    feat4_desc:  'Recetas con ingredientes de tu despensa',
    feat5_title: 'Sincronización',
    feat5_desc:  'Sincroniza tu actividad con Google Fit',
    feat6_title: 'Registro de comidas',
    feat6_desc:  'Registra desayuno, almuerzo, cena y meriendas',

    /* --- FAQ --- */
    faq_title: 'Preguntas frecuentes',

    faq1_q: '¿Qué hace diferente a NutriSense de otras aplicaciones de nutrición?',
    faq1_a: 'NutriSense es la única plataforma que combina análisis visual de alimentos (Smart Scan), recomendaciones por clima en tiempo real, modo viaje con sugerencias de platos locales e ideas de recetas basadas en tu despensa, todo adaptado a tu perfil de salud y restricciones dietéticas.',

    faq2_q: '¿Cómo funciona el análisis de fotos "Smart Scan"?',
    faq2_a: 'Simplemente toma una foto de tu plato o del menú de un restaurante. NutriSense usa visión por computadora para identificar los alimentos y cruza los datos con nuestra base nutricional para estimar calorías y macros. Tú revisas y confirmas el resultado antes de guardarlo en tu registro.',

    faq3_q: '¿La app me ayuda si viajo o si el clima cambia?',
    faq3_a: 'Sí. El Modo viaje detecta o te permite ingresar tu ciudad o país actual y sugiere platos locales saludables compatibles con tu perfil. El motor de clima actualiza las recomendaciones diariamente según las condiciones en tiempo real de tu ubicación.',

    faq4_q: '¿Puedo usar NutriSense si tengo alergias o restricciones médicas?',
    faq4_a: 'Por supuesto. Durante la configuración del perfil puedes especificar alergias, intolerancias y condiciones médicas (diabetes, hipertensión, celiaquía, etc.). Estos filtros se aplican de forma permanente a cada recomendación y resultado de búsqueda en toda la aplicación.',

    faq5_q: '¿Puedo sincronizar mis datos de ejercicio con la plataforma?',
    faq5_a: 'Los suscriptores Premium pueden conectar Google Fit para importar automáticamente los pasos diarios y las calorías activas quemadas. Estas calorías se incluyen en tu balance diario en tiempo real. Los usuarios sin wearable también pueden registrar actividad manualmente.',

    /* --- ABOUT US --- */
    about_hero_title: 'Somos NutriSense',
    about_hero_desc:  'Comer bien no debería ser un reto. En NutriSense transformamos la gestión alimentaria combinando el seguimiento nutricional con el análisis inteligente del contexto. No solo contamos calorías: entendemos tu entorno para que puedas alcanzar tus metas, sin importar dónde estés ni qué tiempo haga hoy.',

    mission_title: 'Misión',
    mission_desc:  'Empoderar a las personas para comer mejor a través del análisis visual de alimentos y recomendaciones inteligentes adaptadas a su entorno y hábitos.',

    vision_title: 'Visión',
    vision_desc:  'Ser la plataforma líder de nutrición personalizada en Latinoamérica, transformando la salud del usuario sin importar su ubicación.',

    /* --- FEATURES PAGE --- */
    more_feat_title: 'Más funcionalidades para disfrutar',
    more_feat_sub:   'Todo lo que necesitas para comer con más inteligencia y vivir mejor.',

    mf1_title: 'Smart Scan',           mf1_desc: 'Escanea tu comida con una foto y obtén calorías y nutrientes al instante.',
    mf2_title: 'Consejos de clima',    mf2_desc: 'Recibe sugerencias de comidas según el clima local en tiempo real.',
    mf3_title: 'Modo viaje',           mf3_desc: 'Encuentra los platos locales más saludables donde vayas en el mundo.',
    mf4_title: 'Ideas de recetas',     mf4_desc: 'Obtén ideas de recetas nutritivas con los ingredientes de tu despensa.',
    mf5_title: 'Sincronización',       mf5_desc: 'Sincroniza automáticamente tu actividad física desde Google Fit.',
    mf6_title: 'Análisis de menú',     mf6_desc: 'Encuentra la opción más saludable en cualquier menú de restaurante según tu perfil.',
    mf7_title: 'Registro de comidas',  mf7_desc: 'Registra fácilmente desayuno, almuerzo, cena y meriendas del día.',
    mf8_title: 'Historial ilimitado',  mf8_desc: 'Accede a tu progreso completo y registros pasados sin límite de tiempo.',
    mf9_title: 'Reportes en PDF',      mf9_desc: 'Descarga resúmenes nutricionales detallados en PDF cuando quieras.',
    mf10_title:'Métricas de salud',    mf10_desc:'Obtén tu IMC, TMB y TDEE calculados automáticamente.',

    /* --- CONTACT --- */
    contact_hero_title: 'Contáctanos',
    contact_phone:      '+51 984 231 995',
    contact_form_title: 'Escríbenos',
    contact_name:       'Nombre',
    contact_email:      'Correo electrónico',
    contact_phone_lbl:  'Teléfono',
    contact_message:    'Mensaje',
    contact_submit:     'Enviar',
    contact_success:    '¡Gracias! Tu mensaje ha sido enviado. Te responderemos en menos de 24 horas.',
    contact_err_name:   'Por favor ingresa tu nombre completo (nombre y apellido, mínimo 2 caracteres cada uno).',
    contact_err_email:  'Por favor ingresa un correo electrónico válido (ej. nombre@dominio.com).',
    contact_err_phone:  'Por favor ingresa un número telefónico internacional válido (ej. +51 984 231 995).',
    contact_err_msg:    'El mensaje debe tener al menos 20 caracteres.',

    /* --- TERMS --- */
    terms_title:   'Términos y condiciones',
    terms_updated: 'Última actualización: 10 de abril de 2026',

    /* --- FOOTER --- */
    footer_tagline:  'Nutrición más inteligente para la vida real.',
    footer_nav_head: 'Navegar',
    footer_social:   'Redes sociales',
    footer_lang:     'Idioma',
    footer_terms:    'Términos y condiciones',
    footer_copy:     '© 2026 NutriSense. Diseñado por el equipo NutriSense',
  }
};