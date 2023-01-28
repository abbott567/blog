const stringSimilarity = require('string-similarity')
const chalk = require('chalk')
const getTags = require('../utils/get-tags')

const tagsArr = getTags('src/posts')
const similar = new Set()

function checkTagSimilarity () {
  console.log('[scripts] Checking post tags for similarity')
  for (const tag1 of tagsArr) {
    for (const tag2 of tagsArr) {
      const similarity = stringSimilarity.compareTwoStrings(tag1, tag2)
      if (tag1 !== tag2 && similarity > 0.8) {
        const matched = [tag1, tag2].sort()
        similar.add(JSON.stringify(matched))
      }
    }
  }

  for (const item of similar) {
    const matched = JSON.parse(item)
    const matchedMessage = `[scripts] ${matched[0]} and ${matched[1]} are pretty similar `
    console.log(chalk.bgYellow(matchedMessage))
  }
  console.log(chalk.green(`[scripts] Found ${similar.size} post tags which were similar`))
}

module.exports = checkTagSimilarity
