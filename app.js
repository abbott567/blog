'use strict'

const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')
const markdown = require('nunjucks-markdown')
const marked = require('marked')
const favicon = require('serve-favicon')
const compression = require('compression')

const app = express()

// View engine setup
app.set('view engine', 'njk')

// Nunjucks config
const jucks = nunjucks.configure('src', {
  watch: true,
  noCache: true,
  express: app
})

// Load nunjucks filters
require('./src/helpers/filters')(jucks)

// Markdown config
markdown.register(jucks, marked)

// Middleware
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))
app.use(compression())
app.use((req, res, next) => {
  res.locals.appName = 'craigabbott.co.uk'
  res.locals.environment = process.env.NODE_ENV
  next()
})

// Static files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/jquery.js', express.static('node_modules/jquery/dist/jquery.slim.min.js'))

// Routes
app.use('', require('./src/pages/home'))
app.use('/', require('./src/pages/article'))

// Error handler
app.use((err, req, res, next) => {
  const dev = process.env.NODE_ENV !== 'production'
  res.status(404)
  res.statusCode = 404
  err.url = req.url
  err.heading = 'Not found'
  err.message = `The page "${err.url}" does not exist`

  // respond with html page
  if (req.accepts('html')) {
    return res.render('common/error.njk', { err, dev })
  }

  // respond with json
  if (req.accepts('json')) {
    return res.send({ error: 'Not found' })
  }

  // default to plain-text. send()
  res.type('txt').send('Not found')
})

module.exports = app
