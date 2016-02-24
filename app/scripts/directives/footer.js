'use strict';
var app = angular.module('angularjsExamApp');
app.directive('footerDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/footer.html'
    };
});
