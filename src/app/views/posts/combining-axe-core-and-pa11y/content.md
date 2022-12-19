# Combining axe-core and PA11Y

Last week, I was looking at automated accessibility tools, and I published [a comparison between axe-core and PA11Y](/blog/axe-core-vs-pa11y). 

The conclusion was that we shouldn't use one over the other because they both find different things. So, I set about trying to find an elegant way to use both.

I've always ran [axe-core](https://github.com/dequelabs/axe-core) using [Selenium](https://www.selenium.dev/) and [ChromeDriver](https://chromedriver.chromium.org/). But this can be flaky as every time you update Chrome, your tests no longer work. Even if I'm using a version manager to switch between NodeJS versions, I still hit the issue of mismatched ChromeDriver and Chrome Browser versions.

[PA11Y](https://pa11y.org/) comes neatly packaged with a headless Chrome browser using [Puppeteer](https://www.npmjs.com/package/puppeteer), so you don't need to setup Selenium. This makes running it in test suites like Mocha much more lightweight in terms of setup.

When I ran the tests for the initial comparison, it was using Selenium for axe-core and PA11Y's own headless Chrome browser together. This was fine for what I was trying to do, but it made the tests slow, and in a real project it would be super inefficient.

So, my initial thoughts were to decouple PA11Y from it's headless browser, and run it as part of the Selenium tests, rather than booting up 2 separate browser instances which would add seconds onto each test they could just both hit the same page when it was open.

However, on closer inspection, it turns out that using both is actually far simpler than I anticipated. PA11Y has the ability to use different 'runners' or plugins. So, using axe-core and PA11Y together is as simple as passing in the runners in as an option.

The default runner for PA11Y is HTMLCS, or HTML Code Sniffer. When you use the PA11Y API in your tests, this is the runner it will use if you give it no additional information. For example:

```javascript
pa11y('http://localhost:3000')
```

You can see that this is the default runner, because if any issues are returned then the runner attribute will list HTMLCS. For example:

```json
{
  "code": "WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent",
  "type": "error",
  "typeCode": 1,
  "message": "Anchor element found with a valid href attribute, but no link content has been supplied.",
  "context": "<a href=\"http://www.google.com\"></a>",
  "selector": "html > body > main > a",
  "runner": "htmlcs", // This attribute shows that HTMLCS found the issue
  "runnerExtras": {}
}
```

To run axe-core at the same time as HTMLCS, you simply need to tell PA11Y to do that. We pass in an options object and we give it an array of which runners we want to use. HTMLCS is the default runner, but if we're overriding the default then we still need to tell PA11Y to use it. For example:

```javascript
pa11y('http://localhost:3000'. { runners: ['htmlcs', 'axe'] })
```

Now when we check our output, we can see that both HTMLCS and axe-core found issues on the page.

```json
[
  {
    "code": "link-name",
    "type": "error",
    "typeCode": 1,
    "message": "Links must have discernible text (https://dequeuniversity.com/rules/axe/4.3/link-name?application=axeAPI)",
    "context": "<a href=\"http://www.google.com\"></a>",
    "selector": "html > body > main > a",
    "runner": "axe", // Shows Axe as the runner which found the issue
    "runnerExtras": {
      "description": "Ensures links have discernible text",
      "impact": "serious",
      "help": "Links must have discernible text",
      "helpUrl": "https://dequeuniversity.com/rules/axe/4.3/link-name?application=axeAPI"
    }
  },
  {
    "code": "WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent",
    "type": "error",
    "typeCode": 1,
    "message": "Anchor element found with a valid href attribute, but no link content has been supplied.",
    "context": "<a href=\"http://www.google.com\"></a>",
    "selector": "html > body > main > a",
    "runner": "htmlcs", // Shows HTMLCS as the runner which found the issue
    "runnerExtras": {}
  }
]
```

So, I stand by my original conclusion, that we should use both PA11Y and axe-core. But it looks like the implementation of using both is actually so easy that you'd be a fool not to. 
