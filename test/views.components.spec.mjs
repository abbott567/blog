import header from './templates/components/header.mjs'

describe('Components', async () => {
  before(() => { process.env.NODE_ENV = 'dev' })
  after(() => { process.env.NODE_ENV = 'test' })

  describe('<header>', () => {
    it('should contain a <nav> element', header.should.contain.a.nav)
    it('should contain a link for "Home (/)"', () => header.should.contain.a.link.for({ text: 'Home', href: '/' }))
    it('should contain a link for "Blog (/blog)"', () => header.should.contain.a.link.for({ text: 'Blog', href: '/blog' }))
    it('should contain a link for "Talks (/talks)"', () => header.should.contain.a.link.for({ text: 'Talks', href: '/talks' }))
    it('should contain a link for "Work (/work)"', () => header.should.contain.a.link.for({ text: 'Work', href: '/work' }))
  })
})
