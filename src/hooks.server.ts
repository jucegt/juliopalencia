import type { Handle } from '@sveltejs/kit';
import { locales } from '$i18n/config';

type Lang = 'es' | 'en';
type Theme = 'dark' | 'light';

export const handle: Handle = async ({ event, resolve }) => {
  const { url, locals, cookies } = event;
  const host = url.hostname;
  const isEnglishSubdomain = host.startsWith('en.');

  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  const lang: Lang = isEnglishSubdomain ? 'en' : 'es';
  let locale = supportedLocales.find((l) => l === lang) as Lang;
  locals.lang = lang;

  const theme = (cookies.get('theme') || 'dark') as Theme;
  locals.theme = theme;

  const response = await resolve(
    {
      ...event,
      locals: {
        lang: locale || 'es',
        theme
      }
    },
    {
      transformPageChunk: ({ html }) =>
        html.replace('%sveltekit.lang%', lang).replace('%sveltekit.theme%', theme)
    }
  );

  return response;
};
