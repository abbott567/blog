We use [axe-core](https://www.npmjs.com/package/axe-core) by [Deque](https://www.deque.com/) regularly as part of acceptance tests. With [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/accessibility_testing.html) now offering [PA11Y](https://www.npmjs.com/package/pa11y) as part of the Continuous Integration (CI) Pipeline with zero config, I wanted to understand how it stacked up against axe-core. Can you drop axe-core for PA11Y? Can you drop PA11Y for axe-core? Should you use both?

Spoiler alert, all automated tools perform poorly. This doesn't mean we shouldn't use them. But we need to remain realistic about how many errors we may still have on our pages, even if the tools can't find them.

As an experiment, we usually log the method, results then conclusion. But I know the results and the conclusion are the parts you probably want to know. So I'll cover those first. If you are interested, and you want to read more on the method and the details, you can read the rest of the post.

If you want to read all the raw outputs from the tests, a detailed breakdown of each test, or run the tests again for yourself, you can find [the axe-core-vs-pa11y project on Github](https://github.com/abbott567/axe-core-vs-pa11y).

## Summary of results

Out of 142 issues tested:

Axe-core found 39 issues in total, or 27%. 36 were violations and 3 were potential issues which required a user to check manually.

PA11Y found 29 issues in total, or 20%.

19 issues (13%) were found by both tools. 

20 issues (14%) were found by axe-core but not PA11y.

10 issues (7%) were found by PA11Y but not axe-core.

Combined, 49 issues (35%) were found.

## Conclusion

Although both tools find a lot of the same issues, some issues are found by one tool but not the other. Therefore I do not think you can favour one tool over the other. 

I also do not think we can assume axe-core is better than PA11Y because it finds more issues, as the issues tested in this set of tests might just happen to play to axe-core's strengths. It's very likely that PA11Y might outperform axe-core on a different set of tests.

What is clear from the results, is that each tool definitely finds things which the other does not. Therefore, from these tests, I would recommend using both axe-core and PA11Y in your acceptance tests. By using both you can expect to find around 35% of known issues.

## Method

Testing automated tools is always going to be difficult. There are so many ways to make something inaccessible that designing a tool or a test to find everything is probably impossible. 

So, to compare the two tools, I set up a simple test suite using Mocha and had each tool evaluate [the worlds least-accessible webpage](https://alphagov.github.io/accessibility-tool-audit/test-cases.html). The page is deliberately terrible. It has 142 known accessibility issues, so it is a good benchmark to see how automated tools perform. 

You can [read more about the worlds-least accessible webpage on the GDS accessibility blog](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/).

## Interpreting the results

The two tools do not report on issues in the exact same way. Axe-core finds issues and potential issues, PA11Y just finds issues or no issues. For the purposes of the test, if axe-core asks the user to manually check it, I'm still saying it found the issue.

### Interpreting axe-core results

Axe-core returns an object with 3 categories. Passed, incomplete and violations. 

Passed is what the tool checked and found to be ok. Violations are what the tool found to be definite issues. Incomplete is when the tool could not reach a decision on whether it was ok or not. For issues in the incomplete category, the user must manually check them.

For example:
```javascript
{
  passed: [],     // Tests axe-core passed as non-issues
  incomplete: [], // Tests axe-core could not complete and the user must check
  voilations: []  // Tests axe-core failed as accessibility issues
}
```

### Interpreting PA11Y results
PA11Y returns an object with only 1 category which it calls issues. So unlike axe-core, PA11Y does not raise things for the user to check manually. It just finds issues, or it does not.

For example:
```javascript
{
  issues: [] // Tests which either failed or require a user input
}
```

## Anomalies

There were a few anomalies between running these axe-core tests in 2021 and comparing them to the original 2016 GDS tests.

In the 2016 GDS tests, it is not clear if it was axe-core or Axe DevTools which was used. I assume it to be Axe DevTools which is a Chrome extension. However, they both use the same engine so the results should be the same. 

In the 2016 GDS tests, Axe found 43 issues in total, made up of 41 violations and 2 issues which required the user to check. 

This is higher than in my tests. In my 2021 tests, axe-core only found 39 issues in total, made up of 36 violations and 3 issues which required the user to check.

This could be due to different versions of the tools being used, meaning Axe itself has possibly regressed, or it is simply human error when recording the tests.

### Table has no table headings 
- 2016 Axe found the issue
- 2021 axe-core does not find the issue
- 2021 Axe DevTools does not find the issue

### Table that only has TH elements in it
- 2016 Axe found the issue
- 2021 axe-core flags it for user review
- 2021 Axe DevTools flags it for user review

### Embedded audio file is missing text alternative
- 2016 Axe flags it for user review
- 2021 axe-core does not find the user
- 2021 Axe DevTools does not find the issue

### Link to #, invalid hypertext reference
- 2016 Axe found the issue
- 2021 axe-core does not find the issue
- 2021 Axe DevTools does not find the issue

### Group of radio buttons not enclosed in a fieldset
- 2016 Axe found the issue
- 2021 axe-core does not find the issue
- 2021 Axe DevTools does not find the issue

### Group of check boxes not enclosed in a fieldset
- 2016 Axe found the issue
- 2021 axe-core does not find the issue
- 2021 Axe DevTools does not find the issue

### Two unique labels, but identical for= attributes
- 2016 Axe found the issue
- 2021 axe-core flags it for user review
- 2021 Axe DevTools flags it for user review
