'use-strict'

const gulp = require('gulp')

gulp.task('watch-sass', done => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
  done()
})

gulp.task('watch-js', done => {
  gulp.watch('./src/javascripts/**/*', gulp.series('webpack'))
  done()
})

gulp.task('watch', gulp.series('watch-sass', 'watch-js'))
