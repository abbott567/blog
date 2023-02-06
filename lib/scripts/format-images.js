const sharp = require('sharp')
const fs = require('fs-jetpack')
const path = require('path')

async function formatImages () {
  console.log('[scripts] Converting images to webp')
  const formats = [
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.png',
    '**/*.webp'
  ]
  const images = fs.find('src', { matching: formats })
  for (const srcPath of images) {
    const parts = path.parse(srcPath)
    const distDir = `${parts.dir.replace('src', '_site')}`
    fs.dir(distDir)
    const distPath = path.join(
      `${distDir}`,
      `${parts.name}`
    )
    if (parts.base.includes('share-image')) {
      const distPath = path.join(
        `${distDir}`,
        `${parts.name}`
      )
      console.log(`[scripts] Converting ${distPath}.jpg`)
      await sharp(path.resolve(srcPath))
        .toFile(path.resolve(distPath + '.jpg'))
      console.log(`[scripts] Converting ${distPath}.webp`)
      await sharp(path.resolve(srcPath))
        .toFile(path.resolve(distPath + '.webp'))
    } else {
      console.log(`[scripts] Converting ${distPath}.webp`)
      sharp(path.resolve(srcPath))
        .toFile(path.resolve(distPath + '.webp'))
    }
  }
  console.log('[scripts] Converted all images')
}

module.exports = formatImages
