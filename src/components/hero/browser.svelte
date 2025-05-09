<script lang="ts">
  import { ChevronDown, Lock, MessageCircleMore, RotateCw } from '@lucide/svelte';

  import { t } from '$i18n/config';
  import Button from '$comp/button.svelte';
  import TypingText from '$comp/typing-text.svelte';
</script>

<div
  class="from-light-200 to-light/0 dark:from-dark-200 dark:to-dark/0 shadow-light/30 dark:shadow-dark/30 rounded-lg bg-gradient-to-b px-4 pt-4 text-center shadow-(--shadow-on-top) md:mx-15 md:px-8"
>
  <div class="flex items-center justify-between gap-x-4">
    <div class="hidden gap-x-2 md:flex" aria-hidden="true">
      <div class="aspect-square w-[14px] rounded-full bg-red-400"></div>
      <div class="aspect-square w-[14px] rounded-full bg-yellow-400"></div>
      <div class="aspect-square w-[14px] rounded-full bg-green-400"></div>
    </div>
    <div
      class="font-figtree text-dark dark:text-light bg-light dark:bg-dark border-light-border-200 dark:border-dark-border-200 ring-primary flex h-[36px] shrink-1 grow-1 basis-0 items-center justify-between rounded-sm border px-2 tracking-wider transition md:justify-center"
    >
      <Lock size="18" strokeWidth="2" class="text-gray md:hidden" />
      <TypingText
        texts={[$t('hero.domains.one'), $t('hero.domains.two'), $t('hero.domains.three')]}
      />
      <RotateCw size="18" strokeWidth="2" class="text-gray md:hidden" />
    </div>
    <div
      class="bg-light/50 dark:bg-dark/50 hidden h-[20px] w-[54px] rounded-full md:block"
      aria-hidden="true"
    ></div>
  </div>
  <Button class="my-16 md:text-xl" href="#contact" variant="primary">
    <span class="z-10">{$t('hero.cta')}</span>
    <MessageCircleMore
      aria-hidden="true"
      size="24"
      strokeWidth="2"
      class="z-10 shrink-0 grow-0 basis-[24px]"
    />
  </Button>
  <ChevronDown
    size="24"
    strokeWidth="2"
    class="text-gray mx-auto animate-bounce"
    aria-hidden="true"
  />
</div>
