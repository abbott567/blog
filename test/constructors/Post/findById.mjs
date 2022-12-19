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
      const p1 = new Post(t1)
      p1.save()
      const found = Post.findById(p1.id)
      expect(found).to.eql(p1)
    },
    not: {
      valid: () => {
        Post.clean()
        const t1 = deepClone(params)
        const p1 = new Post(t1)
        p1.save()
        expect(() => Post.findById(999)).to.throw('Couldnt find a Post with the ID: 999')
      }
    }
  }
}
