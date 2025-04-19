<script>
  import Container from './container.svelte';
  import Header from './section/header.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48">
  <Header badge="Benefits" title="Why have a website">
    A good website makes you easier to find, builds trust, and helps more people reach you. These
    are just a few of the ways I make that happen › <span
      class="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text font-bold text-transparent"
      >without tech headaches.</span
    >
  </Header>
</Container>
