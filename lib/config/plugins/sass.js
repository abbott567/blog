const eleventySass = require('eleventy-sass')
const postcss = require('postcss')
const cssnano = require('cssnano')

function init (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_sass')
  eleventyConfig.addPlugin(eleventySass, {
    compileOptions: {
      permalink: function (contents, inputPath) {
        return (data) => data.page.filePathStem.replace(/^\/_sass\//, '/css/') + '.css'
      }
    },
    sass: {
      style: 'compressed',
      sourceMap: false
    },
    postcss: postcss([cssnano])
  })
}

module.exports = { init }
