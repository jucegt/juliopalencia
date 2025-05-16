import { env } from '$env/dynamic/public';

const { PUBLIC_DOMAIN } = env;

export function setTheme(theme: string) {
  const isDev = PUBLIC_DOMAIN?.startsWith('localhost') ?? true;

  const domain = isDev ? '' : `Domain=.${PUBLIC_DOMAIN};`;
  const secure = isDev ? '' : 'Secure;';
  document.cookie = `theme=${theme}; Path=/; ${domain} ${secure} Max-Age=31536000; SameSite=Lax`;
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}
