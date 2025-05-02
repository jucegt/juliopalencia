<script lang="ts">
  import type { Snippet } from 'svelte';

  import { cn } from '$util/cn';
  import { smoothScroll } from '$action/smooth-scroll';

  type Props = {
    variant?: 'primary' | 'secondary';
    href?: string | null;
    children: Snippet;
    class?: string;
    [key: string]: unknown;
  };

  const { variant = 'primary', href = null, children, ...restProps }: Props = $props();

  const classes = {
    primary:
      'relative overflow-hidden inline-flex items-center gap-x-2 rounded-lg bg-primary px-4 py-3 text-base font-bold text-light font-onest before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-gradient-start before:to-gradient-end before:opacity-0 before:transition-opacity before:ease-in-out before:duration-300 hover:before:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark dark:focus-visible:ring-light md:px-8 md:gap-x-4 transition ease-in-out',
    secondary:
      'inline-flex items-center gap-x-2 rounded-lg bg-light-200 dark:bg-dark-200 px-4 py-3 text-base font-bold text-dark dark:text-light font-onest hover:bg-primary hover:text-light transition ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:px-8 md:gap-x-4'
  };
</script>

{#if href}
  <a
    {href}
    {...restProps}
    class={cn(classes[variant], restProps.class)}
    role="button"
    use:smoothScroll
  >
    {@render children()}
  </a>
{:else}
  <button {...restProps} class={cn(classes[variant], restProps.class)}>
    {@render children()}
  </button>
{/if}
