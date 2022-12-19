import fs from 'fs-jetpack'
import buildDataModel from './data-model.mjs'

function buildSitemap () {
  console.log('Building sitemap'.yellow)
  const site = buildDataModel()
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  site.pages.forEach(page => {
    xml += '  <url>\n'
    xml += `    <loc>https://www.craigabbott.co.uk/${page.slug}</loc>\n`
    if (page.title === 'Blog') {
      xml += '    <changefreq>monthly</changefreq>\n'
      xml += '    <priority>1.0</priority>\n'
    }
    xml += '  </url>\n'
  })
  site.posts.forEach(post => {
    xml += '  <url>\n'
    xml += `    <loc>https://www.craigabbott.co.uk/blog/${post.slug}</loc>\n`
    xml += '  </url>\n'
  })
  site.projects.forEach(project => {
    xml += '  <url>\n'
    xml += `    <loc>https://www.craigabbott.co.uk/work/${project.slug}</loc>\n`
    xml += '  </url>\n'
  })
  xml += '</urlset>'
  fs.write('dist/sitemap.xml', xml)
  console.log('Sitemap built'.green)
}

export default buildSitemap
