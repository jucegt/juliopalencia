import { env } from '$env/dynamic/public';
import type { ServerLoad } from '@sveltejs/kit';

import { locales, loadTranslations, translations, defaultLocale } from '$i18n/config';

const { PUBLIC_DOMAIN } = env;

export const load: ServerLoad = async ({ url, locals, cookies }) => {
  const isDev = PUBLIC_DOMAIN?.startsWith('localhost') ?? true;

  const host = url.hostname;
  const isEnglishSubdomain = host.startsWith('en.');
  const currentYear = new Date().getFullYear();
  let locale = isEnglishSubdomain ? 'en' : 'es';

  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  cookies.set('theme', locals.theme, {
    path: '/',
    domain: isDev ? undefined : `.${PUBLIC_DOMAIN}`,
    httpOnly: false,
    sameSite: 'lax',
    secure: !isDev,
    maxAge: 60 * 60 * 24 * 365
  });

  await loadTranslations(locale, url.pathname);

  return {
    i18n: { locale, route: url.pathname },
    translations: translations.get(),
    theme: locals.theme,
    year: currentYear
  };
};
