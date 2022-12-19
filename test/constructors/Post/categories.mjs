import Post from '../../../src/app/model/constructors/Post.mjs'
import deepClone from 'deep-clone'
import Posts from '../../assets/data/Posts.mjs'
import { expect } from 'chai'

const params = Posts[0]

export default {
  are: {
    valid: () => {
      Post.clean()
      const t1 = deepClone(params)
      const post = new Post(t1)
      expect(post.categories).to.eql(t1.categories)
    },
    missing: () => {
      Post.clean()
      const t1 = deepClone(params)
      t1.categories = undefined
      const post = new Post(t1)
      expect(post.categories).to.eql([])
    }
  }
}
