import type { LayoutLoad } from './$types';
import { addTranslations, setLocale, setRoute } from '$i18n/config';

export const load: LayoutLoad = async ({ data }) => {
  const { i18n, translations, theme, year } = data;
  const { locale, route } = i18n;

  addTranslations(translations);

  await setRoute(route);
  await setLocale(locale);

  return { i18n, theme, year };
};
