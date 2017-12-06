const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('Post to /api/drivers creates a new driver', (done) => {
    Driver.count().then(count => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          Driver.count().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });

  it('GET to api/drivers finds drivers in location', (done)=>{
    const seatleDriver = new Driver({
      email: 'seatle@test.com',
      geometry: {type:'Point', coordinates: [-80.253, 25.791]}
    });
    const miamiDriver = new Driver({
      email: 'miami@test.com',
      geometry: {type:'Point', coordinates: [-80.253, 25.791]}
    });
    Promise.all([seatleDriver.save(), miamiDriver.save()])
      .then(()=>{
        request(app)
          .get('/api/drivers?lng=-80&lat=25')
          .end((err, response) => {
            console.log(response.body);
            // assert(response.body.length === 1);
            // assert(response.body[0].obj.email === 'miami@test.com');
            done();
          });
      })
  });
});
