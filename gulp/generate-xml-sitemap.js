const fs = require('fs')
const gulp = require('gulp')
const pages = require('../src/pages/_config.json')
const posts = require('../src/posts/_config.json')

gulp.task('generate:sitemap', async () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  pages.forEach(page => {
    xml += '  <url>\n'
    xml += `    <loc>https://www.craigabbott.co.uk${page.slug}</loc>\n`
    if (page.title === 'Blog') {
      xml += '    <changefreq>monthly</changefreq>\n'
      xml += '    <priority>1.0</priority>\n'
    }
    xml += '  </url>\n'
  })
  posts.forEach(post => {
    xml += '  <url>\n'
    xml += `    <loc>https://www.craigabbott.co.uk/blog/${post.slug}</loc>\n`
    xml += '  </url>\n'
  })
  xml += '</urlset>'
  fs.writeFile('public/sitemap.xml', xml, function (err) {
    if (err) throw (err)
  })
})
