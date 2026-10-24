import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { GUIDES, guideIndexable } from './src/data/guides.ts';

// Un guide n'entre dans le sitemap qu'une fois relu par un expert-comptable ; l'index des guides, dès le premier.
const exclus = [
  '/merci',
  ...GUIDES.filter((g) => !guideIndexable(g)).map((g) => `/guides/${g.slug}`),
  ...(GUIDES.some(guideIndexable) ? [] : ['/guides/']),
];

export default defineConfig({
  site: 'https://tunfortune.com',
  integrations: [sitemap({ filter: (page) => !exclus.some((chemin) => new URL(page).pathname.startsWith(chemin)) })],
});
