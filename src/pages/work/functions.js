'use strict'

const template = 'pages/work/template.njk'

function get (req, res) {
  res.render(template, { title: 'Work' })
}

module.exports = { get }
