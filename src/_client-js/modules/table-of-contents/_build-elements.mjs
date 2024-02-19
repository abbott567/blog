import extractHeadings from './_extract-headings.mjs'

function buildElements () {
  const nav = buildNav()
  const tocLv1 = buildTocLv1()
  const listItems = buildH2ListItems()
  const toc = appendElements(tocLv1, listItems)
  const complete = appendElements(nav, toc)
  return complete
}

function buildNav () {
  const toc = document.createElement('nav')
  toc.id = 'toc'
  toc.classList.add('toc')
  toc.setAttribute('aria-label', 'Table of contents')
  return toc
}

function buildTocLv1 () {
  const ul = document.createElement('ul')
  ul.classList.add('toc__lv1')
  return ul
}

function buildH2ListItems () {
  const h2s = extractHeadings()
  const listItems = []
  h2s.forEach(h2 => {
    const li = document.createElement('li')
    li.classList.add('toc__lv1-li')
    const a = document.createElement('a')
    li.classList.add('toc__link')
    a.href = h2.href
    a.innerHTML = h2.text
    li.appendChild(a)
    if (h2.children.length > 0) {
      const h3s = buildH3ListItems(h2.children)
      li.appendChild(h3s)
    }
    listItems.push(li)
  })
  return listItems
}

function buildH3ListItems (h3s) {
  const ul = document.createElement('ul')
  ul.classList.add('toc__lv2')
  h3s.forEach(h3 => {
    const li = document.createElement('li')
    li.classList.add('toc__lv2-li')
    const a = document.createElement('a')
    li.classList.add('toc__link')
    a.href = h3.href
    a.innerHTML = h3.text
    li.appendChild(a)
    ul.appendChild(li)
  })
  return ul
}

function appendElements (parent, children) {
  if (Array.isArray(children)) {
    children.forEach(child => {
      parent.appendChild(child)
    })
  } else {
    parent.appendChild(children)
  }
  return parent
}

export default buildElements
