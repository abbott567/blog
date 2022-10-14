'use strict'

const template = 'pages/talks/template.njk'
const fs = require('fs-jetpack')

function get (req, res) {
  const content = fs.read('src/views/pages/talks/content.md')
  res.render(template, { title: 'Talks', content })
}

module.exports = { get }
