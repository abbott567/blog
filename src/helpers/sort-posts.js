'use-strict';

const posts = require('../posts/_config.json');

function sortPosts() {
  return posts.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return 1;
    } else if (a.createdAt < b.createdAt) {
      return -1;
    }
    return 0;
  }).reverse();
}

module.exports = sortPosts();
