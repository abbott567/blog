import fs from 'fs-jetpack'
import slugify from 'slugify'

function validateProject (params) {
  const projectDir = process.env.NODE_ENV === 'test' ? 'test/assets/views/projects' : 'src/app/views/projects'
  const content = 'content.md'
  const excerpt = 'excerpt.md'
  const meta = 'meta.json'

  // Validate title
  if (params.title.length === 0) {
    console.log('Error: Project.title: ', params)
    throw Error('title blank when constructing Project')
  }
  if (typeof params.title !== 'string') {
    console.log('Error: Project.title: ', params)
    throw Error('title not a string when constructing Project')
  }

  // Generate slug once title is correct
  params.slug = slugify(params.title, { lower: true, strict: true })
  params.href = `/work/${params.slug}`

  // Validate content
  if (!fs.read(`${projectDir}/${params.slug}/${content}`)) {
    console.log('Error: Project.content: ', params)
    throw Error(`${projectDir}/${params.slug}/${content} could not be found when constructing Project`)
  }
  params.content = `projects/${params.slug}/${content}`

  // Validate excerpt
  if (!fs.read(`${projectDir}/${params.slug}/${excerpt}`)) {
    console.log('Error: Project.excerpt: ', params)
    throw Error(`${projectDir}/${params.slug}/${excerpt} could not be found when constructing Project`)
  }
  params.excerpt = `projects/${params.slug}/${excerpt}`

  // Validate meta
  const projectMeta = fs.read(`${projectDir}/${params.slug}/${meta}`, 'json')
  if (projectMeta === undefined) {
    console.log('Error: Project.meta: ', params)
    throw Error(`${projectDir}/${params.slug}/${meta} could not be found when constructing Project`)
  }
  params.meta = projectMeta

  if (params.meta.description === undefined) {
    console.log('Error: Project.meta.description: ', params)
    throw Error('meta.description undefined when constructing Project')
  }
  if (params.meta.description === '') {
    console.log('Error: Project.meta.description: ', params)
    throw Error('meta.description blank when constructing Project')
  }
  if (typeof params.meta.description !== 'string') {
    console.log('Error: Project.meta.description: ', params)
    throw Error('meta.description not a string when constructing Project')
  }

  if (params.meta.image === undefined) {
    console.log('Error: Project.meta.image: ', params)
    throw Error('meta.image undefined when constructing Project')
  }

  if (params.meta.image.href === undefined) {
    console.log('Error: Project.meta.image.href: ', params)
    throw Error('meta.image.href undefined when constructing Project')
  }
  if (params.meta.image.href === '') {
    console.log('Error: Project.meta.image.href: ', params)
    throw Error('meta.image.href blank when constructing Project')
  }
  if (typeof params.meta.image.href !== 'string') {
    console.log('Error: Project.meta.image.href: ', params)
    throw Error('meta.image.href not a string when constructing Project')
  }

  if (params.meta.image.alt === undefined) {
    console.log('Error: Project.meta.image.alt: ', params)
    throw Error('meta.image.alt undefined when constructing Project')
  }
  if (params.meta.image.alt === '') {
    console.log('Error: Project.meta.image.alt: ', params)
    throw Error('meta.image.alt blank when constructing Project')
  }
  if (typeof params.meta.image.alt !== 'string') {
    console.log('Error: Project.meta.image.alt: ', params)
    throw Error('meta.image.alt not a string when constructing Project')
  }

  return params
}

export default validateProject
