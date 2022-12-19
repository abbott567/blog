## Overview

[WCAGify](https://www.npmjs.com/package/wcagify) is a plugin for people who need to reference the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) frequently and are tired of copying and pasting.

WCAGify looks up criteria from the Web Content Accessibility Guidelines (WCAG) based on a reference number supplied as a string and returns an object with the URL and name etc. It means you don't have to get the criterion name 100% correct as long as you know the reference number. It also adds consistency to your reports by returning the name exactly as it's formatted in the WCAG 2.1 standard.

## Situation

We write a lot of accessibility reports. When referencing WCAG 2.1, we need to link it back to the documentation and we often need information such as the level it is categorised under, and sourcing this information every time was slow and laborious.

## Task

To write a plugin which would hold all of the information and serve it up by using a simple function to speed up the process when writing reports.

The plugin would need to work with the formats we commonly used such as Markdown, HTML and [Nunjucks](https://mozilla.github.io/nunjucks/).

## Action

I built and published an NPM module so people could install it easily. Within the module, it contained a basic JavaScript function so people could utilise it however they needed to.

```javascript
const wcagify = require('wcagify')

const result = wcagify('1.1.1 Non-text Content')

result: {
  criterion: '1.1.1 Non-text Content',
  ref: '1.1.1',
  name: 'Non-text Content',
  link: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
  level: 'A',
  impacts: ['Auditory', 'Visual']
}
```

### Nunjucks filter

I included a [Nunjucks filter](https://mozilla.github.io/nunjucks/templating.html#filters) as our organisation used Nunjucks in most of the services. It is the same templating language that powers this website and the [GOV.UK Design System](https://design-system.service.gov.uk).

```Handlebars
{% raw %}{% set issue = '1.1.1 Non-text contrast'|wcagify %}
{{issue.criterion}} // 1.1.1 Non-text Content
{{issue.name}} // Non-text Content
{{issue.ref}} // 1.1.1
{{issue.url}} // https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.
{% endraw %}
```
```javascript
const nunjucks = require('nunjucks')
const express = require('express')

const app = express()

const env = nunjucks.configure('src', { express: app, })

// Add the Nunjucks filter
const wcagify = require('wcagify')
env.addFilter('wcagify', wcagify)
```

### Nunjucks macro

The filter was simple, but it meant that developers would likely have to make their own [Nunjucks macro](https://mozilla.github.io/nunjucks/templating.html#macro) to handle it, so I added one of those too.

```handlebars
// Nunjucks code
{% raw %}{{ wcagify('1.1.1') }}{% endraw %}
```
```html
<!-- Output when compiled -->
<a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">
  1.1.1 Non-text Content
</a>
```
```handlebars
// Imports from the .njk file from the node_modules path
{% raw %}{%- from 'wcagify.njk' import wcagify -%}

{{ wcagify('1.1.1', {
  id: 'wcag-ref-1',
  class: 'link link--small'
}) }}{% endraw %}
```

### Markdown filter

Finally, I included a [MarkedJS](https://marked.js.org/) filter, so that when we compiled Markdown files it would also include the functionality of the plugin.

```markdown
<!-- Markdown code -->
[1.1.1]({wcagify})
```
```javascript
const wcagifyMarked = require('wcagify/markedjs')
const marked = require('marked')

// Create your renderer
const renderer = new marked.Renderer()

// Pass the renderer into apply the WCAGify macro
wcagifyMarked(renderer)

// Use your modified rendered with MarkedJS
marked.setOptions({ renderer: renderer })
```

## Result

Producing accessibility reports is much faster and more accurate. The WCAG criteria is referenced correctly and consistently and the links always go to the right place.
