const express = require('express')
const router = express.Router()

router.use('', require('../pages/home'))
router.use('/', require('../pages/redirects'))
router.use('/accessibility', require('../pages/accessibility'))
router.use('/blog', require('../pages/blog'))
router.use('/blog/', require('../pages/post'))
router.use('/privacy', require('../pages/privacy'))
router.use('/sitemap', require('../pages/sitemap'))
router.use('/talks', require('../pages/talks'))
router.use('/work', require('../pages/work'))

module.exports = router
