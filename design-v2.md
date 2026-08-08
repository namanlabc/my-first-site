# Naman.blog V2 design direction

## Visual personality

V2 is a **curiosity route map**: part personal web log, part expedition board for ideas Naman is building, testing, and writing about. It should feel screen-native and handmade without resembling a retro terminal, a résumé, or a themed anime fan site. The homepage may be energetic; articles remain quiet.

The signature is a route line with named waypoints—`building`, `exploring`, `writing`, `off-screen`—that connects the homepage rather than enclosing everything in cards. A compact compass and topographic lines make the route feel like Naman's expedition board rather than a generic navigation card. It expresses movement and curiosity using only CSS and small, accessible interactions.

## Layout system

- Reading width: `44rem` / 704px.
- Primary content width: `64rem` / 1024px.
- Wide content width: `74rem` / 1184px.
- Gutters: `clamp(1.25rem, 4vw, 3rem)`.
- Spacing rhythm: 4, 8, 12, 16, 24, 32, 48, 72, 96px.
- Breakpoints: 640px, 768px, 1024px, 1280px.
- Desktop homepage: a 12-column grid with asymmetric 7/5 and 8/4 compositions.
- Mobile: one reading column; navigation wraps without a hamburger; the route becomes a compact edge/separator motif.

## Typography

- Display/headlines: `Trebuchet MS`, a humanist face made for screens, used boldly but not at billboard scale.
- Reading: Georgia, chosen for long-form legibility and continuity with V1's strong serif reading tone.
- UI/meta: `ui-monospace`, `SFMono-Regular`, Consolas, monospace for dates, route labels, and status—not body copy.
- Header wordmark: a custom lockup pairing bold Trebuchet for `Naman` with italic Georgia for `Patel`, finished with a trail underline and route diamond. It uses the existing local font system while giving the name its own recognizable shape.
- Display hierarchy: `clamp(2.65rem, 6.8vw, 6rem)` for the homepage introduction; page titles `clamp(2.6rem, 7vw, 5.5rem)`; section headings `clamp(1.65rem, 3vw, 2.45rem)`.
- Body: 1rem–1.125rem, line-height 1.65. Articles: 1.1rem–1.2rem, line-height 1.8.

## Color system

Light mode uses sea mist, deep ocean, lagoon, treasure gold, and a restrained sunset red. The combination is adventurous without becoming nautical cosplay or a generic gradient portfolio.

- Sea-mist canvas — `#edf5f3`
- Deep ink — `#102a30`
- Muted ink — `#4f6970`
- Rule — `#bed1ce`
- Route teal — `#0a6375`
- Deep-ocean field — `#073d55`
- Lagoon — `#0a8f8f`
- Treasure gold — `#f5c451`
- Sunset red — `#a83240`
- Paper — `#fffdf7`

Dark mode equivalents:

- Night-ocean canvas — `#071a22`
- Ink — `#f5f2e8`
- Muted ink — `#a9c5c7`
- Rule — `#294851`
- Route teal — `#69d7d1`
- Deep-ocean field — `#0a3b4d`
- Lagoon — `#44beb6`
- Treasure gold — `#ffd166`
- Sunset red — `#ff9a89`
- Paper — `#0d2730`

Ocean and lagoon colors own navigation and route structure; gold marks current activity; sunset red is reserved for Naman's personal asides and small moments of emphasis. Links never rely on color alone.

## Reusable components

- `SiteHeader`: wordmark, compact route-aware navigation, RSS/social links, accessible theme control.
- `SiteFooter`: small personal sign-off, useful routes, social links.
- `SectionHeading`: eyebrow, title, optional destination link.
- `RouteMap`: the homepage signature linking four truthful areas of interest.
- `ProjectItem`: editorial strip for a real project with status, description, and destination.
- `WritingItem`: calm post row with title, description, date, and tags.
- `NowNote`: small current-interest dispatch; no fake status claims.
- Article navigation: back-to-archive plus next/previous posts when available.

## Motion and interaction

- Route markers move a few pixels on hover/focus to suggest travel.
- Link underlines and arrows respond consistently on hover and keyboard focus.
- The theme transition is brief and applies to colors, not layout.
- No scroll-jacking, animation library, cursor replacement, or autoplay.
- Under `prefers-reduced-motion: reduce`, all non-essential movement and smooth scrolling stop.

## Mobile strategy

- Preserve the main introduction before any decorative element.
- Keep navigation visible and wrap it into two short rows when needed.
- Convert multi-column project strips into a single readable flow with 44px minimum interactive targets.
- Let code blocks scroll inside their own region; long URLs, headings, tags, and metadata wrap safely.
- Avoid hover-only meaning; every playful response also works on focus.

## Content and implementation direction

- Homepage order: compact introduction → curiosity route → selected real projects → recent writing → personal now note.
- Add `/projects/` as a maintainable index using a small typed data file; include only verified projects.
- Rewrite About as a personal note, not a résumé.
- Keep Archive chronological and efficient.
- Keep article pages visually quieter than the homepage and preserve every existing slug.
- Remove the mock newsletter form because it implies a working subscription that does not exist.
- Preserve Astro, Markdown content collections, RSS, canonical URLs, favicon, domain, and GitHub Pages workflow.
- Use semantic Astro/HTML, global CSS variables, and only tiny vanilla JavaScript for the theme and one restrained signature interaction.

## Reference boundary

Borrow from Vijay Verma's site only the principles of fast personal orientation, portfolio-and-writing rhythm, visible personality, compact navigation, and delightful small details. Do not copy its sidebar composition, project grid, fonts, gradients, graphics, logos, copy, or interaction code.
