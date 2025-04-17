<script lang="ts">
  import { cn } from '../utilities/cn';
</script>

<div {...$$restProps} class={cn('container mx-auto', $$restProps.class)}>
  <slot />
</div>
