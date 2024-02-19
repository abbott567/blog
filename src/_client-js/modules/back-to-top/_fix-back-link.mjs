function fixBackLink (trigger) {
  const backLink = document.querySelector('#back-to-top')
  if (backLink) {
    if (trigger) {
      backLink.classList.add('back-to-top--fixed')
    } else {
      backLink.classList.remove('back-to-top--fixed')
    }
  }
}

export default fixBackLink
