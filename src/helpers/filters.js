'use-strict'

const { format } = require('date-fns')
const readingTime = require('../helpers/reading-time')
const requirePostAsString = require('../helpers/require-md')

function loadFilters (env) {
  env.addFilter('formatDate', timestamp => {
    const date = new Date(timestamp)
    return format(date, 'd MMMM yyyy')
  })

  env.addFilter('readTime', post => {
    const text = requirePostAsString(post)
    return readingTime(text)
  })
}

module.exports = loadFilters
