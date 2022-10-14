'use strict'

const fs = require('fs-jetpack')
const page = 'accessibility'
const template = `src/pages/${page}/template.njk`
const content = fs.read(`src/pages/${page}/content.md`)

function get (req, res) {
  res.render(template, { title: 'Accessibility', content })
}

module.exports = { get }
