import i18n, { type Config } from 'sveltekit-i18n';
import lang from './lang.json';

export const defaultLocale = 'es';

export const config: Config = {
  translations: {
    en: { lang },
    es: { lang }
  },
  loaders: [
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
