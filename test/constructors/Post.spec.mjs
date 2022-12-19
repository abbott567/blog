import title from './Post/title.mjs'
import meta from './Post/meta.mjs'
import slug from './Post/slug.mjs'
import content from './Post/content.mjs'
import excerpt from './Post/excerpt.mjs'
import created from './Post/created.mjs'
import id from './Post/findById.mjs'
import save from './Post/save.mjs'
import categories from './Post/categories.mjs'

describe('Post', () => {
  describe('.title', () => {
    it('should construct when title is valid', title.is.valid)
    it('should not construct when title is blank', title.is.blank)
    it('should not construct when title is not a string', title.is.not.a.string)
  })

  describe('.slug', () => {
    it('should construct with an auto generated slug', slug.should.autogenerate)
  })

  describe('.categories', () => {
    it('should construct with categories when valid', categories.are.valid)
    it('should construct with emoty array when missing', categories.are.missing)
  })

  describe('.meta', () => {
    it('should construct when meta.json is valid', meta.is.valid)
    it('should not construct when meta.json is undefined', meta.is.undefined)
  })

  describe('.meta.description', () => {
    it('should construct when meta.description is valid', meta.description.is.valid)
    it('should not construct when meta.description is undefined', meta.description.is.undefined)
    it('should not construct when meta.description is blank', meta.description.is.blank)
    it('should not construct when meta.description is not a string', meta.description.is.not.a.string)
  })

  describe('.meta.image', () => {
    it('should construct when meta.image is valid', meta.image.is.valid)
    it('should not construct when meta.image is undefined', meta.image.is.undefined)
  })

  describe('.meta.image.href', () => {
    it('should construct when meta.image.href is valid', meta.image.href.is.valid)
    it('should not construct when meta.image.href is undefined', meta.image.href.is.undefined)
    it('should not construct when meta.image.href is blank', meta.image.href.is.blank)
    it('should not construct when meta.image.href is not a string', meta.image.href.is.not.a.string)
  })

  describe('.meta.image.alt', () => {
    it('should construct when meta.image.alt is valid', meta.image.alt.is.valid)
    it('should not construct when meta.image.alt is undefined', meta.image.alt.is.undefined)
    it('should not construct when meta.image.alt is blank', meta.image.alt.is.blank)
    it('should not construct when meta.image.alt is not a string', meta.image.alt.is.not.a.string)
  })

  describe('.content', () => {
    it('should construct when path to content.md is valid', content.is.valid)
    it('should not construct when path to content.md is not valid', content.is.not.valid)
  })

  describe('.excerpt', () => {
    it('should construct when path to excerpt.md is valid', excerpt.is.valid)
    it('should not construct when path to excerpt.md is not valid', excerpt.is.not.valid)
  })

  describe('.created', () => {
    it('should construct when the created date is valid', created.is.valid)
    it('should not construct the created date is not valid', created.is.not.valid)
  })

  describe('.findById(id)', () => {
    it('should find by when ID is valid', id.is.valid)
    it('should throw an error if ID is not valid', id.is.not.valid)
  })

  describe('.save()', () => {
    it('should save to Post.all', save.to.all)
  })
})
