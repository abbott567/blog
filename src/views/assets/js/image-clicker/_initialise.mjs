import makeImageClickable from './_make-image-clickable.mjs'

function init () {
  if ('querySelector' in document) {
    makeImageClickable()
  }
}

export default { init }
