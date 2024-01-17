---

title: Semantics and accessibility
permalink: '/blog/{{title|slugify}}/'
meta:
  description: >-
    Why semantics matters for accessibility, and how we get it wrong.
  image:
    href: /images/share-image-1.jpg
    alt: Craig Abbott talking at a conference.
date: 2017-10-10
dateModified: 2017-10-10
tags:
  - accessibility
  - design
  - html
excerpt: |
  As designers, we always like to put our stamp on things. We like to make things fancy and show off our full range of talents. Then when it comes to coding them up, we abuse our design!

  We float things right. We use absolute positioning. We style links to look like buttons. We use fancy hover states and chuck in break tags in to create whitespace.

  Then, we marvel at how pretty our designs look. After all, as long as it looks good, that's all that matters. Right?

  Well, not exactly.
---

# {{title}}

I used to think semantic HTML was only about getting that little W3C badge on your website. I thought it was bragging rights.

In the past, I've been guilty of using `<div>` elements for pretty much everything.

I've also been guilty of changing a `<h1>` element to a `<h2>` element because I needed it to look smaller. 

As designers, we always like to put our stamp on things. We like to make things fancy and show off our full range of talents. Then when it comes to coding them up, we abuse our design!

We float things right. We use absolute positioning. We style links to look like buttons. We use fancy hover states and chuck in break tags in to create whitespace.

Then, we marvel at how pretty our designs look. After all, as long as it looks good, that's all that matters. Right?

Well, not exactly.

## Why semantics is important 

By making things pretty first and correct second, we make a major mistake. We assume that everybody navigates the web the same way. With a mouse. With no colour correction. With 20/20 vision. But, this couldn't be further from the truth.

There's a common misconception that people using assistive technologies are an edge case. That they fall into that 1% with those that disable Javascript. But that isn't true.

In my last [blog post: 'Accessibility is not an edge case'](http://www.craigabbott.co.uk/accessibility-is-not-an-edge-case) I did some research. I found in the UK alone, the current statistics indicate that around 9.3 million people living with a disability use the internet regularly.

A lot of people think accessibility is all about using [WAI-ARIA](https://www.w3.org/WAI/intro/aria). But, when it comes to your markup, using the correct syntax gets you a lot of accessibility for free. Having the correct tags. The correct heading levels and the correct hierarchy on the page will give you a huge head start.

As [Phil Sherry](https://twitter.com/nonswearyphil) says, don't code for 'mobile first', code for 'screen-reader first'. Removing all the CSS and JavaScript should leave something that is still coherent. Then add all the fancy stuff after.

We should be designing accessible websites because it's the right thing to do. But even as a business case, there's a potential 9.3 million people that can't use your service or buy your products.







