<script>
  import { Mail } from '@lucide/svelte';

  import Button from './button.svelte';
  import Container from './container.svelte';
  import Logo from './header/logo.svelte';
  import Nav from './header/nav.svelte';
  import Right from './header/right.svelte';
</script>

<header
  class="before:content-'' before:bg-light/70 before:dark:bg-dark/70 sticky top-0 z-50 before:absolute before:inset-0 before:opacity-0 before:backdrop-blur-sm"
>
  <Container class="flex w-full items-center justify-between py-4 md:py-8">
    <Logo />
    <Nav />
    <Right>
      <Button variant="secondary" href="#contact">
        <Mail width="24" class="z-10 shrink-0 grow-0 basis-[24px]" aria-hidden="true" />
        <span class="z-10">
          Let’s talk <span class="hidden md:inline">about your website</span>
        </span>
      </Button>
    </Right>
  </Container>
</header>
