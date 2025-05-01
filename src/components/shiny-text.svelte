<script lang="ts">
  import { cn } from '../utilities/cn';

  let { as = 'span', children, ...restProps } = $props();
</script>

<svelte:element
  this={as}
  {...restProps}
  class={cn(
    'from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text font-bold text-transparent',
    restProps.class
  )}
>
  {@render children()}
</svelte:element>
