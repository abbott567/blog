---
eleventyComputed:
  imgPath: '/posts/{{title|slugify}}/images'
  meta:
    description: >-
      What is alt text? Why it matters. And, how to avoid common mistakes.
    image:
      href: '{{imgPath}}/cat.jpg'
      alt: "A close up headshot of a ginger cat wearing mirrored sunglasses. It's in a car, and its sunglasses reflect the dark orange clouds of a sunset."
excerpt: |
  In this post, I just want to talk through what alt text is, why it matters, and how to avoid some common mistakes!

  I know alt text posts are common, but I feel compelled to write it given that it's 2023, and I still see a lot of the same issues I've been seeing for years.
title: How to write good alt text for screen readers
permalink: '/blog/{{title|slugify}}/'
date: 2023-11-02
tags:
  - accessibility
---

# {{title}}
In this post, I just want to talk through what alt text is, why it matters, and how to avoid some common mistakes!

I know alt text posts are common, but I feel compelled to write it given that it's 2023, and I still see a lot of the same issues I've been seeing for years.

## What is alt text
It's probably best to start here. What even is alt text?

It's short for alternative text, and it's basically just a description of an image.

Alt text has two main purposes:

1. Accessibility: alt text provides a text description so that people who cannot see the image can still understand what it depicts.
2. Fail state: if the image fails to load for whatever reason, the text alternative will be displayed on the page, so the context of it is not lost.

Alt text is embedded in the image by default. It's not rendered to the page unless the image fails to load. Unless the developer has specifically done something to show it, or something goes wrong, most sighted users will never realise it is there.

You can see the alt text on any image by right clicking and choosing "inspect" to look at the code, where you *should* see an attribute that looks something like the following example:

```html
<img
  src="cat.jpg"
  alt="A close up headshot of a ginger cat 
  wearing mirrored sunglasses. It's in a 
  car, and its sunglasses reflect the 
  dark orange clouds of a sunset."
/>
```

Of course, I say *'should'*. But there is a strong possibility you won't see it, because people often don't add it, and that's part of the problem we will discuss a bit later on when we cover common mistakes!

## Why alt text matters 
The following image is what I was actually describing in the previous example. My hunch is that you imagined something very similar.

![A close up headshot of a ginger cat wearing mirrored sunglasses. It's in a car, and its sunglasses reflect the dark orange clouds of a sunset.]({{imgPath}}/share-image-cat.webp)

If the alt text was not descriptive enough, or it didn't accurately describe the image, then that entire experience and your ability to imagine this majestic cat wearing sunglasses is broken.

This is the experience screen reader users have when they encounter most images, which is super frustrating.

## Common mistakes
There are several mistakes I usually see with alt text. Lets talk through each one in a bit more detail.

### No alt attribute
This is probably the most common issue I see.

It's where there is not even an attempt to provide a text description. No alt attribute. Nothing.

When you fail to provide an alt attribute, screen readers will still announce there is an image, and will take a punt by usually reading out the file name.

But, we live in a world where images are often automatically converted, optimised, compressed and stored on content delivery networks (CDN), so image filenames are often reduced to an ID or key.

Have a think about how the following example might read out on a screen reader:

```html
<img src=“28462574325865.webp” />
```

### Vague alt text
Looking back at our cat example, where the alt text read:

> A close up headshot of a ginger cat wearing mirrored sunglasses. It's in a car, and its sunglasses reflect the dark orange clouds of a sunset.

Think about what you would have imagined if the alt text just said:

> A cat.

It will likely have altered what you imagined, which may have altered the context entirely.

People often do this just to get validation errors or accessibility tools to shut up. But it's not useful for screen reader users.

### Overly detailed alt text
This is the opposite problem.

Some alt text reads like a novel, describing every single detail in the image. It’s a bit like listening to someone who just can’t get to the point!

Again, think about the cat example. Think about how concise it was to give you the gist, and then compare it to the following text. Decide if the additional words and the length of time it took you to read *really* added anything to your ability to imagine it.

> An artistic portrait shot of a cat. Set against a subdued background which depicts a soft bokeh effect with an interplay of light and shadow. The cat has meticulously detailed medium length fur, which displays varying shades of earthy browns and oranges against a white face mask and pink nose, reminiscent of the classic tabby pattern. What captures immediate attention are the round, reflective sunglasses it adorns. These mirrored glasses encapsulate a scene with a setting sun and thick dark orange clouds. The cat's whiskers appear prominent, adding symmetry of the image. It's sitting in a car, which offers a sense of sophistication by fusing the natural world with elements of human luxury.

### Forgetting the Context
Sometimes people describe the image well, but they forget why they chose that image in the first place. Or, they copy and paste the image along with the alt text, which might have been fine in the previous setting.

But it's not just about describing the image, it's about describing the important things in it which add context to the rest of the surrounding content.

For example, imagine you run a website about dogs. You sell products like collars, and you describe different breeds and their temperaments.

You could use the same image of a dog in two places, but have completely different descriptions, because on one page the focus is on the dog, and on the other page the focus is on the collar.

When describing the image on the page about the breed, you might use something like the following:

> A Rottweiler. A large muscular dog with short black sleek fur and distinctive tan markings on the face, chest, and paws. Its head is strong and broad with a kind face and medium sized ears that flop loosely on either side.

Whereas on the page where you're trying to sell the collar, the exact same image may be described as:

> A bandanna style dog collar, modelled by a Rottweiler. It is loose fitting in a red and black checked pattern. A gold clip at the front holds a red bell.

In the first example, I didn't even mention the collar. Because we're trying to describe the look of the breed I felt like describing the collar was more distracting than helpful.

This is the exact image I was describing:
![A Rottweiler wearing a red bandanna style collar. It's a large muscular dog with short black sleek fur and distinctive tan markings on the face, chest, and paws. Its head is strong and broad with a kind face and medium sized ears that flop loosely on either side.]({{imgPath}}/dog.webp)

### Adding alt text to decorative images
Sometimes, having no alt text is just as important as having descriptive alt text.

In order to make an image decorative, you still *must* provide an alt attribute. But, by leaving it blank, screen readers will no longer announce it.

For example:

```html
<img src="decorative.jpg" alt="" />
```

Images which are *truly* decorative, are things like textures and patterns which may be important for visual branding, but they are there purely for stylistic purposes.

For example, if you're writing alt text like the following, it's probably supposed to be marked as decorative:

> Colourful squiggles and lines.

### Incorrectly marking images as decorative
I often see people marking stock images on articles as decorative, but you have to ask yourself, if it's *really* decorative, why did you choose that exact image to compliment what you were writing about?

I mean, you don't expect to see an article on the financial crisis of 2008 with an accompanying image of a cat wearing sunglasses, right? It would likely be an image of money or something related to banking. So, if the image is in context, it's likely not decorative.

Anywhere an image adds any kind of value for sighted users, then alternative text should be provided.

For example, if you put the following image at the top of your article of the financial crash of 2008, do you think it's decorative? Or, do you think it adds context and perhaps sets the tone for the article?

![A generic stock image of 6 white men wearing suits, gathered around a small table, laughing and pointing at charts.]({{imgPath}}/men-in-suits.webp)

I described this image as:

> A generic stock image of 6 white men wearing suits, gathered around a small table, laughing and pointing at charts.

### Not describing charts or graphs
Charts and graphs are particularly tricky. You can't possibly add all of the data into the alt attribute, nor would you want to.

But, you also can't just write 'chart', because that is equally just as annoying.

There are a few ways you can approach it, and to be honest, I'm not entirely sure there is a definite way to nail this. It can get a bit subjective, and some people will prefer different approaches.

My preferred approach is to use the `<figure>` and `<figcaption>` tags. Unlike the `alt` attribute, figures can be used to provide deeper context, rather than just describing the image.

I then link to the raw data, so that people can dig through it. Because, they may not want my interpretation, they may want to draw their own conclusions.

For example:

```html
<figure>
  <img
    src="chart.jpg"
    alt="A two axis line chart showing a single line on a constant upward trend"
  />
  <figcaption>
    Figure 1: The number of households in the UK which own a dog increased 
    steadily every year from 2001 to 2021. 
  </figcaption>
</figure>
<p>
  Figure 1 was generated using the following data from the Office for 
  National Statistics:
  <a href="https://link-to-data.com">
    Data: households which own a dog in the UK
  </a>
</p>
```

You should not use `<figcaption>` as a direct alternative to the `alt` attribute. They do different things. 

Your alt text should describe the image, and the figure should add to the narrative. For example:

<dl>
  <dt>
    Alt:
  </dt>
  <dd>
    A white man with a short black beard, He is wearing glasses and a black backwards baseball cap. He is typing on a laptop covered with stickers in an open plan office.
  </dd>
  <dt>
    Caption:
  </dt>
  <dd>
    Craig Abbott. Design lead and accessibility specialist.
  </dd>
</dl>

Which would give you the following when rendered:

<figure>
  <img src="{{imgPath}}/craig-abbott.webp" alt="A white man with a short black beard, He is wearing glasses and a black backwards baseball cap. He is typing on a laptop covered with stickers in an open plan office.">
  <figcaption>
    Craig Abbott. Design lead and accessibility specialist.
  </figcaption>
</figure>


### Keywords Stuffing
There's an old SEO (Search Engine Optimisation) trick, where people ram a bunch of keywords into the alt attribute to try and trick Google into ranking their page higher.

But, to a screen reader user, it would be like having a conversation with somebody who suddenly blurts out a bunch of buzz words without warning. It doesn't flow, and it’s not helpful.

For example, imagine you're chatting to a friend, and they respond with:

> Ah, I've not seen Craig for ages. I think the last time I spoke to him was at Accessibility Scotland. Accessibility. A11y. Accessible Design. UX. UX Design. Frontend Development. Frontend. Dev. Conference. Public Speaking.

### Including 'Image of…'
This one isn't a massive issue, it's just annoying.

The screen reader already announces that it's an image. So if you start your alt text with 'an image of...' it's just adding unnecessary noise.

For example, a screen reader may read it out like the following:

> Image. Image of a ginger cat wearing mirrored sunglasses.

## Controversy
99% of the time, alt text is relatively straight forward. If the image adds any kind of context, then you should provide it.

There are some people who advocate for hiding all images. Literally marking every image as decorative and describing them in the body of the page.

The argument *for* this is that the alt text is often useful for non-screen reader uses too. Especially if it's a complicated image. So by hiding the images and forcing you to describe it in the body content, then it's accessible to everybody.

The argument *against* this is that screen reader users sometimes like to know there is an image there so that they can imagine the page layout and get a similar experience to sighted users. I've seen some people who like to hop around the images on a screen, which of course you can't do if they're all hidden.

Some people argue it improves the 'user experience' for screen reader users, but what about the human experience? If we start hiding everything and replacing everything with paragraphs of text just because it's easier to develop, the web will become very flat and very boring for a lot of people.

For me, personally, I think our job is to make the content that is there accessible for everybody. We use the correct tags, then we supplement them with attributes and additional context where needed, and we try to make the experience as equal as possible for everybody.

Thanks,    
Craig