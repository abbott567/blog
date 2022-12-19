import server from '../src/app/server/functions.mjs'
import got from 'got'
import { expect } from 'chai'

describe('Server', () => {
  describe('Launch', () => {
    before(() => server.launch())
    after(() => server.close())
    it('should launch on port 3001', async () => {
      const response = await got('http://localhost:3001')
      expect(response.statusCode).to.eql(200)
    })
  })
})
