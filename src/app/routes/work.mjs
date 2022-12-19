import express from 'express'
import path from 'path'

const router = new express.Router()

router.get('/work', (req, res) => {
  const template = path.resolve('dist/pages/work.html')
  res.sendFile(template)
})

router.get('/work/:project', (req, res) => {
  const slug = req.params.project
  const template = path.resolve(`dist/projects/${slug}.html`)
  res.sendFile(template)
})

export default router
