const minifyHTML = require('./minify-html')

function init (eleventyConfig) {
  minifyHTML.init(eleventyConfig)
}

module.exports = { init }
