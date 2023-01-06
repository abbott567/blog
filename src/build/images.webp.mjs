import webp from 'webp-converter'
import fs from 'fs-jetpack'
import slash from 'slash'

webp.grant_permission()

async function convertToWebp () {
  console.log('Converting compatible images to webp'.yellow)
  // Set folder paths
  const srcPath = process.env.NODE_ENV === 'test' ? 'test/assets/images' : 'src/app/images'
  const distpath = process.env.NODE_ENV === 'test' ? 'test/assets/dist/images' : 'dist/images'
  // Set up images folder if it doesn't exist
  fs.dir(distpath)
  // List the files in the image directory
  const images = fs.find(srcPath, { matching: ['**/*.jpg', '**/*.jpeg', '**/*.png'] })
  // Loop through each image
  for (const image of images) {
    const cleanedPath = slash(image)
    const filenameWithExt = cleanedPath.substring(cleanedPath.lastIndexOf('/') + 1)
    const filenameWithoutExt = filenameWithExt.split('.')[0]
    const foldersFullPath = cleanedPath.substring(0, image.lastIndexOf(filenameWithExt))
    const foldersRelPath = foldersFullPath.split(`${srcPath}/`)[1]
    const outPutFolder = `${distpath}/${foldersRelPath}`

    const outputFile = `${outPutFolder}${filenameWithoutExt}.webp`
    // Make sure output folder exists
    fs.dir(outPutFolder)
    // Convert to webp
    if (!fs.read(outputFile)) {
      await webp.cwebp(image, outputFile, '-q 80')
    }
  }
  console.log('Compatible images converted'.green)
}

async function moveOthers () {
  console.log('Copying images to dist'.yellow)
  // Set folder paths
  const srcPath = process.env.NODE_ENV === 'test' ? 'test/assets/images' : 'src/app/images'
  const distpath = process.env.NODE_ENV === 'test' ? 'test/assets/dist/images' : 'dist/images'
  // Set up images folder if it doesn't exist
  fs.dir(distpath)
  // List the files in the image directory
  const images = fs.find(srcPath, { matching: ['!**/*.jpg', '!**/*.jpeg', '!**/*.png', '!.DS_Store'] })
  // Loop through each image
  for (const image of images) {
    const cleanedPath = slash(image)
    const filenameWithExt = cleanedPath.substring(cleanedPath.lastIndexOf('/') + 1)
    const foldersFullPath = cleanedPath.substring(0, image.lastIndexOf(filenameWithExt))
    const foldersRelPath = foldersFullPath.split(`${srcPath}/`)[1]
    const outPutFolder = `${distpath}/${foldersRelPath}`
    const outputFile = `${outPutFolder}${filenameWithExt}`
    // Make sure output folder exists
    fs.dir(outPutFolder)
    // Copy images
    fs.copy(image, outputFile, { overwrite: true })
  }
  console.log('Images copied'.green)
}

export default { convertToWebp, moveOthers }
