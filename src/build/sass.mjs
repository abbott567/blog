import sass from 'sass'
import fs from 'fs-jetpack'
import postcss from 'postcss'
import cssnano from 'cssnano'
import litePreset from 'cssnano-preset-lite'
import autoprefixer from 'autoprefixer'

async function buildSass () {
  const sassResult = sass.compile('src/app/sass/app.scss')
  const css = sassResult.css
  return css
}

async function compressCSS (css) {
  const preset = litePreset({ discardComments: true })
  const cssNanoConfig = [cssnano({ preset, plugins: [autoprefixer] })]
  const postCSSResult = await postcss(cssNanoConfig).process(css, { from: '/css/style.css' })
  const result = postCSSResult.css
  return result
}

async function compileCSS () {
  console.log('Compiling SASS'.yellow)
  const css = await buildSass()
  const compressed = await compressCSS(css)
  await fs.write('dist/css/style.css', compressed)
  console.log('SASS compiled'.green)
}

export default compileCSS
