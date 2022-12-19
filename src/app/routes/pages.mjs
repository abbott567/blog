import express from 'express'
import path from 'path'

const router = new express.Router()

router.get('/', (req, res) => {
  const template = path.resolve('dist/pages/home.html')
  res.sendFile(template)
})

router.get('/talks', (req, res) => {
  const template = path.resolve('dist/pages/talks.html')
  res.sendFile(template)
})

router.get('/work', (req, res) => {
  const template = path.resolve('dist/pages/work.html')
  res.sendFile(template)
})

router.get('/sitemap', (req, res) => {
  const template = path.resolve('dist/pages/sitemap.html')
  res.sendFile(template)
})

router.get('/accessibility', (req, res) => {
  const template = path.resolve('dist/pages/accessibility.html')
  res.sendFile(template)
})

router.get('/privacy', (req, res) => {
  const template = path.resolve('dist/pages/privacy.html')
  res.sendFile(template)
})

export default router
