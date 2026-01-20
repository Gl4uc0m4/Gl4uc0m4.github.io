import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compressor from 'astro-compressor';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest } from './src/utils/manifest';

// https://astro.build/config
export default defineConfig({
  site: 'https://gl4uc0m4security.com/', // tu dominio exacto
  base: '/', // asegura que los assets se busquen desde la raíz
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      drafts: true,
    }),
    tailwind(),
    compressor({ gzip: true, brotli: true }),
    sitemap(),
    robotsTxt(),
  ],
  vite: {
    resolve: {
      alias: {
        '@styles': new URL('./src/styles', import.meta.url),
        '@components': new URL('./src/components', import.meta.url),
        '@utils': new URL('./src/utils', import.meta.url),
      },
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist',
          globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
          navigateFallback: null,
        },
      }),
    ],
  },
});
