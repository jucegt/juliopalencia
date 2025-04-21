<script>
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import ShinyText from '../shiny-text.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48" aria-labelledby="benefits-heading">
  <Header badge="Benefits" title="Why have a website" id="benefits-heading">
    A good website makes you easier to find, builds trust, and helps more people reach you. These
    are just a few of the ways I make that happen › <ShinyText>without tech headaches.</ShinyText>
  </Header>
</Container>
