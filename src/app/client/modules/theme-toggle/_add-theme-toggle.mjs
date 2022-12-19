import capitalise from '../../utils/_capitalise.mjs'
import changeTheme from './_change-theme.mjs'

// Append theme toggle button to header
function addThemeToggle () {
  const header = document.querySelector('header')
  const currentTheme = document.querySelector('html').getAttribute('data-theme')
  const otherTheme = currentTheme === 'dark' ? 'light' : 'dark'
  const buttonText = 'Activate ' + capitalise(otherTheme) + ' theme'
  const container = document.createElement('div')
  container.classList.add('theme-toggle__container')
  container.innerHTML = '<button type="button" id="theme-toggle" class="theme-toggle__button">' + buttonText + '</button>'
  header.classList.remove('theme-toggle__placeholder')
  header.after(container)

  // Add event listener for click
  document.getElementById('theme-toggle').addEventListener('click', function () {
    changeTheme()
  })
}

export default addThemeToggle
