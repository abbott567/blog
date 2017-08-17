'use strict';

function readingTime(text) {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s./g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} minute read`;
}

module.exports = readingTime;