import { env } from '$env/dynamic/public';

const { PUBLIC_DOMAIN } = env;

export function setTheme(theme: string) {
  document.cookie = `theme=${theme}; Path=/; Domain=.${PUBLIC_DOMAIN}; Max-Age=31536000; SameSite=Lax`;
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}
