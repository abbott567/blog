// Error handler
function errorHandler (err, req, res, next) {
  const dev = process.env.NODE_ENV !== 'production'

  if (!err.status) {
    err.heading = 'Not found'
    err.url = req.url
    err.message = `The page "${err.url}" does not exist`
    err.status = 404
    res.statusCode = 404
    res.status(404)
  }

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
}

module.exports = errorHandler
