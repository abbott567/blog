const posts = require('./posts')
const postTags = require('./post-tags')
const decks = require('./decks')
const talks = require('./talks')
const work = require('./work')

function init (eleventyConfig) {
  posts.init(eleventyConfig)
  postTags.init(eleventyConfig)
  decks.init(eleventyConfig)
  talks.init(eleventyConfig)
  work.init(eleventyConfig)
}

module.exports = { init }
