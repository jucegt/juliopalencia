<script lang="ts">
  import { locale } from '$i18n/config';
  import Accordion from '$comp/accordion.svelte';
  import Container from '$comp/container.svelte';
  import faq from '$data/faq';
  import Header from '$comp/section/header.svelte';
  import ShinyText from '$comp/shiny-text.svelte';

  const list = faq[($locale as 'en' | 'es') || 'es'];
  const firstPart = list.slice(0, 3);
  const secondPart = list.slice(3, 6);
</script>

<Container as="section" class="flex flex-col" aria-labelledby="faq-heading">
  <Header badge="FAQ" title="What people usually ask me" id="faq-heading">
    From pricing to timelines, these are the most common questions clients ask me ›
    <ShinyText>answered in a clear and straightforward way.</ShinyText>
  </Header>
  <div class="grid gap-4 lg:gap-8 xl:grid-cols-2">
    <div class="flex flex-col gap-4 lg:gap-8">
      {#each firstPart as { id, ...restProps } (id)}
        <Accordion {...restProps} />
      {/each}
    </div>
    <div class="flex flex-col gap-4 lg:gap-8">
      {#each secondPart as { id, ...restProps } (id)}
        <Accordion {...restProps} />
      {/each}
    </div>
  </div>
</Container>
