'use strict';

const chai = require('chai');

const expect = chai.expect;

module.exports = () => {
  describe('Test', () => {
    it('will pass', () => {
      expect(true).to.eql(true);
    });
  });
};
