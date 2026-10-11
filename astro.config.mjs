import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',

  vite: {
    build: {
      assetsDir: 'assets'
    },
    ssr: {
      external: ['ami*']
    }
  },

  integrations: [tailwind()]
});