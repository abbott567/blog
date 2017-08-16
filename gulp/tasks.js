'use-strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', done => {
  if (process.env.NODE_ENV !== 'production') {    
    return runSequence('sass', 'uglify', 'move-assets', 'nodemon', 'watch', done);
  }
  runSequence('sass', 'uglify', 'move-assets', done);
});
