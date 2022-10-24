import capitalise from '../../utils/_capitalise.mjs'

function toggleButtonText (currentTheme) {
  const button = document.getElementById('theme-toggle')
  const otherTheme = currentTheme === 'dark' ? 'light' : 'dark'
  const buttonText = 'Activate ' + capitalise(otherTheme) + ' theme'
  button.innerHTML = buttonText
}

export default toggleButtonText
