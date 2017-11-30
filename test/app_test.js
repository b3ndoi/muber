const assert = require('assert');
const reqest = require('supertest');
const app = require('../app');
describe('The express app', () => {
  it('handles a GET reqest', (done)=>{
    reqest(app)
      .get('/api')
      .end((err, response)=>{
        assert(response.body.hi === 'There');
        done();
      });
  });
});
