import path from 'path'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import version from '../app/server/cache-control/config.mjs'

const config = {
  entry: path.resolve('src/app/client/scripts.mjs'),
  mode: 'none',
  stats: 'minimal',
  output: {
    path: path.resolve('dist/scripts'),
    filename: `bundle.min.${version.js}.js`
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
  }
}

function compileJS () {
  console.log('Compiling client JS'.yellow)
  const compiler = webpack(config)
  compiler.run((err, res) => {
    if (err) throw err
  })
  console.log('Client JS compiled'.green)
}

export default compileJS
