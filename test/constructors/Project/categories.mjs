import Project from '../../../src/app/model/constructors/Project.mjs'
import deepClone from 'deep-clone'
import Projects from '../../assets/data/Projects.mjs'
import { expect } from 'chai'

const params = Projects[0]

export default {
  are: {
    valid: () => {
      Project.clean()
      const t1 = deepClone(params)
      const project = new Project(t1)
      expect(project.categories).to.eql(t1.categories)
    },
    missing: () => {
      Project.clean()
      const t1 = deepClone(params)
      t1.categories = undefined
      const project = new Project(t1)
      expect(project.categories).to.eql([])
    }
  }
}
