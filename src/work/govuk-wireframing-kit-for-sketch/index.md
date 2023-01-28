---
layout: layouts/base.njk
title: GOVUK Wireframing Kit for Sketch
meta:
  description: >-
    Work by Craig Abbott: GOVUK Wireframing Kit for Sketch
  image:
    href: /images/work/wireframing-kit-full.webp
    alt: The homepage of the DWP Accessibility Manual.
excerpt: >-
  The GOV.UK Wireframing Kit for Sketch. It shows a series of mock up screens which look like GOV.UK services.
tags:
  - design
---

# {{title}}

## Overview

The [GOV.UK Wireframing Kit for Sketch](https://github.com/dwp/sketch_wireframing_kit) is a no-code design solution I created for designers in Government. 

It is a library of GOV.UK styles, patterns and components you can download from the [community resources in the GOV.UK Design System](https://design-system.service.gov.uk/community/resources-and-tools/#create-prototypes-and-wireframes) so you can quickly design wireframes and prototypes for Government digital services without needing to know HTML, CSS or JavaScript.

Until version 5.0 the kit was solely my work. It is now maintained by the cross Gov design community.

## Situation

The [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs) is awesome, but it has a steep learning curve due to it being JavaScript based wrapped in a [NodeJS](https://nodejs.org/en/) application. 

So, before designers can do anything they usually need to install it by writing commands into their terminal, along with other dev-heavy applications like [Homebrew](https://brew.sh/), [NPM (Node Package Manager)](https://www.npmjs.com/package/node-sass) and [node-sass](https://www.npmjs.com/package/node-sass).

Nothing stifles creativity quite like a broken Node environment. So, for designers who have limited coding skills, the Prototype Kit is often an over engineered solution. 

Designers often spend more time trying to fix their code than actually designing anything.

## Task

There was a need for something less intimidating for designers which would allow them to spend more time designing than fighting with code.

I wanted to create a simpler way to design screens and prototype ideas. Not to *replace* the Prototype Kit, but to offer a simpler alternative for when you need something less polished.

## Action

I started by mapping [GOV.UK Elements](https://govuk-elements.herokuapp.com/) into [Sketch](https://www.sketch.com/). Once the [GOV.UK Design System](https://design-system.service.gov.uk/) launched, I ported the Wireframing kit. But, until version 3.0 it uses GOV.UK Elements.

I followed the GitHub issues and releases of the [GOV.UK Design System](https://design-system.service.gov.uk/) and [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/).

If they made a change to a style, pattern or component then I would make changes to the Wireframing kit to keep them in sync.

### Version 1.0

Each component was mapped to the same examples featured in GOV.UK Elements so that it felt familiar and could be cross referenced easily.

There were examples for both desktop and mobile screens.

![A screenshot of version 1 of the GOV.UK Wireframing Kit for Sketch. It shows a collection of elements such as inputs and radios. They are scaled for desktop screens.](/images/work/wireframing-kit-v1-desktop.webp)

![Version 1 of the GOV.UK Wireframing Kit for Sketch. It shows a collection of elements such as inputs and radios. They are scaled for mobile screens.](/images/work/wireframing-kit-v1-mobile.webp)

### Version 2.0

In version 2.0, the radio buttons and checkboxes were updated to the larger styles inline with an update to GOV.UK Frontend.

![Version 2 of the GOV.UK Wireframing Kit for Sketch. It shows large radios buttons to match the GOV.UK style.](/images/work/wireframing-kit-v2.webp)

### Version 3.0

In version 3.0 the kit was ported from GOV.UK Elements to the GOV.UK Design System. Elements were mapped to 'styles', 'components' and 'patterns' to again make it familiar and easy to be cross referenced.

![Version 3 of the GOV.UK Wireframing Kit for Sketch. It shows updated categories for styles, components and patterns. The panel component shows the teal background colour which was not updated until GOV.UK Frontend Version 3.0](/images/work/wireframing-kit-v3.webp)

### Version 4.0

In version 4.0 the colour palette and the focus styles were updated to align with an update to GOV.UK Frontend and to meet the Web Content Accessibility Guidelines 2.1.

![Version 4 of the GOV.UK Wireframing Kit for Sketch. It shows an updated panel component with a darker green background colour to align with GOV.UK Frontend Version 3.0](/images/work/wireframing-kit-v4.webp)

## Result

Designers can now hit the ground running and be efficient in their teams within a week or two.

In contrast, we found designers who are new to Government take around 6 to 12 months to be effective with the Prototype Kit.

With a clear need for simpler tools, other designers have ported the Sketch Wireframing kit to other tools:
- [GOV.UK Design System for Figma](https://www.figma.com/community/file/946837271092540314)
- [GOV.UK AdobeXD Wireframing Kit](https://medium.com/hippo-digital/gov-uk-adobexd-wireframing-kit-af5e877343b9)
- [GOV.UK Design System for Balsamiq](https://github.com/enoranidi/govuk-design-system-balsamiq)
