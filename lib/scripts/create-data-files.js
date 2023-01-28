const fs = require('fs-jetpack')
const getTags = require('../utils/get-tags')

function cleanDataFiles () {
  fs.remove('src/_data/postTags.json')
}

function createPostTagsData () {
  const postTags = getTags('src/posts')
  fs.write('src/_data/postTags.json', JSON.stringify(postTags, null, 2))
}

function createDataFiles () {
  cleanDataFiles()
  createPostTagsData()
}

module.exports = createDataFiles
