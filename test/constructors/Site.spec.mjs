import title from './Site/title.mjs'
import url from './Site/url.mjs'

describe('Site', () => {
  describe('.title', () => {
    it('should construct when title is valid', title.is.valid)
    it('should not construct when title is undefined', title.is.undefined)
    it('should not construct when title is blank', title.is.blank)
    it('should not construct when title is not a string', title.is.not.a.string)
  })

  describe('.href', () => {
    it('should construct when url is valid', url.is.valid)
    it('should construct when url contains http', url.contains.http)
    it('should construct when url contains https', url.contains.https)
    it('should not construct when url is blank', url.is.blank)
    it('should not construct when url contains localhost', url.contains.localhost)
    it('should not construct when url is not valid', url.is.not.valid)
    it('should not construct when url is not a string', url.is.not.a.string)
  })
})
