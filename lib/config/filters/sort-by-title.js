function init (eleventyConfig) {
  eleventyConfig.addFilter('sortByTitle', array => {
    const sorted = array.sort((a, b) => a.data.title.localeCompare(b.data.title))
    return sorted
  })
}

module.exports = { init }
