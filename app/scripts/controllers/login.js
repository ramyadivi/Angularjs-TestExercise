'use strict';

/**
 * @ngdoc function
 * @name angularjsExamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsExamApp
 */
angular.module('angularjsExamApp')
    .controller('LoginCtrl', function($scope, $state, loginservice, $rootScope) {
        $scope.username;
        $rootScope.showme = false;
        $scope.submit = function() {
            $state.go('/dashboard');
            $rootScope.showme = true;
            $rootScope.footerHide = true;
            $scope.uname = loginservice.setProperty($scope.username);
        };
    })
    .filter('greetings', function() {
        return function(item) {
            return 'Hello ' + item;
        };
    });
