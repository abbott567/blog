import urlRegex from '../../../../utils/url-regex.mjs'
import slugify from 'slugify'

function validateSite (params) {
  if (params.title === undefined) {
    console.log('Error: Site.title: ', params)
    throw Error('title undefined when constructing Site')
  }
  if (typeof params.title !== 'string') {
    console.log('Error: Site.title: ', params)
    throw Error('title not a string when constructing Site')
  }
  if (params.title.length === 0) {
    console.log('Error: Site.title: ', params)
    throw Error('title blank when constructing Site')
  }
  if (params.url.includes('localhost')) {
    console.log('Error: Site.url: ', params)
    throw Error('url contained localhost when constructing Site')
  }
  if (!params.url.match(urlRegex)) {
    console.log('Error: Site.url: ', params)
    throw Error('url not a valid URL when constructing Site')
  }

  params.slug = slugify(params.title, { lower: true, strict: true })

  return params
}

export default validateSite
