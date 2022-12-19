import Page from '../../../src/app/model/constructors/Page.mjs'
import deepClone from 'deep-clone'
import pages from '../../assets/data/pages.mjs'
import { expect } from 'chai'

const params = pages[0]

export default {
  to: {
    all: () => {
      Page.clean()
      const t1 = deepClone(params)
      const p1 = new Page(t1)
      p1.save()
      expect(Page.all).to.contain(p1)
    }
  }
}
