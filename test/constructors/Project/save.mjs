import Project from '../../../src/app/model/constructors/Project.mjs'
import deepClone from 'deep-clone'
import Projects from '../../assets/data/Projects.mjs'
import { expect } from 'chai'

const params = Projects[0]

export default {
  to: {
    all: () => {
      Project.clean()
      const t1 = deepClone(params)
      const p1 = new Project(t1)
      p1.save()
      expect(Project.all).to.contain(p1)
    }
  }
}
