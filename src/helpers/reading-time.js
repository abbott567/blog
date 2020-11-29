'use strict'

function readingTime (text) {
  const wordsPerMinute = 260
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minutes`
}

module.exports = readingTime
