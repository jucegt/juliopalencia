<script lang="ts">
  import { page } from '$app/state';
  import Container from './container.svelte';
  import ShinyText from './shiny-text.svelte';

  const { data } = page;
  const { year } = data;
</script>

<footer>
  <Container class="border-light-200 dark:border-dark-200 border-t py-8 md:py-12">
    <p class="text-center text-sm">
      &copy; {year} Julio Palencia ›
      <ShinyText>Crafting solutions through creativity and technology.</ShinyText>
    </p>
  </Container>
</footer>
