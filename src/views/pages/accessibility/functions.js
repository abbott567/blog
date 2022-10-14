'use strict'

const fs = require('fs-jetpack')
const page = 'accessibility'
const template = `src/views/pages/${page}/template.njk`
const content = fs.read(`src/views/pages/${page}/content.md`)

function get (req, res) {
  res.render(template, { title: 'Accessibility', content })
}

module.exports = { get }
