<script lang="ts">
  import { cn } from '../../utilities/cn';
</script>

<p
  {...$$restProps}
  class={cn(
    'before:border-dark before:font-onest before:text-dark dark:before:text-light dark:before:border-light flex gap-2 align-middle text-base before:inline-flex before:h-6 before:w-6 before:items-center before:justify-center before:rounded-full before:border-2 before:text-(length:--font-xxs) before:font-black before:content-[attr(before)] lg:items-center lg:gap-4 lg:before:h-8 lg:before:w-8 lg:before:text-base',
    $$restProps.class
  )}
>
  <slot />
</p>
