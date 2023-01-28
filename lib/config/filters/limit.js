function init (eleventyConfig) {
  eleventyConfig.addFilter('limit', (arr, limit) => arr.slice(0, limit))
}

module.exports = { init }
