<script lang="ts">
  import { cn } from '$util/cn';

  let { children, ...restProps } = $props();
</script>

<p
  {...restProps}
  class={cn('font-figtree text-gray text-center text-base md:text-xl', restProps.class)}
>
  {@render children()}
</p>
