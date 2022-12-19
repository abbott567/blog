import Page from '../../../src/app/model/constructors/Page.mjs'
import deepClone from 'deep-clone'
import pages from '../../assets/data/pages.mjs'
import { expect } from 'chai'

const params = pages[0]

export default {
  should: {
    autogenerate: () => {
      Page.clean()
      const t1 = deepClone(params)
      const page = new Page(t1)
      expect(page.slug).to.eql('page-is-valid')
    }
  }
}
