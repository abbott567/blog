import compression from 'compression'
import express from 'express'
import routes from './routes/all.mjs'
import useHttpsInProd from '../app/server/https/use-in-prod.mjs'
import cacheControl from './server/cache-control/functions.mjs'

const app = express()
useHttpsInProd(app)
cacheControl(app)

// Middleware
app.use(compression())

// Routes
app.use(routes)

export default app