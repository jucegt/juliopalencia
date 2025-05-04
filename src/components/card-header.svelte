<script lang="ts">
  import type { Snippet } from 'svelte';
  import { type Icon as IconType } from '@lucide/svelte';

  import { cn } from '$util/cn';
  import SmallTitle from '$comp/small-title.svelte';

  type CardHeaderProps = {
    icon?: typeof IconType;
    class?: string;
    children?: Snippet;
  };

  let { children, icon, ...restProps }: CardHeaderProps = $props();
  const Icon = icon;
</script>

<header class={cn('flex items-center gap-4', restProps.class)}>
  {#if icon}
    <Icon strokeWidth="2" class="text-primary size-6 basis-[24px] lg:size-8 lg:basis-[32px]" />
  {/if}
  <SmallTitle>
    {@render children?.()}
  </SmallTitle>
</header>
