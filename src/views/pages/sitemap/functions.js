'use strict'

const pathToPage = 'src/views/pages/sitemap'
const template = `${pathToPage}/template.njk`

const { sortByDate } = require('../../../../lib/sort-posts')
const pages = require('../_config')
const posts = require('../../posts/_config')
const portfolio = require('../work-deep-dive/portfolio/_config')

function get (req, res, next) {
  sortByDate(posts)
  return res.render(template, { title: 'Sitemap', pages, posts, portfolio })
}

module.exports = { get }
