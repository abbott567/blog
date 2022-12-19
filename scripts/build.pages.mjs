import fs from 'fs-jetpack'
import buildDataModel from '../src/build/data-model.mjs'
import buildPages from '../src/build/html.pages.mjs'

function build () {
  const filepath = process.env.NODE_ENV === 'test' ? 'test/assets/dist' : 'dist'
  fs.remove(filepath)
  console.log('Building data model')
  const site = buildDataModel()
  console.log('Building pages')
  buildPages(site)
}

export default build()
