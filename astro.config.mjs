import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://namanlabc.github.io',
  base: '/my-first-site',

  vite: {
    plugins: [tailwindcss()],
  },
});