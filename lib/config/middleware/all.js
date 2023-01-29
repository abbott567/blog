const serve404 = require('./serve-404')
const logs = require('./logs')

function init (eleventyConfig) {
  serve404.init(eleventyConfig)
  logs.init(eleventyConfig)
}

module.exports = { init }
