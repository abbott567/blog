import Post from '../../../src/app/model/constructors/Post.mjs'
import deepClone from 'deep-clone'
import Posts from '../../assets/data/Posts.mjs'
import { expect } from 'chai'

const params = Posts[0]

export default {
  to: {
    all: () => {
      Post.clean()
      const t1 = deepClone(params)
      const p1 = new Post(t1)
      p1.save()
      expect(Post.all).to.contain(p1)
    }
  }
}
