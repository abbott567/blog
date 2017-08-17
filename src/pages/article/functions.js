'use strict';

const posts = require('../../posts/_config.json');
const readingTime = require('../../helpers/reading-time');
const requirePostAsString = require('../../helpers/require-md');

const template = `${__dirname}/template.njk`;

function get(req, res, next) {
  const slug = req.params.slug;
  const post = findPostBySlug(slug);
  const text = requirePostAsString(slug);
  const readTime = readingTime(text);

  if (post) {
    return res.render(template, {title: post.title, readTime, post});
  }

  next();
}

function findPostBySlug(slug) {
  return posts.find(post => post.slug === slug) || false;
}

module.exports = {get, findPostBySlug};
