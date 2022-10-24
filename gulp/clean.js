const gulp = require('gulp')
const clean = require('gulp-clean')

gulp.task('clean:js', function () {
  return gulp.src('dist/js', { read: false })
    .pipe(clean())
})

gulp.task('clean:stylesheets', function () {
  return gulp.src('dist/stylesheets', { read: false })
    .pipe(clean())
})

gulp.task('clean:feed', function () {
  return gulp.src('dist/feed.xml', { read: false })
    .pipe(clean())
})

gulp.task('clean:sitemap', function () {
  return gulp.src('dist/sitemap.xml', { read: false })
    .pipe(clean())
})

gulp.task('clean', gulp.parallel(['clean:js', 'clean:stylesheets', 'clean:feed', 'clean:sitemap']))