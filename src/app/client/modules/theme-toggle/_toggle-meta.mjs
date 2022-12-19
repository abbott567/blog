function toggleMeta (theme) {
  const metatag = document.querySelectorAll('meta[name=theme-color]')[0]
  if (theme === 'dark') {
    metatag.setAttribute('content', '#222222')
  }
  if (theme === 'light') {
    metatag.setAttribute('content', '#f9f9f9')
  }
}

export default toggleMeta
