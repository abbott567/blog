'use strict'

require('../bin/www')

// Tests
require('../src/pages/accessibility/tests')()
require('../src/pages/blog/tests')()
require('../src/pages/home/tests')()
require('../src/pages/post/tests')()
require('../src/pages/privacy/tests')()
require('../src/pages/sitemap/tests')()
require('../src/pages/talks/tests')()
require('../src/pages/work/tests')()
