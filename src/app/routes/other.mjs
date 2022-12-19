import express from 'express'
import path from 'path'

const router = new express.Router()

router.get('/decks/:deck', (req, res) => {
  const slug = req.params.deck
  const template = path.resolve(`dist/decks/${slug}/slides.html`)
  res.sendFile(template)
})

router.get('/feed.xml', (req, res) => {
  const template = path.resolve('dist/feed.xml')
  res.sendFile(template)
})

router.get('*', (req, res) => {
  const template = path.resolve('dist/pages/404.html')
  res.status(404).sendFile(template)
})

export default router
