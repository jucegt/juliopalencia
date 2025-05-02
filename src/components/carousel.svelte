<script lang="ts">
  import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import AutoHeight from 'embla-carousel-auto-height';

  import { carousels } from '$store/services';
  import Swipe from '$comp/section/swipe.svelte';

  export let id: string;
  export let role: string | undefined = undefined;
  export let breakpoints: Record<string, EmblaOptionsType> | null = {
    '(min-width: 1280px)': {
      active: false
    }
  };

  function onInit(event: CustomEvent<EmblaCarouselType>): void {
    carousels.setInstance(id, event.detail);
  }

  let params = {
    options: {
      align: 'center',
      slidesToScroll: 'auto',
      breakpoints
    } as EmblaOptionsType,
    plugins: [AutoHeight()]
  };
</script>

<div use:emblaCarouselSvelte={params} onemblaInit={onInit}>
  <div class="flex items-center gap-x-8 transition-[height] ease-in-out" {role}>
    <slot />
  </div>
</div>
<Swipe class="xl:hidden" />
