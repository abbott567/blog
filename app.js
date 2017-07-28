const path = require('path');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const app = express();

// View engine setup
app.set('view engine', 'njk');

// Nunjucks config
nunjucks.configure('src', {
  watch: true,
  noCache: true,
  express: app
});

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./src/home'));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  const env = process.env.NODE_ENV;
  const error = env === 'development' ? err : '';
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error
  });
  next();
});

module.exports = app;
