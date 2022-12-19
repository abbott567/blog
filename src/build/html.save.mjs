import fs from 'fs-jetpack'

function save (filepath, html) {
  fs.write(filepath, html)
}

export default save
