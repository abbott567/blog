'use-strict'

const gulp = require('gulp')

if (process.env.NODE_ENV === 'production') {
  gulp.task('default', gulp.series('clean', 'sass', 'generate-assets', 'webpack', 'nodemon'))
} else {
  gulp.task('default', gulp.series('clean', 'sass', 'generate-assets', 'webpack', 'nodemon', 'watch'))
}
