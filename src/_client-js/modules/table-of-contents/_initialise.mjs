import buildElements from './_build-elements.mjs'
import appendToc from './_append-toc.mjs'

function init () {
  const toc = buildElements()
  appendToc(toc)
}

export default { init }
