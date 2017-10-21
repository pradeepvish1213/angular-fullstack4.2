'use strict';
const angular = require('angular');

/*@ngInject*/
export function mycontrollerController() {
  this.message = 'Hello';
}

export default angular.module('angularFullstackApp.mycontroller', [])
  .controller('MycontrollerController', mycontrollerController)
  .name;
