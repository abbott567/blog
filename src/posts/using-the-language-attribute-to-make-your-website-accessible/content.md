---

title: Using the language attribute to make your website accessible
permalink: '/blog/{{title|slugify}}/'
meta:
  description: >-
    Using the lang attribute to make your page accessible.
  image:
    href: /images/share-image-1.jpg
    alt: Craig Abbott talking at a conference.
date: 2022-02-11
dateModified: 2022-02-11
tags:
  - accessibility
  - design
  - html
  - frontend-dev
excerpt: |
  There's a couple of criteria in the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) that I see catching people out time and time again. [3.1.1 Language of page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html) and [3.1.2 Language of parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html).

  These two criteria are important, because they help screen readers to read out the language correctly. If your page is set to English, but some of your content is not English, then the screen reader is just going to attempt to pronounce it in English anyway, which can lead to some pretty weird results.
---

# {{title}}

There's a couple of criteria in the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) that I see catching people out time and time again. [3.1.1 Language of page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html) and [3.1.2 Language of parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html).

These two criteria are important, because they help screen readers to read out the language correctly. If your page is set to English, but some of your content is not in English, then the screen reader is just going to attempt to pronounce it in English anyway, which can lead to some pretty weird results.

The HTML 'lang' attribute is the way we tell the browser what language the content is written in. Without it, the language is set to 'unknown', so you must always set it, to avoid any unpredictable behaviour.

## Language of page

In most cases, you only ever need to set the language once, right at the top of your page. Any child elements will automatically inherit from their parent, so setting it on the `<html>` element means anything on the page will be set to that language.

In the following example, if we use `lang="en"` on the `<html>` element, this will pass [3.1.1 Language of page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html). The body element will inherit the from the HTML element, and the paragraph element will inherit from the body element.

```html
<html lang="en">
  <body>
    <p>
      The browser will know this text is in English.
    </p>
  </body>
</html>
```

## Language of parts

### When a block of text is a different language

[3.1.2 Language of parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html) is relatively straight forward for blocks of content. You'll need to satisfy this criterion if you have more than 1 language on your page.

Imagine we wanted to use both French and English on our page. We'd need to use `lang="fr"` at some point, but we can't use it on the HTML element because the majority of the page is in English. So we need to add it to the content itself and make sure we don't accidentally wrap any English words into the element we apply it on.

In the following example, we need to apply the `lang="fr"` attribute to the second paragraph, because the language is French. But we don't need to specify that the first paragraph is in English because it will continue to inherit from the HTML element.

```html
<html lang="en">
  <body>
    <h1>The main language is English</h1>
    <p>
      This text is in English
    </p>
    <p lang="fr">
      Ce texte est en Français
    </p>
  </body>
</html>
```
### When there are two languages in a single block

It can get more complicated when you want to use more than one language in a single block of text. If we applied the attribute to the paragraph element like before, the screen reader will attempt to read the entire thing in French. So, in the following example, we are applying the `lang` attribute to part of a paragraph by wrapping it in an [idiomatic text element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i).

```html
<html lang="en">
  <body>
    <p>
      Sometimes people mix languages in a paragraph, 
      but they don't apply the correct language attributes. 
      <i lang="fr">Ç'est la vie!</i>
    </p>
  </body>
</html>
```

### Idiomatic elements vs Spans

The [idiomatic text element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i), or `<i>` element, often gets misunderstood. A lot of people think it stands for italic text. You'd be forgiven for believing this, as when HTML was first invented that is exactly what it did mean. However, over the years, it has evolved in the spec to a have a broader meaning.

In HTML5, the idiomatic text element should be used for text which is different in some way to the surrounding text. This can be an alternative voice or mood, technical terms, thoughts or inner monologues and terms from other languages.

You should use an idiomatic text elements rather than a [span element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span). Some screen readers will ignore the lang attribute on spans because they do not inherently represent anything. They are the inline equivalent of `<div>` elements and should only be used for styling.

## A complex real world example

On Government digital services, there is usually an option to switch to a Welsh version. This creates a few considerations.

On the English version, it needs `lang="en"` on the HTML element, and `lang="cy"` on the link to the Welsh version.

For example:
```html
<html lang="en">
  <body>
    <h1>This is the English site</h1>

    <a href="/switch-to-english">
      English
    </a>

    <a lang="cy" href="/switch-to-welsh">
      Cymraeg
    </a>
  </body>
</html>
```

However, once it switches to the Welsh version, it will need `lang="cy"` on the HTML element, and `lang="en"` on the link to the English version. We no longer need to specify that the Welsh link is actually in Welsh, because it now inherits the Welsh language attribute from the HTML element.

For example:
```html
<html lang="cy">
  <body>
    <h1>Dyma'r safle Cymraeg</h1>

    <a lang="en" href="/switch-to-english">
      English
    </a>

    <a href="/switch-to-welsh">
      Cymraeg
    </a>
  </body>
</html>
```

## Conclusion

Every language has it's own code for the lang attribute. To find the language you need, you can look it up under [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) or use a library such as [ISO language codes on NPM](https://www.npmjs.com/package/iso-language-codes).

Whenever you're writing content, make sure you tag up anything which isn't the default language of the page. Even simple phrases that have crept into the English language, like <i lang="fr">déjà vu</i>.

If you do these things, you should pass the WCAG criteria for 'Language of Page' and 'Language of parts'.