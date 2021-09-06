'use strict'

const fs = require('fs')

function requirePostAsString (slug) {
  return fs.readFileSync(`src/posts/${slug}/post.md`, 'utf8')
}

module.exports = requirePostAsString
