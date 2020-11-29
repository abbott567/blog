'use-strict'

const gulp = require('gulp')

gulp.task('move-assets', () => {
  return gulp.src('./src/assets/images/**.*')
    .pipe(gulp.dest('./public/images'))
})
