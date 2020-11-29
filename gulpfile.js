'use-strict'

const gulp = require('gulp')

require('./gulp/watch')
require('./gulp/nodemon')
require('./gulp/move-assets')
require('./gulp/sass')
require('./gulp/uglify')

gulp.task('default', gulp.series('sass', 'uglify', 'move-assets', 'nodemon', 'watch'))
