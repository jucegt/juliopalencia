<script lang="ts">
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  import Lock from '@lucide/svelte/icons/lock';
  import MessageCircleMore from '@lucide/svelte/icons/message-circle-more';
  import RotateCw from '@lucide/svelte/icons/rotate-cw';

  import { t } from '$i18n/config';
  import Button from '$comp/button.svelte';
  import TypingText from '$comp/typing-text.svelte';
</script>

<div
  class="from-light-200 to-light/0 dark:from-dark-200 dark:to-dark/0 shadow-light/30 dark:shadow-dark/30 rounded-lg bg-gradient-to-b px-4 pt-4 text-center shadow-(--shadow-on-top) md:mx-15 md:px-8"
>
  <div class="flex items-center justify-between gap-x-4">
    <div class="hidden gap-x-2 md:flex" aria-hidden="true">
      <div class="aspect-square w-3.5 rounded-full bg-red-400"></div>
      <div class="aspect-square w-3.5 rounded-full bg-yellow-400"></div>
      <div class="aspect-square w-3.5 rounded-full bg-green-400"></div>
    </div>
    <div
      class="font-figtree text-dark dark:text-light bg-light dark:bg-dark border-light-border-200 dark:border-dark-border-200 ring-primary flex h-9 shrink-1 grow-1 basis-0 items-center justify-between rounded-sm border px-2 tracking-wider md:justify-center"
    >
      <Lock size="18" strokeWidth="2" class="text-gray md:hidden" />
      <TypingText
        texts={[$t('hero.domains.one'), $t('hero.domains.two'), $t('hero.domains.three')]}
      />
      <RotateCw size="18" strokeWidth="2" class="text-gray md:hidden" />
    </div>
    <div
      class="bg-light/50 dark:bg-dark/50 hidden h-5 w-13.5 rounded-full md:block"
      aria-hidden="true"
    ></div>
  </div>
  <Button class="my-16 md:text-xl" href="#contact" variant="primary">
    <span class="z-10">{$t('hero.cta')}</span>
    <MessageCircleMore
      aria-hidden="true"
      size="24"
      strokeWidth="2"
      class="z-10 shrink-0 grow-0 basis-6 transition-[rotate] ease-in-out group-hover:rotate-10"
    />
  </Button>
  <ChevronDown
    size="24"
    strokeWidth="2"
    class="text-gray mx-auto animate-bounce"
    aria-hidden="true"
  />
</div>
