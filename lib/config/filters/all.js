const print = require('./print')
const prettyDate = require('./pretty-date')
const markdown = require('./markdown')
const limit = require('./limit')
const sortByTitle = require('./sort-by-title')
const backLink = require('./back-link')
const readTime = require('./read-time')
const slugify = require('./slugify')

function init (eleventyConfig) {
  limit.init(eleventyConfig)
  readTime.init(eleventyConfig)
  prettyDate.init(eleventyConfig)
  backLink.init(eleventyConfig)
  print.init(eleventyConfig)
  markdown.init(eleventyConfig)
  sortByTitle.init(eleventyConfig)
  slugify.init(eleventyConfig)
}

module.exports = { init }
