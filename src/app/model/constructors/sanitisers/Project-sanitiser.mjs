import slugify from 'slugify'

function sanitiseProject (params) {
  if (typeof params.title === 'string') params.slug = slugify(params.title, { lower: true, strict: true })
  if (params.categories === undefined) params.categories = []
  return params
}

export default sanitiseProject
