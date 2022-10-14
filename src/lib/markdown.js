const marked = require('marked')
const wcagifyMarked = require('wcagify/markedjs')
const overrides = require('./markdown-overrides')
const hljs = require('highlight.js')

function setup () {
  const renderer = new marked.Renderer()
  wcagifyMarked(renderer)

  // Add custom functionality to Markdown
  overrides.code(renderer)
  overrides.heading(renderer)
  overrides.paragraph(renderer)
  overrides.list(renderer)

  // Set render options
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    highlight: function (code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'text'
      if (validLanguage) {
        return hljs.highlight(code, { language: validLanguage }).value
      }
    }
  })
}

function compile (markdown) {
  return marked.parse(markdown)
}

module.exports = { compile, setup }
