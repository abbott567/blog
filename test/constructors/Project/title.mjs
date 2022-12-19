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
    blank: () => {
      Project.clean()
      const t1 = deepClone(params)
      t1.title = ''
      expect(() => new Project(t1)).to.throw('title blank when constructing Project')
    },
    not: {
      a: {
        string: () => {
          Project.clean()
          const t1 = deepClone(params)
          t1.title = 1
          expect(() => new Project(t1)).to.throw('title not a string when constructing Project')
        }
      }
    }
  }
}
