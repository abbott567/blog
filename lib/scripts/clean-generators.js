const fs = require('fs-jetpack')
const chalk = require('chalk')

function cleanGenerators () {
  console.log('[scripts] Cleaning generated eleventy files')
  fs.remove('src/script-outputs')
  console.log(chalk.green('[scripts] Cleaned src/script-outputs'))
}

module.exports = cleanGenerators
