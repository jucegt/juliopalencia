<script lang="ts">
  import { t } from '../i18n/config';
  import Container from './container.svelte';
  import Browser from './hero/browser.svelte';
  import Glow from './hero/glow.svelte';
  import Text from './hero/text.svelte';
  import Title from './hero/title.svelte';
  import ShinyText from './shiny-text.svelte';
</script>

<Glow />
<Container as="main" class="relative" role="main">
  <Text class="mt-16 mb-16 lg:mt-32">{$t('hero.text')}</Text>
  <Title class="my-16">
    {$t('hero.title.start')}
    <strong class="text-dark dark:text-light font-black">{$t('hero.title.highlighted')}</strong>
    {$t('hero.title.middle')}
    <ShinyText as="strong" class="font-black">{$t('hero.title.shiny')}</ShinyText>
  </Title>
  <Text class="my-16 text-balance">
    {$t('hero.subtitle')}
  </Text>
  <Browser />
</Container>
