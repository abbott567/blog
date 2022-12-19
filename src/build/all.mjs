import 'colors'
import buildDataModel from './data-model.mjs'
import buildPages from './html.pages.mjs'
import buildPosts from './html.posts.mjs'
import buildProjects from './html.projects.mjs'
import buildRSSFeed from './rss.feed.mjs'
import buildSitemap from './sitemap.mjs'
import save from './html.save.mjs'
import minify from './html.minify.mjs'
import images from './images.webp.mjs'
import clean from './clean-dist.mjs'
import compileCSS from './sass.mjs'
import compileJS from './client-js.mjs'

async function build () {
  const site = buildDataModel()
  clean.html()
  clean.css()
  clean.css()
  buildPages(site)
  buildPosts(site)
  buildProjects(site)
  buildSitemap()
  buildRSSFeed()
  images.moveOthers()
  await images.convertToWebp()
  await compileCSS()
  await compileJS()
  console.log('Build finished!'.rainbow)
}

export default {
  build,
  minify,
  save
}
