'use strict'

const fs = require('fs-jetpack')
const page = 'privacy'
const template = `src/views/pages/${page}/template.njk`
const content = fs.read(`src/views/pages/${page}/content.md`)

function get (req, res) {
  res.render(template, { title: 'Privacy', content })
}

module.exports = { get }
