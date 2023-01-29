function init (eleventyConfig) {
  eleventyConfig.addCollection('_posts', collection => {
    return collection.getAll().filter(post => post.data.contentType === 'post')
  })

  eleventyConfig.addCollection('_work', collection => {
    return collection.getAll().filter(post => post.data.contentType === 'work')
  })

  eleventyConfig.addCollection('_talks', collection => {
    return collection.getAll().filter(post => post.data.contentType === 'talk')
  })

  eleventyConfig.addCollection('_deck', collection => {
    return collection.getAll().filter(post => post.data.contentType === 'deck')
  })
}

module.exports = { init }
