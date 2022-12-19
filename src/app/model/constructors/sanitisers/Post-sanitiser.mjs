import slugify from 'slugify'

function sanitisePost (params) {
  if (typeof params.title === 'string') params.slug = slugify(params.title, { lower: true, strict: true })
  if (params.categories === undefined) params.categories = []
  return params
}

export default sanitisePost
