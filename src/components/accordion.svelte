<script lang="ts">
  import { Icon as IconType } from '@lucide/svelte';
  import ChevronDown from '@lucide/svelte/icons/chevron-down';

  import { cn } from '$util/cn';
  import SmallTitle from './small-title.svelte';

  type AccordionProps = {
    question: string;
    icon?: typeof IconType;
    answer?: string;
  };

  let { question, icon, answer }: AccordionProps = $props();
  let open = $state(false);
  const Icon = icon;

  function toggle() {
    open = !open;
  }
</script>

<div class="border-light-200 dark:border-dark-200 bg-light-100 dark:bg-dark-100 rounded-xl border">
  <button
    class="group text-dark dark:text-light focus-visible:ring-primary z-10 flex w-full cursor-pointer items-center justify-between rounded-xl p-4 text-left font-bold outline-none focus-visible:ring-2 md:px-8 md:py-6"
    onclick={toggle}
    aria-expanded={open}
  >
    <SmallTitle class="items-center md:text-xl/6" as="span">
      {#if icon}
        <Icon
          strokeWidth="2"
          class="text-primary size-6 shrink-0 basis-6 transition-[rotate] ease-in-out group-hover:-rotate-10"
        />
      {/if}
      {question}
    </SmallTitle>
    <ChevronDown class={cn('size-6 shrink-0 text-gray-200 transition', open && 'rotate-180')} />
  </button>

  <div
    class={cn(
      'grid transition-[grid-template-rows] duration-300 ease-in-out ',
      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
    )}
  >
    <div class="overflow-hidden text-base">
      <div class="border-light-200 dark:border-dark-200 border-t p-4 md:px-8 md:py-6">
        {@html answer}
      </div>
    </div>
  </div>
</div>
