import nunjucks from 'nunjucks'
import cmark from 'cmark-gfm'
import fs from 'fs-jetpack'

function buildEnv () {
  const views = process.env.NODE_ENV === 'test' ? 'test/assets/views' : 'src/app/views'
  const loader = new nunjucks.FileSystemLoader(views)
  const njk = new nunjucks.Environment(loader)

  // Markdown
  const options = { smart: true, unsafe: true }
  njk.addFilter('markdown', pathToContent => {
    const markdown = fs.read(`${views}/${pathToContent}`)
    const result = cmark.renderHtmlSync(markdown, options)
    return njk.filters.safe(result)
  })
  njk.addGlobal('year', new Date().getFullYear())

  return njk
}

export default buildEnv
