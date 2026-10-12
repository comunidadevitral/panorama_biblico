import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://panoramabiblico.org',
  output: 'static',
  integrations: [sitemap()],
});