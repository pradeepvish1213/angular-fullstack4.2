'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './myroute.routes';

export class MyrouteComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('angularFullstackApp.myroute', [ngRoute])
  .config(routes)
  .component('myroute', {
    template: require('./myroute.html'),
    controller: MyrouteComponent,
    controllerAs: 'myrouteCtrl'
  })
  .name;
