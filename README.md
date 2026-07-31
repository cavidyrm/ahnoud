# Ahnoud Tech, Landing Page

A single-page marketing site for **Ahnoud Tech**, a design-and-engineering studio built around one idea: the brand and the build should never be separated. Two in-house teams, **Kinomad Studio** (design) and **Draft Labs** (engineering), under one roof.

The page is built as a **Design Component** (`.dc.html`): a self-contained HTML file with an inline template and a logic class. It opens directly in a browser — no build step, no bundler, no dependencies to install.

---

## Quick start

Open `Ahnoud Tech Landing.dc.html` in any modern browser, or serve the folder with any static server:

```bash
# any static server works, e.g.
npx serve .
# then open the Landing file in the browser
```

A local server is recommended over `file://` so the fonts, logo, and stock images load without cross-origin restrictions.

---

## File structure

```
.
├── Ahnoud Tech Landing.dc.html   # the page (copied to index.html in the image)
├── 404.html                      # brand-matched not-found page (noindex)
├── support.js                    # Design Component runtime (vendored, do not edit)
├── image-slot.js                 # drag-and-drop image placeholder component
├── robots.txt                    # crawler rules + sitemap pointer
├── sitemap.xml                   # single-URL sitemap
├── site.webmanifest              # PWA manifest (name, icons, theme)
├── Caddyfile                     # static server config: 404s, caching, headers
├── Dockerfile                    # caddy:alpine image, renames the .dc.html to index.html
├── docker-compose.yml            # Traefik-routed service on the server
├── .github/workflows/deploy.yml  # build, push to GHCR, redeploy over SSH
├── images/
│   ├── logo.svg                  # wordmark logo
│   ├── favicon-32.png / favicon-16.png    # generated from assets/ahnoud-logo-tile.png
│   ├── apple-touch-icon.png      # 180x180
│   ├── icon-192.png / icon-512.png   # manifest / Android icons
│   └── og-card.png               # social share image (1200x630)
├── assets/
│   └── ahnoud-logo-tile.png      # icon master (source only, excluded from the image)
├── uploads/                      # working references (excluded from the image)
└── README.md
```

Everything in the repo root except `assets/`, `uploads/`, `*.md`, and the compose/CI files ships into the container (see `.dockerignore`). Favicons are pre-generated into `images/`, so the build needs no image tooling.

---

## Deploy

```bash
docker build -t ghcr.io/cavidyrm/ahnoud-tech:latest .
docker run --rm -p 8080:80 ghcr.io/cavidyrm/ahnoud-tech:latest   # smoke test on :8080
```

Pushing to `main` runs `.github/workflows/deploy.yml`: it builds the image, pushes it to GHCR, then SSHes to the server and runs `docker compose pull && docker compose up -d` in `APP_DIR`. Required secrets: `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY`, `GHCR_TOKEN`, `APP_DIR`.

The `Dockerfile` renames `Ahnoud Tech Landing.dc.html` to `index.html` and installs `Caddyfile` at `/etc/caddy/Caddyfile`, which handles gzip/zstd compression, immutable caching for `support.js` / `image-slot.js` / `images/`, revalidated HTML, security headers, and rewrites any 404 to `404.html`. Traefik terminates TLS and redirects `http` and `www` to `https://ahnoudtech.com`.

---

## Sections

| # | Section | Notes |
|---|---------|-------|
| 1 | **Hero** | Three stacked, sticky frames (Branding → Design → Engineering) that scale up from below with layered image parallax. |
| 2 | **About Us** | Word-by-word reveal on scroll; a rotating stat carousel. Background shifts light → dark through this stretch. |
| 3 | **Teams** | Kinomad Studio and Draft Labs, each with disciplines and a parallaxing visual. Kinomad Studio links out. |
| 4 | **Services** | Six-row list with a left-to-right invert-on-hover fill. |
| 5 | **Studio Approach** | Four-stage accordion (Identity / Design / Build / Operate) styled as the hero's cream strip bars. |
| 6 | **CTA** | Pinned full-bleed call to action with a sliding last line. |
| 7 | **Footer** | Reveals beneath the page as you scroll; big nav, contact, and an interactive halftone strip that reacts to the cursor. |

---

## Tweaks (editor props)

The Design Component exposes a few editable props (shown as a Tweaks panel in the editor, or set via the `data-props` attribute):

- **Device preview** — Desktop / Tablet / Mobile responsive preview.
- **Accent · Ink** — Kinomad Studio accent color.
- **Accent · Draft** — Draft Labs accent color.
- **Contact email** — used across the nav, footer, and CTA `mailto:` links.
- **Save as default** — snapshots the current tweak values to `localStorage` so they persist as defaults on the next visit.

---

## Design notes

- **Type:** [General Sans](https://www.fontshare.com/fonts/general-sans) (via Fontshare) for display and body; a monospace stack for micro-labels.
- **Palette:** near-black `#0c0d10` and warm off-white `#e9e7e1`, with two configurable accents. The mid-page light stretch inverts foreground/background on a smoothstep ramp so text always keeps contrast.
- **Motion:** scroll-driven parallax and the halftone field are written directly to element styles inside a single scroll/RAF loop for smoothness; UI state (menu, accordion, stat carousel) is React-style state on the logic class.
- **Cursor:** a small delayed dot that inverts over light and dark areas (fine-pointer devices only).

---

## Images

The hero, team, founder, and CTA visuals are pulled from [Unsplash](https://unsplash.com) via URL as placeholders. To use your own art, drop images onto the slots in the editor (each `image-slot` persists its drop), or replace the `src` URLs in the template. The only bundled raster asset is `images/logo.svg`.

---

## SEO

In the page head: title, meta description, canonical, robots directives (`max-image-preview:large`), Open Graph and Twitter cards with `images/og-card.png` plus alt text, theme color, color-scheme, PWA/apple app tags, the full favicon set, and a JSON-LD `@graph` (Organization with Kinomad Studio and Draft Labs as sub-organizations, WebSite, WebPage, and a ProfessionalService OfferCatalog of all six services). The hero carries a visually-hidden `h1`; sections use `h2`/`h3`. `robots.txt` and `sitemap.xml` are at the root.

**Before launch, the developer should:**

1. Replace `https://ahnoudtech.com` in the canonical, OG/Twitter, sitemap, and JSON-LD if the production domain differs.
2. Fill the JSON-LD `sameAs` array with the studio's social profile URLs.
3. Replace the Unsplash placeholder images with optimized, self-hosted assets (WebP/AVIF, sized to the layout) and credit or license them properly.
4. All page copy is inline in the HTML, so crawlers see the content without JS; for maximum coverage consider a prerender snapshot at build time.
5. Verify `404.html` is served for unknown paths (the `Caddyfile` handles this) and submit the sitemap in Search Console.

---

## Tech

- No framework install, no build. The `.dc.html` is rendered by `support.js` (the Design Component runtime) — treat it as vendored; don't edit it.
- `image-slot.js` provides the `<image-slot>` drag-and-drop placeholder used for every photo.
- `404.html` is a standalone page (plain HTML/CSS/JS) that mirrors the site's aesthetic and reuses the halftone effect.

---

© 2026 Ahnoud Tech. Design and Engineering.
