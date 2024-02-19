import fixBackLink from './_fix-back-link.mjs'

let isArticleInfoVisible = false

function listenForPageScroll () {
  listenForBelowTheFold()
  window.addEventListener('scroll', listenForBelowTheFold)
  window.addEventListener('scroll', listenForrticleInfoVisibility)
}

function listenForBelowTheFold () {
  // Only run this logic if the footer is not visible
  if (!isArticleInfoVisible) {
    // Get the current scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop
    // Use the viewport height as the dynamic measurement for "above the fold"
    const viewportHeight = window.innerHeight
    // Check if the scroll position is greater than the viewport height times 2
    if (scrollPosition > (viewportHeight * 2)) {
      // Fix the back link if we're past the fold and the footer isn't visible
      fixBackLink(true)
    } else {
      // Revert the back link if we're not past the fold and the footer isn't visible
      fixBackLink(false)
    }
  }
}

function listenForrticleInfoVisibility () {
  const backLink = document.querySelector('#back-to-top')
  const articleInfo = document.querySelector('#article-info')

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting, entry.intersectionRatio)
      isArticleInfoVisible = entry.isIntersecting
      if (entry.isIntersecting) {
        // Footer is entering the viewport, adjust the back link to align with .article-info
        const articleInfoRect = articleInfo.getBoundingClientRect()
        const desiredBottom = window.innerHeight - articleInfoRect.top - 25 // Calculate the desired bottom position
        backLink.style.bottom = `${desiredBottom}px`
      } else {
        backLink.style.bottom = '5%'
      }
    })
  }

  const observer = new window.IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0.5
  })

  observer.observe(articleInfo)
}

export default listenForPageScroll
