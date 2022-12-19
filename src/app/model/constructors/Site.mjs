import validate from './validators/Site-validator.mjs'
import sanitise from './sanitisers/Site-sanitiser.mjs'
import Page from './Page.mjs'
import Post from './Post.mjs'
import Project from './Project.mjs'

class Site {
  static instance = null

  title
  url
  meta

  constructor (params) {
    const sanitisedParams = sanitise(params)
    const validParams = validate(sanitisedParams)
    this.title = validParams.title
    this.url = validParams.url
    this.meta = validParams.meta
    this.pages = []
    this.posts = []
    this.projects = []
  }

  static clean () {
    Site.instance = null
    Page.clean()
    Post.clean()
    Project.clean()
  }

  static getInfo () {
    return Site.instance
  }

  save () {
    if (!Site.instance) Site.instance = this
  }
}

export default Site
