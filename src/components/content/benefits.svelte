<script lang="ts">
  import { t } from '$i18n/config';
  import Container from '$comp/container.svelte';
  import Header from '$comp/section/header.svelte';
  import ShinyText from '$comp/shiny-text.svelte';
  import benefits from '$data/benefits';
  import Benefit from '$comp/section/benefit.svelte';
  import Carousel from '$comp/carousel.svelte';
</script>

<div class="my-24 overflow-hidden md:my-48">
  <Container as="section" class="flex flex-col" aria-labelledby="benefits-heading" id="benefits">
    <Header badge={$t('benefits.title')} title={$t('benefits.subtitle')} id="benefits-heading">
      {$t('benefits.description.text')}
      <ShinyText>{$t('benefits.description.shiny')}</ShinyText>
    </Header>
    <Carousel
      breakpoints={{
        '(min-width: 1024px)': {
          active: false
        }
      }}
      autoheight={false}
      id="benefits-carousel"
      role="list"
      class="flex items-stretch gap-4 md:gap-8 lg:grid lg:auto-rows-auto lg:grid-cols-3"
      swipeClass="lg:hidden"
    >
      {#each benefits as { id, button, ...restProps } (id)}
        <Benefit buttonText={button?.text} buttonIcon={button?.icon} {...restProps} />
      {/each}
    </Carousel>
  </Container>
</div>
