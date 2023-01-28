const robots = require('./robots')
const redirects = require('./redirects')
const fonts = require('./fonts')

function init (eleventyConfig) {
  robots.init(eleventyConfig)
  redirects.init(eleventyConfig)
  fonts.init(eleventyConfig)
}

module.exports = { init }
