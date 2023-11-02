const cheerio = require('cheerio')
const slugify = require('slugify')
const wcagify = require('wcagify')

function init (eleventyConfig) {
  console.log('[11ty] Modifying outputted HTML')
  eleventyConfig.addTransform('modifyHTML', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const $ = cheerio.load(content)
      modifyHeadings($)
      modifyCodeBlocks($)
      wcagifyLinks($)
      return $.html()
    }
    return content
  })
  console.log('[11ty] Finished modifying outputted HTML')
}

function modifyHeadings ($) {
  $('h1, h2, h3, h4, h5, h6').each(function () {
    const $heading = $(this)
    const id = slugify($heading.text(), { lower: true, strict: true })
    $heading.attr('id', id)
  })
}

function modifyCodeBlocks ($) {
  $('pre').each(function () {
    const $codeblock = $(this).find('code')
    if ($codeblock) {
      $codeblock.attr('tabindex', '0')
      $codeblock.attr('role', 'figure')
    }
  })
}

function wcagifyLinks ($) {
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

module.exports = { init }
