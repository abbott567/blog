'use-strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

gulp.task('uglify', cb => {
  pump([
    gulp.src([
      './src/assets/js/*.js',
      '!./src/assets/js/ga.js'
    ]),
    concat('application.js'),
    uglify(),
    gulp.dest('./public/js')
  ],
  cb
  );
});
