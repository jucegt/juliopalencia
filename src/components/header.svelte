<script lang="ts">
  import { Mail } from '@lucide/svelte';

  import Button from './button.svelte';
  import Container from './container.svelte';
  import Logo from './header/logo.svelte';
  import Nav from './header/nav.svelte';
  import Right from './header/right.svelte';
  import { cn } from '../utilities/cn';

  const SCROLL_LIMIT = 100;
  const SCROLL_LIMIT_MOBILE = 50;
  let isAfterPosition = $state(false);

  $effect(() => {
    const handleScroll = () => {
      const LIMIT = window.innerWidth < 768 ? SCROLL_LIMIT_MOBILE : SCROLL_LIMIT;
      isAfterPosition = window.scrollY > LIMIT;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header
  class={cn(
    "before:content-'' before:bg-light/80 dark:before:bg-dark/80 before:border-light-200 dark:before:border-dark-200 sticky top-0 z-50 before:absolute before:inset-0 before:-translate-y-full before:border-b before:backdrop-blur-sm before:transition",
    isAfterPosition && 'before:translate-0'
  )}
>
  <Container class="flex w-full items-center justify-between py-4 md:py-6">
    <Logo />
    <Nav />
    <Right>
      <Button variant="secondary" href="#contact">
        <Mail
          size="24"
          strokeWidth="2"
          class="z-10 shrink-0 grow-0 basis-[24px]"
          aria-hidden="true"
        />
        <span class="z-10">
          Let’s talk <span class="hidden md:inline">about your website</span>
        </span>
      </Button>
    </Right>
  </Container>
</header>
