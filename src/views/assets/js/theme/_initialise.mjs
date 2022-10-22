'use strict'

import setSavedPreferredTheme from './_save-preferred-theme.mjs'
import setDefaultTheme from './_set-default-theme.mjs'
import toggleLogo from './_toggle-logo.mjs'
import addThemeToggle from './_add-theme-toggle.mjs'

// Document ready
function init () {
  setSavedPreferredTheme()
  setDefaultTheme()
  toggleLogo()
  addThemeToggle()
}

export default { init }
