function calculateReadTime (string, options = {}) {
  const wordsPerMinute = options.wordPerMinute || 350
  const noOfWords = string.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  if (readTime === 1) return `${readTime} minute`
  else return `${readTime} minutes`
}

module.exports = calculateReadTime
