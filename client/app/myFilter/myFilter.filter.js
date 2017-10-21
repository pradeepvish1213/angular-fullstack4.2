'use strict';
const angular = require('angular');

/*@ngInject*/
export function myFilterFilter() {
  return function(input) {
    return `myFilter filter: ${input}`;
  };
}


export default angular.module('angularFullstackApp.myFilter', [])
  .filter('myFilter', myFilterFilter)
  .name;
