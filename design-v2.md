# Naman.blog — modern playful design direction

## Visual personality

Naman.blog should feel like a small, polished product made by one curious person: technically precise, visibly alive, and personal without becoming a themed portfolio. The interface borrows the discipline of Vercel, the dark technical depth of Supabase, the playful product storytelling of CodeRabbit, and the handcrafted personality of Vijay Verma.

Creativity comes from composition, language, state, and interaction—not from a mascot, giant illustration, or decorative infographic.

## Reference principles

- **Vercel:** exact spacing, strong sans-serif type, thin rules, and confident restraint.
- **Supabase:** dark product surfaces, green signal color, subtle grid depth, and technical atmosphere.
- **CodeRabbit:** real UI as visual storytelling, small motion, and human product language.
- **Vijay Verma:** asymmetric rhythm, personal details, and memorable moments that do not resemble a template.

Do not copy any source site’s assets, graphics, code, exact layout, brand treatment, or proprietary interaction.

## Layout system

- Reading width: `44rem`.
- Primary content width: `66rem`.
- Wide content width: `76rem`.
- Gutters: `clamp(1.15rem, 4vw, 3rem)`.
- Spacing rhythm: 4, 8, 12, 16, 24, 32, 48, 72, 96px.
- Desktop homepage: balanced split hero with type on the left and the workbench on the right.
- Mobile: one intentional column; the workbench remains usable and project rows preserve hierarchy.
- Breakpoints: 576px, 832px, and 1072px.

## Typography

- Display and UI: local system sans stack led by Inter/Geist when installed, with Segoe UI and system fallbacks.
- Reading: Georgia/Cambria for long-form article body only.
- Meta and technical state: SFMono/Consolas monospace.
- Homepage title: tight, confident sans typography with one restrained green-to-violet emphasis.
- Article typography remains calmer and prioritizes reading over visual drama.

No external font requests are required.

## Color system

Light mode:

- Canvas: `#f7f8f6`
- Surface: `#ffffff`
- Ink: `#111514`
- Muted: `#59625e`
- Rule: `#d9ddd8`
- Signal green: `#087a5b`
- Bright green: `#24b985`
- Violet: `#6856d9`
- Warm yellow: `#f1c75b`
- Coral: `#df6658`

Dark mode:

- Canvas: `#090b0b`
- Surface: `#101312`
- Ink: `#f3f6f4`
- Muted: `#9ca6a1`
- Rule: `#272d2a`
- Signal green: `#48d8a4`
- Violet: `#a997ff`
- Warm yellow: `#f5cf6d`
- Coral: `#f28a7d`

Green communicates active work and links. Violet adds creative depth. Yellow and coral appear only as small human accents.

## Signature component

The homepage visual anchor is a **workbench interface**, not an illustration. It truthfully shows:

- Get Random Letter as a live project.
- Calm WP as a beta.
- Field notes as ongoing writing.
- Building, search, and learning as the current activity loop.

It uses window chrome, tabs, a subtle activity signal, project queue, and terminal line. It should feel like a plausible product surface while remaining a concise personal snapshot.

## Component system

- Sticky translucent site header with compact wordmark and visible navigation.
- Workbench product surface in the homepage hero.
- Editorial project rows with number, status, description, and details.
- Compact writing rows with date, summary, and tags.
- Quiet article layout with strong typography and next/previous navigation.
- Personal now-note with restrained colored depth.
- Accessible theme control and clear focus treatment.

## Motion

- Status pulse, terminal cursor, and quiet activity bars inside the workbench.
- Small arrow and row movement on hover/focus.
- No scroll-jacking, cursor replacement, animation library, parallax, or autoplay.
- All non-essential animation stops under `prefers-reduced-motion`.

## Explicitly rejected directions

- Giant character or editorial illustration.
- SVG feature infographic or route map.
- Generic centered SaaS hero.
- Endless rounded cards, glassmorphism, or dashboard grid.
- Loud rainbow gradients and excessive glow.
- Fake metrics, testimonials, projects, or expertise claims.
- Generic developer résumé language.

## Content and technical constraints

- Preserve all posts, slugs, canonical URLs, RSS, sitemap, metadata, favicon, and GitHub Pages configuration.
- Use Astro, semantic HTML, CSS, and minimal vanilla JavaScript only.
- Keep article pages intentionally quieter than the homepage.
- Keep the site fast, keyboard accessible, responsive from 360px upward, and maintainable without a UI framework.
