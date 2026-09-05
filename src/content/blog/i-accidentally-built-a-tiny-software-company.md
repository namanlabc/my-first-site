---
title: "I Built a Tiny Software Team on a VPS"
description: "I set up a chief of staff, designer, engineer, architect, QA reviewer and SEO lead on one VPS. Here is what they built, what broke, and what I learned."
pubDate: 2026-08-12
tags: ["building", "AI agents", "Paperclip", "personal"]
image: "/images/posts/tiny-software-company.webp"
imageAlt: "A two-eyed dot leading a small colourful crew through planning, checking and shipping software around one server."
---

A few days ago, I saw a screenshot of several AI agents giving stand-up updates to each other.

There was a software agent, a designer and someone handling operations. It looked a little funny, but the idea stayed with me.

I use AI tools while building things already. What I had not tried was giving them an actual organisation: separate jobs, shared context, reporting lines, budgets, permissions and a process for reviewing one another's work.

So I rented a VPS, installed Paperclip and decided to see how far I could take it.

## Setting up the team

I created six roles:

- Atlas, the chief of staff
- a Product Architect
- Mira, the product and visual designer
- a Founding Engineer
- a QA and Release Engineer
- a Growth and SEO Lead

The names were the easy part. The useful work was deciding what each agent was allowed to do.

Atlas could plan and delegate, but was not supposed to implement the whole product. The engineer could write production code, but could not approve its own work. QA had to inspect real pages in a browser rather than reading a confident implementation summary. Mira owned the design direction and could send weak visual work back.

I also limited how many agents could work simultaneously and made them use blockers, branches and pull requests. When a task ended, the agent had to record what happened next instead of leaving a vague update behind.

It was less like writing one clever prompt and more like designing a workflow that happened to be staffed by models.

## Giving them a real project

For the first full run, I gave the team Playtester.

The concept was a community for independent Android developers going through Google Play closed testing. Sixteen developers join one hub. Each brings one app, and everyone helps test the other fifteen.

The product needed more than a landing page. It required authentication, onboarding, private tester emails, hub membership, app pages, progress tracking, private chat, screenshot uploads, feedback, notifications, moderation, a PWA, public content and an admin area.

Before engineering began, the Product Architect turned the idea into user journeys, database entities, routes and acceptance criteria. Mira created a visual system around a round table of sixteen developers. The engineer then built against those two documents instead of inventing the product while writing code.

Once the first implementation was ready, QA, design and SEO reviewed it separately. Their findings returned to the engineer, fixes were committed, and QA checked the final state again.

I could follow the whole process from my phone while the VPS kept running.

## What the team actually produced

The result was a real Next.js application connected to Supabase, not a collection of static screens.

The repository included database migrations, Row Level Security, authentication boundaries, private storage, chat, hub membership, admin tools, tests and deployment documentation.

The hub engine was tested against concurrent joins. If two developers tried to take the final seat at the same time, the database had to place one in the current hub and the other in the next one. It could never create a 17/16 hub.

The team also tested whether private emails could appear in public pages, whether anonymous users could call protected database functions, and whether suspended users or unrelated hub members could access data they should not see.

By the final hosted run, the project had more than 200 automated tests, browser checks, accessibility checks, responsive checks and a complete golden-path test against a real Supabase staging project.

The model cost for the main build stayed in the single digits. The VPS cost more than the agents did.

That ratio was probably the first thing that made the experiment feel less like a toy.

## Real infrastructure changed the result

Local tests passed long before the product was genuinely ready.

When we connected the hosted database, one onboarding write failed because the local test database had more generous permissions than Supabase. The code looked correct and the tests were green, but the production-like environment exposed the difference immediately.

Google login later redirected to `0.0.0.0:3000` because the callback trusted Hostinger's internal server address behind its reverse proxy. Another browser issue exposed how Next.js responses could behave badly around caching.

These problems were frustrating, but they were also the most useful part of the run. They forced the agents to diagnose evidence from a real system instead of declaring success from source code alone.

The engineer proposed corrections. QA reproduced the failures and verified the fixes independently. Each incident left behind a better test or a clearer deployment rule.

That review loop mattered more than the speed of the first implementation.

## What I learned

The biggest lesson was that more agents do not automatically produce better work.

They need clear ownership. If everyone is allowed to plan, design, implement and approve, they mostly create overlapping answers. Separating those responsibilities made the disagreements useful.

They also need durable context. Product rules, design decisions and security boundaries cannot live only inside one long conversation. Writing them into the repository gave later runs something stable to follow.

The model choice mattered less than I expected for routine work. A relatively inexpensive coding model handled most of the implementation and testing. I spent the more capable model budget where visual judgment mattered most.

Most importantly, the human role did not disappear. I still had to decide what the product should be, which trade-offs were acceptable, when credentials could be used, whether a migration should run and when code was ready to merge.

The agents increased how much work I could coordinate. They did not remove the need to understand what I was approving.

## The reusable part

Playtester gave me more than one codebase.

It gave me a repeatable way to move an idea through product planning, visual design, engineering, security review, QA and deployment.

The next project will not begin with an empty prompt. The team already has rules for GitHub, design quality, browser testing, permissions, costs and handoffs. The Supabase foundation also contains patterns we can reuse for authentication, roles, private data, chat, uploads and admin workflows.

That does not mean every future idea deserves a full build. If anything, this experiment made early validation more important. The system can produce software quickly, so deciding what is worth producing becomes the harder job.

I started because a screenshot made me curious.

I ended with a small software team running on a server, a real application, and a way of working that I want to keep improving.

That is a much more interesting result than I expected from one VPS.
