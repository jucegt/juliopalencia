<script lang="ts">
  import Badge from '../badge.svelte';
  import Title from '../title.svelte';

  export let badge: string | undefined = undefined;
  export let title: string | undefined = undefined;
</script>

{#if badge}
  <Badge class="mb-4 md:mx-auto">{badge}</Badge>
{/if}
{#if title}
  <Title>{title}</Title>
{/if}
<p class="mb-8 text-base md:mb-16 md:text-center md:text-xl md:text-balance"><slot /></p>
