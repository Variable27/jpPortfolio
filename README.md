# John Paul Bantillo — Portfolio

A modern, responsive, SEO-optimized personal portfolio for **John Paul Bantillo**,
Information Technology graduate (Cum Laude) and Web &amp; Mobile Developer.

🔗 **Live site:** https://variable27.github.io/jpPortfolio/

## Features
- Modern dark UI with animated gradient, typing effect, cursor spotlight, and skills marquee
- Fully responsive (desktop → mobile) with an accessible mobile menu
- **Rich-snippet SEO layer:** JSON-LD `@graph` (`Person` + `ProfilePage` + `WebSite` + `BreadcrumbList` + `FAQPage`), full meta tags, geo/local tags, `hreflang`, Open Graph (`profile`) + Twitter cards, `robots.txt`, image `sitemap.xml`
- **International-client focused:** Services section, "available worldwide / remote" messaging, FAQ section eligible for Google FAQ rich results
- **Performance-tuned:** non-blocking Google Fonts load, preconnect/preload, deferred work — better Core Web Vitals
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

## Notes
Update the domain in `index.html` (canonical / Open Graph), `robots.txt`, and
`sitemap.xml` if you move the site to a custom domain.
