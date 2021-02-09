'use strict'

const posts = require('../../posts/_config.json')

const template = 'pages/work/template.njk'

function get (req, res) {
  res.render(template, { title: 'Work' })
}

function findPostBySlug (slug) {
  return posts.find(post => post.slug === slug) || false
}

module.exports = { get, findPostBySlug }
