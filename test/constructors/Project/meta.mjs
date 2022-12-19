import Project from '../../../src/app/model/constructors/Project.mjs'
import deepClone from 'deep-clone'
import Projects from '../../assets/data/Projects.mjs'
import { expect } from 'chai'

import description from './meta.description.mjs'
import image from './meta.image.mjs'

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
      t1.title = 'Meta is undefined'
      expect(() => new Project(t1)).to.throw('test/assets/views/projects/meta-is-undefined/meta.json could not be found when constructing Project')
    }
  },
  description,
  image
}
