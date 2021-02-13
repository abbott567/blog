'use strict'

const template = 'pages/privacy/template.njk'

function get (req, res) {
  res.render(template, { title: 'Privacy' })
}

module.exports = { get }
