function init (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('_redirects')
}

module.exports = { init }
