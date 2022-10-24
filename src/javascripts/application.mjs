import themeToggle from './modules/theme-toggle/_initialise.mjs'
import imageClicker from './modules/image-clicker/_initialise.mjs'

document.addEventListener('DOMContentLoaded', function () {
  themeToggle.init()
  imageClicker.init()
})
