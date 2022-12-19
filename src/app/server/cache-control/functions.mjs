import express from 'express'
import path from 'path'

function cacheControl (app) {
  // Config
  const cacheOpts = {
    cacheControl: true,
    maxAge: '1yr'
  }

  // Only cache in prod
  if (process.env.NODE_ENV === 'production') {
    app.use('/css', express.static(path.resolve('dist/css'), cacheOpts))
    app.use('/scripts', express.static(path.resolve('dist/scripts'), cacheOpts))
    app.use('/images', express.static(path.resolve('dist/images'), cacheOpts))
    app.use(express.static(path.resolve('dist')))
  } else {
    app.use(express.static(path.resolve('dist')))
  }
}

export default cacheControl
