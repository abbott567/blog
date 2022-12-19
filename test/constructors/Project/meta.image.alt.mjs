import Project from '../../../src/app/model/constructors/Project.mjs'
import deepClone from 'deep-clone'
import Projects from '../../assets/data/Projects.mjs'
import { expect } from 'chai'

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
      t1.title = 'Meta image alt is undefined'
      expect(() => new Project(t1)).to.throw('meta.image.alt undefined when constructing Project')
    },
    blank: () => {
      Project.clean()
      const t1 = deepClone(params)
      t1.title = 'Meta image alt is blank'
      expect(() => new Project(t1)).to.throw('meta.image.alt blank when constructing Project')
    },
    not: {
      a: {
        string: () => {
          Project.clean()
          const t1 = deepClone(params)
          t1.title = 'Meta image alt is not a string'
          expect(() => new Project(t1)).to.throw('meta.image.alt not a string when constructing Project')
        }
      }
    }
  }
}
