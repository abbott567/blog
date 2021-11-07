'use strict'

const template = 'pages/sitemap/template.njk'
const { sortByDate } = require('../../lib/sort-posts')
const pages = require('../../pages/_config.json')
const posts = require('../../posts/_config.json')

function get (req, res, next) {
  sortByDate(posts)
  return res.render(template, { title: 'Sitemap', pages, posts })
}

module.exports = { get }
