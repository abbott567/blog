function appendCurrentThemeText (newTheme) {
  const footer = document.querySelector('.page-footer')
  const newText = '<output class="visually-hidden" id="current-theme" for="theme-toggle" name="current-theme" aria-live="polite">' + newTheme + ' theme is currently active</output>'
  footer.innerHTML = footer.innerHTML + newText
}

export default appendCurrentThemeText
