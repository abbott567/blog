'use-strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', done => {
  runSequence('sass', 'uglify', 'nodemon', 'watch', done);
});
