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
      const p1 = new Project(t1)
      p1.save()
      const found = Project.findById(p1.id)
      expect(found).to.eql(p1)
    },
    not: {
      valid: () => {
        Project.clean()
        const t1 = deepClone(params)
        const p1 = new Project(t1)
        p1.save()
        expect(() => Project.findById(999)).to.throw('Couldnt find a Project with the ID: 999')
      }
    }
  }
}
