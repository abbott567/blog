const minifyHTML = require('./minify-html')
const modifyHTML = require('./modify-html')

function init (eleventyConfig) {
  modifyHTML.init(eleventyConfig)
  minifyHTML.init(eleventyConfig)
}

module.exports = { init }
