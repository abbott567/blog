import theme from './theme/_initialise.mjs'
import imageClicker from './image-clicker/_initialise.mjs'

document.addEventListener('DOMContentLoaded', function () {
  theme.init()
  imageClicker.init()
})
