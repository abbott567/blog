const gulp = require('gulp')
require('./generate-xml-sitemap')

gulp.task('move:images', () => {
  return gulp.src('./src/assets/images/**.*')
    .pipe(gulp.dest('./public/images'))
})

gulp.task('move:robots', () => {
  return gulp.src('./src/assets/Robots.txt')
    .pipe(gulp.dest('./public'))
})

gulp.task('generate-assets', gulp.parallel([
  'move:images',
  'move:robots',
  'generate:sitemap'
]))
