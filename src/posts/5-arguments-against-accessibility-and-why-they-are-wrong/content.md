---
title: 5 arguments against accessibility and why they are wrong
permalink: '/blog/{{title|slugify}}/'
meta:
  description: >-
    5 arguments against common reasons people use to try to get out of doing
    accessibility work.
  image:
    href: /images/share-image-1.webp
    alt: Craig Abbott talking at a conference.
date: 2021-06-03
tags:
  - accessibility
excerpt: |
  In my role, I deal with many different teams and organisations. I also get involved in a bunch of other things on the side, just because accessibility is so misunderstood. One thing which has become quite apparent is that there are some common misconceptions regardless of which team, department or arms-length body you talk to.
---

# {{title}}

In my role, I deal with many different teams and organisations. I also get involved in a bunch of other things on the side, just because accessibility is so misunderstood. One thing which has become quite apparent is that there are some common misconceptions regardless of which team, department or arms-length body you talk to.

I've pulled out 5 of the most common arguments I hear for why people think they should be exempt from doing accessibility work.

The caveat for this post is that although my arguments may sound blunt at times, I don't believe that people deliberately want to exclude others. People are under pressure to deliver things, and suddenly realising that you've not considered a huge part of it can be scary. Having to ask for more budget, more training, more staff and more time can create a lot of anxiety for people.

## 1. It's not citizen facing, only our staff will use it

This is probably the most common argument against making things accessible. For some reason, there is a misconception that only things which the public use need to be accessible. I'm not sure why so many people think this is true, and even if it were, I'm surprised by how many people think that would be acceptable. 

[The Public Sector Bodies Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/made) does not make any references to scope regarding internal or public facing products. If it's using web-technologies like HTTP protocols or running in a browser, then it's a website and it needs to comply. You can call it a digital service, a tool, a system, a portal or any other quirky name you like, but under the regulations it will be considered a website and treated like one.

There is a weird thought process by a lot of people, that, if a person is being paid to use a product, and everyone else can use it without issues, then it doesn't really matter if it doesn't work for them. They are 1 person, they're being paid regardless, and therefore they don't really matter.

But whether you discriminate against 1 person, or 100 people, discrimination is still discrimination. Just because it's a small number of people, it doesn't make it any better. It's still forbidden under the [Equality Act 2010](https://www.legislation.gov.uk/ukpga/2010/15/contents) and the [Public Sector Equality Duty 2011](https://www.gov.uk/government/publications/public-sector-equality-duty). 

Regardless of the law, from a moral standpoint, it's still 1 person that may not be able to do their job effectively. 1 person who does not have equal opportunities to thrive.1 person that will likely have their responsibilities removed. 1 person who will likley get moved onto other teams time and time again or have to have their work checked by other people. Whichever way you try to dress it up, it's still 1 person who is being actively discriminated against for being different; and having their self-esteem eroded in the process.

Look at it this way. Imagine your job is to drive a bus. There's a fleet of 10 busses, and a team of 10 drivers. The bus you've been assigned does not have a steering wheel. However, the expectations for you to do your job, hit your targets and perform like everyone else is still there. But you're only 1 person, so your needs probably don't matter, right?

## 2. We don't have any users who use assistive technology

'Seeing the big picture' is a common Civil Service skill people are assessed against at interview. But when it comes to accessibility, very few people are able to step back and see those people on the edges.

The very definition of marginalised people is that they sit in the margins. They're people who never get the focus or the attention because they don't make up enough of the user-base or they don't create enough returns on the investment. They're either not seen at all or only seen in the peripheral vision of those designing and building anything.

By only looking at the existing users of a product, you will only ever design for the users you already have. You will never have equal representation, because the underrepresented people are never able to come into an environment which meets their needs. 

What about those people waiting in the margins? What about the people that hate the job they're doing but it's the only system in the organisation which works for them.? What about the people who want a fresh challenge in a new team? What about the people who want to change roles entirely? What about the people that want to move up the ladder and develop their skills?

By only catering to the users you already have, you leave the marginalised people in the margins and you will create an environment where opportunities are only available to people who fit a certain description. It becomes a self-fulfilling prophecy, where uniformity is celebrated rather than diversity. If you exclude people because you can't see them, you'll never see them because they will always be excluded.

## 3. The supplier plans to make it accessible at some point

This misconception seems to stem from a misunderstanding of what the regulations apply to. The regulations do not apply to the product, they apply to the organisation. 

Sure, the product gets assessed against a standard, which at the time of writing this is the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/). But the legislation which enforces it is called the Public Sector Bodies Accessibility Regulations. The clue of who is responsible for meeting the regulations is kind of in the name.

Because the responsibility for the product being accessible falls solely on the Public Sector Body who intends to use it, they need to make sure that it is accessible *before* they use it.

If a private organisation makes an inaccessible product, at this moment in time, unfortunately that is not illegal. They can sell it, give it away for free or allow other companies to procure it without ever being enforced to make it accessible.

However, when a Public Sector Body decides they want to use that product, then it needs to be accessible. This means that the Public Sector Body either needs to procure the product and modify it themselves to meet the standards, or they need to negotiate that the private organisation does the work for them, and usually compensate them for doing so. Either way, in order for that Public Sector Body to use that software lawfully, it needs to meet the standards. If it does not, it's the Public Sector Body who breaks the law. Not the private organisation.

## 4. Accessibility isn't a priority right now, we're working on other features first

One of our [accessibility principles](https://accessibility-manual.dwp.gov.uk/community/accessibility-principles) is 'if it's not accessible, it's not done'. For some reason, a lot of people seem to measure their successes in delivery by quantity over quality.

If you deliver something which is inaccessible, this creates several problems. If you're in a [public beta](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works) or [live phase](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works), you've likely broken the law, and regardless of what phase you're in, you've created a bunch of technical debt you're just going to have to unpick later.

The trouble with accessibility is that when you find a problem, you often have to re-write the code which drives your user interface. If you find a problem with a single page or a single component at the time you are building it, fixing it isn't a huge amount of work.

However, if you build 10 pages and then try to do all of the testing and fixing of those at once, it suddenly seems like a huge task. Similarly, if you find a problem with a component once you've delivered 10 features and you've used that same component in multiple places, you now not only need to fix the problem, but also re-test everything you've already delivered to make sure the problem isn't repeated in other parts of the application.

It's for this reason that accessibility is often seen as a bottleneck. Like any kind of testing, it's part of a pipeline, and the pipe only has a limited capacity depending on how much you try to push through it. Doing that accessibility work as you go is always going to be better than trying to squeeze an entire application or feature through 2 days before your release date.

Releasing features which are not accessible means they are simply not done. Accessibility should always be a priority because even a Minimum Viable Product (MVP) is not viable if it doesn't work for the people that have to use it.

## 5. Accessibility wasn't part of the original cost, so we need to claim disproportionate burden

The disproportionate burden clause is arguably the biggest gripe I have with the Public Sector Bodies Accessibility Regulations. My gripe is not that it exists, but that it is just casually lumped in with the rest of the important stuff, and once people read it, they lock onto that and ignore everything else. People always look for the path of least resistance.

In a nut-shell, disproportionate burden is a clause which says you may not have to make your product accessible if you can prove that the burden on your organisation to do so would be significant. 

To be clear, if you're a central government department, you get millions of pounds of funding and you have thousands of employees, disproportionate burden is unlikely to ever apply to you. Disproportionate burden is for small Public Sector organisations, where the cost of a single accessibility audit might wipe out a large percentage of their budget for an entire year.

You cannot use disproportionate burden as a get out clause because you have not asked for enough budget, you have not prioritised your budget allocation properly, and you have not considered accessibility for whatever reason. 

You can only use disproportionate burden as a get out clause once you have conducted a thorough impact assessment taking into account resources, funding, impact on your users etc. You should also get sign-off from your legal department to make sure that the burden is truly disproportionate under the definition outlined in the regulations.

A disproportionate burden assessment also needs to be reviewed annually. So even after you do all that work and get legal sign off, you will still be expected to request more budget and resources to do all of the work in the next financial year. A disproportionate burden assessment does not cover the product for its entire life-cycle.

If you want to know more on why it is unlikely to ever be a good strategy in the long run, you should read this great [article on disproportionate burden](https://www.lexdis.org.uk/digital-accessibility/digital-accessibility-regulations/disproportionate-burden/disproportionate-burden-thoughts/) by [George Rhodes](https://twitter.com/Access_Rhodes).