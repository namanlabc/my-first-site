---
title: "Six Small Tools Later, Here’s What Changed"
description: "The first tool proved an idea. Building five more exposed the real work: reusable foundations, distinct interactions, and ruthless mobile testing."
pubDate: 2026-08-06
tags: ["building", "small tools", "field notes"]
---

One small web tool is a fun project. Six tools start behaving like a product.

That change happened quietly. I was not planning a giant platform. I kept finding closely related ideas worth building, and suddenly decisions made for one page were affecting five others.

The interesting part was learning what should be shared—and what absolutely should not.

## Reuse the boring foundations

The navigation, metadata, footer, spacing rules, result structure, and related-tool links should not be reinvented on every page. Repeating that work creates tiny inconsistencies that become expensive later.

A shared foundation also makes improvements compound. Fix a mobile navigation issue once and every tool benefits. Improve the default focus style and the whole collection becomes easier to use.

That is the kind of reuse I want.

## Do not reuse the personality out of it

The dangerous version of a design system turns every idea into the same card with a different heading.

A yes-or-no wheel should feel decisive. A food wheel can feel lively. An animal generator needs a result that makes the animal feel like the main event—not an excuse to show generic scenery. The controls may share a visual language, but the experience should match the job.

I started thinking of each tool as having one “hero interaction.” Everything around it should support that moment instead of competing with it.

## The sixth tool tests the first tool’s architecture

Adding another page exposes shortcuts:

- Are titles and descriptions configured in one clear place?
- Can shared styles handle a new type of result?
- Are related tools easy to update without editing every page?
- Will the sitemap and internal links include the new URL correctly?
- Does the page still make sense without JavaScript or motion?

The best time to solve those questions was probably earlier. The second-best time is when the shortcut becomes annoying enough that I will not repeat it.

## Mobile is where confidence goes to be tested

The most persistent problems were rarely visible on a wide screen. Long labels escaped wheels. Controls wrapped strangely. A footer created horizontal overflow. Something that felt spacious on desktop felt like furniture blocking a hallway on mobile.

I now check narrow screens during the build, not when I believe the build is finished. It changes decisions earlier and saves the depressing experience of discovering ten connected problems at once.

Six tools is still small. But it is enough to teach the lesson I wanted: a useful collection grows through shared discipline and individual care. Build the foundation once, then give every tool a reason to exist beyond filling another URL.
