import fs from 'fs-jetpack'
import buildDataModel from './data-model.mjs'

function buildRSSFeed () {
  console.log('Building RSS feed'.yellow)
  const site = buildDataModel()
  let xml = ''
  xml += '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom"  xmlns:dc="http://purl.org/dc/elements/1.1/">\n'
  xml += '  <channel>\n'
  xml += '    <link>https://www.craigabbott.co.uk/blog</link>\n'
  xml += '    <atom:link href="https://www.craigabbott.co.uk/feed.xml" rel="self" type="application/rss+xml" />\n'
  xml += '    <title>Blog - craigabbott.co.uk</title>\n'
  xml += '    <description>This is my personal blog. Topics cover Accessibility, UX Design and Frontend Development.</description>\n'
  xml += '    <language>en-GB</language>\n'
  xml += '    <image>\n'
  xml += '      <title>Blog - craigabbott.co.uk</title>\n'
  xml += '      <link>https://www.craigabbott.co.uk/blog</link>\n'
  xml += '      <url>https://www.craigabbott.co.uk/images/share-image-1.webp</url>\n'
  xml += '    </image>\n'
  site.posts.forEach(post => {
    xml += '    <item>\n'
    xml += `      <title>${post.title}</title>\n`
    xml += `      <description><![CDATA[<p>${post.meta.description}</p>]]></description>\n`
    xml += `      <pubDate>${post.date.rss}</pubDate>\n`
    xml += `      <link>https://www.craigabbott.co.uk/blog/${post.slug}</link>\n`
    xml += `      <guid isPermaLink="false">https://www.craigabbott.co.uk/blog/${post.slug}</guid>`
    xml += '    </item>\n'
  })
  xml += '  </channel>\n'
  xml += '</rss>'
  fs.write('dist/feed.xml', xml)
  console.log('RSS feed built'.green)
}

export default buildRSSFeed
