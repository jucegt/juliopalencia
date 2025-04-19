<script lang="ts">
  import { type EmblaOptionsType } from 'embla-carousel';
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  let params = {
    options: {
      align: 'center',
      breakpoints: {
        '(min-width: 1280px)': {
          active: false
        }
      }
    } as EmblaOptionsType,
    plugins: []
  };
</script>

<div use:emblaCarouselSvelte={params}>
  <div class="flex gap-x-8">
    <slot />
  </div>
</div>
