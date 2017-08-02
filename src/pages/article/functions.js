'use strict';

const template = `${__dirname}/template.njk`;
const posts = require('../../posts/_config.json').sort().reverse();

function get(req, res, next) {
  const slug = req.params.slug;
  const post = findPostBySlug(slug);

  if (post) {
    return res.render(template, {title: post.title, post});
  }

  next();
}

function findPostBySlug(slug) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].slug === slug) {
      return posts[i];
    }
    return false;
  }
}

module.exports = {get, findPostBySlug};
