'use-strict'

const gulp = require('gulp')

gulp.task('watch-sass', done => {
  gulp.watch('./src/**/*.scss', gulp.series('sass'))
  done()
})

gulp.task('watch-js', done => {
  gulp.watch('./src/assets/js/**/*.js', gulp.series('uglify'))
  done()
})

gulp.task('watch', gulp.series('watch-sass', 'watch-js'))
