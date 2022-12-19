import urlRegex from '../../../../utils/url-regex.mjs'
import fs from 'fs-jetpack'

function validatePage (params) {
  const pagesDir = process.env.NODE_ENV === 'test' ? 'test/assets/views/pages' : 'src/app/views/pages'
  const template = 'template.njk'
  const content = 'content.md'

  // Validate title
  if (params.title.length === 0) {
    console.log('Error: Page.title: ', params)
    throw Error('title blank when constructing Page')
  }
  if (typeof params.title !== 'string') {
    console.log('Error: Page.title: ', params)
    throw Error('title not a string when constructing Page')
  }

  // Validate href
  if (typeof params.href !== 'string') {
    console.log('Error: Page.href: ', params)
    throw Error('href not a string when constructing Page')
  }
  if (params.href.length === 0) {
    console.log('Error: Page.href: ', params)
    throw Error('href blank when constructing Page')
  }
  if (!params.href.match(urlRegex)) {
    console.log('Error: Page.href: ', params)
    throw Error('href not a valid URL when constructing Page')
  }
  if (params.href.includes('localhost')) {
    console.log('Error: Page.href: ', params)
    throw Error('href contained localhost when constructing Page')
  }

  // Validate meta
  if (params.meta === undefined) {
    console.log('Error: Page.meta: ', params)
    throw Error('meta undefined when constructing Page')
  }
  if (params.meta.description === undefined) {
    console.log('Error: Page.meta.description: ', params)
    throw Error('meta.description undefined when constructing Page')
  }
  if (params.meta.image === undefined) {
    console.log('Error: Page.meta.image: ', params)
    throw Error('meta.image undefined when constructing Page')
  }
  if (params.meta.image.href === undefined) {
    console.log('Error: Page.meta.image.href: ', params)
    throw Error('meta.image.href undefined when constructing Page')
  }
  if (params.meta.image.alt === undefined) {
    console.log('Error: Page.meta.image.alt: ', params)
    throw Error('meta.image.href alt when constructing Page')
  }

  if (params.meta.description === '') {
    console.log('Error: Page.meta.description: ', params)
    throw Error('meta.description blank when constructing Page')
  }
  if (params.meta.image.href === '') {
    console.log('Error: Page.meta.image.href: ', params)
    throw Error('meta.image.href blank when constructing Page')
  }
  if (params.meta.image.alt === '') {
    console.log('Error: Page.meta.image.alt: ', params)
    throw Error('meta.image.href blank when constructing Page')
  }
  if (typeof params.meta.description !== 'string') {
    console.log('Error: Page.meta.description: ', params)
    throw Error('meta.description not a string when constructing Page')
  }
  if (typeof params.meta.image.href !== 'string') {
    console.log('Error: Page.meta.image.href: ', params)
    throw Error('meta.image.href not a string when constructing Page')
  }
  if (typeof params.meta.image.alt !== 'string') {
    console.log('Error: Page.meta.image.alt: ', params)
    throw Error('meta.image.href not a string when constructing Page')
  }

  // Validate template
  if (!fs.read(`${pagesDir}/${params.slug}/${template}`)) {
    console.log('Error: Page.template: ', params)
    throw Error(`${pagesDir}/${params.slug}/${template} could not be found when constructing Page`)
  }
  params.template = `pages/${params.slug}/${template}`

  // Get the markdown content or sanistise
  if (!fs.read(`${pagesDir}/${params.slug}/${content}`)) params.content = ''
  else params.content = `pages/${params.slug}/${content}`

  return params
}

export default validatePage
