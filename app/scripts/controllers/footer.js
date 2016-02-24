'use strict';

/**
 * @ngdoc function
 * @name angularjsExamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsExamApp
 */
angular.module('angularjsExamApp')
    .controller('FooterCtrl', function($scope, $state, $rootScope) {
        $scope.lgout = function() {
            $state.go('/home');
            $rootScope.showme = false;
            $rootScope.footerHide = false;
            $scope.username = '';

        };
    });
