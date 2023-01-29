const postTags = require('../../../src/_data/postTags.json')

function init (eleventyConfig) {
  for (const tag of postTags) {
    eleventyConfig.addCollection(`${tag}-posts`, collection => {
      return collection
        .getAll()
        .filter(post => post.data.contentType === 'post' && post.data.tags.includes(tag))
        .sort((a, b) => b.date - a.date)
    })
  }
}

module.exports = { init }
