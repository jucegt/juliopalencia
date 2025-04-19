<script lang="ts">
  import { Quote } from '@lucide/svelte';

  export let name: string | undefined;
  export let business: string | undefined;
</script>

<article
  class="bg-light-100 border-light-200 flex shrink-0 grow-0 basis-full flex-col gap-4 rounded-2xl border p-6 select-none sm:basis-sm md:p-8 xl:shrink-1 xl:grow-1 xl:basis-0"
>
  <blockquote class="text-base font-bold"><slot /></blockquote>
  {#if name || business}
    <footer class="flex grow-1 flex-col justify-end">
      <div class="flex items-center justify-between gap-4">
        <div class="shrink-1 grow-1 basis-0">
          {#if name}
            <p class="font-onest text-dark font-bold">{name}</p>
          {/if}
          {#if business}
            <p>{business}</p>
          {/if}
        </div>
        <Quote class="text-primary shrink-0 grow-0 basis-[24px]" size="24" strokeWidth="2" />
      </div>
    </footer>
  {/if}
</article>
