'use strict'

const express = require('express')
const router = express.Router({ caseSensitive: true })

router.get('/robots.txt', (req, res) => {
  res.type('text/plain')
  res.send('Sitemap: https://www.craigabbott.co.uk/sitemap.xml\nUser-agent: *\nDisallow: ')
})
router.get('/Robots.txt', (req, res) => {
  res.type('text/plain')
  res.send('Sitemap: https://www.craigabbott.co.uk/sitemap.xml\nUser-agent: *\nDisallow: ')
})

router.use('', require('../src/views/pages/home'))
router.use('/', require('../src/views/pages/redirects'))
router.use('/accessibility', require('../src/views/pages/accessibility'))
router.use('/blog', require('../src/views/pages/blog-overview'))
router.use('/blog/', require('../src/views/pages/blog-post'))
router.use('/privacy', require('../src/views/pages/privacy'))
router.use('/sitemap', require('../src/views/pages/sitemap'))
router.use('/talks', require('../src/views/pages/talks'))
router.use('/work', require('../src/views/pages/work-overview'))
router.use('/work/', require('../src/views/pages/work-deep-dive'))

router.get('*', function (req, res, next) {
  res.status(404)
  const err = {
    heading: 'Something has gone wrong',
    message: `
      The page you were looking for is not here. Go <a href="/">Home</a> or try 
      the <a href="/sitemap">Sitemap</a>.
    `
  }
  res.render('../src/views/layouts/error.njk', { err })
})

module.exports = router
