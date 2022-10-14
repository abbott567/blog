# Hear no, see no, techno

Last week I attended [Camp Digital](http://www.wearesigma.com/campdigital/2017/), in the beautiful Town Hall of Manchester. It was your usual digital conference. Your usual crowd. But, today I saw a talk that has changed the way I think about websites and service design forever.

We all know websites have to be responsive. They have to be malleable so that they look crisp and well laid out on all devices. We know the font size needs to increase for mobile devices. That columns should stack when the viewport becomes narrow. We have this all figured out. But we assume people are using the devices we use and seeing the site the way that we see it.

‘Hear no, see no, techno‘, was an inspiring talk by the incredible [Molly Watt](http://www.mollywatt.com/). She spoke about how technology allows blind and deaf people to interact with the world and the web. Molly was born with [Usher Syndrome](https://en.wikipedia.org/wiki/Usher_syndrome), leaving her deaf. If this was not challenging enough, she then became almost completely blind due to [retinitis-pigmentosa](https://en.wikipedia.org/wiki/Retinitis_pigmentosa). But here she stood, strong and independent. She delivered an amazing talk, interacting with the audience through the use of digital hearing aids.

Molly began to talk about things that are often not on a designers scope. Can you change the contrast of a website? Can you change the colours? Can you change the font size? The answer is probably not; unless it involves opening the stylesheet.

Another issue was something as simple as a twitter widget. Twitter uses ‘infinite scrolling’, which means by the time you reach the bottom, it loads in more tweets. This is fine you are able to click away from the widget and continue your interaction with the site. But what if you’re trying to tab through the content using a keyboard. Every time you tab down a tweet, it loads in another one. Because it is called ‘infinite scrolling’, you could be seven years deep in somebodies twitter feed by the time you get out!

I originally posted this on my old inaccessible WordPress blog. But thanks to Molly I've made some changes. I've moved to NodeJS and added some accessibility features. As designers we often focus too much on making things look pretty. Instead, we should be making them available to everyone.