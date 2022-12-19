import compression from 'compression'
import express from 'express'
import routes from './routes/all.mjs'
import path from 'path'
import useHttpsInProd from '../app/server/https/use-in-prod.mjs'

const app = express()
useHttpsInProd(app)

// Middleware
app.use(compression())

// Static files
if (process.env.NODE_ENV === 'dev') {
  app.use(express.static(path.resolve('dist')))
} else {
  app.use(express.static(path.resolve('dist'), { maxAge: '30m' }))
}

// Routes
app.use(routes)

export default app
