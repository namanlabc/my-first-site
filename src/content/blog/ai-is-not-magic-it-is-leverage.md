---
title: "AI Is Not Magic. It Is Leverage."
description: "AI makes execution cheap. That makes taste, judgment, curiosity and agency more valuable—not less."
pubDate: 2026-09-09
tags: ["AI", "building", "opinion", "internet"]
image: "/images/posts/ai-leverage-illustration.webp"
imageAlt: "A small dot-eyed figure uses a lever to lift a much larger green block."
---

I use AI a lot.

Probably more aggressively than most people who spend their time arguing about whether it is good or bad.

I use it to write code, inspect code, research, design, debug, plan products, question my own ideas, run agents and turn vague thoughts into things I can actually open in a browser.

And after using it this much, I have become less interested in the question **“Is AI intelligent?”**

The more useful question is:

**What does a human become capable of when intelligence is cheap, fast and available on demand?**

That is the part that feels historically weird to me.

<div class="ai-thesis ai-breakout">
  <span class="ai-eyebrow">MY CURRENT MODEL</span>
  <strong>valuable output ≈ taste × agency × AI leverage</strong>
  <small>Not a scientific equation. Just a useful warning: if judgment or agency approaches zero, multiplying the rest does not save you.</small>
</div>

## AI did not make building easy. It made starting cheap.

A few years ago, a stupid little software idea could die before it became a folder on your computer.

Maybe you could not design. Maybe you did not know Kotlin. Maybe the backend sounded annoying. Maybe learning the framework would take three weekends and by then the idea would no longer feel exciting.

AI attacks that distance.

The distance between *“I wonder if…”* and *“there is a working version on my screen”* has collapsed.

That matters more to me than most benchmark charts.

I can have an idea at night and interrogate it immediately. I can ask for the ugly first implementation, inspect what it did, reject half of it, make it simpler, test the edge cases and keep pushing until the thing starts resembling what was in my head.

This is why I do not see AI primarily as a chatbot.

I see it as a **compression layer between intent and execution**.

<div class="ai-equation ai-breakout">
  <div><span>old loop</span><strong>idea → learn → wait → implement → debug → maybe ship</strong></div>
  <div><span>new loop</span><strong>idea → attempt → inspect → correct → ship → learn</strong></div>
</div>

Notice that *learn* did not disappear.

It moved.

That is important.

## The skill floor went down. The taste floor did not.

AI can make a competent landing page in minutes.

That sounds incredible until everyone can make a competent landing page in minutes.

Then competence stops being impressive.

The internet fills with things that are technically fine, grammatically fine, responsive, polished, rounded, gradiented and completely forgettable.

This is the part of the AI boom I think people underestimate: **when production becomes abundant, selection becomes valuable.**

Knowing what to remove matters more. Knowing when the model is confidently producing nonsense matters more. Knowing that the fourth design is cleaner but also more boring matters more. Knowing that a feature is possible but should not exist matters more.

AI can generate options forever.

Someone still has to say **this one**.

<div class="ai-matrix ai-breakout" aria-label="Taste and AI leverage matrix">
  <div class="ai-matrix__corner"><span>taste</span><span>AI leverage</span></div>
  <div><span>low × low</span><strong>slow junk</strong></div>
  <div><span>low × high</span><strong>fast junk</strong></div>
  <div><span>high × low</span><strong>good, but slow</strong></div>
  <div class="is-hot"><span>high × high</span><strong>interesting territory</strong></div>
</div>

The last box is where I want to live.

Not because I think my taste is perfect. It obviously is not. But taste can be trained, and AI gives me far more iterations to train it against.

That is a much better use of the technology than asking it to make every decision for me.

## I do not want an AI that only talks to me

A beautiful answer in a chat window is nice.

A system that can inspect a repository, find the actual file, change it, run the build, open the page, notice that the spacing is wrong, fix it and leave behind evidence is far more interesting.

That is why I keep drifting toward tools, agents and workflows rather than one enormous prompt.

I have experimented with giving AI agents separate jobs: planning, architecture, design, engineering, QA and SEO. The funny part is that adding more “intelligence” is not what made the system better.

Giving the agents **boundaries** did.

The engineer should not approve its own work. QA should look at the real page instead of believing the implementation summary. Important decisions should survive outside one conversation. A model should be allowed to say “done” only when there is something observable to point at.

That sounds less magical than autonomous superintelligence.

Good.

I trust boring evidence more than magic.

<div class="ai-formula-stack ai-breakout">
  <span class="ai-eyebrow">LEVERAGE, AS I ACTUALLY EXPERIENCE IT</span>
  <p><b>AI leverage</b> ≈ capability × context × tools × verification</p>
  <p class="muted">Great model × bad context = confusion. Great model × no tools = advice. Great model × no verification = confidence theater.</p>
</div>

## The human job is moving upward

People sometimes talk about AI as if the end state is pressing one button and becoming irrelevant.

I think that is the least interesting possible future.

When the machine gets better at implementation, I get to spend more time on questions that are harder to automate:

What is worth building?

What does “good” feel like here?

Which constraint is real and which one did we invent?

What is the simplest version someone would genuinely want?

What evidence would change my mind?

What am I willing to ship under my own name?

Those questions sound soft until you see how many technically impressive products fail because nobody answered them well.

AI makes execution cheaper. It does not make consequences cheaper.

If a model writes insecure code and I ship it, that is my problem. If it invents a fact and I publish it, that is my problem. If it generates a product nobody needs, the speed at which we built it does not make the product less useless.

So my preferred human-in-the-loop is not a ceremonial approval button at the end.

The human chooses the objective, shapes the constraints, challenges the output and owns the result.

## AI is also changing what the internet is for

For most of the web's life, we wrote pages for people and optimized some of them for search engines.

Now there is another reader walking around: machines trying to extract answers, compare claims, follow citations and assemble responses.

I think that changes publishing.

The winning page is not necessarily the page that screams the loudest. It may be the page that makes the truth easiest to verify and reuse: clear claims, original evidence, useful structure, obvious authorship, primary sources and fewer paragraphs written purely to satisfy a word count.

In other words, I do not want to trick an AI into citing me.

I want to become the page it would be irrational **not** to cite.

That is a much harder game, but it is also a better internet.

There is something funny about this. AI may create oceans of synthetic text while simultaneously making **real provenance** more valuable.

When average words become almost free, proof becomes expensive.

<div class="ai-thesis ai-breakout ai-thesis--inverse">
  <span class="ai-eyebrow">THE INTERNET AFTER ABUNDANT TEXT</span>
  <strong>value of a claim ↑ as cost of verification ↓</strong>
  <small>Make the useful thing easy to inspect, quote, test, trace and trust.</small>
</div>

## The moat is not “knowing how” anymore

At least, not in the same way.

“Knowing how” still matters because you need enough understanding to direct and verify the work. But hoarding implementation knowledge is becoming a weaker advantage.

The stronger advantage is a combination that is annoyingly human:

**knowing what + knowing why + caring whether it is good.**

AI is brutal to people whose only advantage was being able to produce a standard output slightly faster than the next person.

But it is incredible for curious people with more ideas than hands.

One person can now attempt projects that used to feel like “team-sized” ideas. A designer can prototype software. A developer can explore visual directions. A teenager with no network can interrogate a subject at absurd depth. A small business can automate work that once disappeared into spreadsheets and inboxes.

Of course, most of the attempts will still be bad.

That is normal.

Cheap experiments are useful precisely because failure becomes less expensive.

## The danger is becoming intellectually lazy

There is one failure mode I actually worry about for myself.

AI is so convenient that it can quietly steal the struggle that produces understanding.

You can ask before thinking. Accept before checking. Generate before deciding. Copy before learning. Keep the conversation moving and mistake movement for progress.

I do not want that.

I want AI to remove mechanical friction, not my ability to sit with a problem.

So the rule I am slowly converging on is simple:

**Use AI to expand agency, not surrender it.**

If it helps me try something I could not have tried, good.

If it helps me test five directions instead of one, good.

If it catches a bug, challenges an assumption or teaches me a concept while we build, good.

If I am asking it what I should believe because thinking feels inconvenient, that is different.

The tool should make my reach larger without making my mind smaller.

## So, am I bullish on AI?

Very.

Just not for the reason that AI marketing usually gives me.

I am bullish because intelligence is becoming infrastructure.

Because the gap between curiosity and creation is shrinking.

Because one stubborn person can coordinate more capability than one person has ever reasonably had access to.

Because software can become less about memorizing the incantation and more about having a point of view.

And because we are still extremely early in learning what people do when the machine stops being a page that answers and becomes a thing that can actually act.

But I do not think AI makes everyone a genius.

I think it gives everyone a multiplier.

Multipliers are ruthless. They multiply clarity. They multiply ambition. They multiply good systems.

They also multiply confusion, laziness and bad taste.

<div class="ai-final-equation ai-breakout">
  <span>AI × human</span>
  <strong>does not equal replacement.</strong>
  <strong>It equals amplification.</strong>
</div>

That is my bet.

I want as much leverage as I can get.

I also want to remain the person holding the lever.
