var supertest = require('supertest');
var should = require('should');
var app = require('./server');

describe('loading express', function() {
  var server = supertest.agent("http://localhost:4200");
  beforeEach(function() {
    server = require('./server');
  });

  afterEach(function() {
    server.close();
  });

  // it('responds to /api', function testSlash(done) {
  //     server
  //     .get('/api')
  //     .expect("Content-type", /json/)
  //     .expect(200) //this is HTTP response
  //     .end(function(err, res) {
  //       res.status.should.equal(200);
  //       res.body.error.should.equal(false);
  //       done();
  //     })
  // });

  it('responds to /api/chat/save', function(done) {
    supertest(app)
      .post('/api/chat/save')
      .send({"participant":{"nuid":"98ASDF988SDF89SDF89989SDF9898"}})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('participant');
        res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
        done();
      });
  });

  // it('404 everything else', function testPath(done) {
  //     server
  //     .get('/foo/bar')
  //     .expect(404, done);
  // })
})
