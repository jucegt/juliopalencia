<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Icon as IconType } from '@lucide/svelte';
  import { cn } from '$util/cn';

  type ToastProps = {
    title: string;
    icon?: typeof IconType;
    type?: 'success' | 'error';
    children?: Snippet;
    class?: string;
  };

  let { title, icon, type, children, ...restProps }: ToastProps = $props();
  const Icon = icon;

  const variant = {
    success: 'bg-green-100/90 border-2 border-green-400',
    error: 'bg-red-100/90 border-2 border-red-400'
  };

  const text = {
    success: 'text-green-600',
    error: 'text-red-600'
  };
</script>

<div
  class={cn(
    'animate-fade-up fixed right-4 bottom-4 z-10 ml-4 flex items-center gap-4 rounded-xl p-4 backdrop-blur-sm transition ease-in-out md:right-8 md:bottom-8 md:ml-8 md:px-8',
    variant[type || 'success'],
    restProps.class
  )}
>
  <Icon
    class={cn('size-6 shrink-0 basis-6 md:size-8 md:basis-8', text[type || 'success'])}
    strokeWidth={2}
  />

  <p class="text-dark">
    <strong class={cn('font-onest block text-base font-bold md:text-lg', text[type || 'success'])}>
      {title}
    </strong>
    {@render children?.()}
  </p>
</div>
