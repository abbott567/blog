function setCache (req, res, next) {
  // Set time to 30 Minutes
  const period = 60 * 30

  // Only cache GET requests
  if (process.env.NODE_ENV === 'production') {
    if (req.method === 'GET') res.set('Cache-control', `public, max-age=${period}`)
    else res.set('Cache-control', 'no-store')
  }

  next()
}

export default setCache
