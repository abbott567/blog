const sass = require('./sass')
const rss = require('./rss')
const webpack = require('./webpack')
const highlighting = require('./highlighting')

function init (eleventyConfig) {
  highlighting.init(eleventyConfig)
  sass.init(eleventyConfig)
  rss.init(eleventyConfig)
  webpack.init(eleventyConfig)
}

module.exports = { init }
