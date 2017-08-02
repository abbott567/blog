'use strict';

const template = `${__dirname}/template.njk`;
const posts = require('../../posts/_config.json').sort().reverse();

function get(req, res) {
  return res.render(template, {title: 'Home', posts});
}

module.exports = {get};
