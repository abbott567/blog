function locals (req, res, next) {
  res.locals.appName = 'craigabbott.co.uk'
  res.locals.environment = process.env.NODE_ENV
  next()
}

module.exports = locals
