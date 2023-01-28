const sass = require('./sass')
const rss = require('./rss')
const webpack = require('./webpack')

function init (eleventyConfig) {
  sass.init(eleventyConfig)
  rss.init(eleventyConfig)
  webpack.init(eleventyConfig)
}

module.exports = { init }
