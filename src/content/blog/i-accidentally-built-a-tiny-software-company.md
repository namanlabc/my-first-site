---
title: "I Accidentally Built a Tiny Software Company"
description: "I put a chief of staff, designer, engineer, architect, QA reviewer and SEO lead on a server, gave them one product idea, and watched a surprisingly real software company appear."
pubDate: 2026-08-12
tags: ["building", "AI agents", "Paperclip", "personal"]
image: "/images/posts/tiny-software-company.webp"
imageAlt: "A handmade paper-collage software shipyard where a small crew designs, builds and checks websites, databases and mobile apps."
---

I saw a screenshot of a few AI agents giving stand-up updates to each other.

One was the software agent.

One was the designer.

One was handling operations.

My first thought was not, *interesting experiment*.

My first thought was:

**Bruh. I can make agents like them.**

This is generally how new problems enter my life.

## It started with a server and unreasonable confidence

I had never used a VPS before.

Naturally, I bought one, installed Paperclip on it and decided we were now a company.

The company had one human employee.

That was me.

The rest of the organisation appeared very quickly:

- Atlas, the chief of staff
- a Product Architect
- Mira, the product and visual designer
- a Founding Engineer
- a QA and Release Engineer
- a Growth and SEO Lead

I gave them reporting lines, permissions, budgets and rules about who could touch which branch.

Atlas was told to coordinate the work, not quietly become six employees wearing one coat.

The engineer could write production code but could not approve its own work.

QA had to inspect the real rendered product in a browser.

Mira could reject generic purple-gradient SaaS nonsense.

Everyone had to leave a clear next step when a task ended, because apparently even artificial employees can finish a meeting without deciding what happens next.

At some point I looked at the organisation chart and realised I had spent my morning creating middle management for computers.

Excellent use of time.

## The first mission was not small

I did not ask them to make a to-do app.

That would have been sensible.

Instead, I gave them Playtester.

The idea was a community for independent Android developers going through Google Play closed testing. Sixteen developers join one hub. Each brings one app. Everyone helps test the other fifteen apps.

No fake installs. No paid-review nonsense. No coins, XP or complicated marketplace.

Just sixteen people making a small promise to show up for one another.

The product needed authentication, onboarding, private tester emails, atomic hub filling, app pages, community progress, private chat, screenshots, feedback, notifications, moderation, a small thank-you system, a PWA, public pages, SEO and an admin area.

In other words, a perfectly reasonable little afternoon project.

## Then the machine started moving

The Product Architect turned the idea into routes, database entities, product rules and acceptance criteria.

Mira studied references and created a visual direction around a round table of sixteen developers. She defined the typography, colours, mobile behaviour and the exact kind of generic design the engineer was forbidden to produce.

The Founding Engineer built the application.

QA attacked it.

Growth checked the public copy and search structure.

Mira came back and judged the actual rendered screens instead of trusting the design document.

The engineer fixed what they found.

QA attacked it again.

Atlas stood above the whole pipeline asking for commits, evidence, blockers, costs and clear dispositions every few minutes like a tiny digital manager who had recently discovered performance reviews.

I watched all of this from my phone.

There were moments when two agents were working in parallel, four tasks were waiting behind blockers, and I genuinely had no useful reason to interfere.

No rest for the labourers.

Kha kha.

I mean agents.

## They did not just generate some pages

The final repository had a real Next.js application connected to Supabase.

It included database migrations, Row Level Security, authentication boundaries, private storage, chat, onboarding, hub membership, admin tools, structured tests and deployment documentation.

The hub engine was tested against concurrent joins so two people trying to take the final seat could never create a 17/16 hub.

Private emails were checked against accidental public exposure.

Security functions were tested as anonymous users, authenticated users, suspended users and admins.

The final pipeline ran more than 200 tests, browser flows, accessibility checks, responsive checks and a hosted golden path against the real Supabase staging project.

All of this cost roughly single-digit dollars in model usage, plus the server I had already rented for the experiment.

That sentence still feels slightly ridiculous.

## The bugs were the most useful part

The agents did not produce perfection on the first attempt.

Good.

That would have taught me almost nothing.

The first serious QA pass found privacy, accessibility and interaction problems.

The hosted database behaved differently from the local test database because local permissions were accidentally more generous.

Google login worked, then redirected me to `0.0.0.0:3000` because the app trusted the server's internal address behind Hostinger's proxy.

Another time the browser displayed a raw React Server Component response like it had briefly forgotten it was supposed to be a website.

Every one of those problems forced the system to do something more valuable than writing code.

It had to diagnose reality.

The engineer proposed a fix. QA independently verified it. The tests grew. The deployment assumptions became more honest.

That is the difference between asking a model to "build me a SaaS" and building a small organisation that can disagree with its own output.

## The prompt was not the superpower

The tempting conclusion is that one enormous prompt built the product.

It did not.

The prompt mattered, but the useful part was everything around it:

- one canonical product specification
- clear ownership
- specialised skills
- separate design and engineering responsibility
- branches and pull requests
- independent QA
- real browser evidence
- real infrastructure
- spending limits
- human approval before migrations and merges

Without those constraints, six agents can simply produce six confident versions of the same mistake.

The models were workers inside the system.

The system was the product I was actually building.

## Now we can reuse the factory

Playtester gave us more than one application.

It gave us a repeatable way to take an idea through product planning, visual design, engineering, security review, QA, deployment and founder approval.

The next project does not begin with an empty chat box anymore.

It begins with an organisation that already knows:

- how I want products to feel
- what design patterns I reject
- how GitHub work should move
- who is allowed to change production code
- what evidence QA must provide
- when an agent must stop and ask me
- how to report cost and unfinished work

The product idea can change.

The operating system remains.

That is the part I am most excited about.

## Anyway, I apparently run a software company now

It has no office.

Most employees are paid in API tokens.

The chief of staff is stricter than me.

The designer has already exceeded her budget once.

The engineer worked for hours and then received another defect report immediately.

And the founder spent much of the day taking screenshots and messaging his friend:

**"Bro, what is happening?"**

Very professional operation.

But we went from a screenshot that made me laugh to a functioning product pipeline, a deployed application, a hosted database and a reusable way to build the next thing.

I still do not think the interesting future is pressing one button and waking up rich.

I think it is one curious person being able to organise far more skill, judgment and execution than they could carry alone.

That feels real now.

Zehahahahahaha.
