import appendCurrentThemeText from './_append-current-theme.mjs'

// Set preferred theme if stored
function setSavedPreferredTheme () {
  // Check local storage for saved theme settings
  const preferredTheme = window.localStorage.getItem('theme')
  const html = document.querySelector('html')
  const body = document.querySelector('body')
  if (preferredTheme === 'dark') {
    appendCurrentThemeText('dark')
    body.classList.remove('theme--light')
    body.classList.add('theme--dark')
    html.setAttribute('data-theme', 'dark')
  }
  if (preferredTheme === 'light') {
    appendCurrentThemeText('light')
    body.classList.remove('theme--dark')
    body.classList.add('theme--light')
    html.setAttribute('data-theme', 'light')
  }
}

export default setSavedPreferredTheme
