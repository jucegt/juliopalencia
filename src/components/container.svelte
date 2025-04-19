<script lang="ts">
  import { cn } from '../utilities/cn';
</script>

<div {...$$restProps} class={cn('container mx-auto px-4 lg:px-8', $$restProps.class)}>
  <slot />
</div>
