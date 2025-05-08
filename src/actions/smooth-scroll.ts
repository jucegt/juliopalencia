import type { Action } from 'svelte/action';

export const smoothScroll: Action<HTMLElement> = (node) => {
  const SMALL_OFFSET = 80 + 32;
  const LARGE_OFFSET = 96 + 64;

  const getOffset = (): number => {
    return window.innerWidth >= 1024 ? LARGE_OFFSET : SMALL_OFFSET;
  };

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href.length < 2) return;

    const targetId = href.slice(1);
    const scrollTarget = document.getElementById(targetId);
    if (!scrollTarget) return;

    event.preventDefault();

    const offset = getOffset();
    const targetTop = scrollTarget.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetTop - offset,
      behavior: 'smooth'
    });
  };

  node.addEventListener('click', handleClick);

  return {
    destroy() {
      node.removeEventListener('click', handleClick);
    }
  };
};
