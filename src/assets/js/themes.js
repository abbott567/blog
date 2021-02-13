function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

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
        appendCurrentThemeText('dark')
        return body.setAttribute('data-theme', 'dark')
      }
    }
    // If all else fails, set the theme to light
    appendCurrentThemeText('light')
    body.setAttribute('data-theme', 'light')
  }
}

function toggleLogo (theme) {
  const logo = document.getElementById('logo')
  if (!theme) {
    const body = document.querySelector('body')
    theme = body.getAttribute('data-theme')
  }
  if (theme === 'light') {
    logo.innerHTML = '<img src="/images/logo.svg" alt="Craig Abbott signature logo">'
  }
  if (theme === 'dark') {
    logo.innerHTML = '<img src="/images/logo-dark.svg" alt="Craig Abbott signature logo">'
  }
}

function toggleButtonText (currentTheme) {
  const button = document.getElementById('theme-toggle')
  const otherTheme = currentTheme === 'dark' ? 'light' : 'dark'
  const buttonText = 'Activate ' + capitalize(otherTheme) + ' theme'
  button.innerHTML = buttonText
}

function appendCurrentThemeText (newTheme) {
  const footer = document.querySelector('footer')
  const newText = '<p class="visually-hidden" id="current-theme" aria-live="polite">' + newTheme + ' theme is active</p>'
  footer.innerHTML = footer.innerHTML + newText
}

function toggleCurrentThemeText (newTheme) {
  const currentTheme = document.getElementById('current-theme')
  currentTheme.innerHTML = newTheme + ' theme is active'
}

function changeTheme () {
  const body = document.querySelector('body')
  const currentTheme = body.getAttribute('data-theme')
  if (currentTheme === 'light') {
    window.localStorage.setItem('theme', 'dark')
    toggleLogo('dark')
    toggleButtonText('dark')
    toggleCurrentThemeText('dark')
    return body.setAttribute('data-theme', 'dark')
  }
  if (currentTheme === 'dark') {
    window.localStorage.setItem('theme', 'light')
    toggleLogo('light')
    toggleButtonText('light')
    toggleCurrentThemeText('light')
    return body.setAttribute('data-theme', 'light')
  }
}

// Append theme toggle button to header
function addThemeToggle () {
  const header = document.querySelector('header')
  const currentTheme = document.querySelector('body').getAttribute('data-theme')
  const otherTheme = currentTheme === 'dark' ? 'light' : 'dark'
  const buttonText = 'Activate ' + capitalize(otherTheme) + ' theme'
  const buttonHTML = '<div class="theme-toggle-container"><button id="theme-toggle" class="theme-toggle">' + buttonText + '</button></div>'
  header.innerHTML = header.innerHTML + buttonHTML
  // Add event listener for click
  document.getElementById('theme-toggle').addEventListener('click', function () {
    changeTheme()
  })
}

// Document ready
document.addEventListener('DOMContentLoaded', function () {
  setSavedPreferredTheme()
  setDefaultTheme()
  toggleLogo()
  addThemeToggle()
})
