---
title: One-page-applications are not accessible
date: 2018-03-14
dateModified: 2018-03-14
tags:
  - design
  - accessibility
meta:
  description: >-
    The pitfalls of one page applications and accessibility.
eleventyComputed:
  permalink: '/blog/{{title|slugify}}/'
  imgPath: '/posts/{{title|slugify}}/images'
  meta:
    image:
      name: 'share-image'
      extension: 'jpg'
      href: '{{imgPath}}/{{name}}.{{extension}}'
      alt: "A deliberately complex user interface which shows all of the information on one page, including graphs, charts, statistics and maps."
  excerpt: |
    Ok, this maybe should have been called one-page-applications are *rarely* accessible. Anything can be made accessible, it just takes a lot of effort, and very few people put the effort in.

    One-page-applications are on the rise. With them you get funky animations and cool transition effects. Some are a real beauty to behold.

    The biggest problem with one-page-applications, is they often create a terrible experience for people using screen readers.
---

# {{title}}

Ok, this maybe should have been called one-page-applications are *rarely* accessible. Anything can be made accessible, it just takes a lot of effort, and very few people put the effort in.

One-page-applications are on the rise. With them you get funky animations and cool transition effects. Some are a real beauty to behold.

Building them used to be a chore. You needed a lot of [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) requests and complex call-back functions. You needed to manipulate the [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Glossary/DOM) a lot using [Javascript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) or [jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery).

But, now we can use [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) instead of AJAX and we can use frameworks like [Angular](https://angular.io/) or [React](https://reactjs.org/). This makes actually developing a one-page-application easier than ever.

This seems like a good thing, right?

## So, why are one-page-applications bad?

Well, there's things that could hurt you unless you're clever about it.

The most obvious place to start is a reliance on Javascript. Some users don't have it enabled. How does your app work for them?

Then there's search engines. These crawl through your URLs, and you will likely have 1. So Google can't see most of your content, which will affect your visibility and your traffic.

Again, you could be smart about this and manipulate it using `window.history` and appending states so that the user can navigate forwards and backwards through different application states, but you need to manage it.

If you don't, things like analytics will be difficult. You usually tie interactions to a URL which allows you to look at the data in-scope. If you only have 1 URL, you're going to have to create complex workarounds.

Creating any workaround takes time and effort. If you're going to create a great experience and a great one-page-application, you're going to need a few. It will be hard. It will take sweat. Tears. Frustration. There will be bugs. There will be refactoring.

All browsers have common behaviours. The back button. The forward button. The stop (or cancel) button. Keyboard focus. The caching of the scroll position. These are all thing that users have learned subconsciously by surfing thousands of websites. Your one page application must be consistent with what people know, or they won't use it.

## Accessibility and one-page-applications

The biggest problem with one-page-applications, is they often create a terrible experience for people using screen readers.

With things like React, it's super easy to make a `<span>` clickable like a `<button>`, but semantic HTML is important!

There is also a cognitive issue. Users have to maintain a mental image map of the page in all it's states. If they click something, and some content changes without the page reloading, they need to know something has changed.

How do you make them understand what they cannot see? How do you orientate this to their mental map they have been building? You can do this with `aria-live` but it's not as easy as people might think.

Changes can be subtle or drastic. Sometimes, the whole page can change. If so, has the focus or scroll position changed? Or have you left the focus on the hidden content?

If you've loaded all your content into the DOM and hidden it, will a screen reader still read it out? If I don't use a mouse, can I still <kbd>tab</kbd> to the hidden content? If so, your user will quickly lose context and become disorientated.

If you do load all your content into the DOM, will it cause performance issues? Will the initial load of the site be slow? Do you need a loading progress bar? How do you alert a screen reader to the loading time as it updates?

I've seen issues where the DOM was so huge the screen reader actually became unusable. This was using [JAWS](https://en.wikipedia.org/wiki/JAWS_(screen_reader)). The time between pressing a key and hearing the content was over 4 seconds. A delay of over 400ms makes any application annoying. But, a delay of more than 2 or 3 seconds makes the application unusable. [IBM](https://en.wikipedia.org/wiki/IBM) figured this out in the 80's, it's sometimes referred to as [the Doherty Threshold](https://jlelliotton.blogspot.co.uk/p/the-economic-value-of-rapid-response.html).

If you don't replicate all these behaviours, it won't just be disorienting. It will make navigating your site impossible. And depending on which sector you work in, this could actually make your site illegal.

So, if you have to do so much extra work to make your one-page-application behave like a regular one. Why not make a regular one in the first place? Do people really want fancy transitions rather than a solid and performant experience?

People do amazing things. I don't doubt for one minute that a good accessible one-page-application is possible. But I've not seen one yet.
 