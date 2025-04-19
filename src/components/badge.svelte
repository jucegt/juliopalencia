<script lang="ts">
  import { cn } from '../utilities/cn';

  export let as: keyof HTMLElementTagNameMap = 'h1';
</script>

<svelte:element
  this={as}
  {...$$restProps}
  class={cn(
    'border-primary text-primary bg-primary/8 font-onest w-fit rounded-full border px-2 py-1 text-(length:--font-xxs) leading-none font-bold uppercase',
    $$restProps.class
  )}
>
  <slot />
</svelte:element>
