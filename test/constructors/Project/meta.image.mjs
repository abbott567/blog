import Project from '../../../src/app/model/constructors/Project.mjs'
import deepClone from 'deep-clone'
import Projects from '../../assets/data/Projects.mjs'
import { expect } from 'chai'

import href from './meta.image.href.mjs'
import alt from './meta.image.alt.mjs'

const params = Projects[0]

export default {
  is: {
    valid: () => {
      Project.clean()
      const t1 = deepClone(params)
      expect(() => new Project(t1)).to.not.throw()
    },
    undefined: () => {
      Project.clean()
      const t1 = deepClone(params)
      t1.title = 'Meta image is undefined'
      expect(() => new Project(t1)).to.throw('meta.image undefined when constructing Project')
    }
  },
  href,
  alt
}
