My initial thoughts were to decouple PA11Y from it's headless browser, and run it as part of the Selenium tests, rather than booting up 2 separate browser instances which would add seconds onto each test they could just both hit the same page when it was open.

However, on closer inspection, it turns out that using both is actually far simpler than I anticipated. PA11Y has the ability to use different 'runners' or plugins. So, using axe-core and PA11Y together is as simple as passing in the runners in as an option.
