function forcehttps (req, res, next) {
  const host = req.headers.host
  let protocol = req.headers['x-forwarded-proto']

  // Glitch returns a comma separated list for x-forwarded-proto
  // We need the first to determine if running on https
  if (protocol) {
    protocol = protocol.split(',').shift()
  }

  if (process.env.NODE_ENV === 'production' && !host.includes('localhost')) {
    if (protocol !== 'https') {
      console.log('Redirecting request to https')
      return res.redirect(301, 'https://' + host + req.url)
    }
  }

  // Mark proxy as secure (allows secure cookies)
  req.connection.proxySecure = true

  next()
}

export default forcehttps
