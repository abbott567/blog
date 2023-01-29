function init (eleventyConfig) {
  eleventyConfig.addCollection('_talks', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'talk')
      .sort()
  })
}

module.exports = { init }
