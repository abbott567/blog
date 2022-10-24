import capitalise from '../../utils/_capitalise.mjs'
import changeTheme from './_change-theme.mjs'

// Append theme toggle button to header
function addThemeToggle () {
  const header = document.querySelector('header')
  const currentTheme = document.querySelector('html').getAttribute('data-theme')
  const otherTheme = currentTheme === 'dark' ? 'light' : 'dark'
  const buttonText = 'Activate ' + capitalise(otherTheme) + ' theme'
  const buttonHTML = '<div class="theme-toggle-container"><button type="button" id="theme-toggle" class="theme-toggle">' + buttonText + '</button></div>'
  header.innerHTML = header.innerHTML + buttonHTML
  // Add event listener for click
  document.getElementById('theme-toggle').addEventListener('click', function () {
    changeTheme()
  })
}

export default addThemeToggle
