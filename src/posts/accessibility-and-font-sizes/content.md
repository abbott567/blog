---

title: Accessibility and font sizes
permalink: '/blog/{{title|slugify}}/'
meta:
  description: >-
    Using px for font sizes can make your website inaccessible. Stop it!
  image:
    href: /images/share-image-1.jpg
    alt: Craig Abbott talking at a conference.
date: 2022-01-03
dateModified: 2022-01-03
tags:
  - accessibility
excerpt: |
  It's now 2022, and I'm still seeing far too many websites using static pixel sizes for fonts. Even big hitters like Facebook do this.

  Stop it!

  Using the wrong units of measurement in your Cascading Style Sheets (CSS) can be a barrier for many visually impaired users.
---

# {{title}}

It's now 2022, and I'm still seeing far too many websites using static pixel sizes for fonts. Even big hitters like Facebook do this.

Stop it!

Using the wrong units of measurement in your Cascading Style Sheets (CSS) can be a barrier for many visually impaired users.

All modern browsers allow people to override the default font size in the user settings. This is part of the [User Agent Accessibility Guidelines (UAAG)](https://www.w3.org/TR/WAI-USERAGENT/guidelines.html#tech-configure-text-scale). UAAG is similar to WCAG, but it focuses on the tool being used to view the website, rather than the website itself.

You can try it. If you're using chrome and you type `chrome://settings` into the address bar, then search for 'font size', you will see that you can set it to various sizes. However, depending on the websites you're browsing, you might not actually see it work.

The reason it might look like a broken setting on some websites is that the browser gets its initial instructions from the user settings, but it gets the rest of its instructions from the website you're viewing.

The browser will always prioritise the website CSS. If it didn't, all websites would look the same. This means developers have a responsibility to code websites properly. If the website is coded badly, then it will override the useful settings in the browser and make it inaccessible for some users.

## The problem with pixels

Pixels are a static unit of distance. A simplified way of thinking about pixels is that 1px is equal to 1 dot on the screen you're currently using.

Ok, they're not *truly* static like metres or miles. There's a lot of science goes into how big a browser will actually render heights and widths in pixels. But, the important part to think about is that they are calculated based on the physical screen you're using, rather than the settings in your browser.

So, if you set the font size to be 16px in your CSS, it is always going to be rendered out to the same hight on the screen. Think of it as 16 physical dots on the screen, it might slightly more or slightly less depending on the screen you're using, but it's *always* going to draw it out the *same size*, *every time*. 

At the time of writing this, whatever you change your font size to in the browser settings will have no effect on pixel measurements, and that's where the accessibility issues occur.

The browser will literally draw the font to that static size. The same way you would draw a line the same length every time if I told you to draw it 16mm long. It's a static unit of distance.

## Relative font sizes

To allow the fonts and the spacing around it to scale to the user settings, you should use relative units of measurement such as REM, EM or percent.

Percent does exactly what you would expect. It increases or decreases the current font size by a given percentage. So, 200% would be double the current font size. Easy, right?

REM and EM are a bit more ambiguous. You'd think that EM was an acronym or an abbreviation, but it is not. An EM is a unit of measurement which made sense in the old world of physical printing, but when it got ported over into the digital world, it doesn't really make sense any more.

### What is EM?

If you're a bit of a nerd, like me, and you want to know what it means; 1em comes from the width of the capital 'M' in traditional printing.

Font size was determined by the physical size of solid metal cast letter punches. The M was typically the widest letter available in a set, and was therefore useful for measuring line heights and margins. So, if you had a line height of 1em, the gap between lines of text would be the same as the width of the letter M in that font.

I'm not entirely sure why the unit is 'EM' and not just 'M'. I imagine it was just how it happened to be transcribed when somebody eventually decided to write it down. Or maybe it's because 'M' was already being used for metres.

I guess it would really mess your print up if you mistakenly made your font 1 metre high instead of 1em high!

### How does EM work?

EM, like percent, will inherit its size from its parent element. So, the EM integrates quite well in the digital world through the use of cascading styles.

For example, if you wanted a child element to have a font size twice as large as the parent element, you can set the child to 2em.

<div class="important">
  For the purposes of this example, we will set the font size in pixels, just so it is clearer what is going on when we do the math. But, in reality, we'd avoid the use of pixels all together for the reasons I have already mentioned.
</div>

Example of EM font size:
```css
body { font-size: 16px; }
h1 { font-size: 2em; }
p { font-size: 1em; }
```
```html
<body>
  <!-- font size of the body is set to 16px -->
  <h1>At 2em, this heading will be 32px</h1>
  <p>At 1em, this paragraph text will be 16px</p>
</body>
```

The math:
- The heading level 1: `2(em)*16(px)=32(px)`
- The paragraph: `1(em)*16(px)=16(px)`

### The problem with EM and Percent

EM and percent suffer from a problem called compounding. Because they inherit from their parents, compounding happens when font sizes are unexpectedly calculated over multiple nested levels. The font size is recalculated with every nested child element giving you a much larger or smaller font size than originally intended.

For example:
```css
body { font-size: 16px; }
.parent { font-size: 1em; }
.child { font-size: 2em; }
```
```html
<body>
  <!-- font size of the body is set to 16px -->
  <div class="parent">
    This text would be 16px
    <div class="child">
      This text would be 32px, as expected
        <div class="child">
        This text would be 64px, not as expected
          <div class="child">
          This text would be 128px, definitely not as expected
        </div>
      </div>
    </div>
  </div>
</body>
```

The math:
- The parent: `1(em)*16(px)=16(px)`
- The first child: `2(em)*16(px)=32(px)`
- The second child: `2(em)*32(px)=64(px)`
- The third child: `2(em)*64(px)=128(px)`

To get around this problem of compounding, we can use the REM unit.

### What is REM?

Using REMs is the easiest way to make your font sizes scale and still maintain control over your whole design.

REM units are *almost* the same as the EM unit. The key difference is that rather than inheriting their size from their parent elements, they always inherit from the root element. REM literally means 'Root EM', but unlike the old-school EM unit, REMs were invented purely for the digital world, to prevent the compounding issue. 

The way a REM works is by always going to the root element on the page to calculate the font size. The root element is the first element on the page, which is the `<html>` tag, and unless you override it in your CSS, the HTML tag will always try to inherit its default font size from the browsers user settings.

In most modern browsers, the default user setting for font size is 16px. In Chrome and Edge this is labelled 'medium', but there are also settings for 'large' and 'very large'. Large is 20px, and very large is 24px. So, `font-size:1rem` can technically be 16px, 20px or 24px high depending on the user settings in the browser. Whereas `font-size:16px` will always be 16px.

For example:
```css
/* could be 16px, 20px or 24px */
p { font-size: 1rem; }

/* could be 32px, 40px or 48px */
p { font-size: 2rem; } 

/* could be 8px, 10px or 12px */ 
p { font-size: .5rem; }

/* would only ever be 16px */
p { font-size: 16px; } 
```

By using REM, you can nest child elements and the font size no longer has the compounding issue:
```css
.parent { font-size: 1rem; }
.child { font-size: 2rem; }
```
```html
<html>
  <!-- assume the font size is set to 16px in the user settings -->
  <body>
    <div class="parent">
      This text would be 16px
      <div class="child">
        This text would be 32px, as expected
        <div class="child">
          This text would be 32px, as expected
          <div class="child">
            This text would be 32px, as expected
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```
The math: 
- Parent: `1(rem)*16(px)=16(px)`
- First child: `2(rem)*16(px)=32(px)`
- Second child: `2(rem)*16(px)=32(px)`
- Third child: `2(rem)*16(px)=32(px)`

## Conclusion

Don't use pixels for font sizes because it removes important accessibility options people may rely on.

Pixel perfect websites are a fallacy. Websites should be fluid. You can never design a perfect layout for every device in the world, so just design a one which works!

You may do a pixel perfect design for mobile, tablet and desktop, but are you really going to start doing designs for people browsing your website on Smart TV's, Tesla Cars and Smart Watches?

People don't care if the margin is 3px smaller than the designer wanted it to be. People care when they can't read the content because you've locked down the font size or it overlaps when they scale it up.

As a general rule, just use REM for anything which needs to be flexible and may affect readability, such as font size and margins. Use percent for container widths, such as columns. And, only use EM when your design specifically needs the scaling to be relevant to the parent element. Although, I'm yet to find a reason to ever use EM over REM, but maybe one exists. 

Only ever use pixels for stylistic choices which do not need to scale, like borders and horizontal rules. Sometimes you might also want padding in pixels, depending on the design.

For example:
```css
.panel {
  width: 100%;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 10px;
  border: 2px solid #000;
}
```

And, finally. Always, *always*; scale the font size up and make sure your design works before you publish it!
