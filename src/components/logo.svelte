<script lang="ts">
  import { cn } from '$util/cn';

  let { id = '', ...restProps } = $props();
</script>

<div
  {...restProps}
  role="img"
  class={cn(
    'aspect-square w-37 bg-cover opacity-25 transition-all duration-400 ease-in-out group-hover:opacity-10 group-hover:blur-[1px] hover:opacity-50 hover:blur-none md:mx-4',
    `dark:logo-${id}`,
    `logo-${id}`,
    restProps.class
  )}
></div>
