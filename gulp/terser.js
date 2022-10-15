'use-strict'

const gulp = require('gulp')
const terser = require('gulp-terser')
const pump = require('pump')
const concat = require('gulp-concat')

gulp.task('terser', () => {
  return pump([
    gulp.src([
      './src/views/assets/js/*.js'
    ]),
    concat('application.js'),
    terser(),
    gulp.dest('./public/js')
  ])
})
