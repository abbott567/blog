---

title: Some thoughts on primary buttons
permalink: '/blog/{{title|slugify}}/'
meta:
  description: >-
    Interactions should be obvious. Primary buttons get overused in UX.
  image:
    href: /images/share-image-1.jpg
    alt: Craig Abbott talking at a conference.
date: 2017-07-26
dateModified: 2017-07-26
tags:
  - design
  - html
excerpt: |
  I've recently been ranting a lot about primary buttons. But people often don't understand what they are.

  In my early days as a designer, I thought it just meant adding `class="btn-primary"` to my markup to make it pretty and blue, and this is a common mistake.

  A lot of people make this mistake and litter the Internet with bad design which is confusing for the people that have to use it. Some of my early contributions are still out there causing a nuisance. Sorry.
---

# {{title}}

I've recently been ranting a lot about primary buttons. But people often don't understand what they are.

In my early days as a designer, I thought it just meant adding `class="btn-primary"` to my markup to make it pretty and blue, and this is a common mistake.

A primary button is the action that the user most likely going to be looking for. For example, if I'm filling in a contact form, the primary action should be to submit it.

Having more than 1 primary buttons on a page creates noise, and is more likely to slow me down or cause me to make mistakes.

If there is a need for multiple buttons, decide which one is the primary and style the other ones differently. For example, having multiple grey buttons and one green button gives more weight to what might be the primary and secondary actions.

Sometimes, thinking about the content a little harder will make the design much easier to use.

## Buttons vs. links, what's the difference?

In the land of user centred design, buttons and links are not interchangeable. 

A lot of people make this mistake and litter the Internet with bad design which is confusing for the people that have to use it. Some of my early contributions are still out there causing a nuisance. Sorry.

Buttons should trigger actions. They should interact with data. If you're submitting a form or deleting a comment, then a button is what to use. This is because you are taking data and doing something with it. Sending it, deleting it or saving it.

Links are a means of navigating between pages. You may navigate to a form using a link, then submit it using a button.

If you're styling links to look like buttons, you're perhaps making a mistake. But, if you're absolutely sure its not a mistake, at the very least make sure you change the role so that it remains accessible for users of assistive technology.

For example:

``` html
<a class="btn" role="button">Subscribe to our mailing list</a>
``` 

By changing the role, it means if somebody using a voice controller says 'click button', it will still work.

As always, I'm happy to talk about this more if you're interested.