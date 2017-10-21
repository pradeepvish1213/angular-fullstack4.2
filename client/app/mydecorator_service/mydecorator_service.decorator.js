'use strict';
const angular = require('angular');

/*@ngInject*/
export function mydecoratorServiceDecorator($delegate) {
  // decorate the $delegate
  return $delegate;
}

export default angular.module('angularFullstackApp.mydecorator_service', [])
  .config(function($provide) {
    $provide.decorator('mydecoratorService', mydecoratorServiceDecorator);
  })
  .name;
