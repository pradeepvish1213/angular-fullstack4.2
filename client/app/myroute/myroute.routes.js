'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/myroute', {
      template: '<myroute></myroute>'
    });
}
