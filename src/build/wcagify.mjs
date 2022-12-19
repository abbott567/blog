import wcagify from 'wcagify'
import { load } from 'cheerio'

function wcagifyLinks (html) {
  const $ = load(html)
  $('a').each(function () {
    const needsWcagified = $(this).attr('href') === ('%7Bwcagify%7D')
    if (needsWcagified) {
      const text = $(this).text()
      const result = wcagify(text)
      $(this).text(result.criterion)
      $(this).attr('href', result.link)
    }
  })
  return $.html()
}

export default wcagifyLinks
