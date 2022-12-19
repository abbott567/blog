import url from './utils/url-regex.mjs'
import readTime from './utils/read-time.mjs'

describe('Utils', async () => {
  describe('urlRegex', () => {
    it('should be valid when url is http and www', url.is.http.and.not.www)
    it('should be valid when url is http and not www', url.is.http.and.not.www)
    it('should be valid when url is https and www', url.is.https.and.www)
    it('should be valid when url is https and not www', url.is.https.and.not.www)
    it('should be valid when url is relative', url.is.relative)
    it('should be valid when url is localhost', url.is.localhost)
  })

  describe('readTime', () => {
    describe('.forString()', () => {
      it('should return "minute" when string readTime is 1', () => readTime.string.is.equal.to(1))
      it('should return "minutes" when string readTime is > than 1', () => readTime.string.is.equal.to(2))
    })
    describe('.forFile()', () => {
      it('should return "minute" when file readTime is 1', () => readTime.file.is.equal.to(1))
      it('should return "minutes" when file readTime is > than 1', () => readTime.file.is.equal.to(2))
    })
  })
})
