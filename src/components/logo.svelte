<script lang="ts">
  import { cn } from '../utilities/cn';

  export let id: string = '';
</script>

<div
  {...$$restProps}
  role="img"
  class={cn(
    'mx-4 aspect-square w-37 bg-cover opacity-25',
    `dark:logo-${id}`,
    `logo-${id}`,
    $$restProps.class
  )}
></div>
