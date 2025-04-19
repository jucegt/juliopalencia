<script>
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import ShinyText from '../shiny-text.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48">
  <Header badge="Testimonials" title="Client stories">
    Real people, real businesses. These are just a few of the things they’ve said
    <br class="hidden md:block" />
    after working with me › <ShinyText>clear process, real results, and ongoing support.</ShinyText>
  </Header>
</Container>
