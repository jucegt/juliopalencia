<script>
  import { cn } from '../utilities/cn';
</script>

<p
  {...$$restProps}
  class={cn('text-dark font-onest flex gap-4 text-base font-bold', $$restProps.class)}
>
  <slot />
</p>
