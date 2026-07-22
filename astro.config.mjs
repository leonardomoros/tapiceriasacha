// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Non-www is the canonical domain that actually ranks today (see GSC data:
  // the www/http variant is an indexed duplicate splitting authority — do not
  // switch this back without fixing that redirect first).
  site: 'https://tapiceriasacha.com',
  trailingSlash: 'always',
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'media.base44.com' }],
  },
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
