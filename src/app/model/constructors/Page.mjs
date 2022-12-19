import validate from './validators/Page-validator.mjs'
import sanitise from './sanitisers/Page-sanitiser.mjs'

class Page {
  static all = []
  static count = 0

  id = Page.count += 1
  title
  href
  slug
  meta
  template
  content
  navHeader
  navFooter

  constructor (params) {
    const sanitisedParams = sanitise(params)
    const validParams = validate(sanitisedParams)
    this.title = validParams.title
    this.href = validParams.href
    this.slug = validParams.slug
    this.meta = validParams.meta
    this.navHeader = validParams.navHeader
    this.navFooter = validParams.navFooter
    this.template = validParams.template
    this.content = validParams.content
  }

  static findById (id) {
    const page = Page.all.find(x => x.id === id)
    if (page === undefined) throw Error(`Couldnt find a Page with the ID: ${id}`)
    return page
  }

  static clean () {
    this.count = 0
    this.all = []
  }

  save () {
    Page.all.push(this)
  }
}

export default Page
