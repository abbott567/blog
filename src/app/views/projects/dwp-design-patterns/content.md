## Overview

This work on Design Patterns at the Department for Work and Pensions predates the [DWP Design System](https://design-system.dwp.gov.uk) and [GOV.UK Design System](https://design-system.service.gov.uk).

The work was done in the open, in collaboration with a lot of the awesome people working on those systems.

## Situation

Across DWP Digital, a lot of people were designing similar solutions to solve identical issues. We were starting to re-design internal systems and there were no proven design patterns or re-usable components.

For example. We had a simple user story such as:
> **As a** member of staff who processes benefits, 
> **I want to** be confident I'm looking at the right claim, 
> **So that** my advice is accurate and any amendments I make are correct.

Designers would go through the process, and inevitably design a solution which worked. But, like the [Tenrec of Madagascar](https://blog.rsb.org.uk/species-of-the-week-tenrecs), the evolution of the design was done in isolation and just happened to be *very* similar to other designs which worked.

![example of banners](/images/work/design-patterns-key-details.webp)

### Design maturity was a problem

There was no [DWP Design System](https://design-system.dwp.gov.uk) or [GOV.UK Design System](https://design-system.service.gov.uk) at the time. The terminology was not as widespread as it is now, so designers often struggled to understand the difference between a pattern and a component.

[GOV.UK Elements](https://govuk-elements.herokuapp.com) *did* exist. But it was just a collection of HTML Elements, not consumable components or patterns. There were no patterns listed anywhere at the time for internal systems.

![A screenshot of the landing page of GOV.UK Elements.](/images/work/design-patterns-govuk-elements.webp)


## Task

Consolidate existing designs and prevent design silos forming again in future. 

Build a library of re-usable design elements that help designers working on internal systems in DWP.

Build a strong community where designers are open to showing their work regularly and collaborating with others.

## Action

It started by getting *willing* people together and having discussions. 

We needed designers to work together in a unified way, but we quickly realised the language around patterns and components was confusing, which is why many designers were reluctant to get involved.

We changed the language (temporarily) around patterns and components, and just started calling them 'Design Examples'. It didn't really matter whether it was labelled as a pattern or a component. That was a technical detail for later. 

What mattered was that designers understood the design intent and could re-use it easily. When I started calling them 'Design Examples meet-ups' attendance jumped by 340%.

![A group of 10 designers sat around a table waving at the camera.](/images/work/design-patterns-workshop-1.webp)

### Workshops

Once we had the numbers, we started to run workshops with up to 50 designers at a time.

We'd consolidate ideas, grouping similar designs to discuss how the research had informed each one.

![A group of about 50 designers around tables working on design problems. There is a large projected screen which reads DWP Design Patterns Meet.](/images/work/design-patterns-workshop-2.webp)

![A group of about 50 designers around tables working on design problems. It's another angle of the image above.](/images/work/design-patterns-workshop-3.webp)

![A collection of printed screenshots showing similar search components. There's hand written sticky notes all over the designs and they're grouped together into themes.](/images/work/design-patterns-workshop-4.webp)

### Tracking progress

The design examples were tracked and matured in GitHub. The project has unfortunately been archived and is no longer public.

We tracked designs as issues with tags and once they were proven to work in several services, we would progress them in maturity.

*The backlog* was stuff we knew we needed to look at but hadn't got around to workshopping yet. 

*Experimental* was similar to the Alpha phase. These patterns had been workshopped but they weren't being used enough yet to know if they were working as expected. They were likely to change fairly regularly as we learned how they behaved in practice.

*Tried and tested* was similar to the Beta phase. These patters were being used in multiple services and working well. We were confident in them, but they still might have had minor changes made to them as we learned more.

*Recommended* was similar to the Live phase. These patterns had been used in multiple services without issue and had reached a state of maturity where they were very rarely being iterated.

![A GitHub projects KanBan board. It shows 4 columns labelled: backlog, experimental, tried and tested, and recommended. In each column there are design patterns being worked on such as Key Details Bar, Timeline, Tabs, Tags and Navigation Menu.](/images/work/design-patterns-github.webp)

### Documentation

We documented each example with typical content on:
- When to use a design
- When not to use a design
- HTML
- CSS
- SASS
- JavaScript

![A screenshot of the DWP Design Examples app. It shows the Timeline pattern. There is an example of the design at the top, then a paragraph on how to use and how not to use the component. At the bottom there is a codeblock which shows HTML, CSS and SASS code.](/images/work/design-patterns-documentation-1.webp)

This was 'documentation by designers, for designers'. So, based on user needs, I also included artefacts and additional information such as:
- A Sketch file
- Whether it was citizen or staff facing
- Accessibility testing
- Which services it was being used in
- Links to the discussions informing the design

![A screenshot of the DWP Design Examples app. It shows the Timeline pattern. It shows a download link for a Sketch file and it states: it is for Agent facing services. It has been tested on JAWS, Dragon, ZoomText and Read & Write. It is being used on Manage Bereavement Support Payment, Access To Work, Prepare for Universal Credit and Support for Mortgage Interest. At the very bottom is a link to the GitHub discussion.](/images/work/design-patterns-documentation-2.webp)

## Result

Services automatically felt familiar and intuitive.

Users were confident they knew how a design worked, even on a new service, because they had seen the design before.

### Contributing to the wider community

I'd regularly feed back our work at the X-Gov Design Meet-ups and to GDS.

A lot of what we did helped to inform some of the early work in the GOV.UK Design System.

![Craig Abbott presenting DWP Design Examples at GDS in the Whitechapel Building.](/images/work/design-patterns-craig-at-gds.webp)

### Aligning with the rest of Gov

When GDS published similar components we'd review ours to see if they could be retired.

![A Slack conversation between Craig Abbott and Steve Borthwick discussing that GDS had released a Tabs component so we should look at retiring the DWP Tabs component once the feature set is the same.](/images/work/design-patterns-slack.webp)

### DWP Design System

The Design Examples work proved we needed a Design System of our own. DWP now has a dedicated team. But a lot of what we did has been consumed by both the [DWP Design System](https://design-system.dwp.gov.uk) and the [GOV.UK Design System](https://design-system.service.gov.uk).

