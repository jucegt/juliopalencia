<script lang="ts">
  import { t } from '$i18n/config';
  import Browser from '$comp/hero/browser.svelte';
  import Container from '$comp/container.svelte';
  import Glow from '$comp/hero/glow.svelte';
  import ShinyText from '$comp/shiny-text.svelte';
  import Text from '$comp/hero/text.svelte';
  import Title from '$comp/hero/title.svelte';
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
