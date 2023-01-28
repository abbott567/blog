const MarkdownIt = require('markdown-it')

function init (eleventyConfig) {
  const md = new MarkdownIt({
    html: true
  })
  eleventyConfig.addFilter('markdown', content => {
    if (content) return md.render(content)
  })
}

module.exports = { init }
