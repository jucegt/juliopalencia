<script lang="ts">
  import { cn } from '../../utilities/cn';
</script>

<a
  {...$$restProps}
  class={cn(
    'text-gray hover:text-primary focus-visible:ring-primary rounded-sm px-2 transition focus:outline-none focus-visible:ring-2',
    $$restProps.class
  )}
>
  <slot />
</a>
