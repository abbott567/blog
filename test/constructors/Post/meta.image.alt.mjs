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
    undefined: () => {
      Post.clean()
      const t1 = deepClone(params)
      t1.title = 'Meta image alt is undefined'
      expect(() => new Post(t1)).to.throw('meta.image.alt undefined when constructing Post')
    },
    blank: () => {
      Post.clean()
      const t1 = deepClone(params)
      t1.title = 'Meta image alt is blank'
      expect(() => new Post(t1)).to.throw('meta.image.alt blank when constructing Post')
    },
    not: {
      a: {
        string: () => {
          Post.clean()
          const t1 = deepClone(params)
          t1.title = 'Meta image alt is not a string'
          expect(() => new Post(t1)).to.throw('meta.image.alt not a string when constructing Post')
        }
      }
    }
  }
}
