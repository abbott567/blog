'use-strict'

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const pump = require('pump')
const concat = require('gulp-concat')

gulp.task('uglify', () => {
  return pump([
    gulp.src([
      './src/assets/js/*.js'
    ]),
    concat('application.js'),
    uglify(),
    gulp.dest('./public/js')
  ])
})
