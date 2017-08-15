'use-strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('watch', done => {
  runSequence('watch-sass', done);
});

gulp.task('watch-sass', () => {
  return gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});

gulp.task('watch-js', () => {
  return gulp.watch('./src/assets/js/**/*.js', ['uglify']);
});
