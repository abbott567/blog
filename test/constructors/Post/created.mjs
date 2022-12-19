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
      t1.created = new Date('2021-09-06T00:00:00.000Z')
      const post = new Post(t1)
      console.log(post)
      expect(post.date.timestamp).to.eql(t1.created)
    },
    not: {
      valid: () => {
        Post.clean()
        const t1 = deepClone(params)
        t1.created = 'potato'
        expect(() => new Post(t1)).to.throw('params.created not valid when constructing Post')
      }
    }
  }
}
