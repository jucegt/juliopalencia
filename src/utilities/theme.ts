import { env } from '$env/dynamic/public';

const { PUBLIC_DOMAIN } = env;
const isDev = PUBLIC_DOMAIN!.includes('localhost');

export function setTheme(theme: string) {
  const domain = isDev ? '' : `Domain=.${PUBLIC_DOMAIN};`;
  const secure = isDev ? '' : 'Secure;';
  document.cookie = `theme=${theme}; Path=/; ${domain} ${secure} Max-Age=31536000; SameSite=Lax`;
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}
