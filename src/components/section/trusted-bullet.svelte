<script lang="ts">
  import { cn } from '../../utilities/cn';

  let { children, ...restProps } = $props();
</script>

<p
  {...restProps}
  class={cn('text-dark font-onest dark:text-light flex gap-4 text-base font-bold', restProps.class)}
>
  {@render children()}
</p>
