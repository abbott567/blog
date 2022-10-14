const nunjucks = require('nunjucks')
const wcagify = require('wcagify')
const markdown = require('./markdown')
const path = require('path')
const { format } = require('date-fns')
const readingTime = require('../lib/reading-time')

function setup (app) {
  app.set('view engine', 'njk')

  const paths = [
    path.resolve(),
    path.resolve('src'),
    path.resolve('src', 'views'),
    path.resolve('src', 'views', 'pages')
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
  nunjucksEnvironment.addFilter('readTime', text => {
    return readingTime(text)
  })
  return app
}

module.exports = { setup }
