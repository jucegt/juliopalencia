<script lang="ts">
  export let as: keyof HTMLElementTagNameMap = 'h2';
</script>

<svelte:element
  this={as}
  class="text-dark dark:text-light font-onest mb-8 text-2xl font-black sm:text-3xl md:text-center md:text-5xl"
>
  <slot />
</svelte:element>
