'use-strict';

function sortByDate(posts) {
  return posts.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return 1;
    } else if (a.createdAt < b.createdAt) {
      return -1;
    }
    return 0;
  }).reverse();
}

function paginate(allPosts, page) {
  if (page === undefined || page === '1') {
    return allPosts.slice(0, 10);
  }
  const padded = parseInt(page.padEnd(page.length + 1, '0'), 10);
  const arrayStart = padded - 10;
  const arrayEnd = arrayStart + 10;
  const pagePosts = allPosts.slice(arrayStart, arrayEnd);
  return pagePosts;
}

module.exports = {sortByDate, paginate};
