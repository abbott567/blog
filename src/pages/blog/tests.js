'use strict'

const { expect } = require('chai')
const got = require('got')
module.exports = () => {
  describe('Render blog page', () => {
    it('will get a 200 response', async () => {
      const results = await got('http://localhost:8080/blog/')
      expect(results.statusCode).to.eql(200)
    })
  })

  describe('Render blog page 0 ', () => {
    it('will get a 200 response', async () => {
      const results = await got('http://localhost:8080/blog/?page=0')
      expect(results.statusCode).to.eql(200)
    })
  })

  describe('Render blog page 2 ', () => {
    it('will get a 200 response', async () => {
      const results = await got('http://localhost:8080/blog/?page=2')
      expect(results.statusCode).to.eql(200)
    })
  })

  describe('Render blog page 100 ', () => {
    it('will get a 200 response', async () => {
      const results = await got('http://localhost:8080/blog/?page=100')
      expect(results.statusCode).to.eql(200)
    })
  })
}
