'use-strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

gulp.task('uglify', cb => {
  pump([
    gulp.src([
      './node_modules/jquery/dist/jquery.slim.min.js',
      './node_modules/js-cookie/src/js.cookie.js',
      './src/assets/js/*.js'
    ]),
    concat('application.js'),
    uglify(),
    gulp.dest('./public/js')
  ],
  cb
  );
});
