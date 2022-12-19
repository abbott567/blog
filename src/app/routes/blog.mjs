import express from 'express'
import path from 'path'

const router = new express.Router()

router.get('/blog', (req, res) => {
  const pageNo = req.query.page || 1
  const template = path.resolve(`dist/pages/blog-${pageNo}.html`)
  res.sendFile(template)
})

router.get('/blog/:post', (req, res) => {
  const slug = req.params.post
  const template = path.resolve(`dist/posts/${slug}.html`)
  res.sendFile(template)
})

export default router
