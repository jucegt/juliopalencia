<script lang="ts">
  import { smoothScroll } from '../../actions/smooth-scroll';
  import { t } from '../../i18n/config';
  import Link from './link.svelte';
</script>

<nav
  class="font-figtree border-light-200 dark:border-dark-200 z-10 mr-auto ml-8 hidden h-12 items-center gap-x-8 border-l pl-8 text-base font-medium md:flex"
  aria-label="Main Menu"
  use:smoothScroll
>
  <Link href="#benefits">{$t('nav.benefits')}</Link>
  <Link href="#services">{$t('nav.services')}</Link>
  <Link href="#contact">{$t('nav.contact')}</Link>
</nav>
