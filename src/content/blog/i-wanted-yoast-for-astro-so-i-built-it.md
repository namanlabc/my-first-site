---
title: "I Wanted Yoast for Astro, So I Built It"
description: "Astro SEO Audit began as a simple pre-publish check. It turned into an open-source CLI that reads the HTML Astro actually ships and explains what needs fixing."
pubDate: 2026-08-10T12:00:00Z
tags: ["Astro", "SEO", "open source", "building"]
image: "/images/posts/astro-seo-audit.webp"
imageAlt: "A two-eyed dot inspecting a simple webpage with an oversized magnifying glass."
---

The first version of the idea was embarrassingly simple: I wanted something a little like Yoast, but for Astro.

I like building with Astro because the final pages are light and the markup stays under control. Still, publishing a new page often ended with me opening the generated HTML and working through the same mental checklist. Title. Description. Canonical. Open Graph tags. Sitemap. Structured data. Did I forget the image alt text again?

That is manageable for one page. It gets less charming when the site grows or when the check happens five minutes before deployment.

So I started building [Astro SEO Audit](https://github.com/namanlabc/astro-seo-audit).

## Check what the browser receives

I decided early that the auditor should read the finished HTML instead of trying to understand how the project produced it.

Astro sites can assemble metadata in a layout, an integration, a Markdown file, a content collection, or a plain component. A source-code checker has to understand all of those patterns. The generated page has already resolved them.

That gave the tool a clean job. Build the Astro site, point the auditor at `dist/`, and inspect the documents that search engines will actually receive.

```bash
npm run build
npx astro-seo-audit
```

It now checks page metadata, headings, images, canonicals, language tags, JSON-LD, internal links, orphan pages, sitemaps, and robots.txt. It can also run automatically after `astro build` as an Astro integration.

## A score should explain itself

I wanted a 0–100 score because it gives the audit a quick shape. I did not want a mysterious number that turns SEO into a game of making every light green.

Astro SEO Audit shows the findings, their severity, and the points each rule removes. Repeated copies of the same problem are capped so one minor mistake across many pages does not flatten the whole score.

The rules are deliberately cautious too. A missing Open Graph image is useful to know, but it does not stop Google from indexing a page. Multiple H1 elements are not treated like a disaster. A `noindex` tag appears as a notice because the tool cannot know whether I added it intentionally.

The score is a health check for the generated site. It is not a ranking prediction, and I do not want it pretending to be one.

## The whole site was not enough

The first useful version audited everything. That made sense before deployment, but it became annoying when I only wanted to check one new article.

Running the entire site again for a small edit felt like bringing every book in the house to the desk because I wanted to proofread one page. The tool needed a page mode.

```bash
npx astro-seo-audit --page /blog/new-post/
```

Page mode reads only that generated route and gives it its own score. It skips checks that genuinely need the complete site, such as duplicate metadata, orphan pages, broken-link graphs, sitemaps, and robots.txt. The full audit still belongs in CI; the single-page audit belongs beside the writing process.

That distinction made the tool much more useful to me. A release check and a pre-publish check are related jobs, but they are not the same job.

## Shipping changed the project

Once I decided to publish it, the boring details became real product decisions. Errors needed stable IDs. Terminal output had to remain readable. CI needed predictable exit codes. Existing sites needed a baseline so teams could block new problems without fixing years of old ones first.

The current release can write terminal, JSON, standalone HTML, and SARIF reports. It runs locally, uploads nothing, and stays independent of whichever SEO component a project already uses.

It is also still a young tool. Version 0.3.1 audits static generated HTML. It does not inspect server-rendered routes, request external links, or claim that parsed schema qualifies for a Google rich result. The README lists those limits so nobody mistakes a partial check for a complete one.

Astro SEO Audit is now [open source on GitHub](https://github.com/namanlabc/astro-seo-audit) and [available on npm](https://www.npmjs.com/package/astro-seo-audit). I built it because I kept wanting the same check before I published. Now I want to see which missing check bothers someone else enough to open the first issue.
