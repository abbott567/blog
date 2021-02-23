'use strict'

const { expect } = require('chai')
const got = require('got')

module.exports = () => {
  describe('Render home page', () => {
    it('will get a 200 response', async () => {
      const results = await got('http://localhost:8080/')
      expect(results.statusCode).to.eql(200)
    })
  })
}
