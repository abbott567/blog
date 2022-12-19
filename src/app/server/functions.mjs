import colours from 'colors'
import http from 'http'
import app from '../config.mjs'

const server = http.createServer(app)

function launch () {
  const port = process.env.PORT || 3001
  server.listen(port)
  if (process.env.NODE_ENV === 'production') console.log(colours.green('Server started'))
  else console.log(colours.green(`Server started on http://localhost:${port}`))
  return server
}

function close () {
  server.close()
}

export default { launch, close }
