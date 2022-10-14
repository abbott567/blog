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

router.use('', require('../views/pages/home'))
router.use('/', require('../views/pages/redirects'))
router.use('/accessibility', require('../views/pages/accessibility'))
router.use('/blog', require('../views/pages/blog'))
router.use('/blog/', require('../views/pages/post'))
router.use('/privacy', require('../views/pages/privacy'))
router.use('/sitemap', require('../views/pages/sitemap'))
router.use('/talks', require('../views/pages/talks'))
router.use('/work', require('../views/pages/work'))
router.use('/work/:item', require('../views/pages/work'))

module.exports = router
