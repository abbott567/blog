import Project from '../../../src/app/model/constructors/Project.mjs'
import deepClone from 'deep-clone'
import Projects from '../../assets/data/Projects.mjs'
import { expect } from 'chai'

const params = Projects[0]

export default {
  should: {
    autogenerate: () => {
      Project.clean()
      const t1 = deepClone(params)
      const project = new Project(t1)
      expect(project.slug).to.eql('project-is-valid')
    }
  }
}
