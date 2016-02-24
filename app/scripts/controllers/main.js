'use strict';

/**
 * @ngdoc function
 * @name angularjsExamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsExamApp
 */
angular.module('angularjsExamApp')
    .controller('MainCtrl', function($scope, $state) {

        $scope.lgFun = function() {
            $state.go('/login');
        };
    });
