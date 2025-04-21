<script lang="ts">
  import { cn } from '../utilities/cn';

  export let id: string = '';
</script>

<div
  {...$$restProps}
  role="img"
  class={cn(
    'aspect-square w-37 bg-cover opacity-25 md:mx-4',
    `dark:logo-${id}`,
    `logo-${id}`,
    $$restProps.class
  )}
></div>
