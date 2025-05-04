<script lang="ts">
  import { cn } from '$util/cn';

  let { as = 'h1', children, ...restProps } = $props();
</script>

<svelte:element
  this={as}
  {...restProps}
  class={cn(
    'border-primary text-primary bg-primary/8 font-onest w-fit rounded-full border px-2 py-1 text-(length:--font-xxs) leading-none font-bold uppercase',
    restProps.class
  )}
>
  {@render children()}
</svelte:element>
