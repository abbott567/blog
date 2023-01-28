function init (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/robots.txt')
}

module.exports = { init }
