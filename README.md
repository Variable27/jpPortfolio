# John Paul Bantillo — Portfolio

A modern, responsive, SEO-optimized personal portfolio for **John Paul Bantillo**,
Information Technology graduate (Cum Laude) — Web &amp; Mobile Developer, SEO Specialist,
and Virtual Assistant.

🔗 **Live site:** https://johnpaulbantillo.site/

## Features
- Modern dark UI with animated gradient, typing effect, cursor spotlight, and skills marquee
- Fully responsive (desktop → mobile) with an accessible mobile menu
- **Rich-snippet SEO layer:** JSON-LD `@graph` (`Person` + `ProfilePage` + `WebSite` + `BreadcrumbList` + `FAQPage`), full meta tags, geo/local tags, `hreflang`, Open Graph (`profile`) + Twitter cards, `robots.txt`, image `sitemap.xml`
- **International-client focused:** Services section, "available worldwide / remote" messaging, FAQ section eligible for Google FAQ rich results
- **Performance-tuned:** non-blocking Google Fonts load, preconnect/preload, deferred work — better Core Web Vitals
- **AMP home page:** a valid, JavaScript-free AMP alternative at `/amp.html`, connected from the canonical home page for AMP discovery
- Zero build step — plain HTML, CSS, and vanilla JavaScript

## ⚠️ Finish the rich snippet — add your profile links
The single biggest signal for Google to show an entity / knowledge snippet for
"John Paul Bantillo" is the `sameAs` array in the JSON-LD. Open `index.html`,
find `"sameAs"` (GitHub is already filled in), and add your real URLs:

```json
"sameAs": [
  "https://github.com/Variable27",
  "https://www.linkedin.com/in/your-handle",
  "https://www.facebook.com/your-handle",
  "https://x.com/your-handle",
  "https://www.instagram.com/your-handle",
  "https://www.upwork.com/freelancers/your-id"
]
```

Then submit the sitemap in [Google Search Console](https://search.google.com/search-console)
and validate the page with the [Rich Results Test](https://search.google.com/test/rich-results).

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

## Custom domain & HTTPS
The site is served from the custom domain **johnpaulbantillo.site** (configured via
the `CNAME` file). All canonical / Open Graph / structured-data URLs, `robots.txt`,
and `sitemap.xml` point to `https://johnpaulbantillo.site/`.

To serve over HTTPS, in **GitHub → repo Settings → Pages**:
1. Confirm the custom domain shows `johnpaulbantillo.site` with a green check (DNS verified).
2. Wait for GitHub to provision the TLS certificate (can take up to 24h after DNS resolves).
3. Tick **Enforce HTTPS**.

DNS at your registrar should have four `A` records for the apex domain pointing to
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and/or a
`CNAME` `www → variable27.github.io`).
