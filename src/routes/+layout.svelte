<script lang="ts">
  import { t } from '../i18n/config';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>{$t('metadata.title')}</title>
  <meta name="description" content={$t('metadata.description')} />

  <link rel="alternate" hreflang="es" href="https://juliopalencia.com" />
  <link rel="alternate" hreflang="en" href="https://en.juliopalencia.com" />
  <link rel="alternate" hreflang="x-default" href="https://juliopalencia.com" />
</svelte:head>

{@render children()}
