'use strict';

const template = `${__dirname}/template.njk`;

function get(req, res) {
  return res.render(template, {title: 'Article'});
}

module.exports = {get};
