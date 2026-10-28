import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: ['.svelte', '.md'],
      preprocess: [
        sveltePreprocess({ pug: true }),
        vitePreprocess(),
        mdsvex({ extensions: ['.md'] })
      ],
      adapter: adapter()
    })
  ],
  server: { fs: { allow: ['..'] } }
});
