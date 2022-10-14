'use strict'

const fs = require('fs-jetpack')
const posts = require('../../posts/_config')
const readingTime = require('../../../lib/reading-time')

const page = 'post'
const template = `pages/${page}/template.njk`

function get (req, res, next) {
  const slug = req.params.slug
  const post = findPostBySlug(slug)
  const text = fs.read(`src/views/posts/${slug}/post.md`)
  const readTime = readingTime(text)
  if (post) {
    const content = fs.read(`src/views/posts/${post.slug}/post.md`)
    return res.render(template, { title: post.title, readTime, post, content })
  }
  next()
}

function findPostBySlug (slug) {
  return posts.find(post => post.slug === slug) || false
}

module.exports = { get, findPostBySlug }
