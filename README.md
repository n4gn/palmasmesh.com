# PalmasMesh

Community Meshtastic LoRa mesh network for Palmas del Mar, Humacao, Puerto Rico.

Hurricane-resilient emergency communications and everyday community connectivity.

Public site: https://palmasmesh.com

## Development

This is the source for the public-facing website at palmasmesh.com, built with [Astro](https://astro.build/) as a static site.

```sh
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview the production build locally
```

### Deployment

The site is deployed via Coolify + Traefik on a Hetzner VPS. Coolify builds
from this repo (`main` branch) using a static-site build pack:

- **Build command:** `npm run build`
- **Output directory:** `dist`

## Pages

- `/` — Home (community intro, hurricane-resilience hook, how it works)
- `/hardware/` — What to buy to get on the mesh
- `/setup/` — Setting up a device for PalmasMesh
- `/join/` — How to join the community chat
- `/map/` — Coverage map (placeholder)
- `/faq/` — Frequently asked questions
