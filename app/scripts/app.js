'use strict';

/**
 * @ngdoc overview
 * @name angularjsExamApp
 * @description
 * # angularjsExamApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angularjsExamApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ]);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('/home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('/login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .state('/dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        });


});

app.controller('homeCtrl', function($scope, loginservice) {
    $scope.fnChange = function() {
        $scope.uname2 = loginservice.getProperty();
    };
});
