'use strict'

const template = 'pages/accessibility/template.njk'

function get (req, res) {
  res.render(template, { title: 'Accessibility' })
}

module.exports = { get }
