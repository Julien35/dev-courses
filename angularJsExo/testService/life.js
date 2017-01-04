(function(window, undefined) {
    'use strict';

    angular
    .module('mr.activeLink', [])
    .directive('activeLink', ['$location', function($location) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {}
        };
    }]);
})(window);
