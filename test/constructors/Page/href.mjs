import Page from '../../../src/app/model/constructors/Page.mjs'
import deepClone from 'deep-clone'
import pages from '../../assets/data/pages.mjs'
import { expect } from 'chai'

const params = pages[0]

export default {
  is: {
    relative: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.href = '/page-1'
      expect(() => new Page(t1)).to.not.throw()
    },
    http: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.href = 'http://www.google.com'
      expect(() => new Page(t1)).to.not.throw()
    },
    https: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.href = 'https://www.google.com'
      expect(() => new Page(t1)).to.not.throw()
    },
    jumplink: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.href = '#heading-1'
      expect(() => new Page(t1)).to.not.throw()
    },
    blank: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.href = ''
      expect(() => new Page(t1)).to.throw('href blank when constructing Page')
    },
    not: {
      valid: () => {
        Page.clean()
        const t1 = deepClone(params)
        t1.href = 'im not a URL'
        expect(() => new Page(t1)).to.throw('href not a valid URL when constructing Page')
      },
      a: {
        string: () => {
          Page.clean()
          const t1 = deepClone(params)
          t1.href = 1
          expect(() => new Page(t1)).to.throw('href not a string when constructing Page')
        }
      }
    }
  },
  contains: {
    localhost: () => {
      Page.clean()
      const t1 = deepClone(params)
      t1.href = 'http://localhost:3000'
      expect(() => new Page(t1)).to.throw('href contained localhost when constructing Page')
    }
  }
}
