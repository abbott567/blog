import Post from '../../../src/app/model/constructors/Post.mjs'
import deepClone from 'deep-clone'
import Posts from '../../assets/data/Posts.mjs'
import { expect } from 'chai'

const params = Posts[0]

export default {
  should: {
    autogenerate: () => {
      Post.clean()
      const t1 = deepClone(params)
      const post = new Post(t1)
      expect(post.slug).to.eql('post-is-valid')
    }
  }
}
