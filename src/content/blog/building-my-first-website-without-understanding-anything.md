---
title: "Building Before I Felt Ready"
description: "I kept waiting to understand everything before building. Shipping small websites taught me that understanding usually arrives after the first messy version."
pubDate: 2026-07-28
tags: ["building", "learning", "websites"]
---

For a long time, I thought I needed to understand the whole stack before I could build anything serious.

That sounds responsible. Mostly, it was a very respectable form of procrastination.

There is always one more thing to learn: a framework, a deployment setup, accessibility, SEO, animation, performance, Git. The list never ends. If complete understanding is the entry ticket, you never enter.

What finally helped was building smaller things before I felt qualified to build them.

## The browser is a very honest teacher

You can spend two hours reading about responsive design and still learn more from opening your page on a phone and seeing the footer escape sideways.

My usual loop is less impressive than people make building sound:

1. Make the smallest version that proves the idea.
2. Open it on an actual phone.
3. Notice the thing that feels wrong.
4. Fix it without breaking three other things.
5. Repeat until it feels natural.

That last part matters. A page can be technically correct and still feel awkward. A button can work but give no satisfying feedback. A heading can fit on desktop and become a wall of text on mobile. You do not develop a feel for those details by waiting.

## Confusion is part of the work

I still hit problems where I do not immediately know whether the cause is CSS, JavaScript, the build setup, or something embarrassingly simple. The difference now is that confusion no longer feels like proof that I should stop.

It is just the current state of the problem.

I reduce it until I can test one assumption at a time. Is the event firing? Is the width coming from the component or its parent? Is production serving an older build? Small questions are much easier to answer than *why is everything broken?*

```css
/* Useful while finding the element causing horizontal overflow */
* {
  outline: 1px solid rgb(255 0 0 / 0.15);
}
```

Not elegant. Very effective.

## Ship the lesson, not just the page

Every small project leaves behind something reusable: a better way to structure content, a checklist for launch, a component, or simply the memory of a mistake I do not need to repeat.

That is why I like building in public enough to leave notes here. The finished website is one result. The more valuable result is becoming the person who can handle the next problem with a little less panic.

You do not need to know everything before you begin. You need a small enough first move, enough curiosity to inspect what happens, and the patience to improve the result after the excitement wears off.
