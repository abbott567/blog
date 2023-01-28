const fs = require('fs-jetpack')
const matter = require('gray-matter')

function getTags (folder) {
  const uniqTags = new Set()
  const files = fs.find(folder, { matching: '*.md' })
  for (const file of files) {
    const content = fs.read(file)
    const template = matter(content)
    if (template.data.tags) {
      for (const tag of template.data.tags) {
        uniqTags.add(tag)
      }
    }
  }
  return [...uniqTags]
}

module.exports = getTags
