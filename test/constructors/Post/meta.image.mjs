import Post from '../../../src/app/model/constructors/Post.mjs'
import deepClone from 'deep-clone'
import Posts from '../../assets/data/Posts.mjs'
import { expect } from 'chai'

import href from './meta.image.href.mjs'
import alt from './meta.image.alt.mjs'

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
      t1.title = 'Meta image is undefined'
      expect(() => new Post(t1)).to.throw('meta.image undefined when constructing Post')
    }
  },
  href,
  alt
}
