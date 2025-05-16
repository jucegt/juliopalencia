<script lang="ts">
  import Logo from '$svg/logo.svelte';
</script>

<a
  href="/"
  aria-label="Julio Palencia"
  class="group ring-primary relative z-10 -m-1 flex size-13.5 items-center justify-center rounded-xl p-1 transition-all ease-in-out focus:outline-none focus-visible:ring-2"
>
  <span
    class="relative block h-full w-full transition-transform duration-300 ease-in-out transform-3d group-focus-within:rotate-y-180 group-hover:rotate-y-180"
  >
    <span class="absolute inset-0 flex items-center justify-center backface-hidden">
      <Logo class="text-primary size-13.5" />
    </span>

    <span class="absolute inset-0 flex rotate-y-180 items-center justify-center backface-hidden">
      <img src="/me.png" alt="Julio Palencia" class="size-full object-cover" />
    </span>
  </span>
</a>
