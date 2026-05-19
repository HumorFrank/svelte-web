
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import Unocss from 'unocss/vite';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    Unocss(),
  ],
  server: {
    open: false,
    host: '0.0.0.0',
    port: 8000,
  },
});
