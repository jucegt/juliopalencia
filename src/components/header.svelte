<script>
  import { Mail } from '@lucide/svelte';

  import Button from './button.svelte';
  import Container from './container.svelte';
  import Logo from './header/logo.svelte';
  import Nav from './header/nav.svelte';
  import Right from './header/right.svelte';
</script>

<header class="bg-light/80 dark:bg-dark/80 sticky top-0 z-50 backdrop-blur-sm">
  <Container class="flex w-full items-center justify-between px-4 py-4 md:py-8">
    <Logo />
    <Nav />
    <Right>
      <Button variant="secondary" href="#contact">
        <Mail width="24" class="z-10 shrink-0 grow-0 basis-[24px]" />
        <span class="z-10">
          Let’s talk <span class="hidden md:inline">about your website</span>
        </span>
      </Button>
    </Right>
  </Container>
</header>
