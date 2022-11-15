'use strict'

const gulp = require('gulp')
require('./generate-xml-sitemap')
require('./generate-xml-feed')

gulp.task('copy:images', () => {
  return gulp.src('./src/assets/images/**/*.*')
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('generate-assets', gulp.parallel([
  'copy:images',
  'generate:sitemap',
  'generate:feed'
]))
