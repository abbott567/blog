const datefns = require('date-fns')

function init (eleventyConfig) {
  eleventyConfig.addFilter('prettyDate', date => datefns.format(date, 'd MMMM yyyy'))
}

module.exports = { init }
