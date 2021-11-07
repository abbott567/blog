// NPM dependencies
const path = require('path')
const express = require('express')

// Application
const app = express()

// Markdown
const markdown = require('./src/lib/markdown')
markdown.setup()

// Nunjucks
const nunjucks = require('./src/lib/nunjucks')
nunjucks.setup(app)

// Locals
const locals = require('./src/lib/locals')
app.use(locals)

// Favicon
const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))

// Compression
const compression = require('compression')
app.use(compression())

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Routes
const routes = require('./src/lib/routes')
app.use(routes)

// Error Handler
const errorHandler = require('./src/lib/error-handler')
app.use(errorHandler)

module.exports = app
