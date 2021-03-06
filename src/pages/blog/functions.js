'use strict'

const template = 'pages/blog/template.njk'
const { sortByDate, paginate } = require('../../helpers/sort-posts')
const allPosts = require('../../posts/_config.json')

function get (req, res, next) {
  sortByDate(allPosts)
  const posts = paginate(allPosts, req.query.page)
  const page = parseInt(req.query.page || 1, 10)
  const nextPage = allPosts[allPosts.length - 1] !== posts[posts.length - 1]
  if (page) {
    return res.render(template, { title: 'Blog', nextPage, posts, page })
  }
}

function checkPageQuery (req, res, next) {
  const pageQuery = parseInt(req.query.page, 10)
  if (pageQuery <= 1) {
    return res.redirect('/blog')
  }
  next()
}

module.exports = { get, checkPageQuery }
