const chalk = require('chalk')
const cleanGenerators = require('./clean-generators')
const createPostTagGenerators = require('./create-post-tag-generators')
const createDataFiles = require('./create-data-files')
const checkTagSimilarity = require('./check-tag-similarity')
const formatImages = require('./format-images')

async function runScripts (eleventyConfig) {
  const startTime = performance.now()
  await cleanGenerators()
  formatImages()
  checkTagSimilarity()
  createPostTagGenerators()
  createDataFiles()
  const endTime = performance.now()
  console.log(chalk.yellow(`[scripts] completed in ${(endTime - startTime).toFixed(2)} milliseconds`))
}

runScripts()
