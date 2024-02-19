function extractHeadings () {
  const post = document.querySelector('.post')
  const headingElements = post.querySelectorAll('h2, h3')
  const headings = []
  let currentH2 = null // Track the current H2 heading

  headingElements.forEach(el => {
    if (el.tagName.toLowerCase() === 'h2') {
      // If the element is an H2, reset currentH2 and add the heading to the top-level array
      currentH2 = {
        text: el.textContent, // Using textContent to capture just the text
        id: el.id,
        href: `#${el.id}`,
        level: el.tagName.toLowerCase(),
        children: [] // Prepare to nest H3s
      }
      if (currentH2.id !== 'post-details') {
        headings.push(currentH2) // Add the H2 to the top-level headings array
      }
    } else if (el.tagName.toLowerCase() === 'h3' && currentH2) {
      // If the element is an H3 and there is a current H2, add the H3 to the current H2's children
      currentH2.children.push({
        text: el.textContent,
        id: el.id,
        href: `#${el.id}`,
        level: el.tagName.toLowerCase()
      })
    }
  })
  return headings
}

export default extractHeadings
