const htmlmin = require('html-minifier')

function init (eleventyConfig) {
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })
}

module.exports = { init }
