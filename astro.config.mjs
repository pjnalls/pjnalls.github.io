// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://pjnalls.github.io',
  image: {
    service: passthroughImageService(),
  },
  integrations: [mdx(), sitemap(), tailwind(), react()],
});
