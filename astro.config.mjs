import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    build: {
      assetsDir: 'assets'
    },
    ssr: {
      external: ['ami*']
    }
  }
});
