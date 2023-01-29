function init (eleventyConfig) {
  eleventyConfig.addCollection('_posts', collection => {
    return collection.getAll()
      .filter(post => post.data.contentType === 'post')
      .sort((a, b) => b.date - a.date)
  })
}

module.exports = { init }
