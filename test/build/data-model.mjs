import buildDataModel from '../../src/build/data-model.mjs'
import Site from '../../src/app/model/constructors/Site.mjs'
import { expect } from 'chai'

export default {
  test: {
    is: {
      valid: () => {
        Site.clean()
        buildDataModel()
        const site = Site.getInfo()
        expect(site.title).to.eql('testsite.com')
      }
    },
    pages: {
      is: {
        valid: () => {
          Site.clean()
          buildDataModel()
          const site = Site.getInfo()
          expect(site.pages.length).to.be.greaterThan(0)
        }
      }
    },
    posts: {
      is: {
        valid: () => {
          Site.clean()
          buildDataModel()
          const site = Site.getInfo()
          expect(site.posts.length).to.be.greaterThan(0)
        }
      }
    }
  },
  prod: {
    is: {
      valid: () => {
        Site.clean()
        buildDataModel()
        const site = Site.getInfo()
        expect(site.title).to.eql('craigabbott.co.uk')
      }
    }
  }
}
