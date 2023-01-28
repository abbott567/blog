const fs = require('fs-jetpack')

function init (eleventyConfig) {
  console.log('[11ty] Adding passThroughCopy for fonts')
  const fonts = fs.find('src', { matching: ['**/*.woff', '**/*.woff2'] })
  for (const srcPath of fonts) {
    console.log(`[11ty] Copying ${srcPath}`)
    eleventyConfig.addPassthroughCopy(srcPath)
  }
  console.log('[11ty] Finished adding passThroughCopy for fonts')
}

module.exports = { init }
