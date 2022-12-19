import readTime from '../../src/utils/read-time.mjs'
import fs from 'fs-jetpack'

import { expect } from 'chai'

const pathToTwoMinuteString = 'test/assets/utils/2-minute-string.txt'
const pathToOneMinuteString = 'test/assets/utils/1-minute-string.txt'
const oneMinuteString = fs.read(pathToOneMinuteString)
const twoMinuteString = fs.read(pathToTwoMinuteString)

export default {
  string: {
    is: {
      equal: {
        to: (time) => {
          if (time === 1) {
            const result = readTime.forString(oneMinuteString)
            expect(result).to.eql('1 minute')
          } else {
            const result = readTime.forString(twoMinuteString)
            expect(result).to.eql('2 minutes')
          }
        }
      }
    }
  },
  file: {
    is: {
      equal: {
        to: (time) => {
          if (time === 1) {
            const result = readTime.forFile(pathToOneMinuteString)
            expect(result).to.eql('1 minute')
          } else {
            const result = readTime.forFile(pathToTwoMinuteString)
            expect(result).to.eql('2 minutes')
          }
        }
      }
    }
  }
}
