<script lang="ts">
  import { t, locale } from '$i18n/config';
  import Container from '$comp/container.svelte';
  import Header from '$comp/section/header.svelte';
  import ShinyText from '$comp/shiny-text.svelte';
  import benefits from '$data/benefits';
  import Benefit from '$comp/section/benefit.svelte';
  import Carousel from '$comp/carousel.svelte';

  const list = benefits[($locale as 'en' | 'es') || 'es'];
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
      class="flex items-stretch gap-4 md:gap-8 lg:grid lg:auto-rows-auto lg:grid-cols-3"
      swipeClass="lg:hidden"
    >
      {#each list as { id, button, ...restProps } (id)}
        <Benefit
          buttonText={button?.text}
          buttonTextHidden={button?.hidden}
          buttonIcon={button?.icon}
          buttonHref={button?.href}
          {...restProps}
        />
      {/each}
    </Carousel>
  </Container>
</div>
