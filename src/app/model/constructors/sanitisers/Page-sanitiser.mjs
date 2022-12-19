import slugify from 'slugify'

function sanitisePage (params) {
  if (typeof params.title === 'string') params.slug = slugify(params.title, { lower: true, strict: true })
  return params
}

export default sanitisePage
