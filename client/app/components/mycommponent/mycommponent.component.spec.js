'use strict';

describe('Component: mycommponent', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.mycommponent'));

  var mycommponentComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    mycommponentComponent = $componentController('mycommponent', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
