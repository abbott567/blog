---
title: WCAG 2.2 and what it means for you
date: 2023-10-06
dateModified: 2023-10-06
tags:
  - accessibility
meta:
  description: >-
    An overview of WCAG 2.2 and how it may affect your product
eleventyComputed:
  permalink: '/blog/{{title|slugify}}/'
  imgPath: '/posts/{{title|slugify}}/images'
  meta:
    image:
      name: 'share-image'
      extension: 'jpg'
      href: '{{imgPath}}/{{meta.image.name}}.{{meta.image.extension}}'
      alt: "The W3C logo and the title WCAG 2.2"
  excerpt: |
    After much anticipation and several delayed release dates, we eventually got the elusive [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22) on 5 October 2023.

    For those who build websites, digital services or mobile applications, or if you just care about making the internet more accessible in general, then this is *big* news!

    So, lets have a look at what all the fuss is about!
---

# {{title}}

It's here. It's *finally* here!

After much anticipation and several delayed release dates, we eventually got the elusive [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22) on 5 October 2023.

For those who build websites, digital services, or mobile applications, or if you just care about making the internet more accessible in general, then this is *big* news!

So, lets have a look at what all the fuss is about!

## New Criteria

First off, if you're worried about having to learn a whole new rule book, breathe easy.

WCAG 2.2 keeps most of WCAG 2.1 intact, but it adds 9 new criteria and removes 1, which is [4.1.1 Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html).

Of the 9 new criteria, 6 fall under levels A and AA, which is what most folks pay attention to anyway.

Let's look at them in a bit more detail.

### 2.4.11 Focus Not Obscured (Minimum) (Level AA)

[2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) means you must not let anything fully obscure the element which has keyboard focus. 

Examples of this are modals, adverts, sticky headers or footers which often appear on a higher layer than the rest of the page.

Basically, when you move the keyboard focus to an element, you must be able to see at least a portion of the focus indicator at all times.

This criterion deliberately uses the phrase 'partially obscured' intentionally, so you will not fail if something overlaps slightly, as long as you can still tell what has focus.

The reason for this deliberate language choice is because there are two versions of this criterion, one at level AA and one at level AAA, which we'll look at next.

### 2.4.12 Focus Not Obscured (Enhanced) (Level AAA)

[2.4.12 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html) means the focus indicator must always be *fully* visible, which is slightly different to what is outlined under 2.4.11, which allows it to be *partially* obscured.

So, if your keyboard focus is at any point:
- fully obscured, you fail 2.4.11 and cannot be AA compliant
- partially obscured, you pass 2.4.11 and can be AA compliant
- never obscured, you pass 2.4.11 and can be AAA compliant

If you're using the [GOVUK Design System](https://design-system.service.gov.uk/) and [GOVUK Frontend](https://frontend.design-system.service.gov.uk/), there shouldn't be many scenarios where the focus ends up obscured. So I imagine there will be minimal impact for most departments.

### 2.4.13 Focus Appearance (Level AAA)

[2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) is difficult to understand, as it's very nuanced.

A lot of people, myself included, were a little disgruntled when we heard this criterion had been bumped to AAA.

Now, I can't speak for everyone, but my reason for being upset is because WCAG is *really* difficult to understand, and I feel like making this a AAA criterion is going to add to the confusion.

In my experience, a lot of people building websites have failed to realise that the appearance of focus indicators was actually already covered in WCAG 2.1. It's just not really called out explicitly. And, my concern is by calling it out explicitly in 2.2 as a AAA criterion means even more people will now miss it, as they will wrongly assume it's only covered under level AAA.

Under [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), you need to add some kind of visible indicator to the element which has keyboard focus. In this criterion, WCAG does not go into specifics about how it should look or what contrast ratios are required, so as long as there's some kind of indicator, you pass.

Then, under [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), WCAG states any non-text content must be perceivable. A focus indicator is non-text content, but it isn't called out explicitly, so people often miss it. 

When you combine both these criteria, it means that you must have a visible focus indicator and it must also have a contrast ratio of 3:1 against the background it appears on.

These two have not changed, and remain criteria for level AA compliance in 2.2. 

Now, this new criterion, [2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html), is more nuanced. Its looking for the focused state of an element being noticeably different from its unfocused state.

So, where it used to be acceptable to make something a bit lighter or a bit darker when focused, or if you changed the background colour, as long as it met the contrast ratio against the page, it would pass.

If you want to pass this new criterion, when focused, elements need to have a contrast ratio of 3:1 against the page, but also a ratio of 3:1 against itself in an unfocused state.

This makes it very difficult to do with colour alone, if you make something a bit lighter or a bit darker, it will fall below this threshold.

In the documentation, WCAG shows [examples of an outline to meet Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html#:~:text=Using%20a%20solid%20outline), or a change in size or shape to make the element visually different from it's siblings, whilst still maintaining a contrast ratio of 3:1 against the page.

My concern is not necessarily that this is a AAA criterion, but more with the ever growing complexity of WCAG. This new criterion means focus states are now creeping into the same complexity as headings and labels, where you need to have a holistic understanding of 3 or 4 criteria and how they all piece together in order to achieve compliance.

In my opinion, calling this criterion 'focus appearance' perhaps makes it even less obvious that non-text contrast still covers focus states. And, I worry that it will compound the problem I've already seen in that focus states are rarely accessible.

I would have perhaps liked to have seen both a minimum and enhanced version of this criterion, with minimum covering the stuff that always gets missed under non-text contrast, just so everything is explicit.

If you're using the [GOVUK Design System](https://design-system.service.gov.uk/) and [GOVUK Frontend](https://frontend.design-system.service.gov.uk/), the focus indicator styles already meet this criterion. So, unless you're overriding any of the styles, you should not have to do any additional work.

### 2.5.7 Dragging Movements (Level AA)

[2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) means if something can be dragged, you need to make sure there is an alternative interaction which can be achieved using a single click, which should also make it work when using just a keyboard.

For example, in most operating systems, you can drag a file from one folder to another. Alternatively, you can highlight the file, choose `edit > cut` in the source folder, and then `edit > paste` in the destination folder.

You can also use shortcut keys on the keyboard to achieve the same thing, but the takeaway point is that the user is not *forced* to drag the files, there are alternatives available which do not rely on motor skills and accuracy.

I can't imagine there are many public sector bodies using a lot of dragging interactions. I could be wrong, but if you're following the [GOVUK Service Manual](https://www.gov.uk/service-manual), following good design principles and using progressive enhancement, this one should not impact most departments.

### 2.5.8 Target Size (Minimum) (Level AA)

[2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) means that as a general rule of thumb, clickable elements need to be at least 24px by 24px in size.

Prior to WCAG 2.2, we still had [WCAG 2.1 - 2.2.5 Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) which was a AAA criterion stating that the target area should be 44px by 44px.

In WCAG 2.2, they've renamed this criterion 'Target Size (Enhanced).' It's still a AAA criterion. But now, they've also added a new minimum size at the AA level.

There are a few exceptions where it can be smaller than 24px and still pass, I've outlined them in the following list. But, most of them will still create usability issues, so you should try to use the target size of at least 24px wherever possible, rather than trying to get around it.

<ol>


<li>

**Spacing**: If the clickable element is smaller than 24px by 24px, it will still pass provided it has at least 24px of non-clickable space around it, so people don't accidentally click on the wrong thing. 

The issue with this workaround, is that it may still take people several attempts to click the right element, even if they are not clicking the wrong one.

</li>

<li>

**Equivalent**: If there's another element on the page that has the same functionality, and that one does meet the minimum target size, then secondary elements can be smaller.

The issue with this workaround is that you want to be able to interact with elements in the right context. Making somebody go off and find a similar interaction adds cognitive load and increases the likelihood that the user will not find what they're looking for.

</li>

<li>

**Inline**: If the clickable thing is part of a sentence or text line, it's okay for it to be smaller. For example, a link in a paragraph of text.

This one is probably inevitable. Unless your font size is 24px, it's unlikely you'll create a substantial hit target on link text. If you try to pad out the hit area, you may lead to overlapping issues if you have several links in the same paragraph.

</li>

<li>

**User agent control**: If the size is set by the browser itself, and you didn't change it, then the compliance issue becomes that of the browser creator, not you as the website creator.

This one only becomes your issue if you alter the elements using CSS. If you're literally just writing HTML, the browser will render them using default styling, and this is what the criterion is referring to.

</li>

<li>

**Essential**: If for some reason, it has to be a certain size to make sense or it's required by law, then it can be smaller.

For example, if you're rendering interactive pins on a map to show locations of interest, they cannot be moved further apart or they become geographically inaccurate.

</li>

</ol>

If you're using the [GOVUK Design System](https://design-system.service.gov.uk/) and [GOVUK Frontend](https://frontend.design-system.service.gov.uk/), the target sizes on things like buttons, radios, and checkboxes are already big enough and spaced well enough. So, again, unless you're overriding any of the styles, you should automatically meet this one.

### 3.2.6 Consistent Help (Level A)

[3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html) means that you should keep your support options in the same place on every page.

For example, phone numbers, links to 'contact us' or buttons to open chat, if they're in the same place all the time, people can find them easily when they run into issues.

The guidance for [contact details in the GOVUK Design System](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/) already states that you should list contact channels in the same order throughout your service. But, with the introduction of this new criterion in WCAG 2.2, I expect this will be updated to talk about positioning, and help teams be compliant.

### 3.3.7 Redundant Entry (level A)

[3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html) means you should not make people type the same information over and over.

If the user needs to enter the same information again, it should either be auto-populated, or the user should be able to select it rather than re-keying.

For example, when you checkout on most e-commerce sites, you enter your billing information, then you can usually check a box which says something along the lines of 'use billing information as shipping address'.

There are a few exceptions, such as when the information is no longer relevant, or it's required for accuracy or security, like when you need to re-key your email address or password to make sure it's correct when setting up an account.

In most cases, if you're using good architectural practices, and you can pull session information through, there should be no reason to not be able to meet this criterion.

However, it could make things more tricky if you're implementing a microservice style architecture and relying on redirects rather than API calls. I've written more about this in [Making microservices accessible](/blog/making-microservices-accessible/).

### 3.3.8 Accessible Authentication (Minimum) (Level AA)

CAPTCHAs drive us all crazy, and they're becoming increasingly more ridiculous. Solve this maths puzzle. Choose all the images of fire hydrants. Rotate the image of the cat in a hat until it matches the direction of cupids arrow.

[3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html) has been introduced to make authentication more accessible by outlawing the use of 'cognitive function tests', which it defines as 'remembering a password or solving a puzzle'.

The term remembering a password might trigger alarm bells, as this is usually the bare minimum requirement for authentication. But, it's actually referring to situations where people are *forced* to remember it, because the website creators have disabled the use of password managers or copy and paste functions for *security*.

Like with anything WCAG, there are a few ways to meet the criterion:

1. **Alternative**: Another authentication method that does not rely on a cognitive function test exists. For example, rather than solving a maths puzzle, you can receive a magic email link which logs you in automatically.

2. **Mechanism**: A mechanism is available to assist the user in completing the cognitive function test. For example, you allow copy-and-paste functionality on the password field so people don't have to remember it or key it in manually.

3. **Object Recognition**: The cognitive function test is to recognise objects. For example, select all images of a bicycle.

4. **Personal Content**: The cognitive function test is to identify non-text content the user provided. For example, if the person has uploaded an image of themselves when creating an account, you could use a cognitive function test which states, 'select the picture of yourself from the following images'.

It was quite difficult to be WCAG 2.1 compliant using CAPTCHA's, as they are notoriously awful. So I imagine this one will again be relatively low impact for most public sector organisations if they were already compliant.

### 3.3.9 Accessible Authentication (Enhanced) (Level AAA)

[3.3.9 Accessible Authentication (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html) is just a stricter version of 3.3.8.

To meet this one you can only use the first two options. So, if you used 'alternative' or 'mechanism', and did not rely on 'object recognition' or 'personal content', you should meet this criterion automatically.

## Removed criteria

### 4.1.1 Parsing

[4.1.1 Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html) has been removed. 

Well, it has not technically been removed, because of the way the WCAG criteria are numbered, you will still find [4.1.1 Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html) in the 2.2 guidance, but it has had it's level removed and there is a big warning that this is now obsolete. 

I guess if they just removed it, then you'd have 4.1.2 but no 4.1.1 and as WCAG is ordered sequentially, that would be weird. 

Parsing stated that your HTML code needed to be valid, as in, written to it's technical specification. If you missed a closing bracket or added an attribute which wasn't supported, the page would usually still load, but you'd fail the criterion.

The reason it's been removed, is that modern browsers and assistive technology is pretty good at papering over the cracks. If you miss a closing bracket, the browser will usually just add one and there's no impact on the user. 

With WCAG 2.2, there was a realisation that most of the issues that failed parsing *and* caused accessibility issues will also fail other criteria, such as [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) or [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html).

So it was decided that 'Parsing' is no longer needed for accessibility, because it doesn't add anything of value that the other criteria does not already have covered.

What I would say though, is if you have code which is not written to spec, it can become more difficult to debug when it is behaving weird. So, personally, I'd always still recommend running a HTML validator and writing code which is correct.

## Transition period for Public Sector Organisations

The Central Digital and Data Office (CDDO), who are the monitoring and reporting body for the UK, released a blog post in December 2022 titled: [Some changes to the public sector digital accessibility regulations](https://accessibility.blog.gov.uk/2022/12/09/some-changes-to-the-public-sector-digital-accessibility-regulations/).

In this blog post, CDDO highlight that [the regulations reference the latest version of WCAG now](https://www.legislation.gov.uk/uksi/2022/1097/made), were it now refers to the 'latest version' of WCAG rather than 2.1 specifically. 

This means the legislation does not need to be changed every time there is an update to WCAG, which is expensive and time consuming. It just means the day after a new version is brought in, thats the one that the legislation now refers to.

CDDO state in this blog post that they are anticipating WCAG 2.2 in early 2023, and that they would give organisations until early 2024 to make the transition. 

<del>

So, although CDDO have not *explicitly* stated a timeframe for transition, we can infer that they are prepared to allow a 12 month period before they start to report organisations who are compliant to 2.1 rather than 2.2.

With this logic, we can probably expect CDDO to start monitoring and reporting on WCAG 2.2 from October 2024. But we will need to wait for an official statement to know for sure.

</del>

There has been a quiet change to GOVUK Guidance which states that [monitoring against WCAG 2.2 will start from October 2024](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps), so with the delay of WCAG 2.2, they are still honouring their 12 month transition period.

What is a little weird about the update, is that it states Government Digital Service (GDS) will be monitoring, not CDDO, so I'm not sure if there has been another re-shuffle in terms of responsibilities. But, regardless of who is doing the monitoring, at least we have confirmation of when it kicks in!

The statement, published on on 5 October 2024, reads:

> The Government Digital Service (GDS) is working on how to assess the new success criteria in WCAG 2.2 and will start monitoring for the extra criteria in October 2024. Until October 2024 we will monitor accessibility of websites and apps to WCAG 2.1 level AA.

## Final Thoughts

WCAG 2.2 is a minor, but welcome update. It doesn't introduce anything that is shocking or insurmountable, and if you're already 2.1 compliant it shouldn't be too difficult to transition to the new standard.

I personally feel like the new criteria for Focus Appearance could have been braver, and removed some of the ambiguity around what is already often an accessibility issue. It feels like a missed opportunity, but I can appreciate why they felt the need to classify it as a AAA criterion.

Anyway, I hope you found some good takeaways here. Hopefully WCAG 3.0 will be everything we're all dreaming of!

Thanks,
Craig