'use strict'

const template = 'pages/sitemap/template.njk'
const { sortByDate, paginate } = require('../../helpers/sort-posts')
const allPosts = require('../../posts/_config.json')

function get (req, res, next) {
  sortByDate(allPosts)
  const posts = paginate(allPosts, req.query.page)

  return res.render(template, { title: 'Sitemap', posts })
}

module.exports = { get }
