import Site from '../app/model/constructors/Site.mjs'
import Page from '../app/model/constructors/Page.mjs'
import Post from '../app/model/constructors/Post.mjs'
import Project from '../app/model/constructors/Project.mjs'
import prodData from '../app/data/prod-data.mjs'
import testData from '../../test/assets/data/test-data.mjs'

function buildDataModel () {
  Site.clean()
  const data = process.env.NODE_ENV === 'test' ? testData : prodData
  const site = new Site(data.site)
  site.save()

  if (data.pages) {
    data.pages.forEach(pageData => {
      const page = new Page(pageData)
      page.save()
    })
    site.pages = Page.all
  }

  if (data.posts) {
    data.posts.forEach(postData => {
      const post = new Post(postData)
      post.save()
    })
    site.posts = Post.all
  }

  if (data.projects) {
    data.projects.forEach(projectData => {
      const project = new Project(projectData)
      project.save()
    })
    site.projects = Project.all
  }
  return Site.instance
}

export default buildDataModel
