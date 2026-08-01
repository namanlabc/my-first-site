import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://naman.blog',

  vite: {
    plugins: [tailwindcss()],
  },
});