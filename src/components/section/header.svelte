<script lang="ts">
  import Badge from '$comp/badge.svelte';
  import Title from '$comp/title.svelte';

  export let badge: string | undefined = undefined;
  export let title: string | undefined = undefined;
  export let id: string | undefined = undefined;
</script>

{#if badge}
  <Badge class="mb-4 md:mx-auto" {id}>{badge}</Badge>
{/if}
{#if title}
  <Title>{title}</Title>
{/if}
<p class="mx-auto mb-8 max-w-6xl text-base md:mb-16 md:text-center md:text-xl md:text-balance">
  <slot />
</p>
