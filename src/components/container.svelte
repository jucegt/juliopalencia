<script lang="ts">
  import { cn } from '../utilities/cn';

  export let as: keyof HTMLElementTagNameMap = 'div';
</script>

<svelte:element
  this={as}
  {...$$restProps}
  class={cn('container mx-auto px-4 lg:px-8', $$restProps.class)}
>
  <slot />
</svelte:element>
