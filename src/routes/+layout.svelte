<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Sitios web para negocios | Julio Palencia – Desarrollador Web</title>
  <meta
    name="description"
    content="Diseño y desarrollo sitios web modernos, rápidos y hechos a medida para que tu negocio venda más. Presencia online sin complicaciones ni tecnicismos."
  />
</svelte:head>

{@render children()}
