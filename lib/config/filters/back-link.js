function init (eleventyConfig) {
  eleventyConfig.addFilter('backLink', url => {
    const pieces = url.split('/')
    pieces.splice(-2)
    const reassembled = pieces.join('/')
    return reassembled
  })
}

module.exports = { init }
