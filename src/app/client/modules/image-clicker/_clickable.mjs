function makeClickable () {
  const instances = document.querySelectorAll('.clickable')
  instances.forEach(function (instance) {
    const url = instance.getAttribute('data-location')
    if (url) {
      instance.addEventListener('click', function (e) {
        window.location.href = url
        e.preventDefault()
      })
    }
  })
}

export default makeClickable
