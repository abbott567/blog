'use-strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('nodemon', () => {
  nodemon(
    {
      script: './bin/www',
      ext: '*'
    }
  );
});
