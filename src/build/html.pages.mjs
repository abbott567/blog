import buildEnv from './nunjucks.mjs'
import save from './html.save.mjs'
import minify from './html.minify.mjs'
import wcagifyLinks from './wcagify.mjs'
import { load } from 'cheerio'

function appendClickableClass (html) {
  const $ = load(html)
  $('img').each(function () {
    const link = $(this).closest('article').find('a').last()
    $(this).addClass('clickable')
    $(this).attr('data-location', link.attr('href'))
  })
  return $.html()
}
function buildBlogPages (site, page) {
  const filepath = process.env.NODE_ENV === 'test' ? 'test/assets/dist/pages' : 'dist/pages'
  const njk = buildEnv()
  // Set vars
  const numberOfPostsPerPage = 10
  const totalNumberOfPosts = site.posts.length
  const numberOfPages = totalNumberOfPosts / numberOfPostsPerPage
  // Create counts for slicing the posts array
  let from = 0
  let to = numberOfPostsPerPage
  for (let i = 0; i < numberOfPages; i++) {
    // Set page number
    const pageNo = i + 1
    // Get the next 10 posts
    const posts = site.posts.slice(from, to)
    // Decide whether it needs a link to older posts
    const older = (pageNo < numberOfPages)
    // Decide whether it needs a link to newer posts
    const newer = (i > 0)
    // Render the pages
    const html = njk.render(page.template, { site, page, posts, older, newer, pageNo })
    const clickableResult = appendClickableClass(html)
    // Minify the HTML
    const wcagified = wcagifyLinks(clickableResult)
    const minified = minify(wcagified)
    // Save the minified HTML
    save(`${filepath}/blog-${pageNo}.html`, minified)
    // Set the slicing counts for the next loop
    from += numberOfPostsPerPage
    to += numberOfPostsPerPage
  }
}

function buildPage (site, page) {
  const filepath = process.env.NODE_ENV === 'test' ? `test/assets/dist/pages/${page.slug}.html` : `dist/pages/${page.slug}.html`
  const njk = buildEnv()
  const html = njk.render(page.template, { site, page })
  const minified = minify(html)
  if (page.slug === 'work') {
    const clickableResult = appendClickableClass(minified)
    save(filepath, clickableResult)
  } else {
    save(filepath, minified)
  }
}

function buildPages (site) {
  console.log('Building pages'.yellow)
  site.pages.forEach(page => {
    if (page.slug === 'blog') buildBlogPages(site, page)
    else buildPage(site, page)
  })
  build404(site)
  console.log('Pages built'.green)
}

function build404 (site) {
  const srcPath = process.env.NODE_ENV === 'test' ? 'layouts/404.njk' : 'layouts/404.njk'
  const distPath = process.env.NODE_ENV === 'test' ? 'test/assets/dist/pages/404.html' : 'dist/pages/404.html'
  const njk = buildEnv()
  const html = njk.render(srcPath, { site })
  const minified = minify(html)
  save(distPath, minified)
}

export default buildPages
