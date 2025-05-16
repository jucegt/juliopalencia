<script lang="ts">
  import { Moon, Sun } from '@lucide/svelte';
  import { page } from '$app/state';

  import { t } from '$i18n/config';
  import { setTheme } from '$util/theme';
  import Button from './button.svelte';

  const { data } = page;
  let theme = $state(data.theme);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    theme = next;
    setTheme(next);
  }
</script>

<Button variant="square" aria-label={$t('header.theme')} onclick={toggleTheme}>
  {#if theme === 'dark'}
    <Sun class="transition-[rotate] ease-in-out group-hover:-rotate-10" size="24" strokeWidth="2" />
  {:else}
    <Moon
      class="transition-[rotate] ease-in-out group-hover:-rotate-10"
      size="24"
      strokeWidth="2"
    />
  {/if}
</Button>
