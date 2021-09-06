'use strict'

const template = 'pages/sitemap/template.njk'
const { sortByDate } = require('../../lib/sort-posts')
const allPosts = require('../../posts/_config.json')

function get (req, res, next) {
  sortByDate(allPosts)
  return res.render(template, { title: 'Sitemap', posts: allPosts })
}

module.exports = { get }
