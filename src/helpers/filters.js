'use-strict';

const formatDate = require('date-fns/format');

function loadFilters(env) {
  env.addFilter('formatDate', timestamp => {
    return formatDate(timestamp, 'D MMMM YYYY');
  });
}

module.exports = loadFilters;
