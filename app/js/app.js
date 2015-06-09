'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters'
  ]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/phones', {
      templateUrl: 'partials/phone-list.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    when('/highcharts', {
      templateUrl: 'partials/highcharts-test.html',
      controller: 'HighchartsCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
  }]);