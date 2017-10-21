'use strict';

describe('Service: myService', function() {
  // load the service's module
  beforeEach(module('angularFullstackApp.myService'));

  // instantiate service
  var myService;
  beforeEach(inject(function(_myService_) {
    myService = _myService_;
  }));

  it('should do something', function() {
    expect(!!myService).to.be.true;
  });
});
