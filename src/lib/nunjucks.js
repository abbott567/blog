const nunjucks = require('nunjucks')
const wcagify = require('wcagify')
const markdown = require('./markdown')
const path = require('path')
const { format } = require('date-fns')
const requirePostAsString = require('../lib/require-md')
const readingTime = require('../lib/reading-time')

function setup (app) {
  app.set('view engine', 'njk')

  const paths = [
    path.join(__dirname, '../', '../', 'src')
  ]

  const nunjucksEnvironment = nunjucks.configure(paths, {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
  })

  nunjucksEnvironment.addFilter('markdown', markdown.compile)
  nunjucksEnvironment.addFilter('formatDate', timestamp => {
    const date = new Date(timestamp)
    return format(date, 'd MMMM yyyy')
  })
  nunjucksEnvironment.addFilter('wcagify', wcagify)
  nunjucksEnvironment.addFilter('readTime', post => {
    const text = requirePostAsString(post)
    return readingTime(text)
  })
  return app
}

module.exports = { setup }
