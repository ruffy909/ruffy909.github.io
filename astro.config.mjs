// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Your live URL (used for sitemap + canonical URLs).
  site: 'https://ruffy909.github.io',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  build: {
    // Inline small stylesheets to remove render-blocking requests.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
