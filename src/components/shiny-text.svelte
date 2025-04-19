<script lang="ts">
  import { cn } from '../utilities/cn';

  export let as: keyof HTMLElementTagNameMap = 'span';
</script>

<svelte:element
  this={as}
  {...$$restProps}
  class={cn(
    'from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text font-bold text-transparent',
    $$restProps.class
  )}
>
  <slot />
</svelte:element>
