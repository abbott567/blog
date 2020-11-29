'use-strict'

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('nodemon', done => {
  nodemon(
    {
      script: './bin/www',
      ext: '*'
    }
  ).on('quit', () => {
    process.exit(0)
  }, done())
})
