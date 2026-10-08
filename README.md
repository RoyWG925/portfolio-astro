# Roy Wang — Portfolio

Personal site for Roy Wang, a product-minded engineer building AI-powered tools and interactive web apps.

**Live:** https://roywg925.github.io/portfolio-astro/

## Tech

- [Astro](https://astro.build/)
- GSAP and Lenis for motion
- Matter.js for the hero physics
- GitHub Pages, deployed by GitHub Actions

## Run locally

Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

The dev server is at `http://localhost:4321/portfolio-astro/` because `astro.config.mjs` sets `base` to `/portfolio-astro`.

## Build and deploy

```sh
npm run build
npm run preview
```

Pushes to `main` run `.github/workflows/deploy.yml`, which builds with Node 22 and deploys to GitHub Pages.
