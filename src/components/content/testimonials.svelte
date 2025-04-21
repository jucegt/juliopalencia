<script>
  import Carousel from '../carousel.svelte';
  import Container from '../container.svelte';
  import Header from '../section/header.svelte';
  import ShinyText from '../shiny-text.svelte';
  import Testimonial from '../section/testimonial.svelte';

  const testimonials = [
    {
      id: 1,
      name: 'Carolina',
      business: 'Small business owner',
      testimonial:
        '“I had no idea how websites worked, but he explained everything step by step. Super helpful.”'
    },
    {
      id: 2,
      name: 'Luis',
      business: 'Local business owner',
      testimonial:
        '“I just told him what I needed, and he took care of the rest. Now customers contact me online.”'
    },
    {
      id: 3,
      name: 'Andrea',
      business: 'Natural products shop',
      testimonial:
        '“I liked that he didn’t overwhelm me with tech stuff. Straight to the point and delivered what he promised.”'
    }
  ];
</script>

<div class="overflow-hidden">
  <Container as="section" class="flex flex-col" aria-labelledby="testimonials-heading">
    <Header badge="Testimonials" title="Client stories" id="testimonials-heading">
      Real people, real businesses. These are just a few of the things they’ve said
      <br class="hidden md:block" />
      after working with me › <ShinyText
        >clear process, real results, and ongoing support.</ShinyText
      >
    </Header>
    <Carousel role="list">
      {#each testimonials as { testimonial, id, ...rest } (id)}
        <Testimonial role="listitem" {...rest}>{testimonial}</Testimonial>
      {/each}
    </Carousel>
  </Container>
</div>
