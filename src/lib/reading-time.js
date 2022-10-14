'use strict'

const fs = require('fs-jetpack')

function forText (text) {
  const wordsPerMinute = 260
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minutes`
}

function forFile (pathToFile) {
  const text = fs.read(pathToFile)
  const wordsPerMinute = 260
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minutes`
}

module.exports = { forText, forFile }
