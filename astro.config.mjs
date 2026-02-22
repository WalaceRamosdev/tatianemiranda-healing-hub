import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tatiane-miranda-psicologa.vercel.app',
  integrations: [tailwind(), sitemap()],
});
