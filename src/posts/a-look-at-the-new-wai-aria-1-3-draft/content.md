---
title: A look at the new WAI-ARIA 1.3 draft
date: 2024-02-01
dateModified: 2024-02-01
tags:
  - accessibility
meta:
  description: >-
    Exploring WAI-ARIA 1.3: A Future look at Web Accessibility.
eleventyComputed:
  permalink: '/blog/a-look-at-the-new-wai-aria-1-3-draft/'
  imgPath: '/posts/a-look-at-the-new-wai-aria-1-3-draft/images'
  meta:
    image:
      name: 'share-image'
      extension: 'jpg'
      href: '{{imgPath}}/{{meta.image.name}}.{{meta.image.extension}}'
      alt: A collection of accessibility symbols such as an eye, an ear and a hand. The W3C logo and the text, Web Accessibility Initiative WAI. Followed by, Accessibility, essential for some, useful to all.
  excerpt: |
    W3C, the World Wide Web Consortium, released a new draft of the WAI-ARIA 1.3 specification on 23 January 2024.

    If you're not familiar with it, WAI stands for the Web Accessibility Initiative, and ARIA stands for Accessible Rich Internet Applications.

    It's a set of standards created to improve the accessibility of the products we build for the web, and it includes details about HTML attributes you can use to make content better for assistive technology. Some common ones you might have come across are `aria-label`, `aria-live`, and `aria-describedby`.

    With the new draft of 1.3, we can get a bit of an idea as to what is coming, and how we can prepare for implementing and testing these features.
---

# {{title}}

[W3C, the World Wide Web Consortium](https://www.w3.org/), released a [new draft of the WAI-ARIA 1.3 specification](https://w3c.github.io/aria/) on 23 January 2024.

If you're not familiar with it, WAI stands for the Web Accessibility Initiative, and ARIA stands for Accessible Rich Internet Applications.

It's a set of standards created to improve the accessibility of the products we build for the web, and it includes details about HTML attributes you can use to make content better for assistive technology. Some common ones you might have come across are `aria-label`, `aria-live`, and `aria-describedby`.

With the new draft of 1.3, we can get a bit of an idea as to what is coming, and how we can prepare for implementing and testing these features.

## What's new in WAI-ARIA 1.3?

To be honest, I'm not certain. The draft is tech heavy, and W3C have not published a 'what's new in WAI-ARIA 1.3' summary. Or, if they have, I have not been able to find it.

So, I've tried to pick out the changes in the details myself by manually comparing the draft to the existing standard. But, because of this manual approach, It's likely I may have missed something. So, just bear that in mind.

Based on my comparison, this following is what I believe is new in the WAI-ARIA 1.3 draft.

New roles:
- [suggestion](#the-suggestion-role)
- [comment](#the-comment-role)
- [mark](#the-mark-role)

New attributes:
- [aria-description](#aria-description)
- [aria-braillelabel](#aria-braille-label)
- [aria-brailleroledescription](#aria-braille-role-description)

Enhancements:
- [aria-details](#aria-details)

## Using hacks

Each update to WAI-ARIA usually replaces a lot of the hacks we do in the code to make things work better for assistive technologies. 

In this post, I will show you examples of how the new additions to WAI-ARIA 1.3 will work, vs the hacks I use to achieve a similar outcome today.

If you want to implement some of these hacks, you will need to create a class for visually hidden text. This is text that is not visible to sighted users, but is still available to assistive technology like screen readers.

When making a visually hidden class, you cannot use `display:none` or `visibility:hidden`. While these *will* make the content hidden, it will also hide it from assistive technology, which is not what we want. 

The goal is to create a class which hides the content for sighted users, but leaves it available to assistive technology. 

For example:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  white-space: nowrap;
  background-color: black; /* to prevent axe false flags on contrast */
  color: white; /* to prevent axe false flags on contrast */
}

.visually-hidden .focusable:active,
.visually-hidden .focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

## Aria roles

### What are role attributes?

A role attribute can be implicit or explicit. Every interactive element has an implicit role based on which HTML tag is used, and this will be translated to the [accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree) when the browser builds the page, or [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

Contrary to popular belief, it's the accessibility tree that assistive technology interacts with, not the actual DOM itself. So it's important to make sure elements are assigned the correct role during this translation from DOM to accessibility tree.

For example, a button element has an implicit role of 'button'. You don't need to tell the browser it's a button, it just automatically assumes it is one because of the tag you used.

These two elements will be identical in the DOM and the accessibility tree.

```html
<button>Example button</button>
<button role="button">Example button</button>
```

Now, when we give elements an explicit role, we refer to these as [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles). This is where we are overriding the HTML role and deliberately assigning it a new one.

If you style an element using CSS to make it look like a different one, and you don't change it's role, the browser will incorrectly translate your intentions to the accessibility tree and it will be broken for assistive technology users.

For example:
```html
<a class="button" href="/some-link">
  This looks like a button, but is still a link in the 
  accessibility tree.
</a>
```

So, if you style an element to look like a different one, always change it's ARIA role too. If you don't, you will fail [the Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) on criterion [4.1.2 Name, Role, Value]({wcagify}).

For example:

```html
<a class="button" role="button" href="/some-link">
  This looks like a button, and is now also a button in 
  the accessibility tree.
</a>
```

### New roles in WAI-ARIA 1.3

Now that we know a bit about what ARIA roles are, let's look at the new ones proposed in the WAI-ARIA 1.3 draft.

#### The suggestion role

The purpose of `role="suggestion"` is to signal to assistive technology when a suggestion is being made.

For example, when you make suggestions in a Google Doc, or Microsoft Word, it often styles the text so a sighted user can work out when text is to be inserted or deleted.

![Text from a Google Doc. It reads "The cat sat on the veranda." The word veranda is crossed out, and the word mat is written alongside it, suggesting that the sentence should instead read: "The cat sat on the mat."]({{imgPath}}/google-doc-suggestion.webp)

With the new suggestion role, you'll be able to highlight these suggestions to assistive technology also. For example:

```html
<p>
  The cat sat on the 
  <span role="deletion">veranda.</span>
  <span role="insertion">mat.</span>
</p>
```

Today, if you want to make suggestions accessible, you can use a hack. In this example, the terms deletion and inserted will only be perceivable to screen reader users, because they are visually hidden.

For example:

```html
<p>
  The cat sat on the 
  <span class="deletion">
    <span class="visually-hidden">
      deletion:
    </span>
    veranda.
  </span>
  <span class="insertion">
    <span class="visually-hidden">
      insertion:
    </span>
    mat.
  </span>
</p>
```

You can [read about the suggestion role in the 1.3 draft](https://w3c.github.io/aria/#suggestion).

#### The Comment Role
Almost every article you read online these days has comments, because engagement feeds algorithms, right? But, for screen reader users, sometimes it's difficult to know where the article ends and where the comments start.

The purpose of the comment role, or `role=comment`, will be to make sure that it's clear to a user when they're reading a comment, and not the body copy of an article or something else entirely.

Having a role of 'comment' will help the screen reader to inform the user of exactly the type of content they're hearing. You will also be able to pair it up with existing attributes like ARIA labelled by, or `aria-labelledby`, to add additional context, like who wrote it, and when.

For example:
```html
<article id="post-123">
  <h2>Article title</h2>
  <p>The body content of the article…</p>
  
  <!-- Comments section -->
  <section aria-labelledby="comment-section-header">
    <h3 id="comment-section-header">Comments</h3>

    <!-- New comment role -->
    <div role="comment" aria-labelledby="comment-1-header">
      <header id="comment-1-header">
        <h4>John Doe</h4>
        <time datetime="2024-01-29">
          January 29, 2024
        </time>
      </header>
      <p>
        Great article! It really helped me understand 
        the importance of accessibility.
      </p>
    </div>

    <!-- More comments -->
  </section>
</article>
```

Again, you can still do this now using a hack. For example:

```html
<!-- Comment hack -->
<div aria-labelledby="comment-1-header">
  <header id="comment-1-header">
    <h4>
      <span class="visually-hidden">
        Comment: 
      </span>
      John Doe
    </h4>
    <time datetime="2024-01-29">
      January 29, 2024
    </time>
  </header>
  <p>
    Great article! It really helped me understand 
    the importance of accessibility.
  </p>
</div>
```

You can [read about the comment role in the 1.3 draft](https://w3c.github.io/aria/#comment).

#### The Mark Role
Using the mark role, or `role=mark` will be like a digital highlighter, pointing out important text for reference.

Currently, highlighting is often just done using a mark element (`<mark>`), or span element (`<span>`), combined with CSS styling. This means the importance of it is missed by assistive technologies.

I expect that if the mark role becomes part of the final version of WAI-ARIA 1.3, then in future the mark element will come to have an implicit role of 'mark'. But, at the moment it's purely decorative.

The following is an example of how you'll be able to use the mark role based on the proposals in the 1.3 draft. I have used it on a span element, just to highlight how we would use it as an explicit change. But, technically, using a mark element with a mark role, or `<mark role="mark">`, would be more semantically correct, it just looks weird in an example, as the role *should* be implicit at some point.

```html
<p>
  In the article, 'Stop trying to recruit unicorns with
  acorns', Craig states:
</p>
<blockquote>
  If we wrap a
  <span role="mark" aria-describedby="mark-description">
    rigid education and certification system
  </span> 
  around a profession which was largely built on the back 
  of lived experience, we'll lose the a lot of the 
  expertise and diversity which accessibility is renowned 
  for.
</blockquote>
…
<p id="mark-description">
  The IAAP certification process mimics existing rigid 
  systems in academia which can be blockers for 
  neurodivergent people.
</p>
```

Again, we can currently hack this using hidden text.

```html
<p>
  In the article, 'Stop trying to recruit unicorns with 
  acorns', Craig states:
</p>
<blockquote>
  If we wrap a
  <mark class="marked" aria-describedby="mark-description">
    <span class="visually-hidden">
      Marked text:
    </span>
    rigid education and certification system
  </mark> 
  around a profession which was largely built on the back 
  of lived experience, we'll lose the a lot of the 
  expertise and diversity which accessibility is renowned 
  for.
</blockquote>
…
<p id="mark-description">
  The IAAP certification process mimics existing rigid 
  systems in academia which can be blockers for 
  neurodivergent people.
</p>
```

You can [read about the mark role in the 1.3 draft](https://w3c.github.io/aria/#mark).

## ARIA attributes

[ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) serve a specific purpose for accessibility and are prefixed with the word ARIA. For example: `aria-label`.

### New ARIA attributes in WAI-ARIA 1.3

#### ARIA Description

The new `aria-description` attribute is very closely related to `aria-label`.

The `aria-label` attribute is designed to give an accessible name to interactive elements that have not been given one using another method. But, it can only be used on interactive elements, and it's designed to be short and concise.

For example:

```html
<button aria-label="Play">
  <svg>…</svg>
</button>
```

With `aria-description`, we will be able to offer more space for additional context for *any* element, not just interactive ones.

For example:

```html
<button
  aria-label="Play"
  aria-description="Video: Exploring the new WAI-ARIA 1.3 draft">
  <svg>…</svg>
</button>
``` 

Using it on non-interactive elements could be useful to add additional context to things like images.

The `alt` attribute should always be used to describe the image in its context, or what it represents. But an `aria-description` could provide some additional narrative, or a more detailed description for those users that want it.

For example:

```html
<img
  src="craig-headshot.jpg"
  alt="
    A portrait of a middle aged white man. 
    He has a shaved head and a short black beard. 
    He is wearing black glasses and a black baseball cap."
  aria-description="
    Craig is a Design Lead and Accessibility Specialist.
    He is known for his work as the Head of Accessibility, 
    at the Department for Work and Pensions."
>
```

However, it is worth noting that this additional information could also be useful to sighted users. So using a caption tag (`<caption>`) might be better for this example, but it just highlights how the new `aria-description` attribute might be useful.

Here is another example:

```html
<img
  src="warning-icon.jpg"
  alt="
    Warning!"
  aria-description="
    A solid triangle containing an exclamation mark."
>
```

These examples are for illustrative purposes. I've written an in-depth post on [how to write good alt text for screen readers](/blog/how-to-write-good-alt-text-for-screen-readers/) for better, real-world examples.

You can [read about the ARIA description attribute in the 1.3 draft](https://w3c.github.io/aria/#aria-description).

#### ARIA Braille Label

The new ARIA Braille label, or `aria-braillelabel` attribute, is going to be a game-changer for Braille display users when dealing with un-familiar interactive elements.

At the moment, Braille readers rely solely on attempting to translate labels and other attributes. And, currently, there isn't really a way to override instances which are not providing a good experience without also affecting either how it looks on the screen to sighted users, or how it's read out to screen reader users.

Also, as a bi-product of trying to make the web more accessible, we often add additional context for screen readers. But, this can make it difficult for Braille users, where being concise is important as Braille keyboards only have a limited amount of dots and physical space.

This new attribute should allow us to provide more context for screen readers, whilst simultaneously keeping it shortened for Braille keyboards.

The ARIA Braille label attribute is closely related to the ARIA label attribute, and should not be used without it. Think of it as an extension of `aria-label` rather than a standalone attribute.

In the following example, imagine you have a reset button on an application form, you could offer a visual icon for sighted users, additional context in the label for screen reader users, and a more concise option for Braille users.

For example:

```html
<button
  aria-label="Reset application form"
  aria-braillelabel="Reset"
>
  <img src="reset-icon.png" alt="">
</button>
```

I'm not aware of any hacks you can currently use to achieve the same outcome for Braille readers, which is why this one should be really useful!

You can [read about the ARIA braille label attribute in the 1.3 draft](https://w3c.github.io/aria/#aria-braillelabel).

#### ARIA Braille Role Description
As you can probably guess, the ARIA Braille role description, or `aria-brailleroledescription` attribute, provides a description about the role of the component for Braille readers.

We already have ARIA role description, or `aria-roledescription`, which allows you to define custom WAI-ARIA roles for heavily customised interactive elements.

Like the previous example, the new ARIA Braille role attribute is closely related to the ARIA role description attribute, and should not be used without it. Again,think of it as an extension rather than a standalone attribute.

Imagine you created a custom button to play or pause a video about the new WAI-ARIA 1.3 draft. Giving it a role description of 'Video Control' lets assistive technologies know that, not only is this a button, it also directly controls a video. For example:

```html
<div
  role="button"
  aria-label="Play or Pause: WAI-ARIA 1.3 draft"
  aria-roledescription="Video Control">
  <img
    src="play-pause.png"
    alt="Right arrow icon">
</div>
```

The new ARIA Braille role description attribute should only be used when you need to provide a more concise description for Braille keyboards, which is different to the regular ARIA description.

The following example is convoluted. Personally I think you could do a better job by using native elements and better content design. But, hopefully it will provide enough context to make the concept understandable.

```html
<div
  role="button"
  aria-label="Play or Pause: WAI-ARIA 1.3 draft"
  aria-roledescription="Video Control"
  aria-braillelabel="Play/Pause"
  aria-brailleroledescription="Video">
  <img
    src="play-pause.png"
    alt="Right arrow icon">
</div>
```

Here's a short explanation of what this is doing:
1. I gave the div element a role of 'button' so that it is logged as a button in the accessibility tree. A native button tag would be better.
2. The ARIA label of 'Play or Pause Video: WAI-ARIA 1.3 draft' means a screen reader can announce in detail what the button is for. Without this, a screen reader would read out 'Right arrow icon', which is terrible.
3. The ARIA role description provides additional context, that this controls a video.
4. The ARIA Braille label is 'Play/Pause', as a more concise version of the ARIA label, but for Braille readers only.
5. Finally, the ARIA Braille role description of 'Video' provides a more concise version of the ARIA role description for Braille readers only, indicating concisely, this controls a video.

Again, I'm not aware of any hacks you can currently use to achieve the same outcome for Braille readers.

You can [read about the ARIA braille role description attribute in the 1.3 draft](https://w3c.github.io/aria/#aria-brailleroledescription).

### Enhancements to Existing Attributes

#### ARIA Details

We've had `aria-details` since WAI-ARIA 1.1. It's useful to combat those awful 'read more' and 'more details' links.

But, currently, `aria-details` can only reference a single `id`. So you are limited as to how much context you can add to a link. For example:

```html
<p>
  The number of children reported to have a disability 
  has risen 2%, from 6% to 8% in the last 10 years.
</p>
<div id="more-details">
  My detailed analysis offers a more in depth look at 
  the rising disability statistics in the UK, over 
  multiple age ranges.
</div>
<a
  href="https://www.craigabbott.co.uk/blog/rising-disability-statistics/" 
  aria-details="more-details">
  Read more
</a>
```

What the 1.3 draft is proposing, is that you could pass in multiple `id` attributes, to provide multiple layers of context.

For example:

```html
<p>
  The number of children reported to have a disability has 
  risen 2%, from 6% to 8% in the last 10 years.
</p>
<div id="age-analysis">
  An age-wise breakdown shows significant variations in 
  the increase across different age groups.
</div>
<div id="regional-analysis">
  Regional analysis highlights certain areas with more 
  pronounced increases than others.
</div>
<div id="support-services">
  The impact on support services and educational facilities 
  has also been notable, with certain services experiencing 
  higher demand.
</div>
<a
  href="https://www.craigabbott.co.uk/blog/rising-disability-statistics/" 
  aria-details="age-analysis regional-analysis support-services">
  Read more
</a>

```

Personally, I'd rather just set the context in the paragraph and make the link more descriptive, like in the following example. By doing this, I'd avoid the need for these complex ARIA relationships, but, there might be instances where this approach is useful.

For example:
```html
<p>
  The number of children reported to have a disability 
  has risen 2%, from 6% to 8% in the last 10 years. 
  An age-wise breakdown shows significant variations 
  in the increase across different age groups, and 
  regional analysis highlights certain areas with 
  more pronounced increases than others.
</p>
<p>
  The impact on support services and educational facilities 
  has also been notable, with certain services experiencing 
  higher demand.
</p>
<p>
  You can 
  <a href="https://www.craigabbott.co.uk/blog/rising-disability-statistics/">
    read in-depth about rising disability statistics 
  </a>.
</p>
```

## A Word of Caution

With every release, ARIA is getting better and providing more and more functionality. But, there are a few things to think about before you start just adding ARIA attributes everywhere.

As promising as these features are, remember that the WAI ARIA 1.3 is still a draft. It's subject to revisions and changes. While it's exciting to anticipate these advancements, we need to exercise patience before jumping onto the bandwagon.

The adoption of these features by browsers and assistive technologies won't happen overnight. It's a gradual process. Browsers and assistive technologies might ignore these new attributes for months, or even years after the release of WAI-ARIA 1.3.

Also, some people will never have access to these new features. With the likes of Dragon and JAWS, they have an old world view on licensing. The version you buy is the version you own, there are no free updates. So, at almost £1,000 each, a lot of people simply cannot afford to upgrade to access new features.

## Final thoughts

There's a saying in the accessibility industry, and that's 'the first rule of ARIA is, do not use ARIA'. Or, at least, we should try not to wherever possible.

The WAI-ARIA 1.3 draft shows some exciting new features, but they won't be widely supported for a long time, and there will always be those people who never have access to them because they can't afford to update their assistive technology.

ARIA is great, and it definitely has its uses for complex components. But, it is overused and even abused at times.

We should use simple, native elements wherever possible, and only resort to using ARIA sparingly when there is literally no alternative, as 9 times out of 10, you can make things more accessible just by using the correct elements and roles, and by being smarter about the way you word your content.

As always, I hope this was helpful. It was nice to write an article that isn't a rant for a change!

Thanks,    
Craig