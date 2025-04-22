<script lang="ts">
  import { type EmblaOptionsType } from 'embla-carousel';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Swipe from './section/swipe.svelte';

  export let role: string | undefined = undefined;
  export let breakpoints: Record<string, EmblaOptionsType> | null = {
    '(min-width: 1280px)': {
      active: false
    }
  };

  let params = {
    options: {
      align: 'center',
      slidesToScroll: 'auto',
      breakpoints
    } as EmblaOptionsType,
    plugins: []
  };
</script>

<div use:emblaCarouselSvelte={params}>
  <div class="flex gap-x-8" {role}>
    <slot />
  </div>
</div>
<Swipe class="xl:hidden" />
