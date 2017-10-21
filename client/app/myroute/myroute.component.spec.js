'use strict';

describe('Component: MyrouteComponent', function() {
  // load the controller's module
  beforeEach(module('angularFullstackApp.myroute'));

  var MyrouteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MyrouteComponent = $componentController('myroute', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
