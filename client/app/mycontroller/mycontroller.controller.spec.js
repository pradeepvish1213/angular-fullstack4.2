'use strict';

describe('Controller: MycontrollerCtrl', function() {
  // load the controller's module
  beforeEach(module('angularFullstackApp.mycontroller'));

  var MycontrollerCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    MycontrollerCtrl = $controller('MycontrollerCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
