---
title: What is it like to use a screen reader on an inaccessible website?
date: 2018-03-15
dateModified: 2018-03-15
tags:
  - accessibility
meta:
  description: >-
    Behind the scenes, understanding how screen readers work.
eleventyComputed:
  permalink: '/blog/{{title|slugify}}/'
  imgPath: '/images'
  meta:
    image:
      name: 'share-image-1'
      extension: 'jpg'
      href: '{{imgPath}}/{{meta.image.name}}.{{meta.image.extension}}'
      alt: Craig Abbott talking at a conference.
  excerpt: |
    Screen readers are amazing things. But they can be difficult learn and use.

    When we see with our eyes, we see in 3 dimensions. We can look up, down, left and right, and we can look a things close to us or in the distance.

    Almost all websites are 2 dimensional. You can position content top to bottom and left to right.

    A screen reader really can only view a website in 1 dimension. It's features are linear. It removes all of the visual positioning, lines all of the content up, then it navigates through it from start to finish. 
---

# {{title}}

Screen readers are amazing things. But they can be difficult learn and use.

When we see with our eyes, we see in 3 dimensions. We can look up, down, left and right, and we can look a things close to us or in the distance.

Almost all websites are 2 dimensional. You can position content top to bottom and left to right.

A screen reader really can only view a website in 1 dimension. It's features are linear. It removes all of the visual positioning, lines all of the content up, then it navigates through it from start to finish. 

You can think of screen reader content as single track, you can move forwards and backwards, but the only context is now what comes before your position, and what comes after.

If the page is coded up properly, there will be landmarks. This allows you jump ahead on the track to the parts you want, but it's still linear. There is no concept of left and right.

Another consideration with a screen reader is that the content is broken down into granular pieces and then each piece is viewed in isolation. The screen reader largely works by focusing on parts of the page and describing them to the user.

For visual users, different sections of the page can be dynamic, constantly changing or updating. If we think of something like a dashboard, a visual user can get a lot of information at once by scanning in 2 dimensions. But for screen reader users, they have to interrogate each section.

You can do dynamically updating content using attributes such as `aria-live`, and screen readers will do their best to read it out, but it can quickly get verbose if things are updating all the time!

## Analogies

I like analogies, so lets try and outline some screen reader issues in a way which might feel more relatable.

Imagine you're in a dark and unfamiliar place. All you have is a torch, or flash-light, and it has a very tight beam.

Where you could usually scan the area and orientate yourself quickly, you now have to do it more systematically. Carefully inspecting each thing which gets illuminated, working out if it's important, and building up a mental picture of where you are.

Now, lets imagine some dynamic content. Whilst you're scanning the room with the torch, there's a whole bunch of people moving the furniture around in the dark when your focus is on something else. 

It's impossible to orientate yourself because you can't see things moving. So you need to keep going over everything time-and-time again. At some point you're probably going to walk into something!

An `aria-live` attribute is the equivalent of somebody shouting at you from the darkness to tell you what they're doing, even if you don't currently have the torch on them to see what it is. Depending on how descriptive they are depends on how useful it is.

For example, if they shout 'Hey! I'm moving one of the chairs!' That's not super useful if there are 12 chairs. But if they shout 'Hey! I'm moving the chair right behind you, don't sit down!' that's probably more useful!

## Describing things

### Images

We said before that a screen reader's job is to describe the to the user. If you've ever played [Articulate!](https://en.wikipedia.org/wiki/Articulate!) or [Pictionary](https://en.wikipedia.org/wiki/Pictionary), you've probably experienced the frustration of somebody getting confused when you think the answer is obvious!

For screen reader users, a lot of interactions on websites are basically a big game of Articulate! The screen reader describes a thing, and they have to work out what it is or what to do with it.

For images, they all need alternative text. You can do this using the `alt` attribute. When writing alt text, try to imagine you're on the phone trying to describe what you can see to somebody else, and include things which are important for context.

I'm going to give you 3 examples of me describing the same image. I won't show you it, but you can build up a mental image and decide which description is the best one:

1. A cat.
2. A tabby cat.
3. A short haired tabby cat wearing mirrored sunglasses. 

### Icons

Icons still require alternative text. But people often fall into the trap of explaining the icon rather than what it represents.

For example, the [GOV.UK warning text component](https://design-system.service.gov.uk/components/warning-text/) uses an exclamation mark to draw your attention to the fact that the paragraph is a warning. 

However, the alt text does not describe the icon verbatim, it describes what it represents. It's not important that the user knows it's an exclamation mark, it's important they know there is a warning and they must pay attention to it.

For example:
```html
<img src="exclamation-mark-icon.webp" alt="Warning!">
```

Always try to think about the intent. What is the purpose of the icon? Is describing what it looks like important for the context, or is describing what it represents the important information?

### Interactive elements

You need to do the same with interactive elements, like links. If you don't describe them well, the screen reader user gets stuck. 

Common issues with this are where people use the text 'read more' or 'click here' without any additional context.

Again, going back to our unfamiliar place analogy, if you're stood in a hallway, and all the doors are labelled, you can find your way around. If all of the doors look the same, it just becomes a frustrating game of trial and error where you get lost a bunch of times until, if you're lucky, you find the right door.

## Try harder

Whenever you use an image or an icon, or create a link, just spend a few moments thinking, 'if i read out this alt text, or this link text over a phone, would the other person understand it?'

It sounds silly and obvious, but after a while it will improve the accessibility of your work.

Finally, remember not to describe the page in a way which relies on sight. Don't use content like 'click the red button' or the 'use menu on the left', because this has no meaning to somebody who can't see, or a screen reader which has no concept of left and right.

