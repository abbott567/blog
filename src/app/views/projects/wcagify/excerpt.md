![A code example showing that if you run WCAGify against a string representing a WCAG criteria such as 1.1.1 Non-text content, you get a return object which lists the criterion, reference, name, link, level and an array of impacts.](/images/work/wcagify.webp)

[WCAGify](https://www.npmjs.com/package/wcagify) is a plugin for people who need to reference the Web Content Accessibility Guidelines frequently and are tired of copying and pasting.

WCAGify looks up WCAG 2.1 criteria based on a reference number supplied as a string and returns an object with the URL and name etc. It means you don't have to get the criterion name 100% correct as long as you know the reference number. It also adds consistency to your reports by returning the name exactly as it's formatted in the WCAG 2.1 standard.

[Read deep-dive on WCAGify](/work/wcagify)