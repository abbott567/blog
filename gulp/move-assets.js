'use-strict';

const gulp = require('gulp');

gulp.task('move-assets', () => {
  gulp.src('./src/assets/fonts/**.*')
  .pipe(gulp.dest('./public/fonts'));

  gulp.src('./src/assets/images/**.*')
  .pipe(gulp.dest('./public/images'));
});
