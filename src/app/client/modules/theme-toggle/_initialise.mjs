'use strict'

import setSavedPreferredTheme from './_set-saved-preferred-theme.mjs'
import setDefaultTheme from './_set-default-theme.mjs'
import addThemeToggle from './_add-theme-toggle.mjs'

// Document ready
function init () {
  setSavedPreferredTheme()
  setDefaultTheme()
  addThemeToggle()
}

export default { init }
