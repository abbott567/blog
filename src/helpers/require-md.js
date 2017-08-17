'use strict';

const fs = require('fs');

function requirePostAsString(slug) {
  require.extensions['.md'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
  };
  return require('../posts/' + slug + '/post.md');
}

module.exports = requirePostAsString;
