'use-strict'

const gulp = require('gulp')

gulp.task('move:images', () => {
  return gulp.src('./src/assets/images/**.*')
    .pipe(gulp.dest('./public/images'))
})

gulp.task('move:robots', () => {
  return gulp.src('./src/assets/robots.txt')
    .pipe(gulp.dest('./public'))
})

gulp.task('move-assets', gulp.parallel([
  'move:images',
  'move:robots'
]))
