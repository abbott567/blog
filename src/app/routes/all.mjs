import express from 'express'
import redirects from './redirects.mjs'
import pages from './pages.mjs'
import blog from './blog.mjs'
import work from './work.mjs'
import other from './other.mjs'

const router = new express.Router()

router.use(redirects)
router.use(pages)
router.use(blog)
router.use(work)
router.use(other)

export default router
