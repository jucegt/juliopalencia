<script lang="ts">
  import { Mail } from '@lucide/svelte';

  import { t } from '$i18n/config';
  import Button from '$comp/button.svelte';
</script>

<Button variant="secondary" href="#contact">
  <Mail
    size="24"
    strokeWidth="2"
    class="z-10 shrink-0 grow-0 basis-[24px] transition-[rotate] ease-in-out group-hover:-rotate-10"
    aria-hidden="true"
  />
  <span class="z-10">
    {$t('header.button.small')}
    <span class="hidden lg:inline">{$t('header.button.extended')}</span>
  </span>
</Button>
