import fs from 'fs-jetpack'

function calculateReadTime (string, options = {}) {
  const wordsPerMinute = options.wordPerMinute || 260
  const noOfWords = string.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  if (readTime === 1) return `${readTime} minute`
  else return `${readTime} minutes`
}

function forString (string, options) {
  return calculateReadTime(string, options)
}

function forFile (pathToFile, options) {
  const string = fs.read(pathToFile)
  return calculateReadTime(string, options)
}

export default { forString, forFile }
