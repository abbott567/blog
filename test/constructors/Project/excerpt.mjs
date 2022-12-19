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
    not: {
      valid: () => {
        Project.clean()
        const t1 = deepClone(params)
        t1.title = 'Excerpt is undefined'
        expect(() => new Project(t1)).to.throw('test/assets/views/projects/excerpt-is-undefined/excerpt.md could not be found when constructing Project')
      }
    }
  }
}
