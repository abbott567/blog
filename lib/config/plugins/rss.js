const pluginRss = require('@11ty/eleventy-plugin-rss')

function init (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
}

module.exports = { init }
