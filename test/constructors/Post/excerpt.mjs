import Post from '../../../src/app/model/constructors/Post.mjs'
import deepClone from 'deep-clone'
import Posts from '../../assets/data/Posts.mjs'
import { expect } from 'chai'

const params = Posts[0]

export default {
  is: {
    valid: () => {
      Post.clean()
      const t1 = deepClone(params)
      expect(() => new Post(t1)).to.not.throw()
    },
    not: {
      valid: () => {
        Post.clean()
        const t1 = deepClone(params)
        t1.title = 'Excerpt is undefined'
        expect(() => new Post(t1)).to.throw('test/assets/views/posts/excerpt-is-undefined/excerpt.md could not be found when constructing Post')
      }
    }
  }
}
