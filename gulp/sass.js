'use-strict'

const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))

gulp.task('sass', () => {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public/stylesheets'))
})
