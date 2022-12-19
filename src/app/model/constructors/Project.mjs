import validate from './validators/Project-validator.mjs'
import sanitise from './sanitisers/Project-sanitiser.mjs'

class Project {
  static all = []
  static count = 0

  id = Project.count += 1
  title
  href
  excerpt
  meta
  categories = []
  slug
  content

  constructor (params) {
    const sanitisedParams = sanitise(params)
    const validParams = validate(sanitisedParams)
    this.title = validParams.title
    this.href = validParams.href
    this.categories = validParams.categories
    this.meta = validParams.meta
    this.slug = validParams.slug
    this.content = validParams.content
    this.excerpt = validParams.excerpt
  }

  static findById (id) {
    const project = Project.all.find(x => x.id === id)
    if (project === undefined) throw Error(`Couldnt find a Project with the ID: ${id}`)
    return project
  }

  static clean () {
    this.count = 0
    this.all = []
  }

  save () {
    Project.all.push(this)
  }
}

export default Project
