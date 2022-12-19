import Page from '../../../src/app/model/constructors/Page.mjs'
import deepClone from 'deep-clone'
import pages from '../../assets/data/pages.mjs'
import { expect } from 'chai'

import description from './meta.description.mjs'
import image from './meta.image.mjs'

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
      t1.meta = undefined
      expect(() => new Page(t1)).to.throw('meta undefined when constructing Page')
    }
  },
  description,
  image
}
