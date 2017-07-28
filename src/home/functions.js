'use strict';

const template = `${__dirname}/template.njk`;

function get(req, res) {
  res.render(template, {title: 'Express'});
}

function post(req, res) {
  res.render(template, {title: 'Express'});
}

module.exports = {get, post};
