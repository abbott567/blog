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
    blank: () => {
      Post.clean()
      const t1 = deepClone(params)
      t1.title = ''
      expect(() => new Post(t1)).to.throw('title blank when constructing Post')
    },
    not: {
      a: {
        string: () => {
          Post.clean()
          const t1 = deepClone(params)
          t1.title = 1
          expect(() => new Post(t1)).to.throw('title not a string when constructing Post')
        }
      }
    }
  }
}
