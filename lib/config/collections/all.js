const postTags = require('../../../src/_data/postTags.json')
const fs = require('fs-jetpack')
const util = require('util')
function init (eleventyConfig) {
  eleventyConfig.addCollection('_posts', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'post')
      .sort((a, b) => b.date - a.date)
  })

  eleventyConfig.addCollection('_work', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'work')
      .sort()
  })

  eleventyConfig.addCollection('_talks', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'talk')
      .sort()
  })

  eleventyConfig.addCollection('_deck', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'deck')
      .sort()
  })

  for (const tag of postTags) {
    eleventyConfig.addCollection(`${tag}-posts`, collection => {
      return collection
        .getAll()
        .filter(post => post.data.contentType === 'post' && post.data.tags.includes(tag))
        .sort((a, b) => b.date - a.date)
    })
  }

  fs.write('_log/collections.txt', util.inspect(eleventyConfig.collections))
}

module.exports = { init }
