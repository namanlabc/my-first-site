# Naman.blog visual playbook

This file protects the visual and verbal identity of Naman.blog. New work should feel as though it always belonged here—not as though the site changed designers every week.

## The one-sentence test

Naman.blog is a modern, quietly playful personal home for Naman’s real projects and notes.

If a design could belong to any developer after changing the name, it is not specific enough.

## What creates the personality

- Real work appears early; decoration never delays it.
- The writing sounds like one person speaking normally.
- Each project gets a distinct visual metaphor based on what it actually does.
- Editorial imagery feels tactile and handmade rather than glossy or generated.
- Restraint, asymmetry, typography, and one good joke do more than visual effects.

## Site UI system

The implementation tokens live in `src/styles/global.css`. Reuse them instead of inventing near-duplicates.

| Role | Light | Dark |
|---|---:|---:|
| Canvas | `#f5f3ed` | `#11110f` |
| Surface | `#fffdf8` | `#181815` |
| Ink | `#1b1a18` | `#f4f1e9` |
| Muted | `#66635c` | `#aaa69d` |
| Rule | `#d8d4ca` | `#302f2a` |
| Accent | `#bd3e28` | `#ff7658` |

Typography roles:

- Display and UI: the system sans stack in `--display` and `--ui`.
- Personal introductions and reflective copy: the Georgia-led `--reading` stack.
- Dates, status, tiny labels, and technical output: `--mono`, used sparingly.

Layout rules:

- Keep the mobile identity header to one row.
- Keep the homepage introduction plain and compact. Actual work must begin within the opening screen on a normal phone.
- Use thin rules and open space instead of boxes around every section.
- Keep article pages quieter than the homepage.
- Use rounded corners only when the represented object naturally needs them.

## Three visual families

### 1. Site interface

Use for navigation, page layout, lists, metadata, and article typography. Keep it neutral enough to let project art and writing carry the personality.

Never add gradients, glows, glassmorphism, fake dashboards, conversion blocks, feature-icon grids, testimonial sections, or a wall of identical rounded cards.

### 2. Project posters

Use for homepage projects, launch graphics, and tool identity. Give each project its own little world with flat colour, strong geometry, and one product-derived visual.

| Project | Palette | Visual source |
|---|---|---|
| Astro SEO Audit | Mint `#bce8c9`, deep green `#102d24`, coral `#ff735c` | Real CLI audit output |
| Get Random Letter | Yellow `#f2d74f`, cream `#f8f0d2`, coral `#ff6f4f`, teal `#1d6e62` | The letter wheel |
| Calm WP | Forest `#22463c`, paper `#f2eee0`, ochre `#dba15c`, clay `#d47152` | A calm reading page |
| Naman.blog | Periwinkle `#8da8e8`, paper `#f3eedc`, coral `#ff7c5f` | Overlapping personal notes |

Poster rules:

- One dominant metaphor, one supporting detail.
- Product text is allowed only when it is real or meaningfully illustrative.
- Keep the visual readable when reduced to a mobile tile.
- Do not give unrelated projects the same terminal, browser frame, or visual gimmick.
- Vary composition, not the underlying design language.

### 3. Editorial featured images

Create post images at `1536 × 1024` (3:2). Store the final web asset as WebP.

Art direction:

- tactile cut-paper and editorial-print feeling;
- cream paper, charcoal ink, forest green, mustard, and restrained coral;
- torn edges, halftone or ink texture, imperfect alignment, and believable paper depth;
- one strong metaphor tied directly to the post;
- generous negative space;
- no headline text inside the image.

Avoid photorealistic people, shiny 3D renders, neon gradients, generic laptop desks, floating UI cards, stock illustrations, and compositions made from many tiny unrelated icons.

## Avatar

`public/images/avatar.webp` is the identity portrait. Use it unchanged and crop it as a circle when needed. Preserve the pixel edges and dark-blue background. Do not regenerate, smooth, recolour, or reinterpret it unless Naman explicitly requests a new avatar.

## Copy voice

- Write in first person when Naman is speaking.
- Prefer ordinary, specific sentences and an occasional dry joke.
- Let the work be impressive without repeatedly calling it impressive.
- Use descriptive links such as “All projects,” “Read the notes,” and “About me.”
- Avoid guru language and generic phrases such as “digital garden,” “corner of the internet,” “crafting experiences,” “building at the intersection,” “seamless,” “unlock,” or “innovative.”

## Pre-publish rejection test

Revise the work if any answer is yes:

- Could this belong to any indie developer after changing the name?
- Is a slogan or decorative label trying to manufacture personality?
- Is decoration replacing evidence of real projects or writing?
- Does the image resemble generic AI concept art or a corporate illustration pack?
- Did the mobile opening become taller or hide the work?
- Was a new colour, type role, radius, or component invented without a real need?

## Required QA

For interface changes:

1. Render at 360 px and 1440 px.
2. Confirm `scrollWidth === clientWidth` at both sizes.
3. Check dark and light themes.
4. Run `pnpm build`.
5. Confirm existing posts, slugs, metadata, RSS, and sitemap still build.
