<script lang="ts">
  import { t, locale } from '$i18n/config';
  import Carousel from '$comp/carousel.svelte';
  import Container from '$comp/container.svelte';
  import Header from '$comp/section/header.svelte';
  import ShinyText from '$comp/shiny-text.svelte';
  import Testimonial from '$comp/section/testimonial.svelte';
  import testimonials from '$data/testimonials';

  const list = testimonials[($locale as 'en' | 'es') || 'es'];
</script>

<div class="overflow-hidden">
  <Container as="section" class="flex flex-col" aria-labelledby="testimonials-heading">
    <Header
      badge={$t('testimonials.title')}
      title={$t('testimonials.subtitle')}
      id="testimonials-heading"
    >
      {$t('testimonials.description.text')}
      <ShinyText>{$t('testimonials.description.shiny')}</ShinyText>
    </Header>
    <Carousel id="testimonials-carousel">
      {#each list as { testimonial, id, ...rest } (id)}
        <Testimonial {...rest}>{testimonial}</Testimonial>
      {/each}
    </Carousel>
  </Container>
</div>
