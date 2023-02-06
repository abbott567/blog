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
    const distPath = path.join(`${distDir}`, `${parts.name}`)
    const jpgPath = path.join(distPath + '.jpg')
    const webpPath = path.join(distPath + '.webp')

    // Make sure DIR exists
    fs.dir(distDir)

    if (parts.base.includes('share-image')) {
      if (!fs.exists(jpgPath)) {
        console.log(`[scripts] Converting ${distPath}.jpg`)
        sharp(path.resolve(srcPath))
          .toFile(jpgPath)
      }
      if (!fs.exists(webpPath)) {
        console.log(`[scripts] Converting ${distPath}.webp`)
        sharp(path.resolve(srcPath))
          .toFile(webpPath)
      }
    } else {
      if (!fs.exists(webpPath)) {
        console.log(`[scripts] Converting ${distPath}.webp`)
        sharp(path.resolve(srcPath))
          .toFile(webpPath)
      }
    }
  }
  console.log('[scripts] Converted all images')
}

module.exports = formatImages
