import i18n, { type Config } from 'sveltekit-i18n';

import lang from '$i18n/lang.json';

export const defaultLocale = 'es';

export const config: Config = {
  translations: {
    en: { lang },
    es: { lang }
  },
  loaders: [
    {
      locale: 'en',
      key: 'metadata',
      loader: async () => (await import('./en/metadata.json')).default
    },
    {
      locale: 'en',
      key: 'nav',
      loader: async () => (await import('./en/nav.json')).default
    },
    {
      locale: 'en',
      key: 'header',
      loader: async () => (await import('./en/header.json')).default
    },
    {
      locale: 'en',
      key: 'hero',
      loader: async () => (await import('./en/hero.json')).default
    },
    {
      locale: 'en',
      key: 'benefits',
      loader: async () => (await import('./en/benefits.json')).default
    },
    {
      locale: 'en',
      key: 'services',
      loader: async () => (await import('./en/services.json')).default
    },
    {
      locale: 'en',
      key: 'experience',
      loader: async () => (await import('./en/experience.json')).default
    },
    {
      locale: 'en',
      key: 'testimonials',
      loader: async () => (await import('./en/testimonials.json')).default
    },
    {
      locale: 'en',
      key: 'contact',
      loader: async () => (await import('./en/contact.json')).default
    },
    {
      locale: 'es',
      key: 'metadata',
      loader: async () => (await import('./es/metadata.json')).default
    },
    {
      locale: 'es',
      key: 'nav',
      loader: async () => (await import('./es/nav.json')).default
    },
    {
      locale: 'es',
      key: 'header',
      loader: async () => (await import('./es/header.json')).default
    },
    {
      locale: 'es',
      key: 'hero',
      loader: async () => (await import('./es/hero.json')).default
    },
    {
      locale: 'es',
      key: 'benefits',
      loader: async () => (await import('./es/benefits.json')).default
    },
    {
      locale: 'es',
      key: 'services',
      loader: async () => (await import('./es/services.json')).default
    },
    {
      locale: 'es',
      key: 'experience',
      loader: async () => (await import('./es/experience.json')).default
    },
    {
      locale: 'es',
      key: 'testimonials',
      loader: async () => (await import('./es/testimonials.json')).default
    },
    {
      locale: 'es',
      key: 'contact',
      loader: async () => (await import('./es/contact.json')).default
    }
  ]
};

export const {
  t,
  loading,
  locales,
  locale,
  loadTranslations,
  addTranslations,
  translations,
  setLocale,
  setRoute
} = new i18n(config);

loading.subscribe(
  ($loading) => $loading && console.log('Loading translations for the main instance...')
);
