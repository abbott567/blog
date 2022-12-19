import colours from 'colors'
import watch from 'node-watch'
import compileCSS from '../build/sass.mjs'
import compileJS from '../build/client-js.mjs'
import buildPages from '../build/html.pages.mjs'
import buildPosts from '../build/html.posts.mjs'
import buildProjects from '../build/html.projects.mjs'
import buildRSSFeed from '../build/rss.feed.mjs'
import buildSitemap from '../build/sitemap.mjs'
import images from '../build/images.webp.mjs'
import browserSync from './browser-sync.mjs'

function watchPages (site) {
  console.log(colours.yellow('Watching src/app/pages for changes'))
  watch([
    'src/app/views/pages',
    'src/app/views/layouts',
    'src/app/views/components'
  ], { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    buildPages(site)
    buildSitemap()
    const bs = browserSync()
    bs.reload()
  })
}

function watchPosts (site) {
  console.log(colours.yellow('Watching src/app/posts for changes'))
  watch('src/app/views/posts', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    buildPosts(site)
    buildRSSFeed()
    buildSitemap()
    const bs = browserSync()
    bs.reload()
  })
}

function watchProjects (site) {
  console.log(colours.yellow('Watching src/app/projects for changes'))
  watch('src/app/views/projects', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    buildProjects(site)
    buildSitemap()
    const bs = browserSync()
    bs.reload()
  })
}

function watchImages () {
  console.log(colours.yellow('Watching src/app/images for changes'))
  watch('src/app/images', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    images.convertToWebp()
    images.moveOthers()
    const bs = browserSync()
    bs.reload()
  })
}

function watchSass () {
  console.log(colours.yellow('Watching src/app/sass for changes'))
  watch('src/app/sass', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    compileCSS()
    const bs = browserSync()
    bs.reload()
  })
}

function watchFrontendJS () {
  console.log(colours.yellow('Watching src/app/client for changes'))
  watch('src/app/client', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    compileJS()
    const bs = browserSync()
    bs.reload()
  })
}

function watchAll (site) {
  watchPages(site)
  watchPosts(site)
  watchProjects(site)
  watchSass()
  watchFrontendJS()
  watchImages()
  browserSync()
}

export default watchAll
