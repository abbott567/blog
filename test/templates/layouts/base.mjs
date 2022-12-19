import Site from '../../../src/app/model/constructors/Site.mjs'
import buildDataModel from '../../../src/build/data-model.mjs'
import buildEnv from '../../../src/build/nunjucks.mjs'

import { expect } from 'chai'
import { JSDOM } from 'jsdom'

export default {
  html: {
    should: {
      have: {
        lang: text => {
          Site.clean()
          buildDataModel()
          const site = Site.getInfo()
          const page = site.pages.find(x => x.slug === 'home')
          const nunjucks = buildEnv()
          const html = nunjucks.render(page.template, { site, page })
          const dom = new JSDOM(html)
          const document = dom.window.document
          const htmlTag = document.querySelector('html')
          expect(htmlTag.getAttribute('lang')).to.eql('en')
        }
      }
    }
  },
  head: {
    should: {
      have: {
        a: {
          link: {
            for: {
              styles: () => {
                Site.clean()
                buildDataModel()
                const site = Site.getInfo()
                const page = site.pages.find(x => x.slug === 'home')
                const nunjucks = buildEnv()
                const html = nunjucks.render(page.template, { site, page })
                const dom = new JSDOM(html)
                const document = dom.window.document
                const link = document.querySelector('link[rel="stylesheet"]')
                expect(link.getAttribute('href')).to.eql('/css/style.css')
              },
              canonical: () => {
                Site.clean()
                buildDataModel()
                const site = Site.getInfo()
                const page = site.pages.find(x => x.slug === 'home')
                const nunjucks = buildEnv()
                const html = nunjucks.render(page.template, { site, page })
                const dom = new JSDOM(html)
                const document = dom.window.document
                const link = document.querySelector('link[rel="canonical"]')
                expect(link.getAttribute('href')).to.eql(`${site.url}${page.href}`)
              },
              rss: () => {
                Site.clean()
                buildDataModel()
                const site = Site.getInfo()
                const page = site.pages.find(x => x.slug === 'home')
                const nunjucks = buildEnv()
                const html = nunjucks.render(page.template, { site, page })
                const dom = new JSDOM(html)
                const document = dom.window.document
                const link = document.querySelector('link[type="application/rss+xml"]')
                expect(link.getAttribute('href')).to.eql(site.meta.rss)
              }
            }
          },
          meta: {
            title: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="title"]')
              expect(meta.getAttribute('content')).to.eql(page.title)
            },
            description: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="description"]')
              expect(meta.getAttribute('content')).to.eql(page.meta.description)
            },
            twitter_card: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="twitter:card"]')
              expect(meta.getAttribute('content')).to.eql('summary_large_image')
            },
            twitter_url: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="twitter:url"]')
              expect(meta.getAttribute('content')).to.eql(`${site.url}${page.href}`)
            },
            twitter_title: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="twitter:title"]')
              expect(meta.getAttribute('content')).to.eql(page.title)
            },
            twitter_image: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="twitter:image"]')
              expect(meta.getAttribute('content')).to.eql(`${site.url}${page.meta.image.href}`)
            },
            twitter_image_alt: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="twitter:image:alt"]')
              expect(meta.getAttribute('content')).to.eql(page.meta.image.alt)
            },
            twitter_site: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[name="twitter:site"]')
              expect(meta.getAttribute('content')).to.eql(site.meta.twitter)
            },
            og_type: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[property="og:type"]')
              expect(meta.getAttribute('content')).to.eql('website')
            },
            og_url: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[property="og:url"]')
              expect(meta.getAttribute('content')).to.eql(`${site.url}${page.href}`)
            },
            og_title: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[property="og:title"]')
              expect(meta.getAttribute('content')).to.eql(page.title)
            },
            og_description: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[property="og:description"]')
              expect(meta.getAttribute('content')).to.eql(page.meta.description)
            },
            og_image: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[property="og:image"]')
              expect(meta.getAttribute('content')).to.eql(`${site.url}${page.meta.image.href}`)
            },
            og_image_alt: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[property="og:image:alt"]')
              expect(meta.getAttribute('content')).to.eql(page.meta.image.alt)
            },
            og_site_name: () => {
              Site.clean()
              buildDataModel()
              const site = Site.getInfo()
              const page = site.pages.find(x => x.slug === 'home')
              const nunjucks = buildEnv()
              const html = nunjucks.render(page.template, { site, page })
              const dom = new JSDOM(html)
              const document = dom.window.document
              const meta = document.querySelector('meta[property="og:site_name"]')
              expect(meta.getAttribute('content')).to.eql(site.title)
            }
          }
        }
      }
    }
  }
}
