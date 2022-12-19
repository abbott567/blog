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
    blank: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.title = ''
      expect(() => new Page(t1)).to.throw('title blank when constructing Page')
    },
    not: {
      a: {
        string: () => {
          Page.clean()
          const t1 = deepClone(params)
          t1.title = 1
          expect(() => new Page(t1)).to.throw('title not a string when constructing Page')
        }
      }
    }
  }
}
