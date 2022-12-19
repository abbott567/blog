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
    undefined: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.meta.image.href = undefined
      expect(() => new Page(t1)).to.throw('meta.image.href undefined when constructing Page')
    },
    blank: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.meta.image.href = ''
      expect(() => new Page(t1)).to.throw('meta.image.href blank when constructing Page')
    },
    not: {
      a: {
        string: () => {
          Page.clean()
          const t1 = deepClone(params)
          t1.meta.image.href = 1
          expect(() => new Page(t1)).to.throw('meta.image.href not a string when constructing Page')
        }
      }
    }
  }
}
