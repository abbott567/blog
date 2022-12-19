import makeClickable from './_clickable.mjs'

function init () {
  if ('querySelector' in document) {
    makeClickable()
  }
}

export default { init }
