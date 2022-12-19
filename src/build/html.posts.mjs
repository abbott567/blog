import buildEnv from './nunjucks.mjs'
import save from './html.save.mjs'
import minify from './html.minify.mjs'
import slugify from 'slugify'
import { load } from 'cheerio'
import hljs from 'highlight.js/lib/common'
import wcagifyLinks from './wcagify.mjs'

function buildPost (site, post) {
  const filepath = process.env.NODE_ENV === 'test' ? `test/assets/dist/posts/${post.slug}.html` : `dist/posts/${post.slug}.html`
  const njk = buildEnv()
  const html = njk.render('layouts/post.njk', { site, post })
  const $ = load(html)

  $('h1, h2, h3, h4, h5, h6').each(function () {
    const $heading = $(this)
    const id = slugify($heading.text(), { lower: true, strict: true })
    $heading.attr('id', id)
  })

  const $h1 = $('h1')
  const dl = njk.render('components/article-info.njk', { post })
  $h1.after(dl)

  $('pre').each(function () {
    const $codeblock = $(this).find('code')
    if ($codeblock) {
      const code = $codeblock.text()
      const lang = $codeblock.attr('class').split('-').pop()
      const highlighted = hljs.highlight(code, { language: lang }).value
      $codeblock.attr('tabindex', '0')
      $codeblock.html(highlighted)
    }
  })

  const wcagified = wcagifyLinks($.html())
  const minified = minify(wcagified)
  save(filepath, minified)
}

function buildPosts (site) {
  console.log('Building Posts'.yellow)
  site.posts.forEach(post => {
    buildPost(site, post)
  })
  console.log('Posts built'.green)
}

export default buildPosts
