<script lang="ts">
  import { cn } from '../../utilities/cn';
</script>

<p
  {...$$restProps}
  class={cn('font-figtree text-gray text-center text-base md:text-xl', $$restProps.class)}
>
  <slot />
</p>
