function locals (req, res, next) {
  const appURL = 'craigabbott.co.uk'
  res.locals.appName = appURL
  res.locals.appURL = appURL
  res.locals.canonical = 'http://www.' + appURL + req.originalUrl
  res.locals.environment = process.env.NODE_ENV
  next()
}

module.exports = locals
