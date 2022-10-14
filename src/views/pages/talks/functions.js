'use strict'

const template = 'pages/talks/template.njk'

function get (req, res) {
  res.render(template, { title: 'Talks' })
}

module.exports = { get }
