'use strict';

const path = require('path');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
const favicon = require('serve-favicon');
const compression = require('compression');

const app = express();

// View engine setup
app.set('view engine', 'njk');

// Nunjucks config
const jucks = nunjucks.configure('src', {
  watch: true,
  noCache: true,
  express: app
});

// Load nunjucks filters
require('./src/helpers/filters')(jucks);

// Markdown config
markdown.register(jucks, marked);

// Middleware
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use((req, res, next) => {
  const cookie = req.cookies.settings || {};
  const settings = (typeof cookie === 'string') ? JSON.parse(cookie) : cookie;
  res.locals.settings = settings;
  res.locals.appName = 'craigabbott.co.uk';
  res.locals.environment = process.env.NODE_ENV;
  next();
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery.js', express.static('node_modules/jquery/dist/jquery.slim.min.js'));
app.use('/js-cookie.js', express.static('node_modules/js-cookie/src/js.cookie.js'));

// Routes
app.use('', require('./src/pages/home'));
app.use('/', require('./src/pages/article'));

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
