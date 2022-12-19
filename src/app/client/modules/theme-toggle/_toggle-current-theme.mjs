import capitalise from '../../utils/_capitalise.mjs'

function toggleCurrentThemeText (newTheme) {
  const currentTheme = document.getElementById('current-theme')
  currentTheme.innerHTML = capitalise(newTheme) + ' theme is currently active'
}

export default toggleCurrentThemeText
