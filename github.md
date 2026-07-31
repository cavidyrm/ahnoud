repo: cavidyrm/ahnoud-tech
branch: main

secondary_repo: cavidyrm/ahnoud-cars
secondary_branch: main

## Last sync
date: 2026-07-31T17:20:00Z

### Updated in this project
- Favicon and app-icon set rebuilt from `assets/ahnoud-logo-tile.png` in cavidyrm/ahnoud-cars.
- Deploy-ready static build in the repo's own layout (Caddyfile + Dockerfile serving `index.html`).
- Expanded SEO metadata, web app manifest, and JSON-LD `@graph`.
- Touch support: vertical swipe preserved on every section, tap states replace hover, horizontal flicks on the stats and stage rows.

## Screen map
| Project screen | Repo files |
|---|---|
| Landing page (hero, about, teams, services, approach, CTA, footer) | `Ahnoud Tech Landing.dc.html`, `support.js`, `image-slot.js`, `images/logo.svg` |
| 404 page | `404.html` |
| Deploy config | `Dockerfile`, `Caddyfile`, `docker-compose.yml`, `.github/workflows/deploy.yml`, `.dockerignore` |
| SEO / icons | `robots.txt`, `sitemap.xml`, `site.webmanifest`, `images/favicon-16.png`, `images/favicon-32.png`, `images/apple-touch-icon.png`, `images/icon-192.png`, `images/icon-512.png`, `images/og-card.png` |

Icon source: `assets/ahnoud-logo-tile.png` from cavidyrm/ahnoud-cars@main, cropped to the tile and resized.
