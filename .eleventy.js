const config = require('./lib/config/all')

module.exports = function (eleventyConfig) {
  config.init(eleventyConfig)
  return {
    dir: {
      input: 'src',
      output: '_site'
    },
    markdownTemplateEngine: 'njk'
  }
}

