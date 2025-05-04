<script lang="ts">
  import type { Snippet } from 'svelte';

  import { cn } from '$util/cn';
  import { smoothScroll } from '$action/smooth-scroll';

  type Props = {
    variant?: 'primary' | 'secondary' | 'underline';
    href?: string | null;
    children: Snippet;
    class?: string;
    [key: string]: unknown;
  };

  const { variant = 'primary', href = null, children, ...restProps }: Props = $props();

  const classes = {
    primary:
      'bg-primary text-light font-onest before:from-gradient-start before:to-gradient-end focus-visible:ring-dark dark:focus-visible:ring-light relative inline-flex items-center gap-x-2 overflow-hidden rounded-lg px-4 py-3 text-center text-base font-bold transition ease-in-out before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out before:content-[""] hover:before:opacity-100 focus:outline-none focus-visible:ring-2 md:gap-x-4 md:px-8',
    secondary:
      'bg-light-200 dark:bg-dark-200 text-dark dark:text-light font-onest hover:bg-primary hover:text-light focus-visible:ring-primary inline-flex items-center gap-x-2 rounded-lg px-4 py-3 text-center text-base font-bold transition duration-300 ease-in-out focus:outline-none focus-visible:ring-2 md:gap-x-4 md:px-8',
    underline:
      'font-onest text-primary dark:text-primary decoration-primary dark:decoration-primary hover:text-dark hover:decoration-dark focus-visible:ring-primary inline-flex cursor-pointer items-center gap-x-2 rounded-sm p-1 text-base font-bold underline decoration-2 underline-offset-4 transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2'
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
