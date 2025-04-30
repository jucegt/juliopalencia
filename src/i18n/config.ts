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
      locale: 'es',
      key: 'nav',
      loader: async () => (await import('./es/nav.json')).default
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
