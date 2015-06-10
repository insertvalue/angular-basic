'use strict';

/* App Module */
Headroom.options.offset = 200;
Headroom.options.classes = {
    initial: "animated",
    pinned: "fadeInDown",
    unpinned: "fadeOutUp",
    top: 'headroom--top',
    notTop: 'headroom--not-top'
};
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'headroom'
]);

phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            }).
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
                redirectTo: '/login'
            });
    }]);