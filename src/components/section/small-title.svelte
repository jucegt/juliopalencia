<script lang="ts">
  import { cn } from '../../utilities/cn';

  export let as: string = 'h3';
</script>

<svelte:element
  this={as}
  {...$$restProps}
  class={cn(
    'font-onest text-dark dark:text-light flex gap-4 text-xl/6 font-bold md:text-2xl/8',
    $$restProps.class
  )}
>
  <slot />
</svelte:element>
