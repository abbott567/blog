const gulp = require('gulp')
require('./generate-xml-sitemap')
require('./generate-xml-feed')

gulp.task('move:images', () => {
  return gulp.src('./src/assets/images/**.*')
    .pipe(gulp.dest('./public/images'))
})

gulp.task('generate-assets', gulp.parallel([
  'move:images',
  'generate:sitemap',
  'generate:feed'
]))
