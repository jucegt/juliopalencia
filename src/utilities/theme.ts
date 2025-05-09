export function setTheme(theme: string) {
  document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}
