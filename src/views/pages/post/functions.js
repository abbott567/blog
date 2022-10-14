'use strict'

const fs = require('fs-jetpack')
const posts = require('../../posts/_config')
const readingTime = require('../../../lib/reading-time')

const page = 'post'
const template = `pages/${page}/template.njk`

function get (req, res, next) {
  const slug = req.params.slug
  const post = findPostBySlug(slug)
  if (post) {
    const text = fs.read(`src/views/posts/${slug}/post.md`)
    post.readTime = readingTime.forText(text)
    post.content = fs.read(`src/views/posts/${post.slug}/post.md`)
    return res.render(template, { title: post.title, post })
  }
  next()
}

function findPostBySlug (slug) {
  return posts.find(post => post.slug === slug) || false
}

module.exports = { get, findPostBySlug }
