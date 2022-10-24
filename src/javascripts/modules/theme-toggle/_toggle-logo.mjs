function toggleLogo (theme) {
  const logo = document.getElementById('logo')
  if (!theme) {
    const html = document.querySelector('html')
    theme = html.getAttribute('data-theme')
  }
  if (theme === 'light') {
    logo.innerHTML = '<img src="/images/logo.svg" alt="Craig Abbott signature logo" width="100">'
  }
  if (theme === 'dark') {
    logo.innerHTML = '<img src="/images/logo-dark.svg" alt="Craig Abbott signature logo" width="100">'
  }
}

export default toggleLogo
