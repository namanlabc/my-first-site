# Naman's Notes

A quiet, personal blog built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). No tracking scripts, no advertisements, and no algorithms — just words, code, and thoughts.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.ico, favicon.svg
├── src/
│   ├── content/
│   │   └── blog/
│   │       └── *.md              # Markdown blog posts
│   ├── layouts/
│   │   ├── Layout.astro          # Main layout (header, nav, theme toggle, footer)
│   │   └── BlogPostLayout.astro  # Post layout (reading time, prev/next, tags)
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   ├── archive.astro         # Posts grouped by year
│   │   ├── 404.astro             # Custom 404 page
│   │   ├── rss.xml.js            # RSS feed endpoint
│   │   └── blog/[id].astro       # Dynamic blog post route
│   ├── styles/
│   │   └── global.css            # Tailwind v4 theme + prose styles
│   └── content.config.ts         # Blog collection schema
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |

## 🚢 Deployment

Deployment is handled automatically by [GitHub Actions](.github/workflows/deploy.yml) on every push to `master`. The site is built with `withastro/action` and published to GitHub Pages, then served at `https://naman.blog`.

## ✍️ Writing a Post

Create a new Markdown file in `src/content/blog/` with the following frontmatter:

```md
---
title: "My New Post"
description: "A short summary."
pubDate: 2026-08-02
tags: ["tag1", "tag2"]
---

Your content here.
```

The `tags` field is optional. Posts appear automatically on the homepage, archive, RSS feed, and get prev/next navigation.