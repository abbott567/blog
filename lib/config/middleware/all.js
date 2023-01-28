const serve404 = require('./serve-404')

function init (eleventyConfig) {
  serve404.init(eleventyConfig)
}

module.exports = { init }
