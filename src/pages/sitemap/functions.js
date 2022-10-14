'use strict'

const page = 'sitemap'
const template = `src/pages/${page}/template.njk`

const { sortByDate } = require('../../lib/sort-posts')
const pages = require('../../pages/_config.json')
const posts = require('../../posts/_config.json')
const portfolio = require('../../pages/work/portfolio/_config')

function get (req, res, next) {
  sortByDate(posts)
  return res.render(template, { title: 'Sitemap', pages, posts, portfolio })
}

module.exports = { get }
