## Overview

The [DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk) is one of the projects I'm most proud of. It is a collection of accessibility guidance and best practice all in one place.

I've contributed countless hours, pushed over 60,000 lines of code, written pages and pages of guidance, but I want it to be owned by the community. So, it's completely open source. [View the DWP Accessibility Manual on GitHub](https://github.com/dwp/accessibility-manual), contribute to it, and feel free to reuse any of the codebase for your own projects.

The project is based heavily on the [GOV.UK Design System](https://design-system.service.gov.uk/), only it is using a different configuration behind the scenes to make it feel more like the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs). It uses [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) and [Markdown](https://www.markdownguide.org/), so pages and guidance are easy to update and contribute to.

![The homepage of the DWP Accessibility Manual.](/images/work/dwp-accessibility-manual.jpg)

## Situation

People were confused by the accessibility regulations and how they applied specifically to their job role. There was a general misconception that accessibility was 'just the developers job'.

The guidance that existed was either overly complicated or overly simplified, and there was no single place to learn about accessibility. 

There's a lot of guidance on [GOV.UK](https://gov.uk) but it is fragmented and you have to do a lot of work to figure out what you need to do for your job role in particular.

For example
- [Accessibility Requirements for Public Sector websites and apps](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)
- [Service Manual: Making your service accessible](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction)
- [Guidance and tools for digital accessibility](https://www.gov.uk/guidance/guidance-and-tools-for-digital-accessibility)

## Task

Write documentation and guidance which makes it clear what people need to do to build accessible services, and to pull together what other documentation was out there into one place.

## Action

### User Research
I collaborated with a Senior User Researcher to conduct some research with all the different professions across Digital. We gathered insights from Interaction Designers, Content Designers, User Researchers, Business Analysts, Product Managers, Developers etc.

We ended up with a 26 page report which clearly showed that very few roles knew exactly what they were supposed to be doing for accessibility.

It showed that:
- 37% of people lacked guidance, information and training
- 53% of people lacked access to software and tools
- 10% of people struggled to recruit users

![A page of research showing a pie chart with the figures described above. They are: 37% lack guidance information and training. 53% lack software and tools. 10% struggle to recruit users.](/images/work/dwp-accessibility-manual-research.jpg)

### Building an application
I initially started building an application using the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs). But it quickly became bloated and unwieldy. 

Because the Prototype Kit uses vanilla HTML and [Nunjucks](https://mozilla.github.io/nunjucks/), it is also more difficult for people to contribute to.

So, I started again with a fork of the [GOV.UK Design System](https://design-system.service.gov.uk/). This was I was able to utilise all the hard work already done across Government and quickly start to build out an app structured for documentation using Markdown as the primary format.

![The Accessibility Manual open in Visual Studio Code. It shows the content to explain labels or instructions to an Interaction Designer, but it is written in Markdown format.](/images/work/dwp-accessibility-manual-markdown.jpg)

### Guidance for your job role

The most important part was to make sure I wrote very specific examples for each job role, covering all of the common mistakes we often see.

For example, in the [guidance for an Interaction Designer](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/interaction-designer) it covers some of the accessibility pitfalls with things like:
- Dynamic content
- Conditional reveals
- Sensory characteristics
- Hidden content
- Link and buttons
- Use of columns
- Colour contrast

![The guidance for your job role page for an Interaction Designer in the DWP Accessibility Manual.](/images/work/dwp-accessibility-manual-interaction-designer.jpg)


### Best practice

Another core element of the Accessibility Manual is to teach people the most efficient way to build accessibility into their product life cycle.

I wrote guidance on:
- [an overview on how to do accessibility testing](https://accessibility-manual.dwp.gov.uk/best-practice/how-to-do-accessibility-testing)
- [validating your HTML](https://accessibility-manual.dwp.gov.uk/best-practice/validating-html)
- [accessibility testing with browser plugins](https://accessibility-manual.dwp.gov.uk/best-practice/automated-testing-using-browser-plugins)
- [automated testing using axe-core and PA11Y](https://accessibility-manual.dwp.gov.uk/best-practice/automated-testing-using-axe-core-and-pa11y).
- [screen reader testing](https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing)
- [voice controller testing](https://accessibility-manual.dwp.gov.uk/best-practice/voice-controller-testing)
- [screen magnifier testing](https://accessibility-manual.dwp.gov.uk/best-practice/screen-magnifier-testing)

![The best practice section in the accessibility manual. It shows the screen for how to do accessibility testing.](/images/work/dwp-accessibility-manual-how-to-test.jpg)


### Humanising accessibility

A lot of the problems with the culture around accessibility is that people see it as a technical problem rather than a user-centred one. 

To combat this, we pulled together the most common issues we find when testing services and cross referenced this with the figures released by the Central Digital and Data Office (CDDO). 

We wrote checks for each of the most common issues and grouped them into a list of [10 basic accessibility checks](https://accessibility-manual.dwp.gov.uk/tools-and-resources/basic-accessibility-checks) you need to do. We then wrote personas to humanise why these accessibility problems cause issues for people. The personas are anonymous, but they're based on real observations from user research sessions. For example, Charlie has Retinitis Pigmentosa and struggles when he cannot use a website in a portrait view. You can read [Charlies accessibility persona in the DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/tools-and-resources/basic-accessibility-checks/2-responsive-design-impact-on-users#vertical-orientation).

## Result

The DWP Accessibility Manual has been a huge success. It is used regular by designers all over Government and in the Private Sector.

I've since collaborated with GDS to make sure all the guidance is aligned, and they now feature it in:
- [GOV.UK Service Manual](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction#further-reading)
- [GOV.UK Guidance](https://www.gov.uk/guidance/guidance-and-tools-for-digital-accessibility#working-in-a-team-making-accessibility-changes)
- [GOV.UK Accessibility Blog](https://accessibility.blog.gov.uk/2021/05/27/why-weve-created-an-accessibility-manual-and-how-you-can-help-shape-it/)