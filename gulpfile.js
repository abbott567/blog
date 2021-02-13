'use-strict'

const gulp = require('gulp')

require('./gulp/watch')
require('./gulp/nodemon')
require('./gulp/move-assets')
require('./gulp/sass')
require('./gulp/terser')

gulp.task('default', gulp.series('sass', 'terser', 'move-assets', 'nodemon', 'watch'))
