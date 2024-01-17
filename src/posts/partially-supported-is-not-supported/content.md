---

title: Partially supported is not supported
permalink: '/blog/{{title|slugify}}/'
meta:
  description: >-
    Stop using the phrase 'partially supports' in accessibility.
  image:
    href: /images/share-image-1.jpg
    alt: Craig Abbott talking at a conference.
date: 2022-03-02
dateModified: 2022-03-02
tags:
  - accessibility
excerpt: |
  As you probably know by now, any software which is built or procured by a Public Sector Body must meet the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) to the standard of AA.

  What I'm *really* tired of, is reading conformance reports from third party suppliers who are trying to push their inaccessible products for large sums of money under the guise that it is accessible. 

  These chancers often state that some of the criteria is 'partially supported', 'supported with exceptions' or any number of different ways to carefully word the fact that it does not support a particular accessibility feature.

  And, it's not just one company, they're all doing it.
---

# {{title}}

I usually like to write helpful blog posts. But I'm going to be honest and warn you up-front that this one is definitely a rant!

That's not to say it won't be helpful, but you will have to deal with my tone. I'm exhausted, I'm disappointed, and quite frankly, I'm angry.

## The problem

As you probably know by now, any software which is built or procured by a Public Sector Body must meet the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) to the standard of AA.

What I'm *really* tired of, is reading conformance reports from third party suppliers who are trying to push their inaccessible products for large sums of money under the guise that it is accessible. 

These chancers often state that some of the criteria is 'partially supported', 'supported with exceptions' or any number of different ways to carefully word the fact that it does not support a particular accessibility feature.

And, it's not just one company, they're all doing it.

## Twisting the truth

Lets be clear, WCAG 2.1 AA is a binary standard. You either pass all of the required criteria, or you don't. There are no grey areas. This might change with [WCAG 3.0](https://www.w3.org/TR/wcag-3.0/), but for now, if your product does not pass a certain criterion, your product does not support that feature and it's going to cause issues for people. 

Twisting the truth and being ambiguous confuses teams, who may not be accessibility experts, into potentially pursuing products which simply don't meet the standards.

The following examples are from a real conformance report I recently reviewed. The company says it 'is compliant with WCAG 2.1 AA with a few exceptions.' Personally, I'd say it fails to meet even the fundamentals outlined in WCAG 2.1 level A, given that it doesn't work with a Keyboard.

<dl>
  <dt>
    1.4.4 Resize text
  </dt>
  <dd>
    Supported with exceptions: Some text presentation may not be preserved when resized.
  </dd>

  <dt>
    1.4.10 Reflow
  </dt>
  <dd>
      Supported with exceptions: Some content may not be preserved when reflowed.
  </dd>

  <dt>
    1.4.11 Non-Text Contrast
  </dt>
  <dd>
    Supported with exceptions: Some content may not have 3:1 contrast.
  </dd>

  <dt>
    2.1.1 Keyboard
  </dt>
  <dd>
    Supported with exceptions: Some content does not support full keyboard navigation.
  </dd>

  <dt>
    2.4.3 Focus Order
  </dt>
  <dd>
      Supported with exceptions: Some content does not fully support expected focus order.
  </dd>

  <dt>
      4.1.2 Name, Role, Value
  </dt>
  <dd>
      Supported with exceptions: Some content does not fully support name, role, value.
  </dd>
</dl>

The status and the comments in most cases are a direct contradiction of one another. As the table is not necessarily clear, I'll outline a couple of them so you can see how ridiculous the statements are.

[2.1.1 Keyboard]({wcagify}) states: 'All functionality of the content is operable through a keyboard interface...' The key word here is *'all'*. In the conformance report the company states that it is 'supported with exceptions', and then outlines how there is some content which does not work with a keyboard. If the criteria says all content needs to work, and you state some content does not work, it's a joke to say it's partially supported.

[2.4.3 Focus Order]({wcagify}) states: '...focusable components receive focus in an order that preserves meaning and operability.' In the conformance report the company states that it is 'supported with exceptions', and then outlines how there is some content which is not focused in the correct order. Again, if the focus is in the wrong order, you fail this criterion. You don't partially pass it because one or two things happen to be in the right order.

## Be honest. Be better

The problem with trying to present your product as accessible when it's clearly a lie, is not just that you put the Public Sector Body at risk, but that at the end of every interaction with a product is a person. A person trying to do a job or a task, and it's important that they're able to do that.

WCAG is not a pointless checkbox-exercise. It's not even the holy-grail of accessibility, it's the absolute bare minimum you need to do to make sure your product does not exclude people. 

You likely don't see the effects. You don't see the people robbed of their independence. The people unable to do their job. Unable to get promoted or move teams. 

Stop kidding yourself. If you have 10 buttons on a page, and only 6 of them work using a keyboard, your product doesn't partially support [2.1.1 Keyboard]({wcagify}). Your product is broken! Fix it.

It might seem like a good way to try and rose-tint your product so that people will buy it, but just have some integrity! Be honest about where your product is at, then make robust plans and stern commitments to make it better!

Rant over, for now at least! Thanks for making it to the end.