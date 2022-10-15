'use strict'

const fs = require('fs-jetpack')

const pathToPage = 'src/views/pages/work-deep-dive'
const pathToPortfolio = 'src/views/pages/work-deep-dive/portfolio'
const template = `${pathToPage}/template.njk`

function get (req, res, next) {
  const slug = req.params.slug
  const workExists = fs.exists(`${pathToPortfolio}/${slug}/post.md`) === 'file'
  if (workExists) {
    const config = require(`./portfolio/${slug}/_config`)
    req.config = config
    return res.render(template, { title: 'Portfolio', config })
  // } else {
  //   return res.redirect('/work')
  }
  next()
}

module.exports = { get }
