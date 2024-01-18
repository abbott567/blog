const slugify = require('slugify')

function init (eleventyConfig) {
  eleventyConfig.addFilter('slugify', function (str) {
    return slugify(str, {
      lower: true,
      strict: true
    })
  })
}

module.exports = { init }
