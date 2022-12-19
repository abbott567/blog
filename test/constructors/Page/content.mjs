import Page from '../../../src/app/model/constructors/Page.mjs'
import deepClone from 'deep-clone'
import pages from '../../assets/data/pages.mjs'
import { expect } from 'chai'

const params = pages[0]

export default {
  is: {
    valid: () => {
      Page.clean()
      const t1 = deepClone(params)
      expect(() => new Page(t1)).to.not.throw()
    },
    not: {
      valid: () => {
        Page.clean()
        const t1 = deepClone(params)
        t1.title = 'Content is undefined'
        t1.href = '/content-is-undefined'
        const page = new Page(t1)
        expect(page.content).to.eql('')
      }
    }
  }
}
