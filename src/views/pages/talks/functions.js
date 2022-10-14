'use strict'

const fs = require('fs-jetpack')

const pathToPage = 'src/views/pages/talks'
const template = `${pathToPage}/template.njk`
const content = fs.read(`${pathToPage}/content.md`)

function get (req, res) {
  res.render(template, { title: 'Talks', content })
}

module.exports = { get }
