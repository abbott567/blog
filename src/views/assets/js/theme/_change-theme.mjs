import toggleMeta from './_toggle-meta.mjs'
import toggleLogo from './_toggle-logo.mjs'
import toggleButtonText from './_toggle-button-text.mjs'
import toggleCurrentThemeText from './_toggle-current-theme.mjs'

function changeTheme () {
  const body = document.querySelector('body')
  const currentTheme = body.getAttribute('data-theme')
  if (currentTheme === 'light') {
    window.localStorage.setItem('theme', 'dark')
    toggleMeta('dark')
    toggleLogo('dark')
    toggleButtonText('dark')
    toggleCurrentThemeText('dark')
    return body.setAttribute('data-theme', 'dark')
  }
  if (currentTheme === 'dark') {
    window.localStorage.setItem('theme', 'light')
    toggleMeta('light')
    toggleLogo('light')
    toggleButtonText('light')
    toggleCurrentThemeText('light')
    return body.setAttribute('data-theme', 'light')
  }
}

export default changeTheme
