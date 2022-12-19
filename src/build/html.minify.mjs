import { minify as minifier } from 'html-minifier'

function minify (html) {
  const result = minifier(html, {
    collapseWhitespace: true,
    removeComments: true
  })
  return result
}

export default minify
