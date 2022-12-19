import njk from './build/nunjucks.mjs'

describe('Nunjucks', async () => {
  describe('.render', () => {
    describe('test environment', () => {
      it('should use the file loader for test views', njk.test.data.is.valid)
      it('should render markdown when there is a content.md file', njk.test.markdown.is.valid)
    })
    describe('dev / prod environment', () => {
      before(() => { process.env.NODE_ENV = 'dev' })
      after(() => { process.env.NODE_ENV = 'test' })
      it('should use the file loader for prod views', njk.prod.data.is.valid)
    })
  })
})
