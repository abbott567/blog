const fs = require('fs-jetpack')
const util = require('util')

function init (eleventyConfig) {
  eleventyConfig.addFilter('print', obj => {
    fs.write('_log/printed.txt', util.inspect(obj))
  })
}

module.exports = { init }
