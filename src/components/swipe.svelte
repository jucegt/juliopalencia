<script lang="ts">
  import { cn } from '$util/cn';
  import { t } from '$i18n/config';
  import Hand from '$svg/hand.svelte';

  let { ...restProps } = $props();
</script>

<p
  {...restProps}
  class={cn('mt-4 flex items-center justify-center text-center text-sm font-bold', restProps.class)}
>
  {$t('interactions.swipe')}
  <span
    class="before:content-'' before:animate-swipe-dot before:bg-primary/50 relative ml-2 origin-bottom before:invisible before:absolute before:top-0 before:left-[15px] before:h-1.5 before:w-1.5 before:rounded-full"
  >
    <Hand class="animate-swipe-hand relative" size={24} strokeWidth={2} />
  </span>
</p>
