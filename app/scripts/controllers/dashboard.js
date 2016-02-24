'use strict';

/**
 * @ngdoc function
 * @name angularjsExamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsExamApp
 */
angular.module('angularjsExamApp')
    .controller('DashboardCtrl', function($scope, $state, loginservice, $rootScope) {
        $scope.uname1 = loginservice.getProperty();
    });
