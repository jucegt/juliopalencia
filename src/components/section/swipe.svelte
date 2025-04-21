<script lang="ts">
  import Hand from '../../svgs/hand.svelte';
  import { cn } from '../../utilities/cn';
</script>

<p
  {...$$restProps}
  class={cn(
    'mt-4 flex items-center justify-center text-center text-sm font-bold',
    $$restProps.class
  )}
>
  Swipe to see more
  <span
    class="before:content-'' before:animate-swipe-dot before:bg-primary/50 relative ml-2 origin-bottom before:invisible before:absolute before:top-0 before:left-[15px] before:h-[6px] before:w-[6px] before:rounded-full"
  >
    <Hand class="animate-swipe-hand relative" size={24} strokeWidth={2} />
  </span>
</p>
