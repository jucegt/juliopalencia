<script lang="ts">
  import { cn } from '../utilities/cn';

  let { as = 'div', children, ...restProps } = $props();
</script>

<svelte:element
  this={as}
  {...restProps}
  class={cn('container mx-auto px-4 lg:px-8', restProps.class)}
>
  {@render children()}
</svelte:element>
