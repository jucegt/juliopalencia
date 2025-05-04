<script lang="ts">
  import { ChevronLeft, ChevronRight } from '@lucide/svelte';
  import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
  import AutoHeight from 'embla-carousel-auto-height';
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  import { carousels } from '$store/services';
  import { cn } from '$util/cn';
  import { t } from '$i18n/config';
  import Swipe from '$comp/swipe.svelte';
  import type { Snippet } from 'svelte';

  type CarouselProps = {
    controls?: boolean;
    id: string;
    role?: string;
    breakpoints?: Record<string, EmblaOptionsType> | null;
    class?: string;
    children?: Snippet;
    autoheight?: boolean;
    swipeClass?: string;
  };

  let {
    controls,
    id,
    role,
    breakpoints = {
      '(min-width: 1280px)': {
        active: false
      }
    },
    autoheight = true,
    swipeClass,
    children,
    ...restProps
  }: CarouselProps = $props();

  let embla: EmblaCarouselType | null = null;
  let selectedIndex: number = $state(0);
  let scrollSnaps: number[] = $state([]);
  let canScrollPrev = $state(false);
  let canScrollNext = $state(false);

  function updateNavigationState(): void {
    if (!embla) return;
    selectedIndex = embla.selectedScrollSnap();
    canScrollPrev = embla.canScrollPrev();
    canScrollNext = embla.canScrollNext();
  }

  function onInit(event: CustomEvent<EmblaCarouselType>): void {
    embla = event.detail;
    carousels.setInstance(id, embla);

    scrollSnaps = embla.scrollSnapList();
    updateNavigationState();

    embla.on('select', updateNavigationState);
    embla.on('reInit', updateNavigationState);
  }

  function scrollPrev(): void {
    embla?.scrollPrev();
  }

  function scrollNext(): void {
    embla?.scrollNext();
  }

  let params = {
    options: {
      align: 'center',
      slidesToScroll: 'auto',
      breakpoints
    } as EmblaOptionsType,
    plugins: autoheight ? [AutoHeight()] : []
  };
</script>

<div use:emblaCarouselSvelte={params} onemblaInit={onInit}>
  <div
    class={cn('flex items-center gap-x-8 transition-[height] ease-in-out', restProps.class)}
    {role}
  >
    {@render children?.()}
  </div>

  {#if controls}
    <div class="mt-4 hidden items-center justify-between lg:flex">
      <div class="flex items-center justify-center gap-4">
        <button
          onclick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label={$t('interactions.prev')}
          class={cn(
            'bg-light-200 dark:bg-dark-200 text-dark dark:text-light flex size-12 items-center justify-center rounded-full transition ease-in-out not-disabled:cursor-pointer',
            !canScrollPrev && 'opacity-20'
          )}
        >
          <ChevronLeft size="24" class="mr-0.5" />
        </button>
        <button
          onclick={scrollNext}
          disabled={!canScrollNext}
          aria-label={$t('interactions.next')}
          class={cn(
            'bg-light-200 dark:bg-dark-200 text-dark dark:text-light flex size-12 items-center justify-center rounded-full transition ease-in-out not-disabled:cursor-pointer',
            !canScrollNext && 'opacity-20'
          )}
        >
          <ChevronRight size="24" class="ml-0.5" />
        </button>
      </div>

      <div class="flex justify-center gap-2">
        {#each scrollSnaps as _, index}
          <button
            onclick={() => embla?.scrollTo(index)}
            class={cn(
              'bg-light-200 dark:bg-dark-200 before:content-"" before:from-gradient-start before:to-gradient-end after:content-"" after:bg-light dark:after:bg-dark relative flex size-4.5 cursor-pointer items-center justify-center rounded-full before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:opacity-0 before:transition before:ease-in-out after:z-10 after:size-2 after:rounded-full after:transition after:ease-in-out',
              index === selectedIndex && 'cursor-default before:opacity-100 after:shadow-sm'
            )}
            aria-label={`${$t('interactions.slide')} ${index + 1}`}
          ></button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<Swipe class={cn('xl:hidden', controls && 'lg:hidden', swipeClass)} />
