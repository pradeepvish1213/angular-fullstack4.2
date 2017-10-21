'use strict';
const angular = require('angular');

export class mycommponentComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.mycommponent', [])
  .component('mycommponent', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: mycommponentComponent
  })
  .name;
