'use strict'

require('../bin/www')

// Tests
require('../src/views/pages/accessibility/tests')()
require('../src/views/pages/blog/tests')()
require('../src/views/pages/home/tests')()
require('../src/views/pages/post/tests')()
require('../src/views/pages/privacy/tests')()
require('../src/views/pages/sitemap/tests')()
require('../src/views/pages/talks/tests')()
require('../src/views/pages/work/tests')()
