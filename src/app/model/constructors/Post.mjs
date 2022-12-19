import validate from './validators/Post-validator.mjs'
import sanitise from './sanitisers/Post-sanitiser.mjs'

class Post {
  static all = []
  static count = 0

  id = Post.count += 1
  title
  href
  excerpt
  meta
  date
  readTime
  categories = []
  slug
  content

  constructor (params) {
    const sanitisedParams = sanitise(params)
    const validParams = validate(sanitisedParams)
    this.title = validParams.title
    this.href = validParams.href
    this.date = validParams.date
    this.readTime = validParams.readTime
    this.categories = validParams.categories
    this.meta = validParams.meta
    this.slug = validParams.slug
    this.content = validParams.content
    this.excerpt = validParams.excerpt
  }

  static findById (id) {
    const post = Post.all.find(x => x.id === id)
    if (post === undefined) throw Error(`Couldnt find a Post with the ID: ${id}`)
    return post
  }

  static clean () {
    this.count = 0
    this.all = []
  }

  save () {
    Post.all.push(this)
  }
}

export default Post
