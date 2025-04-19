<script lang="ts">
  import Container from './container.svelte';
  import Browser from './hero/browser.svelte';
  import Glow from './hero/glow.svelte';
  import Text from './hero/text.svelte';
  import Title from './hero/title.svelte';
  import ShinyText from './shiny-text.svelte';
</script>

<Glow />
<Container as="main" class="relative" role="main">
  <Text class="mt-16 mb-16 lg:mt-32">Got a business? You’re in the right place.</Text>
  <Title class="my-16">
    Your <strong class="text-dark dark:text-light font-black">business</strong> deserves a
    <ShinyText as="strong" class="font-black">professional website</ShinyText>
  </Title>
  <Text class="my-16 text-balance">
    I build websites that help small businesses look professional and get more customers online.
  </Text>
  <Browser />
</Container>
