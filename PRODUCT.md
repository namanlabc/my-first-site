# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary visitor is someone who discovers Naman through his writing, a project, search, or a social profile and wants to understand what he is interested in, what he has built, and what he has learned. Returning readers need a calm way to find and read posts.

## Product Purpose

Naman.blog is Naman's personal corner of the internet: a place to share things he builds, experiments involving AI, SEO, websites, WordPress, and small tools, and writing about what he learns and thinks. Success means a visitor quickly understands the person behind the site, can explore real work and writing, and remembers the site as distinctly Naman's.

## Positioning

The site combines a personal workshop and a writing archive. It does not position Naman as a guru or package him as a generic developer persona; it shows a curious builder documenting discoveries in public.

## Operating Context

Visitors may arrive on the homepage, an individual article from search, the archive, or a project link. The article experience must remain calmer than the homepage. The site is a static Astro project deployed to GitHub Pages at `naman.blog`.

## Capabilities and Constraints

- Preserve all current posts, content collections, canonical URLs, RSS, metadata, favicon, domain configuration, and GitHub Pages workflow.
- Keep the existing Astro architecture and prefer HTML, CSS, and small amounts of vanilla JavaScript.
- Add a maintainable place for real projects without fabricating projects, clients, metrics, testimonials, or expertise.
- Keep the homepage compact rather than turning it into a long marketing landing page.
- Keep production branch `master` unchanged until Naman explicitly approves a merge.
- Keep `v1.0.0` permanently recoverable and never move, replace, delete, or force-update it.

## Brand Commitments

- Name: Naman.blog.
- Voice: young, curious, experimental, playful, clean, human, personal, slightly nerdy, warm, and confident without pretending to be a guru.
- Core message: “I like building interesting things and documenting what I discover.”
- Personal interests already shared publicly on V1 include anime and *One Piece*; use them as human detail, never copied artwork or franchise branding.
- Primary inspiration is the handcrafted, memorable, portfolio-plus-writing spirit of `vijayverma.co`, not its code, assets, graphics, copy, identity, or page composition.

## Evidence on Hand

- Three existing published Markdown posts in `src/content/blog/`.
- Existing About, Archive, RSS, and article routes.
- Existing public links to Naman's GitHub and X profiles.
- Real projects include Naman.blog itself and the public Get Random Letter website; project descriptions must remain factual and modest.
- No testimonials, client logos, traffic claims, performance claims, or project metrics are available and none may be invented.

## Product Principles

1. Show real curiosity and work instead of résumé-style claims.
2. Let personality come through structure, writing, and small details rather than visual noise.
3. Keep writing exceptionally readable and easy to navigate.
4. Prefer lightweight, accessible, maintainable web-native implementation.
5. Preserve existing search equity and production safety while the redesign evolves separately.

## Accessibility & Inclusion

Use semantic landmarks and headings, keyboard-reachable controls, visible focus states, sufficient contrast, accessible theme controls, meaningful alternative text, comfortable touch targets, and reduced-motion behavior. The design must work intentionally from 360px mobile through large desktop widths.
