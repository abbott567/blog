
const plugins = require('./plugins/all')
const transforms = require('./transforms/all')
const filters = require('./filters/all')
const passthroughs = require('./passthroughs/all')
const middleware = require('./middleware/all')
const collections = require('./collections/all')

function init (eleventyConfig) {
  passthroughs.init(eleventyConfig)
  plugins.init(eleventyConfig)
  filters.init(eleventyConfig)
  transforms.init(eleventyConfig)
  middleware.init(eleventyConfig)
  collections.init(eleventyConfig)
}

module.exports = { init }
