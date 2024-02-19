function appendToc (toc) {
  const mainContainer = document.querySelector('.main-container')
  const main = document.querySelector('main')
  mainContainer.insertBefore(toc, main)
}

export default appendToc
