'use strict'

// NPM dependencies
const path = require('path')
const express = require('express')

// Application
const app = express()

// Force https in production
const useHttpsInProd = require('./lib/use-https-in-production')
useHttpsInProd(app)

// Markdown
const markdown = require('./lib/markdown')
markdown.setup()

// Nunjucks
const nunjucks = require('./lib/nunjucks')
nunjucks.setup(app)

// Locals
const locals = require('./lib/locals')
app.use(locals)

// Favicon
const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'dist/images', 'favicon.ico')))

// Compression
const compression = require('compression')
app.use(compression())

// Static files
app.use(express.static(path.join(__dirname, 'dist')))

// Routes
const routes = require('./lib/routes')
app.use(routes)

// Error Handler
if (process.env.NODE_ENV !== 'production') {
  const errorhandler = require('errorhandler')
  app.use(errorhandler())
}

module.exports = app
