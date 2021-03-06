'use-strict'

const gulp = require('gulp')

if (process.env.NODE_ENV === 'production') {
  gulp.task('default', gulp.series('sass', 'terser', 'move-assets'))
} else {
  gulp.task('default', gulp.series('sass', 'terser', 'move-assets', 'nodemon', 'watch'))
}
