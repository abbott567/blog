'use strict'

const template = 'pages/home/template.njk'

function get (req, res) {
  res.render(template, { title: 'Home' })
}

module.exports = { get }
