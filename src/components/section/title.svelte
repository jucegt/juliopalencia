<script lang="ts">
  import { cn } from '../../utilities/cn';

  export let as: keyof HTMLElementTagNameMap = 'h2';
</script>

<svelte:element
  this={as}
  {...$$restProps}
  class={cn(
    'text-dark dark:text-light font-onest mb-8 text-2xl font-black sm:text-3xl md:text-center md:text-5xl',
    $$restProps.class
  )}
>
  <slot />
</svelte:element>
