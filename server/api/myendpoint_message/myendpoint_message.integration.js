'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newMyendpointMessage;

describe('MyendpointMessage API:', function() {
  describe('GET /api/myendpoint_messages', function() {
    var myendpointMessages;

    beforeEach(function(done) {
      request(app)
        .get('/api/myendpoint_messages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          myendpointMessages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(myendpointMessages).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/myendpoint_messages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/myendpoint_messages')
        .send({
          name: 'New MyendpointMessage',
          info: 'This is the brand new myendpointMessage!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newMyendpointMessage = res.body;
          done();
        });
    });

    it('should respond with the newly created myendpointMessage', function() {
      expect(newMyendpointMessage.name).to.equal('New MyendpointMessage');
      expect(newMyendpointMessage.info).to.equal('This is the brand new myendpointMessage!!!');
    });
  });

  describe('GET /api/myendpoint_messages/:id', function() {
    var myendpointMessage;

    beforeEach(function(done) {
      request(app)
        .get(`/api/myendpoint_messages/${newMyendpointMessage._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          myendpointMessage = res.body;
          done();
        });
    });

    afterEach(function() {
      myendpointMessage = {};
    });

    it('should respond with the requested myendpointMessage', function() {
      expect(myendpointMessage.name).to.equal('New MyendpointMessage');
      expect(myendpointMessage.info).to.equal('This is the brand new myendpointMessage!!!');
    });
  });

  describe('PUT /api/myendpoint_messages/:id', function() {
    var updatedMyendpointMessage;

    beforeEach(function(done) {
      request(app)
        .put(`/api/myendpoint_messages/${newMyendpointMessage._id}`)
        .send({
          name: 'Updated MyendpointMessage',
          info: 'This is the updated myendpointMessage!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedMyendpointMessage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMyendpointMessage = {};
    });

    it('should respond with the updated myendpointMessage', function() {
      expect(updatedMyendpointMessage.name).to.equal('Updated MyendpointMessage');
      expect(updatedMyendpointMessage.info).to.equal('This is the updated myendpointMessage!!!');
    });

    it('should respond with the updated myendpointMessage on a subsequent GET', function(done) {
      request(app)
        .get(`/api/myendpoint_messages/${newMyendpointMessage._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let myendpointMessage = res.body;

          expect(myendpointMessage.name).to.equal('Updated MyendpointMessage');
          expect(myendpointMessage.info).to.equal('This is the updated myendpointMessage!!!');

          done();
        });
    });
  });

  describe('PATCH /api/myendpoint_messages/:id', function() {
    var patchedMyendpointMessage;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/myendpoint_messages/${newMyendpointMessage._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched MyendpointMessage' },
          { op: 'replace', path: '/info', value: 'This is the patched myendpointMessage!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedMyendpointMessage = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedMyendpointMessage = {};
    });

    it('should respond with the patched myendpointMessage', function() {
      expect(patchedMyendpointMessage.name).to.equal('Patched MyendpointMessage');
      expect(patchedMyendpointMessage.info).to.equal('This is the patched myendpointMessage!!!');
    });
  });

  describe('DELETE /api/myendpoint_messages/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/myendpoint_messages/${newMyendpointMessage._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when myendpointMessage does not exist', function(done) {
      request(app)
        .delete(`/api/myendpoint_messages/${newMyendpointMessage._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
