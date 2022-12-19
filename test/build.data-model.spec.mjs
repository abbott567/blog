import data from './build/data-model.mjs'

describe('Data Model', async () => {
  describe('BuildDataModel()', () => {
    describe('test environment', () => {
      it('should build a site using test data', data.test.is.valid)
      it('should build pages using test data', data.test.pages.is.valid)
      it('should build posts using test data', data.test.posts.is.valid)
    })
    describe('test environment', () => {
      before(() => { process.env.NODE_ENV = 'dev' })
      after(() => { process.env.NODE_ENV = 'test' })
      it('should build a site using prod data', data.prod.is.valid)
    })
  })
})
