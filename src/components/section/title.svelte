<script lang="ts">
  import { cn } from '../../utilities/cn';

  let { as = 'h2', children, ...restProps } = $props();
</script>

<svelte:element
  this={as}
  {...restProps}
  class={cn(
    'text-dark dark:text-light font-onest mb-8 text-2xl font-black sm:text-3xl md:text-center md:text-5xl',
    restProps.class
  )}
>
  {@render children()}
</svelte:element>
