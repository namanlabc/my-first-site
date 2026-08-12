# Naman.blog

A small personal site for things I build, things I learn, and thoughts that refuse to leave quietly.

**[Visit naman.blog](https://naman.blog)**

It runs on [Astro](https://astro.build) with a little Tailwind CSS. There are no ads, trackers, cookie banners, fake numbers, or mysterious growth popups. The recommendation algorithm is mostly me remembering to write another post.

## What lives here

- Notes about websites, SEO, AI experiments, and whatever I am currently curious about
- Small tools I built because the existing option annoyed me
- Project pages with the honest version of what worked
- An About page for anyone wondering who left all this lying around

Posts are plain Markdown. The rest is mostly Astro, CSS, and restraint.

## Run it locally

```bash
pnpm install
pnpm dev
```

Astro will open the site at `http://localhost:4321`.

Useful commands:

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro ...` | Run Astro CLI commands |

## Write a post

Add a Markdown file inside `src/content/blog/`:

```md
---
title: "My New Post"
description: "A short, useful summary."
pubDate: 2026-08-12
tags: ["building", "notes"]
---

Write the actual post here.
```

Posts automatically appear on the homepage, archive, RSS feed, sitemap, and previous/next navigation. An optional `image` and `imageAlt` can be added for a featured image.

## Project map

```text
.
├── public/                 # Favicons and images
├── src/
│   ├── components/         # Reusable Astro components
│   ├── content/blog/       # Markdown posts
│   ├── data/projects.ts    # Real projects shown on the site
│   ├── layouts/            # Shared page and article layouts
│   ├── pages/              # Routes, RSS, and sitemap
│   └── styles/global.css   # The visual system
├── astro.config.mjs
└── package.json
```

## Deployment

Every push to `master` runs the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It builds the Astro site and publishes it to GitHub Pages at [naman.blog](https://naman.blog).

If the build turns red, the website has politely declined the latest idea.
