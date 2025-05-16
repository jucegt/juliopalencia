<script lang="ts">
  import { page } from '$app/state';

  import { t } from '$i18n/config';
  import Button from './button.svelte';

  const { url } = page;
  const { protocol, host, pathname } = url;

  let buttonHref = '';
  if (host.startsWith('en.')) {
    buttonHref = `${protocol}//${host.replace('en.', '')}${pathname}`;
  } else {
    buttonHref = `${protocol}//en.${host}${pathname}`;
  }
</script>

<Button variant="square" aria-label={$t('header.lang.label')} href={buttonHref}>
  {$t('header.lang.text')}
</Button>
