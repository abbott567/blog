import express from 'express'
import path from 'path'

function cacheControl (app) {
  // Config
  const assets = {
    cacheControl: true,
    maxAge: '1yr'
  }
  const pages = {
    cacheControl: true,
    maxAge: '1h'
  }

  // Only cache in prod
  if (process.env.NODE_ENV === 'production') {
    app.use('/css', express.static(path.resolve('dist/css'), assets))
    app.use('/scripts', express.static(path.resolve('dist/scripts'), assets))
    app.use('/images', express.static(path.resolve('dist/images'), assets))
    app.use(express.static(path.resolve('dist'), pages))
  } else {
    app.use(express.static(path.resolve('dist')))
  }
}

export default cacheControl
