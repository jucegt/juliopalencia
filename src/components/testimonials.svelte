<script>
  import Container from './container.svelte';
  import Header from './section/header.svelte';
</script>

<Container as="section" class="my-24 flex flex-col md:my-48">
  <Header badge="Testimonials" title="Client stories">
    Real people, real businesses. These are just a few of the things they’ve said<br
      class="hidden md:block"
    />
    after working with me ›
    <span
      class="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text font-bold text-transparent"
      >clear process, real results, and ongoing support.</span
    >
  </Header>
</Container>
