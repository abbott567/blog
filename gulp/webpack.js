'use-strict'

const gulp = require('gulp')
const terser = require('gulp-terser')
const webpack = require('webpack-stream')

const webpackConfig = {
  mode: 'none',
  output: {
    filename: 'application.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}

const path = require('path')

gulp.task('webpack', () => {
  return gulp
    .src(path.resolve('src/views/assets/js/application.mjs'))
    .pipe(webpack(webpackConfig))
    .pipe(terser())
    .pipe(gulp.dest(path.resolve('public/js')))
})
