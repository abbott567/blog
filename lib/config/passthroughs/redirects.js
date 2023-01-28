function init (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_redirects')
}

module.exports = { init }
