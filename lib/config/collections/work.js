function init (eleventyConfig) {
  eleventyConfig.addCollection('_work', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'work')
      .sort()
  })
}

module.exports = { init }
