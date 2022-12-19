import html from './build/html.mjs'

describe('HTML', async () => {
  describe('.minify()', () => {
    it('should minify a block of HTML', html.should.be.minified)
  })
  describe('.save()', () => {
    it('should save html to a given filepath', html.should.save)
  })
  describe('.build()', () => {
    describe('Test', () => {
      it('should build pages in test', html.loads.correct.pages.in.test)
      it('should build posts in test', html.loads.correct.posts.in.test)
      it('should build projects in test', html.loads.correct.projects.in.test)
    })
    describe('Dev', () => {
      before(() => {
        process.env.NODE_ENV = 'dev'
      })
      after(() => {
        process.env.NODE_ENV = 'test'
      })
      it('should build pages dev', html.loads.correct.pages.in.dev)
      it('should build posts dev', html.loads.correct.posts.in.dev)
      it('should build projects dev', html.loads.correct.projects.in.dev)
    })
  })
})
