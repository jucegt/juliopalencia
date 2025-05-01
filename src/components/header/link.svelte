<script lang="ts">
  import { cn } from '../../utilities/cn';

  let { children, ...restProps } = $props();
</script>

<a
  {...restProps}
  class={cn(
    'text-gray hover:text-primary focus-visible:ring-primary -mx-2 rounded-sm px-2 transition focus:outline-none focus-visible:ring-2',
    restProps.class
  )}
>
  {@render children()}
</a>
