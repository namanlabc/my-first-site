# Naman.blog — indie personal design direction

## Visual personality

Naman.blog should feel like Naman’s own corner of the web: modern and carefully made, but not polished into a startup landing page. It is an indie builder’s portfolio and notebook—quietly playful, direct, warm, and a little nerdy.

Creativity comes from asymmetry, typography, small details, and honest language. The site does not need a dashboard, mascot, giant illustration, or marketing performance to feel memorable.

## Reference principles

- **Vercel:** precise spacing, thin rules, and confident restraint.
- **Supabase:** care in dark mode and technical detail, without copying its product surfaces.
- **CodeRabbit:** friendly language and small moments of personality, without mascot-led storytelling.
- **Vijay Verma:** personal rhythm, unexpected composition, and the confidence to leave space.

No assets, graphics, code, exact layouts, brand treatments, or proprietary interactions are copied from any reference.

## Layout system

- Reading width: `44rem`.
- Primary content width: `66rem`.
- Wide content width: `76rem`.
- Gutters: `clamp(1.15rem, 4vw, 3rem)`.
- Spacing rhythm: 4, 8, 12, 16, 24, 32, 48, 72, and 96px.
- Homepage: a generous editorial introduction without a separate bio block competing for space.
- Mobile: one intentional column that starts directly with the main introduction.
- Breakpoints: 576px, 832px, and 1072px.

## Typography

- Display and UI: a local system sans stack led by Inter/Geist when installed, with Segoe UI and system fallbacks.
- Reading: Georgia/Cambria for introductions and long-form body copy.
- Meta: SFMono/Consolas monospace, used sparingly.
- Homepage title: large but not slogan-like; the words remain Naman’s previous, more natural introduction.
- Article typography stays calm and prioritises reading.

No external font requests are required.

## Color system

Light mode:

- Canvas: `#f5f3ed`
- Surface: `#fffdf8`
- Ink: `#1b1a18`
- Muted: `#66635c`
- Rule: `#d8d4ca`
- Accent: `#bd3e28`

Dark mode:

- Canvas: `#11110f`
- Surface: `#181815`
- Ink: `#f4f1e9`
- Muted: `#aaa69d`
- Rule: `#302f2a`
- Accent: `#ff7658`

The palette uses one warm orange-red accent. There are no rainbow gradients or different colors assigned to every idea.

## Component system

- Sticky, translucent header with a plain wordmark and unboxed navigation.
- Editorial project rows with number, status, description, and useful details.
- Compact writing rows with date, summary, and tags.
- A simple “right now” line instead of a product-status widget.
- Quiet article layout with strong typography and next/previous navigation.
- An open, ruled personal note instead of a decorative card.
- Accessible theme control and visible focus treatment.

## Motion

- Small arrow and row movement on hover or focus.
- A restrained navigation underline.
- No looping dashboard animation, scroll-jacking, cursor replacement, parallax, or animation library.
- All non-essential motion stops under `prefers-reduced-motion`.

## Explicitly rejected directions

- Product dashboard or fake workbench in the hero.
- Giant character or editorial illustration.
- SVG feature infographic or route map.
- Generic centred SaaS hero and conversion-style CTA buttons.
- Endless rounded cards, glassmorphism, dashboard grids, glow, or rainbow gradients.
- Fake metrics, testimonials, projects, or expertise claims.
- “Shipping,” “systems,” “stack,” and other startup language where ordinary words sound more human.
- Generic developer résumé language.

## Content and technical constraints

- Preserve all posts, slugs, canonical URLs, RSS, sitemap, metadata, favicon, and GitHub Pages configuration.
- Use Astro, semantic HTML, CSS, and minimal vanilla JavaScript only.
- Keep article pages intentionally quieter than the homepage.
- Keep the site fast, keyboard accessible, responsive from 360px upward, and maintainable without a UI framework.
