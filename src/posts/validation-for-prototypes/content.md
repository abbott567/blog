---
title: Validation for prototypes
date: 2018-02-15
dateModified: 2018-02-15
tags:
  - design
meta:
  description: >-
    Why I stopped advocating for validation in prototypes.
eleventyComputed:
  permalink: '/blog/{{title|slugify}}/'
  imgPath: '/posts/{{title|slugify}}/images'
  meta:
    image:
      name: 'share-image'
      extension: 'jpg'
      href: '{{imgPath}}/{{meta.image.name}}.{{meta.image.extension}}'
      alt: "A laptop on a desk surrounded by clutter. On the screen is a GOVUK service showing a validation error, which is a red box at the top of the page."
  excerpt: |
    I made a jQuery plugin a couple of years back. It picked up a data attribute called `data-required`. It also picked up an error message you passed into `data-error`. Then, it checked if the input was blank or unchecked. If it was, it would append the error messages and prevent the user from submitting the form.

    The thing is, I thought I built the plugin off the back of a user need, and I was happy when people praised my work. But in reality, I think I missed the point. As did everybody that used it.
---

# {{title}}

On our Slack channel, validation comes up a lot. Designers often aren't sure how to make the prototyping kit handle validation. Is it client-side? Is it server-side? How do I edit my routes file?

I made a jQuery plugin a couple of years back. It picked up a data attribute called `data-required`. It also picked up an error message you passed into `data-error`. Then, it checked if the input was blank or unchecked. If it was, it would append the error messages and prevent the user from submitting the form.

The plugin went down well. At least, it did, until the GOVUK frontend styles got updated. Since then, a dozen or so people have tried to use the plugin but found it doesn't work any more. It's been sat in my to-do list for the best part of a year.

## What are we actually testing?

The thing is, I thought I built the plugin off the back of a user need, and I was happy when people praised my work. But in reality, I think I missed the point. As did everybody that used it.

See, the plugin will throw an error if you don't fill in a text field or don't select a radio button. But what are you actually testing here? The whole point of a prototype is to go hand in hand with a given scenario so that you can learn something from it. It's an experiment, under particular conditions, from which you can draw a conclusion.

When we test validation, we're testing if users understand what went wrong. Whether the content in the error messages makes sense. To see whether users can fix the problem and progress.

Leaving something blank is often so obvious we learn nothing from it at all.

## What should we be testing?

When we test validation, we wan't to be focussing on the difficult things. The nuances in the policy or process that might make the service behave in a way that the user isn't anticipating.

For example:
- is a sort-code and an account number an impossible combination?
- does the date of birth make a claimant too old for a particular benefit?

For these scenarios, it's often easier to force the user to see the error, whether it was their fault or not. The easiest way to do this is to duplicate the page and add the errors to the second one. Hard code them into the HTML. No matter what I do on the first page, I'm always going to hit the second one.

You can pull the information they entered into the first form, and use it to pre-populate the second. You can then their input on the field that you're testing so the error doesn't look out of place.

For example, on the first page they entered an 8 digit account number. But on the second page you play it back 7 digits long.

Now, when you throw the error explaining it must be a valid account number, you can see if they understand how to fix it. It's no longer a binary blank or not blank, you're actually testing if its valid!

One caveat is; if you get a particularly thorough or suspicious user, they'll likely know they didn't make a mistake. Also, some users can get anxious if they get things wrong. So make sure you always come clean and re-assure the user once the session is over.

## Overcomplicating prototypes

We often over complicate prototypes. I've been guilty of this in the past. Sometimes they end up so full of logic they are simply bad production builds.

Most of the time putting a blanket catch all on empty fields does nothing but block you from doing demos quickly. You don't learn anything from it.

We need to remember to build just enough of a prototype to learn about the user needs for a given scenario.

Keep them simple. Keep them clean. Keep them disposable.














