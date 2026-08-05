// @ts-check
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Read rather than `import ... with { type: 'json' }`: import attributes are a
// recent addition and this config is the first thing the deploy runs. A build
// box on the wrong Node minor should fail on the engines check, not on syntax.
const nodeData = JSON.parse(
  readFileSync(fileURLToPath(new URL('./src/data/nodes.json', import.meta.url)), 'utf-8')
);

// Per-node pages (PalmasMesh.com/<slug>, PM-166) are generic while they have no
// real content, and each canonical slug also generates case-variant aliases.
// Keep the whole set out of the sitemap rather than filling it with near
// duplicates — they are noindex'd in Base.astro for the same reason. When a node
// gets a real page, drop it from this list and from that noindex.
const nodePaths = new Set(
  nodeData.nodes.flatMap(({ slug }) =>
    [slug, slug.toLowerCase(), slug.toUpperCase()].map((s) => `/${s}/`)
  )
);

// https://astro.build/config
export default defineConfig({
  site: 'https://palmasmesh.com',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !nodePaths.has(new URL(page).pathname),
    }),
  ],
});
