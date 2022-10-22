import appendCurrentThemeText from './_append-current-theme.mjs'

// Set preferred theme if stored
function setSavedPreferredTheme () {
  // Check local storage for saved theme settings
  const preferredTheme = window.localStorage.getItem('theme')
  const body = document.querySelector('body')
  if (preferredTheme === 'dark') {
    appendCurrentThemeText('dark')
    body.setAttribute('data-theme', 'dark')
  }
  if (preferredTheme === 'light') {
    appendCurrentThemeText('light')
    body.setAttribute('data-theme', 'light')
  }
}

export default setSavedPreferredTheme
