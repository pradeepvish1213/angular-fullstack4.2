'use strict';
const angular = require('angular');

/*@ngInject*/
export function myfactoryService() {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    someMethod() {
      return meaningOfLife;
    }
  };
}


export default angular.module('angularFullstackApp.myfactory', [])
  .factory('myfactory', myfactoryService)
  .name;
