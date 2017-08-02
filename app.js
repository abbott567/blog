'use strict';

const path = require('path');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');

const app = express();

// View engine setup
app.set('view engine', 'njk');

// Nunjucks config
const jucks = nunjucks.configure('src', {
  watch: true,
  noCache: true,
  express: app
});

markdown.register(jucks, marked);

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.locals.appName = 'craigabbott.co.uk';
  next();
});

// Routes
app.use('/', require('./src/pages/home'));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, _next) => {
  const env = process.env.NODE_ENV;
  const error = env === 'development' ? err : '';
  res.status(err.status || 500);
  res.render('common/error', {
    message: err.message,
    error
  });
});

module.exports = app;
