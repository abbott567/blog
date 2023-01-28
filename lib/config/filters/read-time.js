const calculateReadTime = require('../../utils/read-time')

function init (eleventyConfig) {
  eleventyConfig.addFilter('readTime', string => calculateReadTime(string))
}

module.exports = { init }
