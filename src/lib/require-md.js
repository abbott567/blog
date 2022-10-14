'use strict'

const fs = require('fs-jetpack')

function requirePostAsString (slug) {
  return fs.read(`src/views/posts/${slug}/post.md`)
}

module.exports = requirePostAsString
