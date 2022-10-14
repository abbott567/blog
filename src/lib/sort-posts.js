'use-strict'

function sortByDate (posts) {
  return posts.sort((a, b) => {
    if (a.createdAt > b.createdAt) return 1
    else if (a.createdAt < b.createdAt) return -1
    return 0
  }).reverse()
}

const PAGE_LENGTH = 10
function paginate (allPosts, page = 1) {
  const index = (page * PAGE_LENGTH) - PAGE_LENGTH
  return allPosts.slice(index, index + PAGE_LENGTH)
}

module.exports = { sortByDate, paginate }
