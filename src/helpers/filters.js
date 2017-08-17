'use-strict';

const formatDate = require('date-fns/format');
const readingTime = require('../helpers/reading-time');
const requirePostAsString = require('../helpers/require-md');

function loadFilters(env) {
  env.addFilter('formatDate', timestamp => {
    return formatDate(timestamp, 'D MMMM YYYY');
  });

  env.addFilter('readTime', post => {
    const text = requirePostAsString(post);
    return readingTime(text);
  });
}

module.exports = loadFilters;
