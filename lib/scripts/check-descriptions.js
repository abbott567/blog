const jetpack = require('fs-jetpack')
const matter = require('gray-matter')
const chalk = require('chalk')

function checkDescriptions () {
  console.log('[scripts] Checking meta descriptions')
  const formats = [
    '**/*.md',
    '**/*.njk',
    '!_includes/**/*',
    '!_drafts/**/*'
  ]
  const files = jetpack.find('src', { matching: formats })
  for (const file of files) {
    const desc = getDesc(file)
    if (desc) {
      if (desc.length < 50) {
        console.log(chalk.yellow(`[scripts] Meta description is less than 50 characters (▲ ${desc.length}) for ${file}`))
      } else if (desc.length > 70) {
        console.log(chalk.yellow(`[scripts] Meta description is more than 70 characters (▼ ${desc.length}) for ${file}`))
      }
    } else {
      console.log(chalk.red(`[scripts] No description for ${file}`))
    }
  }
  console.log('[scripts] Finished checking meta descriptions')
}

function getDesc (file) {
  const content = jetpack.read(file)
  const data = matter(content).data
  const hasComputedMeta = data.eleventyComputed?.meta?.description
  const hasRegulatMeta = data.meta !== undefined

  if (hasComputedMeta) {
    const desc = data.eleventyComputed.meta.description
    return desc
  }
  if (hasRegulatMeta) {
    const desc = data.meta.description
    return desc
  }
}

module.exports = checkDescriptions
