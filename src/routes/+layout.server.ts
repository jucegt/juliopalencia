import type { ServerLoad } from '@sveltejs/kit';

import { locales, loadTranslations, translations, defaultLocale } from '$i18n/config';

export const load: ServerLoad = async ({ url, locals }) => {
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
    translations: translations.get(),
    theme: locals.theme
  };
};
