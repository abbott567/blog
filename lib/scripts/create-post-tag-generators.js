const fs = require('fs-jetpack')
const chalk = require('chalk')
const getTags = require('../utils/get-tags')
const matter = require('gray-matter')

const generatorTemplate = fs.read('src/pages/blog.njk')
const tagsArr = getTags('src/posts')

function modifyFrontmatter (tag) {
  const content = generatorTemplate.replace('_posts', tag)
  const data = matter(content).data
  data.layout = 'layouts/blog-page.njk'
  data.pagination.data = `collections.${tag}`
  data.permalink = `/blog/tags/${tag}/{{"page-" + (pagination.pageNumber + 1) if pagination.pageNumber > 0}}/`
  data.eleventyComputed = {
    title: `Posts tagged with ‘${tag}’ {{"- Page " + (pagination.pageNumber + 1) if pagination.pageNumber > 0}}`
  }
  return data
}

function createPostGenerators () {
  console.log('[scripts] Building eleventy post generators from tags')
  let count = 0
  for (const tag of tagsArr) {
    const data = modifyFrontmatter(tag)
    console.log(`[scripts] Writing src/script-outputs/posts-tagged-with-${tag}.njk`)
    fs.write(`src/script-outputs/posts-tagged-with-${tag}.njk`, matter.stringify('', data))
    count++
  }
  console.log(chalk.green(`[scripts] Created ${count} post generators for eleventy`))
}

module.exports = createPostGenerators
