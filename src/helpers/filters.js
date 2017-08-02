'use-strict';

function loadFilters(env) {
  env.addFilter('formatDate', str => {
    return str.slice(0, 5);
  });
}

module.exports = loadFilters;
