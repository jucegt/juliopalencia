import { env } from '$env/dynamic/private';
import type { ServerLoad } from '@sveltejs/kit';

import { locales, loadTranslations, translations, defaultLocale } from '$i18n/config';

const { PUBLIC_DOMAIN } = env;

export const load: ServerLoad = async ({ url, locals, cookies }) => {
  const host = url.hostname;
  const isEnglishSubdomain = host.startsWith('en.');
  let locale = isEnglishSubdomain ? 'en' : 'es';

  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  cookies.set('theme', locals.theme, {
    path: '/',
    domain: `.${PUBLIC_DOMAIN}`,
    httpOnly: false,
    sameSite: 'lax',
    secure: true,
    maxAge: 60 * 60 * 24 * 365
  });

  await loadTranslations(locale, url.pathname);

  return {
    i18n: { locale, route: url.pathname },
    translations: translations.get(),
    theme: locals.theme
  };
};
