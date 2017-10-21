'use strict';

describe('Service: myprovider', function() {
  // load the service's module
  beforeEach(module('angularFullstackApp.myprovider'));

  // instantiate service
  var myprovider;
  beforeEach(inject(function(_myprovider_) {
    myprovider = _myprovider_;
  }));

  it('should do something', function() {
    expect(!!myprovider).to.be.true;
  });
});
