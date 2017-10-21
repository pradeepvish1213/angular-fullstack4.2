'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var myendpointMessageCtrlStub = {
  index: 'myendpointMessageCtrl.index',
  show: 'myendpointMessageCtrl.show',
  create: 'myendpointMessageCtrl.create',
  upsert: 'myendpointMessageCtrl.upsert',
  patch: 'myendpointMessageCtrl.patch',
  destroy: 'myendpointMessageCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var myendpointMessageIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './myendpoint_message.controller': myendpointMessageCtrlStub
});

describe('MyendpointMessage API Router:', function() {
  it('should return an express router instance', function() {
    expect(myendpointMessageIndex).to.equal(routerStub);
  });

  describe('GET /api/myendpoint_messages', function() {
    it('should route to myendpointMessage.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'myendpointMessageCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/myendpoint_messages/:id', function() {
    it('should route to myendpointMessage.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'myendpointMessageCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/myendpoint_messages', function() {
    it('should route to myendpointMessage.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'myendpointMessageCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/myendpoint_messages/:id', function() {
    it('should route to myendpointMessage.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'myendpointMessageCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/myendpoint_messages/:id', function() {
    it('should route to myendpointMessage.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'myendpointMessageCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/myendpoint_messages/:id', function() {
    it('should route to myendpointMessage.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'myendpointMessageCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
