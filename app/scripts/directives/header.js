'use strict';
var app = angular.module('angularjsExamApp');
app.directive('headerDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/header.html',
    };
});
