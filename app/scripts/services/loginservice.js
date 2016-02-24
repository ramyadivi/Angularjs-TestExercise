'use strict';
angular.module('angularjsExamApp')
    .service('loginservice', function() {
        var property = '';
        return {
            getProperty: function() {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });
