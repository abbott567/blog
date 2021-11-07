const gulp = require('gulp')
require('./generate-xml-sitemap')

gulp.task('move:images', () => {
  return gulp.src('./src/assets/images/**.*')
    .pipe(gulp.dest('./public/images'))
})

gulp.task('generate-assets', gulp.parallel([
  'move:images',
  'generate:sitemap'
]))
