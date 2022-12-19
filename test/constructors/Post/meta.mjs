import Post from '../../../src/app/model/constructors/Post.mjs'
import deepClone from 'deep-clone'
import Posts from '../../assets/data/Posts.mjs'
import { expect } from 'chai'

import description from './meta.description.mjs'
import image from './meta.image.mjs'

const params = Posts[0]

export default {
  is: {
    valid: () => {
      Post.clean()
      const t1 = deepClone(params)
      expect(() => new Post(t1)).to.not.throw()
    },
    undefined: () => {
      Post.clean()
      const t1 = deepClone(params)
      t1.title = 'Meta is undefined'
      expect(() => new Post(t1)).to.throw('test/assets/views/posts/meta-is-undefined/meta.json could not be found when constructing Post')
    }
  },
  description,
  image
}
