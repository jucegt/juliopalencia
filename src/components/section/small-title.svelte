<script lang="ts">
  import { cn } from '../../utilities/cn';

  export let as: string = 'h3';
</script>

<svelte:element
  this={as}
  {...$$restProps}
  class={cn('font-onest text-dark flex gap-4 text-2xl/8 font-bold', $$restProps.class)}
>
  <slot />
</svelte:element>
