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
      `${parts.name}.webp`
    )
    console.log(`[scripts] Converting ${distPath}`)
    if (parts.base.includes('share-image')) {
      const distPath = path.join(
        `${distDir}`,
        `${parts.name}.jpg`
      )
      sharp(path.resolve(srcPath))
        .toFile(path.resolve(distPath))
    } else {
      const distPath = path.join(
        `${distDir}`,
        `${parts.name}.webp`
      )
      sharp(path.resolve(srcPath))
        .toFile(path.resolve(distPath))
    }
  }
  console.log('[scripts] Converted all images')
}

module.exports = formatImages
