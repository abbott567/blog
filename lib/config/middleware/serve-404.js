const fs = require('fs-jetpack')
const NOT_FOUND_PATH = '_site/404.html'

function init (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        if (err) throw err
        bs.addMiddleware('*', (req, res) => {
          if (!fs.exists(NOT_FOUND_PATH)) {
            throw new Error(`\`${NOT_FOUND_PATH}\` not found`)
          }

          const content = fs.read(NOT_FOUND_PATH)
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' })
          // Provides the 404 content without redirect.
          res.write(content)
          res.end()
        })
      }
    }
  })
}

module.exports = { init }
