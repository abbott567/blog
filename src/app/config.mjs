import compression from 'compression'
import express from 'express'
import routes from './routes/all.mjs'
import path from 'path'
import useHttpsInProd from '../app/server/https/use-in-prod.mjs'
import setCache from './server/cache-control.mjs'

const app = express()
useHttpsInProd(app)

// Middleware
app.use(compression())
app.use(setCache)

// Static files
app.use(express.static(path.resolve('dist')))

// Routes
app.use(routes)

export default app
