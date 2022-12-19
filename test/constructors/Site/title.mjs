import Site from '../../../src/app/model/constructors/Site.mjs'
import deepClone from 'deep-clone'
import site from '../../assets/data/site.mjs'
import { expect } from 'chai'

const params = site

export default {
  is: {
    valid: () => {
      Site.clean()
      const t1 = deepClone(params)
      expect(() => new Site(t1)).to.not.throw()
    },
    undefined: () => {
      Site.clean()
      const t1 = deepClone(params)
      t1.title = undefined
      expect(() => new Site(t1)).to.throw('title undefined when constructing Site')
    },
    blank: () => {
      Site.clean()
      const t1 = deepClone(params)
      t1.title = ''
      expect(() => new Site(t1)).to.throw('title blank when constructing Site')
    },
    not: {
      a: {
        string: () => {
          Site.clean()
          const t1 = deepClone(params)
          t1.title = 1
          expect(() => new Site(t1)).to.throw('title not a string when constructing Site')
        }
      }
    }
  }
}
