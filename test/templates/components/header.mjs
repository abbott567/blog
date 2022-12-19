import Site from '../../../src/app/model/constructors/Site.mjs'
import buildDataModel from '../../../src/build/data-model.mjs'
import buildEnv from '../../../src/build/nunjucks.mjs'

import { expect } from 'chai'
import { JSDOM } from 'jsdom'

export default {
  should: {
    contain: {
      a: {
        nav: () => {
          Site.clean()
          buildDataModel()
          const site = Site.getInfo()
          const page = site.pages.find(x => x.slug === 'home')
          const nunjucks = buildEnv()
          const html = nunjucks.render(page.template, { site, page })
          const dom = new JSDOM(html)
          const document = dom.window.document
          const header = document.querySelector('header')
          const nav = header.querySelector('nav')
          expect(nav.innerHTML).to.not.eql(undefined)
        },
        link: {
          for: (params) => {
            Site.clean()
            buildDataModel()
            const site = Site.getInfo()
            const page = site.pages.find(x => x.slug === 'home')
            const nunjucks = buildEnv()
            const html = nunjucks.render(page.template, { site, page })
            const dom = new JSDOM(html)
            const document = dom.window.document
            const header = document.querySelector('header')
            const link = header.querySelector(`[href='${params.href}']`)
            expect(link.innerHTML).to.eql(params.text)
            expect(link.getAttribute('href')).to.eql(params.href)
          }
        }
      }
    }
  }
}
