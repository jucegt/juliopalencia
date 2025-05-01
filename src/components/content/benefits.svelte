<script lang="ts">
  import { t } from '../../i18n/config';
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import ShinyText from '../shiny-text.svelte';
</script>

<Container
  as="section"
  class="my-24 flex flex-col md:my-48"
  aria-labelledby="benefits-heading"
  id="benefits"
>
  <Header badge={$t('benefits.title')} title={$t('benefits.subtitle')} id="benefits-heading">
    {$t('benefits.description.text')}
    <ShinyText>{$t('benefits.description.shiny')}</ShinyText>
  </Header>
</Container>
