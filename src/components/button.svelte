<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
  export let href: string | null = null;

  const classes = {
    primary:
      'relative overflow-hidden inline-flex items-center gap-x-4 rounded-lg bg-primary px-8 py-3 text-base font-bold text-light font-onest before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-gradient-start before:to-gradient-end before:opacity-0 before:transition-opacity before:ease-in-out before:duration-300 hover:before:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark dark:focus-visible:ring-light',
    secondary:
      'inline-flex items-center gap-x-4 rounded-lg bg-light-200 dark:bg-dark-200 px-8 py-3 text-base font-bold text-dark dark:text-light font-onest hover:bg-primary hover:text-light transition ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
  };
</script>

{#if href}
  <a {href} class={classes[variant]}>
    <slot />
  </a>
{:else}
  <button class={classes[variant]}>
    <slot />
  </button>
{/if}
