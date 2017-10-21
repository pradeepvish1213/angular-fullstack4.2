'use strict';
const angular = require('angular');

export default angular.module('angularFullstackApp.myDirective', [])
  .directive('myDirective', function() {
    return {
      template: require('./myDirective.html'),
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
