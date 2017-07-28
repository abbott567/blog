'use strict';

const chai = require('chai');
const {get} = require('./functions');

const expect = chai.expect;

module.exports = () => {
  describe('Get /article', () => {
    it('will render the view for an article', () => {
      const req = {};
      const res = {
        render: (view, data) => {
          expect(data.title).to.equal('Article');
        }
      };
      get(req, res);
    });
  });
};
