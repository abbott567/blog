function toggleCurrentThemeText (newTheme) {
  const currentTheme = document.getElementById('current-theme')
  currentTheme.innerHTML = newTheme + ' theme is currently active'
}

export default toggleCurrentThemeText
