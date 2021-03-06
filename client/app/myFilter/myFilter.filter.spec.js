'use strict';

describe('Filter: myFilter', function() {
  // load the filter's module
  beforeEach(module('angularFullstackApp.myFilter'));

  // initialize a new instance of the filter before each test
  var myFilter;
  beforeEach(inject(function($filter) {
    myFilter = $filter('myFilter');
  }));

  it('should return the input prefixed with "myFilter filter:"', function() {
    var text = 'angularjs';
    expect(myFilter(text)).to.equal('myFilter filter: ' + text);
  });
});
