import { locales, loadTranslations, translations, defaultLocale } from '../i18n/config';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url }) => {
  const host = url.hostname;
  const isEnglishSubdomain = host.startsWith('en.');
  let locale = isEnglishSubdomain ? 'en' : 'es';

  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  await loadTranslations(locale, url.pathname);

  return {
    i18n: { locale, route: url.pathname },
    translations: translations.get()
  };
};
