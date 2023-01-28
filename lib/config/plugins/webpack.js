const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

function init (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_client-js')
  if (process.env.NODE_ENV === 'dev') {
    watchWebpack()
  } else {
    runWebpack()
  }
}

function getCompiler () {
  const config = {
    entry: path.resolve('src/_client-js/app.mjs'),
    mode: 'none',
    stats: 'minimal',
    output: {
      path: path.resolve('_site/scripts'),
      filename: 'bundle.min.js'
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
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    resolve: {
      alias: {
        node_modules: path.resolve('node_modules')
      }
    }
  }
  return webpack(config)
}

function runWebpack () {
  const compiler = getCompiler()
  console.log('[11ty] Webpack attempting to compile')
  return compiler.run((err, stats) => {
    if (err) throw err
    console.log('[11ty] Webpack compiled sucessfully')
  })
}

function watchWebpack () {
  const compiler = getCompiler()
  console.log('[11ty] Webpack watching for changes')
  return compiler.watch({}, (err, stats) => {
    if (err) throw err
    console.log('[11ty] Webpack re-compiling')
    if (err) throw err
    runWebpack()
  })
}

module.exports = { init }
