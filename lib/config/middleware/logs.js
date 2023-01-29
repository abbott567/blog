const fs = require('fs-jetpack')
const util = require('util')

function init (eleventyConfig) {
  fs.write('_log/collections.txt', util.inspect(eleventyConfig.collections))
}

module.exports = { init }
