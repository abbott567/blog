import 'colors'
import fs from 'fs-jetpack'

function html () {
  const filetypes = ['**/*.html', '!decks/**/*']
  const filepath = process.env.NODE_ENV === 'test' ? 'test/assets/dist' : 'dist'
  const files = fs.find(filepath, { matching: filetypes })
  console.log('Cleaning .html files in dist (ignoring decks folder)'.yellow)
  for (const file of files) {
    fs.remove(file)
  }
  console.log('.html files cleaned (ignored decks folder)'.green)
}

function js () {
  const filetypes = ['**/*.js']
  const filepath = process.env.NODE_ENV === 'test' ? 'test/assets/dist' : 'dist'
  const files = fs.find(filepath, { matching: filetypes })
  console.log('Cleaning .js files in dist'.yellow)
  for (const file of files) {
    fs.remove(file)
  }
  console.log('.js files cleaned in dist'.green)
}

function css () {
  const filetypes = ['**/*.css']
  const filepath = process.env.NODE_ENV === 'test' ? 'test/assets/dist' : 'dist'
  const files = fs.find(filepath, { matching: filetypes })
  console.log('Cleaning .js files in dist'.yellow)
  for (const file of files) {
    fs.remove(file)
  }
  console.log('.css files cleaned in dist'.green)
}

export default { html, js, css }
