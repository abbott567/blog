'use strict'

const fs = require('fs-jetpack')

const pathToPage = 'src/views/pages/home'
const template = `${pathToPage}/template.njk`

function get (req, res) {
  const content = fs.read(`${pathToPage}/content.md`)
  res.render(template, { title: 'Home', content })
}

module.exports = { get }
