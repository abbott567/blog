import express from 'express'
import path from 'path'

function cacheControl (app) {
  // Config
  const cacheConfig = {
    cacheControl: true,
    maxAge: '1yr'
  }

  // Only cache in prod
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('dist/css'), cacheConfig))
    app.use(express.static(path.resolve('dist/images'), cacheConfig))
    app.use(express.static(path.resolve('dist/scripts'), cacheConfig))
    app.use(express.static(path.resolve('dist')))
  } else {
    app.use(express.static(path.resolve('dist')))
  }
}

export default cacheControl
