# John Paul Bantillo — Portfolio

A responsive, static React portfolio for John Paul Bantillo: web developer, WordPress developer, SEO specialist, AI-assisted developer, and IT support specialist based in Iloilo, Philippines.

## Stack

- React + TypeScript + Vite
- Three.js with React Three Fiber / Drei for the optimized hero core
- GSAP / ScrollTrigger for section reveals
- Lucide React for interface icons

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run lint
npm run build
```

The deployable static site is written to `dist/`.

## Deploy

The project is static-host friendly. Deploy the `dist/` directory to Netlify, Cloudflare Pages, or Vercel. For GitHub Pages, use the repository’s Pages workflow to run `npm ci && npm run build` and publish `dist/`. The existing custom-domain `CNAME`, `robots.txt`, sitemap, manifest, and visual assets are copied from `public/` into every build.

## Content and assets

Portfolio content is centralized in `src/data/portfolio.ts`; components consume that typed data instead of repeating personal information. Existing project and portrait assets are retained in `assets/` and copied to `public/assets/` for production builds.

The contact form intentionally opens the visitor’s mail client with the submitted message prefilled. It does not pretend to submit anywhere. A hosted form endpoint can be integrated later without exposing credentials.

## Before publishing

- Add a real PDF resume to `public/` and replace the header’s `Request résumé` mail link if a direct download is desired.
- Review all project descriptions and replace/extend any concept previews with verified live URLs when available.
- Keep `src/data/portfolio.ts`, `index.html` structured data, and the public sitemap current when professional details change.
