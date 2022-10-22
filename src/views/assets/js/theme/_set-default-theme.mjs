import toggleMeta from './_toggle-meta.mjs'
import appendCurrentThemeText from './_append-current-theme.mjs'

function setDefaultTheme () {
  const body = document.querySelector('body')
  const preferredTheme = body.getAttribute('data-theme')
  // If there is no preferred theme saved
  if (!preferredTheme) {
    // Check if browser supports prefers-color-scheme
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Supported
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark mode is preferred
        toggleMeta('dark')
        appendCurrentThemeText('dark')
        return body.setAttribute('data-theme', 'dark')
      }
    }
    // If all else fails, set the theme to light
    appendCurrentThemeText('light')
    toggleMeta('light')
    body.setAttribute('data-theme', 'light')
  }
}

export default setDefaultTheme
