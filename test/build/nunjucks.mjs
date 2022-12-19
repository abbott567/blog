import buildEnv from '../../src/build/nunjucks.mjs'
import buildDataModel from '../../src/build/data-model.mjs'

import { expect } from 'chai'

export default {
  test: {
    data: {
      is: {
        valid: () => {
          const site = buildDataModel()
          const page = site.pages.find(x => x.slug === 'page-is-valid')
          const post = site.posts.find(x => x.slug === 'post-is-valid')
          const njk = buildEnv()
          const pageHTML = njk.render('pages/page-is-valid/template.njk', { site, page })
          const postHTML = njk.render('layouts/post.njk', { site, post })
          expect(pageHTML).to.contain('<title>Page is valid')
          expect(postHTML).to.contain('<title>Post is valid')
        }
      }
    },
    markdown: {
      is: {
        valid: () => {
          const site = buildDataModel()
          const page = site.pages.find(x => x.slug === 'page-is-valid')
          const nunjucks = buildEnv()
          const html = nunjucks.render('pages/page-is-valid/template.njk', { site, page })
          expect(html).to.contain('<h1>Page is valid')
        }
      }
    }
  },
  prod: {
    data: {
      is: {
        valid: () => {
          const site = buildDataModel()
          const page = site.pages.find(x => x.slug === 'home')
          const post = site.posts.find(x => x.slug === 'what-is-normal-anyway')
          const njk = buildEnv()
          const pageHTML = njk.render('pages/home/template.njk', { site, page })
          const postHTML = njk.render('layouts/post.njk', { site, post })
          console.log(postHTML)
          expect(pageHTML).to.contain('<title>Home')
          expect(postHTML).to.contain('<title>What is')
        }
      }
    }
  }
}
