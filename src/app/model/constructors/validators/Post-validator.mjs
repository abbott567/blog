import fs from 'fs-jetpack'
import slugify from 'slugify'
import datefns from 'date-fns'
import readTime from '../../../../utils/read-time.mjs'

function validatePost (params) {
  const postsDir = process.env.NODE_ENV === 'test' ? 'test/assets/views/posts' : 'src/app/views/posts'
  const content = 'content.md'
  const excerpt = 'excerpt.md'
  const meta = 'meta.json'

  // Validate title
  if (params.title.length === 0) {
    console.log('Error: Post.title: ', params)
    throw Error('title blank when constructing Post')
  }
  if (typeof params.title !== 'string') {
    console.log('Error: Post.title: ', params)
    throw Error('title not a string when constructing Post')
  }

  // Generate slug once title is correct
  params.slug = slugify(params.title, { lower: true, strict: true })
  params.href = `/blog/${params.slug}`

  // Validate content
  if (!fs.read(`${postsDir}/${params.slug}/${content}`)) {
    console.log('Error: Post.content: ', params)
    throw Error(`${postsDir}/${params.slug}/${content} could not be found when constructing Post`)
  }
  params.content = `posts/${params.slug}/${content}`

  // Validate excerpt
  if (!fs.read(`${postsDir}/${params.slug}/${excerpt}`)) {
    console.log('Error: Post.excerpt: ', params)
    throw Error(`${postsDir}/${params.slug}/${excerpt} could not be found when constructing Post`)
  }
  params.excerpt = `posts/${params.slug}/${excerpt}`

  // // Validate meta
  const postMeta = fs.read(`${postsDir}/${params.slug}/${meta}`, 'json')
  if (postMeta === undefined) {
    console.log('Error: Post.meta: ', params)
    throw Error(`${postsDir}/${params.slug}/${meta} could not be found when constructing Post`)
  }
  params.meta = postMeta

  if (params.meta.description === undefined) {
    console.log('Error: Post.meta.description: ', params)
    throw Error('meta.description undefined when constructing Post')
  }
  if (params.meta.description === '') {
    console.log('Error: Post.meta.description: ', params)
    throw Error('meta.description blank when constructing Post')
  }
  if (typeof params.meta.description !== 'string') {
    console.log('Error: Post.meta.description: ', params)
    throw Error('meta.description not a string when constructing Post')
  }

  if (params.meta.image === undefined) {
    console.log('Error: Post.meta.image: ', params)
    throw Error('meta.image undefined when constructing Post')
  }

  if (params.meta.image.href === undefined) {
    console.log('Error: Post.meta.image.href: ', params)
    throw Error('meta.image.href undefined when constructing Post')
  }
  if (params.meta.image.href === '') {
    console.log('Error: Post.meta.image.href: ', params)
    throw Error('meta.image.href blank when constructing Post')
  }
  if (typeof params.meta.image.href !== 'string') {
    console.log('Error: Post.meta.image.href: ', params)
    throw Error('meta.image.href not a string when constructing Post')
  }

  if (params.meta.image.alt === undefined) {
    console.log('Error: Post.meta.image.alt: ', params)
    throw Error('meta.image.alt undefined when constructing Post')
  }
  if (params.meta.image.alt === '') {
    console.log('Error: Post.meta.image.alt: ', params)
    throw Error('meta.image.alt blank when constructing Post')
  }
  if (typeof params.meta.image.alt !== 'string') {
    console.log('Error: Post.meta.image.alt: ', params)
    throw Error('meta.image.alt not a string when constructing Post')
  }

  // Valid date
  if (!datefns.isValid(new Date(params.created))) {
    console.log('Error: Post.params.created: ', params)
    throw Error('params.created not valid when constructing Post')
  }
  const date = new Date(params.created)
  params.date = {
    timestamp: date,
    datestamp: datefns.format(date, 'yyyy-MM-dd'),
    rss: datefns.format(date, 'EEE, dd MMM yyyy HH:mm:ss +0000'),
    pretty: datefns.format(date, 'd MMMM yyyy')
  }

  // Read time
  params.readTime = readTime.forFile(`${postsDir}/${params.slug}/${content}`)

  return params
}

export default validatePost
