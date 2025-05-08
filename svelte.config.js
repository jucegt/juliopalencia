import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $action: 'src/actions/*',
      $comp: 'src/components/*',
      $data: 'src/data/*',
      $i18n: 'src/i18n/*',
      $service: 'src/services/*',
      $store: 'src/stores/*',
      $svg: 'src/svgs/*',
      $util: 'src/utilities/*'
    }
  }
};

export default config;
