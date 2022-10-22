function makeImageClickable () {
  const sections = document.querySelectorAll('#work-overview .section')
  sections.forEach(function (section) {
    const img = section.querySelector('img')
    const links = section.querySelectorAll('a')
    const lastLink = links[links.length - 1]
    if (lastLink && lastLink.innerHTML.includes('deep-dive')) {
      const url = lastLink.getAttribute('href')
      if (img) {
        img.classList.add('clickable')
        img.addEventListener('click', function (e) {
          location.href = url
          e.preventDefault()
        })
      }
    }
  })
}

export default makeImageClickable
