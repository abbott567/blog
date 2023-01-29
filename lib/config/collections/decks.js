function init (eleventyConfig) {
  eleventyConfig.addCollection('_deck', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'deck')
      .sort()
  })
}

module.exports = { init }
