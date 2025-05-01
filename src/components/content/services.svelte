<script lang="ts">
  import { t, locale } from '../../i18n/config';
  import { Compass, Workflow } from '@lucide/svelte';
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import SmallTitle from '../section/small-title.svelte';
  import ShinyText from '../shiny-text.svelte';
  import Step from '../section/step.svelte';
  import Service from '../section/service.svelte';
  import Button from '../button.svelte';
  import Carousel from '../carousel.svelte';
  import { carousels } from '../../stores/services';
  import services from '../../data/services';

  function scrollTo(index: number) {
    const embla = carousels.getInstance('services-carousel');
    embla?.scrollTo(index);
  }

  const lang = ($locale as 'en' | 'es') || 'es';
  const list = services[lang];
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="services-heading">
  <Header badge={$t('services.title')} title={$t('services.subtitle')} id="services-heading">
    {$t('services.description.text')}
    <ShinyText>{$t('services.description.shiny')}</ShinyText>
  </Header>
  <div class="flex flex-col gap-8 md:flex-row md:items-center lg:gap-16">
    <section
      class="md:shrink-0 md:grow-0 md:basis-[40%] lg:basis-[32%] xl:basis-[28%]"
      aria-labelledby="how-it-works-heading"
    >
      <SmallTitle id="how-it-works-heading">
        <Workflow class="text-primary h-6 w-6 md:h-8 md:w-8" strokeWidth="2" />
        {$t('services.steps.title')}
      </SmallTitle>
      <Step before={1} class="mt-8">{$t('services.steps.one')}</Step>
      <Step before={2} class="mt-4 md:mt-6">{$t('services.steps.two')}</Step>
      <Step before={3} class="mt-4 md:mt-6">{$t('services.steps.three')}</Step>
      <Step before={4} class="mt-4 md:mt-6">{$t('services.steps.four')}</Step>
      <button
        class="focus-visible:ring-primary ring-primary mt-8 flex cursor-pointer flex-wrap items-center gap-x-4 gap-y-2 rounded-md p-1 focus:outline-none focus-visible:ring-2"
        on:click={() => scrollTo(3)}
      >
        <Compass size="24" strokeWidth="2" class="text-primary" />
        <ShinyText>{$t('services.button.shiny')}</ShinyText>
        {$t('services.button.text')}
      </button>
    </section>
    <div class="min-w-0 md:grow md:basis-0">
      <div
        class="before:content-'' after:content-'' before:from-light before:to-light/0 after:from-light after:to-light/0 dark:before:from-dark dark:before:to-dark/0 dark:after:from-dark dark:after:to-dark/0 relative -mx-4 overflow-hidden px-4 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-4 before:bg-gradient-to-r after:absolute after:top-0 after:right-0 after:h-full after:w-4 after:bg-gradient-to-l lg:-mx-8 lg:px-8 lg:before:w-8 lg:after:w-8"
      >
        <Carousel breakpoints={null} role="list" id="services-carousel">
          {#each list as { buttons, ...rest } (rest.name)}
            <Service {...rest} currency={lang === 'en' ? 'USD' : 'GTQ'}>
              <Button class="w-fit" variant="primary" href={buttons.primary.href}>
                <span class="z-10">{buttons.primary.text}</span>
                <buttons.primary.icon class="z-10" size="24" strokeWidth="2" />
              </Button>
              <Button class="w-fit" variant="secondary" href={buttons.secondary.href}>
                <span>{buttons.secondary.text}</span>
                <buttons.secondary.icon size="24" strokeWidth="2" />
              </Button>
            </Service>
          {/each}
        </Carousel>
      </div>
    </div>
  </div>
</Container>
