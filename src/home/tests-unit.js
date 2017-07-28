'use strict';

const chai = require('chai');
const {get} = require('./functions');

const expect = chai.expect;

module.exports = () => {
  describe('Get /', () => {
    it('will render the view for the home page', () => {
      const req = {};
      const res = {
        render: (view, data) => {
          expect(data.title).to.equal('Home');
        }
      };
      get(req, res);
    });
  });
};
