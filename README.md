# John Paul Bantillo — Portfolio

A modern, responsive, SEO-optimized personal portfolio for **John Paul Bantillo**,
Information Technology graduate (Cum Laude) and Web &amp; Mobile Developer.

🔗 **Live site:** https://variable27.github.io/jpPortfolio/

## Features
- Modern dark UI with animated gradient, typing effect, cursor spotlight, and skills marquee
- Fully responsive (desktop → mobile) with an accessible mobile menu
- SEO layer: meta tags, JSON-LD `Person` structured data, Open Graph + Twitter cards, `robots.txt`, `sitemap.xml`
- Zero build step — plain HTML, CSS, and vanilla JavaScript

## Structure
```
index.html          # Page content
styles.css          # Theming and layout
script.js           # Interactions (reveal, typing, counters, menu)
robots.txt          # Crawl directives
sitemap.xml         # Sitemap for search engines
site.webmanifest    # PWA manifest
```

## Local preview
Open `index.html` directly in a browser, or serve it:
```bash
npx serve .
```

## Notes
Update the domain in `index.html` (canonical / Open Graph), `robots.txt`, and
`sitemap.xml` if you move the site to a custom domain.
