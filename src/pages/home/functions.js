'use strict';

const template = `${__dirname}/template.njk`;
const posts = require('../../helpers/sort-posts');

function get(req, res) {
  return res.render(template, {title: 'Home', posts});
}

module.exports = {get};
