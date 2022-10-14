'use strict'

const fs = require('fs-jetpack')
const page = 'privacy'
const template = `src/pages/${page}/template.njk`
const content = fs.read(`src/pages/${page}/content.md`)

function get (req, res) {
  res.render(template, { title: 'Privacy', content })
}

module.exports = { get }
