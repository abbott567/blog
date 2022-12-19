import base from './templates/layouts/base.mjs'

describe('Layouts', () => {
  describe('Base', () => {
    before(() => { process.env.NODE_ENV = 'dev' })
    after(() => { process.env.NODE_ENV = 'test' })

    describe('<html>', () => {
      const lang = 'en'
      it('should have lang="en"', () => base.html.should.have.lang(lang))
    })

    describe('<head>', () => {
      describe('<link>', () => {
        it('should have a stylesheet link', base.head.should.have.a.link.for.styles)
        it('should have a canonical link', base.head.should.have.a.link.for.canonical)
        it('should have a rss link', base.head.should.have.a.link.for.rss)
      })
      describe('<meta>', () => {
        it('should have a meta title attribute', base.head.should.have.a.meta.title)
        it('should have a meta description attribute', base.head.should.have.a.meta.description)
        it('should have a meta twitter:card attribute', base.head.should.have.a.meta.twitter_card)
        it('should have a meta twitter:url attribute', base.head.should.have.a.meta.twitter_url)
        it('should have a meta twitter:title attribute', base.head.should.have.a.meta.twitter_title)
        it('should have a meta twitter:image attribute', base.head.should.have.a.meta.twitter_image)
        it('should have a meta twitter:image:alt attribute', base.head.should.have.a.meta.twitter_image_alt)
        it('should have a meta twitter:site attribute', base.head.should.have.a.meta.twitter_site)
        it('should have a meta og:type attribute', base.head.should.have.a.meta.og_type)
        it('should have a meta og:url attribute', base.head.should.have.a.meta.og_url)
        it('should have a meta og:title attribute', base.head.should.have.a.meta.og_title)
        it('should have a meta og:description attribute', base.head.should.have.a.meta.og_description)
        it('should have a meta og:image attribute', base.head.should.have.a.meta.og_image)
        it('should have a meta og:image:alt attribute', base.head.should.have.a.meta.og_image_alt)
        it('should have a meta og:site_name attribute', base.head.should.have.a.meta.og_site_name)
      })
    })
  })
})
