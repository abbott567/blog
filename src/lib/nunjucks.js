// Configure app to use Nunjucks
const nunjucks = require('nunjucks')
function setup (app) {
  app.set('view engine', 'njk')

  // Setup paths
  const path = require('path')
  const paths = [
    path.resolve(),
    path.resolve('src'),
    path.resolve('src', 'views'),
    path.resolve('src', 'views', 'pages')
  ]

  // Setup Nunjucks env
  const nunjucksEnvironment = nunjucks.configure(paths, {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
  })

  // Add filter for markdown
  const markdown = require('./markdown')
  nunjucksEnvironment.addFilter('markdown', markdown.compile)

  // Add filter for WCAGify
  const wcagify = require('wcagify')
  nunjucksEnvironment.addFilter('wcagify', wcagify)

  // Add filter for date formatting
  const { format } = require('date-fns')
  nunjucksEnvironment.addFilter('formatDate', timestamp => {
    const date = new Date(timestamp)
    return format(date, 'd MMMM yyyy')
  })

  // Add filter for reading time
  const readingTime = require('../lib/reading-time')
  nunjucksEnvironment.addFilter('readTime', text => {
    return readingTime(text)
  })

  return app
}

module.exports = { setup }
