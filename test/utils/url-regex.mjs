import urlRegex from '../../src/utils/url-regex.mjs'

import { expect } from 'chai'

export default {
  is: {
    http: {
      and: {
        www: () => {
          const t1 = 'http://www.craigabbott.co.uk'
          const result = urlRegex.test(t1)
          expect(result).to.eql(true)
        },
        not: {
          www: () => {
            const t1 = 'http://craigabbott.co.uk'
            const result = urlRegex.test(t1)
            expect(result).to.eql(true)
          }
        }
      }
    },
    https: {
      and: {
        www: () => {
          const t1 = 'https://www.craigabbott.co.uk'
          const result = urlRegex.test(t1)
          expect(result).to.eql(true)
        },
        not: {
          www: () => {
            const t1 = 'https://craigabbott.co.uk'
            const result = urlRegex.test(t1)
            expect(result).to.eql(true)
          }
        }
      }
    },
    relative: () => {
      const t1 = '/blog/post'
      const result = urlRegex.test(t1)
      expect(result).to.eql(true)
    },
    localhost: () => {
      const t1 = 'http://localhost:3000'
      const result = urlRegex.test(t1)
      expect(result).to.eql(true)
    }
  }
}
