'use strict'

const gulp = require('gulp')
require('./generate-xml-sitemap')
require('./generate-xml-feed')

gulp.task('copy:images', () => {
  return gulp.src('./src/assets/images/**/*.*')
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('copy:downloads', () => {
  return gulp.src('./src/assets/downloads/**/*.*')
    .pipe(gulp.dest('./dist/downloads'))
})

gulp.task('generate-assets', gulp.parallel([
  'copy:images',
  'copy:downloads',
  'generate:sitemap',
  'generate:feed'
]))
