import title from './Page/title.mjs'
import meta from './Page/meta.mjs'
import slug from './Page/slug.mjs'
import href from './Page/href.mjs'
import template from './Page/template.mjs'
import content from './Page/content.mjs'
import id from './Page/findById.mjs'
import save from './Page/save.mjs'

describe('Page', () => {
  describe('.title', () => {
    it('should construct when title is valid', title.is.valid)
    it('should not construct when title is blank', title.is.blank)
    it('should not construct when title is not a string', title.is.not.a.string)
  })

  describe('.slug', () => {
    it('should construct with an auto generated slug', slug.should.autogenerate)
  })

  describe('.href', () => {
    it('should construct when params.href is relative', href.is.relative)
    it('should construct when params.href is http', href.is.http)
    it('should construct when params.href is https', href.is.https)
    it('should construct when params.href is jumplink', href.is.jumplink)
    it('should not construct when params.href is blank', href.is.blank)
    it('should not construct when params.href contains localhost', href.contains.localhost)
    it('should not construct when params.href is not valid', href.is.not.valid)
    it('should not construct when params.href is not a string', href.is.not.a.string)
  })

  describe('.meta', () => {
    it('should construct when meta is valid', meta.is.valid)
    it('should not construct when meta is undefined', meta.is.undefined)
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

  describe('.template', () => {
    it('should construct when path to template.njk is valid', template.is.valid)
    it('should not construct when path to template.njk is not valid', template.is.not.valid)
  })

  describe('.content', () => {
    it('should construct when path to content.md is valid', content.is.valid)
    it('should not construct when path to content.md is not valid', content.is.not.valid)
  })

  describe('.findById(id)', () => {
    it('should find by when ID is valid', id.is.valid)
    it('should throw an error if ID is not valid', id.is.not.valid)
  })

  describe('.save()', () => {
    it('should save to Page.all', save.to.all)
  })
})
