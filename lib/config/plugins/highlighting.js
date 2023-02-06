const syntaxHighlight = require('eleventy-plugin-highlightjs')

function init (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)
}

module.exports = { init }
