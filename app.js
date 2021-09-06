// NPM dependencies
const path = require('path')
const express = require('express')
const compression = require('compression')
const favicon = require('serve-favicon')

// Local dependencies
const nunjucks = require('./src/lib/nunjucks')
const markdown = require('./src/lib/markdown')
const locals = require('./src/lib/locals')
const errorHandler = require('./src/lib/error-handler')

// Application
const app = express()

// Configure markdown
markdown.setup()

// Configure nunjucks
nunjucks.setup(app)

// Middleware
app.use(locals)
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))
app.use(compression())

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('', require('./src/pages/home'))
app.use('/', require('./src/pages/redirects'))
app.use('/accessibility', require('./src/pages/accessibility'))
app.use('/blog', require('./src/pages/blog'))
app.use('/blog/', require('./src/pages/post'))
app.use('/privacy', require('./src/pages/privacy'))
app.use('/sitemap', require('./src/pages/sitemap'))
app.use('/talks', require('./src/pages/talks'))
app.use('/work', require('./src/pages/work'))

// Error Handler
app.use(errorHandler)

module.exports = app
