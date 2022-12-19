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
      t1.url = 'http://www.craigabbott.co.uk'
      expect(() => new Site(t1)).to.not.throw()
    },
    blank: () => {
      Site.clean()
      const t1 = deepClone(params)
      t1.url = ''
      expect(() => new Site(t1)).to.throw()
    },
    not: {
      valid: () => {
        Site.clean()
        const t1 = deepClone(params)
        t1.url = 'im not valid'
        expect(() => new Site(t1)).to.throw()
      },
      a: {
        string: () => {
          Site.clean()
          const t1 = deepClone(params)
          t1.url = 1
          expect(() => new Site(t1)).to.throw()
        }
      }
    }
  },
  contains: {
    http: () => {
      Site.clean()
      const t1 = deepClone(params)
      t1.url = 'https://www.craigabbott.co.uk'
      expect(() => new Site(t1)).to.not.throw()
    },
    https: () => {
      Site.clean()
      const t1 = deepClone(params)
      t1.url = 'http://localhost:3000'
      expect(() => new Site(t1)).to.throw()
    },
    localhost: () => {
      Site.clean()
      const t1 = deepClone(params)
      t1.url = 'http://localhost:3000'
      expect(() => new Site(t1)).to.throw()
    }
  }
}
