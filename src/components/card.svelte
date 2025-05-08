<script lang="ts">
  import type { Snippet } from 'svelte';

  import { cn } from '$util/cn';

  type CardProps = {
    class?: string;
    children?: Snippet;
    as?: string;
    role?: string;
  };
  let { children, as = 'section', ...restProps }: CardProps = $props();
</script>

<svelte:element
  this={as}
  {...restProps}
  class={cn(
    'bg-light-100 border-light-200 dark:bg-dark-100 dark:border-dark-200 flex flex-col gap-4 rounded-2xl border p-6 md:p-8 ',
    restProps.class
  )}
>
  {@render children?.()}
</svelte:element>
